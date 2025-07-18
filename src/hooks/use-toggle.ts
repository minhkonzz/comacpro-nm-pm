import { useState, useCallback, type Dispatch, type SetStateAction } from "@/utils/imports";

export default function useToggle(
  init?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [active, setActive] = useState(!!init);

  const toggle = useCallback(() => {
    setActive(active => !active)
  }, []);

  return [active, toggle, setActive];
}