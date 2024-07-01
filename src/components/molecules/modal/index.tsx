import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import IconButton from "../../atoms/buttons/icon";
import useFocusTrap from "../../../hooks/use-focus-trap";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  controlFirstFocus?: boolean;
  onClose: () => void;
}

export type ModalHandle = {
  realignFocus: () => void;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, controlFirstFocus = false, onClose }, ref) => {
    const [dummyFocusCount, setDummyFocusCount] = useState(1);

    const modalRef = useFocusTrap(dummyFocusCount, controlFirstFocus);

    const realignFocus = () => {
      setDummyFocusCount((prev) => prev + 1);
    };

    useImperativeHandle(ref, () => ({
      realignFocus,
    }));

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.addEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <div aria-modal="true" className={styles.modal} ref={modalRef}>
        <div>
          <IconButton onClick={onClose}>x</IconButton>
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

export default Modal;
