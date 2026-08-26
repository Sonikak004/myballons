"use client";

import { useEffect, useState } from "react";

// Vibrant, classic party balloon colors!
const VIBRANT_COLORS = [
  { r: 255, g: 59, b: 48 },   // Bright Red
  { r: 255, g: 149, b: 0 },   // Orange
  { r: 255, g: 204, b: 0 },   // Yellow
  { r: 76, g: 217, b: 100 },  // Green
  { r: 90, g: 200, b: 250 },  // Light Blue
  { r: 0, g: 122, b: 255 },   // Blue
  { r: 88, g: 86, b: 214 },   // Purple
  { r: 255, g: 45, b: 85 }    // Pink
];

// Fixed positions on the extreme left and right so they never block central text
const BALLOON_POSITIONS = [
  { top: "15vh", left: "3vw" },
  { top: "65vh", left: "6vw" },
  { top: "35vh", left: "10vw" },
  { top: "25vh", right: "5vw" },
  { top: "75vh", right: "8vw" },
  { top: "45vh", right: "2vw" }
];

export default function FloatingBalloons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden">
      {BALLOON_POSITIONS.map((pos, idx) => {
        const color = VIBRANT_COLORS[idx % VIBRANT_COLORS.length];
        return (
          <div
            key={idx}
            className="balloon balloon-anim"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: "auto", // Override the CSS bottom
              animationDuration: `${7 + (idx % 4)}s`,
              animationDelay: `-${idx}s`,
              opacity: 0.25, // Very soft opacity so they are purely decorative
              transform: `scale(${0.6 + (idx * 0.1)})`, // Slightly different sizes
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`,
              color: `rgba(${color.r}, ${color.g}, ${color.b}, 1)`,
              boxShadow: `inset -7px -3px 10px rgba(${Math.max(0, color.r - 30)}, ${Math.max(0, color.g - 30)}, ${Math.max(0, color.b - 30)}, 1)`
            }}
          />
        );
      })}
    </div>
  );
}
