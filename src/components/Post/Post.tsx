import styled from "styled-components";
import { PostMetadata } from "../../interfaces/posts";
import { Fonts } from "../../styles/constants";

export type PostProps = {
  post: {
    metadata: PostMetadata;
    htmlContent: string;
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <main>
        <PostDate>{post.metadata.date}</PostDate>
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
      </main>
    </>
  );
};

const PostDate = styled.div`
  font-family: ${Fonts.Jost};
  font-style: italic;
  padding-bottom: 12px;
`;

export default Post;
