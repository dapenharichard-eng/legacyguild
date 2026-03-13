/* =============================================================
   LEGACY GUILD — Admin Dashboard
   Design: Dashboard para gerenciar candidaturas com filtros
   ============================================================= */
import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, LogOut, Check, X, Filter } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

type FilterStatus = "all" | "pending" | "accepted" | "rejected";

export default function AdminDashboard() {
  const { user, logout, loading: authLoading } = useAuth();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");

  const { data: applications, isLoading, refetch } = trpc.applications.list.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const updateStatusMutation = trpc.applications.updateStatus.useMutation({
    onSuccess: () => {
      refetch();
    },
  });

  // Filtrar candidaturas por status
  const filteredApplications = useMemo(() => {
    if (!applications) return [];
    if (filterStatus === "all") return applications;
    return applications.filter((app) => app.status === filterStatus);
  }, [applications, filterStatus]);

  // Contar candidaturas por status
  const statusCounts = useMemo(() => {
    if (!applications) return { all: 0, pending: 0, accepted: 0, rejected: 0 };
    return {
      all: applications.length,
      pending: applications.filter((app) => app.status === "pending").length,
      accepted: applications.filter((app) => app.status === "accepted").length,
      rejected: applications.filter((app) => app.status === "rejected").length,
    };
  }, [applications]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1107992278") {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError("Senha incorreta");
      setPassword("");
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.05_0.02_240)]">
        <Loader2 className="animate-spin text-[oklch(0.72_0.26_220)]" size={40} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.05_0.02_240)] p-4">
        <Card className="w-full max-w-md bg-[oklch(0.06_0.02_240/0.8)] border-[oklch(0.72_0.26_220/0.3)]">
          <div className="p-8">
            <h1 className="font-['Orbitron'] font-black text-2xl text-white mb-2 text-center">
              Dashboard
            </h1>
            <p className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)] text-center mb-6">
              Candidaturas da Guilda Legacy
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="font-['Exo_2'] text-xs text-[oklch(0.72_0.26_220)] uppercase tracking-wider block mb-2">
                  Senha de Acesso
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                  className="bg-[oklch(0.06_0.02_240)] border-[oklch(0.72_0.26_220/0.3)] text-white"
                />
                {passwordError && (
                  <p className="font-['Exo_2'] text-xs text-red-500 mt-2">{passwordError}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[oklch(0.72_0.26_220)] text-[oklch(0.05_0.02_240)] font-['Orbitron'] font-bold"
              >
                Entrar
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.05_0.02_240)] p-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-4">
          <div>
            <h1 className="font-['Orbitron'] font-black text-3xl text-white mb-1">
              Dashboard de Candidaturas
            </h1>
            <p className="font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">
              Gerenciar candidaturas da guilda Legacy
            </p>
          </div>
          <Button
            onClick={() => {
              logout();
              setIsAuthenticated(false);
              setPassword("");
            }}
            variant="outline"
            className="border-[oklch(0.72_0.26_220/0.6)] text-[oklch(0.72_0.26_220)] hover:bg-[oklch(0.72_0.26_220/0.08)]"
          >
            <LogOut size={16} className="mr-2" />
            Sair
          </Button>
        </div>

        {/* Filter Section */}
        <div className="mb-6 p-4 bg-[oklch(0.06_0.02_240/0.5)] border border-[oklch(0.72_0.26_220/0.2)] rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={18} className="text-[oklch(0.72_0.26_220)]" />
            <h2 className="font-['Orbitron'] font-bold text-sm text-[oklch(0.72_0.26_220)] uppercase">
              Filtrar por Status
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setFilterStatus("all")}
              className={`font-['Exo_2'] text-xs uppercase transition-all ${
                filterStatus === "all"
                  ? "bg-[oklch(0.72_0.26_220)] text-[oklch(0.05_0.02_240)]"
                  : "bg-[oklch(0.06_0.02_240)] border border-[oklch(0.72_0.26_220/0.3)] text-[oklch(0.72_0.26_220)] hover:bg-[oklch(0.72_0.26_220/0.1)]"
              }`}
            >
              Todas ({statusCounts.all})
            </Button>

            <Button
              onClick={() => setFilterStatus("pending")}
              className={`font-['Exo_2'] text-xs uppercase transition-all ${
                filterStatus === "pending"
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-600/30"
              }`}
            >
              Pendentes ({statusCounts.pending})
            </Button>

            <Button
              onClick={() => setFilterStatus("accepted")}
              className={`font-['Exo_2'] text-xs uppercase transition-all ${
                filterStatus === "accepted"
                  ? "bg-green-600 text-white"
                  : "bg-green-600/20 border border-green-500/30 text-green-400 hover:bg-green-600/30"
              }`}
            >
              Aceitas ({statusCounts.accepted})
            </Button>

            <Button
              onClick={() => setFilterStatus("rejected")}
              className={`font-['Exo_2'] text-xs uppercase transition-all ${
                filterStatus === "rejected"
                  ? "bg-red-600 text-white"
                  : "bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30"
              }`}
            >
              Rejeitadas ({statusCounts.rejected})
            </Button>
          </div>
        </div>

        {/* Applications Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-[oklch(0.72_0.26_220)]" size={40} />
          </div>
        ) : filteredApplications && filteredApplications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[oklch(0.72_0.26_220/0.2)]">
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Nome
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Discord
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    WhatsApp
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Level
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Patente
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-['Orbitron'] font-bold text-xs text-[oklch(0.72_0.26_220)] uppercase">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((app) => (
                  <tr
                    key={app.id}
                    className="border-b border-[oklch(0.72_0.26_220/0.1)] hover:bg-[oklch(0.72_0.26_220/0.05)]"
                  >
                    <td className="py-3 px-4 font-['Exo_2'] text-sm text-white">
                      {app.name}
                    </td>
                    <td className="py-3 px-4 font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">
                      {app.discord}
                    </td>
                    <td className="py-3 px-4 font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">
                      {app.whatsapp}
                    </td>
                    <td className="py-3 px-4 font-['Share_Tech_Mono'] text-sm text-[oklch(0.78_0.28_210)]">
                      {app.level}
                    </td>
                    <td className="py-3 px-4 font-['Exo_2'] text-sm text-[oklch(0.65_0.05_220)]">
                      {app.rank}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`font-['Share_Tech_Mono'] text-xs px-2 py-1 rounded-sm uppercase ${
                          app.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : app.status === "accepted"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {app.status === "pending"
                          ? "Pendente"
                          : app.status === "accepted"
                          ? "Aceito"
                          : "Rejeitado"}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      {app.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            onClick={() =>
                              updateStatusMutation.mutate({
                                id: app.id,
                                status: "accepted",
                              })
                            }
                            disabled={updateStatusMutation.isPending}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Check size={14} />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() =>
                              updateStatusMutation.mutate({
                                id: app.id,
                                status: "rejected",
                              })
                            }
                            disabled={updateStatusMutation.isPending}
                            className="bg-red-600 hover:bg-red-700 text-white"
                          >
                            <X size={14} />
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-['Exo_2'] text-[oklch(0.65_0.05_220)]">
              {filterStatus === "all"
                ? "Nenhuma candidatura recebida ainda"
                : `Nenhuma candidatura ${
                    filterStatus === "pending"
                      ? "pendente"
                      : filterStatus === "accepted"
                      ? "aceita"
                      : "rejeitada"
                  }`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
