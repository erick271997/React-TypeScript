import type { NextPage } from "next";
import Head from "next/head";
import RandomFox from "./components/RandomFox";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hey Platzi 😎!</h1>
      <p>Esta es la parte del cuerpo de la pagina web</p>
      <RandomFox/>
      
      </main>

      <footer>Fin</footer>
    </div>
  );
};

export default Home;