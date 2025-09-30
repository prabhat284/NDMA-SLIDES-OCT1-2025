import React, { useState, useEffect } from 'react';

// Slides Data
const slides = [
  {
    id: 'landing',
    type: 'landing',
    title: 'India\'s Sovereign Flood Intelligence Capability',
    subtitle: 'National Disaster Management Authority',
    date: 'September 29, 2025',
    presenter: 'Aditya Tiwari, Culturiq Research Labs'
  },
  {
    id: 'hero',
    type: 'hero',
    title: 'The Capability Gap',
    subtitle: 'September 2025, Yamuna Flooding',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=800&fit=crop'
  },
  {
    id: 'problem',
    type: 'problem',
    title: 'The Forecasting-Operations Gap'
  },
  {
    id: 'sovereignty',
    type: 'sovereignty',
    title: 'Why Sovereign Capability Matters'
  },
  {
    id: 'solution',
    type: 'solution',
    title: 'Closing the Gap'
  },
  {
    id: 'scalability',
    type: 'scalability',
    title: 'Scalable Deployment Architecture'
  }
];

// Landing Slide Component
const LandingSlide = ({ data, onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg mb-6">
            <p className="text-cyan-400 font-semibold">OPERATIONAL CAPABILITY BRIEFING</p>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
          {data.title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">{data.subtitle}</p>
        <div className="text-lg md:text-xl text-gray-400 mb-12 space-y-2">
          <p>{data.date}</p>
          <p className="text-cyan-400">{data.presenter}</p>
        </div>
        <button
          onClick={onNext}
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-xl font-semibold transition-all inline-flex items-center gap-2"
        >
          Begin Presentation <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

// Hero Slide Component
const HeroSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <img 
          src={data.image}
          alt="Flooded infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center max-w-4xl">
            <div className="inline-block px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-lg mb-6">
              <p className="text-sm font-semibold tracking-wide">OPERATIONAL FAILURE</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Problem Slide Component
const ProblemSlide = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          The Forecasting-Operations Gap
        </h2>
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 lg:p-10 rounded-2xl border-2 border-red-500/40">
          <p className="text-2xl lg:text-3xl text-gray-100 leading-relaxed text-center">
            Current flood forecasting provides probabilistic warnings at river basin scale. 
            NDRF operations require deterministic predictions at coordinate-level precision.
          </p>
        </div>
      </div>
    </div>
  );
};

// Navigation Component
const SlideNavigation = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all"
      >
        ←
      </button>
      <span className="text-sm font-semibold">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all"
      >
        →
      </button>
    </div>
  );
};

// Main App Component
export default function NDMAPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  const renderSlide = () => {
    switch (currentSlideData.type) {
      case 'landing':
        return <LandingSlide data={currentSlideData} onNext={nextSlide} />;
      case 'hero':
        return <HeroSlide data={currentSlideData} />;
      case 'problem':
        return <ProblemSlide data={currentSlideData} />;
      case 'sovereignty':
        return <ProblemSlide data={currentSlideData} />;
      case 'solution':
        return <ProblemSlide data={currentSlideData} />;
      case 'scalability':
        return <ProblemSlide data={currentSlideData} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <p className="text-xl text-gray-400">Slide: {currentSlideData.type}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {renderSlide()}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  );
}
