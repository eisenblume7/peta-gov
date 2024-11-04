// components/ProjectSlider.tsx
"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Project = {
    title: string;
    image: string;
};

const projects: Project[] = [
    { title: 'Revitalisasi THR', image: '/images/thr.jpg' },
    { title: 'Drainase Kenari - Embong Malang', image: '/images/drainase.jpg' },
    { title: 'JLLB GBT', image: '/images/jllb.jpg' },
    { title: 'Proyek Lain 1', image: '/images/proyek1.jpg' },
    { title: 'Proyek Lain 2', image: '/images/proyek2.jpg' },
];

export default function ProjectSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="mr-10 ml-10 text-center bg-white">
            <h2 className="text-2xl text-green-800 font-bold mb-4">Proyek Pemerintah Kota Surabaya</h2>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex gap-4 ml-6 mr-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 w-full sm:w-1/3 p-4  rounded-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-lg border-2 border-blue-300"
                            />
                            <h3 className="text-lg text-green-800 font-semibold mt-2">{project.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <button className="mb-16 mt-6 px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200">
                Ketuk Untuk Selengkapnya
            </button>
        </div>
    );
}
