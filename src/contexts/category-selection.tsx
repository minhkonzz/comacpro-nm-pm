import {
  useState,
  useContext,
  createContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction
} from "@/utils/imports";

import { useToggle } from "@/hooks";

type CategorySelectionContextType = {
  selectedCategory: string | undefined;
  setSelectedCategory: Dispatch<SetStateAction<string | undefined>>;
  showDropdown: boolean;
  toggleDropdown: () => void,
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
};

const CategorySelectionContext =
  createContext<CategorySelectionContextType | null>(null);

export default function CategorySelectionProvider({
  children
}: {
  children: ReactNode;
}) {
  const [showDropdown, toggleDropdown, setShowDropdown] = useToggle(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  return (
    <CategorySelectionContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        showDropdown,
        toggleDropdown,
        setShowDropdown
      }}>
      {children}
    </CategorySelectionContext.Provider>
  );
}

export const useCategorySelection = () => {
  const context = useContext(CategorySelectionContext);
  if (!context) {
    throw new Error(
      "useCategorySelection must be used within a CategorySelectionProvider"
    );
  }
  return context;
};
