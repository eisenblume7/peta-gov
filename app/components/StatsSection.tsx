import {
  Building2,
  CheckCircle2,
  Clock,
  Users,
  LucideIcon,
} from "lucide-react";
import React from "react";

interface StatItem {
  icon: React.ReactElement<LucideIcon>;
  value: string;
  label: string;
  description?: string;
}

const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "500+",
      label: "Proyek Aktif",
      description: "Proyek pembangunan aktif di seluruh Surabaya",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "1M+",
      label: "Pengguna",
      description: "Pengguna aktif mengakses platform setiap bulan",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      value: "98%",
      label: "Tingkat Akurasi",
      description: "Akurasi data dan informasi yang tersedia",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "Dukungan",
      description: "Layanan dukungan pengguna yang selalu siap",
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Statistik Platform
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Perkembangan dan pencapaian platform PetaGov dalam mendukung
            transparansi proyek pemerintah
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl 
                         hover:bg-white/20 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 
                            rounded-full bg-white/20 text-white mb-4
                            group-hover:scale-110 transition-transform duration-300"
              >
                {stat.icon}
              </div>

              {/* Value and Label */}
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/80">
                  {stat.label}
                </div>
              </div>

              {/* Hover Description */}
              {stat.description && (
                <div
                  className="absolute inset-0 flex items-center justify-center
                              bg-gradient-to-r from-green-700 to-teal-700
                              rounded-2xl opacity-0 group-hover:opacity-100
                              transition-opacity duration-300"
                >
                  <p className="text-sm text-white px-4 text-center">
                    {stat.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
