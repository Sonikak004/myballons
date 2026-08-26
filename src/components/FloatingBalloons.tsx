"use client";

import { useEffect, useState } from "react";

// The brand palette for the balloons: Navy, Gold, Red, Cream/White
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

interface Balloon {
  id: string;
  color: { r: number; g: number; b: number };
  left: number;
  duration: number;
  delay: number;
}

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const launchBalloons = (count: number = 25) => {
    const newBalloons: Balloon[] = [];
    
    for (let i = 0; i < count; i++) {
      const color = VIBRANT_COLORS[Math.floor(Math.random() * VIBRANT_COLORS.length)];
      newBalloons.push({
        id: Math.random().toString(36).substr(2, 9),
        color,
        left: Math.floor(Math.random() * 90), // 0 to 90vw
        duration: Math.floor(Math.random() * 5) + 5, // 5s to 10s
        delay: Math.random() * 2, // 0 to 2s delay
      });
    }

    setBalloons((prev) => [...prev, ...newBalloons]);

    setTimeout(() => {
      setBalloons((prev) => prev.filter(b => !newBalloons.find(nb => nb.id === b.id)));
    }, 13000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      launchBalloons(30);
    }, 1000);

    const handleLaunch = () => launchBalloons(20);
    window.addEventListener("trigger-balloons", handleLaunch);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("trigger-balloons", handleLaunch);
    };
  }, []);

  if (balloons.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon balloon-anim"
          style={{
            left: `${b.left}vw`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            backgroundColor: `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, 0.7)`,
            color: `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, 0.7)`,
            boxShadow: `inset -7px -3px 10px rgba(${Math.max(0, b.color.r - 20)}, ${Math.max(0, b.color.g - 20)}, ${Math.max(0, b.color.b - 20)}, 0.7)`
          }}
        />
      ))}
    </div>
  );
}
