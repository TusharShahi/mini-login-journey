interface TextBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: JSX.Element;
}

// Functional component with proper types
const TextBox: React.FC<TextBoxProps> = (props) => {
  const { icon } = props;
  return (
    <div>
      {icon}
      <textarea {...props} />
    </div>
  );
};

export default TextBox;
