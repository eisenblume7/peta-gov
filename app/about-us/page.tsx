import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import {
  Globe,
  ArrowRight,
  MessageCircle,
  Target,
  Rocket,
  Award,
  Heart,
} from "lucide-react";

const teamMembers = [
  {
    name: "Aria Wijaya",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Seorang entrepreneur berpengalaman dengan passion di bidang investasi berkelanjutan.",
  },
  {
    name: "Budi Santoso",
    role: "Chief Technology Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ahli teknologi dengan pengalaman lebih dari 15 tahun di industri fintech.",
  },
  {
    name: "Citra Dewi",
    role: "Head of Investment Strategy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pakar investasi dengan jejak rekam yang impressive di berbagai proyek inovatif.",
  },
];

const valueProps = [
  {
    icon: <Target className="text-blue-500" size={40} />,
    title: "Transparansi",
    description:
      "Kami mengutamakan keterbukaan dan kejujuran dalam setiap investasi.",
  },
  {
    icon: <Heart className="text-green-500" size={40} />,
    title: "Dampak Sosial",
    description:
      "Setiap investasi kami bertujuan memberikan manfaat positif bagi masyarakat.",
  },
  {
    icon: <Rocket className="text-purple-500" size={40} />,
    title: "Inovasi",
    description:
      "Kami selalu mencari terobosan baru dalam dunia investasi berkelanjutan.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.7, transition: { duration: 1 } },
};

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Enhanced Background Gradient */}
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50 opacity-70"
        />

        <div className="container relative mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-teal-50 rounded-full"
              >
                <Globe className="text-teal-600 animate-pulse" size={24} />
                <span className="text-teal-700 font-medium">
                  Platform Investasi Digital
                </span>
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight"
                >
                  Tentang <span className="text-teal-600">Kami</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                  Kami adalah platform investasi yang berkomitmen untuk
                  menciptakan dampak positif melalui proyek-proyek berkelanjutan
                  dan inovatif. Tujuan kami adalah memberdayakan investor untuk
                  berkontribusi pada pembangunan masa depan yang lebih baik.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button className="group relative px-8 py-6 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98]">
                  <span className="relative flex items-center gap-2 text-lg font-medium">
                    Mulai Investasi
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="px-8 py-6 border-2 border-teal-200 hover:border-teal-300 text-teal-600 hover:bg-teal-50 transition-all duration-300 rounded-xl text-lg font-medium active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    Hubungi Kami
                    <MessageCircle className="group-hover:animate-bounce" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:block relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="About Us Illustration"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
            >
              Nilai-Nilai Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Komitmen kami terhadap prinsip-prinsip dasar yang membentuk visi
              dan misi perusahaan.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-5 text-primary">
                      <div className="p-4 bg-primary/10 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 flex-grow leading-relaxed">
                      {value.description}
                    </p>
                    <div className="mt-4 border-t pt-4 border-gray-200">
                      <span className="text-sm text-primary/70 font-medium">
                        Learn More
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tim Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Para pemimpin dan profesional berbakat yang mendorong inovasi dan
            pertumbuhan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full object-cover aspect-square"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-6">
            <Award size={64} className="text-yellow-300" />
            <h2 className="text-3xl font-bold max-w-2xl">
              Bergabunglah dengan Kami dalam Perjalanan Investasi Berkelanjutan
            </h2>
            <p className="text-xl max-w-xl">
              Mulai investasi Anda hari ini dan jadilah bagian dari perubahan
              positif.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="lg">
                Daftar Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/20"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
