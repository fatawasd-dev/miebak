"use client";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Testimonials from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Martabak Indomie - Toko Martabak Indomie Terbaik</title>
        <meta
          name="description"
          content="Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian."
        />
        <meta
          property="og:title"
          content="Martabak Indomie - Toko Martabak Indomie Terbaik"
        />
        <meta
          property="og:description"
          content="Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian."
        />
        <meta property="og:image" content="/logo_hero.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Martabak Indomie - Toko Martabak Indomie Terbaik"
        />
        <meta
          name="twitter:description"
          content="Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian."
        />
        <meta name="twitter:image" content="/logo_hero.jpeg" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Menu />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
