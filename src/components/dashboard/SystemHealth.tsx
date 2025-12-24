import { motion } from "framer-motion";
import { Activity, CheckCircle } from "lucide-react";

export function SystemHealth() {
  const healthPercentage = 98;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="glass-card p-6 text-center"
    >
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={264}
            initial={{ strokeDashoffset: 264 }}
            animate={{ strokeDashoffset: 264 - (264 * healthPercentage) / 100 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(239, 58%, 59%)" />
              <stop offset="100%" stopColor="hsl(142, 69%, 58%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-display font-bold text-white">
            {healthPercentage}%
          </span>
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Saúde
          </span>
        </div>
      </div>

      <h3 className="text-lg font-display font-semibold text-white mb-2">
        Sistema Operacional
      </h3>

      <div className="flex items-center justify-center gap-2 text-lumen-success">
        <CheckCircle className="w-4 h-4" />
        <span className="text-sm">Todos os serviços rodando normalmente</span>
      </div>

      <button className="mt-4 text-sm text-white/50 hover:text-lumen-accent transition-colors flex items-center gap-1 mx-auto">
        <Activity className="w-4 h-4" />
        Ver Logs
      </button>
    </motion.div>
  );
}
