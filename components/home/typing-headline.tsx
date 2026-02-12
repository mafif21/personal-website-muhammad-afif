"use client";

import * as React from "react";

type TypingHeadlineProps = {
  prefix: string;
  rotatingWords: string[];
  className?: string;
};

export function TypingHeadline({ prefix, rotatingWords, className }: TypingHeadlineProps) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [typedChars, setTypedChars] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    if (rotatingWords.length === 0) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setWordIndex(0);
      setTypedChars(rotatingWords[0].length);
      return;
    }

    const currentWord = rotatingWords[wordIndex];
    const isWordComplete = typedChars === currentWord.length;
    const isWordDeleted = typedChars === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isWordComplete) {
          setTypedChars((current) => current + 1);
          return;
        }

        if (!isDeleting && isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isWordDeleted) {
          setTypedChars((current) => current - 1);
          return;
        }

        if (isDeleting && isWordDeleted) {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % rotatingWords.length);
        }
      },
      !isDeleting && isWordComplete ? 1100 : isDeleting ? 40 : 70
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, typedChars, wordIndex, rotatingWords]);

  const currentWord = rotatingWords[wordIndex] ?? "";
  const visibleWord = currentWord.slice(0, typedChars);

  return (
    <h1 className={className} aria-live="polite">
      <span>{prefix} </span>
      <span className="text-primary">{visibleWord}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-primary align-[-0.1em]"
      />
    </h1>
  );
}
