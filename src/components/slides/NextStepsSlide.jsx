import React from 'react';

export const NextStepsSlide = ({ data = {} }) => {
  const nextSteps = [
    {
      number: "1",
      title: "Technical Validation Committee",
      action: "Form joint committee (NDMA + Academic partners)",
      timeline: "This week",
      owner: "NDMA to designate members",
      color: "blue"
    },
    {
      number: "2",
      title: "Pilot City Selection",
      action: "Designate 3 cities with diverse terrain profiles",
      timeline: "Within 2 weeks",
      owner: "NDMA in consultation with states",
      color: "green"
    },
    {
      number: "3",
      title: "Technical Guidelines",
      action: "Co-develop national standards with academic validation",
      timeline: "Q3 2025 (3 months)",
      owner: "Joint technical committee",
      color: "cyan"
    },
    {
      number: "4",
      title: "Pilot Launch",
      action: "Deploy in 3 cities for monsoon 2025 validation",
      timeline: "Q3 2025",
      owner: "System integrators + NDMA oversight",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { border: "border-blue-500/40", bg: "bg-blue-500/20", text: "text-blue-400" },
      green: { border: "border-green-500/40", bg: "bg-green-500/20", text: "text-green-400" },
      cyan: { border: "border-cyan-500/40", bg: "bg-cyan-500/20", text: "text-cyan-400" },
      orange: { border: "border-orange-500/40", bg: "bg-orange-500/20", text: "text-orange-400" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Next Steps
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300 mb-6">
            From capability demonstration to national infrastructure
          </p>
          <div className="inline-block px-6 py-3 bg-emerald-600/20 border-2 border-emerald-500/30 rounded-lg">
            <p className="text-emerald-400 font-bold text-xl">Decision Timeline: This Week</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {nextSteps.map((step, idx) => {
            const colors = getColorClasses(step.color);
            return (
              <div key={idx} className={`bg-slate-800/50 p-6 rounded-xl border-2 ${colors.border} hover:border-opacity-70 transition-all`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center border-2 ${colors.border} flex-shrink-0`}>
                    <span className={`${colors.text} font-bold text-2xl`}>{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-lg text-gray-300 mb-3">{step.action}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold border ${colors.border}`}>
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{step.owner}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical emphasis */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 p-8 rounded-2xl border-2 border-emerald-500/40 mb-8">
          <p className="text-2xl lg:text-3xl font-bold text-center mb-4 text-white">
            The Capability Exists. The Validation is Complete.
          </p>
          <p className="text-xl lg:text-2xl text-center text-gray-300 mb-6">
            What NDMA decides this week determines whether India has sovereign flood intelligence by monsoon 2026
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700">
              <p className="text-3xl font-bold text-emerald-400 mb-1">IIT Delhi</p>
              <p className="text-base text-gray-400">Academic validation complete</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700">
              <p className="text-3xl font-bold text-emerald-400 mb-1">CEEW</p>
              <p className="text-base text-gray-400">Policy integration ready</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700">
              <p className="text-3xl font-bold text-emerald-400 mb-1">Stanford</p>
              <p className="text-base text-gray-400">International collaboration</p>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-slate-800/50 p-6 rounded-xl border-2 border-slate-700 text-center">
          <p className="text-xl text-gray-300 mb-2">
            <span className="font-bold text-white text-2xl">Aditya Tiwari</span>
          </p>
          <p className="text-lg text-cyan-400 mb-3">Founder, Culturiq Research Labs</p>
          <p className="text-base text-gray-400">
            Validated by: Prof. Manabendra Saharia (IIT Delhi) • CEEW Policy Team • Stanford Post-doctoral Researchers
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-400">
            This isn't a procurement decision. It's a sovereignty decision.
          </p>
        </div>
      </div>
    </div>
  );
};
