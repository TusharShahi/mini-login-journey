import styles from "./styles.module.css";

const Heading1: React.FC<
  React.HTMLProps<HTMLHeadingElement> & {
    upperCase?: boolean;
  }
> = (props) => {
  const { children, upperCase } = props;

  const className = `${styles.heading} ${upperCase ? styles.upperCase : ""}`;
  return (
    <h1 {...props} className={className}>
      {children}
    </h1>
  );
};

export default Heading1;
