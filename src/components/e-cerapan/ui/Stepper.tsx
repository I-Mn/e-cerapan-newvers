import React from 'react';

interface StepperProps {
  steps: string[];
  currentStep: number; // 0-indexed
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2 min-w-[120px]">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-semibold border-2 transition-colors ${
                  isActive || isCompleted
                    ? 'bg-[#2479BC] border-[#2479BC] text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`text-[13px] text-center leading-tight ${
                  isActive || isCompleted ? 'text-[#2479BC] font-medium' : 'text-gray-400 font-normal'
                }`}
              >
                {step}
              </span>
            </div>
            {!isLast && (
              <div
                className={`h-[2px] w-16 mt-[-24px] ${
                  isCompleted ? 'bg-[#2479BC]' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
