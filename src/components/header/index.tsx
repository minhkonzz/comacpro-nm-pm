import HeaderMenuMobile from "./mobile-menu";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="d-flex align-items-center">
        <div className={`${styles.logo} me-3`}>
          <img src="/Group-31.png" alt="COMACPRO Logo" />
        </div>
        <nav className="d-none d-md-block">
          <ul className={styles.navMenu}>
            <li><a href="#ban">Bán</a></li>
            <li><a href="#cho-thue">Cho thuê</a></li>
            <li><a href="#danh-muc">Danh mục</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#ve-chung-toi">Về chúng tôi</a></li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.actionButtons} d-none d-md-flex`}>
        <a href="#dang-san-pham" className="btn-product">
          <div className="icon">
            <img src="/note-add.png" alt="Add Product" />
          </div>
          <span>Đăng sản phẩm</span>
        </a>
        <a href="#user" className="btn-user">
          <div className="icon">
            <img src="/user-octagon.png" alt="User" />
          </div>
        </a>
      </div>
      <HeaderMenuMobile />
    </header>
  )
}