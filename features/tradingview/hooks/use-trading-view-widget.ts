"use client";

import { useEffect, useRef } from "react";

export default function useTradingViewWidget(
  scriptUrl: string,
  config: Record<string, unknown>,
  height: number = 600
) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return; // Ensure the ref is assigned
    if (containerRef.current.dataset.loaded) return; // Prevent multiple script injections

    // clear previous content from the container
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>`;

    const script = document.createElement("script");
    script.src = scriptUrl;

    script.async = true;
    script.innerHTML = JSON.stringify(config);
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true"; // Mark as loaded

    return () => {
      // Cleanup: remove the script and reset the loaded flag
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [config, height, scriptUrl]);

  return containerRef;
}
