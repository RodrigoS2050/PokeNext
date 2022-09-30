import styled from "styled-components";

export const PokemonContainer = styled.div`
  text-align: center;
  background-color: #333;
  width: fit-content;
  margin: auto;
  padding: 40px 80px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  position: relative;
  @media (max-width: 400px) {
    padding: 50px 50px;
  }
`;

export const BackButton = styled.a`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 1.5rem;
  padding: 0.6rem 0.8rem;
  background-color: #e33d33;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  display: block;
  @media (max-width: 400px) {
    margin-bottom: 20px;
  }
`;

export const PokemonTitle = styled.div`
  font-size: 2.5rem;
  text-transform: capitalize;
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  margin: 1rem auto;
  width: fit-content;
  border-radius: 5px;
`;

export const PokemonType = styled.span`
  padding: 0.7rem 1.1rem;
  color: #fff;
  margin-right: 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const InfoTitles = styled.h3`
  margin: 0.6rem auto;
  font-size: 1.2rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const PokemonHeight = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;
`;

export const PokemonWeight = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
