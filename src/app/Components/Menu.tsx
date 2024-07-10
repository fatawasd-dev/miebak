"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components.css'

const Menu: React.FC = () => {
  // Daftar menu martabak Indomie
  const menuItems = [
    {
      id: 1,
      name: "Martabak Indomie Original",
      description: "Martabak dengan mi Indomie, telur, dan bumbu spesial.",
      price: "Rp 25.000",
      image: "/logo_hero.jpeg",
    },
    {
      id: 2,
      name: "Martabak Indomie Keju",
      description:
        "Martabak dengan mi Indomie, telur, keju parut, dan bumbu spesial.",
      price: "Rp 30.000",
      image: "/menu_1.png",
    },
    {
      id: 3,
      name: "Martabak Indomie Spesial",
      description:
        "Martabak dengan mi Indomie, telur, daging cincang, sayuran, dan bumbu spesial.",
      price: "Rp 35.000",
      image: "/menu_2.png",
    },
    {
      id: 4,
      name: "Martabak Indomie Sosis",
      description:
        "Martabak dengan mi Indomie, telur, daging cincang, sayuran, dan bumbu spesial.",
      price: "Rp 25.000",
      image: "/menu_3.png",
    },
    // tambahkan menu lainnya sesuai kebutuhan
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">
          Menu Martabak Indomie
        </h2>
        <div>
          <Slider {...settings}>
            {menuItems.map((item) => (
              <div key={item.id} className="p-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="rounded-lg h-48 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-gray-700 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Menu;
