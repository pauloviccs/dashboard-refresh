import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import { KPICard } from "@/components/dashboard/KPICard";
import { NetworkChart } from "@/components/dashboard/NetworkChart";
import { RecentScreens } from "@/components/dashboard/RecentScreens";
import { SystemHealth } from "@/components/dashboard/SystemHealth";
import { Monitor, HardDrive, ListVideo, Eye } from "lucide-react";

const Index = () => {
  const [chartPeriod, setChartPeriod] = useState<"24h" | "7d" | "30d">("24h");

  return (
    <MainLayout>
      <Header title="Visão Geral" subtitle="Status em tempo real da rede" />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          label="Telas Ativas"
          value="42"
          subValue="92% Online"
          trend={{ value: "3", isPositive: true }}
          icon={Monitor}
          delay={0}
        />
        <KPICard
          label="Armazenamento"
          value="128GB"
          subValue="64% Utilizado"
          icon={HardDrive}
          delay={0.05}
        />
        <KPICard
          label="Playlists"
          value="15"
          subValue="2 agendadas p/ hoje"
          icon={ListVideo}
          delay={0.1}
        />
        <KPICard
          label="Impressões"
          value="2.4M"
          subValue="Últimos 30 dias"
          trend={{ value: "12%", isPositive: true }}
          icon={Eye}
          delay={0.15}
        />
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <NetworkChart period={chartPeriod} onPeriodChange={setChartPeriod} />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentScreens />
        </div>
        <div>
          <SystemHealth />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
