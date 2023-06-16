import Image from "next/image";
import AnuncioProfesores from "./AnuncioProfesores";

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

      <div
        className="rounded-[32px_32px_32px_0px] flex flex-col gap-6 items-start justify-center self-stretch w-[329px] relative overflow-hidden"
        style={{
          background:
            "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
        }}
      >
        <div className="p-6 flex flex-col gap-6 items-start justify-start self-stretch relative">
          <div className="flex flex-col gap-4 items-center justify-start self-stretch relative">
            <div className="font-bold text-2xl text-light text-left relative self-stretch">
              Clases en vivo
            </div>

            <div className="text-light text-left relative self-stretch">
              Toma clases desde tu computadora o celular en una videollamada con
              un profesor para resolver todas tus dudas.
            </div>
          </div>

          <div className="bg-secondary rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center self-stretch relative">
            <div
              className="text-light text-center relative"
              style={{
                font: "var(--botones, 700 20px 'Ubuntu', sans-serif)",
              }}
            >
              Empieza gratis
            </div>
          </div>
        </div>

        <Image
          className="self-stretch flex-1 relative"
          src="/images/demo/videollamadaConProfesora.jpg"
          alt="pexels-photo-by-g-l-i-k"
          width={329}
          height={329}
        />
      </div>
    </div>
  );
};

export default GridAnunciosLP;
