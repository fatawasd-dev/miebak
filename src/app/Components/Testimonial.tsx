"use client";

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components.css'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Andi",
      review: "Martabak Indomie sangat lezat! Kombinasi mi dan telur benar-benar sempurna.",
      image: "/orang_1.png",
    },
    {
      id: 2,
      name: "Budi",
      review: "Rasa yang unik dan tidak pernah saya temui sebelumnya. Harus dicoba!",
      image: "/orang_2.png",
    },
    {
      id: 3,
      name: "Citra",
      review: "Martabak Indomie menjadi makanan favorit saya. Sangat direkomendasikan!",
      image: "/orang_3.png",
    },
    // tambahkan lebih banyak testimoni sesuai kebutuhan
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">
          Testimoni dan Ulasan
        </h2>
        <div>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mx-auto rounded-full h-24 w-24 object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.review}&quot;</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
