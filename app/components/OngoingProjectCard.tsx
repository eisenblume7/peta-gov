import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Pastikan menggunakan komponen Image dari next/image
import Link from "next/link"; // Menggunakan Link dari next/link untuk routing

const OngoingProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
          <div
            className="h-full bg-green-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-green-600">
            {project.progress}%
          </span>
        </div>
      </div>
      <div className="px-6 pb-6">
        {/* Mengganti button dengan Link untuk navigasi yang lebih baik */}
        <Link
          href={`/project/${project.id}`}
          className="w-full px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200 flex items-center justify-center"
        >
          Lihat Detail
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default OngoingProjectCard;
