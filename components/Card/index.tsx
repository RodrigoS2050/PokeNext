import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pokemon } from "../../types/Pokemon";
import * as S from "./styles";

type Props = {
  pokemon: Pokemon;
};

const Card = ({ pokemon }: Props) => {
  return (
    <S.Card>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
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
