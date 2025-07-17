import TextInput from "../shared/text-input";
import SelectInput from "../shared/select-input";
import deviceModels from "../../device-models.json";
import { useCategorySelection } from "../../category-selection-context";


export default function CategoryInputs() {
  const { selectedCategory } = useCategorySelection();
  return (
    (selectedCategory == "" && (
      <>
        <TextInput
          className="mt-2"
          label="Tên sản phẩm"
          placeholder="Nhập tên sản phẩm"
          id="product-name"
        />
        <TextInput
          className="mt-2"
          label="Chọn model thiết bị"
          placeholder="Nhập model thiết bị"
          id="device-model"
        />
      </>
    )) || (
      <SelectInput
        className="mt-2"
        id="device-model"
        label="Chọn model thiết bị"
        options={deviceModels}
      />
    )
  );
}
