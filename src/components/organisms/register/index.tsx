import { useState } from "react";
import CTAButton from "../../atoms/buttons/cta";
import Heading1 from "../../atoms/headings/heading1";
import Heading2 from "../../atoms/headings/heading2";
import TextInput from "../../atoms/inputs/text";
import styles from "./styles.module.css";

import { Column } from "../../atoms/layout";
import TextButton from "../../atoms/buttons/text";

const Register: React.FC<{
  onLoginClick: () => void;
}> = ({ onLoginClick: handleLoginClick }) => {
  const [form, setForm] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {};

  return (
    <div className={styles.formCard}>
      <Heading1 upperCase>Sign Up</Heading1>
      <Heading2>Create an account to continue</Heading2>
      <div className={styles.form}>
        <Column>
          <TextInput
            type="text"
            name="email"
            label="Email"
            onChange={handleFieldChange}
            placeholder="Enter your email"
            value={form.email}
            autoFocus
          />
        </Column>
        <Column>
          <TextInput
            type="text"
            name="userName"
            label="Username"
            onChange={handleFieldChange}
            placeholder="Choose a preferred username"
            value={form.userName}
          />
        </Column>
        <Column>
          <TextInput
            name="password"
            type="password"
            label="Password"
            onChange={handleFieldChange}
            placeholder="Choose a strong password"
            value={form.password}
          />
        </Column>
        <CTAButton onClick={handleRegister}>Continue</CTAButton>
        <div className={styles.footerRow}>
          <span>Already have an account?</span>
          <TextButton onClick={handleLoginClick}>Login →</TextButton>
        </div>
      </div>
    </div>
  );
};

export default Register;
