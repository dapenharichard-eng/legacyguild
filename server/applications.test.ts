import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("applications router", () => {
  it("should submit an application", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.applications.submit({
      name: "Test User",
      discord: "testuser#1234",
      whatsapp: "+55 11 99999-9999",
      level: 50,
      rank: "Diamante",
    });

    expect(result).toBeDefined();
    expect(result.name).toBe("Test User");
    expect(result.status).toBe("pending");
  });

  it("should list applications only for admin", async () => {
    const adminCtx = createAdminContext();
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.applications.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should reject non-admin trying to list applications", async () => {
    const publicCtx = createPublicContext();
    const caller = appRouter.createCaller(publicCtx);

    try {
      await caller.applications.list();
      expect.fail("Should have thrown an error");
    } catch (error) {
      expect((error as Error).message).toContain("Please login");
    }
  });

  it("should update application status only for admin", async () => {
    const adminCtx = createAdminContext();
    const adminCaller = appRouter.createCaller(adminCtx);

    const submitted = await appRouter.createCaller(createPublicContext()).applications.submit({
      name: "Test User 2",
      discord: "testuser2#1234",
      whatsapp: "+55 11 99999-9999",
      level: 45,
      rank: "Platina",
    });

    const updated = await adminCaller.applications.updateStatus({
      id: submitted.id,
      status: "accepted",
    });

    expect(updated.status).toBe("accepted");
  });
});
