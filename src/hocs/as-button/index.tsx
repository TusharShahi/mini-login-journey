import styles from "./styles.module.css";

interface AsButtonProps {
  children: React.ReactNode;
  activate: boolean;
}

const AsButton: React.FC<AsButtonProps> = ({ children, activate }) => {
  return (
    <>
      {activate ? (
        <div className={styles.button} id="active" tabIndex={0} role="button">
          {children}
        </div>
      ) : (
        { children }
      )}
    </>
  );
};

export default AsButton;
