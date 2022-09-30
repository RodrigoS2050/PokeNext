import Image from "next/image";
import React from "react";
import charizardImg from "../public/images/charizard.png";
import * as S from "../styles/about";

const About = () => {
  return (
    <S.Container>
      <S.Title>Sobre o projeto</S.Title>
      <S.Paragraph>
        Projeto desenvolvido para treinar e me aprimorar com o consumo de APIs e
        também por que eu gosto muito da franquia Pokémon. Foram utilizadas as
        seguintes tecnologias:{" "}
        <S.Technologies>
          Next, TypeScript, Styled Components, Axios
        </S.Technologies>
        .
      </S.Paragraph>
      <Image src={charizardImg} width={300} height={300} alt="Charizard" />
    </S.Container>
  );
};

export default About;
