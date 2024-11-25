"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  MapPin,
  Calendar,
  BarChart2,
  Activity,
} from "lucide-react";
import CommentSection from "./CommentSection";
import InvestmentModal from "./InvesmentModal";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  progress: number;
  status: string;
  image: string;
  budget: number;
  investmentGoal: number;
  currentInvestment: number;
}

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch("http://localhost:3000/data/projects.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const projects: Project[] = await res.json();
        const foundProject = projects.find((p) => p.id.toString() === id);

        if (!foundProject) {
          setError("Project not found");
          return;
        }

        setProject(foundProject);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch project"
        );
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handleInvestmentUpdate = (amount: number) => {
    if (project) {
      setProject({
        ...project,
        currentInvestment: project.currentInvestment + amount,
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  const investmentProgress =
    (project.currentInvestment / project.investmentGoal) * 100;
  const progressBarWidth = Math.min(100, Math.max(0, investmentProgress));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Project Image and Investment Info */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-xl shadow-2xl transition-all duration-300 ease-in-out group-hover:shadow-green-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Lihat Galeri
                </span>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Informasi Investasi
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Anggaran</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {formatCurrency(project.budget)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Target Investasi</p>
                  <p className="text-xl font-semibold text-gray-800">
                    {formatCurrency(project.investmentGoal)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Investasi Terkumpul</p>
                  <div className="flex items-center">
                    <p className="text-xl font-semibold text-gray-800">
                      {formatCurrency(project.currentInvestment)}
                    </p>
                    <span className="ml-2 text-sm text-green-600">
                      ({investmentProgress.toFixed(2)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${progressBarWidth}%` }}
                    />
                  </div>
                </div>
              </div>
              <InvestmentModal
                projectId={project.id}
                onInvestmentSuccess={handleInvestmentUpdate}
                remainingInvestment={
                  project.investmentGoal - project.currentInvestment
                }
              />
            </div>
          </div>

          {/* Right Side: Project Information */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <ProjectInfoCard
                icon={<Calendar className="w-6 h-6 text-teal-600 mr-2" />}
                label="Tanggal Mulai"
                value={project.date}
              />
              <ProjectInfoCard
                icon={<MapPin className="w-6 h-6 text-teal-600 mr-2" />}
                label="Lokasi"
                value={project.location}
              />
              <ProjectInfoCard
                icon={<BarChart2 className="w-6 h-6 text-teal-600 mr-2" />}
                label="Kemajuan"
                value={`${project.progress}% Selesai`}
              />
              <ProjectInfoCard
                icon={<Activity className="w-6 h-6 text-teal-600 mr-2" />}
                label="Status"
                value={project.status}
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Mengapa Berinvestasi?
              </h2>
              <ul className="space-y-3">
                {investmentReasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{reason}</p>
                  </li>
                ))}
              </ul>
            </div>

            <CommentSection projectId={project.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ProjectInfoCard = ({ icon, label, value }: ProjectInfoCardProps) => (
  <div className="flex items-center">
    {icon}
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const investmentReasons = [
  "Berkontribusi langsung pada pembangunan infrastruktur negara",
  "Potensi pengembalian investasi yang menarik",
  "Mendukung pertumbuhan ekonomi dan pembangunan daerah",
  "Transparansi dan akuntabilitas dalam pengelolaan dana",
];

export default ProjectDetailPage;
