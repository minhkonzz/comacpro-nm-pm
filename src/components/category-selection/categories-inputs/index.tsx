import { TextInput, SelectInput } from "@/components/shared";
import { useCategorySelection } from "@/contexts/category-selection";
import deviceModels from "@/mock-data/device-models.json";

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
        wrapperClassName="mt-2"
        id="device-model"
        label="Chọn model thiết bị"
        placeholder="Chọn model thiết bị"
        options={deviceModels}
      />
    )
  );
}
