import { ArrowRight, Calendar, Users, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  image: string;
  title: string;
  progress: number;
  date: string;
  category: string;
  description: string;
  teamSize: number;
  id: string;
}

const OngoingProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-[600px]">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={375}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-900">Active</span>
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/20 backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
            style={{ width: `${project.progress}%` }}
          >
            <div className="w-full h-full opacity-30 bg-[linear-gradient(45deg,_#ffffff33_25%,_transparent_25%,_transparent_50%,_#ffffff33_50%,_#ffffff33_75%,_transparent_75%,_transparent)] bg-[length:1rem_1rem] animate-progressStripes" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              {project.category}
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 line-clamp-2">{project.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">
                {project.teamSize} members
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-sm font-semibold text-green-600">
                  {project.progress}%
                </div>
                <div className="text-xs text-gray-500">Progress</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <Link
            href={`/project/${project.id}`}
            className="w-full px-4 py-3 bg-gray-50 text-gray-900 rounded-xl hover:bg-green-50 hover:text-green-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-md"
          >
            Lihat Detail
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OngoingProjectCard;
