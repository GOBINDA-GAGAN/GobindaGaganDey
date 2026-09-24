import React, { useEffect, useState } from "react";
import profileVideo from "/profile-video.mp4";

const ProfileVideo = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const time = currentTime.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-full bg-background">
      <div
        className="
          relative
          w-full
          overflow-hidden
          p-1.5

          h-[220px]

          sm:h-64
          sm:p-2

          md:h-80

          lg:h-[290px]
        "
      >

        {/* =========================
            VIDEO
        ========================= */}

        <video
          src={profileVideo}
          autoPlay
          muted
          loop
          playsInline
          className="
            h-full
            w-full
            object-cover
            object-[center_60%]
          "
        />

        {/* =========================
            BOTTOM RIGHT INFO
        ========================= */}

        <div
          className="
            absolute
            bottom-4
            right-4
            z-10
            flex
            flex-col
            items-end

            sm:bottom-5
            sm:right-5

            md:bottom-6
            md:right-6
          "
        >

          {/* =========================
              CLOCK
          ========================= */}

          <div
            className="
              flex
              items-center

              gap-1

              sm:gap-1.5

              md:gap-2
            "
          >

            {/* UP */}

            <span
              className="
                text-[7px]
                font-light
                text-white/50

                sm:text-[8px]

                md:text-[9px]
              "
              style={{
                fontFamily: "Doto, sans-serif",
              }}
            >
              ↑
            </span>

            {/* TIME */}

            <span
              className="
                whitespace-nowrap
                text-[13px]
                font-semibold
                leading-none
                tracking-[0.04em]
                text-white

                sm:text-[15px]
                sm:tracking-[0.06em]

                md:text-[18px]
                md:tracking-[0.08em]

                drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]
              "
              style={{
                fontFamily: "Doto, sans-serif",
              }}
            >
              {time}
            </span>

            {/* DOWN */}

            <span
              className="
                text-[7px]
                font-light
                text-white/50

                sm:text-[8px]

                md:text-[9px]
              "
              style={{
                fontFamily: "Doto, sans-serif",
              }}
            >
              ↓
            </span>

          </div>

          {/* =========================
              VERSION
          ========================= */}

          <div
            className="
              mt-1.5
              flex
              items-center
              gap-1

              sm:mt-2
              sm:gap-1.5
            "
          >

            {/* LIVE DOT */}

            <span
              className="
                relative
                flex
                h-1
                w-1

                sm:h-1.5
                sm:w-1.5
              "
            >

              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  h-1
                  w-1
                  rounded-full
                  bg-green-400

                  sm:h-1.5
                  sm:w-1.5
                "
              />

            </span>

            {/* VERSION TEXT */}

            <span
              className="
                whitespace-nowrap
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/90

                sm:text-[7px]
                sm:tracking-[0.15em]

                md:text-[10px]
                md:tracking-[0.18em]
              "
              style={{
                fontFamily: "Doto, sans-serif",
              }}
            >
              VERSION 01 IS LIVE
            </span>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileVideo;