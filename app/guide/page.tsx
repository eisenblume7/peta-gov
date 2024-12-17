import React from "react";
import {
  UserPlus,
  FileCheck,
  Search,
  CreditCard,
  LineChart,
  ChevronRight,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    icon: UserPlus,
    title: "Registrasi Akun",
    description:
      "Buat akun PetaGov Anda dengan mengisi data diri dan dokumen yang diperlukan untuk verifikasi.",
  },
  {
    icon: Search,
    title: "Pilih Proyek",
    description:
      "Telusuri berbagai proyek pemerintah yang tersedia dan pilih sesuai dengan tujuan investasi Anda.",
  },
  {
    icon: FileCheck,
    title: "Analisis Proyek",
    description:
      "Pelajari detail proyek, termasuk tingkat pengembalian, risiko, dan jangka waktu investasi.",
  },
  {
    icon: CreditCard,
    title: "Lakukan Investasi",
    description:
      "Tentukan jumlah investasi dan lakukan pembayaran melalui metode yang tersedia.",
  },
  {
    icon: LineChart,
    title: "Pantau Investasi",
    description:
      "Pantau perkembangan investasi Anda dan terima pembayaran return sesuai jadwal.",
  },
];

const faqs = [
  {
    question: "Berapa minimal investasi yang bisa dilakukan?",
    answer:
      "Minimal investasi di PetaGov bervariasi tergantung pada proyek, namun umumnya dimulai dari Rp 1.000.000.",
  },
  {
    question: "Bagaimana keamanan investasi saya dijamin?",
    answer:
      "Investasi Anda dijamin oleh pemerintah dan diawasi oleh Otoritas Jasa Keuangan (OJK). Kami juga menerapkan sistem keamanan data terkini.",
  },
  {
    question: "Berapa lama jangka waktu investasi?",
    answer:
      "Jangka waktu investasi bervariasi mulai dari 1 tahun hingga 20 tahun, tergantung pada proyek yang Anda pilih.",
  },
  {
    question: "Bagaimana cara mencairkan investasi?",
    answer:
      "Anda dapat mencairkan investasi sesuai dengan jangka waktu yang telah ditentukan. Proses pencairan biasanya memakan waktu 3-5 hari kerja.",
  },
];

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Panduan Investasi Obligasi Proyek
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Ikuti langkah-langkah mudah berikut untuk memulai investasi Anda di
            proyek-proyek pemerintah yang berkelanjutan.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal-200 to-green-200 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8 relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-200 hidden md:block"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Progress Indicator */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-teal-500 rounded-full z-20 hidden md:flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10 md:ml-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-teal-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-teal-600">Langkah {index + 1}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-green-500 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
            Siap Memulai Perjalanan Investasi Anda?
          </h2>
          <p className="text-xl text-teal-50 mb-8 animate-fade-in-up animation-delay-200">
            Bergabunglah sekarang dan mulai berinvestasi dalam proyek-proyek
            yang berdampak positif bagi negeri.
          </p>
          <Button
            size="lg"
            className="bg-white text-teal-600 hover:bg-teal-50 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            Mulai Investasi
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="0.2"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default GuidePage;
