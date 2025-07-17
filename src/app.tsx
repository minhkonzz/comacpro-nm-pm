import styles from "./app.module.css";
import CategorySelectionProvider from "./category-selection-context";
import CategoryDropdown from "./components/categories-dropdown";
import CategoryInputs from "./components/categories-inputs";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.decor}></span>
        <h2 className={styles.title}>Chọn danh mục thiết bị muốn bán hàng</h2>
      </div>
      <CategorySelectionProvider>
        <CategoryDropdown />
        <CategoryInputs />
      </CategorySelectionProvider>
    </div>
  );
}

export default App;
