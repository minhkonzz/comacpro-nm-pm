import { SectionTitle } from "../shared";
import UploadSection from "./upload-section";
import FormFields from "./form-fields";
import styles from "./style.module.css";

export default function DeviceInfo() {
  return (
    <div className={styles.containerForm}>
      <div className={styles.formSection}>
        <SectionTitle title="Điền thông tin thiết bị" />
        <div className="row">
          {/* <!-- Upload Section --> */}
          <UploadSection />
          {/* <!-- Form Fields --> */}
          <FormFields />
        </div>
      </div>
    </div>
  )
}