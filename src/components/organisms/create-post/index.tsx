import CTAButton from "../../atoms/buttons/cta";
import Heading2 from "../../atoms/headings/heading2";
import TextBox from "../../atoms/textarea";
import styles from "./styles.module.css";

const PostIcon = () => {
  return <span>💬</span>;
};

const CreatePost: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Heading2>Create post</Heading2>
      <TextBox
        icon={<PostIcon />}
        placeholder="How are you feeling today?"
      ></TextBox>

      <CTAButton>Post</CTAButton>
    </div>
  );
};

export default CreatePost;
