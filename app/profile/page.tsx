import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UserCircle2,
  Edit2,
  History,
  BadgeCheck,
  CalendarDays,
  Mail,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Profil Pengguna",
  description: "Lihat dan kelola profil Anda",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-none overflow-hidden">
        <div className="relative group transition-all duration-300 hover:transform hover:scale-[1.01]">
          {/* Gradient Background */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-teal-600 to-teal-700  rounded-t-xl opacity-90"></div>

          {/* Profile Header */}
          <CardHeader className="relative z-10 flex flex-col items-center pt-16 pb-20">
            <div className="flex flex-col items-center space-y-8">
              {/* Avatar Container */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative border-[6px] border-white/90 shadow-2xl rounded-full p-1 bg-white/95 transform transition-all duration-300 hover:scale-105 hover:border-white">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Foto Profil"
                    width={200}
                    height={200}
                    className="rounded-full object-cover shadow-inner hover:brightness-105 transition-all"
                    priority
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge
                          className="absolute -bottom-2 -right-2 bg-emerald-500 border-4 border-white shadow-xl cursor-help p-2 hover:bg-emerald-400 transition-colors duration-300"
                          variant="secondary"
                        >
                          <TrendingUp size={18} className="text-white" />
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="bg-white/90 backdrop-blur-sm border-none shadow-xl"
                      >
                        <p className="text-emerald-600 font-medium">
                          Investor Aktif
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {/* User Info */}
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-3 tracking-tight">
                  John Doe
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <BadgeCheck
                          className="text-blue-500 hover:text-blue-600 transition-colors cursor-help transform hover:scale-110 duration-300"
                          size={36}
                        />
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="bg-white/90 backdrop-blur-sm border-none shadow-xl"
                      >
                        <p className="text-blue-600 font-medium">
                          Akun Terverifikasi
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h2>
                <p className="text-gray-600 text-xl font-medium tracking-wide">
                  Investor Pemula
                </p>
              </div>
            </div>
          </CardHeader>
        </div>

        <CardContent className="space-y-10 px-8 pb-8 pt-6">
          {/* Profile Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <ProfileStat
              label="Total Investasi"
              value="Rp 50.000.000"
              icon={<TrendingUp size={24} className="text-blue-500" />}
            />
            <ProfileStat
              label="Proyek Aktif"
              value="3"
              icon={<History size={24} className="text-green-500" />}
            />
            <ProfileStat
              label="ROI"
              value="12.5%"
              icon={<Award size={24} className="text-yellow-500" />}
            />
          </div>

          {/* Profile Progress */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Level Investor
              </span>
              <span className="text-sm font-semibold text-blue-600">
                Pemula
              </span>
            </div>
            <Progress
              value={33}
              className="h-3 bg-blue-100"
              style={{ backgroundColor: "rgb(191 219 254)" }}
            />
            <p className="text-xs text-gray-500 text-right">
              33% menuju level berikutnya
            </p>
          </div>

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileDetailItem
              icon={<Mail className="text-blue-500" />}
              label="Email"
              value="john.doe@example.com"
            />
            <ProfileDetailItem
              icon={<CalendarDays className="text-green-500" />}
              label="Bergabung Sejak"
              value="1 Januari 2023"
            />
            <ProfileDetailItem
              icon={<Award className="text-yellow-500" />}
              label="Pencapaian"
              value={
                <div className="flex items-center gap-2">
                  <span>5 Badges</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              }
            />
            <ProfileDetailItem
              icon={<UserCircle2 className="text-indigo-500" />}
              label="Status"
              value={
                <Badge
                  variant="secondary"
                  className="bg-indigo-100 text-indigo-700"
                >
                  Aktif
                </Badge>
              }
            />
          </div>

          {/* Bio Section */}
          <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-100">
            <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 text-lg">
              <UserCircle2 className="text-blue-500" /> Tentang Saya
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Seorang investor pemula yang tertarik pada proyek-proyek
              berkelanjutan dan teknologi inovatif. Selalu bersemangat untuk
              belajar dan berkembang di dunia investasi. Saya percaya bahwa
              investasi yang bijak dapat memberikan dampak positif bagi
              masyarakat dan lingkungan.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
            <Button
              variant="outline"
              className="w-full sm:w-1/2 group relative overflow-hidden rounded-xl border-2 border-teal-200 hover:border-teal-300 py-7 transition-all duration-300 ease-out hover:shadow-lg"
              asChild
            >
              <Link
                href="/profile/investment-history"
                className="flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <History
                  size={22}
                  className="text-teal-600 group-hover:scale-110 transition-transform"
                />
                <span className="font-medium text-teal-700 text-lg relative z-10">
                  Riwayat Investasi
                </span>
              </Link>
            </Button>

            <Button
              variant="default"
              className="w-full sm:w-1/2 group relative overflow-hidden rounded-xl py-7 transition-all duration-300 ease-out hover:shadow-lg"
              asChild
            >
              <Link
                href="/profile/edit"
                className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600"
              >
                <Edit2
                  size={22}
                  className="text-white group-hover:scale-110 transition-transform"
                />
                <span className="font-medium text-white text-lg">
                  Edit Profil
                </span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Reusable Component for Profile Details
interface ProfileDetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function ProfileDetailItem({ icon, label, value }: ProfileDetailItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg flex items-center space-x-4 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
      <div className="bg-gray-50 p-3 rounded-full">{icon}</div>
      <div className="flex-grow">
        <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {label}
        </h4>
        {typeof value === "string" ? (
          <span className="font-semibold text-gray-800">{value}</span>
        ) : (
          value
        )}
      </div>
    </div>
  );
}

// Updated Component for Profile Stats
interface ProfileStatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function ProfileStat({ label, value, icon }: ProfileStatProps) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
      <dt className="text-sm font-medium text-gray-500 mb-2">{label}</dt>
      <dd className="flex items-center justify-center gap-2">
        {icon}
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
      </dd>
    </div>
  );
}
