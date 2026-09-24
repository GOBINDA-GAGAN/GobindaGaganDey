import React from "react";
import profileVideo from "/profile-video.mp4";

const ProfileVideo = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full overflow-hidden p-2 sm:h-72 md:h-70">
        <video
          src={profileVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full  object-cover object-[center_60%]"
        />
      </div>
    </div>
  );
};

export default ProfileVideo;