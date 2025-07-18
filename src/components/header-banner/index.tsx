import styles from "./style.module.css";

export default function Banner() {
  return (
    <div className={styles.banner} id="banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Đăng thiết bị đơn giản chỉ với 1 bước</h1>
            <p>
              Bạn có biết? <span className={styles.brand}>ComacPro</span> hiện
              có hơn 100 Danh mục Thiết bị và hơn 3.000 Danh sách Thiết bị.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
