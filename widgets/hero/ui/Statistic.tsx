"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sections = [
  { image: '/briefcase(2) 2.svg', number: 25850, name: 'Jobs' },
  { image: '/g2079.svg', number: 10250, name: 'Candidates' },
  { image: '/building 1.svg', number: 18400, name: 'Companies' },
]

function CountUp({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let rafId = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, to, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}

export default function Statistic() {
  return (
    <div className="flex mt-20 md:gap-15 gap-4">
      {sections.map((section) => (
        <div className="flex gap-3" key={section.name}>
          <div className="md:p-4 p-2 rounded-full bg-[#309689] flex items-center justify-center">
            <Image
              src={section.image}
              alt="image"
              width={20}
              height={20}
              className="md:w-[28px] md:h-[28px]"
            />
          </div>
          <div>
            <p className="text-white md:text-[20px]">
              <CountUp to={section.number} />
            </p>
            <span className="text-white text-[12px] md:text-[16px] opacity-80">{section.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}