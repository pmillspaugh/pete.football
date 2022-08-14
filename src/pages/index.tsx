import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/library/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pete Milly Football</title>
        <meta name="description" content="Fantasy football blog" />
        {/* TODO: create custom favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ul>
          <li>
            <Link href="/posts/the-case-for-a-salary-cap-draft" passHref>
              <a>The case for a salary cap draft</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
