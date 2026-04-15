"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import OrderModal from "./OrderModal";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const timeout = setTimeout(() => el.classList.add(styles.visible), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showModal && <OrderModal onClose={() => setShowModal(false)} />}

      <section className={styles.hero}>
        {/* Animated background grid */}
        <div className={styles.bgGrid} aria-hidden="true" />
        <div className={styles.bgOverlay} aria-hidden="true" />

        <div className={`container ${styles.content}`} ref={titleRef}>

          {/* Text side */}
          <div className={styles.textSide}>
            <h1 className={styles.title}>
              THE<br />
              <span className={styles.titleAccent}>BURGER</span>
              <br />DUDES
            </h1>

            <p className={styles.tagline}>Premium Burgers • Fast Delivery</p>

            <div className={styles.ctas}>
              <button onClick={() => setShowModal(true)} className={styles.orderBtn}>
                ORDER NOW
              </button>
              <a href="#menu" className={styles.menuBtn}>
                VIEW MENU
              </a>
            </div>

            <div className={styles.deliveryBadges}>
              <span className={styles.badge}>UberEats</span>
              <span className={styles.badge}>DoorDash</span>
              <span className={styles.badge}>Grubhub</span>
            </div>
          </div>

          {/* Burger image side */}
          <div className={styles.imageSide} aria-hidden="true">
            <div className={styles.imageGlow} />
            <Image
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85&auto=format&fit=crop"
              alt="BurgerDudes signature burger"
              width={520}
              height={420}
              className={styles.burgerImg}
              priority
              unoptimized
            />
          </div>
        </div>

        <a href="#about" className={styles.scrollDown} aria-label="Scroll down">
          <span className={styles.scrollArrow}>↓</span>
        </a>
      </section>
    </>
  );
}
