import Image from "next/image";
import AnuncioProfesores from "./AnuncioProfesores";
import { Button } from "./ui/button";
import CardClasesPersonalizadas from "./CardClasesPersonalizadas";

const GridAnunciosLP = () => {
  return (
    <div className="grid gap-6 lg:grid-flow-col">
      <div className="grid gap-6">
        <AnuncioProfesores
          title="¿Eres profesor de idiomas?"
          description="Si estás buscando llegar a más estudiantes en línea, ¡súmate a nuestra equipo, es gratis!"
        />

        <div className="bg-light rounded border-2 border-gray-light flex flex-row gap-6 items-center relative overflow-hidden w-full">
          <div className="p-6 flex flex-col gap-6 relative">
            <div className="flex flex-col gap-2 items-start justify-start max-w-md">
              <p className="font-bold text-2xl">¡Contáctanos!</p>

              <p className="text-lg relative w-full">
                Si deseas recibir más informes acerca de algún curso o clase
                particular, llámanos al:
              </p>
            </div>
            <a
              href="tel:5568004685"
              className="text-2xl block text-primary font-bold hover:underline"
            >
              55 6800 4685
            </a>
          </div>
        </div>
      </div>

      <CardClasesPersonalizadas />
    </div>
  );
};

export default GridAnunciosLP;
