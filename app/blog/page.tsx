import payloadApi from "@/lib/axios";
import { Post } from "@/payload-types";
import Link from "next/link";

// Obtenemos los posts
const getPosts = async () => {
  const posts = await payloadApi.get(`/posts`);

  if (posts.status !== 200) {
    throw new Error(posts.statusText);
  }

  return posts.data;
};

export default async function Page({}) {
  const posts: {
    docs: Post[];
  } = await getPosts();

  return (
    <div className="grid grid-cols-2 mt-24">
      {posts.docs?.map((post, i: number) => (
        <div key={i}>
          <Link href={`/blog/${post.id}`} className="text-primary">
            {post.title} - {post.id}
          </Link>
        </div>
      ))}
    </div>
  );
}
