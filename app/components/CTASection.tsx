import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image"; // Import Image from Next.js

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Butuh Informasi Lebih Lanjut?
              </h2>
              <p className="text-gray-600 mb-8">
                Tim kami siap membantu Anda dalam mengakses dan memahami
                informasi proyek pemerintah. Hubungi kami sekarang untuk
                konsultasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition duration-200">
                  Pelajari Selengkapnya
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/api/placeholder/600/400" // Replace with the actual image URL
                alt="Customer Support"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
