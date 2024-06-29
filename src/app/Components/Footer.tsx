"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold tracking-wide">Martabak Indomie</h2>
            <p className="text-sm mt-2">Temukan cita rasa baru dengan Martabak Indomie.</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            <a href="#" className="text-sm">Beranda</a>
            <a href="#menu" className="text-sm">Menu</a>
            <a href="#about" className="text-sm">Tentang Kami</a>
            <a href="#testimonials" className="text-sm">Testimoni</a>
            <a href="#contact" className="text-sm">Kontak</a>
          </nav>
          <div className="flex mt-4 lg:mt-0">
            <a href="#" className="mr-4"><FaFacebook className="text-gray-300 hover:text-white transition duration-300" /></a>
            <a href="#" className="mr-4"><FaInstagram className="text-gray-300 hover:text-white transition duration-300" /></a>
            <a href="#" className="mr-4"><FaTwitter className="text-gray-300 hover:text-white transition duration-300" /></a>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-sm text-center">&copy; 2024 Martabak Indomie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
