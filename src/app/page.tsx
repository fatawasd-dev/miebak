import { Metadata } from "next";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Testimonials from "./Components/Testimonial";

export const metadata: Metadata = {
  title: "Martabak Indomie - Toko Martabak Indomie Terbaik",
  description: "Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian.",
  openGraph: {
    title: "Martabak Indomie - Toko Martabak Indomie Terbaik",
    description: "Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian.",
    images: "/logo_hero.jpeg",
    type: "website",
    url: "https://miebak.vercel.app/"
  },
  twitter: {
    title: "Martabak Indomie - Toko Martabak Indomie Terbaik",
    description: "Selamat datang di Martabak Indomie, tempat terbaik untuk menikmati martabak Indomie dengan berbagai varian.",
    images: "/logo_hero.jpeg",
  }
}

export default function Home() {
  return (
    <>
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
