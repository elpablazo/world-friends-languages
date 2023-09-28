import { Button } from "./ui/button";
import Image from "next/image";

const CardClasesPersonalizadas = () => {
  return (
    <div className="@container w-full">
      <div className="rounded flex flex-col @lg:flex-row gap-6 items-start justify-center w-full relative overflow-hidden h-auto bg-gradient-to-r from-primary-light to-primary-dark max-w-sm mx-auto @lg:max-w-none @lg:mx-0">
        <div className="p-6 flex flex-col gap-6 items-start justify-start self-stretch relative @lg:justify-center">
          <div className="flex flex-col gap-4 items-center justify-start self-stretch relative">
            <div className="font-bold text-2xl text-light text-left relative self-stretch">
              Clases en vivo
            </div>

            <div className="text-light text-left relative self-stretch">
              Toma clases desde tu computadora o celular en una videollamada con
              un profesor para resolver todas tus dudas.
            </div>
          </div>

          <Button variant="secondary" className="w-full">
            Empieza gratis
          </Button>
        </div>

        <div className="relative w-full h-auto aspect-video">
          <Image
            src="/images/demo/videollamadaConProfesora.jpg"
            alt="pexels-photo-by-g-l-i-k"
            width={329}
            height={329}
            className="w-full"
            blurDataURL="/images/demo/videollamadaConProfesora.jpg"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default CardClasesPersonalizadas;
