"use client";

import styles from "./OrderModal.module.css";

interface OrderModalProps {
  onClose: () => void;
}

function fireConversion() {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-17869738192/0FHmCPWj4qEcENCh-shC",
      value: 1.0,
      currency: "USD",
    });
  }
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
        <div className={styles.icon}>🍔</div>
        <h3 className={styles.title}>Order Now!</h3>
        <p className={styles.text}>
          Choose your preferred platform to place your order.
        </p>
        <div className={styles.actions}>
          <a
            href="https://fortworthfoodworks.com/s/the-burgerdudes/3004-cullen-st-fort-worth/8304d658-bc87-4e2e-b857-0cba76c9e677"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
            onClick={fireConversion}
          >
            Order Online
            <span className={styles.sub}>Fort Worth Food Works</span>
          </a>
          <a
            href="https://www.doordash.com/store/the-burgerdudes-fort-worth-42568019/105536359/?event_type=autocomplete&pickup=false"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.doordashBtn}
            onClick={fireConversion}
          >
            Order on DoorDash
            <span className={styles.sub}>Fast delivery to your door</span>
          </a>
          <a
            href="https://www.ubereats.com/store/the-burgerdudes3004-cullen-st/odVU0imbUTyq9xeEF6jaeg?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ubereatsBtn}
            onClick={fireConversion}
          >
            Order on Uber Eats
            <span className={styles.sub}>Delivered fresh & fast</span>
          </a>
        </div>
      </div>
    </div>
  );
}
