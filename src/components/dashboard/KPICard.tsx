import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  subValue?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
  delay?: number;
}

export function KPICard({ label, value, subValue, trend, icon: Icon, delay = 0 }: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="kpi-card group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-lumen-accent/10 border border-lumen-accent/20 group-hover:bg-lumen-accent/15 transition-colors">
          <Icon className="w-5 h-5 text-lumen-accent" />
        </div>
        {trend && (
          <div className={trend.isPositive ? "kpi-trend-up" : "kpi-trend-down"}>
            {trend.isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>{trend.value}</span>
          </div>
        )}
      </div>

      <div>
        <p className="kpi-label mb-2">{label}</p>
        <p className="kpi-value">{value}</p>
        {subValue && (
          <p className="text-sm text-white/50 mt-1">{subValue}</p>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-lumen-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
