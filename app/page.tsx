import CardBeneficioCTA from "@/components/CardBeneficioCTA";
import CardCursoLP from "@/components/CardCursoLP";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import Logo from "@/components/payload/Logo";
import Image from "next/image";
export interface ILandingPageProps {}

const LandingPage = ({ ...props }: ILandingPageProps): JSX.Element => {
  return (
    <>
      <Navbar />
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

            <div className="rounded py-4 px-6 flex flex-row gap-2 items-start justify-center relative bg-primary w-full lg:w-auto lg:min-w-[320px]">
              <p className="text-light text-center font-bold text-lg">
                Ver más
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-8 pr-[76px] pb-0 pl-[76px] flex flex-row gap-12 items-center justify-start self-stretch relative">
            <div className="flex flex-col gap-12 items-start justify-start flex-1 relative">
              <div className="bg-gradient-to-tr from-secondary/20 to-secondary/0 rounded relative flex gap-2 justify-between overflow-hidden">
                <div className="flex flex-col gap-6 items-start justify-between w-full p-6">
                  <div className="flex flex-col gap-2 relative w-full">
                    <div className="font-bold text-2xl">
                      ¿Eres profesor de idiomas?
                    </div>

                    <div className="text-lg">
                      Si estás buscando llegar a más estudiantes en línea,
                      ¡súmate a nuestra equipo, es gratis!
                    </div>
                  </div>

                  <div
                    className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center relative"
                    style={{
                      background:
                        "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
                    }}
                  >
                    <div
                      className="text-light text-center relative"
                      style={{
                        font: "var(--botones, 700 20px 'Ubuntu', sans-serif)",
                      }}
                    >
                      Regístrate
                    </div>
                  </div>
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

              <div className="bg-light rounded border-2 border-gray-light flex flex-row gap-6 items-center relative overflow-hidden w-full">
                <div className="p-6 flex flex-col gap-6 relative">
                  <div className="flex flex-col gap-2 items-start justify-start max-w-md">
                    <p className="font-bold text-2xl">¡Contáctanos!</p>

                    <p className="text-lg relative w-full">
                      Si deseas recibir más informes acerca de algún curso o
                      clase particular, llámanos al:
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
                    Toma clases desde tu computadora o celular en una
                    videollamada con un profesor para resolver todas tus dudas.
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
        </div>

        <div className="flex flex-col gap-0 items-start justify-start self-stretch relative">
          <div className="bg-dark pt-12 pr-0 pb-12 pl-0 flex flex-col gap-2.5 items-center justify-center self-stretch relative">
            <div className="flex flex-row gap-[124px] items-start justify-center self-stretch relative">
              <div className="flex flex-col gap-4 items-start justify-start relative">
                <div className="text-gray-mid text-left relative">Nosotros</div>

                <div className="text-gray-dark text-left relative">
                  Marco teórico
                </div>

                <div className="text-gray-dark text-left relative">
                  Política de privacidad
                </div>

                <div className="text-gray-dark text-left relative">
                  Términos y condiciones
                </div>

                <div className="text-gray-dark text-left relative">
                  Preguntas frecuentes
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start relative">
                <div className="text-gray-mid text-left relative">Idiomas</div>

                <div className="text-gray-dark text-left relative">
                  Clase muestra gratis
                </div>

                <div className="text-gray-dark text-left relative">
                  Cursos y clases particulares
                </div>

                <div className="text-gray-dark text-left relative">
                  Quiero ser profesor
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start relative">
                <div className="text-gray-mid text-left relative">
                  Redes sociales
                </div>

                <div className="flex flex-row gap-2 items-center justify-start relative">
                  <div className="text-gray-dark text-left relative">
                    Facebook
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start relative">
                  <div className="text-gray-dark text-left relative">
                    Instagram
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start relative">
                  <div className="text-gray-dark text-left relative">
                    rargumosa1@yahoo.com.mx
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-dark to-primary-light py-2 text-center w-full">
            <div className="mx-auto">
              <Logo className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
