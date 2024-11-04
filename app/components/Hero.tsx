// components/Hero.tsx

import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="text-center px-8 py-12 bg-white">
            <h1 className="text-4xl font-bold text-gray-800 mt-12 mb-4">PetaGov</h1>
            <p className="text-xl text-green-800 mb-20 max-w-6xl mx-auto">
                Petagov adalah peta interaktif yang diciptakan oleh Pemerintah Surabaya untuk mempermudah
                masyarakat dalam mengakses informasi tentang proyek dan investasi pemerintah di daerah ini.
                Dengan Petagov, Anda dapat menjelajahi berbagai inisiatif pembangunan yang sedang berlangsung,
                serta memahami dampak dan manfaatnya bagi komunitas.
            </p>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Peta Interaktif Pemerintah Kota Surabaya</h2>
            <img
                src="/surabaya-map.png" // Ganti dengan path gambar yang sesuai
                alt="Peta Interaktif Pemerintah Kota Surabaya"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
            <button className="absolute right-9 px-6 py-3 bg-green-100 text-green-800 font-semibold rounded-lg hover:bg-green-200 transition">
                Ketuk Untuk Selengkapnya
            </button>
        </section>
    );
};

export default Hero;
