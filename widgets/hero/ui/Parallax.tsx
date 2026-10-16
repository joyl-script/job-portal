"use client";

import { useEffect, useRef } from "react";

export default function Parallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;

    const update = () => {
      const offset = window.scrollY * 0.35;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 -bottom-24 bg-center bg-cover will-change-transform scale-110"
      style={{
        backgroundImage: "url('/Account-for-Workforce-Transitions-while-Diversifying-Workplaces.jpg')",
      }}
    />
  );
}