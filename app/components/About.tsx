"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const stats = [
  { value: "100%", label: "Fresh Ingredients" },
  { value: "30min", label: "Avg Delivery Time" },
  { value: "$25+", label: "Free Delivery" },
  { value: "7 days", label: "A Week" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.textBlock}`}>
          <span className={styles.overline}>Who We Are</span>
          <h2 className={styles.heading}>
            BOLD FLAVORS.<br />
            <span className={styles.headingAccent}>NO COMPROMISE.</span>
          </h2>
          <p className={styles.body}>
            We&apos;re passionate about crafting the perfect burger experience.
            Every item is made fresh to order with premium ingredients, delivered
            fast to your door. Get ready for serious flavor!
          </p>
          <div className={styles.divider} />
          <p className={styles.sub}>
            From our legendary Classic BurgerDude to our over-the-top Double Dude
            Deluxe, every bite is a masterpiece of flavor, texture, and pure
            American indulgence.
          </p>
          <a href="#menu" className={styles.cta}>
            EXPLORE THE MENU
          </a>
        </div>

        <div className={`reveal ${styles.statsBlock}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🍔</div>
            <div>
              <div className={styles.featureTitle}>Made Fresh to Order</div>
              <div className={styles.featureText}>
                Every burger crafted when you order — never pre-made, never frozen.
              </div>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <div>
              <div className={styles.featureTitle}>Lightning Fast Delivery</div>
              <div className={styles.featureText}>
                Fort Worth &amp; surrounding areas. Free delivery on orders $25+.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
