import { useCategorySelection } from "../../category-selection-context";
import styles from "./style.module.css";

interface Props {
  id: string;
  name: string;
  child?: boolean;
  childData: any;
}

function ItemWithoutChildData({ name, child }: Pick<Props, "name" | "child">) {
  const { setSelectedCategory, setShowDropdown } = useCategorySelection();

  return (
    <a
      role="button"
      onClick={() => {
        setSelectedCategory(name)
        setShowDropdown(false);
      }}
      className={`${styles.dropdownItemContent}${
        child ? " " + styles.child : ""
      }`}>
      <span className={styles.dropdownItemIcon} />
      <span className={styles.dropdownItemText}>{name}</span>
    </a>
  );
}

function ItemHasChildData({ id, name, child, childData }: Props) {
  return (
    <>
      <a
        className={`${styles.dropdownItemContent}${
          child ? " " + styles.child : ""
        }`}
        role="button"
        data-bs-toggle="collapse"
        href={`#${id}`}
        aria-expanded="false"
        aria-controls={id}>
        <span className={styles.dropdownItemIcon} />
        <span className={styles.dropdownItemText}>{name}</span>
        <i className={`${styles.plusIc} bi bi-plus-lg`}></i>
        <i className={`${styles.minusIc} bi bi-dash-lg`}></i>
      </a>
      <ul className="collapse" id={id}>
        {childData.map((item: any) => (
          <CategoryTreeItem key={item.id} {...item} child />
        ))}
      </ul>
    </>
  );
}

export default function CategoryTreeItem(props: Props) {
  return (
    <li className={styles.dropdownItem}>
      {(!!props.childData && <ItemHasChildData {...props} />) || (
        <ItemWithoutChildData name={props.name} child={props.child} />
      )}
    </li>
  );
}
