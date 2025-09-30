import React from 'react';

export const FrameworkSlide = ({ data = {} }) => {
  const phases = [
    {
      phase: "Month 1-2",
      title: "Foundation",
      activities: [
        "Technical committee formation",
        "Pilot city selection & stakeholder mapping",
        "Data integration (ISRO, IMD, terrain)",
        "Infrastructure assessment",
        "Baseline vulnerability documentation"
      ],
      color: "blue"
    },
    {
      phase: "Month 3-4",
      title: "Deployment",
      activities: [
        "System deployment in pilot cities",
        "Real-time monitoring activation",
        "NDRF/SDRF training programs",
        "Command center dashboard setup",
        "Field tablet distribution"
      ],
      color: "green"
    },
    {
      phase: "Month 5-6",
      title: "Validation",
      activities: [
        "Live monsoon season testing",
        "Accuracy validation vs actual events",
        "Operational feedback from field teams",
        "Documentation & case studies",
        "National scaling roadmap"
      ],
      color: "cyan"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-500/40 hover:border-blue-500/60",
      green: "border-green-500/40 hover:border-green-500/60",
      cyan: "border-cyan-500/40 hover:border-cyan-500/60"
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          6-Month Pilot Framework
        </h2>
        <p className="text-2xl lg:text-3xl text-center text-gray-300 mb-12">
          Proof of concept to national blueprint
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, idx) => (
            <div key={idx} className={`bg-slate-800/50 p-6 rounded-xl border-2 ${getColorClasses(phase.color)} transition-all`}>
              <div className="mb-6">
                <div className="text-cyan-400 text-2xl font-bold mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold">{phase.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {phase.activities.map((activity, actIdx) => (
                  <li key={actIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0 mt-1 text-lg">✓</span>
                    <span className="text-base text-gray-300">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div className="bg-slate-800/50 p-8 rounded-xl border-2 border-slate-700 mb-8">
          <h3 className="text-2xl font-bold text-center text-cyan-400 mb-8">Pilot Program Deliverables</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Technical Output</p>
                <p className="text-lg text-white font-semibold">Accuracy validation report</p>
                <p className="text-gray-400 text-sm mt-1">Historical comparison (2020-2025) + live monsoon validation</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Operational Output</p>
                <p className="text-lg text-white font-semibold">Field operations manual</p>
                <p className="text-gray-400 text-sm mt-1">NDRF protocols for using coordinate-level predictions</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Policy Output</p>
                <p className="text-lg text-white font-semibold">NDMA technical guidelines</p>
                <p className="text-gray-400 text-sm mt-1">National standards for flood intelligence systems</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Scaling Output</p>
                <p className="text-lg text-white font-semibold">Replication framework</p>
                <p className="text-gray-400 text-sm mt-1">Blueprint for 100+ cities deployment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border-2 border-cyan-500/30">
          <p className="text-2xl text-center font-bold text-white mb-2">
            Decision Point: End of 6 Months
          </p>
          <p className="text-xl text-center text-gray-300">
            NDMA evaluates if this should become national infrastructure for all high-risk urban centers
          </p>
        </div>
      </div>
    </div>
  );
};
