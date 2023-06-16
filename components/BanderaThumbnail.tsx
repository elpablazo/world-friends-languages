import Image from "next/image";

interface Props {
  imagenUrl: string;
  pais: string;
}

const BanderaThumbnail: React.FC<Props> = ({ imagenUrl, pais }) => {
  const titulo = pais;

  return (
    <Image
      width={104}
      height={60}
      className="rounded border-solid border-black/5 border"
      src={imagenUrl}
      blurDataURL={imagenUrl}
      placeholder="blur"
      alt={`Imagen de ${titulo} | World Friends Languages`}
    />
  );
};

export default BanderaThumbnail;
