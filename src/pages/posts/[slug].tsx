import Post, { PostProps } from "../../components/Post";
import { markdownToHtml } from "../../helpers/markdown.helpers";
import { getAllPosts, getPostData } from "../../helpers/posts.helpers";

const PostPage = ({ post }: PostProps) => {
  return <Post post={post} />;
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  const { metadata, mdContent } = getPostData(slug);

  const htmlContent = await markdownToHtml(mdContent);

  return {
    props: {
      post: { metadata, htmlContent },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
}

export default PostPage;
