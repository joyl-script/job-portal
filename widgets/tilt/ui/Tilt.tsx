"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

interface TiltProps {
  children: ReactNode;
  max?: number;
}

export default function Tilt({ children, max = 7 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 2 * max;
    const rotateX = (0.5 - y) * 2 * max;

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    el.style.transition = "transform 0.1s ease-out";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s ease";
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const style: CSSProperties = {
    transformStyle: "preserve-3d",
    willChange: "transform",
    position: "relative",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className="tilt-card"
    >
      {children}
    </div>
  );
}