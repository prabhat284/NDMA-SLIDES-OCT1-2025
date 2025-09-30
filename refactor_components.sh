#!/bin/bash

# Refactor NDMA Presentation into modular components
# Run this from the ndma-presentation directory

echo "Refactoring into modular components..."

# Create component directories
mkdir -p src/components/slides
mkdir -p src/components/navigation
mkdir -p src/data

echo "Creating slide data file..."

cat > src/data/slidesData.js << 'EOF'
import { Target, Zap, Shield, Globe, CheckCircle, TrendingDown } from 'lucide-react';

export const slides = [
  {
    id: 'landing',
    type: 'landing',
    title: 'India\'s Sovereign Causal AI Capability',
    subtitle: 'National Disaster Management Authority',
    date: 'September 29, 2025',
    presenter: 'Aditya Tiwari, Culturiq Research Labs'
  },
  {
    id: 'hero',
    type: 'hero',
    title: 'The Capability Gap',
    subtitle: 'September 2025, Yamuna Flooding',
    image: '/yamuna-flooding.jpg'
  },
  {
    id: 'problem',
    type: 'problem',
    title: 'The Problem We Face',
    content: [
      'Relief camps flooded during disaster response',
      'NDRF personnel and evacuees at risk',
      'Current forecasting: "River will flood"',
      'Operational need: "Water will reach 2.3m at THESE coordinates"',
      'Statistical models cannot provide operational precision'
    ]
  },
  {
    id: 'sovereignty',
    type: 'sovereignty',
    title: 'The Strategic Question',
    content: 'Should India depend on foreign AI providers for flood intelligence—sending our terrain data, infrastructure details, and vulnerability information abroad?',
    highlight: 'Or should we build sovereign capability for high-stakes decisions where lives and national security are at stake?'
  },
  {
    id: 'solution',
    type: 'solution',
    title: 'What Sovereign Capability Looks Like',
    metrics: [
      { label: 'Accuracy (IoU)', value: '0.774', detail: 'IIT Delhi Validation' },
      { label: 'Processing Time', value: '3.25 min', detail: 'Per tile, CPU only' },
      { label: 'Speed Advantage', value: '13x', detail: 'vs high-res ground truth' },
      { label: 'Infrastructure', value: '100%', detail: 'Domestic computing' }
    ]
  },
  {
    id: 'yamuna-validation',
    type: 'case-study',
    title: 'September 2025 Yamuna Flooding',
    subtitle: 'Recent Operational Validation (3 Weeks Ago)',
    icon: CheckCircle,
    metrics: [
      { label: 'IoU Accuracy', value: '0.774', context: 'IIT Delhi HydroSense Lab' },
      { label: 'Processing Time', value: '3.25 min', context: 'Per 200 sq km tile' },
      { label: 'Lead Time', value: '48 hours', context: 'Relief camp flood prediction' }
    ],
    conclusion: 'Validated capability to predict relief camp flooding locations before deployment',
    image: '/yamuna-validation.jpg'
  },
  {
    id: 'gurdaspur-optimization',
    type: 'case-study',
    title: 'Gurdaspur Infrastructure Optimization',
    subtitle: 'AI-Designed Flood Mitigation',
    icon: TrendingDown,
    metrics: [
      { label: 'Flood Reduction', value: '19.66%', context: '119,813 cubic meters water managed' },
      { label: 'AI-Designed Solutions', value: '6 culverts', context: '$150K estimated cost' },
      { label: 'Processing Time', value: '<5 min', context: 'Autonomous design generation' }
    ],
    conclusion: 'Demonstrates infrastructure planning capability, not just prediction',
    image: '/gurdaspur-optimization.jpg'
  },
  {
    id: 'jabalpur-scale',
    type: 'case-study',
    title: 'Jabalpur District Analysis',
    subtitle: 'Multi-Tile Autonomous Optimization',
    icon: Target,
    metrics: [
      { label: 'Coverage Area', value: '20 sq km', context: '9 tiles processed' },
      { label: 'Road Flood Reduction', value: '8-14%', context: 'Per tile optimization' },
      { label: 'Total Processing', value: '<1 hour', context: 'District-scale analysis' }
    ],
    conclusion: 'Proves scalability for state/national deployment',
    image: '/jabalpur-scale.jpg'
  },
  {
    id: 'validation',
    type: 'validation',
    title: 'Current Validation',
    partners: [
      { name: 'IIT Delhi', role: 'Academic validation', status: 'Complete', lead: 'Prof. Manabendra Saharia (ex-NASA/NCAR)' },
      { name: 'CEEW', role: 'Policy research', status: 'Active', lead: 'MP Government presentation this week' },
      { name: 'Stanford', role: 'International interest', status: 'Pending', lead: 'Methodology collaboration inquiry' },
      { name: 'NDMA', role: 'Operational deployment', status: 'Today', lead: 'Anchor validation partner' }
    ]
  },
  {
    id: 'framework',
    type: 'framework',
    title: '90-Day Validation Framework',
    phases: [
      {
        phase: 'Phase 1',
        duration: '30 days',
        title: 'Retrospective Analysis',
        tasks: [
          'Analyze September 2025 Yamuna flooding',
          'Model 2-3 additional recent events',
          'Compare predictions vs actual relief camp positions',
          'Quantify precision improvement'
        ]
      },
      {
        phase: 'Phase 2',
        duration: '30 days',
        title: 'Real-Time Monitoring',
        tasks: [
          'Deploy during remaining monsoon season',
          'Process live rainfall and terrain data',
          'Provide predictions to NDMA command center',
          'Evaluate operational utility'
        ]
      },
      {
        phase: 'Phase 3',
        duration: '30 days',
        title: 'Integration Planning',
        tasks: [
          'Define integration protocols with NDRF',
          'Set accuracy thresholds for decisions',
          'Create standard operating procedures',
          'Prepare scaling recommendations'
        ]
      }
    ]
  },
  {
    id: 'vision',
    type: 'vision',
    title: 'Beyond Flood Prediction',
    content: 'Causal AI foundation applies across high-stakes domains where statistical models fail and mistakes cost lives',
    applications: [
      { domain: 'Disaster Management', status: 'NDMA validation (anchor)', icon: Target },
      { domain: 'Climate Intelligence', status: 'MRV platform integration', icon: Globe },
      { domain: 'Infrastructure Risk', status: 'GMR/Adani interest', icon: Shield },
      { domain: 'Earthquake Early Warning', status: 'NTT Malaysia POC', icon: Zap }
    ],
    note: 'Sequencing matters: Disaster management validation first establishes sovereign capability'
  },
  {
    id: 'commitment',
    type: 'commitment',
    title: 'Our Commitment',
    principles: [
      {
        title: 'Mission Over Commercials',
        description: 'Optimizing for capability validation, not revenue maximization'
      },
      {
        title: 'Knowledge Transfer',
        description: 'This becomes NDMA\'s capability, not our proprietary service'
      },
      {
        title: 'Full Transparency',
        description: 'No black boxes, no vendor lock-in, complete methodology access'
      },
      {
        title: 'India First',
        description: 'Prioritizing domestic partnerships despite international interest'
      }
    ]
  },
  {
    id: 'question',
    type: 'question',
    title: 'The Question Before Us',
    mainQuestion: 'Should India build sovereign capability in causal AI for high-stakes decisions?',
    subQuestions: [
      'Can we validate this works for disaster management?',
      'Should NDMA anchor this national capability?',
      'Will this establish precedent for other critical domains?'
    ],
    closing: 'Today is about validation. Tomorrow is about capability. Together, we can build India\'s foundation for trustworthy AI in critical applications.'
  }
];
EOF

