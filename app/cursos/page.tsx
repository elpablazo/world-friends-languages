import GridBanderas from "@/components/GridBanderas";
import Image from "next/image";
import { iBandera } from "@/components/BanderaThumbnail";
import CardCursoLP from "@/components/CardCursoLP";
import Icon from "@/components/Icon";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
const bannerSrc = "/images/demo/bannerCursos.jpg";

const Page = (): JSX.Element => {
  return (
    <div className="relative min-h-screen space-y-12">
      <Image
        src={bannerSrc}
        alt="Banner de los cursos | World Friend Languages"
        priority
        width={3840}
        height={762}
        className="aspect-[3840/762] w-full h-auto my-12"
      />
      <div className="relative !-mt-[10vh]">
        <div className="container mx-auto px-4 max-w-md">
          <div className="card flex flex-col gap-4 bg-white rounded p-4 border-gray-light border-2">
            <h1 className="text-2xl font-bold text-center">
              Cursos de idiomas
            </h1>
            <div className="flex gap-4 flex-col lg:flex-row">
              <SearchBar />
              <Button className="w-full mx-auto lg:w-min">Buscar</Button>
            </div>
          </div>
        </div>
      </div>
      <GridBanderas
        banderas={[
          {
            pais: "Francia",
            imagenUrl: "/images/demo/banderas/francia.jpg",
          },

          {
            pais: "Alemania",
            imagenUrl: "/images/demo/banderas/alemania.jpg",
          },
          {
            pais: "Reino Unido",
            imagenUrl: "/images/demo/banderas/reino-unido.jpg",
          },
          {
            pais: "Italia",
            imagenUrl: "/images/demo/banderas/italia.jpg",
          },
          {
            pais: "Estados Unidos",
            imagenUrl: "/images/demo/banderas/usa.jpg",
          },
          {
            pais: "Portugal",
            imagenUrl: "/images/demo/banderas/portugal.jpg",
          },
        ]}
      />
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              titulo: "Inglés para certificado TOEFL",
              descripcion:
                "Prepárate para el éxito en el examen TOEFL con nuestro curso de inglés. Aprenderás estrategias efectivas para mejorar tus habilidades en comprensión auditiva, lectura, expresión escrita y oral.",
              imagen: "/images/demo/banderas/usa.jpg",
            },
            {
              titulo: "Curso básico de Alemán",
              descripcion:
                "Aprende alemán desde cero con nuestro curso básico. Aprenderás a comunicarte en alemán en situaciones cotidianas y a comprender textos sencillos.",
              imagen: "/images/demo/banderas/alemania.jpg",
            },
            {
              titulo: "Francés intermedio",
              descripcion:
                "Prepárate para hablar Francés como un experto. Mejorarás pronunciación, gramática y vocabulario. Aprenderás a comunicarte en situaciones cotidianas y a comprender textos sencillos.",
              imagen: "/images/demo/banderas/francia.jpg",
            },
          ].map((curso, i) => {
            return (
              <CardCursoLP
                key={i}
                titulo={curso.titulo}
                imagenUrl={curso.imagen}
              >
                <div className="flex flex-col gap-4">
                  <p>{curso.descripcion}</p>
                  <div className="flex flex-row gap-2 text-primary text-base">
                    <div className="mt-1">
                      <Icon variant="reloj" />
                    </div>
                    <div className="grid">
                      <span className="font-bold">Duración:</span>
                      <span className="text-dark">6 meses</span>
                    </div>
                  </div>
                </div>
              </CardCursoLP>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
