"use client";

import { useEffect, useRef } from "react";
import styles from "./ComboBanner.module.css";

export default function ComboBanner() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="deals" className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.comboCard}`}>
          <div className={styles.comboGlow} aria-hidden="true" />

          <div className={styles.comboTop}>
            <span className={styles.comboEmoji}>🎉</span>
            <span className={styles.comboTag}>COMBO DEAL</span>
          </div>

          <h2 className={styles.comboTitle}>
            BURGER + FRIES + DRINK
          </h2>

          <div className={styles.comboPrice}>
            <span className={styles.comboPriceNum}>$16.99</span>
            <span className={styles.comboPriceSub}>per combo</span>
          </div>

          <p className={styles.comboDesc}>
            Any Burger, Sandwich, or Chicken +{" "}
            <strong>Fries</strong> +{" "}
            <strong>Drink</strong> — one unbeatable price.
          </p>

          <div className={styles.comboUpgrade}>
            <span className={styles.comboUpgradeIcon}>⬆️</span>
            Upgrade to Loaded Fries or Premium Shake for <strong>+$2.00</strong>
          </div>

          <a href="#menu" className={styles.comboBtn}>
            BUILD YOUR COMBO
          </a>
        </div>

        <div className={`reveal ${styles.addonsCard}`}>
          <span className={styles.addonsOverline}>Customize Your Order</span>
          <h3 className={styles.addonsTitle}>
            ADD-ONS &<br />
            <span className={styles.addonsTitleAccent}>EXTRAS</span>
          </h3>

          <ul className={styles.addonsList}>
            {[
              { label: "Extra Patty", price: "+$3.50" },
              { label: "Extra Cheese", price: "+$1.50" },
              { label: "Crispy Bacon", price: "+$2.50" },
              { label: "Fresh Avocado", price: "+$2.00" },
            ].map((addon) => (
              <li key={addon.label} className={styles.addonItem}>
                <span className={styles.addonDot} />
                <span className={styles.addonLabel}>{addon.label}</span>
                <span className={styles.addonPrice}>{addon.price}</span>
              </li>
            ))}
          </ul>

          <p className={styles.addonsNote}>
            Add to any burger, sandwich, or chicken item when ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
