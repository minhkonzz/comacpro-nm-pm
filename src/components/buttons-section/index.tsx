import styles from "./style.module.css";

export default function ButtonsSection() {
  const handleExit = () => {
    if (confirm("Bạn có chắc chắn muốn thoát không?")) {
      // Có thể redirect về trang chính hoặc đóng modal
      window.location.href = "/";
      // Hoặc nếu là modal: window.close();
    }
  }

  const handleSend = () => {
    // Xử lý gửi form hoặc dữ liệu
    console.log("Đang gửi...");

    // Ví dụ: Thu thập dữ liệu từ các form trên trang
    // const formData = new FormData();

    // Nếu có form elements, có thể thu thập như sau:
    // const inputs = document.querySelectorAll('input, select, textarea');
    // inputs.forEach(input => {
    //     if (input.value) {
    //         formData.append(input.name, input.value);
    //     }
    // });

    // Hiển thị thông báo hoặc xử lý gửi
    alert("Đã gửi thành công!");
  }

  return (
    <div className={styles.buttonsSection}>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonLeft}>
            <button className={styles.btnExit} onClick={handleExit}>
              <span>Thoát</span>
            </button>
          </div>
          <div className={styles.buttonRight}>
            <button className={`btn-user ${styles.btnUser}`} onClick={handleSend}>
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}