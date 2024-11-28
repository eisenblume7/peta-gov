import { BarChart3, Search, Map } from "lucide-react"; // Ensure Map is imported

// Feature Section Component
export default function FeatureSection() {
  const features = [
    {
      icon: <Search className="w-8 h-8" aria-label="Search Icon" />,
      title: "Pencarian Mudah",
      description:
        "Temukan informasi proyek dengan cepat melalui fitur pencarian yang intuitif.",
    },
    {
      icon: <Map className="w-8 h-8" aria-label="Map Icon" />,
      title: "Peta Interaktif",
      description:
        "Visualisasi lokasi proyek melalui peta interaktif yang user-friendly.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" aria-label="Bar Chart Icon" />,
      title: "Analisis Data",
      description:
        "Akses data dan statistik proyek pemerintah secara real-time.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati kemudahan akses informasi proyek pemerintah melalui berbagai
            fitur yang kami sediakan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
