import { motion } from "framer-motion";
import { Monitor, ChevronRight } from "lucide-react";

interface Screen {
  id: string;
  name: string;
  type: string;
  ip: string;
  playlist: string;
  status: "online" | "offline" | "syncing";
  lastSeen: string;
}

const screens: Screen[] = [
  {
    id: "1",
    name: "Recepção Hall A",
    type: "LG WebOS",
    ip: "192.168.0.104",
    playlist: "Institucional V2",
    status: "online",
    lastSeen: "Online há 4d",
  },
  {
    id: "2",
    name: "Cafeteria Menu Board",
    type: "Android TV",
    ip: "192.168.0.105",
    playlist: "Promo Café",
    status: "online",
    lastSeen: "Online há 2h",
  },
  {
    id: "3",
    name: "Corredor Norte",
    type: "Samsung Tizen",
    ip: "192.168.0.110",
    playlist: "Padrão",
    status: "offline",
    lastSeen: "Sem sinal (15m)",
  },
];

const statusClasses = {
  online: "status-online",
  offline: "status-offline",
  syncing: "status-syncing",
};

export function RecentScreens() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="glass-card"
    >
      <div className="flex items-center justify-between p-6 border-b border-white/5">
        <h3 className="text-lg font-display font-semibold text-white">
          Telas Recentes
        </h3>
        <button className="flex items-center gap-1 text-sm text-white/50 hover:text-lumen-accent transition-colors group">
          Ver todas
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="divide-y divide-white/5">
        {screens.map((screen, index) => (
          <motion.div
            key={screen.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                <Monitor className="w-5 h-5 text-white/60" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-white truncate">
                    {screen.name}
                  </h4>
                  <div className={statusClasses[screen.status]} />
                </div>
                <p className="text-sm text-white/40 mt-0.5">
                  {screen.type} • {screen.ip}
                </p>
              </div>

              {/* Playlist & Status */}
              <div className="text-right">
                <p className="text-sm text-white/70">
                  Playlist: {screen.playlist}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    screen.status === "online"
                      ? "text-lumen-success"
                      : screen.status === "offline"
                      ? "text-lumen-error"
                      : "text-lumen-warning"
                  }`}
                >
                  {screen.lastSeen}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
