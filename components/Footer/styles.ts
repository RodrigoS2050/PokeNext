import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  height: 100px;
  margin-top: 2rem;
  border-top: 3px solid #111;
  color: #fff;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SpanFooter = styled.span`
  font-weight: bold;
`;
