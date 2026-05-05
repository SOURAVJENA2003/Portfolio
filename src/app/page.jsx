"use client";
import "./home.css";
import Button from "@/components/Button/Button";
import Showreel from "@/components/Showreel/Showreel";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import ServicesSection from "@/components/Services/Services";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import Preloader, { isInitialLoad } from "@/components/Preloader/Preloader";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <Preloader />
      <section className="hero">
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 5.75 : 0.75}>
                <h1>Hi, I'm Sourav Jena</h1>
                <h2>A Full-Stack Developer</h2>
              </Copy>
            </div>

            <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                <p className="sm">&copy; Sourav Jena</p>
                <p className="sm">( KIIT University )</p>
              </Copy>
            </div>

            <div className="hero-footer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                <p className="lg ">Computer Science student with strong skills in DSA and full-stack web development, building secure and efficient applications to solve real-world problems.</p>
              </Copy>

              <div className="hero-cta">
                <Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">
                  About Sourav
                </Button>
                {/* <div className="hero-theme-toggle" style={{ animationDelay: `${isInitialLoad ? 6.35 : 1.55}s` }}>
                   <ThemeToggle />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Showreel />

      <section className="featured-work">
        <div className="container">
          <div className="featured-work-header-content">
            <div className="featured-work-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Selected Projects</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="featured-work-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  A collection of projects ranging from full-stack creator
                  platforms to secure password managers and algorithmic
                  optimizations.
                </p>
              </Copy>
            </div>
          </div>

          <FeaturedWork />
        </div>
      </section>

      <section className="services-header-container">
        <div className="container">
          <div className="services-header-content">
            <div className="services-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>SERVICES</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="services-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  I help turn ideas into polished digital products through full-stack development, secure backend systems, optimization, and problem-solving support.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <Spotlight />

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
