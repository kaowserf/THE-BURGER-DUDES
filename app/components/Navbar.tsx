"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#deals", label: "Deals" },
    { href: "#footer", label: "Contact" },
  ];

  const handleOrderNow = () => {
    setMenuOpen(false);
    setShowModal(true);
  };

  return (
    <>
      {showModal && <OrderModal onClose={() => setShowModal(false)} />}

      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo}>
            THE <span className={styles.logoAccent}>BURGER</span>DUDES
          </a>

          <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className={styles.orderBtn}
                onClick={handleOrderNow}
              >
                ORDER NOW
              </button>
            </li>
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </nav>
    </>
  );
}
