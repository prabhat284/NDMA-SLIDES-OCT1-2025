import React from 'react';

export  function DeploymentArchitectureSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Deployment Architecture
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300">
            Flexible deployment models for different security requirements
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Data Sources */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Data Sources</h3>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-cyan-500/30">
                <div className="text-3xl mb-2">🛰️</div>
                <p className="font-semibold text-white mb-1">ISRO Satellites</p>
                <p className="text-sm text-gray-400">Cartosat, RISAT, EOS</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-cyan-500/30">
                <div className="text-3xl mb-2">💾</div>
                <p className="font-semibold text-white mb-1">IMD Weather</p>
                <p className="text-sm text-gray-400">Rainfall forecasts</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-cyan-500/30">
                <div className="text-3xl mb-2">💾</div>
                <p className="font-semibold text-white mb-1">Terrain Data</p>
                <p className="text-sm text-gray-400">DEM, land use</p>
              </div>
            </div>

            {/* Processing Core */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-2 border-blue-500/50">
                <div className="text-5xl text-center mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-center text-blue-400 mb-6">
                  Causal AI Modeling Engine
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Physics Engine</p>
                    <p className="text-white font-semibold">Hydrodynamic modeling</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Processing</p>
                    <p className="text-white font-semibold">3.25 min per tile</p>
                  </div>
                  <div className="bg-slate-900/50 p-3 rounded-lg">
                    <p className="text-sm text-gray-400 mb-1">Deployment</p>
                    <p className="text-white font-semibold">On-premise / Hybrid / Air-gapped</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400 bg-slate-900/50 px-4 py-2 rounded-lg inline-block">
                  Deployed on Government Infrastructure • No Foreign Dependencies
                </p>
              </div>
            </div>

            {/* User Interfaces */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-green-400 mb-4">User Interfaces</h3>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-green-500/30">
                <div className="text-3xl mb-2">🖥️</div>
                <p className="font-semibold text-white mb-1">Command Center</p>
                <p className="text-sm text-gray-400">Desktop dashboards</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-green-500/30">
                <div className="text-3xl mb-2">💻</div>
                <p className="font-semibold text-white mb-1">Field Tablets</p>
                <p className="text-sm text-gray-400">NDRF operations</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-green-500/30">
                <div className="text-3xl mb-2">📱</div>
                <p className="font-semibold text-white mb-1">Citizen Apps</p>
                <p className="text-sm text-gray-400">Public alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-blue-400 mb-3">Option 1: On-Premise</h4>
            <p className="text-gray-300 mb-4">Complete deployment within NDMA/State data centers</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Maximum data sovereignty</li>
              <li>• Existing infrastructure</li>
              <li>• No internet dependency</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-green-500/30">
            <h4 className="text-xl font-bold text-green-400 mb-3">Option 2: Hybrid</h4>
            <p className="text-gray-300 mb-4">Core on government servers, interfaces on NIC cloud</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Balanced approach</li>
              <li>• Easier citizen access</li>
              <li>• Domestic cloud only</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-xl font-bold text-cyan-400 mb-3">Option 3: Air-gapped</h4>
            <p className="text-gray-300 mb-4">Isolated systems for defense/strategic locations</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Maximum security</li>
              <li>• Offline operation</li>
              <li>• Manual data transfer</li>
            </ul>
          </div>
        </div>

        {/* Bottom Emphasis */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
          <p className="text-xl text-center text-white font-semibold">
            Technical implementation details will be defined in NDMA guidelines with IIT Delhi validation
          </p>
          <p className="text-lg text-center text-gray-300 mt-2">
            Today's decision: Should this capability exist? Implementation: System integrators follow your standards.
          </p>
        </div>
      </div>
    </div>
  );
}
