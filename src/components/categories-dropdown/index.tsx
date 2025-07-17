import { useCategorySelection } from "../../category-selection-context";
import CategoryTreeItem from "../category-tree-item";
import styles from "./style.module.css";
import categories from "../../categories.json";

export default function CategoryDropdown() {
  const {
    selectedCategory,
    setSelectedCategory,
    showDropdown,
    setShowDropdown
  } = useCategorySelection();

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setShowDropdown(shown => !shown)}
        className={styles.dropdownBtn}>
        <i className={`${styles.searchIcon} bi bi-search`}></i>
        {selectedCategory == undefined
          ? "Tìm kiếm thiết bị bạn muốn bán từ danh mục"
          : selectedCategory || "Sản phẩm khác"}
        <i className={`${styles.chrevronDown} bi bi-chevron-down`}></i>
      </button>
      {showDropdown && (
        <ul className={`${styles.dropdownContent}`}>
          {categories.map((item: any) => (
            <CategoryTreeItem key={item.id} {...item} />
          ))}
          <li>
            <a
              role="button"
              className={styles.dropdownItemContent}
              onClick={() => {
                setSelectedCategory("");
                setShowDropdown(false);
              }}>
              Sản phẩm khác
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
