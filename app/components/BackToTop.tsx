"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={`
        fixed bottom-6 right-6 z-40

        flex h-12 w-12 items-center justify-center
        rounded-full

        border border-line/40
        bg-bg/55
        backdrop-blur-md
        backdrop-saturate-150

        text-ink

        shadow-lg

        transition-all duration-300

        hover:-translate-y-1
        hover:border-accent/50
        hover:text-accent

        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={20} strokeWidth={2} />
    </button>
  );
}