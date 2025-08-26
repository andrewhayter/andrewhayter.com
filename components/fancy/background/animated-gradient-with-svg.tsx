"use client";

import React, { useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 15,
  blur = "medium",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-3xl"
        : "blur-[100px]";

  // Use stable random values based on color index to avoid hydration mismatch
  const getStableRandom = (index: number, seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return ((hash + index) % 100) / 100;
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const seed = color + index.toString();
          const animationProps = {
            animation: `background-gradient ${speed}s infinite cubic-bezier(0.4, 0, 0.2, 1)`,
            animationDuration: `${speed}s`,
            animationDelay: `${index * 0.3}s`,
            top: `${getStableRandom(index, seed) * 60}%`,
            left: `${getStableRandom(index + 1, seed) * 60}%`,
            "--tx-1": (getStableRandom(index + 2, seed) - 0.5) * 0.6,
            "--ty-1": (getStableRandom(index + 3, seed) - 0.5) * 0.6,
            "--tx-2": (getStableRandom(index + 4, seed) - 0.5) * 0.6,
            "--ty-2": (getStableRandom(index + 5, seed) - 0.5) * 0.6,
            "--tx-3": (getStableRandom(index + 6, seed) - 0.5) * 0.6,
            "--ty-3": (getStableRandom(index + 7, seed) - 0.5) * 0.6,
            "--tx-4": (getStableRandom(index + 8, seed) - 0.5) * 0.6,
            "--ty-4": (getStableRandom(index + 9, seed) - 0.5) * 0.6,
          } as React.CSSProperties;

          return (
            <svg
              key={index}
              className={cn("absolute", "animate-background-gradient")}
              width={
                circleSize * (0.8 + getStableRandom(index + 10, seed) * 1.4)
              }
              height={
                circleSize * (0.8 + getStableRandom(index + 11, seed) * 1.4)
              }
              viewBox="0 0 100 100"
              style={animationProps}
            >
              <circle cx="50" cy="50" r="50" fill={color} />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedGradient;
