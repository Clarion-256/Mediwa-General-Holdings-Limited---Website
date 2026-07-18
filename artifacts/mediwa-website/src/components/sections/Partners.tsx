export function Partners() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-wider text-gray-500 uppercase">Trusted Partners & Supply Network</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos created with styled text/boxes */}
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-800">
            <div className="w-8 h-8 bg-blue-600 rounded-sm" /> UN Agencies
          </div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-800">
            <div className="w-8 h-8 bg-green-700 rounded-full" /> Min. of Works
          </div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-800">
            <div className="w-8 h-8 bg-red-600 rotate-45" /> Gulu City Council
          </div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-800">
            <div className="w-8 h-8 border-4 border-gray-800 rounded-lg" /> Leading NGOs
          </div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl text-gray-800">
            <div className="w-8 h-2 bg-yellow-500 rounded-full" /> Top Developers
          </div>
        </div>
      </div>
    </section>
  );
}
