import { TextInput, SelectInput } from "@/components/shared";
import deviceStates from "@/mock-data/device-states.json";
import styles from "./style.module.css";

export default function FormFields() {
  const downloadCatalog = () => {
    // Simulate catalog download
    alert("Chức năng tải lên catalogue sẽ được thực hiện ở đây");
  };

  return (
    <div className="col-md-9">
      <div className="row">
        <TextInput 
          className="col-md-6 mb-3"
          id="info-category"
          label="Danh mục"
          value="Diesel Articulating Boom Lift"
          readOnly
        />
        <TextInput 
          className="col-md-6 mb-3"
          id="info-brand"
          label="Thương hiệu"
          value="Genie"
          readOnly
        />
      </div>
      <div className="row">
        <TextInput 
          className="col-md-6 mb-3"
          id="info-model"
          label="Model"
          value="Z-80/60"
          readOnly
        />
        <TextInput
          className="col-md-6 mb-3"
          id="info-serial"
          label="Serial Number"
          placeholder="Nhập serial"
        />
      </div>
      <div className="row">
        <SelectInput
          wrapperClassName="col-md-6 mb-3"
          id="info-state"
          label="Tình trạng thiết bị"
          placeholder="Chọn tình trạng"
          options={deviceStates}
        />
        <TextInput
          className="col-md-6 mb-3"
          id="info-usage"
          label="Thời gian sử dụng"
          placeholder="Nhập thời gian sử dụng"
        />
      </div>
      <div className="row">
        <SelectInput
          wrapperClassName="col-md-6 mb-3"
          id="info-year"
          label="Năm sản xuất"
          options={[
            { id: 2024, name: 2024 },
            { id: 2023, name: 2023 },
            { id: 2022, name: 2022 },
            { id: 2021, name: 2021 }
          ]}
          defaultValue={2024}
        />
        <TextInput
          className="col-md-6 mb-3"
          id="info-title"
          label="Tiêu đề"
          placeholder="Nhập tiêu đề sản phẩm"
        />
      </div>
      <div className="mb-3">
        <label className={`form-label ${styles.formLabel}`}>Mô tả</label>
        <textarea
          className={`form-control ${styles.formControl}`}
          rows={4}
          placeholder="Nhập mô tả"></textarea>
      </div>
      <div className="row">
        <TextInput
          className="col-md-6 mb-3"
          id="info-capacity"
          label="Platform Capacity - Unrestricted (KG)"
          type="number"
          value="227"
        />
        <TextInput 
          className="col-md-6 mb-3"
          id="info-height"
          label="Platform Height (Meter)"
          type="number"
          value="23.77"
        />
      </div>
      {/* <!-- Catalog Section --> */}
      <div className={styles.catalogSection}>
        <label className={`form-label ${styles.formLabel}`}>Catalogue</label>
        <button
          type="button"
          className={`btn-product ${styles.btnProduct}`}
          onClick={downloadCatalog}>
          <div className="icon">
            <img src="/archive-book.png" alt="Catalog" />
          </div>
          Tải lên catalogue
        </button>
      </div>
      {/* <!-- Defects Section --> */}
      <div className={styles.defectsSection}>
        <label className={styles.defectsLabel}>
          Please mark if there are any defects
        </label>
        <div className={styles.toggleSwitch}>
          <input type="checkbox" id="defectsToggle" />
          <span className={styles.slider}></span>
        </div>
      </div>
    </div>
  );
}
