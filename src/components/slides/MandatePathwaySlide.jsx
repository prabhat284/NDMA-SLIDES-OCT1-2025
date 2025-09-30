import React from 'react';

export const MandatePathwaySlide = ({ data = {} }) => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Technical Validation",
      duration: "Q3 2025 (3 months)",
      owner: "NDMA + Academic Partners",
      tasks: [
        "Form technical validation committee",
        "Define accuracy standards for flood modeling",
        "Specify requirements vs statistical models",
        "Select 3 pilot cities (diverse terrain)",
        "Draft BIS standardization framework"
      ],
      outcome: "NDMA Technical Guidelines"
    },
    {
      phase: "Phase 2",
      title: "State Implementation",
      duration: "Q4 2025 (3 months)",
      owner: "State Governments",
      tasks: [
        "GeM/tender process for procurement",
        "System integrators handle deployment",
        "NIDM trains disaster officials",
        "Real-time monitoring setup",
        "NDRF system integration"
      ],
      outcome: "Operational in pilot cities"
    },
    {
      phase: "Phase 3",
      title: "National Scale",
      duration: "2026 onwards",
      owner: "NDMA Coordination",
      tasks: [
        "100+ high-risk urban centers",
        "National flood intelligence network",
        "Continuous validation & improvement",
        "Climate adaptation integration",
        "Export to neighboring nations"
      ],
      outcome: "National infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Mandate Pathway
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300">
            NDMA sets standards. States implement. Nation benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="mb-4">
                <div className="text-cyan-400 text-3xl font-bold mb-1">{phase.phase}</div>
                <div className="text-sm text-gray-400 mb-3">{phase.duration}</div>
                <h3 className="text-2xl font-bold mb-2">{phase.title}</h3>
                <p className="text-base text-cyan-300">Led by: {phase.owner}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {phase.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex items-start gap-2 text-base text-gray-300">
                    <span className="text-cyan-400 flex-shrink-0 mt-0.5">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t-2 border-slate-700">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Outcome</p>
                <p className="text-base font-semibold text-green-400">{phase.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-xl border-2 border-cyan-500/30">
          <p className="text-2xl font-bold text-center mb-6 text-cyan-300">
            What NDMA Decides This Week
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-5 rounded-lg">
              <p className="font-bold mb-2 text-white text-lg">1. Technical Committee</p>
              <p className="text-base text-gray-300">Form validation committee with academic partners</p>
            </div>
            <div className="bg-slate-800/50 p-5 rounded-lg">
              <p className="font-bold mb-2 text-white text-lg">2. Pilot Cities</p>
              <p className="text-base text-gray-300">Designate 3 cities for 6-month validation</p>
            </div>
            <div className="bg-slate-800/50 p-5 rounded-lg">
              <p className="font-bold mb-2 text-white text-lg">3. Timeline</p>
              <p className="text-base text-gray-300">Approve Q3 2025 start for monsoon 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
