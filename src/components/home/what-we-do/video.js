import React, { useEffect, useRef } from "react";
import styles from "./video.module.css";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      videoRef.current.play();
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      // className={styles.video}
      className="video_contain"
      data-aos="fade-right"
      data-aos-delay="0"
    >
      <video ref={videoRef} width="1000px" muted loop={true}>
        <source src="/video/intro.mp4" type="video/mp4" />
        <source src="/video/intro.ogg" type="video/ogg" />
      </video>
      <div className="frame"></div>
    </div>
  );
};

export default Video;
