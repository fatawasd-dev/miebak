'use client'

const Hero: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/logo_hero.jpeg')" }}>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Nikmati Martabak Indomie Terlezat!</h1>
        <p className="text-lg mb-8">Cicipi kelezatan martabak indomie dengan berbagai varian rasa.</p>
        <a href="/order" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Order Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
