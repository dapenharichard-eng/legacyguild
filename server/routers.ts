import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createApplication, getApplications, updateApplicationStatus } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  applications: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        discord: z.string().min(1),
        whatsapp: z.string().min(1),
        level: z.number().min(1).max(999),
        rank: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        return await createApplication({
          name: input.name,
          discord: input.discord,
          whatsapp: input.whatsapp,
          level: input.level,
          rank: input.rank,
          status: "pending",
        });
      }),
    
    list: protectedProcedure
      .query(async ({ ctx }) => {
        // Only admin can view applications
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await getApplications();
      }),
    
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "accepted", "rejected"]),
      }))
      .mutation(async ({ input, ctx }) => {
        // Only admin can update applications
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized");
        }
        return await updateApplicationStatus(input.id, input.status);
      }),
  }),
});

export type AppRouter = typeof appRouter;
