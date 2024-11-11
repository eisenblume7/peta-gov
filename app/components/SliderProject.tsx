"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

// Definisikan tipe untuk proyek
interface Project {
  title: string;
  image: string;
  description: string;
  date: string;
  location: string;
  progress: number;
  type: "latest" | "ongoing" | "popular";
}

// Data proyek yang ditampilkan
const projects: Project[] = [
  {
    title: "Revitalisasi THR",
    image: "/images/thr.jpg",
    description: "Pembaruan fasilitas dan infrastruktur Taman Hiburan Rakyat.",
    date: "Jan 2024 - Des 2024",
    location: "Surabaya Pusat",
    progress: 75,
    type: "latest",
  },
  {
    title: "Drainase Kenari - Embong Malang",
    image: "/images/drainase.jpg",
    description: "Perbaikan sistem drainase untuk mengatasi masalah banjir.",
    date: "Mar 2024 - Nov 2024",
    location: "Surabaya Selatan",
    progress: 45,
    type: "latest",
  },
  {
    title: "JLLB GBT",
    image: "/images/jllb.jpg",
    description:
      "Pembangunan jalur lingkar luar barat untuk mengurai kemacetan.",
    date: "Feb 2024 - Jan 2025",
    location: "Surabaya Barat",
    progress: 60,
    type: "latest",
  },
];

const ProjectSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Proyek Terkini
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-500">{project.date}</p>
                      <p className="text-xs text-gray-500">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 backdrop-blur-sm text-green-700 p-2 rounded-full shadow-lg hover:bg-green-50 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 backdrop-blur-sm text-green-700 p-2 rounded-full shadow-lg hover:bg-green-50 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
