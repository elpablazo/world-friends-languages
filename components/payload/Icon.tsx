import Image from "next/image";

const imageSrc = "/images/logos/WorldFriendsLanguagesReduced.svg";

const Icon = () => {
  return (
    <Image
      priority
      blurDataURL={imageSrc}
      src={imageSrc}
      alt="Logo World Friends Languages reducido"
      width={221}
      height={48}
      className="aspect-auto w-auto h-full max-h-full"
    />
  );
};

export default Icon;
