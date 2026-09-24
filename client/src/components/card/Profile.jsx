import React, { useEffect, useState } from "react";
import {
  BadgeCheck,
  Eye,
  MapPin,
  Ticket,
} from "lucide-react";

const profile = {
  name: "Gobinda Gagan Dey",
  age: 21,
  location: "Odisha, IND",
  status: "Available",
  views: 123456,
  ticket: "GG-2026",
  designations: [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "Frontend Developer",
  ],
};

const Profile = () => {
  const [designationIndex, setDesignationIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [views, setViews] = useState(0);

  const currentDesignation =
    profile.designations[designationIndex];

  /* ---------------- Typewriter ---------------- */

  useEffect(() => {
    let timer;

    if (!deleting && typedText.length < currentDesignation.length) {
      timer = setTimeout(() => {
        setTypedText(
          currentDesignation.slice(0, typedText.length + 1)
        );
      }, 65);
    }

    if (
      !deleting &&
      typedText.length === currentDesignation.length
    ) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    }

    if (deleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(
          currentDesignation.slice(0, typedText.length - 1)
        );
      }, 35);
    }

    if (deleting && typedText.length === 0) {
      setDeleting(false);
      setDesignationIndex(
        (prev) =>
          (prev + 1) % profile.designations.length
      );
    }

    return () => clearTimeout(timer);
  }, [typedText, deleting, currentDesignation]);

  /* ---------------- View Counter ---------------- */

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 9000) + 1000;

      if (current >= profile.views) {
        current = profile.views;
        clearInterval(interval);
      }

      setViews(current);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Left ticket cut */}
      <div className="absolute -left-[7px] top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-500" />

      {/* Right ticket cut */}
      <div className="absolute -right-[7px] top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-500" />

      <div className="flex min-h-[165px] items-center gap-4 px-5 py-5 sm:gap-6 sm:px-8">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="flex h-[100px] w-[82px] items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface sm:h-[112px] sm:w-[94px]">
            <span className="font-serif text-3xl tracking-[-0.08em] text-foreground sm:text-4xl">
              GG
            </span>
          </div>

          {/* Verified */}
          <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-background bg-background">
            <BadgeCheck
              size={19}
              strokeWidth={2}
              className="fill-green-500 text-green-500"
            />
          </div>
        </div>

        {/* Main profile */}
        <div className="min-w-0 flex-1">
          {/* Status */}
          <div className="mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-green-500">
              {profile.status}
            </span>
          </div>

          {/* Name */}
          <div className="flex items-center gap-2">
            <h1 className="truncate font-serif text-[26px] leading-none tracking-[-0.045em] text-foreground sm:text-[34px]">
              {profile.name}
            </h1>
          </div>

          {/* Typewriter */}
          <div className="mt-2 flex h-6 items-center overflow-hidden">
            <span className="truncate text-[15px] font-medium tracking-wide text-secondary sm:text-[17px]">
              {typedText}
            </span>

            <span className="ml-0.5 h-4 w-px shrink-0 animate-pulse bg-foreground" />
          </div>

          {/* Meta */}
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted sm:text-[11px]">
            <span>{profile.age}</span>

            <span className="text-border">•</span>

            <span className="flex items-center gap-1.5">
              <MapPin size={11} strokeWidth={1.6} />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Ticket divider */}
        <div className="relative hidden h-[120px] border-l border-dashed border-border md:block">
          {/* Top notch */}
          <span className="absolute -left-[6px] -top-[7px] h-3 w-3 rounded-full bg-blue-400" />

          {/* Bottom notch */}
          <span className="absolute -left-[6px] -bottom-[7px] h-3 w-3 rounded-full bg-blue-400" />
        </div>

        {/* Ticket details */}
        <div className="hidden w-[105px] shrink-0 flex-col items-end justify-between self-stretch py-1 md:flex">
          {/* Views */}
          <div className="flex items-center gap-1.5 text-muted">
            <Eye
              size={14}
              strokeWidth={1.5}
            />

            <span className="font-mono text-[10px] tabular-nums">
              {views.toLocaleString()}
            </span>
          </div>

          {/* Ticket */}
          <div className="flex flex-col items-end">
            <Ticket
              size={16}
              strokeWidth={1.4}
              className="mb-1 text-muted"
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
              Portfolio
            </span>

            <span className="mt-1 font-mono text-[9px] text-secondary">
              {profile.ticket}
            </span>
          </div>

          {/* Barcode */}
          <div className="flex h-7 items-end gap-[2px]">
            {[
              2, 1, 3, 1, 2, 4, 1, 2,
              1, 3, 2, 1, 4, 2, 1, 3,
              1, 2, 4, 1, 2, 3, 1, 2,
            ].map((width, index) => (
              <span
                key={index}
                className="bg-foreground"
                style={{
                  width: `${width}px`,
                  height: `${12 + (index % 4) * 4}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;