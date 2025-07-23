import { useState, type ReactChangeEvent } from "@/utils/imports";
import { SectionTitle, TextInput, SelectInput } from "@/components/shared";
import postalCodes from "@/mock-data/postal-codes.json";
import cities from "@/mock-data/citties.json";
import styles from "./style.module.css";
import { ButtonWithLoading } from "@/components/shared/loading";

export default function DevicesLocation() {
  // const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState<number>(0);
  const [mapLoading, setMapLoading] = useState(false);

  const onSelectMap = () => {
    setMapLoading(true);
    setTimeout(() => {
      setMapLoading(false);
      alert('Chức năng chọn từ bản đồ sẽ được triển khai');
    }, 1500);
  }

  const onSelectCity = (e: ReactChangeEvent<HTMLSelectElement> ) => {
    const selectedCity = e.target.value as keyof typeof postalCodes;
    setPostalCode(postalCodes[selectedCity]);
  }

  const onChangePostalCode = (e: ReactChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 6) return;
    setPostalCode(Number(e.target.value.replace(/\D/g, '')));
  }

  return (
    <div className="container-fluid">
      <div className={styles.warehouseContainer}>
        <SectionTitle title="Kho bãi để thiết bị" />
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <SelectInput
              wrapperClassName={styles.formGroup}
              id="citySelect"
              label="Thành phố"
              options={cities}
              defaultValue={cities[0].id}
              onChange={onSelectCity}
            />
            <TextInput
              className={styles.formGroup}
              id="postalCode"
              label="Mã bưu điện"
              placeholder="Nhập mã bưu điện"
              value={postalCode && postalCode.toString() || ""}
              onChange={onChangePostalCode}
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.addressRow}>
              <TextInput
                id="specificAddress"
                className={styles.formGroup}
                inputClassName={styles.addressInput}
                label="Địa chỉ cụ thể"
                placeholder="Nhập mô tả"
              />
              <ButtonWithLoading
                className={`btn-product ${styles.btnProduct}`}
                id="mapButton"
                loading={mapLoading}
                onClick={onSelectMap}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="icon">
                    <img src="/map.png" alt="Map icon" />
                  </span>
                  <span>Chọn từ bản đồ</span>
                </span>
              </ButtonWithLoading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
