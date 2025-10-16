"use client";

import { useEffect } from "react";

export default function VSLBlackMegan() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="68eafa16e75a13e32c89c523"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/655331ad-f855-4d28-8b01-a97e04c93f76/players/68eafa16e75a13e32c89c523/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="68eafa16e75a13e32c89c523"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-68eafa16e75a13e32c89c523" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "20px",
        "--player-box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }} 
    />
  );

};