"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LatestProjectCard from "../components/LatestProjectCard";
import CompletedProjectCard from "../components/CompletedProjectCard";
import OngoingProjectCard from "../components/OngoingProjectCard";

const ProjectPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  interface Project {
    status: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  // Fetching projects data from the JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:3000/data/projects.json");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const filterProjects = (status: string) => {
    return projects.filter((project) => project.status === status);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Latest Projects Slider */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proyek Terbaru
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {filterProjects("latest").map((project, index) => (
                  <LatestProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
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

        {/* Ongoing Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proyek Sedang Berjalan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterProjects("ongoing").map((project, index) => (
              <OngoingProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proyek Selesai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterProjects("completed").map((project, index) => (
              <CompletedProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
