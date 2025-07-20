export default function JewelryHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('../src/assets/bg-hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/0 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Brand Badge */}
        <div className="bg-amber-100 text-amber-700 font-medium text-sm px-4 py-1 rounded-full mb-6 shadow-sm">
          New Arrival • 2025 Collection
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-4">
          Handcrafted Elegance for Every Occasion
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-red-500 max-w-2xl mb-8 font-bold">
          Discover premium designer jewellery made with love — timeless, luxurious, and uniquely you.
        </p>

        {/* Hero Image */}
        <img
          src="../src/assets/demo.png"
          alt="Gold Necklace"
          className="w-72 md:w-96 h-auto mb-10 rounded-xl shadow-xl transition duration-300 hover:scale-105"
        />

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            View Collection
          </button>
          <button className="border border-yellow-500 text-yellow-600 px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300">
  Book a Styling Call
</button>

        </div>
      </div>
    </section>
  );
}
