"use client";
import React from "react";
import styles from "@/components/home/home-hero/homeHero.module.css";
import Counter from "@/components/home/home-hero/home-counter/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LogoSlider from "@/components/home/home-hero/logo-slider/index";

export default function HomeHero() {
  const [typeEffect] = useTypewriter({
    words: [
      "AI Photobooth",
      "Group AI Photobooth",
      "Personalized microsite designs",
      "AR/VR experiences",
      "Immersive Games",
      "Unique QR code solutions",
    ],
    loop: {},
    typeSpeed: 8,
    deleteSpeed: 8,
  });
  return (
    <div className={styles.homeHero}>
      <head></head>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/video/heroBackgroundLong.mp4" type="video/mp4" />
      </video>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.content}>
            <h1>Crafting memorable experiences with</h1>
            <span className={styles.typeEffect}>{typeEffect}</span>
          </div>
          <div className={styles.counter}>
            <Counter />
          </div>
          {/* <div className={styles.logoSlider}>
            <LogoSlider />
          </div> */}
        </div>
        <div className={styles.animatedVideo}>video</div>
      </div>
    </div>
  );
}
