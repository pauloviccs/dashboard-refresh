import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { Play, Calendar, Edit3, Plus } from "lucide-react";

interface Playlist {
  id: string;
  name: string;
  date: string;
  items: number;
}

const playlists: Playlist[] = [
  { id: "1", name: "Olimpo - Crisópolis - Completo", date: "23/12/2025", items: 1 },
  { id: "2", name: "Olimpo - Crisópolis", date: "22/12/2025", items: 8 },
];

export default function Playlists() {
  return (
    <MainLayout>
      <Header title="Playlists" subtitle="Crie e organize sua programação" />

      {/* Create New */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end mb-6"
      >
        <button className="btn-primary-glow flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Nova Playlist</span>
        </button>
      </motion.div>

      {/* Playlist List */}
      <div className="space-y-4">
        {playlists.map((playlist, index) => (
          <motion.div
            key={playlist.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="glass-card-hover p-6 cursor-pointer group"
          >
            <div className="flex items-center gap-6">
              {/* Play Button */}
              <button className="p-4 rounded-2xl bg-lumen-gradient shadow-glow opacity-80 group-hover:opacity-100 transition-opacity">
                <Play className="w-6 h-6 text-white fill-white" />
              </button>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-display font-semibold text-white group-hover:text-gradient transition-all">
                  {playlist.name}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {playlist.date}
                  </span>
                  <span>•</span>
                  <span>{playlist.items} itens</span>
                </div>
              </div>

              {/* Actions */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                <Edit3 className="w-4 h-4" />
                <span className="text-sm font-medium">EDITAR</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </MainLayout>
  );
}
