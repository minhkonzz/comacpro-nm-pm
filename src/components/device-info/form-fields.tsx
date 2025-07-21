import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { TextInput, SelectInput } from "@/components/shared";
import deviceStates from "@/mock-data/device-states.json";
import styles from "./style.module.css";

interface CatalogFile {
  name: string;
  file: File;
}

interface FormData {
  category: string;
  brand: string;
  model: string;
  serialNumber: string;
  deviceState: string;
  usageTime: string;
  year: number;
  title: string;
  description: string;
  platformCapacity: string;
  platformHeight: string;
  defectInfo: string;
}

export default function FormFields() {
  const catalogInputRef = useRef<HTMLInputElement>(null);
  const [catalogFile, setCatalogFile] = useState<CatalogFile | null>(null);
  const [hasDefects, setHasDefects] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    category: "Diesel Articulating Boom Lift",
    brand: "Genie",
    model: "Z-80/60",
    serialNumber: "",
    deviceState: "",
    usageTime: "",
    year: 2024,
    title: "",
    description: "",
    platformCapacity: "227",
    platformHeight: "23.77",
    defectInfo: ""
  });

  const handleCatalogUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setCatalogFile({
        name: file.name,
        file: file
      });
    } else {
      alert("Vui lòng chọn file PDF");
    }
  };

  const removeCatalogFile = () => {
    setCatalogFile(null);
    if (catalogInputRef.current) {
      catalogInputRef.current.value = "";
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDefectsToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setHasDefects(event.target.checked);
    if (!event.target.checked) {
      handleInputChange('defectInfo', '');
    }
    console.log('Checkbox toggled:', event.target.checked);
  };

  const isFieldLocked = hasDefects;

  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-12 mb-3">
          <TextInput 
            className={isFieldLocked ? styles.lockedField : ''}
            id="info-category"
            label="Danh mục"
            value={formData.category}
            onChange={e => handleInputChange('category', e.target.value)}
            readOnly={isFieldLocked}
          />
        </div>
        <div className="col-12 mb-3">
          <TextInput 
            className={isFieldLocked ? styles.lockedField : ''}
            id="info-brand"
            label="Thương hiệu"
            value={formData.brand}
            onChange={e => handleInputChange('brand', e.target.value)}
            readOnly={isFieldLocked}
          />
        </div>
        <div className="col-12 mb-3">
          <TextInput 
            className={isFieldLocked ? styles.lockedField : ''}
            id="info-model"
            label="Model"
            value={formData.model}
            onChange={e => handleInputChange('model', e.target.value)}
            readOnly={isFieldLocked}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <SelectInput
            wrapperClassName=""
            id="info-state"
            label="Tình trạng thiết bị"
            placeholder="Chọn tình trạng"
            options={deviceStates}
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextInput
            id="info-serial"
            label="Serial Number"
            placeholder="Nhập serial"
            value={formData.serialNumber}
            onChange={e => handleInputChange('serialNumber', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <SelectInput
            wrapperClassName=""
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
        </div>
        <div className="col-md-6 mb-3">
          <TextInput
            id="info-usage"
            label="Thời gian sử dụng"
            placeholder="Nhập thời gian sử dụng"
            value={formData.usageTime}
            onChange={e => handleInputChange('usageTime', e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <TextInput
            id="info-title"
            label="Tiêu đề"
            placeholder="Nhập tiêu đề sản phẩm"
            value={formData.title}
            onChange={e => handleInputChange('title', e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className={`form-label ${styles.formLabel}`}>Mô tả</label>
        <textarea
          className={`form-control ${styles.formControl}`}
          rows={4}
          placeholder="Nhập mô tả"
          value={formData.description}
          onChange={e => handleInputChange('description', e.target.value)}
        />
      </div>
      <div className="row">
        <div className={`col-md-6 mb-3 ${styles.inputWrapper}`}>
          <TextInput
            className={isFieldLocked ? styles.lockedField : ''}
            id="info-capacity"
            label="Platform Capacity - Unrestricted (KG)"
            type="number"
            value={formData.platformCapacity}
            onChange={e => handleInputChange('platformCapacity', e.target.value)}
            readOnly={isFieldLocked}
          />
        </div>
        <div className={`col-md-6 mb-3 ${styles.inputWrapper}`}>
          <TextInput 
            className={isFieldLocked ? styles.lockedField : ''}
            id="info-height"
            label="Platform Height (Meter)"
            type="number"
            value={formData.platformHeight}
            onChange={e => handleInputChange('platformHeight', e.target.value)}
            readOnly={isFieldLocked}
          />
        </div>
      </div>
      
      {/* Catalog Section */}
      <div className={`${styles.catalogSection} ${catalogFile ? styles.catalogSectionNoSpace : ''}`}>
        <label className={`form-label ${styles.formLabel}`}>Catalogue</label>
        {!catalogFile ? (
          <button
            type="button"
            className={`btn-product ${styles.btnProduct}`}
            onClick={() => catalogInputRef.current?.click()}>
            <div className="icon">
              <img src="/archive-book.png" alt="Catalog" />
            </div>
            Tải lên catalogue
          </button>
        ) : (
          <div className={styles.catalogFile}>
            <div className={styles.fileInfo}>
              <img src="public/task-square.png" alt="PDF" className={styles.pdfIcon} />
              <span className={styles.fileName}>{catalogFile.name}</span>
            </div>
            <button
              type="button"
              className={styles.removeCatalog}
              onClick={removeCatalogFile}
              title="Xóa file">
              ×
            </button>
          </div>
        )}
        <input
          ref={catalogInputRef}
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleCatalogUpload}
        />
      </div>
      
      {/* Defects Section */}
      <div className={styles.defectsSection}>
        <label className={styles.defectsLabel}>
          Please mark if there are any defects
        </label>
        <div className={styles.toggleSwitch}>
          <input 
            type="checkbox" 
            id="defectsToggle" 
            checked={hasDefects}
            onChange={handleDefectsToggle}
          />
          <span className={styles.slider}></span>
        </div>
      </div>
      
      {/* Defect Info Section - Only show when checkbox is checked */}
      {hasDefects && (
        <div className="mb-3">
          <label className={`form-label ${styles.formLabel}`}>Thông tin bị sai</label>
          <textarea
            className={`form-control ${styles.formControl}`}
            rows={3}
            placeholder="Nhập mô tả"
            value={formData.defectInfo}
            onChange={e => handleInputChange('defectInfo', e.target.value)}
          />
        </div>
      )}
    </div>
  );
}