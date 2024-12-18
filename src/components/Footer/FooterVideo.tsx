"use client";

import React, { useEffect, useRef } from "react";

export default function FooterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef) {
      videoRef.current?.play();
    }
  }, []);

  return (
    <video
      src="/socialwing_footer.mp4"
      className="border-2 "
      autoPlay
      ref={videoRef}
      muted
      loop
    ></video>
  );
}
