import styles from "./styles.module.css";

const Heading2: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => {
  const { children } = props;

  return (
    <h2 {...props} className={styles.heading}>
      {children}
    </h2>
  );
};

export default Heading2;
