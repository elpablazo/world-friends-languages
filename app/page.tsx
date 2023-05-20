import Image from "next/image";
export interface ILandingPageProps {}

const LandingPage = ({ ...props }: ILandingPageProps): JSX.Element => {
  return (
    <div className="bg-gray-light relative min-h-screen">
      <div className="container flex flex-col gap-24 items-center justify-start left-0 pt-[173px] w-full h-full">
        <div className="pt-14 pb-14 flex flex-row gap-0 items-center justify-start shrink-0 relative">
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div className="text-dark text-left relative self-stretch">
              Aprende idiomas de manera cómoda y efectiva
            </div>

            <div className="px-6 py-4 flex flex-row gap-2 items-start justify-center shrink-0 relative bg-gradient-to-t from-primary-light to-primary-dark rounded">
              <div className="text-light text-center relative">
                Empieza gratis
              </div>
            </div>
          </div>

          <Image
            src="https://placehold.co/253x357/EEE/ccc"
            alt="Portrait of a woman with a wide smile and thumbs up"
            title="Portrait of a woman"
            className="shrink-0 w-[253px] h-[357px] absolute left-[951px] top-[-66px]"
            width={253}
            height={357}
          />

          <Image
            src="https://placehold.co/99x56/EEE/ccc"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[98.84px] h-[56.15px] absolute left-[835.34px] top-[-45px]"
            width={99}
            height={56}
          />

          <Image
            src="https://placehold.co/146x84/EEE/ccc"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[36.7px_36.7px_0px_36.7px] border-solid border-[rgba(0,0,0,0.10)] border-[2.1px] shrink-0 w-[146.13px] h-[84px] absolute left-[750px] top-[102.43px]"
            width={146}
            height={84}
          />

          <Image
            src="https://placehold.co/102x60/EEE/ccc"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[101.89px] h-[59.79px] absolute left-[829px] top-[277.78px]"
            width={102}
            height={60}
          />
        </div>

        <div className="flex flex-row gap-8 items-start justify-start self-stretch shrink-0 relative">
          <div
            className="flex flex-col items-center justify-between self-stretch flex-1 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(closest-side, rgba(1, 166, 165, 0.10) 0%,rgba(1, 166, 165, 0.00) 79.6875%)",
            }}
          >
            <div className="pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-dark text-left relative self-stretch">
                  Cursos para todos los niveles
                </div>

                <div className="text-dark text-left relative self-stretch">
                  Descubre nuestra amplia variedad de cursos y clases en línea
                  para aprender un nuevo idioma.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="border-solid border-primary shrink-0 h-0 relative"></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-primary text-center relative flex-1">
                  Ver cursos
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[24px_24px_24px_0px] flex flex-col items-center justify-between self-stretch flex-1 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255, 220, 204, 0.30) 0%,rgba(255, 220, 204, 0.00) 79.6875%)",
            }}
          >
            <div className="pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-dark text-left relative self-stretch">
                  Clases personalizadas
                </div>

                <div className="text-dark text-left relative self-stretch">
                  Mejora tu dominio del idioma con clases 1 a 1 impartidas por
                  nuestros profesores altamente calificados.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="border-solid border-secondary shrink-0 h-0 relative"></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-secondary text-center relative flex-1">
                  Agenda una clase
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-between self-stretch flex-1 relative overflow-hidden">
            <div className="pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-dark text-left relative self-stretch">
                  Certificación asegurada
                </div>

                <div className="text-dark text-left relative self-stretch">
                  Prepara tu examen de certificación en el idioma que necesitas
                  con nuestras cursos en línea.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div className="border-solid border-primary shrink-0 h-0 relative"></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-primary text-center relative flex-1">
                  Comienza gratis
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light flex flex-row gap-10 items-center justify-center self-stretch shrink-0 relative">
          <div className="flex flex-row gap-2 items-center justify-start shrink-0 w-[448px] relative">
            <Image
              className="rounded-full shrink-0 w-16 h-16 relative"
              src="https://placehold.co/64x64/EEE/ccc"
              alt="image-6"
              width={64}
              height={64}
            />

            <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
              <div className="text-dark text-left relative">Obed Vargas</div>

              <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative"></div>

              <div className="text-[#000000] text-left relative self-stretch">
                Quisiera agradecer por el rápido aprendizaje de calidad!
                Recomiendo esta escuela como una buena opción para estudiar
                idiomas, principalmente por los profesores y la interacción con
                nativos del Idioma
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start shrink-0 w-[448px] relative">
            <Image
              src="https://placehold.co/200x100/EEE/ccc"
              alt="World Friends Languages logo"
              width={200}
              height={100}
            />

            <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
              <div className="text-dark text-left relative">
                Alfonso Carranza García
              </div>

              <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative"></div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--base, 300 16px/20px 'Ubuntu', sans-serif)",
                }}
              >
                Excelente escuela de idiomas!! Muy recomendable
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[163px] items-center justify-start shrink-0 w-[1128px] relative">
          <div className="self-stretch flex-1 relative">
            <Image
              src="https://placehold.co/544x738/EEE/ccc"
              alt="World Friends Languages logo"
              width={544}
              height={738}
              className="w-[544px] h-[738px] absolute left-[-77px] top-[calc(50%_-_368.5px)]"
            />
          </div>

          <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
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
                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[104.01px] h-[59.79px] relative"
                src="https://placehold.co/104x60/EEE/ccc"
                alt="flags-sprites-82"
              />
            </div>

            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
              <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                <div className="text-dark text-left relative self-stretch">
                  Curso básico de Alemán
                </div>

                <div className="text-dark text-left relative self-stretch">
                  Aprende alemán desde cero con nuestro curso básico. Adquiere
                  las habilidades fundamentales en el idioma para comunicarte en
                  situaciones cotidianas.
                </div>
              </div>

              <Image
                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[105.26px] h-[59.79px] relative"
                src="https://placehold.co/105x60/EEE/ccc"
                alt="flags-sprites-112"
                width={105}
                height={60}
              />
            </div>

            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
              <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                <div className="text-dark text-left relative self-stretch">
                  Curso avanzado de Francés
                </div>

                <div className="text-dark text-left relative self-stretch">
                  Mejora tu nivel de francés con nuestro curso avanzado. Domina
                  el idioma en situaciones complejas y amplía tus habilidades de
                  comunicación.
                </div>
              </div>

              <Image
                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[101.89px] h-[59.79px] relative"
                src="https://placehold.co/102x60/EEE/ccc"
                alt="flags-sprites-42"
                width={102}
                height={60}
              />
            </div>

            <div className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center shrink-0 w-[326px] relative">
              <div className="text-light text-center relative">Ver más</div>
            </div>
          </div>
        </div>

        <div className="pt-8 pr-[76px] pb-0 pl-[76px] flex flex-row gap-12 items-center justify-start self-stretch shrink-0 relative">
          <div className="flex flex-col gap-14 items-start justify-start flex-1 relative">
            <div className="rounded-[32px] pt-8 pr-12 pb-8 pl-12 flex flex-col gap-0 items-start justify-center self-stretch shrink-0 relative">
              <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[422px] relative">
                <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative">
                  <div className="text-dark text-left relative self-stretch">
                    ¿Eres profesor de idiomas?
                  </div>

                  <div className="text-dark text-left relative self-stretch">
                    Si estás buscando llegar a más estudiantes en línea, ¡súmate
                    a nuestra equipo, es gratis!
                  </div>
                </div>

                <div
                  className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center shrink-0 relative"
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

            <div className="bg-light rounded-[32px_32px_0px_32px] border-solid border-gray-light border-2 flex flex-row gap-6 items-center justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="pt-6 pr-12 pb-6 pl-12 flex flex-row gap-6 items-start justify-center flex-1 relative">
                <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
                  <div className="text-dark text-left relative self-stretch">
                    ¡Contáctanos!
                  </div>

                  <div className="text-dark text-left relative w-[422px]">
                    Si deseas recibir más informes acerca de algún curso o clase
                    particular, llámanos al:
                  </div>

                  <div className="text-left relative self-stretch">
                    55 6800 4685
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[32px_32px_32px_0px] flex flex-col gap-6 items-start justify-center self-stretch shrink-0 w-[329px] relative overflow-hidden"
            style={{
              background:
                "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
            }}
          >
            <div className="p-6 flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative">
                <div
                  className="text-light text-left relative self-stretch"
                  style={{
                    font: "var(--_3-xl, 700 32px 'Ubuntu', sans-serif)",
                  }}
                >
                  Clases en vivo
                </div>

                <div className="text-light text-left relative self-stretch">
                  Toma clases desde tu computadora o celular en una videollamada
                  con un profesor para resolver todas tus dudas.
                </div>
              </div>

              <div className="bg-secondary rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center self-stretch shrink-0 relative">
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

        <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
          <div className="bg-dark pt-12 pr-0 pb-12 pl-0 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div className="flex flex-row gap-[124px] items-start justify-center self-stretch shrink-0 relative">
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
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

              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
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

              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div className="text-gray-mid text-left relative">
                  Redes sociales
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <div className="text-gray-dark text-left relative">
                    Facebook
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <div className="text-gray-dark text-left relative">
                    Instagram
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <div className="text-gray-dark text-left relative">
                    rargumosa1@yahoo.com.mx
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pt-4 pr-0 pb-4 pl-0 flex flex-row gap-4 items-center justify-center self-stretch shrink-0 relative"
            style={{
              background:
                "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
            }}
          >
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
              {/*  Logo */}

              <div className="flex flex-col items-start justify-start shrink-0 relative">
                <div className="text-light text-left relative">
                  World Friends
                </div>

                <div className="text-light text-left relative">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-12 items-center justify-start w-[1128px] absolute left-[76px] top-[34px]">
        <div className="flex flex-row gap-[7.18px] items-center justify-start shrink-0 relative">
          {/* Logo */}

          <div className="flex flex-col items-start justify-start shrink-0 relative">
            <div className="text-dark text-left relative">World Friends</div>

            <div className="text-dark text-left relative">Languages</div>
          </div>
        </div>

        <div className="flex flex-row gap-12 items-center justify-start flex-1 relative">
          <div className="bg-gray-light rounded pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2 items-center justify-start shrink-0 relative">
            <div className="text-dark text-center relative">
              Busca clases o cursos
            </div>
          </div>

          <div className="text-dark text-center relative">Ver cursos</div>

          <div className="text-dark text-center relative">Clases 1 a 1</div>

          <div className="text-dark text-center relative">Marco teórico</div>

          <div className="bg-secondary rounded flex flex-row gap-2 items-start justify-center shrink-0 relative">
            <div className="text-light text-center relative">Ingresa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
