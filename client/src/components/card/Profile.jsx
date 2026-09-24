import React, { useEffect, useState } from "react";
import { BadgeCheck, Eye, MapPin, Ticket } from "lucide-react";

import profileImage from "../../assets/profile.png";

const profile = {
  name: "Gobinda Gagan Dey",
  age: 21,
  location: "Bengaluru, IND",
  status: "Available",
  views: 94,
  ticket: "GG-2026",
  designations: [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "Frontend Developer",
  ],
};

const barcode = [
  2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 2,3, 2, 1, 4, 2, 1, 3, 1, 2,
];

const Profile = () => {
  const [designationIndex, setDesignationIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [views, setViews] = useState(0);

  const currentDesignation = profile.designations[designationIndex];

  /* =========================
     TYPEWRITER
  ========================= */

  useEffect(() => {
    let timer;

    if (!deleting && typedText.length < currentDesignation.length) {
      timer = setTimeout(() => {
        setTypedText(currentDesignation.slice(0, typedText.length + 1));
      }, 65);
    }

    if (!deleting && typedText.length === currentDesignation.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    }

    if (deleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(currentDesignation.slice(0, typedText.length - 1));
      }, 35);
    }

    if (deleting && typedText.length === 0) {
      setDeleting(false);

      setDesignationIndex((prev) => (prev + 1) % profile.designations.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, deleting, currentDesignation]);

  /* =========================
     VIEW COUNTER
  ========================= */

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
      {/* =================================
          TICKET SIDE CUTS
      ================================= */}

      <div
        className="
          absolute
          -left-[7px]
          top-1/2
          z-20
          h-4
          w-4
          -translate-y-1/2
          rounded-full
          bg-blue-500
        "
      />

      <div
        className="
          absolute
          -right-[7px]
          top-1/2
          z-20
          h-4
          w-4
          -translate-y-1/2
          rounded-full
          bg-blue-500
        "
      />

      {/* =================================
          MAIN CONTAINER
      ================================= */}

      <div
        className="
          flex
          min-h-[165px]
          flex-col
          gap-5
          px-5
          py-6

          sm:px-7
          sm:py-7

          md:flex-row
          md:items-center
          md:gap-6
          md:px-8
        "
      >
        {/* =================================
            TOP PROFILE AREA
        ================================= */}

        <div
          className="
            flex
            min-w-0
            flex-1
            items-center
            gap-4

            sm:gap-5
          "
        >
          {/* =================================
              PROFILE IMAGE
          ================================= */}

          <div className="relative shrink-0">
            <div
              className="
                h-[92px]
                w-[76px]
                overflow-hidden
                rounded-[10px]
                border
                border-border
                bg-surface

                sm:h-[108px]
                sm:w-[88px]

                md:h-[112px]
                md:w-[94px]
              "
            >
              <div className="h-[92px] w-[76px] overflow-hidden rounded-[10px] border border-border bg-surface sm:h-[108px] sm:w-[88px] md:h-[112px] md:w-[94px]">
                <img
                  src={profileImage}
                  alt={profile.name}
                  className="
      h-full
      w-full
      scale-150
       delay-150
      object-cover
      object-center
    "
                />
              </div>
            </div>

            {/* =================================
                VERIFIED BADGE
            ================================= */}

            {/* Blue Verified Badge */}
            <div
              className="
    absolute
    -right-2
    -top-2
    z-20
    flex
    items-center
    justify-center
    rounded-full
    border-2
    border-background
    bg-blue-500
    shadow-sm
  "
            >
              <BadgeCheck size={17} strokeWidth={2.5} className="text-white" />
            </div>
          </div>

          {/* =================================
              PROFILE INFORMATION
          ================================= */}

          <div className="min-w-0 flex-1">
            {/* STATUS */}

            <div className="mb-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-500
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-green-500
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-green-500
                "
              >
                {profile.status}
              </span>
            </div>

            {/* NAME */}

            <h1
              className="
                truncate
                font-serif
                text-[25px]
                leading-none
                tracking-[-0.045em]
                text-foreground

                sm:text-[31px]

                md:text-[34px]
              "
            >
              {profile.name}
            </h1>

            {/* TYPEWRITER */}

            <div
              className="
                mt-2
                flex
                h-6
                items-center
                overflow-hidden
              "
            >
              <span
                className="
                  truncate
                  text-[14px]
                  font-medium
                  tracking-wide
                  text-secondary

                  sm:text-[16px]

                  md:text-[17px]
                "
              >
                {typedText}
              </span>

              <span
                className="
                  ml-0.5
                  h-4
                  w-px
                  shrink-0
                  animate-pulse
                  bg-foreground
                "
              />
            </div>

            {/* META */}

            <div
              className="
                mt-2
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1
                text-[10px]
                text-muted

                sm:text-[11px]
              "
            >
              <span>{profile.age}</span>

              <span className="text-border">•</span>

              <span className="flex items-center gap-1.5">
                <MapPin size={11} strokeWidth={1.6} />

                {profile.location}
              </span>
            </div>
          </div>
        </div>

        {/* =================================
            DESKTOP DIVIDER
        ================================= */}

        <div
          className="
            relative
            hidden
            h-[120px]
            border-l
            border-dashed
            border-border

            md:block
          "
        >
          {/* TOP NOTCH */}

          <span
            className="
              absolute
              -left-[6px]
              -top-[7px]
              h-3
              w-3
              rounded-full
              bg-blue-400
            "
          />

          {/* BOTTOM NOTCH */}

          <span
            className="
              absolute
              -bottom-[7px]
              -left-[6px]
              h-3
              w-3
              rounded-full
              bg-blue-400
            "
          />
        </div>

        {/* =================================
            DESKTOP TICKET DETAILS
        ================================= */}

        <div
          className="
            hidden
            w-[105px]
            shrink-0
            flex-col
            items-end
            justify-between
            self-stretch
            py-1

            md:flex
          "
        >
          {/* VIEWS */}

          <div className="flex items-center gap-1.5 text-muted">
            <Eye size={14} strokeWidth={1.5} />

            <span
              className="
                font-mono
                text-[10px]
                tabular-nums
              "
            >
              {views.toLocaleString()}
            </span>
          </div>

          {/* TICKET */}

          <div className="flex flex-col items-end">
            <Ticket size={16} strokeWidth={1.4} className="mb-1 text-muted" />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-muted
              "
            >
              Portfolio
            </span>

            <span
              className="
                mt-1
                font-mono
                text-[9px]
                text-secondary
              "
            >
              {profile.ticket}
            </span>
          </div>

          {/* BARCODE */}

          <Barcode />
        </div>

        {/* =================================
            MOBILE TICKET DETAILS
        ================================= */}

        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            border-t
            border-dashed
            border-border
            pt-4

            md:hidden
          "
        >
          {/* MOBILE VIEWS */}

          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-md
                border
                border-border
                bg-surface
              "
            >
              <Eye size={14} strokeWidth={1.5} className="text-muted" />
            </div>

            <div>
              <p
                className="
                  font-mono
                  text-[11px]
                  font-medium
                  tabular-nums
                  text-foreground
                "
              >
                {views.toLocaleString()}
              </p>

              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-muted
                "
              >
                Views
              </p>
            </div>
          </div>

          {/* MOBILE TICKET */}

          <div
            className="
              flex
              flex-col
              items-end
            "
          >
            <div className="flex items-center gap-1.5">
              <Ticket size={13} strokeWidth={1.4} className="text-muted" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.16em]
                  text-muted
                "
              >
                Portfolio
              </span>
            </div>

            <span
              className="
                mt-0.5
                font-mono
                text-[9px]
                text-secondary
              "
            >
              {profile.ticket}
            </span>
          </div>

          {/* MOBILE BARCODE */}

          <div className="shrink-0">
            <Barcode mobile />
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================
   BARCODE COMPONENT
========================================= */

const Barcode = ({ mobile = false }) => {
  return (
    <div
      className={`
        flex
        items-end
        gap-[1.5px]
        overflow-hidden
        ${mobile ? "h-7 max-w-[70px]" : "h-7"}
      `}
    >
      {barcode.map((width, index) => (
        <span
          key={index}
          className="shrink-0 bg-foreground"
          style={{
            width: mobile ? `${Math.max(width * 0.75, 1)}px` : `${width}px`,
            height: `${30 + (4 % 4) * 4}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Profile;
