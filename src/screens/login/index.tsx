import { useState } from "react";
import CTAButton from "../../components/atoms/buttons/cta";
import TextButton from "../../components/atoms/buttons/text";
import Heading1 from "../../components/atoms/headings/heading1";
import Heading2 from "../../components/atoms/headings/heading2";
import PasswordInput from "../../components/atoms/inputs/password";
import TextInput from "../../components/atoms/inputs/text";
import styles from "./styles.module.css";

import { Column } from "../../components/atoms/layout";

const Login = () => {
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
      <Heading1 upperCase>Welcome Back</Heading1>
      <Heading2>Log into your account</Heading2>
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
  );
};

export default Login;
