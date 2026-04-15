"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./Menu.module.css";
import { menuCategories, type MenuItem, type Badge } from "./menuData";
import OrderModal from "./OrderModal";

function BadgeChip({ badge }: { badge: Badge }) {
  return (
    <span className={`${styles.badge} ${styles[`badge_${badge.type}`]}`}>
      {badge.label}
    </span>
  );
}

function MenuCard({ item, onOrder }: { item: MenuItem; onOrder: () => void }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrap}>
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={220}
          className={styles.cardImage}
          unoptimized
        />
        {item.badges.length > 0 && (
          <div className={styles.cardBadges}>
            {item.badges.map((b) => (
              <BadgeChip key={b.label} badge={b} />
            ))}
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{item.name}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.cardPrice}>{item.price}</span>
        <button onClick={onOrder} className={styles.cardOrder}>
          Order
        </button>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("burgers");
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeCategory = menuCategories.find((c) => c.id === active)!;

  // Trigger reveal animations for all .reveal elements inside a container
  const triggerReveals = useCallback((container: Element | null) => {
    if (!container) return;
    container.querySelectorAll<Element>(".reveal").forEach((el, i) => {
      el.classList.remove("visible");
      setTimeout(() => el.classList.add("visible"), i * 60);
    });
  }, []);

  // Initial section reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveals(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [triggerReveals]);

  // Re-trigger card reveals on tab switch
  useEffect(() => {
    // Small delay to let React render the new cards first
    const t = setTimeout(() => triggerReveals(gridRef.current), 30);
    return () => clearTimeout(t);
  }, [active, triggerReveals]);

  // Scroll active tab into view on mobile
  useEffect(() => {
    const tabEl = tabsRef.current?.querySelector(`.${styles.tabActive}`);
    tabEl?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const handleOrder = () => setShowModal(true);

  return (
    <>
      {showModal && <OrderModal onClose={() => setShowModal(false)} />}

      <section id="menu" className={styles.menu} ref={sectionRef}>
        <div className="container">
          <div className={`reveal ${styles.header}`}>
            <span className={styles.overline}>Full Menu</span>
            <h2 className={styles.heading}>
              WHAT WE&apos;RE <span className={styles.headingAccent}>SERVING</span>
            </h2>
            <p className={styles.sub}>
              Every item made fresh to order. Boldly seasoned, unapologetically indulgent.
            </p>
          </div>

          {/* Tab nav */}
          <div className={`reveal ${styles.tabsWrapper}`}>
            <div className={styles.tabs} ref={tabsRef}>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.tab} ${active === cat.id ? styles.tabActive : ""}`}
                  onClick={() => setActive(cat.id)}
                >
                  <span className={styles.tabIcon}>{cat.icon}</span>
                  <span className={styles.tabLabel}>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Category subtitle */}
          {activeCategory.subtitle && (
            <p className={styles.categorySubtitle}>{activeCategory.subtitle}</p>
          )}

          {/* Grid of cards */}
          <div className={styles.grid} ref={gridRef}>
            {activeCategory.items.map((item) => (
              <div className="reveal" key={item.name}>
                <MenuCard item={item} onOrder={handleOrder} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
