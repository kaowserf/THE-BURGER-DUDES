"use client";

import styles from "./OrderModal.module.css";

interface OrderModalProps {
  onClose: () => void;
}

export default function OrderModal({ onClose }: OrderModalProps) {
  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Order information"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <div className={styles.icon}>📞</div>
        <h3 className={styles.title}>We&apos;re Taking Orders!</h3>
        <p className={styles.text}>
          Currently we are taking orders by <strong>phone call</strong> and{" "}
          <strong>WhatsApp</strong> only.
        </p>
        <div className={styles.actions}>
          <a href="tel:+18317943865" className={styles.phoneBtn}>
            📞 Call Us
            <span className={styles.number}>+1 (831) 794-3865</span>
          </a>
          <a
            href="https://wa.me/18317943865"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            💬 WhatsApp
            <span className={styles.number}>+1 (831) 794-3865</span>
          </a>
        </div>
      </div>
    </div>
  );
}
