import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerCustom}>
      <div className={styles.footerContent}>
        {/* <!-- Logo và mô tả --> */}
        <div className={styles.logoContainer}>
          <img src="/footer.png" alt="COMACPRO" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Integer enim dolor nunc
            consequat elit nec commodo luctus tellus viverra aliquam ut feugiat
            dignissim. Odio volutpat sed laoreet dignissim ornare pharetra.
            Elementum diam et sit hendrerit.
          </p>
        </div>
        {/* <!-- Columns --> */}
        <div className={styles.footerColumns} style={{ marginLeft: 65 }}>
          {/* <!-- Người dùng & Đối tác --> */}
          <div className={styles.footerColumn}>
            <h5>Người dùng</h5>
            <a href="#">FAQs</a>
            <a href="#">Hướng dẫn thuê</a>
            <a href="#">Hướng dẫn mua</a>
            <h5 style={{ marginTop: 40 }}>Đối tác</h5>
            <a href="#">FAQs</a>
            <a href="#">Trở thành đối tác</a>
            <a href="#">Hướng dẫn bán</a>
          </div>
          {/* <!-- Truy cập nhanh --> */}
          <div className={styles.footerColumn}>
            <h5>Truy cập nhanh</h5>
            <a href="#">Đăng kí</a>
            <a href="#">Về chúng tôi</a>
            <a href="#">Sản phẩm</a>
            <a href="#">Blogs</a>
            <a href="#">Bảo hiểm</a>
            <a href="#">Điều kiện</a>
            <a href="#">FAQs</a>
          </div>
          {/* <!-- Liên hệ --> */}
          <div className={styles.footerColumn}>
            <h5>Liên hệ</h5>
            <p style={{ fontSize: 14 }}>
              Lorem ipsum dolor sit amet consectetur. Vitae nulla amet sed
              tortor orci quis tellus.
            </p>

            <div className={styles.contactInfo} style={{ marginTop: 80 }}>
              <strong>Hotline</strong>
              <span>+65-8831 8705</span>
            </div>
          </div>
          {/* <!-- Mạng xã hội --> */}
          <div className={styles.footerColumn}>
            <h5>Mạng xã hội</h5>
            <div className={styles.socialIcons}>
              <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" title="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
            <br />
            <div className={styles.contactInfo} style={{ marginTop: 65 }}>
              <strong>Email</strong>
              <span>info@comacpro.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className={styles.copyrightText}>© 2024 comacPro. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  )
}