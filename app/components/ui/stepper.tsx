import React, { ReactElement } from "react";
import CheckIcon from "~/assets/icons/CheckIcon";
import useWindowSize from "~/hooks/useWindowSize";

interface Step {
  text: string;
  icon: ReactElement;
}

interface StepperProps {
  steps: Step[];
  activeStep?: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep = 0 }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const getIconColor = (isActive: boolean, isCompleted: boolean): string => {
    if (isActive) return "#0E0CFF";
    return "";
  };

  return isMobile ? (
    <div className="flex items-center w-full justify-between">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const iconColor = getIconColor(isActive, isCompleted);
        const isLastStep = index === steps.length - 1;
        const stepWidth = isLastStep
          ? isActive
            ? "10%"
            : "5%"
          : `${145 / steps.length}%`;

        return (
          <React.Fragment key={index}>
            <div
              className="flex items-center relative"
              style={{ width: stepWidth }}
            >
              <div
                className={`rounded-full flex items-center justify-center z-10 ${
                  isActive
                    ? "border-neutral-border border-[1px] shadow-xl w-8 h-8 bg-white"
                    : isCompleted
                    ? "bg-status-warning-light  w-6 h-6"
                    : "bg-status-info-dark  w-3 h-3"
                }`}
              >
                {isCompleted ? (
                  <CheckIcon />
                ) : isActive ? (
                  React.cloneElement(
                    step.icon,
                    iconColor ? { color: iconColor } : {}
                  )
                ) : null}
              </div>

              {!isLastStep && (
                <div className="absolute left-0 right-0 h-[2px] top-1/2 transform -translate-y-1/2">
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      isCompleted
                        ? "bg-status-warning-border w-full"
                        : "bg-transparent border-t-2 border-dashed border-gray-200"
                    }`}
                    style={{
                      transitionProperty: "width, background-color",
                    }}
                  />
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col space-y-1">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const iconColor = getIconColor(isActive, isCompleted);

        return (
          <div key={index} className="flex items-start">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center -mt-[0.25rem] ${
                  isActive
                    ? "border-neutral-border border-[1px] shadow-xl bg-white"
                    : isCompleted
                    ? "bg-status-warning-light"
                    : "bg-status-info-light"
                }`}
              >
                {isCompleted ? (
                  <CheckIcon />
                ) : (
                  React.cloneElement(
                    step.icon,
                    iconColor ? { color: iconColor } : {}
                  )
                )}
              </div>

              {index !== steps.length - 1 && (
                <div className="relative w-[2px] h-8">
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      isCompleted
                        ? "bg-status-warning-border h-full"
                        : "bg-transparent border-l-2 border-dashed border-gray-200"
                    }`}
                    style={{
                      transitionProperty: "height, background-color",
                    }}
                  />
                </div>
              )}
            </div>

            <div className="ml-3 pt-1 -mt-[0.25rem]">
              <span
                className={`text-sm font-medium ${
                  isActive
                    ? "text-neutral-black"
                    : isCompleted
                    ? "text-neutral-black"
                    : "text-neutral-text-tertiary"
                }`}
              >
                {step.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
