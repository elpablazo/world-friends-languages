import Image from "next/image";

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
      <Image
        width={104}
        height={60}
        className="rounded border-solid border-black/5 border"
        src={imagenUrl}
        alt={`Imagen de ${titulo} | World Friends Languages`}
      />
    </div>
  );
};

export default CardCursoLP;
