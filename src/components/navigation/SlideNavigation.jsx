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
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-6 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent pointer-events-none">
  <div className="flex items-center gap-4 bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 pointer-events-auto">
  
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
