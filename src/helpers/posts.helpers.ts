import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const POSTS_DIR = join(process.cwd(), "src/_posts");

export const getPostData = (slug: string) => {
  const filePath = join(POSTS_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content: mdContent } = matter(fileContents);

  const metadata = { ...data, slug };

  return { metadata, mdContent };
};

// TODO: sort posts by date (desc) upon publishing a second post
export const getAllPosts = () => {
  const postSlugs = fs.readdirSync(POSTS_DIR);

  return postSlugs.map((slugFilename) => {
    const slug = slugFilename.replace(/\.md$/, "");
    const { metadata: postMetadata } = getPostData(slug);
    return { ...postMetadata, slug };
  });
};
