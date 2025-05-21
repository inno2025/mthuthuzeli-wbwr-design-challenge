export const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
          <iframe 
            className="w-full h-full" 
            src="../../assets/images/Desktop assets/UA_Theme_1_DT.mp4" 
            title="Demo Video" 
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};