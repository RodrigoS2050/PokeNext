import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
export const Paragraph = styled.p`
  max-width: 500px;
  margin: 0 auto 1.5rem;
  line-height: 1.4;
  @media (max-width: 520px) {
    padding: 10px;
  }
`;
export const Technologies = styled.span`
  font-weight: bold;
`;
