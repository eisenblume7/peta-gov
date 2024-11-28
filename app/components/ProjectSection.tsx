"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  image: string;
  description: string;
  date: string;
  location: string;
  progress: number;
};

const projects: Project[] = [
  {
    title: "Revitalisasi THR",
    image: "/images/thr.jpg",
    description:
      "Pembaruan fasilitas dan infrastruktur Taman Hiburan Rakyat untuk meningkatkan daya tarik wisata.",
    date: "Jan 2024 - Des 2024",
    location: "Surabaya Pusat",
    progress: 75,
  },
  {
    title: "Drainase Kenari - Embong Malang",
    image: "/images/drainase.jpg",
    description:
      "Perbaikan sistem drainase untuk mengatasi masalah banjir di kawasan strategis kota.",
    date: "Mar 2024 - Nov 2024",
    location: "Surabaya Selatan",
    progress: 45,
  },
  {
    title: "JLLB GBT",
    image: "/images/jllb.jpg",
    description:
      "Pembangunan jalur lingkar luar barat untuk mengurai kemacetan lalu lintas.",
    date: "Feb 2024 - Jan 2025",
    location: "Surabaya Barat",
    progress: 60,
  },
  {
    title: "Proyek Lain 1",
    image: "/images/proyek1.jpg",
    description:
      "Pengembangan fasilitas publik untuk meningkatkan kualitas hidup masyarakat.",
    date: "Apr 2024 - Oct 2024",
    location: "Surabaya Timur",
    progress: 30,
  },
  {
    title: "Proyek Lain 2",
    image: "/images/proyek2.jpg",
    description: "Revitalisasi taman kota dan ruang terbuka hijau.",
    date: "May 2024 - Dec 2024",
    location: "Surabaya Utara",
    progress: 15,
  },
];

export default function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proyek Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi proyek-proyek pembangunan terkini yang sedang dilaksanakan
            oleh Pemerintah Kota Surabaya untuk meningkatkan kualitas hidup
            masyarakat.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
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

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {project.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {project.location}
                        </div>
                      </div>

                      {/* Progress Indicator */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-green-600">
                          {project.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <button className="w-full px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200 flex items-center justify-center">
                        Lihat Detail
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? "bg-green-600 w-6"
                    : "bg-green-200 hover:bg-green-300"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
