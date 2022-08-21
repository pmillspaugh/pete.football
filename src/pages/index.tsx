import Head from "next/head";
import Home, { HomeProps } from "../components/Home/Home";
import { getAllPosts } from "../helpers/posts.helpers";

const HomePage = ({ postsMetadata }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Pete Milly ⋅ Football</title>
        <meta name="description" content="Fantasy football blog" />
      </Head>
      <Home postsMetadata={postsMetadata} />
    </>
  );
};

export async function getStaticProps() {
  const postsMetadata = getAllPosts();

  return {
    props: {
      postsMetadata,
    },
  };
}

export default HomePage;
