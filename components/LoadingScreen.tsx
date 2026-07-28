"use client";

import { useEffect, useState } from "react";

const NAME = "Iqra Ramzan";

export default function LoadingScreen() {
  const [typed, setTyped] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setTyped(NAME.substring(0, i));
      if (i >= NAME.length) {
        clearInterval(typeInterval);
        setShowTagline(true);
        setTimeout(() => setHidden(true), 900);
      }
    }, 130);

    return () => clearInterval(typeInterval);
  }, []);
  
  return (
    <div className={`loading-screen${hidden ? " hidden" : ""}`} aria-hidden={hidden}>
      <div>
        <div className="loader-name">
          {typed}
          <span className="typing-cursor" />
        </div>
        <div className={`loader-tagline${showTagline ? " show" : ""}`}>
          Backend Engineer
        </div>
      </div>
    </div>
  );
}
