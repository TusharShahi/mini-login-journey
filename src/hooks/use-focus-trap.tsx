import { useEffect, useRef } from "react";

const useFocusTrap = (dummyRealign: number, controlFirstFocus: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (
          event.shiftKey &&
          document.activeElement === firstFocusableElement
        ) {
          event.preventDefault();
          lastFocusableElement?.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastFocusableElement
        ) {
          event.preventDefault();
          firstFocusableElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);

    if (!controlFirstFocus) firstFocusableElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleFocusTrap);
    };
  }, [dummyRealign, controlFirstFocus]);

  return containerRef;
};

export default useFocusTrap;
