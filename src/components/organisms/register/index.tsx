import { useState } from "react";
import CTAButton from "../../atoms/buttons/cta";
import TextButton from "../../atoms/buttons/text";
import Heading1 from "../../atoms/headings/heading1";
import Heading2 from "../../atoms/headings/heading2";
import PasswordInput from "../../atoms/inputs/password";
import TextInput from "../../atoms/inputs/text";
import styles from "./styles.module.css";

import { Column } from "../../atoms/layout";

const Register = () => {
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

  const handleLogin = () => {};

  return (
    <div className={styles.formCard}>
      <Heading1 upperCase>Sign Up</Heading1>
      <Heading2>Log into your account</Heading2>
      <div className={styles.form}>
        <Column>
          <TextInput
            name="name"
            label="Email or Username"
            onChange={handleFieldChange}
            placeholder="Enter your email or username"
            value={form.name}
          />
        </Column>
        <Column>
          <TextButton>Forgot password?</TextButton>
          <PasswordInput
            name="password"
            label="Password"
            onChange={handleFieldChange}
            placeholder="Enter your password"
            value={form.password}
          />
        </Column>
        <CTAButton onClick={handleLogin}>Login now</CTAButton>
      </div>
    </div>
  );
};

export default Register;
