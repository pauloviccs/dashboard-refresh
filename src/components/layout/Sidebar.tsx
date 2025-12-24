import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Monitor,
  ListVideo,
  FolderOpen,
  Settings,
  LogOut,
  Wifi,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/telas", icon: Monitor, label: "Telas" },
  { to: "/playlists", icon: ListVideo, label: "Playlists" },
  { to: "/arquivos", icon: FolderOpen, label: "Arquivos" },
  { to: "/ajustes", icon: Settings, label: "Ajustes" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-white/5 backdrop-blur-xl z-50"
      style={{
        background: "linear-gradient(180deg, hsla(240, 20%, 8%, 0.95) 0%, hsla(240, 20%, 5%, 0.98) 100%)",
      }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lumen-gradient flex items-center justify-center shadow-glow">
            <Monitor className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-white tracking-tight">
              LumenDS
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium">
              Digital Signage
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`nav-item group relative ${isActive ? "active" : ""}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl bg-lumen-accent/15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <item.icon
                className={`w-5 h-5 relative z-10 transition-colors ${
                  isActive ? "text-lumen-accent" : "text-white/40 group-hover:text-white/70"
                }`}
              />
              <span
                className={`relative z-10 transition-colors ${
                  isActive ? "text-white" : "text-white/60 group-hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-white/5">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lumen-accent to-lumen-accent-light flex items-center justify-center">
                <span className="text-white font-semibold text-sm">P4</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-lumen-success border-2 border-lumen-bg" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">p4ulera4</p>
              <div className="flex items-center gap-1.5 text-xs text-white/50">
                <Wifi className="w-3 h-3" />
                <span>Online</span>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-white/40 hover:text-white/70">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
