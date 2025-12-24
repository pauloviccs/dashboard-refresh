import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { User, Server, Copy, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Ajustes() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <MainLayout>
      <Header title="Ajustes" subtitle="Configurações do sistema" />

      <div className="space-y-6 max-w-4xl">
        {/* Account Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
        >
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-lumen-accent" />
              <h3 className="text-lg font-display font-semibold text-white">
                Conta
              </h3>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-lumen-accent uppercase tracking-wider mb-2">
                LOGADO COMO
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white">p4ulera4@gmail.com</span>
                </div>
                <span className="px-3 py-1 rounded-lg bg-lumen-accent/20 text-lumen-accent text-xs font-semibold uppercase">
                  EMAIL
                </span>
              </div>
            </div>

            {/* User ID */}
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                ID DO USUÁRIO
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm">
                  <span className="text-white/70">UID: 69c6fa45-d5ee-490e-b2f5-6ff40809bb08</span>
                </div>
                <button
                  onClick={() => copyToClipboard("69c6fa45-d5ee-490e-b2f5-6ff40809bb08", "uid")}
                  className="p-3 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  {copied === "uid" ? (
                    <CheckCircle className="w-5 h-5 text-lumen-success" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-white/50 text-xs font-semibold uppercase">
                  UID
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
        >
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-lumen-accent" />
              <h3 className="text-lg font-display font-semibold text-white">
                Sistema
              </h3>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* App Version */}
              <div>
                <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                  VERSÃO DO APP
                </label>
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-white font-medium">v1.0.0</span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-lumen-accent/20 text-lumen-accent text-xs font-semibold">
                    Beta
                  </span>
                </div>
              </div>

              {/* Asset Server */}
              <div>
                <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">
                  SERVIDOR DE ASSETS
                </label>
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-white">Online (Porta 11222)</span>
                  <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-lumen-success/20 text-lumen-success text-xs font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-lumen-success animate-pulse" />
                    STATUS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Docs Link */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card-hover p-6 flex items-center justify-between group cursor-pointer"
        >
          <div>
            <h3 className="text-lg font-display font-semibold text-white group-hover:text-gradient transition-all">
              Documentação
            </h3>
            <p className="text-white/50 text-sm mt-1">
              Acesse guias e tutoriais para o LumenDS
            </p>
          </div>
          <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-lumen-accent transition-colors" />
        </motion.a>
      </div>
    </MainLayout>
  );
}
