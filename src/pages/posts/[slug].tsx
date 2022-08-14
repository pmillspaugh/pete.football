import Header from "../../components/library/Header";

type PostProps = {
  post: {
    slug: string;
  };
};

const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <main>
        {post.slug}
        {/* TODO: render post dynamically */}
      </main>
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { slug } = params;

  return {
    props: {
      post: { slug },
    },
  };
}

export async function getStaticPaths() {
  // TODO: leverage util to pull all dynamic routes from md posts
  return {
    paths: [{ params: { slug: "the-case-for-a-salary-cap-draft" } }],
    fallback: false,
  };
}

export default Post;
