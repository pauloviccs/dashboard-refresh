import { Bell, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex items-center justify-between mb-8"
    >
      <div>
        <h1 className="text-3xl font-display font-bold text-white tracking-tight">
          {title}
        </h1>
        <p className="text-white/50 mt-1">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button className="relative p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-200 group">
          <Bell className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-lumen-accent animate-pulse" />
        </button>

        {/* New Playlist Button */}
        <button className="btn-primary-glow flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span className="font-semibold">Nova Playlist</span>
        </button>
      </div>
    </motion.header>
  );
}
