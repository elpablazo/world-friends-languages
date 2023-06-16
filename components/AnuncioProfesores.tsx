import Image from "next/image";
import { Button } from "./ui/button";

type AnuncioProfesoresProps = {
  title: string;
  description: string;
};

const AnuncioProfesores = ({ title, description }: AnuncioProfesoresProps) => {
  return (
    <div className="bg-gradient-to-tr from-secondary/20 to-secondary/0 rounded relative flex gap-2 justify-between overflow-hidden">
      <div className="flex flex-col gap-6 items-start justify-between w-full p-6">
        <div className="flex flex-col gap-2 relative w-full">
          <div className="font-bold text-2xl">{title}</div>

          <div className="text-lg">{description}</div>
        </div>

        <Button>Regístrate</Button>
      </div>

      <div className="flex flex-row gap-6 items-center justify-start relative aspect-cover">
        <Image
          src="/images/demo/profesor.png"
          alt="Profesor | World Friends Languages"
          width={263}
          height={260}
          className="min-w-full min-h-full object-cover aspect-auto"
        />
      </div>
    </div>
  );
};

export default AnuncioProfesores;
