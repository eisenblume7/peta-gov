"use client";

import Link from "next/link";
import {
  CircleCheck,
  CirclePause,
  ArrowUpRight,
  Building,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyInvestments = [
  {
    id: 1,
    project: "Obligasi Negara Ritel (ORI)",
    amount: 5000000,
    date: "2023-05-15",
    status: "Aktif",
    roi: 12.5,
    category: "Obligasi Pemerintah",
    description:
      "Obligasi Negara Ritel (ORI) adalah surat utang negara yang dijual kepada individu atau perseorangan Warga Negara Indonesia melalui agen penjual.",
    maturityDate: "2026-05-15",
    interestRate: 6.25,
  },
  {
    id: 2,
    project: "Sukuk Tabungan (ST)",
    amount: 7500000,
    date: "2023-06-22",
    status: "Aktif",
    roi: 15.3,
    category: "Obligasi Syariah",
    description:
      "Sukuk Tabungan (ST) adalah produk investasi syariah yang diterbitkan oleh Pemerintah dan ditujukan bagi investor individu WNI.",
    maturityDate: "2025-06-22",
    interestRate: 6.75,
  },
  {
    id: 3,
    project: "Savings Bond Ritel (SBR)",
    amount: 3000000,
    date: "2023-07-30",
    status: "Selesai",
    roi: 10.2,
    category: "Obligasi Pemerintah",
    description:
      "Savings Bond Ritel (SBR) adalah Obligasi Negara yang dijual kepada individu atau perseorangan Warga Negara Indonesia melalui Mitra Distribusi di Pasar Perdana.",
    maturityDate: "2024-07-30",
    interestRate: 5.75,
  },
];

export default function InvestmentHistoryPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Aktif":
        return <CirclePause className="text-blue-500" />;
      case "Selesai":
        return <CircleCheck className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-5xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-none">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-xl">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Building size={32} />
            <CardTitle className="text-2xl font-bold">
              Riwayat Investasi Obligasi
            </CardTitle>
          </div>
          <Button
            asChild
            variant="outline"
            className="bg-white/20 text-white hover:bg-white/30 border-white/30"
          >
            <Link href="/profile" className="flex items-center gap-2">
              Kembali ke Profil <ArrowUpRight size={16} />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Proyek</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyInvestments.map((investment) => (
                  <TableRow
                    key={investment.id}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <TableCell className="font-medium">
                      {investment.project}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700"
                      >
                        {investment.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(investment.amount)}
                    </TableCell>
                    <TableCell>
                      {new Date(investment.date).toLocaleDateString("id-ID")}
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-green-600">
                        +{investment.roi}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(investment.status)}
                        <span>{investment.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-100"
                      >
                        <Info size={18} />
                        <span className="sr-only">Lihat Detail</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      {/* {selectedInvestment && (
        <InvestmentDetailsModal
          investment={selectedInvestment}
          isOpen={!!selectedInvestment}
          onClose={() => setSelectedInvestment(null)}
        />
      )} */}
    </div>
  );
}
