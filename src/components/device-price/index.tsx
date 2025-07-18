import { useState, type ReactChangeEvent } from "@/utils/imports";
import { SectionTitle, SelectInput, TextInput } from "../shared";
import currencies from "@/mock-data/currencies.json";
import styles from "./styles.module.css";

export default function DevicePrice() {
  const [price, setPrice] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("VND");

  const onChangePrice = (e: ReactChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (!value) return;
    setPrice(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };

  const onChangeCurrency = (e: ReactChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    console.log("Currency changed to:", currency);
    setSelectedCurrency(currency);
  };

  return (
    <div className={`container-fluid ${styles.formWrapper}`}>
      <div className={styles.sharedFormContainer}>
        <SectionTitle title="Giá bán thiết bị của bạn" />
        <div className={styles.sharedFormRow}>
          <TextInput 
            className={styles.sharedInputGroup}
            id="priceInput"
            label="Giá bán"
            placeholder="Nhập giá bán"
            value={price}
            onChange={onChangePrice}
          />
          <SelectInput 
            wrapperClassName={styles.sharedInputGroup}
            selectClassName={styles.currencySelect}
            id="currencySelect"
            label="Loại tiền"
            options={currencies}
            defaultValue={selectedCurrency}
            onChange={onChangeCurrency}
          />
        </div>
      </div>
    </div>
  );
}
