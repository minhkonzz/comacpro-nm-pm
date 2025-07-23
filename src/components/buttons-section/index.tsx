import styles from "./style.module.css";
import React, { useState } from "react";
import { ButtonWithLoading, LoadingBar } from "@/components/shared/loading";
import useScrollToTop from "@/hooks/use-scroll-to-top";

export default function ButtonsSection() {
  useScrollToTop(); // Scroll lên top khi mount
  const [loading, setLoading] = useState(false);
  const [barLoading, setBarLoading] = useState(false);

  const handleExit = () => {
    if (confirm("Bạn có chắc chắn muốn thoát không?")) {
      window.location.href = "/";
    }
  };

  const handleSend = () => {
    setLoading(true);
    setBarLoading(true);
    // Giả lập gọi API
    setTimeout(() => {
      setLoading(false);
      setBarLoading(false);
      alert("Đã gửi thành công!");
    }, 2000);
  };

  return (
    <>
      <LoadingBar isLoading={barLoading} />
      <div className={styles.buttonsSection}>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsWrapper}>
            <div className={styles.buttonLeft}>
              <button className={styles.btnExit} onClick={handleExit}>
                <span>Thoát</span>
              </button>
            </div>
            <div className={styles.buttonRight}>
              <ButtonWithLoading
                className={`btn-user ${styles.btnUser}`}
                loading={loading}
                onClick={handleSend}
              >
                Gửi
              </ButtonWithLoading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}