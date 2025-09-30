import React, { useState, useEffect } from 'react';
import { slides } from './data/slidesData';
import { LandingSlide } from './components/slides/LandingSlide';
import { HeroSlide } from './components/slides/HeroSlide';
import { ProblemSlide } from './components/slides/ProblemSlide';
import { SovereigntySlide } from './components/slides/SovereigntySlide';
import { SolutionSlide } from './components/slides/SolutionSlide';
import { ScalabilitySlide } from './components/slides/ScalabilitySlide';
import { LiveDemoSlide } from './components/slides/LiveDemoSlide';
import { DeploymentArchitectureSlide } from './components/slides/DeploymentArchitectureSlide';
import { CaseStudySlide } from './components/slides/CaseStudySlide';
import { ValidationSlide } from './components/slides/ValidationSlide';
import { MandatePathwaySlide } from './components/slides/MandatePathwaySlide';
import { FrameworkSlide } from './components/slides/FrameworkSlide';
import { CommitmentSlide } from './components/slides/CommitmentSlide';
import { NextStepsSlide } from './components/slides/NextStepsSlide';
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
      case 'scalability':
        return <ScalabilitySlide data={currentSlideData} />;
      case 'live-demo':
        return <LiveDemoSlide data={currentSlideData} />;
      case 'deployment-architecture':
        return <DeploymentArchitectureSlide data={currentSlideData} />;
      case 'case-study':
        return <CaseStudySlide data={currentSlideData} />;
      case 'validation':
        return <ValidationSlide data={currentSlideData} />;
      case 'mandate-pathway':
        return <MandatePathwaySlide data={currentSlideData} />;
      case 'framework':
        return <FrameworkSlide data={currentSlideData} />;
      case 'commitment':
        return <CommitmentSlide data={currentSlideData} />;
      case 'next-steps':
        return <NextStepsSlide data={currentSlideData} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
