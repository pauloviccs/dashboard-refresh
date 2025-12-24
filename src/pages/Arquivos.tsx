import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { Header } from "@/components/layout/Header";
import {
  FolderOpen,
  Upload,
  Plus,
  ChevronLeft,
  Film,
  Image as ImageIcon,
} from "lucide-react";

interface MediaFile {
  id: string;
  name: string;
  type: "video" | "image";
  thumbnail: string;
}

const files: MediaFile[] = [
  { id: "1", name: "Olimpo - Tela 0 - Logo.mp4", type: "video", thumbnail: "" },
  { id: "2", name: "Olimpo - Tela 1 - Monte seu Açaí.mp4", type: "video", thumbnail: "" },
  { id: "3", name: "Olimpo - Tela 2 - AD - Pede um Açaí.mp4", type: "video", thumbnail: "" },
  { id: "4", name: "Olimpo - Tela 3 Menuboard - Açaí e Cremes.mp4", type: "video", thumbnail: "" },
  { id: "5", name: "Olimpo - Tela 4 Menuboard - Sorvetes.mp4", type: "video", thumbnail: "" },
  { id: "6", name: "Olimpo - Tela 5 - AD - Sorbete Sabor de Outro Mundo.mp4", type: "video", thumbnail: "" },
];

export default function Arquivos() {
  return (
    <MainLayout>
      <Header title="Arquivos" subtitle="Upload e gerenciamento de mídia" />

      {/* Breadcrumb & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <span className="text-xs font-semibold text-lumen-accent uppercase tracking-wider">
              LOCAL
            </span>
            <span className="text-white/60">/</span>
            <span className="text-white font-medium">root/Olimpo</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="glass-button flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Nova Pasta</span>
          </button>
          <button className="btn-primary-glow flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Importar Mídia</span>
          </button>
        </div>
      </motion.div>

      {/* Drop Zone + Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative rounded-3xl border-2 border-dashed border-white/10 hover:border-lumen-accent/30 transition-colors p-8 min-h-[500px]"
      >
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Folder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="aspect-square glass-card-hover flex flex-col items-center justify-center gap-3 cursor-pointer group"
          >
            <FolderOpen className="w-10 h-10 text-white/40 group-hover:text-lumen-accent transition-colors" />
            <span className="text-sm text-white/60">Pasta</span>
          </motion.div>

          {/* Media Files */}
          {files.map((file, index) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + index * 0.03 }}
              className="aspect-square glass-card-hover overflow-hidden cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="w-full h-3/4 bg-gradient-to-br from-lumen-accent/20 to-lumen-accent-light/20 flex items-center justify-center">
                <Film className="w-8 h-8 text-white/30" />
              </div>
              
              {/* File Info */}
              <div className="p-2">
                <p className="text-xs text-white/70 truncate">{file.name}</p>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-lumen-warning" style={{ width: '60%' }} />
            </motion.div>
          ))}
        </div>

        {/* Empty State Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0">
          <Upload className="w-12 h-12 text-white/20 mb-4" />
          <p className="text-white/40 text-lg">Arraste arquivos aqui</p>
        </div>
      </motion.div>
    </MainLayout>
  );
}
