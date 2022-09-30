import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import charizardImg from "../../public/images/charizard.png";
import * as S from "./styles";

const NavBar = () => {
  const router = useRouter();
  return (
    <S.NavBar>
      <S.ContainerLeft>
        <Image src={charizardImg} width={30} height={30} alt="PokeNext" />
        <S.Title>PokeNext</S.Title>
      </S.ContainerLeft>
      <S.LinkContainer>
        <S.LinkItens>
          <Link href="/">
            <S.Link
              style={router.pathname === "/" ? { borderColor: "#fff" } : {}}
            >
              Home
            </S.Link>
          </Link>
        </S.LinkItens>
        <S.LinkItens>
          <Link href="/about">
            <S.Link
              style={
                router.pathname === "/about" ? { borderColor: "#fff" } : {}
              }
            >
              Sobre
            </S.Link>
          </Link>
        </S.LinkItens>
      </S.LinkContainer>
    </S.NavBar>
  );
};

export default NavBar;
