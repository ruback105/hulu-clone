import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import requests from "../utils/requests";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Hulu App</title>
      </Head>

      <Header />

      <Navbar />

      <Content results={props.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
