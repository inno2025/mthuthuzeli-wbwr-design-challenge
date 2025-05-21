export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Powerful Solution</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          A modern platform designed to streamline your workflow.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};