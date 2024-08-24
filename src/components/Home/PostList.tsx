import Link from "next/link";
import styled from "styled-components";
import { Breakpoints, Fonts } from "../../styles/constants";
import { HomeProps } from "./Home";

const PostList = ({ postsMetadata }: HomeProps) => {
  return (
    <>
      <PostsH1>Posts</PostsH1>
      <PostUnorderedList>
        {postsMetadata.map((postMetadata) => (
          <PostListItem key={postMetadata.slug}>
            <Link href={`/posts/${postMetadata.slug}`}>
              <a>{postMetadata.title}</a>
            </Link>
            <PostDate>{postMetadata.date}</PostDate>
          </PostListItem>
        ))}
      </PostUnorderedList>
    </>
  );
};

const PostsH1 = styled.h1`
  text-align: center;
  padding-top: 40px;
`;

const PostUnorderedList = styled.ul`
  padding: 0;
`;

const PostListItem = styled.li`
  list-style: none;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 16px;

  &:last-child {
    padding-bottom: 0px;
  }

  & a {
    text-decoration: none;

    &:hover {
      text-decoration: revert;
    }
  }

  @media (min-width: ${Breakpoints.Laptop}) {
    font-size: 24px;
  }
`;

const PostDate = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
`;

export default PostList;
