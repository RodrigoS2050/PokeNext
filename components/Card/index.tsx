import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Pokemon } from "../../types/Pokemon";
import * as S from "./styles";
import axios from "axios";

type Props = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: Props) => {
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
    <S.Card>
      <Image
        src={data.sprites.front_default}
        width={220}
        height={200}
        alt={pokemon.name}
      />
      <S.PokemonId>#{pokemon.id}</S.PokemonId>
      <S.PokemonName>{pokemon.name}</S.PokemonName>
      <Link href={`/pokemon/${pokemon.id}`}>
        <S.PokemonDetails>Detalhes</S.PokemonDetails>
      </Link>
    </S.Card>
  );
};

export default Card;
