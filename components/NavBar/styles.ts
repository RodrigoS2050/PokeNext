import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  margin-bottom: 2rem;
  background-color: #333;
  color: #fff;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 0.5rem;
`;

export const LinkContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const LinkItens = styled.li`
  margin-right: 1.3rem;
  @media (max-width: 380px) {
    margin-right: 0.2rem;
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 5px;
  transition: 0.4s;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border-color: #fff;
  }
`;
