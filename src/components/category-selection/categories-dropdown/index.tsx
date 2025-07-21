import { useCategorySelection } from "@/contexts/category-selection";
import useClickOutside from "@/hooks/use-click-outside";
import CategoryTreeItem, { type Category } from "../category-tree-item";
import styles from "./style.module.css";
import categories from "@/mock-data/categories.json";

export default function CategoryDropdown() {
  const {
    selectedCategory,
    setSelectedCategory,
    toggleDropdown,
    showDropdown,
    setShowDropdown
  } = useCategorySelection();

  const addRef = useClickOutside(() =>
    setShowDropdown(false)
  );

  return (
    <div className={styles.dropdown}>
      <button
        ref={addRef}
        onClick={toggleDropdown}
        className={styles.dropdownBtn}>
        <i className={`${styles.searchIcon} bi bi-search`}></i>
        {selectedCategory == undefined
          ? "Tìm kiếm thiết bị bạn muốn bán từ danh mục"
          : selectedCategory || "Sản phẩm khác"}
        <i className={`${styles.chrevronDown} bi bi-chevron-down`}></i>
      </button>

      {showDropdown && (
        <ul ref={addRef} className={styles.dropdownContent}>
          {categories.map((item: Category) => (
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
