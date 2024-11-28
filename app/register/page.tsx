"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { Loader2 } from "lucide-react";

// Definisikan tipe untuk form data dan error
interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  institution: string;
  phoneNumber: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  institution?: string;
  phoneNumber?: string;
}

const RegisterPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    institution: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});

  // Fungsi untuk menangani perubahan input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error ketika pengguna mulai mengetik
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Fungsi untuk memvalidasi form
  const validateForm = (): Errors => {
    const newErrors: Errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    if (!formData.institution.trim()) {
      newErrors.institution = "Institusi wajib diisi";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+()-\s]*$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Format nomor telepon tidak valid";
    }

    return newErrors;
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulasi proses registrasi
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted:", formData);
    }, 2000);
  };

  // Komponen input field dengan validasi error
  const InputField: React.FC<{
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    error?: string;
  }> = ({ label, name, type = "text", placeholder, error }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        value={formData[name]}
        onChange={handleChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500`}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
            PetaGov
          </h2>
          <p className="mt-2 text-gray-600">Daftar akun baru</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <InputField
              label="Nama Lengkap"
              name="fullName"
              placeholder="Masukkan nama lengkap"
              error={errors.fullName}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="nama@email.com"
              error={errors.email}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Minimal 8 karakter"
              error={errors.password}
            />

            <InputField
              label="Konfirmasi Password"
              name="confirmPassword"
              type="password"
              placeholder="Masukkan ulang password"
              error={errors.confirmPassword}
            />

            <InputField
              label="Institusi"
              name="institution"
              placeholder="Nama institusi"
              error={errors.institution}
            />

            <InputField
              label="Nomor Telepon"
              name="phoneNumber"
              placeholder="Contoh: +62812345678"
              error={errors.phoneNumber}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              "Daftar"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Sudah punya akun?{" "}
            <a
              href="#"
              className="font-medium text-teal-600 hover:text-teal-500 transition duration-300"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
