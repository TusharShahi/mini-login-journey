import { useState } from "react";
import CTAButton from "../../atoms/buttons/cta";
import TextButton from "../../atoms/buttons/text";
import Heading1 from "../../atoms/headings/heading1";
import Heading2 from "../../atoms/headings/heading2";
import TextInput from "../../atoms/inputs/text";
import styles from "./styles.module.css";

import { Column } from "../../atoms/layout";

const Login: React.FC<{
  onRegisterClick: () => void;
  onLogin: () => void;
}> = ({ onRegisterClick: handleRegisterClick, onLogin: handleLogin }) => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.formCard}>
      <Heading1 upperCase>Welcome Back</Heading1>
      <Heading2>Log into your account</Heading2>
      <div className={styles.form}>
        <Column>
          <TextInput
            name="name"
            type="text"
            label="Email or Username"
            onChange={handleFieldChange}
            placeholder="Enter your email or username"
            value={form.name}
            autoFocus
          />
        </Column>
        <Column>
          <TextButton>Forgot password?</TextButton>
          <TextInput
            name="password"
            type="password"
            label="Password"
            onChange={handleFieldChange}
            placeholder="Enter your password"
            value={form.password}
          />
        </Column>
        <CTAButton onClick={handleLogin}>Login now</CTAButton>
        <div className={styles.footerRow}>
          <span>Not registered yet?</span>
          <TextButton onClick={handleRegisterClick}>Register →</TextButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
