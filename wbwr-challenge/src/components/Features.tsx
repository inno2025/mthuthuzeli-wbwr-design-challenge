export const Features = () => {
  const features = [
    { title: "Fast Performance", icon: "⚡", desc: "Optimized for speed." },
    { title: "Secure", icon: "🔒", desc: "Enterprise-grade security." },
    { title: "Easy to Use", icon: "✨", desc: "Intuitive interface." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};