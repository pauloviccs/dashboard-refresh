import { useState } from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import {
  Monitor,
  LayoutGrid,
  List,
  Link2,
  MoreVertical,
  Trash2,
  RefreshCw,
} from "lucide-react";

interface Device {
  id: string;
  name: string;
  code: string;
  playlist: string;
  status: "online" | "offline";
}

const devices: Device[] = [
  { id: "1", name: "Mozila", code: "MB6-ZLY", playlist: "Olimpo - Crisópolis - Completo", status: "online" },
  { id: "2", name: "Olimpo - Crisópolis", code: "PEJ-7JB", playlist: "Olimpo - Crisópolis - Completo", status: "online" },
  { id: "3", name: "LG webOS", code: "CAT-M2B", playlist: "Olimpo - Crisópolis - Completo", status: "online" },
  { id: "4", name: "Chrome", code: "3CG-AVH", playlist: "Olimpo - Crisópolis - Completo", status: "online" },
];

export default function Telas() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <MainLayout>
      <Header title="Telas" subtitle="Gerencie seus dispositivos conectados" />

      {/* Toolbar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-all ${
              viewMode === "grid" ? "bg-lumen-accent text-white" : "text-white/50 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-all ${
              viewMode === "list" ? "bg-lumen-accent text-white" : "text-white/50 hover:text-white"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-white/50 text-sm">{devices.length} total</span>
          <button className="btn-primary-glow flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            <span>Parear Nova Tela</span>
          </button>
        </div>
      </motion.div>

      {/* Devices Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card mb-4"
      >
        <div className="p-4 border-b border-white/5">
          <h3 className="font-display font-semibold text-white">
            Dispositivos Conectados
          </h3>
        </div>

        {/* Device List */}
        <div className="divide-y divide-white/5">
          {devices.map((device, index) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className="p-4 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Monitor className="w-5 h-5 text-white/60" />
                </div>

                {/* Device Info */}
                <div className="flex-1">
                  <h4 className="font-medium text-white">{device.name}</h4>
                  <p className="text-sm text-white/40">
                    <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-white/60">
                      {device.code}
                    </span>
                    <span className="mx-2">•</span>
                    Playlist: 
                    <span className="text-white/60 ml-1">{device.playlist}</span>
                  </p>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-lumen-success/20 text-lumen-success border border-lumen-success/30">
                    ONLINE
                  </span>
                  
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-lumen-error/20 text-white/40 hover:text-lumen-error transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
}
