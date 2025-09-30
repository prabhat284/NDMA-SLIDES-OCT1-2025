import React from 'react';

export const CommitmentSlide = ({ data = {} }) => {
  const principles = [
    {
      title: "Technology Transfer",
      description: "Complete methodology transparency - every algorithm, every assumption documented and auditable by NDMA technical teams"
    },
    {
      title: "Capacity Building",
      description: "Training programs for government scientists and engineers - build domestic expertise, not vendor dependency"
    },
    {
      title: "Continuous Improvement",
      description: "Model refinement based on NDRF operational feedback and validation against real flood events"
    },
    {
      title: "Open Collaboration",
      description: "Integration with existing government systems (IMD, ISRO, CWC) and academic research programs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Our Commitment to NDMA
        </h2>
        <p className="text-2xl lg:text-3xl text-center text-gray-300 mb-12">
          Building sovereign capability, not vendor dependency
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border-2 border-slate-700 hover:border-amber-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-amber-400">{principle.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-8 rounded-2xl border-2 border-amber-500/40 mb-8">
          <h3 className="text-2xl font-bold text-center text-amber-400 mb-6">What This Means in Practice</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">📖</div>
              <p className="text-lg font-semibold text-white mb-2">Open Methodology</p>
              <p className="text-base text-gray-300">Source code, algorithms, validation data - all accessible to NDMA</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <p className="text-lg font-semibold text-white mb-2">Knowledge Transfer</p>
              <p className="text-base text-gray-300">Train government teams to maintain and improve systems independently</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <p className="text-lg font-semibold text-white mb-2">True Partnership</p>
              <p className="text-base text-gray-300">Success measured by lives saved, not contracts signed</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-2xl border-2 border-slate-700">
          <p className="text-2xl text-center font-bold text-white mb-4">
            This isn't a procurement decision. It's a capability-building partnership.
          </p>
          <p className="text-xl text-center text-gray-300">
            Our role is to establish the sovereign capability and transfer expertise. NDMA owns the infrastructure and standards.
          </p>
        </div>
      </div>
    </div>
  );
};
