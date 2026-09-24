import React, { useRef } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiPostman,
  SiAxios,
  SiC,
  SiCplusplus,
  SiGo,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skills = [
  ["JavaScript", SiJavascript, "#F7DF1E"],
  ["TypeScript", SiTypescript, "#3178C6"],
  ["React", SiReact, "#61DAFB"],
  ["Next.js", SiNextdotjs, "#fff"],
  ["Tailwind CSS", SiTailwindcss, "#06B6D4"],
  ["Framer Motion", SiFramer, "#BB68FC"],
  ["Node.js", SiNodedotjs, "#5FA04E"],
  ["Express", SiExpress, "#fff"],
  ["MongoDB", SiMongodb, "#47A248"],
  ["JWT", SiJsonwebtokens, "#fff"],
  ["Java", FaJava, "#ED8B00"],
  ["C", SiC, "#A8B9CC"],
  ["C++", SiCplusplus, "#00599C"],
  ["Go", SiGo, "#00ADD8"],
  ["Git", SiGit, "#F05032"],
  ["GitHub", SiGithub, "#fff"],
  ["Vercel", SiVercel, "#fff"],
  ["Figma", SiFigma, "#F24E1E"],
  ["Postman", SiPostman, "#FF6C37"],
  ["Axios", SiAxios, "#5A29E4"],
];

const Skill = () => {
  const audioContext = useRef(null);
  const lastSound = useRef(0);

  const playDrop = () => {
    try {
      const nowTime = Date.now();

      if (nowTime - lastSound.current < 100) return;
      lastSound.current = nowTime;

      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      if (!audioContext.current) {
        audioContext.current = new AudioContext();
      }

      const ctx = audioContext.current;

      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      if (ctx.state !== "running") return;

      const now = ctx.currentTime;

      /* 💧 Water drop */
      const drop = ctx.createOscillator();
      const gain = ctx.createGain();

      drop.type = "sine";

      drop.frequency.setValueAtTime(900, now);
      drop.frequency.exponentialRampToValueAtTime(
        180,
        now + 0.16
      );

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(
        0.08,
        now + 0.008
      );
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.22
      );

      drop.connect(gain);
      gain.connect(ctx.destination);

      drop.start(now);
      drop.stop(now + 0.23);

      /* 🌊 Deep tiny resonance */
      const bass = ctx.createOscillator();
      const bassGain = ctx.createGain();

      bass.type = "sine";
      bass.frequency.setValueAtTime(75, now);
      bass.frequency.exponentialRampToValueAtTime(
        45,
        now + 0.18
      );

      bassGain.gain.setValueAtTime(0.0001, now);
      bassGain.gain.exponentialRampToValueAtTime(
        0.035,
        now + 0.01
      );
      bassGain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.25
      );

      bass.connect(bassGain);
      bassGain.connect(ctx.destination);

      bass.start(now);
      bass.stop(now + 0.26);
    } catch {
      // Ignore browser audio restrictions
    }
  };

  return (
    <section
      id="skills"
      className="w-full border-b border-dashed border-border bg-background"
    >
      <div className="mx-auto max-w-4xl border-x border-dashed border-border">

        <div className="flex items-center justify-between border-b border-dashed border-border px-5 py-3 sm:px-7">
          <h2 className="font-serif text-[24px] leading-none tracking-[-.04em] text-primary sm:text-[27px]">
            Tech Stack
          </h2>

          <span className="text-[8px] uppercase tracking-[.18em] text-muted">
            20 technologies
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 px-4 py-3 sm:px-7 sm:py-4">
          {skills.map(([name, Icon, color]) => (
            <div
              key={name}
              onMouseEnter={playDrop}
              title={name}
              className="
                group flex cursor-default items-center gap-1.5
                rounded-[5px] border border-border bg-surface
                px-2 py-[5px]
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-border-hover
                hover:bg-surface-hover
                hover:shadow-[0_5px_15px_rgba(0,0,0,.14)]
              "
            >
              <Icon
                className="
                  h-[13px] w-[13px]
                  transition-transform duration-200
                  group-hover:scale-110
                "
                style={{ color }}
              />

              <span
                className="
                  text-[10px] leading-none
                  tracking-[-.01em]
                  text-secondary
                  transition-colors
                  group-hover:text-primary
                  sm:text-[11px]
                "
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-dashed border-border px-5 py-2 sm:px-7">
          <span className="text-[8px] uppercase tracking-[.16em] text-muted">
            Development Stack
          </span>

          <span className="flex items-center gap-1.5 text-[8px] uppercase tracking-[.14em] text-muted">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
            Active
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skill;