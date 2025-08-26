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
  speed = 40,
  blur = "heavy",
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
        : "blur-[120px]";

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

  // Generate organic blob path with smoother curves - more deterministic
  const generateBlobPath = (index: number, seed: string) => {
    const centerX = 50;
    const centerY = 50;
    const baseRadius = 35;
    const radiusVariation = 25;
    const radius =
      baseRadius + getStableRandom(index + 20, seed) * radiusVariation;

    // Use fixed number of points for consistency
    const points = 8;

    let path = "";
    const angles = [];
    const radii = [];

    // Generate base points with consistent spacing
    for (let i = 0; i < points; i++) {
      const angle = (i / points) * 2 * Math.PI;
      const radiusVariation = 0.6 + getStableRandom(index + i * 3, seed) * 0.8;
      const randomRadius = radius * radiusVariation;
      angles.push(angle);
      radii.push(randomRadius);
    }

    // Start path
    const startX = centerX + radii[0] * Math.cos(angles[0]);
    const startY = centerY + radii[0] * Math.sin(angles[0]);
    path = `M ${startX.toFixed(3)} ${startY.toFixed(3)}`;

    // Create smooth curve through all points
    for (let i = 0; i < points; i++) {
      const currentAngle = angles[i];
      const nextAngle = angles[(i + 1) % points];
      const currentRadius = radii[i];
      const nextRadius = radii[(i + 1) % points];

      const currentX = centerX + currentRadius * Math.cos(currentAngle);
      const currentY = centerY + currentRadius * Math.sin(currentAngle);
      const nextX = centerX + nextRadius * Math.cos(nextAngle);
      const nextY = centerY + nextRadius * Math.sin(nextAngle);

      // Calculate control points for smooth curve
      const midAngle = (currentAngle + nextAngle) / 2;
      const midRadius = (currentRadius + nextRadius) / 2;
      const controlRadius = midRadius * 1.2;

      const controlX = centerX + controlRadius * Math.cos(midAngle);
      const controlY = centerY + controlRadius * Math.sin(midAngle);

      path += ` Q ${controlX.toFixed(3)} ${controlY.toFixed(3)} ${nextX.toFixed(3)} ${nextY.toFixed(3)}`;
    }

    path += " Z";
    return path;
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const seed = color + index.toString();
          const animationProps = {
            animation: `background-gradient ${speed}s infinite cubic-bezier(0.4, 0, 0.6, 1)`,
            animationDuration: `${speed}s`,
            animationDelay: `${index * 1.2}s`,
            top: `${getStableRandom(index, seed) * 80}%`,
            left: `${getStableRandom(index + 1, seed) * 80}%`,
            "--tx-1": (getStableRandom(index + 2, seed) - 0.5) * 1.5,
            "--ty-1": (getStableRandom(index + 3, seed) - 0.5) * 1.5,
            "--tx-2": (getStableRandom(index + 4, seed) - 0.5) * 1.5,
            "--ty-2": (getStableRandom(index + 5, seed) - 0.5) * 1.5,
            "--tx-3": (getStableRandom(index + 6, seed) - 0.5) * 1.5,
            "--ty-3": (getStableRandom(index + 7, seed) - 0.5) * 1.5,
            "--tx-4": (getStableRandom(index + 8, seed) - 0.5) * 1.5,
            "--ty-4": (getStableRandom(index + 9, seed) - 0.5) * 1.5,
          } as React.CSSProperties;

          const blobPath = generateBlobPath(index, seed);
          const size =
            circleSize * (0.8 + getStableRandom(index + 10, seed) * 1.4);

          return (
            <svg
              key={index}
              className={cn("absolute animate-background-gradient")}
              style={animationProps}
              width={size}
              height={size}
              viewBox="0 0 100 100"
            >
              <path d={blobPath} fill={color} />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedGradient;
