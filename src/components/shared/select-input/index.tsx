import { type ReactChangeEvent, useState } from "@/utils/imports";
import styles from "../styles.module.css";

interface Props {
  id: string;
  label: string;
  options: any[];
  defaultValue?: any;
  placeholder?: string;
  onChange?: (e: ReactChangeEvent<HTMLSelectElement>) => void;
  wrapperClassName?: string;
  selectClassName?: string;
}

export default function SelectInput({
  id,
  label,
  options,
  defaultValue = "",
  placeholder,
  onChange,
  wrapperClassName = "",
  selectClassName = ""
}: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  console.log(selectedValue)

  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className={`${styles.inputTitle} form-label`}>
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        id={id}
        className={`${styles.input} form-select${
          selectClassName ? ` ${selectClassName}` : ""
        }`}
        aria-label={label}
        onChange={(e: ReactChangeEvent<HTMLSelectElement>) => {
          setSelectedValue(e.target.value);
          onChange?.(e);
        }}>
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map(opt => (
          <option
            key={opt.id}
            value={opt.id}
            {...(selectedValue == opt.id && { className: "selected" })}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}
