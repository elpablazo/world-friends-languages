import Image from "next/image";
import BanderaThumbnail from "./BanderaThumbnail";

export interface ICardCursoLPProps {
  titulo: string;
  children: React.ReactNode;
  imagenUrl: string;
}

const CardCursoLP = ({ titulo, children, imagenUrl }: ICardCursoLPProps) => {
  return (
    <div className="rounded border-solid border-gray-light border-2 py-6 px-4 flex flex-row gap-6 items-center justify-between w-full relative">
      <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
        <p className="text-primary font-bold text-left text-lg">{titulo}</p>

        <div className="text-dark text-left">{children}</div>
      </div>
      <BanderaThumbnail imagenUrl={imagenUrl} pais={titulo} />
    </div>
  );
};

export default CardCursoLP;
