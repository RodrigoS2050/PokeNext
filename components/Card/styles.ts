import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  width: 33%;
  border-radius: 1rem;
  border: 2px solid #e33d33;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: #333;
  color: #fff;
  @media (max-width: 768px) {
    width: 48%;
  }
`;

export const PokemonId = styled.p`
  margin: 1rem 0;
  background-color: #e33d33;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const PokemonDetails = styled.a`
  text-decoration: none;
  background-color: #fff;
  color: #222;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #e33d33;
    color: #fff;
  }
`;
