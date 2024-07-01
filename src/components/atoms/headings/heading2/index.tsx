import styles from "./styles.module.css";

const Heading2: React.FC<
  React.HTMLProps<HTMLHeadingElement> & {
    variant?: "content";
  }
> = (props) => {
  const { variant = "", ...otherProps } = props;

  const className = `${styles.heading} ${styles[variant]}`;

  return <h2 {...otherProps} className={className} />;
};

export default Heading2;
