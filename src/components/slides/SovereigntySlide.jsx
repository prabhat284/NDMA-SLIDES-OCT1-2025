import React from 'react';

export const SovereigntySlide = ({ data = {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          Why Sovereign Capability Matters
        </h2>
        <p className="text-2xl lg:text-3xl text-center text-gray-300 mb-16">
          Life-safety infrastructure cannot depend on foreign control
        </p>

        {/* Core Issue */}
        <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 p-8 rounded-2xl border-2 border-orange-500/40 mb-12">
          <p className="text-2xl lg:text-3xl text-center text-gray-100 leading-relaxed">
            When disaster strikes, <span className="text-white font-bold">response infrastructure positioning</span> determines how many lives are saved.
          </p>
          <p className="text-2xl lg:text-3xl text-center text-gray-100 leading-relaxed mt-4">
            This capability <span className="text-orange-400 font-bold">cannot be outsourced</span> to systems India doesn't control.
          </p>
        </div>

        {/* Three Critical Requirements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-blue-500/40">
            <div className="text-4xl mb-4 text-center">🔒</div>
            <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">Data Sovereignty</h3>
            <p className="text-gray-300 text-center mb-4">Critical infrastructure data must remain under Indian control</p>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Current Challenge</p>
              <p className="text-white">Many systems require data export to foreign servers</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-green-500/40">
            <div className="text-4xl mb-4 text-center">🔍</div>
            <h3 className="text-xl font-bold text-green-400 mb-3 text-center">Methodology Transparency</h3>
            <p className="text-gray-300 text-center mb-4">Algorithms must be explainable and auditable</p>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Current Challenge</p>
              <p className="text-white">Proprietary models offer no visibility into decision logic</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-orange-500/40">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold text-orange-400 mb-3 text-center">Operational Independence</h3>
            <p className="text-gray-300 text-center mb-4">Systems must work without foreign infrastructure</p>
            <div className="bg-slate-900/50 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Current Challenge</p>
              <p className="text-white">Cloud dependencies create operational vulnerabilities</p>
            </div>
          </div>
        </div>

        {/* Indian Capability Section */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border-2 border-green-500/40">
          <h3 className="text-3xl font-bold text-green-400 mb-6 text-center">India's Sovereign Capability</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Data Infrastructure</p>
                <p className="text-lg text-white font-semibold">ISRO satellite constellation</p>
                <p className="text-gray-400 text-sm mt-1">Cartosat, RISAT, EOS - fully domestic</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Methodology</p>
                <p className="text-lg text-white font-semibold">Physics-grounded modeling</p>
                <p className="text-gray-400 text-sm mt-1">Court-defensible, audit-ready algorithms</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Deployment</p>
                <p className="text-lg text-white font-semibold">Government infrastructure</p>
                <p className="text-gray-400 text-sm mt-1">On-premise, no foreign cloud required</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Validation</p>
                <p className="text-lg text-white font-semibold">IIT Delhi, CEEW, Stanford</p>
                <p className="text-gray-400 text-sm mt-1">Academic rigor, domestic leadership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-8 text-center">
          <p className="text-2xl lg:text-3xl text-white font-bold mb-3">
            For 1.4 Billion Citizens
          </p>
          <p className="text-xl lg:text-2xl text-gray-300">
            Life-safety decisions require sovereign capability, not vendor relationships
          </p>
        </div>
      </div>
    </div>
  );
};
