import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const playThemeSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";

  // Deep 3D bass click
  osc.frequency.setValueAtTime(110, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    45,
    ctx.currentTime + 0.12
  );

  // Strong initial hit, quick decay
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.18,
    ctx.currentTime + 0.008
  );
  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + 0.16
  );

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.16);

  osc.onended = () => {
    ctx.close();
  };
};

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);

    // 🔊 Theme click sound
    playThemeSound();

    const update = () => {
      setDark((prev) => !prev);
    };

    if (!document.startViewTransition) {
      update();
      return;
    }

    document.startViewTransition(update);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);