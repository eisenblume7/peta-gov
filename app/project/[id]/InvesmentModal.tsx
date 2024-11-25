"use client";

import { useState } from "react";
import { DollarSign, X } from "lucide-react";

interface InvestmentModalProps {
  projectId: number;
  onInvestmentSuccess: (amount: number) => void;
  remainingInvestment: number;
}

const InvestmentModal = ({
  onInvestmentSuccess,
  remainingInvestment,
}: InvestmentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const investmentAmount = Number(amount);

    if (investmentAmount <= 0) {
      setError("Jumlah investasi harus lebih dari 0");
      return;
    }

    if (investmentAmount > remainingInvestment) {
      setError(
        `Jumlah investasi tidak boleh melebihi sisa target (${new Intl.NumberFormat(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
          }
        ).format(remainingInvestment)})`
      );
      return;
    }

    // Handle investment submission logic here
    onInvestmentSuccess(investmentAmount);
    setIsOpen(false);
    setAmount("");
    setError("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mt-6 bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center"
        disabled={remainingInvestment <= 0}
      >
        <DollarSign className="w-5 h-5 mr-2" />
        {remainingInvestment <= 0
          ? "Target Investasi Tercapai"
          : "Investasi Sekarang"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Investasi Proyek
              </h3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setError("");
                  setAmount("");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Jumlah Investasi (IDR)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError("");
                  }}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Masukkan jumlah investasi"
                  max={remainingInvestment}
                  required
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <p className="mt-2 text-sm text-gray-500">
                  Sisa target investasi:{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(remainingInvestment)}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
              >
                Konfirmasi Investasi
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentModal;
