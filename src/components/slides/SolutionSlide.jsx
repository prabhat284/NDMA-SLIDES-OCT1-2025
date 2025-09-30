import React from 'react';

export const SolutionSlide = ({ data = {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Closing the Gap
        </h2>
        <p className="text-2xl lg:text-3xl text-center text-gray-300 mb-16">
          Coordinate-level precision for operational decision making
        </p>

        {/* What This Capability Delivers */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border-2 border-green-500/40 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">What This Capability Delivers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">From Basin-Level Warning</p>
              <p className="text-2xl text-red-400 font-semibold mb-4">"Yamuna will flood"</p>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">To Coordinate-Level Prediction</p>
              <p className="text-2xl text-green-400 font-semibold">"2.3m depth at GPS: 28.6139, 77.2090"</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">From Time Windows</p>
              <p className="text-2xl text-red-400 font-semibold mb-4">"48-72 hours"</p>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">To Hour-Level Timing</p>
              <p className="text-2xl text-green-400 font-semibold">"Peak at 14:30 hrs, Day 2"</p>
            </div>
          </div>
        </div>

        {/* Operational Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-green-500/40">
            <div className="text-center mb-4">
              <p className="text-5xl font-bold text-green-400 mb-2">77.4%</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Accuracy Rate</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                IIT Delhi validation: 77.4% of predicted flood extent matches actual inundation
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-green-500/40">
            <div className="text-center mb-4">
              <p className="text-5xl font-bold text-green-400 mb-2">3.25 min</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Processing Time</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                Real-time modeling on standard hardware - fast enough for emergency operations
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-green-500/40">
            <div className="text-center mb-4">
              <p className="text-5xl font-bold text-green-400 mb-2">10m</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">Spatial Resolution</p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                10-meter grid resolution enables building-level risk assessment
              </p>
            </div>
          </div>
        </div>

        {/* How It Works - Simple */}
        <div className="bg-slate-800/50 p-8 rounded-2xl border-2 border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-center text-cyan-400 mb-6">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🛰️</div>
              <p className="text-lg font-semibold text-white mb-2">ISRO Data</p>
              <p className="text-sm text-gray-400">Satellite imagery + terrain</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌧️</div>
              <p className="text-lg font-semibold text-white mb-2">IMD Forecasts</p>
              <p className="text-sm text-gray-400">Rainfall predictions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <p className="text-lg font-semibold text-white mb-2">Physics Model</p>
              <p className="text-sm text-gray-400">Water flow simulation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <p className="text-lg font-semibold text-white mb-2">Flood Maps</p>
              <p className="text-sm text-gray-400">Actionable geometry</p>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-6 rounded-xl border-2 border-green-500/40">
          <p className="text-2xl lg:text-3xl text-center font-bold text-white mb-3">
            From "Where might flooding occur?" to "Where should we NOT position relief camps?"
          </p>
          <p className="text-xl text-center text-gray-300">
            Built entirely on domestic infrastructure • No foreign dependencies • Operational timeline
          </p>
        </div>
      </div>
    </div>
  );
};
