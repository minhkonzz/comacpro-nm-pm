import {
  useState,
  useRef,
  type ReactChangeEvent,
  type Dispatch,
  type SetStateAction
} from "@/utils/imports";
import styles from "./style.module.css";

function MediaElement({
  fileIndex,
  fileType,
  src,
  setSelectedFile
}: {
  fileIndex: number;
  fileType: string;
  src: string;
  setSelectedFile: Dispatch<SetStateAction<any[]>>
}) {
  const removeImage = (index: number) => () => {
    setSelectedFile(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.imageItem} id={`image-${fileIndex}`}>
      {fileType === "image" ? (
        <img src={src} alt={`Preview ${fileIndex + 1}`} />
      ) : (
        <video src={src} controls></video>
      )}
      <div className="remove-wrapper">
        <button className="remove-btn" onClick={removeImage(fileIndex)}>
          ×
        </button>
      </div>
    </div>
  );
}

export default function UploadSection() {
  const uploadBtnRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const handleFileSelect = (event: ReactChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files!);
    files.forEach(file => {
      if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
        const reader = new FileReader();
        reader.onload = e => {
          const fileType = file.type.startsWith("image/") ? "image" : "video";
          setSelectedFiles([
            ...selectedFiles,
            {
              file: file,
              url: e.target!.result,
              type: fileType
            }
          ]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  return (
    <div className="col-md-3">
      <div className={styles.uploadSection}>
        <p className={styles.uploadText}>
          Kéo thả hoặc chọn ảnh, videos từ thư viện của bạn
        </p>
        <button
          type="button"
          className={`btn-product ${styles.btnProduct}`}
          onClick={() => {
            uploadBtnRef.current!.click();
          }}>
          Chọn ảnh và video
        </button>
        <input
          ref={uploadBtnRef}
          type="file"
          id="fileInput"
          multiple
          accept="image/*,video/*"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
      <div>
        <ul className={styles.customBullet} style={{ marginTop: 20 }}>
          <li>
            Để danh sách của bạn hiển thị và thu hút tốt hơn, hãy tải lên ít
            nhất 4 ảnh từ các góc khác nhau.
          </li>
          <li>
            Bạn có thể tải lên tối đa 10 ảnh và video. Các định dạng được hỗ
            trợ: JPG, PNG, GIF,MP4.
          </li>
        </ul>
      </div>
      {/* <!-- Image Preview --> */}
      <div className={styles.imagePreview} id="imagePreview">
        {/* <!-- Sample images will be added here --> */}
        {selectedFiles.map((file, index) => (
          <MediaElement
            key={`media-${index}`}
            fileIndex={index}
            fileType={file.type}
            src={file.url}
            setSelectedFile={setSelectedFiles}
          />
        ))}
      </div>
    </div>
  );
}
