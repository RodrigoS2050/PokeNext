import React from "react";
import axios from "axios";
import Image from "next/image";
import pokebalImg from "../public/images/pokeball.png";
import * as S from "../styles/home";
import { Pokemon } from "../types/Pokemon";
import Card from "../components/Card";

type Props = {
  pokemons: Pokemon[];
};

export async function getStaticProps() {
  const maxPokemons = 150;
  const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
  });
  const response = await http.get(`/?limit=${maxPokemons}`);
  const data: Pokemon[] = response.data.results;
  // Create Pokemon Index - Pokedex Number
  data.forEach((item, index) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data,
    },
  };
}

const Home = ({ pokemons }: Props) => {
  return (
    <S.GeneralContainer>
      <S.TitleContainer>
        <S.Title>
          Poke<S.SpanNext>Next</S.SpanNext>
        </S.Title>
        <Image src={pokebalImg} width={50} height={50} alt="PokeNext" />
      </S.TitleContainer>
      <S.PokemonContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </S.PokemonContainer>
    </S.GeneralContainer>
  );
};

export default Home;
