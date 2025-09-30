import React from 'react';

export  function ScalabilitySlide({ data = {} }) {
  const deploymentTiers = [
    {
      emoji: "🖥️",
      tier: "Command & Control",
      location: "NDMA/State EOC",
      color: "blue",
      capabilities: [
        "Real-time flood modeling across all monitored cities",
        "Multi-city comparison & resource allocation",
        "Predictive scenarios for 24-72 hour planning",
        "Infrastructure vulnerability mapping",
        "Strategic decision support dashboard"
      ],
      users: "Decision makers, coordinators, strategic planners"
    },
    {
      emoji: "📡",
      tier: "Field Operations",
      location: "NDRF/SDRF Teams",
      color: "green",
      capabilities: [
        "Mobile-optimized flood extent maps",
        "GPS-enabled safe zone identification",
        "Evacuation route safety validation",
        "Relief camp positioning guidance",
        "Real-time updates via field tablets"
      ],
      users: "NDRF personnel, district officials, first responders"
    },
    {
      emoji: "📱",
      tier: "Citizen Interface",
      location: "Public Smartphones",
      color: "cyan",
      capabilities: [
        "Location-based flood risk alerts",
        "Nearest safe zone directions",
        "Evacuation status of their area",
        "Emergency contact information",
        "Simple map interface, low data usage"
      ],
      users: "At-risk populations, general public"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "border-blue-500/30",
        bg: "bg-blue-900/20",
        text: "text-blue-400",
        icon: "bg-blue-500/20 border-blue-500/30"
      },
      green: {
        border: "border-green-500/30",
        bg: "bg-green-900/20",
        text: "text-green-400",
        icon: "bg-green-500/20 border-green-500/30"
      },
      cyan: {
        border: "border-cyan-500/30",
        bg: "bg-cyan-900/20",
        text: "text-cyan-400",
        icon: "bg-cyan-500/20 border-cyan-500/30"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            {data.title || "Scalable Deployment Architecture"}
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300">
            From command centers to smartphones: Information at every level
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {deploymentTiers.map((tier, idx) => {
            const colors = getColorClasses(tier.color);
            
            return (
              <div key={idx} className={`bg-slate-800/50 p-6 lg:p-8 rounded-2xl border-2 ${colors.border} hover:border-opacity-60 transition-all`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Icon & Title */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center border flex-shrink-0`}>
                        <span className="text-3xl">{tier.emoji}</span>
                      </div>
                      <div>
                        <h3 className={`text-2xl lg:text-3xl font-bold ${colors.text} mb-2`}>{tier.tier}</h3>
                        <p className="text-lg text-gray-400">{tier.location}</p>
                      </div>
                    </div>
                    <div className={`${colors.bg} p-4 rounded-lg border ${colors.border}`}>
                      <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide">Primary Users</p>
                      <p className="text-base text-gray-300">{tier.users}</p>
                    </div>
                  </div>

                  {/* Right: Capabilities */}
                  <div className="lg:w-2/3">
                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide font-semibold">Capabilities</p>
                    <ul className="space-y-3">
                      {tier.capabilities.map((capability, capIdx) => (
                        <li key={capIdx} className="flex items-start gap-3">
                          <span className={`${colors.text} flex-shrink-0 mt-1 font-bold`}>•</span>
                          <span className="text-lg text-gray-300">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom emphasis */}
        <div className="bg-gradient-to-r from-blue-900/30 via-green-900/30 to-cyan-900/30 p-8 rounded-2xl border border-blue-500/30">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">1 Platform</p>
              <p className="text-lg text-gray-300">Single modeling engine</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">3 Interfaces</p>
              <p className="text-lg text-gray-300">Role-optimized access</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">Real-Time</p>
              <p className="text-lg text-gray-300">Synchronized updates</p>
            </div>
          </div>
          <p className="text-xl text-center text-white font-semibold">
            Same flood model, different interfaces: Decision makers get strategy tools, field teams get tactical maps, citizens get safety alerts
          </p>
        </div>
      </div>
    </div>
  );
}
