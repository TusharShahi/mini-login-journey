import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import IconButton from "../../atoms/buttons/icon";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

// Functional component with proper types
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div>
        <IconButton onClick={onClose}>x</IconButton>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
