import styled from "styled-components";

export const GeneralContainer = styled.div`
  @media (max-width: 1100px) {
    padding: 10px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: #e33d33;
  text-align: center;
  font-size: 3rem;
  margin-right: 1rem;
`;

export const SpanNext = styled.span`
  color: #333;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
