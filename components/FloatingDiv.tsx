import React, { ReactNode, useId } from "react";

type FloatingDivProps = {
  className?: string;
  children?: ReactNode;
  translateX?: number;
  translateY?: number;
  duration?: number; // optional float duration
  style?: React.CSSProperties;
};

const FloatingDiv: React.FC<FloatingDivProps> = ({
  className = "",
  children,
  translateX = 3,
  translateY = 6,
  duration = 4,
  style,
}) => {
  const id = useId(); // ensures uniqueness across instances
  const animationName = `float-${id.replace(/:/g, "")}`; // sanitize ID for CSS use

  const keyframes = `
    @keyframes ${animationName} {
      0%, 100% {
        transform: translateX(0px) translateY(0px);
      }
      50% {
        transform: translateX(${translateX}px) translateY(-${translateY}px);
      }
    }
  `;

  return (
    <>
      <div
        className={`transition-all ease-in-out hover:animation-pause ${className}`}
       style={{
    animation: `${animationName} ${duration}s ease-in-out infinite`,
    ...style, // 👈 this line is important!
  }}
      >
        {children}
      </div>
      <style>{keyframes}</style>
         
      <style>{`
        .hover\\:animation-pause:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </>
  );
};

export default FloatingDiv;
