import type { ReactChangeEvent } from "@/utils/imports";
import styles from "../styles.module.css";

interface Props {
  id: string;
  label: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (e: ReactChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  inputClassName?: string;
}

export default function TextInput({
  id,
  label,
  value,
  readOnly,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  inputClassName = ""
}: Props) {
  return (
    <div className={className}>
      <label htmlFor={id} className={`form-label ${styles.inputTitle}`}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        className={`form-control ${styles.input} ${
          inputClassName ? ` ${inputClassName}` : ""
        }`}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={!!readOnly}
        onDrop={e => {
          if (
            e.dataTransfer.files.length > 0 ||
            Array.from(e.dataTransfer.items).some(item => item.kind !== 'string')
          ) {
            e.preventDefault();
          }
        }}
        onPaste={e => {
          if (
            e.clipboardData.files.length > 0 ||
            Array.from(e.clipboardData.items).some(item => item.kind !== 'string')
          ) {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
}
