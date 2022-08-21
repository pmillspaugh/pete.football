import Link from "next/link";
import styled from "styled-components";
import { PostMetadata } from "../../interfaces/posts";
import PostList from "./PostList";

export type HomeProps = {
  postsMetadata: PostMetadata[];
};

const Home = ({ postsMetadata }: HomeProps) => {
  return (
    <main>
      <CenteredH1>What&apos;s this?</CenteredH1>
      <p>
        In early August, I wrote a pitch to my fantasy football league making{" "}
        <Link href="/posts/the-case-for-a-salary-cap-draft">
          <a target="_blank">
            the case to switch to a salary cap draft format.
          </a>
        </Link>{" "}
        A few people thought that write-up was helpful, so I thought it would be
        fun to create a space to post it in public.
      </p>
      <p>
        I hope to write more about fantasy football or other football-related
        topics here in the future. If you have a subject in mind,{" "}
        <a
          href="https://twitter.com/pete_millspaugh"
          target="_blank"
          rel="noreferrer"
        >
          DM me on Twitter.
        </a>
      </p>

      <PostList postsMetadata={postsMetadata} />
    </main>
  );
};

const CenteredH1 = styled.h1`
  text-align: center;
`;

export default Home;
