import { useState } from "react";
import CTAButton from "../../components/buttons/cta";
import TextButton from "../../components/buttons/text";
import Heading1 from "../../components/headings/heading1";
import Heading2 from "../../components/headings/heading2";
import PasswordInput from "../../components/inputs/password";
import TextInput from "../../components/inputs/text";
import styles from "./styles.module.css";

import { Column } from "../../components/layout";

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
