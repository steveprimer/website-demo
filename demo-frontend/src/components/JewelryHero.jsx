import bgHero from '../assets/bg-hero.jpg';
import demoImage from '../assets/demo.png';

export default function JewelryHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center text-white">
        <div className="bg-yellow-200 text-yellow-800 font-semibold text-sm px-5 py-1 rounded-full mb-5 shadow-md">
          ✨ Blingzilla • 2025 Collection
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
          Handcrafted Elegance for Every Occasion
        </h1>

        <p className="text-lg md:text-xl text-yellow-100 max-w-2xl mb-8 font-medium drop-shadow-sm">
          Discover luxury that speaks to your soul — premium handcrafted jewellery designed for modern royalty.
        </p>

        <img
          src={demoImage}
          alt="Gold Necklace"
          className="w-72 md:w-96 h-auto mb-10 rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition duration-300"
        />

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            View Collection
          </button>
          <button className="border border-yellow-400 text-yellow-300 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Book a Styling Call
          </button>
        </div>
      </div>
    </section>
  );
}
