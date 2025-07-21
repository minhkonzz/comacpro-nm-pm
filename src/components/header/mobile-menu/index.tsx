import { useClickOutside, useToggle } from "@/hooks";
import styles from "./style.module.css";

export default function HeaderMenuMobile() {
  const { active, toggle, setActive } = useToggle(false);
  const addRef = useClickOutside(() => setActive(false));

  return (
    <>
      <button
        ref={addRef}
        className={`${styles.mobileMenuToggle} d-md-none`}
        onClick={toggle}>
        <i className={`fas ${(active && "fa-times") || "fa-bars"}`}></i>
      </button>
      {active && (
        <div ref={addRef} className={styles.mobileMenu} id="mobileMenu">
          <ul>
            <li>
              <a href="#ban">Bán</a>
            </li>
            <li>
              <a href="#cho-thue">Cho thuê</a>
            </li>
            <li>
              <a href="#danh-muc">Danh mục</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#ve-chung-toi">Về chúng tôi</a>
            </li>
          </ul>
          <div className={styles.mobileActions}>
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
        </div>
      )}
    </>
  );
}
