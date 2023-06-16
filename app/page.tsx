import CardBeneficioCTA from "@/components/CardBeneficioCTA";
import CardCursoLP from "@/components/CardCursoLP";
import GridAnunciosLP from "@/components/GridAnunciosLP";
import ReviewsSection from "@/components/ReviewsSection";
import Logo from "@/components/payload/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export interface ILandingPageProps {}

const LandingPage = ({ ...props }: ILandingPageProps): JSX.Element => {
  return (
    <div className="relative min-h-screen space-y-6">
      <Image
        src="/images/demo/heroBanner01.jpg"
        alt="Banner principal"
        priority
        width={5120}
        height={1552}
        className="aspect-[5120/1552] w-full h-auto my-12"
      />
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-stretch relative">
          <CardBeneficioCTA
            icono="niveles"
            titulo="Cursos para todos los niveles"
            cta={{
              label: "Ver cursos",
              href: "/",
            }}
          >
            Descubre nuestra amplia variedad de cursos y clases en línea para
            aprender un nuevo idioma.
          </CardBeneficioCTA>

          <CardBeneficioCTA
            color="secondary"
            icono="webcam"
            titulo="Clases personalizadas"
            cta={{
              label: "Agenda una clase",
              href: "/",
            }}
          >
            Mejora tu dominio del idioma con clases 1 a 1 impartidas por
            nuestros profesores altamente calificados.
          </CardBeneficioCTA>

          <CardBeneficioCTA
            icono="certificado"
            titulo="Certificación asegurada"
            cta={{
              label: "Ver cursos",
              href: "/",
            }}
          >
            Prepara tu examen de certificación en el idioma que necesitas con
            nuestras cursos en línea.
          </CardBeneficioCTA>
        </div>
      </div>

      <ReviewsSection />

      <div className="grid lg:grid-cols-5 gap-4 lg:gap-24 w-full relative overflow-visible container">
        <div className="relative flex items-center justify-center overflow-visible aspect-square lg:col-span-2 w-full h-full">
          <Image
            src="/images/logos/IsotipoGrande.png"
            alt="World Friends Languages logo"
            width={1535}
            height={1535}
            className="absolute top-0 right-0 w-full h-full object-contain"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-start justify-start lg:col-span-3">
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
                <p>{curso.descripcion}</p>
              </CardCursoLP>
            );
          })}

          <Button className="mx-auto">Ver más</Button>
        </div>
      </div>
      <div className="container">
        <GridAnunciosLP />
      </div>
    </div>
  );
};

export default LandingPage;
