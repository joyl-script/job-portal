"use client";

import { useEffect, useState } from "react";

const TEXT = "Find Your Dream Job Today!";

export default function Typewriter() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const timer = setTimeout(() => {
      const next = TEXT.slice(0, text.length + 1);
      setText(next);
      if (next === TEXT) setDone(true);
    }, 80);

    return () => clearTimeout(timer);
  }, [text, done]);

  return (
    <h1 className="md:text-7xl text-[32px] text-white font-bold text-center min-h-[1.4em] flex items-center justify-center">
      <span className="inline-block">{text}</span>
      {!done && <span className="caret" aria-hidden="true">|</span>}
    </h1>
  );
}