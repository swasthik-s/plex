"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background with Radial & Linear Gradients */}
      <div className="absolute inset-0 flex items-start justify-end">
        <div className="max-w-[1390px] w-full h-auto relative">
          <video
            className="w-full h-full object-cover brightness-100"
            style={{ objectPosition: "right center" }}
            src="/videos/home_hero_background_2024.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Dark-to-Transparent Side Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-neutral-900/30 to-transparent"></div>

          {/* Adjusted Bottom Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/30 to-neutral-900/60"></div>

          {/* Spotlight/Vignette Effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, transparent 15%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 75%, black 85%)",
              mixBlendMode: "multiply",
            }}
          ></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-16 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Go ahead, stream free</h1>
          <p className="text-lg mb-6">
            With Plex you can watch over 20,000 free movies and shows, plus Live
            TV on almost any device. What are you waiting for?
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
