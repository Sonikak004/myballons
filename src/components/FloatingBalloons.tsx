"use client";

import { useEffect, useState } from "react";

// The brand palette for the balloons: Navy, Gold, Red, Cream/White
const BRAND_COLORS = [
  { r: 11, g: 25, b: 44 },     // Primary Navy
  { r: 211, g: 29, b: 54 },    // Secondary Red
  { r: 251, g: 192, b: 45 },   // Accent Gold
  { r: 253, g: 252, b: 249 }   // Background Cream
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
      const color = BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
      newBalloons.push({
        id: Math.random().toString(36).substr(2, 9),
        color,
        left: Math.floor(Math.random() * 90), // 0 to 90vw
        duration: Math.floor(Math.random() * 5) + 6, // 6s to 11s
        delay: Math.random() * 2, // 0 to 2s delay
      });
    }

    setBalloons((prev) => [...prev, ...newBalloons]);

    // Clean up these specific balloons after their max duration (11s + 2s = 13s)
    setTimeout(() => {
      setBalloons((prev) => prev.filter(b => !newBalloons.find(nb => nb.id === b.id)));
    }, 13000);
  };

  useEffect(() => {
    // 1. The Grand Entrance (Welcome Animation on Load)
    // Delay slightly to let the page render first
    const timeout = setTimeout(() => {
      launchBalloons(30);
    }, 1000);

    // 2. Listen for custom Easter Egg triggers
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
            backgroundColor: `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, 0.8)`,
            color: `rgba(${b.color.r}, ${b.color.g}, ${b.color.b}, 0.8)`,
            boxShadow: `inset -7px -3px 10px rgba(${Math.max(0, b.color.r - 20)}, ${Math.max(0, b.color.g - 20)}, ${Math.max(0, b.color.b - 20)}, 0.8)`
          }}
        />
      ))}
    </div>
  );
}
