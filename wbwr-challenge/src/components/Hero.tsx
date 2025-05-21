// src/components/Hero.tsx
export const Hero = () => (
  <section className="w-full h-screen relative overflow-hidden flex items-center justify-center pt-16">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src="/assets/images/UA_Theme_1_DT.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="relative z-10 text-left px-4 md:px-8 w-full max-w-6xl">
      <div className="text-white p-4 md:p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
          CHECK <br />
          OUT OUR <br />
          <span className="text-yellow-400">LATEST</span> <br />
          GEAR
        </h1>
      </div>
    </div>
  </section>
);