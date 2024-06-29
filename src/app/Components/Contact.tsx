"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">
          Kontak dan Lokasi
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Hubungi Kami
            </h3>
            <p className="text-gray-700 mb-2 flex items-center">
              <FaPhoneAlt className="mr-2 text-orange-500" /> telpon
            </p>
            <p className="text-gray-700 mb-2 flex items-center">
              <FaEnvelope className="mr-2 text-orange-500" /> info@martabakindomie.com
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Lokasi Kami
            </h3>
            <p className="text-gray-700 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-orange-500" /> Jl. Contoh Alamat No.123, Jakarta, Indonesia
            </p>
            <div className="w-full h-64 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.601143624385!2d106.82361649617524!3d-6.20515635623396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b8c7e4c9d5%3A0x8a1e8c3b8b3f6d0!2sJl.%20Contoh%20Alamat%20No.123%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1605886070375!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
