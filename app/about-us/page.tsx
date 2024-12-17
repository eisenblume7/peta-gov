import React from "react";
import {
  Target,
  Rocket,
  Award,
  Heart,
  Lightbulb,
  Users,
  Shield,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aria Wijaya",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Seorang entrepreneur berpengalaman dengan passion di bidang investasi berkelanjutan.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Budi Santoso",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ahli teknologi dengan pengalaman lebih dari 15 tahun di industri fintech.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Citra Dewi",
    role: "Head of Investment Strategy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pakar investasi dengan jejak rekam yang impressive di berbagai proyek inovatif.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Diana Putri",
    role: "Head of Marketing",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ahli strategi pemasaran digital dengan pengalaman global di industri keuangan.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Erik Rahman",
    role: "Chief Financial Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Profesional keuangan berpengalaman dengan latar belakang konsultan Big Four.",
    linkedin: "https://linkedin.com",
  },
];
const stats = [
  { icon: Target, label: "Pengguna Aktif", value: "1M+" },
  { icon: Rocket, label: "Proyek Selesai", value: "500+" },
  { icon: Award, label: "Penghargaan", value: "15+" },
  { icon: Heart, label: "Kepuasan Klien", value: "98%" },
];

const values = [
  {
    icon: Shield,
    title: "Kepercayaan",
    description:
      "Kami membangun hubungan berdasarkan kepercayaan dan transparansi dengan semua pemangku kepentingan",
    gradient: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description:
      "Terus berinovasi untuk memberikan solusi terbaik dalam menghadapi tantangan investasi modern",
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description:
      "Berkolaborasi dengan berbagai pihak untuk menciptakan ekosistem investasi yang inklusif",
    gradient: "from-green-50 to-green-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
      <section className="relative py-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight 
            animate-fade-in-up bg-clip-text text-transparent 
            bg-gradient-to-r from-teal-600 to-blue-600"
            >
              Tentang PetaGov
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mb-16 
            animate-fade-in-up animation-delay-200 relative 
            before:absolute before:-left-4 before:top-0 before:w-1 
            before:h-full before:bg-gradient-to-b before:from-teal-500 before:to-blue-500 
            before:rounded-full pl-6"
            >
              Membangun masa depan investasi yang berkelanjutan melalui inovasi
              teknologi dan pendekatan yang transparan untuk semua.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 border border-gray-100 
                  animate-fade-in-up group relative overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {/* Subtle background glow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white 
                  opacity-0 group-hover:opacity-50 transition-opacity duration-300 
                  rounded-2xl -z-10"
                  ></div>

                  <div className="flex justify-center mb-6">
                    <stat.icon
                      className="h-12 w-12 text-teal-600 transform transition-all 
                    duration-300 group-hover:-translate-y-2 group-hover:scale-110 
                    group-hover:text-teal-700"
                    />
                  </div>
                  <h3
                    className="text-4xl font-bold text-gray-900 mb-2 
                  transition-colors duration-300 group-hover:text-teal-700"
                  >
                    {stat.value}
                  </h3>
                  <p
                    className="text-gray-600 font-medium transition-colors duration-300 
                  group-hover:text-gray-800"
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-teal-600 to-blue-600"
            >
              Nilai-Nilai Kami
            </h2>
            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto 
            relative pl-6 
            before:absolute before:-left-4 before:top-0 before:w-1 
            before:h-full before:bg-gradient-to-b before:from-teal-500 before:to-blue-500 
            before:rounded-full"
            >
              Kami berkomitmen untuk memberikan layanan terbaik dengan
              berlandaskan pada nilai-nilai utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 bg-gradient-to-b ${value.gradient} 
                rounded-3xl hover:shadow-xl transition-all duration-300 
                animate-fade-in-up group relative overflow-hidden`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Subtle background glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent 
                opacity-0 group-hover:opacity-50 transition-opacity duration-300 
                rounded-3xl -z-10"
                ></div>

                <div
                  className={`${value.iconBg} w-20 h-20 rounded-2xl flex items-center 
                justify-center mb-6 mx-auto transition-all duration-300 
                group-hover:-translate-y-2 group-hover:rotate-6 
                group-hover:scale-110 shadow-md`}
                >
                  <value.icon
                    className={`h-10 w-10 ${value.iconColor} 
                  transition-all duration-300 group-hover:scale-110`}
                  />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-4 
                transition-colors duration-300 group-hover:text-teal-700"
                >
                  {value.title}
                </h3>
                <p
                  className="text-gray-600 transition-colors duration-300 
                group-hover:text-gray-800"
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-teal-600 to-blue-600"
            >
              Tim Kami
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto 
            relative pl-6 
            before:absolute before:-left-4 before:top-0 before:w-1 
            before:h-full before:bg-gradient-to-b before:from-teal-500 before:to-blue-500 
            before:rounded-full"
            >
              Para pemimpin dan profesional berbakat yang mendorong inovasi dan
              pertumbuhan berkelanjutan di PetaGov.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl 
                bg-white shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-2 
                animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Subtle background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-transparent 
                opacity-0 group-hover:opacity-50 transition-opacity duration-300 
                rounded-3xl -z-10"
                ></div>

                <div className="p-8 text-center relative">
                  <div className="mb-6 relative inline-block">
                    <div
                      className="w-48 h-48 mx-auto rounded-full overflow-hidden 
                      ring-4 ring-teal-100 group-hover:ring-teal-200 
                      group-hover:ring-offset-4 transition-all duration-300 
                      relative"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover w-full h-full 
                        transition-transform duration-300 
                        group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Overlay effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    rounded-full"
                    ></div>
                  </div>

                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 
                  transition-colors duration-300 group-hover:text-teal-700"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-teal-600 font-medium mb-4 
                  transition-colors duration-300 group-hover:text-teal-700"
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-gray-600 mb-6 leading-relaxed 
                  transition-colors duration-300 group-hover:text-gray-800"
                  >
                    {member.bio}
                  </p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center 
                    w-12 h-12 bg-gray-100 rounded-full 
                    hover:bg-teal-50 hover:text-teal-600 
                    transition-all duration-300 
                    transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-teal-600 to-teal-700 text-white py-24 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full 
          -translate-x-1/2 -translate-y-1/2 animate-blob"
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full 
          translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"
          />
        </div>

        {/* Content Container */}
        <div className="container relative mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto animate-fade-in-up">
            {/* Award Icon */}
            <div
              className="p-4 bg-teal-500/20 rounded-full 
            animate-pulse-slow transform transition-all duration-300 
            hover:rotate-6 hover:scale-110"
            >
              <Award
                size={72}
                className="text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,0,0.5)]"
              />
            </div>

            {/* Headline */}
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-teal-100"
            >
              Bergabunglah dengan Kami dalam Perjalanan Investasi Berkelanjutan
            </h2>

            {/* Subtext */}
            <p
              className="text-xl md:text-2xl text-teal-50 max-w-2xl 
            relative pl-6 
            before:absolute before:-left-4 before:top-0 before:w-1 
            before:h-full before:bg-gradient-to-b before:from-yellow-300 
            before:to-yellow-500 before:rounded-full"
            >
              Mulai investasi Anda hari ini dan jadilah bagian dari perubahan
              positif.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 
              hover:scale-105 transition-all duration-300 
              group relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-200 
                opacity-0 group-hover:opacity-50 transition-opacity duration-300 
                -z-10"
                />
                Daftar Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-teal-700 hover:bg-teal-50 
              hover:scale-105 transition-all duration-300 
              group relative overflow-hidden"
              >
                {/* Hover effect overlay */}
                <span
                  className="absolute inset-0 bg-white/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                -z-10"
                />
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
