"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play, Move } from "lucide-react";
import { copy, type Language } from "./content";
import type { SceneController } from "./scene-renderer";

type Connection = { saveData?: boolean; effectiveType?: string };
export default function Scene({ lang }: { lang: Language }) {
  const surface = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const controller = useRef<SceneController | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [manual, setManual] = useState(false);
  const [paused, setPaused] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(motion.matches);
    const onMotion = () => setPaused(motion.matches);
    motion.addEventListener("change", onMotion);
    const connection = (navigator as Navigator & { connection?: Connection })
      .connection;
    const constrained =
      connection?.saveData ||
      /^(slow-2g|2g)$/.test(connection?.effectiveType || "");
    if (constrained) {
      setManual(true);
      return () => motion.removeEventListener("change", onMotion);
    }
    let disposed = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let idle: number | undefined;
    let scheduled = false;
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      if ("requestIdleCallback" in window)
        idle = window.requestIdleCallback(
          () => {
            if (!disposed) setShouldLoad(true);
          },
          { timeout: 2200 },
        );
      else
        timeout = setTimeout(() => {
          if (!disposed) setShouldLoad(true);
        }, 400);
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                schedule();
                observer?.disconnect();
              }
            },
            { rootMargin: "120px" },
          )
        : null;
    if (observer && container.current) observer.observe(container.current);
    else schedule();
    return () => {
      disposed = true;
      observer?.disconnect();
      if (timeout) clearTimeout(timeout);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad || !surface.current) return;
    let disposed = false;
    const target = surface.current;
    const timeout = setTimeout(() => {
      if (!disposed && !controller.current) setFailed(true);
    }, 15000);
    import("./scene-renderer")
      .then(async ({ createScene }) => {
        if (disposed) return;
        const scene = await createScene(target, () => {
          if (!disposed) {
            setReady(false);
            setFailed(true);
          }
        });
        if (disposed) {
          scene.dispose();
          return;
        }
        clearTimeout(timeout);
        controller.current = scene;
        setReady(true);
        setFailed(false);
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      })
      .finally(() => clearTimeout(timeout));
    return () => {
      disposed = true;
      clearTimeout(timeout);
      controller.current?.dispose();
      controller.current = null;
    };
  }, [shouldLoad]);
  useEffect(() => {
    controller.current?.setPaused(paused);
  }, [paused, ready]);

  return (
    <div ref={container} className="scene">
      <div
        className={`scene-placeholder ${ready ? "is-hidden" : ""}`}
        aria-hidden="true"
      >
        <div className="fallback-orbit" />
      </div>
      <div
        ref={surface}
        className={`scene-canvas ${ready ? "is-ready" : ""}`}
        aria-label={`${t.scene}. ${lang === "ar" ? "استخدم مفاتيح الأسهم لتدوير المجسّم." : "Use arrow keys to rotate."}`}
        role="img"
        tabIndex={ready ? 0 : -1}
      />
      {shouldLoad && !ready && !failed && (
        <span className="scene-loading" role="status">
          {t.loading3d}…
        </span>
      )}
      {manual && !shouldLoad && (
        <button
          className="scene-manual"
          onClick={() => {
            setShouldLoad(true);
            setManual(false);
          }}
        >
          {t.load3d}
        </button>
      )}
      {failed && (
        <p className="scene-error" role="status">
          {t.sceneError}
        </p>
      )}
      {ready && (
        <div className="scene-controls">
          <Move size={12} />
          <span>{t.rotate}</span>
          <button
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? t.play : t.pause}
            aria-pressed={paused}
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        </div>
      )}
    </div>
  );
}
