#!/bin/bash

# Create remaining slide components
# Run from ndma-presentation directory

echo "Creating remaining slide components..."

cat > src/components/slides/ValidationSlide.jsx << 'EOF'
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
EOF

cat > src/components/slides/FrameworkSlide.jsx << 'EOF'
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const FrameworkSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {data.phases.map((phase, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2">{phase.phase}</div>
              <div className="text-sm text-gray-400 mb-4">{phase.duration}</div>
              <h3 className="text-lg md:text-xl font-bold mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border border-cyan-500/30">
          <p className="text-lg md:text-xl text-center font-semibold">
            Outcome: NDMA decides if this should become national infrastructure for all high-risk urban centers
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/VisionSlide.jsx << 'EOF'
import React from 'react';

export const VisionSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <p className="text-xl md:text-2xl text-center text-gray-300 mb-8 md:mb-12">
          {data.content}
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {data.applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div key={idx} className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-3" />
                <h3 className="text-lg md:text-xl font-bold mb-2">{app.domain}</h3>
                <p className="text-gray-400 text-sm">{app.status}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30">
          <p className="text-base md:text-lg text-center font-semibold text-gray-300">
            {data.note}
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/CommitmentSlide.jsx << 'EOF'
import React from 'react';

export const CommitmentSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {data.principles.map((principle, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">{principle.title}</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 md:p-8 rounded-2xl border border-yellow-500/30">
          <p className="text-xl md:text-2xl text-center font-semibold">
            This isn't a procurement decision. It's a capability-building partnership.
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

cat > src/components/slides/QuestionSlide.jsx << 'EOF'
import React from 'react';

export const QuestionSlide = ({ data }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          {data.title}
        </h2>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-2xl border-2 border-emerald-500/50 mb-8 md:mb-12">
          <p className="text-2xl md:text-4xl font-bold text-center leading-relaxed mb-8">
            {data.mainQuestion}
          </p>
          <div className="space-y-4">
            {data.subQuestions.map((q, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-700/30 p-4 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-bold">{idx + 1}</span>
                </div>
                <p className="text-lg md:text-xl text-gray-300">{q}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 p-6 md:p-8 rounded-2xl border border-emerald-500/30">
          <p className="text-xl md:text-2xl text-center leading-relaxed">
            {data.closing}
          </p>
        </div>
      </div>
    </div>
  );
};
EOF

echo "Updating slides/index.js..."

cat > src/components/slides/index.js << 'EOF'
export { LandingSlide } from './LandingSlide';
export { HeroSlide } from './HeroSlide';
export { ProblemSlide } from './ProblemSlide';
export { SovereigntySlide } from './SovereigntySlide';
export { SolutionSlide } from './SolutionSlide';
export { CaseStudySlide } from './CaseStudySlide';
export { ValidationSlide } from './ValidationSlide';
export { FrameworkSlide } from './FrameworkSlide';
export { VisionSlide } from './VisionSlide';
export { CommitmentSlide } from './CommitmentSlide';
export { QuestionSlide } from './QuestionSlide';
EOF

echo "Updating App.jsx with all slide types..."

cat > src/App.jsx << 'EOF'
import React, { useState, useEffect } from 'react';
import { slides } from './data/slidesData';
import {
  LandingSlide,
  HeroSlide,
  ProblemSlide,
  SovereigntySlide,
  SolutionSlide,
  CaseStudySlide,
  ValidationSlide,
  FrameworkSlide,
  VisionSlide,
  CommitmentSlide,
  QuestionSlide
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
      case 'validation':
        return <ValidationSlide data={currentSlideData} />;
      case 'framework':
        return <FrameworkSlide data={currentSlideData} />;
      case 'vision':
        return <VisionSlide data={currentSlideData} />;
      case 'commitment':
        return <CommitmentSlide data={currentSlideData} />;
      case 'question':
        return <QuestionSlide data={currentSlideData} />;
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
echo "SUCCESS: All slide components created!"
echo ""
echo "Complete component structure:"
echo "src/"
echo "|-- components/"
echo "|   |-- slides/"
echo "|   |   |-- LandingSlide.jsx"
echo "|   |   |-- HeroSlide.jsx"
echo "|   |   |-- ProblemSlide.jsx"
echo "|   |   |-- SovereigntySlide.jsx"
echo "|   |   |-- SolutionSlide.jsx"
echo "|   |   |-- CaseStudySlide.jsx"
echo "|   |   |-- ValidationSlide.jsx"
echo "|   |   |-- FrameworkSlide.jsx"
echo "|   |   |-- VisionSlide.jsx"
echo "|   |   |-- CommitmentSlide.jsx"
echo "|   |   |-- QuestionSlide.jsx"
echo "|   |   \`-- index.js"
echo "|   \`-- navigation/"
echo "|       \`-- SlideNavigation.jsx"
echo "|-- data/"
echo "|   \`-- slidesData.js"
echo "\`-- App.jsx (70 lines total)"
echo ""
echo "Test with: npm run dev"
echo "Deploy with: npm run build && npx vercel"
echo ""
EOF

chmod +x complete_refactor.sh

echo ""
echo "Created complete_refactor.sh"
echo ""
echo "Run from ndma-presentation directory:"
echo "  bash ../complete_refactor.sh"
echo ""
