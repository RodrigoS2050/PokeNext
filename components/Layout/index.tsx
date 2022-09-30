import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
