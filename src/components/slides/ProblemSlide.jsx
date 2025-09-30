import React from 'react';

export const ProblemSlide = ({ data = {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          The Forecasting-Operations Gap
        </h2>

        {/* The Core Problem */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 lg:p-10 rounded-2xl border-2 border-red-500/40 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-4xl">⚠️</div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">The Core Problem</h3>
              <p className="text-2xl lg:text-3xl text-gray-100 leading-relaxed">
                Current flood forecasting provides <span className="text-red-400 font-bold">probabilistic warnings</span> at river basin scale.
              </p>
              <p className="text-2xl lg:text-3xl text-gray-100 leading-relaxed mt-4">
                NDRF operations require <span className="text-green-400 font-bold">deterministic predictions</span> at coordinate-level precision.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What We Have */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border-2 border-red-500/40">
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              ❌ What Current Systems Provide
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Spatial Resolution</p>
                <p className="text-xl text-white font-semibold">"Yamuna basin likely to flood"</p>
                <p className="text-base text-gray-400 mt-2">10-50 km grid cells</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Temporal Precision</p>
                <p className="text-xl text-white font-semibold">"Flooding expected in 48-72 hours"</p>
                <p className="text-base text-gray-400 mt-2">Wide time windows</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Output Format</p>
                <p className="text-xl text-white font-semibold">"High probability of inundation"</p>
                <p className="text-base text-gray-400 mt-2">Statistical likelihood</p>
              </div>
            </div>
          </div>

          {/* What We Need */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border-2 border-green-500/40">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              ✅ What NDRF Operations Need
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Spatial Resolution</p>
                <p className="text-xl text-white font-semibold">"Water reaches 2.3m at GPS: 28.6139, 77.2090"</p>
                <p className="text-base text-gray-400 mt-2">Coordinate-level precision</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Temporal Precision</p>
                <p className="text-xl text-white font-semibold">"Peak inundation at 14:30 hrs, Day 2"</p>
                <p className="text-base text-gray-400 mt-2">Hour-level accuracy</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Output Format</p>
                <p className="text-xl text-white font-semibold">"Flood extent map with depth contours"</p>
                <p className="text-base text-gray-400 mt-2">Actionable geometry</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Consequence */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 p-8 lg:p-10 rounded-2xl border-2 border-red-500/50">
          <p className="text-2xl lg:text-3xl text-center font-bold text-white mb-4">
            The Result: Operational Paralysis
          </p>
          <p className="text-xl lg:text-2xl text-center text-gray-200 leading-relaxed">
            NDRF commanders cannot position relief infrastructure safely because forecasts lack the precision their decisions require. 
            <span className="text-red-400 font-bold block mt-4">
              This gap costs lives, wastes resources, and undermines disaster response credibility.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
