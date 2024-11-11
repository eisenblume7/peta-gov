"use client";

import React from "react";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
            PetaGov
          </h2>
          <p className="mt-2 text-gray-600">Selamat datang kembali</p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="nama@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Ingat saya
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                Lupa password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Masuk"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Belum punya akun?{" "}
            <a
              href="#"
              className="font-medium text-teal-600 hover:text-teal-500 transition duration-300"
            >
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
