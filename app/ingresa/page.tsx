import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = (): JSX.Element => {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        {/* Left col */}
        <div className="relative aspect-video w-full h-auto mx-auto max-w-xl mt-24">
          {/* Rectángulo anaranjado */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-secondary/30 to-secondary/0 rounded-12vmin z-[-1]" />
          <Image
            src="/images/demo/chica-login.png"
            alt="Ingresa"
            width={528}
            height={624}
            quality={100}
            blurDataURL="/images/demo/chica-login.png"
            placeholder="blur"
            className="absolute rounded-5% bottom-0 left-1/2 -translate-x-1/2 max-w-[60%]"
          />
        </div>
        {/* End of left col */}
        {/* Right col */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Inicio de sesión</h1>
          <p className="text-center">
            Inicia sesión para acceder a tus clases y cursos.
          </p>
          <Button variant="outline" size="lg" className="w-full">
            Iniciar sesión
          </Button>
        </div>
        {/* End of Right col */}
      </div>
    </div>
  );
};

export default Page;
