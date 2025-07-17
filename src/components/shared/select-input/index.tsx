import styles from "../styles.module.css";

interface Props {
  id: string;
  label: string;
  options: any[];
  className?: string;
}

export default function SelectInput({
  id,
  label,
  options,
  className = ""
}: Props) {
  return (
    <div className={className}>
      <label htmlFor={id} className={`${styles.inputTitle} form-label`}>
        {label}
      </label>
      <select
        id={id}
        className={`${styles.input} form-select`}
        aria-label={label}>
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
