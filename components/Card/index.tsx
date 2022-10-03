import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Pokemon } from "../../types/Pokemon";
import * as S from "./styles";

type Props = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: Props) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getImages();
  }, []);
  async function getImages() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    );
    const json = await response.json();
    setData(json);
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
