import React, { useState } from 'react';

export const LiveDemoSlide = ({ data = {} }) => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const demoOptions = [
    {
      id: 1,
      emoji: "🗺️",
      title: "Historical Validation",
      description: "Pick any 2024-25 flood event",
      details: [
        "Yamuna flooding (September 2025)",
        "Mumbai monsoon events (June-July 2024)",
        "Chennai urban flooding (2023-24)",
        "Model prediction vs actual outcome comparison"
      ],
      processingTime: "3.25 minutes",
      accuracy: "0.774 IoU validated by IIT Delhi"
    },
    {
      id: 2,
      emoji: "📍",
      title: "Future Scenario Modeling",
      description: "Any coordinates of concern",
      details: [
        "Provide GPS coordinates",
        "Input rainfall scenario (IMD forecasts)",
        "Terrain characteristics (ISRO data)",
        "Real-time flood extent prediction"
      ],
      processingTime: "3.25 minutes",
      accuracy: "Physics-grounded causal modeling"
    },
    {
      id: 3,
      emoji: "📊",
      title: "Infrastructure Planning",
      description: "Validate response positioning",
      details: [
        "Proposed relief camp locations",
        "Evacuation route safety analysis",
        "Critical infrastructure vulnerability",
        "NDRF deployment optimization"
      ],
      processingTime: "3.25 minutes",
      accuracy: "Court-defensible methodology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-600/20 border-2 border-green-500/30 rounded-lg mb-6">
            <span className="text-2xl">⚡</span>
            <p className="text-green-400 font-bold text-xl">OPERATIONAL DEMONSTRATION</p>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            We Can Model Any Location Right Now
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300">
            This isn't a prototype. It's production-ready infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {demoOptions.map((option) => {
            const isSelected = selectedDemo === option.id;
            
            return (
              <div 
                key={option.id}
                onClick={() => setSelectedDemo(option.id)}
                className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                  isSelected 
                    ? 'bg-green-900/30 border-green-500' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-green-500/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSelected 
                      ? 'bg-green-500/30 border-2 border-green-500' 
                      : 'bg-green-500/20 border border-green-500/30'
                  }`}>
                    <span className="text-2xl">{option.emoji}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl lg:text-2xl font-bold">{option.title}</h3>
                    <p className="text-base text-gray-400">{option.description}</p>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-4 space-y-3">
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Demonstration Steps:</p>
                      <ul className="space-y-2">
                        {option.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-base">
                            <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                            <span className="text-gray-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Processing Time</p>
                        <p className="text-base font-semibold text-green-400">{option.processingTime}</p>
                      </div>
                      <div className="bg-slate-900/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400 mb-1">Validation</p>
                        <p className="text-base font-semibold text-green-400">{option.accuracy}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom emphasis */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-xl border-2 border-green-500/30">
          <div className="text-center mb-6">
            <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Demonstrate During This Meeting
            </p>
            <p className="text-xl lg:text-2xl text-gray-300">
              Laptop ready • Model loaded • ISRO data integrated • 3.25 minute processing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">0.774</p>
              <p className="text-base lg:text-lg text-gray-400">IoU Accuracy (IIT Delhi)</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">3.25 min</p>
              <p className="text-base lg:text-lg text-gray-400">Processing Time (M4 Pro)</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">100%</p>
              <p className="text-base lg:text-lg text-gray-400">Indian Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-400">
            Pick any scenario. We'll model it together. No preparation needed.
          </p>
        </div>
      </div>
    </div>
  );
};
