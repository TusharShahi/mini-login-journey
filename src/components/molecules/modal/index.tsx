import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import IconButton from "../../atoms/buttons/icon";
import useFocusTrap from "../../../hooks/use-focus-trap";
import { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  controlFirstFocus?: boolean;
  onClose: () => void;
}

// Functional component with proper types
const Modal: React.FC<ModalProps> = ({
  children,
  controlFirstFocus = false,
  onClose,
}) => {
  const modalRef = useFocusTrap(true, controlFirstFocus);

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
};

export default Modal;
