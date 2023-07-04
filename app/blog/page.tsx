import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import payloadApi from "@/lib/axios";
import { Post } from "@/payload-types";
import Link from "next/link";
const bannerSrc = "/images/demo/pexels-photo-346885.jpg";

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
    <div className="relative min-h-screen space-y-12">
      <Image
        src={bannerSrc}
        alt="Banner de los cursos | World Friend Languages"
        priority
        width={3840}
        height={762}
        className="aspect-[3840/762] w-full h-auto my-12"
      />
      <div className="relative !-mt-[10vh]">
        <div className="container mx-auto px-4 max-w-md">
          <div className="card flex flex-col gap-4 bg-white rounded p-4 border-gray-light border-2">
            <h1 className="text-2xl font-bold text-center">Nuestro blog</h1>
            <p className="text-center">
              Descubre los mejores tips para conocer el mundo entero sin
              preocuparte por el idioma.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row">
              <SearchBar />
              <Button className="w-full mx-auto lg:w-min">Buscar</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid gap-6">
        <h3 className="text-2xl font-bold text-center">Post recientes:</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.docs?.map((post, i: number) => (
            <div
              key={i}
              className="rounded border-solid border-gray-light border-2 py-6 px-4 flex flex-row gap-6 items-center justify-between w-full relative"
            >
              <Link href={`/blog/${post.id}`} className="text-primary">
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