echo "Creating slide components..."

cat > src/components/slides/LandingSlide.jsx << 'EOF'
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const LandingSlide = ({ data, onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg mb-6">
            <p className="text-cyan-400 font-semibold">STRATEGIC PARTNERSHIP PROPOSAL</p>
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
          Begin Presentation <ChevronRight className="w-6 h-6" />
        </button>
        <div className="mt-12 text-sm text-gray-500">
          <p>Navigate with arrow keys or buttons • Mobile optimized • Share this URL for reference</p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/HeroSlide.jsx << 'EOF'
import React from 'react';

export const HeroSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        <img 
          src={data.image || "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&h=800&fit=crop"}
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
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-lg border border-red-500/30">
              <p className="text-base md:text-lg leading-relaxed">
                Relief camps meant to save lives were flooded during disaster response. 
                NDRF personnel and evacuees at risk. <span className="text-red-400 font-semibold">This is what inadequate prediction looks like.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/ProblemSlide.jsx << 'EOF'
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ProblemSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="space-y-4 md:space-y-6">
          {data.content.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-slate-800/50 p-4 md:p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400 flex-shrink-0 mt-1" />
              <p className="text-base md:text-xl leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg border border-red-500/30">
          <p className="text-lg md:text-xl text-center font-semibold">
            Statistical models cannot provide the operational precision NDRF needs to safely position response infrastructure
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/SovereigntySlide.jsx << 'EOF'
import React from 'react';

export const SovereigntySlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700 mb-8">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 text-center mb-8">
            {data.content}
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-8"></div>
          <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            {data.highlight}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
            <h3 className="text-xl font-bold mb-3 text-red-400">Foreign Dependency</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Send critical data abroad</li>
              <li>• No control over algorithms</li>
              <li>• Vendor lock-in</li>
              <li>• Security vulnerability</li>
            </ul>
          </div>
          <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold mb-3 text-green-400">Sovereign Capability</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Domestic infrastructure</li>
              <li>• Full methodology control</li>
              <li>• Strategic autonomy</li>
              <li>• National security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/SolutionSlide.jsx << 'EOF'
import React from 'react';

export const SolutionSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {data.metrics.map((metric, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">{metric.label}</p>
              <p className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{metric.value}</p>
              <p className="text-gray-300">{metric.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 md:p-8 rounded-2xl border border-green-500/30">
          <p className="text-xl md:text-2xl text-center font-semibold mb-4">
            Physics-Grounded Causal AI
          </p>
          <p className="text-lg md:text-xl text-center text-gray-300">
            Built entirely on domestic infrastructure • No foreign cloud dependencies • Full methodology transparency
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/CaseStudySlide.jsx << 'EOF'
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
EOF

cat > src/components/slides/index.js << 'EOF'
export { LandingSlide } from './LandingSlide';
export { HeroSlide } from './HeroSlide';
export { ProblemSlide } from './ProblemSlide';
export { SovereigntySlide } from './SovereigntySlide';
export { SolutionSlide } from './SolutionSlide';
export { CaseStudySlide } from './CaseStudySlide';
EOF

cat > src/components/navigation/SlideNavigation.jsx << 'EOF'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext, 
  onGoTo, 
  isMobile 
}) => {
  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-slate-800 rounded-lg hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            {!isMobile && 'Previous'}
          </button>
          
          <div className="flex gap-1 md:gap-2 overflow-x-auto max-w-md">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => onGoTo(idx)}
                className={`h-2 md:h-3 rounded-full transition-all flex-shrink-0 ${
                  idx === currentSlide 
                    ? 'bg-cyan-400 w-6 md:w-8' 
                    : 'bg-slate-600 hover:bg-slate-500 w-2 md:w-3'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-cyan-600 rounded-lg hover:bg-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            {!isMobile && 'Next'}
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-slate-700">
        <span className="text-xs md:text-sm text-gray-400">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </>
  );
};
EOF

echo "Creating main App.jsx..."

cat > src/App.jsx << 'EOF'
import React, { useState, useEffect } from 'react';
import { slides } from './data/slidesData';
import {
  LandingSlide,
  HeroSlide,
  ProblemSlide,
  SovereigntySlide,
  SolutionSlide,
  CaseStudySlide
} from './components/slides';
import { SlideNavigation } from './components/navigation/SlideNavigation';

const NDMAPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentSlideData = slides[currentSlide];

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderSlide = () => {
    switch (currentSlideData.type) {
      case 'landing':
        return <LandingSlide data={currentSlideData} onNext={nextSlide} />;
      case 'hero':
        return <HeroSlide data={currentSlideData} />;
      case 'problem':
        return <ProblemSlide data={currentSlideData} />;
      case 'sovereignty':
        return <SovereigntySlide data={currentSlideData} />;
      case 'solution':
        return <SolutionSlide data={currentSlideData} />;
      case 'case-study':
        return <CaseStudySlide data={currentSlideData} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-400">Slide type not implemented: {currentSlideData.type}</p>
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
        onGoTo={goToSlide}
        isMobile={isMobile}
      />
    </div>
  );
};

export default NDMAPresentation;
EOF

echo ""
echo "SUCCESS: Refactored into modular components!"
echo ""
echo "New structure:"
echo "src/"
echo "|-- components/"
echo "|   |-- slides/"
echo "|   |   |-- LandingSlide.jsx"
echo "|   |   |-- HeroSlide.jsx"
echo "|   |   |-- ProblemSlide.jsx"
echo "|   |   |-- SovereigntySlide.jsx"
echo "|   |   |-- SolutionSlide.jsx"
echo "|   |   |-- CaseStudySlide.jsx"
echo "|   |   \`-- index.js"
echo "|   \`-- navigation/"
echo "|       \`-- SlideNavigation.jsx"
echo "|-- data/"
echo "|   \`-- slidesData.js"
echo "\`-- App.jsx (now only 60 lines!)"
echo ""
echo "To complete remaining slides, create:"
echo "- ValidationSlide.jsx"
echo "- FrameworkSlide.jsx"
echo "- VisionSlide.jsx"
echo "- CommitmentSlide.jsx"
echo "- QuestionSlide.jsx"
echo ""
echo "Test with: npm run dev"
echo ""
EOF

chmod +x refactor_components.sh

echo ""
echo "SUCCESS: Created refactor_components.sh"
echo ""
echo "Run this script from your ndma-presentation directory:"
echo "  cd ndma-presentation"
echo "  bash ../refactor_components.sh"
echo ""
echo "This will create a clean modular structure:"
echo "- Data separated from components"
echo "- Each slide type in its own file"
echo "- Navigation extracted"
echo "- App.jsx reduced to ~60 lines"
echo ""
