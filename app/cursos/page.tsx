import Image from "next/image";
const bannerSrc = "/images/demo/bannerCursos.jpg";

const Page = (): JSX.Element => {
  return (
    <div className="relative min-h-screen space-y-6">
      <Image
        src={bannerSrc}
        alt="Banner de los cursos | World Friend Languages"
        priority
        width={3840}
        height={762}
        className="aspect-[3840/762] w-full h-auto my-12"
      />
    </div>
  );
};

export default Page;
