import { useEffect } from "react";
import styles from "./styles.module.css";

interface AsButtonProps {
  children: React.ReactNode;
  activate: boolean;
  onClick: () => void;
}

interface ButtonElement {
  removeEventListener(
    type: "keyup" | "keydown",
    listener: (event: KeyboardEvent) => void,
    options?: boolean | EventListenerOptions
  ): void;
  addEventListener(
    type: "keyup" | "keydown",
    listener: (event: KeyboardEvent) => void,
    options?: boolean | EventListenerOptions
  ): void;
}

const AsButton: React.FC<AsButtonProps> = ({
  children,
  activate,
  onClick: handleClick,
}) => {
  useEffect(() => {
    const handleButtonClick = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        handleClick();
      }
    };

    const button = document.querySelector(
      'div[role="button"]'
    ) as ButtonElement;

    button?.addEventListener("keydown", handleButtonClick);

    return () => {
      button?.removeEventListener("keydown", handleButtonClick);
    };
  }, [handleClick]);

  return (
    <>
      {activate ? (
        <div
          onClick={handleClick}
          className={styles.button}
          id="active"
          tabIndex={0}
          role="button"
        >
          {children}
        </div>
      ) : (
        { children }
      )}
    </>
  );
};

export default AsButton;
