import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  progress: number;
}

const LatestProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-[500px] group relative border border-gray-100">
        {/* Project Image with Overlay */}
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Project Details - Using flex-1 to push button to bottom */}
        <div className="flex flex-col flex-1">
          <div className="p-6 space-y-4 flex-1">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
              {project.description}
            </p>

            {/* Project Stats */}
            <div className="flex justify-between items-center text-sm mt-auto">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-gray-600 group-hover:text-green-700 transition-colors">
                  Progress
                </span>
              </div>
              <span className="font-semibold text-green-600 group-hover:text-green-800 transition-colors">
                {project.progress}%
              </span>
            </div>
          </div>

          {/* Detail Button - Always at bottom */}
          <div className="px-6 pb-6 mt-auto">
            <Link
              href={`/project/${project.id}`}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all duration-300 flex items-center justify-center group/button"
            >
              <span className="mr-2 group-hover/button:translate-x-1 transition-transform">
                Lihat Detail
              </span>
              <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Subtle Hover Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-3xl pointer-events-none transition-all duration-300" />
      </div>
    </div>
  );
};

export default LatestProjectCard;
