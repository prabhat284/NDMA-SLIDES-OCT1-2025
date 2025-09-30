import React from 'react';

export const CaseStudySlide = ({ data }) => {
  const Icon = data.icon;
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8 md:mb-12">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">{data.subtitle}</p>
        </div>
        
        {data.image && (
          <div className="mb-8 rounded-xl overflow-hidden border border-green-500/30">
            <img 
              src={data.image} 
              alt={data.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-green-500/30">
              <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
              <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{metric.value}</p>
              <p className="text-gray-300 text-sm">{metric.context}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 md:p-8 rounded-2xl border border-green-500/30">
          <p className="text-lg md:text-xl text-center leading-relaxed">
            {data.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
};
