"use client";

import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";
import { v4 as uuidv4 } from "uuid";

import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-dimensions";

interface PixelTrailProps {
  pixelSize: number; // px
  fadeDuration?: number; // ms
  delay?: number; // ms
  className?: string;
  pixelClassName?: string;
  colors?: string[]; // Array of colors to randomly choose from
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
  colors = ["#000000"],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);
  const trailId = useRef(uuidv4());

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / pixelSize);
      const y = Math.floor((e.clientY - rect.top) / pixelSize);

      const pixelElement = document.getElementById(
        `${trailId.current}-pixel-${x}-${y}`
      );
      if (pixelElement) {
        const animatePixel = (pixelElement as any).__animatePixel;
        if (animatePixel) animatePixel();
      }
    },
    [pixelSize]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize]
  );
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize]
  );

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
              colors={colors}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PixelTrail;

interface PixelDotProps {
  id: string;
  size: number;
  fadeDuration: number;
  delay: number;
  className?: string;
  colors: string[];
}

const PixelDot: React.FC<PixelDotProps> = React.memo(
  ({ id, size, fadeDuration, delay, className, colors }) => {
    const controls = useAnimationControls();

    const animatePixel = useCallback(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
      });
    }, [fadeDuration, delay]);

    // Attach the animatePixel function to the DOM element
    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          (node as any).__animatePixel = animatePixel;
        }
      },
      [animatePixel]
    );

    // Use stable color selection based on id to avoid hydration mismatch
    const getStableColor = (id: string, colors: string[]) => {
      let hash = 0;
      for (let i = 0; i < id.length; i++) {
        const char = id.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return colors[Math.abs(hash) % colors.length];
    };

    const stableColor = getStableColor(id, colors);

    return (
      <motion.div
        id={id}
        ref={ref}
        className={cn("cursor-pointer-none pointer-events-none", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: stableColor,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
      />
    );
  }
);

PixelDot.displayName = "PixelDot";
