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
          >
            Order Online
            <span className={styles.sub}>Fort Worth Food Works</span>
          </a>
          <a
            href="https://www.doordash.com/store/the-burgerdudes-fort-worth-42568019/105536359/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJCdXJnZXJzIiwiaXRlbV9pZHMiOls0NDEwMzU2OTQxMl0sInNlYXJjaF90ZXJtIjoiYnVyZ2VyIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwiLCJxdWVyeV9pbnRlbnQiOiJGT09EX0NVSVNJTkUifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDExMDA0NSw0XX0=&pickup=false"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.doordashBtn}
          >
            Order on DoorDash
            <span className={styles.sub}>Fast delivery to your door</span>
          </a>
          <a
            href="https://www.ubereats.com/store/the-burgerdudes3004-cullen-st/odVU0imbUTyq9xeEF6jaeg?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ubereatsBtn}
          >
            Order on Uber Eats
            <span className={styles.sub}>Delivered fresh & fast</span>
          </a>
        </div>
      </div>
    </div>
  );
}
