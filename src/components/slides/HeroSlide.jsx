import React from 'react';

export const HeroSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <img 
          src={data.image || "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=800&fit=crop"}
          alt="Flooded infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center max-w-4xl">
            <div className="inline-block px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-lg mb-6">
              <p className="text-sm font-semibold tracking-wide">OPERATIONAL FAILURE</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg">
              {data.subtitle}
            </p>
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-lg border border-red-500/30">
              <p className="text-base md:text-lg leading-relaxed">
                Relief camps meant to save lives were flooded during disaster response. 
                NDRF personnel and evacuees at risk. <span className="text-red-400 font-semibold">This is what inadequate prediction looks like.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
