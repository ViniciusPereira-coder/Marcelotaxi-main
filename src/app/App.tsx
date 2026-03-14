import React, { Suspense } from "react";
import { RouterProvider } from "react-router";
import { MotionConfig } from "motion/react";
import Lenis from "lenis";
import { preloadRouteChunks, router } from "./routes";

export default function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.95,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  React.useEffect(() => {
    const startPreload = () => preloadRouteChunks();

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(startPreload, { timeout: 1500 });
      return () => {
        if (typeof window.cancelIdleCallback === "function") {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = window.setTimeout(startPreload, 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center bg-black text-white">
            <div className="flex items-center gap-3 text-sm font-semibold tracking-wide">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37]" />
              Carregando experiência MarceloTaxi...
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </MotionConfig>
  );
}
