"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Form, Button, Typography,  message } from "antd";
import {
  Background,
  Decoration1,
  Decoration2,
  Decoration3,
  LoginCard,
  StyledInput,
  StyledPassword,
  Label,
} from "./styled";

const { Title } = Typography;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(values: any) {
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    } as any);

    setLoading(false);

    if (res?.error) {
      message.error(res.error);
      return;
    }

    router.push("/");
  }

  return (
    <Background>
      <Decoration1 />
      <Decoration2 />
      <Decoration3 />

      <LoginCard>
        <Title
          level={3}
          style={{ textAlign: "center", marginBottom: 24, color: "#fff" }}
        >
          Acessar Sistema
        </Title>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label={<Label>Email</Label>}
            name="email"
            rules={[{ required: true, message: "Informe o e-mail" }]}
          >
            <StyledInput type="email" placeholder="Digite seu e-mail" />
          </Form.Item>

          <Form.Item
            label={<Label>Senha</Label>}
            name="password"
            rules={[{ required: true, message: "Informe a senha" }]}
          >
            <StyledPassword placeholder="Digite sua senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </LoginCard>
    </Background>
  );
}

// ==================== STYLED COMPONENTS ====================

// Fundo real cobrindo a tela inteira
