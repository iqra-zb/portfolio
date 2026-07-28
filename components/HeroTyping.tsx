"use client";

import { useEffect, useState } from "react";

export default function HeroTyping({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && text === current) {
      typeSpeed = 2500;
      const t = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((w) => w + 1);
      return;
    }

    const t = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="hero-heading">
      <span className="gradient-text">{text}</span>
      <span className="typing-cursor" />
    </span>
  );
}
