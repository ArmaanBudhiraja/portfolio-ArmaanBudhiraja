import { useEffect, useRef } from "react";

export const TypewriterIntro = ({ onComplete }: { onComplete: () => void }) => {
  const typeRef = useRef<HTMLHeadingElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // TIMINGS
  const TYPE_DURATION = 2000;   // typing time (match CSS)
  const HOLD_CENTER = 3000;     // hold center for 3s
  const MORPH_DURATION = 1000;  // shrink + move
  const HOLD_FINAL = 1000;      // stay at final for 3s before hiding

  useEffect(() => {
    const t = window.setTimeout(() => {
      startMorphSequence();
    }, TYPE_DURATION + HOLD_CENTER);

    return () => clearTimeout(t);
  }, []);

  async function startMorphSequence() {
    const typeEl = typeRef.current;
    const containerEl = containerRef.current;
    if (!typeEl || !containerEl) {
      onComplete();
      return;
    }

    // STOP typing and stabilize width
    typeEl.classList.remove("typewriter");
    typeEl.classList.add("typewriter-static");
    await nextFrame();

    // clone the typed text
    const clone = typeEl.cloneNode(true) as HTMLHeadingElement;
    const cs = getComputedStyle(typeEl);
    clone.style.position = "absolute";
    clone.style.margin = "0";
    clone.style.left = "0";
    clone.style.top = "0";
    clone.style.transform = "none";
    clone.style.transition = "none";
    clone.style.boxSizing = "content-box";
    clone.style.whiteSpace = "nowrap";
    clone.style.font = cs.font;
    clone.style.lineHeight = cs.lineHeight;
    clone.style.letterSpacing = cs.letterSpacing;
    clone.style.color = cs.color;
    clone.classList.remove("typewriter");
    containerEl.appendChild(clone);

    // measure positions
    const typeRect = typeEl.getBoundingClientRect();
    const finalEl = document.getElementById("final-name");

    const startLeft = typeRect.left + window.scrollX;
    const startTop = typeRect.top + window.scrollY;
    clone.style.left = `${startLeft}px`;
    clone.style.top = `${startTop}px`;
    clone.style.width = `${typeRect.width}px`;
    clone.style.height = `${typeRect.height}px`;
    clone.style.transformOrigin = "center center";

    typeEl.style.visibility = "hidden";

    if (!finalEl) {
      fadeOutClone(clone);
      return;
    }

    // Final target center
    const finalRect = finalEl.getBoundingClientRect();
    const targetCenterX = finalRect.left + finalRect.width / 2 + window.scrollX;
    const targetCenterY = finalRect.top + finalRect.height / 2 + window.scrollY;

    // Start center
    const startCenterX = typeRect.left + typeRect.width / 2 + window.scrollX;
    const startCenterY = typeRect.top + typeRect.height / 2 + window.scrollY;

    // Movement delta
    const dx = targetCenterX - startCenterX;
    const dy = targetCenterY - startCenterY;

    // Scale
    const scale = finalRect.width / typeRect.width;

    // Smooth, direct morph
    clone.style.transition = `transform ${MORPH_DURATION}ms cubic-bezier(0.25, 0.9, 0.25, 1)`;

    requestAnimationFrame(() => {
      clone.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
    });

    // AFTER morph finishes
    setTimeout(() => {
      // HOLD FINAL for 3s with clone fully visible
      setTimeout(() => {
        // Unblur homepage NOW — while clone is still visible
        const wrapper = document.getElementById("app-page-wrapper");
        if (wrapper) wrapper.classList.remove("opacity-0");

        // Fade out the clone after unblurring
        clone.style.transition = "opacity 500ms ease-out";
        clone.style.opacity = "0";

        setTimeout(() => {
          try { clone.remove(); } catch {}
          try { typeEl.remove(); } catch {}
          onComplete();
        }, 600);
      }, HOLD_FINAL);
    }, MORPH_DURATION);
  }

  function fadeOutClone(clone: HTMLElement) {
    clone.style.transition = "opacity 0.5s ease-out";
    clone.style.opacity = "0";
    setTimeout(() => {
      try { clone.remove(); } catch {}
      onComplete();
    }, 600);
  }

  function nextFrame(): Promise<void> {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });
  }

  return (
    <div
      ref={containerRef}
      className="
        fixed inset-0 -z-10 flex items-center justify-center 
        transition-all duration-700
      "
      style={{ pointerEvents: "none" }}
    >
      <h1
        ref={typeRef}
        className=" z-10 text-6xl md:text-8xl font-bold text-foreground typewriter"
        style={{
          position: "absolute",
          margin: 0,
          pointerEvents: "none",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Armaan Budhiraja
      </h1>
    </div>
  );
};
