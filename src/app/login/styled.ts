import { Card, Input } from "antd";
import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: radial-gradient(
    circle at 20% 20%,
    #4c1d95 0%,
    #1e1b4b 35%,
    #0f172a 100%
  );
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

// Shapes com blur para design bonito
export const Decoration1 = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: #7c3aed;
  filter: blur(150px);
  opacity: 0.35;
  top: -120px;
  left: -90px;
  border-radius: 50%;
`;

export const Decoration2 = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  background: #2563eb;
  filter: blur(170px);
  opacity: 0.32;
  bottom: -100px;
  right: -80px;
  border-radius: 50%;
`;

export const Decoration3 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: #10b981;
  filter: blur(180px);
  opacity: 0.25;
  top: 40%;
  left: 60%;
  border-radius: 50%;
`;

export const LoginCard = styled(Card)`
  width: 100%;
  max-width: 380px;

  background: rgba(255, 255, 255, 0.12) !important;
  backdrop-filter: blur(18px);
  border-radius: 16px !important;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 20px;
`;

export const StyledInput = styled(Input)`
  background: rgba(255, 255, 255, 0.15) !important;
  color: white !important;
  border: none !important;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6) !important;
  }
`;

export const StyledPassword = styled(Input.Password)`
  background: rgba(255, 255, 255, 0.15) !important;
  color: white !important;
  border: none !important;

  input {
    color: white !important;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6) !important;
  }
`;

export const Label = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
`;
