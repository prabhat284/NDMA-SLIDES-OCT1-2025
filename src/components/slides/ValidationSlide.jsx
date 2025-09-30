import React from 'react';

export const ValidationSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="space-y-4 md:space-y-6">
          {data.partners.map((partner, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <h3 className="text-xl md:text-2xl font-bold">{partner.name}</h3>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold w-fit ${
                  partner.status === 'Complete' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  partner.status === 'Active' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  partner.status === 'Today' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {partner.status}
                </span>
              </div>
              <p className="text-gray-400 mb-2">{partner.role}</p>
              <p className="text-gray-300">{partner.lead}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
