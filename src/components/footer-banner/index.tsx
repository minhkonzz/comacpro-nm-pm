import styles from "./style.module.css";

export default function FooterBanner() {
  return (
    <div className="container-fluid p-0">
      <div className={styles.bannerContainer}>
        <div className={styles.bannerItem}>
          <div className={styles.bannerText} data-item="1">
            TYCOONSTORY
          </div>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerText} data-item="2">
            TYCOONSTORY
          </div>
        </div>
        <div className={styles.bannerItem}>
          <div className={`${styles.bannerText} ${styles.highlight}`} data-item="3">
            SOUTHEAST•ASIA
            <br />
            <span style={{ color: "#007bff" }}>construction</span>
          </div>
        </div>
        <div className={styles.bannerItem}>
          <div className={styles.bannerText} data-item="4">
            TECH COLLECTIVE
          </div>
        </div>
      </div>
    </div>
  );
}
