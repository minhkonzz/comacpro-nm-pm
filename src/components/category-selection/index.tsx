import { SectionTitle } from "../shared";
import styles from "./style.module.css";
import CategorySelectionProvider from "@/contexts/category-selection";
import CategoryDropdown from "./categories-dropdown";
import CategoryInputs from "./categories-inputs";

export default function CategorySelection() {
  return (
    <div className={styles.container}>
      <SectionTitle title="Chọn danh mục thiết bị muốn bán hàng" />
      <CategorySelectionProvider>
        <CategoryDropdown />
        <CategoryInputs />
      </CategorySelectionProvider>
    </div>
  );
}
