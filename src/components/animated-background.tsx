"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type AnimatedBackgroundProps = {
  /** Effect strength: 0 (off) to 1.6. */
  intensity?: number;
  /** Animation speed multiplier: 0.5 to 2; 1 uses the default durations. */
  speed?: number;
  /** Desktop count, capped at 48; CSS reduces density on smaller screens. */
  particleCount?: number;
};

const POINTER_INTERVAL_MS = 1000 / 30;

export function AnimatedBackground({
  intensity = 1,
  speed = 1,
  particleCount = 28,
}: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  // Deterministic positions prevent hydration changes or a visible reshuffle.
  const stars = Array.from(
    { length: Math.min(48, Math.max(0, Math.round(particleCount))) },
    (_, index) => ({
      id: index,
      depth: index % 2 === 0 ? "far" : "near",
      density: ["mobile", "tablet", "desktop"][index % 3],
      left: `${((index * 0.618034 + 0.09) % 1) * 100}%`,
      top: `${((index * 0.754878 + 0.07) % 1) * 100}%`,
      size: `${(index % 2 === 0 ? 1.1 : 1.5) + (index % 3) * 0.4}px`,
      opacity: (index % 2 === 0 ? 0.4 : 0.55) + (index % 4) * 0.05,
      driftDuration: `${(index % 2 === 0 ? 18 : 14) + (index % 5) * 2}s`,
      pulseDuration: `${5 + (index % 4) * 2}s`,
      delay: `${-index * 2.3}s`,
      driftX: `${(index % 2 === 0 ? -1 : 1) * (20 + (index % 4) * 8)}px`,
      driftY: `${-26 - (index % 5) * 8}px`,
      moving: index % 3 !== 0,
      pulsing: index % 4 === 0,
    }),
  );

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouseDevice = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)",
    );
    let frame: number | null = null;
    let pointerTimer: number | null = null;
    let lastPointerUpdate = 0;
    let pointerX = 0;
    let pointerY = 0;

    const cancelFrame = () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (pointerTimer !== null) window.clearTimeout(pointerTimer);
      frame = null;
      pointerTimer = null;
    };

    const resetInteraction = () => {
      cancelFrame();
      background.dataset.pointerActive = "false";
      background.style.setProperty("--parallax-x", "0px");
      background.style.setProperty("--parallax-y", "0px");
    };

    const updateActivity = () => {
      const running = !document.hidden && !reducedMotion.matches;
      background.dataset.running = String(running);
      background.dataset.parallax = String(running && mouseDevice.matches);
      if (!running || !mouseDevice.matches) resetInteraction();
    };

    const renderPointer = () => {
      frame = null;
      lastPointerUpdate = performance.now();
      background.style.setProperty("--cursor-x", `${pointerX.toFixed(1)}px`);
      background.style.setProperty("--cursor-y", `${pointerY.toFixed(1)}px`);
      background.style.setProperty(
        "--parallax-x",
        `${((pointerX / window.innerWidth - 0.5) * 16).toFixed(2)}px`,
      );
      background.style.setProperty(
        "--parallax-y",
        `${((pointerY / window.innerHeight - 0.5) * 12).toFixed(2)}px`,
      );
      background.dataset.pointerActive = "true";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (
        background.dataset.parallax !== "true" ||
        event.pointerType !== "mouse"
      ) {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame !== null || pointerTimer !== null) return;

      // Keep the latest event, cap writes at 30 Hz, and stop when input stops.
      const wait =
        POINTER_INTERVAL_MS - (performance.now() - lastPointerUpdate);
      if (wait > 0) {
        pointerTimer = window.setTimeout(() => {
          pointerTimer = null;
          frame = window.requestAnimationFrame(renderPointer);
        }, wait);
      } else {
        frame = window.requestAnimationFrame(renderPointer);
      }
    };

    updateActivity();
    document.addEventListener("visibilitychange", updateActivity);
    reducedMotion.addEventListener("change", updateActivity);
    mouseDevice.addEventListener("change", updateActivity);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", resetInteraction);
    window.addEventListener("resize", resetInteraction, { passive: true });
    document.documentElement.addEventListener("pointerleave", resetInteraction);

    return () => {
      cancelFrame();
      document.removeEventListener("visibilitychange", updateActivity);
      reducedMotion.removeEventListener("change", updateActivity);
      mouseDevice.removeEventListener("change", updateActivity);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", resetInteraction);
      window.removeEventListener("resize", resetInteraction);
      document.documentElement.removeEventListener(
        "pointerleave",
        resetInteraction,
      );
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="animated-background"
      aria-hidden="true"
      data-running="false"
      data-parallax="false"
      data-pointer-active="false"
      style={
        {
          "--background-intensity": Math.min(1.6, Math.max(0, intensity)),
          "--background-speed": Math.min(2, Math.max(0.5, speed)),
        } as CSSProperties
      }
    >
      <div className="animated-background__depth animated-background__depth--aurora">
        <div className="animated-background__aurora animated-background__aurora--wine" />
        <div className="animated-background__aurora animated-background__aurora--purple" />
      </div>
      <div className="animated-background__cursor-light" />
      {(["far", "near"] as const).map((depth) => (
        <div
          key={depth}
          className={`animated-background__depth animated-background__depth--stars-${depth}`}
        >
          {stars
            .filter((star) => star.depth === depth)
            .map((star) => (
              <span
                key={star.id}
                className={`animated-background__star ${star.moving ? "animated-background__star--drifting" : ""}`}
                data-density={star.density}
                style={
                  {
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    "--star-opacity": star.opacity,
                    "--star-drift-duration": star.driftDuration,
                    "--star-pulse-duration": star.pulseDuration,
                    "--star-delay": star.delay,
                    "--star-drift-x": star.driftX,
                    "--star-drift-y": star.driftY,
                  } as CSSProperties
                }
              >
                <span
                  className={`animated-background__star-dot ${star.pulsing ? "animated-background__star-dot--pulsing" : ""}`}
                />
              </span>
            ))}
        </div>
      ))}
    </div>
  );
}
