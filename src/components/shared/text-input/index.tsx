import styles from "../styles.module.css";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function TextInput({
  id,
  label,
  placeholder = "",
  type = "text",
  className = ""
}: Props) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`${styles.inputTitle} form-label`}>
        {label}
      </label>
      <input
        type={type}
        className={`${styles.input} form-control`}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
