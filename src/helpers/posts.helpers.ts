import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { PostMetadata } from "../interfaces/posts";

const POSTS_DIR = join(process.cwd(), "src/_posts");

export const getPostData = (slug: string) => {
  const filePath = join(POSTS_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content: mdContent } = matter(fileContents);

  const { title, date } = data;
  const metadata: PostMetadata = { title, date, slug };

  return { metadata, mdContent };
};

export const getAllPosts = () => {
  const postSlugs = fs.readdirSync(POSTS_DIR);

  const allPosts = postSlugs
    .map((slugFilename) => {
      const slug = slugFilename.replace(/\.md$/, "");
      const { metadata: postMetadata } = getPostData(slug);
      return { ...postMetadata, slug };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPosts;
};
