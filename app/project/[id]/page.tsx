import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  BarChart2,
  Activity,
  ArrowRight,
} from "lucide-react";
import CommentSection from "./CommentSection";
import { getProject, Project } from "../../lib/getProject";
import { ProjectInfoCard } from "./ProjectInfoCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  let project: Project;

  try {
    project = await getProject(params.id);
  } catch (error) {
    notFound();
  }

  const investmentProgress =
    (project.currentInvestment / project.investmentGoal) * 100;
  const progressBarWidth = Math.min(investmentProgress, 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
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

            <div className="grid grid-cols-2 gap-6 mt-8">
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
          </div>

          {/* Right Column */}
          <Card>
            <CardHeader>
              <CardTitle>Informasi Investasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Total Anggaran</p>
                  <p className="text-2xl font-semibold text-gray-800">
                    {formatCurrency(project.budget)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Target Investasi</p>
                  <p className="text-2xl font-semibold text-gray-800">
                    {formatCurrency(project.investmentGoal)}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-gray-500">Investasi Terkumpul</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-semibold text-gray-800">
                      {formatCurrency(project.currentInvestment)}
                    </p>
                    <span className="ml-2 text-sm text-green-600 font-medium">
                      ({investmentProgress.toFixed(2)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressBarWidth}%` }}
                    />
                  </div>
                </div>
              </div>

              <Button asChild className="w-full h-12 text-lg" size="lg">
                <Link href={`/project/${project.id}/invest`}>
                  Investasi Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comments Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Komentar dan Diskusi</CardTitle>
            </CardHeader>
            <CardContent>
              <CommentSection projectId={project.id} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
