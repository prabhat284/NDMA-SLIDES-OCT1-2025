import React from 'react';

export const LandingSlide = ({ data, onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg mb-6">
            <p className="text-cyan-400 font-semibold">OPERATIONAL CAPABILITY BRIEFING</p>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          {data.title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">{data.subtitle}</p>
        <div className="text-lg md:text-xl text-gray-400 mb-12 space-y-2">
          <p>{data.date}</p>
          <p className="text-cyan-400">{data.presenter}</p>
        </div>
        <button
          onClick={onNext}
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-xl font-semibold transition-all inline-flex items-center gap-2"
        >
          Begin Presentation <span className="text-2xl">→</span>
        </button>
        <div className="mt-12 text-sm text-gray-500">
          <p>Navigate with arrow keys or buttons • Mobile optimized • Share this URL for reference</p>
        </div>
      </div>
    </div>
  );
};
