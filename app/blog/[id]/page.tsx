// Página que muestra el detalle de un post

import payloadApi from "@/lib/axios";
import { DateTime } from "luxon";
import { slateToHtml } from "slate-serializers";
import Icon from "@/components/Icon";
import { Post, Tag } from "@/payload-types";

// Obtenemos la información de un post
const getPost = async (id: string) => {
  console.log("obtendremos data del id", id);
  const post = await payloadApi.get(`/posts/${id}`);

  if (post.status !== 200) {
    throw new Error(post.statusText);
  }

  return post.data;
};

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const post: Post = await getPost(id);

  if (!post || !post.id) {
    return <div>Post no encontrado</div>;
  }

  const publishDate = DateTime.fromISO(post?.publishDate as any).toLocaleString(
    DateTime.DATE_FULL
  );

  const content = slateToHtml(JSON.parse(post.content as any));

  return (
    // Two columns: left one with the course image, right one with the course info
    <div className="container font-normal">
      <div className="flex flex-col gap-4">
        {/* POST TITLE */}
        <h1 className="text-4xl font-bold">{post.title}</h1>

        {/* POST TAGS */}
        <div className="flex gap-2">
          {post?.tags?.map((tag, i: number) => (
            <div className="rounded-full px-4 py-2 bg-primary/10" key={i}>
              <p className="text-primary">
                {typeof tag === "string" ? tag : tag?.title}
              </p>
            </div>
          ))}
        </div>

        {/*  POST PUBLISH DATE */}
        <div className="flex flex-col">
          <p>{publishDate}</p>
        </div>

        {/* POST CONTENT */}
        <div className="prose space-y-4">{content}</div>
      </div>
    </div>
  );
}
