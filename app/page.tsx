import CardBeneficioCTA from "@/components/CardBeneficioCTA";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import Image from "next/image";
export interface ILandingPageProps {}

const LandingPage = ({ ...props }: ILandingPageProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="space-y-16 relative min-h-screen">
        <Image
          src="/images/demo/heroBanner01.jpg"
          alt="Banner principal"
          priority
          width={5120}
          height={1552}
          className="aspect-[5120/1552] w-full h-auto"
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

          <ReviewsSection />

          <div className="flex flex-row gap-[163px] items-center justify-start w-[1128px] relative">
            <div className="self-stretch flex-1 relative">
              <Image
                src="https://placehold.co/544x738/EEE/ccc"
                alt="World Friends Languages logo"
                width={544}
                height={738}
                className="w-[544px] h-[738px] absolute left-[-77px] top-[calc(50%_-_368.5px)]"
              />
            </div>

            <div className="flex flex-col gap-8 items-start justify-start relative">
              <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start w-[538px] relative">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                  <div className="text-dark text-left relative self-stretch">
                    Inglés para certificado TOEFL
                  </div>

                  <div className="text-dark text-left relative self-stretch">
                    Prepárate para el éxito en el examen TOEFL con nuestro curso
                    de inglés. Aprenderás estrategias efectivas para mejorar tus
                    habilidades en comprensión auditiva, lectura, expresión
                    escrita y oral.
                  </div>
                </div>

                <Image
                  width={104}
                  height={60}
                  className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] w-[104.01px] h-[59.79px] relative"
                  src="https://placehold.co/104x60/EEE/ccc"
                  alt="flags-sprites-82"
                />
              </div>

              <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start w-[538px] relative">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                  <div className="text-dark text-left relative self-stretch">
                    Curso básico de Alemán
                  </div>

                  <div className="text-dark text-left relative self-stretch">
                    Aprende alemán desde cero con nuestro curso básico. Adquiere
                    las habilidades fundamentales en el idioma para comunicarte
                    en situaciones cotidianas.
                  </div>
                </div>

                <Image
                  className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] w-[105.26px] h-[59.79px] relative"
                  src="https://placehold.co/105x60/EEE/ccc"
                  alt="flags-sprites-112"
                  width={105}
                  height={60}
                />
              </div>

              <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start w-[538px] relative">
                <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                  <div className="text-dark text-left relative self-stretch">
                    Curso avanzado de Francés
                  </div>

                  <div className="text-dark text-left relative self-stretch">
                    Mejora tu nivel de francés con nuestro curso avanzado.
                    Domina el idioma en situaciones complejas y amplía tus
                    habilidades de comunicación.
                  </div>
                </div>

                <Image
                  className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] w-[101.89px] h-[59.79px] relative"
                  src="https://placehold.co/102x60/EEE/ccc"
                  alt="flags-sprites-42"
                  width={102}
                  height={60}
                />
              </div>

              <div className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center w-[326px] relative">
                <div className="text-light text-center relative">Ver más</div>
              </div>
            </div>
          </div>

          <div className="pt-8 pr-[76px] pb-0 pl-[76px] flex flex-row gap-12 items-center justify-start self-stretch relative">
            <div className="flex flex-col gap-14 items-start justify-start flex-1 relative">
              <div className="rounded-[32px] pt-8 pr-12 pb-8 pl-12 flex flex-col gap-0 items-start justify-center self-stretch relative">
                <div className="flex flex-col gap-6 items-start justify-start w-[422px] relative">
                  <div className="flex flex-col gap-4 items-center justify-start self-stretch relative">
                    <div className="text-dark text-left relative self-stretch">
                      ¿Eres profesor de idiomas?
                    </div>

                    <div className="text-dark text-left relative self-stretch">
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

                <Image
                  className="shrink-0 w-[263px] h-[260px] absolute right-[18px] bottom-0"
                  src="https://placehold.co/263x260/EEE/ccc"
                  alt="pexels-photo-by-christina-morillo"
                  width={263}
                  height={260}
                />
              </div>

              <div className="bg-light rounded-[32px_32px_0px_32px] border-solid border-gray-light border-2 flex flex-row gap-6 items-center justify-start self-stretch relative overflow-hidden">
                <div className="pt-6 pr-12 pb-6 pl-12 flex flex-row gap-6 items-start justify-center flex-1 relative">
                  <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
                    <div className="text-dark text-left relative self-stretch">
                      ¡Contáctanos!
                    </div>

                    <div className="text-dark text-left relative w-[422px]">
                      Si deseas recibir más informes acerca de algún curso o
                      clase particular, llámanos al:
                    </div>

                    <div className="text-left relative self-stretch">
                      55 6800 4685
                    </div>
                  </div>
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
                  <div
                    className="text-light text-left relative self-stretch"
                    style={{
                      font: "var(--_3-xl, 700 32px 'Ubuntu', sans-serif)",
                    }}
                  >
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
                src="https://placehold.co/329x329/EEE/ccc"
                alt="pexels-photo-by-g-l-i-k"
                width={329}
                height={329}
              />
            </div>
          </div>

          <div className="flex flex-col gap-0 items-start justify-start self-stretch relative">
            <div className="bg-dark pt-12 pr-0 pb-12 pl-0 flex flex-col gap-2.5 items-center justify-center self-stretch relative">
              <div className="flex flex-row gap-[124px] items-start justify-center self-stretch relative">
                <div className="flex flex-col gap-4 items-start justify-start relative">
                  <div className="text-gray-mid text-left relative">
                    Nosotros
                  </div>

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
                  <div className="text-gray-mid text-left relative">
                    Idiomas
                  </div>

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

            <div
              className="pt-4 pr-0 pb-4 pl-0 flex flex-row gap-4 items-center justify-center self-stretch relative"
              style={{
                background:
                  "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
              }}
            >
              <div className="flex flex-row gap-2 items-center justify-start relative">
                {/*  Logo */}

                <div className="flex flex-col items-start justify-start relative">
                  <div className="text-light text-left relative">
                    World Friends
                  </div>

                  <div className="text-light text-left relative">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
