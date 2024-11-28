import React from "react";
import Image from "next/image";
import { ChevronRight, MapPin, Building2, Users } from "lucide-react";

const Hero = () => {
  const stats = [
    {
      icon: <MapPin className="w-6 h-6" />,
      value: "500+",
      label: "Lokasi Proyek",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "100+",
      label: "Instansi Terkait",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "1M+",
      label: "Pengguna Aktif",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Content */}
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-1.5 text-sm font-medium text-green-800">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Platform Pemetaan Interaktif
            </div>

            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                PetaGov
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Platform peta interaktif yang dikembangkan oleh Pemerintah
              Surabaya untuk memudahkan akses informasi tentang proyek dan
              investasi pemerintah. Jelajahi inisiatif pembangunan dan pahami
              dampaknya bagi masyarakat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
                Jelajahi Peta
              </button>
              <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition duration-200 inline-flex items-center justify-center">
                Pelajari Selengkapnya
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src="/surabaya-map.png"
                alt="Peta Interaktif Pemerintah Kota Surabaya"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-20">
                <h2 className="text-lg font-semibold text-gray-900">
                  Peta Interaktif Kota Surabaya
                </h2>
                <p className="text-sm text-gray-600">
                  Klik untuk melihat detail proyek dan investasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
