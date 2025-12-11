"use client";

import { Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./globals.css";

const { Header, Sider, Content } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="pt-BR">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          {/* SIDEBAR */}
          <Sider breakpoint="lg" collapsedWidth="0">
            <div
              style={{
                height: 50,
                margin: 16,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 8,
                textAlign: "center",
                lineHeight: "50px",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              CRM
            </div>

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <DashboardOutlined />,
                  label: "Dashboard",
                },
                {
                  key: "2",
                  icon: <UserOutlined />,
                  label: "Clientes",
                },
                {
                  key: "3",
                  icon: <TeamOutlined />,
                  label: "Vendedores",
                },
                {
                  key: "4",
                  icon: <LogoutOutlined />,
                  label: "Sair",
                },
              ]}
            />
          </Sider>

          {/* CONTEÚDO */}
          <Layout>
            <Header
              style={{
                padding: "0 24px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 500 ,color: "#FFF"}}>Bem-vindo, Mateus</span>
            </Header>

            <Content
              style={{
                margin: "12px 8px",
                padding: 12,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
