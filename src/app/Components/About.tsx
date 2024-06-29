"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-4 text-black">
              Tentang Martabak Indomie
            </h2>
            <p className="text-gray-700 mb-4">
              Martabak Indomie adalah inovasi kuliner yang menggabungkan dua
              makanan favorit Indonesia: martabak dan Indomie. Kami menggunakan
              mi Indomie yang terkenal dan memadukannya dengan bahan-bahan segar
              dan berkualitas untuk menciptakan martabak yang lezat dan unik.
            </p>
            <p className="text-gray-700 mb-4">
              Sejarah kami dimulai dari ide sederhana untuk menciptakan sesuatu
              yang berbeda dan menarik bagi pecinta kuliner. Dengan berbagai
              variasi rasa, Martabak Indomie menawarkan pengalaman kuliner yang
              tidak terlupakan.
            </p>
            <p className="text-gray-700 mb-4">
              Mengapa memilih Martabak Indomie? Karena kami hanya menggunakan
              bahan-bahan terbaik dan resep yang telah teruji. Setiap gigitan
              menawarkan rasa yang kaya dan memuaskan.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <Image
              src="/logo_hero.jpeg"
              alt="Martabak Indomie"
              width={710}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
