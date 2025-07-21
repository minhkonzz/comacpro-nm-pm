import { useEffect, useRef } from "@/utils/imports";
import { generateId } from "@/utils/helpers";

type ClickOutsideHandler = {
  id: string;
  refs: (HTMLElement | null)[];
  handler: () => void;
};

const clickOutsideHandlers: Map<string, ClickOutsideHandler> = new Map(); // quản lý refs và handlers toàn cục

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: () => void
) => {
  const refs = useRef<(T | null)[]>([]);
  const handlerRef = useRef(handler);
  const handlerId = useRef(generateId());

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const eventType = isTouchDevice && "touchstart" || "mousedown";
    const handlerEntry: ClickOutsideHandler = {
      id: handlerId.current,
      refs: refs.current,
      handler: handlerRef.current,
    };
    clickOutsideHandlers.set(handlerId.current, handlerEntry);

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const allRefs = Array.from(clickOutsideHandlers.values()).flatMap(
        ({ refs }) => refs
      );
      const isInsideAnyRef = allRefs.some((ref) => ref && ref.contains(target));
      if (!isInsideAnyRef) {
        clickOutsideHandlers.forEach(({ handler }) => handler());
      }
    };

    if (clickOutsideHandlers.size == 1) {
      document.addEventListener(eventType, handleClickOutside);
    }

    return () => {
      clickOutsideHandlers.delete(handlerId.current);
      if (clickOutsideHandlers.size == 0) {
        document.removeEventListener(eventType, handleClickOutside);
      }
    };
  }, []);

  const addRef = (ref: T | null) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  return addRef;
};

export default useClickOutside;
