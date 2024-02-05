"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";
// import Image from "next/image";
import styles from "./homeCounter.module.css";

// counting feature
const DynamicCountUp = dynamic(() => import("react-countup"), { ssr: false });

const Counter = () => {
  /*   useEffect(() => {
    const handleScroll = () => {
      const divElement = counterRef?.current;
      if (!divElement) return;
      const { top, bottom } = divElement.getBoundingClientRect();
      if (top < window?.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  const counterData = [
    {
      icon: "/assets/home/a01.png",
      alt: "Happy Customers",
      count: (
        <>
          <DynamicCountUp start={0} end={80} duration={2.5} />+
        </>
      ),
      title: "Happy Customers",
    },
    {
      icon: "/assets/home/a02.png",
      alt: "Projects Completed",
      count: (
        <>
          <DynamicCountUp start={0} end={600} duration={2.5} />+
        </>
      ),
      title: " Projects Completed",
    },
    {
      icon: "/assets/home/a03.png",
      alt: "Organic Impressions",
      count: (
        <>
          <DynamicCountUp start={0} end={5} duration={5} />
          M+
        </>
      ),
      title: "Organic Impressions",
    },
    {
      icon: "/assets/home/a04.png",
      alt: "Pro Awards Winner",
      count: (
        <>
          <DynamicCountUp start={0} end={3} duration={6.5} />+
        </>
      ),
      title: "Pro Awards Winner",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      {counterData?.map((item, keys) => (
        // recode my-0 py-0
        <div
          className={`${styles.parentContainer}`}
          key={keys}
          // data-aos="zoom-in-up"
          // data-aos-delay={0}
        >
          <div className={styles.cnt}>{item?.count}</div>
          <div className={styles.title}>{item?.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
