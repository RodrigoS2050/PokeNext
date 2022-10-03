import React, { useState, useEffect } from "react";
import { Pokemon } from "../../types/Pokemon";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps } from "next";
import Image from "next/image";
import * as S from "../../styles/pokemon";
import Link from "next/link";

type Props = {
  pokemon: Pokemon;
};
export async function getStaticPaths() {
  const maxPokemons = 150;
  const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
  });
  const response = await http.get(`/?limit=${maxPokemons}`);
  const data: Pokemon[] = response.data.results;
  const paths = data.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
interface IParams extends ParsedUrlQuery {
  pokemonId: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemonId } = context.params as IParams;
  const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
  });
  const response = await http.get(`${pokemonId}`);
  const data: Pokemon[] = response.data;
  return {
    props: {
      pokemon: data,
    },
  };
};

const Pokemon = ({ pokemon }: Props) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getImages();
  }, []);
  async function getImages() {
    const http = axios.create({
      baseURL: "https://pokeapi.co/api/v2/pokemon/",
    });
    const response = await http.get(pokemon.name);
    setData(response.data);
  }
  if (!data) return null;
  return (
    <S.PokemonContainer>
      <Link href="/">
        <S.BackButton>X</S.BackButton>
      </Link>
      <S.PokemonTitle>{pokemon.name}</S.PokemonTitle>
      <Image
        src={data.sprites.front_default}
        width={250}
        height={250}
        alt={pokemon.name}
      />
      <div>
        <S.InfoTitles>Número: </S.InfoTitles>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <S.InfoTitles>Tipo:</S.InfoTitles>
        <S.TypesContainer>
          {pokemon.types.map((item, index) => (
            <S.PokemonType className={`type_${item.type.name}`} key={index}>
              {item.type.name}
            </S.PokemonType>
          ))}
        </S.TypesContainer>
      </div>
      <S.InfosContainer>
        <S.PokemonHeight>
          <h4>Altura: </h4>
          <p>{pokemon.height * 10} cm</p>
        </S.PokemonHeight>
        <S.PokemonWeight>
          <h4>Peso: </h4>
          <p>{pokemon.weight / 10} kg</p>
        </S.PokemonWeight>
      </S.InfosContainer>
    </S.PokemonContainer>
  );
};

export default Pokemon;
