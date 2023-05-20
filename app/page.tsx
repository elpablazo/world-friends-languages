import Image from "next/image";
export interface ILandingPageProps {}

export const LandingPage = ({ ...props }: ILandingPageProps): JSX.Element => {
  return (
    <div className="bg-[#ffffff] relative overflow-hidden min-h-screen">
      <div className="flex flex-col gap-24 items-center justify-start absolute left-0 pt-[173px] w-full h-full">
        <div className="pt-14 pr-[76px] pb-14 pl-[76px] flex flex-row gap-0 items-center justify-start shrink-0 relative">
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 w-[631px] relative">
            <div
              className="text-dark text-left relative self-stretch"
              style={{ font: "var(--_4-xl, 700 40px 'Ubuntu', sans-serif)" }}
            >
              Aprende idiomas de manera cómoda y efectiva
            </div>

            <div
              className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center shrink-0 w-[326px] relative"
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
                Empieza gratis
              </div>
            </div>
          </div>

          <Image
            src="retrato-mujer-hermosa-mujer-rubia-amplia-sonrisa-pulgares-arriba-1.png"
            alt="Portrait of a woman with a wide smile and thumbs up"
            title="Portrait of a woman"
            className="shrink-0 w-[253px] h-[357px] absolute left-[951px] top-[-66px]"
          />

          <Image
            src="flags-sprites-11.png"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[98.84px] h-[56.15px] absolute left-[835.34px] top-[-45px]"
          />

          <Image
            src="flags-sprites-8.png"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[36.7px_36.7px_0px_36.7px] border-solid border-[rgba(0,0,0,0.10)] border-[2.1px] shrink-0 w-[146.13px] h-[84px] absolute left-[750px] top-[102.43px]"
          />

          <Image
            src="flags-sprites-4.png"
            alt="Flag of a country"
            title="Flag"
            className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[101.89px] h-[59.79px] absolute left-[829px] top-[277.78px]"
          />
        </div>

        <div className="pt-0 pr-[76px] pb-0 pl-[76px] flex flex-row gap-8 items-start justify-start self-stretch shrink-0 relative">
          <div
            className="rounded-[24px_24px_24px_0px] flex flex-col items-center justify-between self-stretch flex-1 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(closest-side, rgba(1, 166, 165, 0.10) 0%,rgba(1, 166, 165, 0.00) 79.6875%)",
            }}
          >
            <div className="pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
              <svg
                className="shrink-0 relative overflow-visible"
                style={{}}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 10.5V37.5C45 37.8978 44.842 38.2794 44.5607 38.5607C44.2794 38.842 43.8978 39 43.5 39H1.5C1.10218 39 0.720644 38.842 0.43934 38.5607C0.158035 38.2794 0 37.8978 0 37.5C0 37.1022 0.158035 36.7206 0.43934 36.4393C0.720644 36.158 1.10218 36 1.5 36H10.5V28.5C10.5 28.1022 10.658 27.7206 10.9393 27.4393C11.2206 27.158 11.6022 27 12 27H21V19.5C21 19.1022 21.158 18.7206 21.4393 18.4393C21.7206 18.158 22.1022 18 22.5 18H31.5V10.5C31.5 10.1022 31.658 9.72064 31.9393 9.43934C32.2206 9.15804 32.6022 9 33 9H43.5C43.8978 9 44.2794 9.15804 44.5607 9.43934C44.842 9.72064 45 10.1022 45 10.5Z"
                  fill="url(#paint0_linear_148_8808)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_148_8808"
                    x1="0.0544175"
                    y1="39"
                    x2="46.8451"
                    y2="35.667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A0AA" />
                    <stop offset="1" stopColor="#00AAA0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[258.67px] relative">
                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--xl, 700 20px 'Ubuntu', sans-serif)" }}
                >
                  Cursos para todos los niveles
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                >
                  Descubre nuestra amplia variedad de cursos y clases en línea
                  para aprender un nuevo idioma.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="border-solid border-primary shrink-0 w-[354.67px] h-0 relative"
                style={{ borderWidth: "1px 0 0 0", opacity: "0.25" }}
              ></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-primary text-center relative flex-1"
                  style={{ font: "700 16px 'Ubuntu', sans-serif" }}
                >
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
              <svg
                className="shrink-0 relative overflow-visible"
                style={{}}
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_148_8838)">
                  <path
                    d="M36.6666 13.5V34.5C36.6666 35.2956 36.3506 36.0587 35.7879 36.6213C35.2253 37.1839 34.4623 37.5 33.6666 37.5H6.66663C5.87098 37.5 5.10791 37.1839 4.54531 36.6213C3.9827 36.0587 3.66663 35.2956 3.66663 34.5V13.5C3.66663 12.7044 3.9827 11.9413 4.54531 11.3787C5.10791 10.8161 5.87098 10.5 6.66663 10.5H33.6666C34.4623 10.5 35.2253 10.8161 35.7879 11.3787C36.3506 11.9413 36.6666 12.7044 36.6666 13.5ZM47.5416 13.5469C47.33 13.4951 47.1098 13.4887 46.8956 13.5281C46.6813 13.5676 46.4778 13.6519 46.2985 13.7756L40.0004 17.9738C39.8976 18.0423 39.8134 18.1352 39.7552 18.2441C39.697 18.353 39.6665 18.4746 39.6666 18.5981V29.4019C39.6665 29.5254 39.697 29.647 39.7552 29.7559C39.8134 29.8648 39.8976 29.9577 40.0004 30.0262L46.3341 34.2488C46.5712 34.4069 46.8484 34.4942 47.1333 34.5005C47.4182 34.5068 47.699 34.4319 47.9429 34.2844C48.1685 34.141 48.3535 33.942 48.4802 33.7067C48.6069 33.4713 48.6711 33.2073 48.6666 32.94V15C48.6668 14.6673 48.5564 14.344 48.3527 14.081C48.1491 13.8179 47.8637 13.63 47.5416 13.5469Z"
                    fill="#F39367"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_148_8838">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.666626)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[258.67px] relative">
                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--xl, 700 20px 'Ubuntu', sans-serif)" }}
                >
                  Clases personalizadas
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                >
                  Mejora tu dominio del idioma con clases 1 a 1 impartidas por
                  nuestros profesores altamente calificados.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="border-solid border-secondary shrink-0 w-[354.67px] h-0 relative"
              
              ></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-secondary text-center relative flex-1"
               
                >
                  Agenda una clase
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[24px_24px_24px_0px] flex flex-col items-center justify-between self-stretch flex-1 relative overflow-hidden"
         
          >
            <div className="pt-6 pr-4 pb-6 pl-4 flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
   

              <div className="flex flex-col gap-2 items-start justify-start shrink-0 w-[258.67px] relative">
                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--xl, 700 20px 'Ubuntu', sans-serif)" }}
                >
                  Certificación asegurada
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                >
                  Prepara tu examen de certificación en el idioma que necesitas
                  con nuestras cursos en línea.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="border-solid border-primary shrink-0 w-[354.67px] h-0 relative"
                style={{ borderWidth: "1px 0 0 0", opacity: "0.25" }}
              ></div>

              <div className="p-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-primary text-center relative flex-1"
                  style={{ font: "700 16px 'Ubuntu', sans-serif" }}
                >
                  Comienza gratis
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-row gap-[39px] items-center justify-center self-stretch shrink-0 relative">
          <div className="flex flex-row gap-2 items-center justify-start shrink-0 w-[448px] relative">
            <Image

              className="rounded-[64px] shrink-0 w-16 h-16 relative"
              src="image-6.png"
              alt="image-6"
              layout="fixed"
            />

            <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
              <div
                className="text-dark text-left relative"
               
              >
                Obed Vargas
              </div>

              <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative">
           

              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
          
              >
                Quisiera agradecer por el rápido aprendizaje de calidad!
                Recomiendo esta escuela como una buena opción para estudiar
                idiomas, principalmente por los profesores y la interacción con
                nativos del Idioma
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start shrink-0 w-[448px] relative">
    
            <Image
              src="image-7.png"
              alt="World Friends Languages logo"
              width={200}
              height={100}
            />

            <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
              <div
                className="text-dark text-left relative"
                style={{ font: "var(--xl, 700 20px 'Ubuntu', sans-serif)" }}
              >
                Alfonso Carranza García
              </div>

              <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative">

              </div>

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
              src="isotipo-1.png"
              alt="World Friends Languages logo"
              width={544}
              height={738}
              className="w-[544px] h-[738px] absolute left-[-77px] top-[calc(50%_-_368.5px)]"
            />
        
          </div>

          <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
              <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                <div
                  className="text-dark text-left relative self-stretch"
                 
                >
                  Inglés para certificado TOEFL
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
                
                >
                  Prepárate para el éxito en el examen TOEFL con nuestro curso
                  de inglés. Aprenderás estrategias efectivas para mejorar tus
                  habilidades en comprensión auditiva, lectura, expresión
                  escrita y oral.
                </div>
              </div>

              <Image

                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[104.01px] h-[59.79px] relative"
                src="flags-sprites-82.png"
                alt="flags-sprites-82"
              />
            </div>

            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
              <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                <div
                  className="text-dark text-left relative self-stretch"
                 
                >
                  Curso básico de Alemán
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
          
                >
                  Aprende alemán desde cero con nuestro curso básico. Adquiere
                  las habilidades fundamentales en el idioma para comunicarte en
                  situaciones cotidianas.
                </div>
              </div>

              <img
                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[105.26px] h-[59.79px] relative"
                src="flags-sprites-112.png"
              />
            </div>

            <div className="rounded-[24px_24px_24px_0px] border-solid border-gray-light border-2 pt-6 pr-4 pb-6 pl-4 flex flex-row gap-6 items-center justify-start shrink-0 w-[538px] relative">
              <div className="flex flex-col gap-2 items-start justify-start flex-1 relative">
                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--xl, 700 20px 'Ubuntu', sans-serif)" }}
                >
                  Curso avanzado de Francés
                </div>

                <div
                  className="text-dark text-left relative self-stretch"
                  style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                >
                  Mejora tu nivel de francés con nuestro curso avanzado. Domina
                  el idioma en situaciones complejas y amplía tus habilidades de
                  comunicación.
                </div>
              </div>

              <img
                className="rounded-[26.12px_26.12px_0px_26.12px] border-solid border-[rgba(0,0,0,0.10)] border-[1.49px] shrink-0 w-[101.89px] h-[59.79px] relative"
                src="flags-sprites-42.png"
              />
            </div>

            <div
              className="rounded-[8px_8px_8px_0px] pt-4 pr-6 pb-4 pl-6 flex flex-row gap-2 items-start justify-center shrink-0 w-[326px] relative"
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
                Ver más
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pr-[76px] pb-0 pl-[76px] flex flex-row gap-12 items-center justify-start self-stretch shrink-0 relative">
          <div className="flex flex-col gap-14 items-start justify-start flex-1 relative">
            <div
              className="rounded-[32px] pt-8 pr-12 pb-8 pl-12 flex flex-col gap-0 items-start justify-center self-stretch shrink-0 relative"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255, 220, 204, 0.35) 0%,rgba(255, 220, 204, 0.00) 61.45833134651184%)",
              }}
            >
              <div className="flex flex-col gap-6 items-start justify-start shrink-0 w-[422px] relative">
                <div className="flex flex-col gap-4 items-center justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-dark text-left relative self-stretch"
                    style={{
                      font: "var(--_3-xl, 700 32px 'Ubuntu', sans-serif)",
                    }}
                  >
                    ¿Eres profesor de idiomas?
                  </div>

                  <div
                    className="text-dark text-left relative self-stretch"
                    style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                  >
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

              <img
                className="shrink-0 w-[263px] h-[260px] absolute right-[18px] bottom-0"
                src="pexels-photo-by-christina-morillo.png"
              />
            </div>

            <div className="bg-light rounded-[32px_32px_0px_32px] border-solid border-gray-light border-2 flex flex-row gap-6 items-center justify-start self-stretch shrink-0 relative overflow-hidden">
              <div className="pt-6 pr-12 pb-6 pl-12 flex flex-row gap-6 items-start justify-center flex-1 relative">
                <div className="flex flex-col gap-4 items-start justify-start flex-1 relative">
                  <div
                    className="text-dark text-left relative self-stretch"
                    style={{
                      font: "var(--_3-xl, 700 32px 'Ubuntu', sans-serif)",
                    }}
                  >
                    ¡Contáctanos!
                  </div>

                  <div
                    className="text-dark text-left relative w-[422px]"
                    style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                  >
                    Si deseas recibir más informes acerca de algún curso o clase
                    particular, llámanos al:
                  </div>

                  <div
                    className="text-left relative self-stretch"
                    style={{
                      color:
                        "var(--gradient, linear-gradient(87.28deg, rgba(0, 160, 170, 1.00) 0%,rgba(0, 170, 160, 1.00) 100%))",
                      font: "var(--_2-xl, 700 24px 'Ubuntu', sans-serif)",
                    }}
                  >
                    55 6800 4685
                  </div>
                </div>

                <svg
                  className="shrink-0 relative overflow-visible"
                  style={{}}
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.6883 8.88986C35.7519 8.6519 35.8619 8.42882 36.0118 8.23335C36.1616 8.03789 36.3486 7.87387 36.5619 7.75068C36.7752 7.62749 37.0107 7.54753 37.2549 7.51538C37.4991 7.48323 37.7473 7.49951 37.9852 7.5633C41.4611 8.47021 44.6325 10.2873 47.1726 12.8274C49.7127 15.3676 51.5298 18.5389 52.4367 22.0149C52.5005 22.2528 52.5168 22.5009 52.4847 22.7451C52.4525 22.9894 52.3725 23.2248 52.2494 23.4382C52.1262 23.6515 51.9621 23.8384 51.7667 23.9883C51.5712 24.1382 51.3481 24.2481 51.1102 24.3117C50.9518 24.3533 50.7888 24.3746 50.625 24.375C50.2121 24.3751 49.8108 24.239 49.4832 23.9877C49.1556 23.7364 48.9201 23.384 48.8133 22.9852C48.074 20.1472 46.5912 17.5578 44.5177 15.4839C42.4442 13.4099 39.855 11.9266 37.0172 11.1867C36.779 11.1233 36.5557 11.0136 36.36 10.8638C36.1643 10.714 36 10.5271 35.8766 10.3138C35.7531 10.1005 35.673 9.86491 35.6407 9.62057C35.6084 9.37624 35.6246 9.12793 35.6883 8.88986ZM35.1422 18.6867C38.3742 19.5492 40.4508 21.6281 41.3133 24.8602C41.4201 25.259 41.6556 25.6114 41.9832 25.8627C42.3108 26.114 42.7121 26.2501 43.125 26.25C43.2888 26.2496 43.4518 26.2283 43.6102 26.1867C43.8481 26.1231 44.0712 26.0132 44.2667 25.8633C44.4621 25.7134 44.6262 25.5265 44.7494 25.3132C44.8725 25.0998 44.9525 24.8644 44.9847 24.6201C45.0168 24.3759 45.0005 24.1278 44.9367 23.8899C43.7367 19.3992 40.6008 16.2633 36.1102 15.0633C35.8723 14.9997 35.6241 14.9837 35.38 15.016C35.1359 15.0483 34.9005 15.1284 34.6873 15.2517C34.4742 15.375 34.2874 15.5391 34.1376 15.7346C33.9878 15.93 33.878 16.1531 33.8145 16.391C33.7509 16.6289 33.7348 16.8771 33.7672 17.1212C33.7995 17.3653 33.8796 17.6007 34.0029 17.8139C34.1262 18.027 34.2903 18.2138 34.4857 18.3636C34.6812 18.5134 34.9043 18.6232 35.1422 18.6867ZM52.118 37.1391L41.0766 32.1914L41.0461 32.1774C40.4729 31.9322 39.8476 31.8338 39.2268 31.8911C38.606 31.9484 38.0093 32.1596 37.4906 32.5055C37.4296 32.5458 37.3709 32.5896 37.3149 32.6367L31.6102 37.5C27.9961 35.7445 24.2649 32.0414 22.5094 28.4742L27.3797 22.6828C27.4266 22.6242 27.4711 22.5656 27.5133 22.5024C27.8518 21.9851 28.0572 21.3922 28.1112 20.7764C28.1651 20.1605 28.066 19.5409 27.8227 18.9727V18.9445L22.861 7.88439C22.5393 7.14204 21.9861 6.52364 21.2841 6.12151C20.582 5.71938 19.7687 5.55508 18.9656 5.65314C15.7898 6.07105 12.8747 7.63072 10.7647 10.0409C8.65476 12.451 7.49428 15.5468 7.50002 18.75C7.50002 37.3594 22.6406 52.5 41.25 52.5C44.4532 52.5058 47.549 51.3453 49.9592 49.2353C52.3693 47.1254 53.929 44.2102 54.3469 41.0344C54.4451 40.2316 54.2812 39.4185 53.8795 38.7165C53.4778 38.0145 52.8599 37.4612 52.118 37.1391Z"
                    fill="#E8F2F0"
                  />
                </svg>
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

                <div
                  className="text-light text-left relative self-stretch"
                  style={{ font: "var(--lg, 300 18px 'Ubuntu', sans-serif)" }}
                >
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

            <img
              className="self-stretch flex-1 relative"
              src="pexels-photo-by-g-l-i-k.png"
            />
          </div>
        </div>

        <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
          <div className="bg-dark pt-12 pr-0 pb-12 pl-0 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div className="flex flex-row gap-[124px] items-start justify-center self-stretch shrink-0 relative">
              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div
                  className="text-gray-mid text-left relative"
                  style={{ font: "700 24px 'Inter', sans-serif" }}
                >
                  Nosotros
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Marco teórico
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Política de privacidad
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Términos y condiciones
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Preguntas frecuentes
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div
                  className="text-gray-mid text-left relative"
                  style={{ font: "700 24px 'Inter', sans-serif" }}
                >
                  Idiomas
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Clase muestra gratis
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Cursos y clases particulares
                </div>

                <div
                  className="text-gray-dark text-left relative"
                  style={{ font: "400 16px 'Inter', sans-serif" }}
                >
                  Quiero ser profesor
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div
                  className="text-gray-mid text-left relative"
                  style={{ font: "700 24px 'Inter', sans-serif" }}
                >
                  Redes sociales
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <svg
                    className="shrink-0 relative overflow-visible"
                    style={{}}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2417 2.276C10.2706 2.276 9.33932 2.66176 8.65266 3.34842C7.96601 4.03507 7.58025 4.96638 7.58025 5.93746V7.976H5.62087C5.5225 7.976 5.44275 8.05575 5.44275 8.15413V10.8458C5.44275 10.9442 5.5225 11.0239 5.62087 11.0239H7.58025V16.5458C7.58025 16.6442 7.66 16.7239 7.75837 16.7239H10.45C10.5484 16.7239 10.6282 16.6442 10.6282 16.5458V11.0239H12.6049C12.6866 11.0239 12.7579 10.9683 12.7777 10.889L13.4506 8.19733C13.4787 8.0849 13.3937 7.976 13.2778 7.976H10.6282V5.93746C10.6282 5.77474 10.6928 5.61868 10.8079 5.50362C10.9229 5.38856 11.079 5.32392 11.2417 5.32392H13.3C13.3984 5.32392 13.4782 5.24417 13.4782 5.14579V2.45413C13.4782 2.35575 13.3984 2.276 13.3 2.276H11.2417Z"
                      fill="#F39367"
                    />
                  </svg>

                  <div
                    className="text-gray-dark text-left relative"
                    style={{ font: "400 16px 'Inter', sans-serif" }}
                  >
                    Facebook
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <svg
                    className="shrink-0 relative overflow-visible"
                    style={{}}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.49996 6.9271C8.07898 6.9271 6.92705 8.07903 6.92705 9.50001C6.92705 10.921 8.07898 12.0729 9.49996 12.0729C10.9209 12.0729 12.0729 10.921 12.0729 9.50001C12.0729 8.07903 10.9209 6.9271 9.49996 6.9271Z"
                      fill="#F39367"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.35918 2.43951C8.08894 2.13442 10.911 2.13442 13.6408 2.43951C15.1437 2.60748 16.3559 3.79164 16.5323 5.29981C16.8586 8.09043 16.8586 10.9096 16.5323 13.7002C16.3559 15.2084 15.1437 16.3925 13.6408 16.5605C10.911 16.8656 8.08894 16.8656 5.35918 16.5605C3.85628 16.3925 2.64409 15.2084 2.46769 13.7002C2.1413 10.9096 2.1413 8.09043 2.46769 5.29981C2.64409 3.79164 3.85628 2.60748 5.35918 2.43951ZM13.4583 4.75002C13.0211 4.75002 12.6666 5.10446 12.6666 5.54168C12.6666 5.97891 13.0211 6.33335 13.4583 6.33335C13.8955 6.33335 14.25 5.97891 14.25 5.54168C14.25 5.10446 13.8955 4.75002 13.4583 4.75002ZM5.73955 9.50001C5.73955 7.42319 7.42314 5.7396 9.49996 5.7396C11.5768 5.7396 13.2604 7.42319 13.2604 9.50001C13.2604 11.5768 11.5768 13.2604 9.49996 13.2604C7.42314 13.2604 5.73955 11.5768 5.73955 9.50001Z"
                      fill="#F39367"
                    />
                  </svg>

                  <div
                    className="text-gray-dark text-left relative"
                    style={{ font: "400 16px 'Inter', sans-serif" }}
                  >
                    Instagram
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <svg
                    className="shrink-0 relative overflow-visible"
                    style={{}}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.31338 3.14358C8.09888 2.89452 10.901 2.89452 13.6865 3.14358L14.8878 3.25098C16.0851 3.35804 17.0524 4.27271 17.2263 5.46213C17.6178 8.13981 17.6178 10.8602 17.2263 13.5379C17.0524 14.7273 16.0851 15.642 14.8878 15.749L13.6865 15.8564C10.901 16.1055 8.09888 16.1055 5.31338 15.8564L4.11215 15.749C2.91486 15.642 1.94748 14.7273 1.77359 13.5379C1.38211 10.8602 1.38211 8.13981 1.77359 5.46213C1.94748 4.27271 2.91486 3.35804 4.11215 3.25098L5.31338 3.14358ZM4.63562 5.41472C4.45161 5.31564 4.22907 5.32059 4.04965 5.42775C3.87024 5.53492 3.76037 5.72851 3.76037 5.9375V13.4583C3.76037 13.7862 4.0262 14.0521 4.35412 14.0521C4.68204 14.0521 4.94787 13.7862 4.94787 13.4583V6.93156L9.21846 9.23111C9.39419 9.32574 9.60572 9.32574 9.78145 9.23111L14.052 6.93156V13.4583C14.052 13.7862 14.3179 14.0521 14.6458 14.0521C14.9737 14.0521 15.2395 13.7862 15.2395 13.4583V5.9375C15.2395 5.72851 15.1297 5.53492 14.9503 5.42775C14.7708 5.32059 14.5483 5.31564 14.3643 5.41472L9.49995 8.03397L4.63562 5.41472Z"
                      fill="#F39367"
                    />
                  </svg>

                  <div
                    className="text-gray-dark text-left relative"
                    style={{ font: "400 16px 'Inter', sans-serif" }}
                  >
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
            <div className="flex flex-row gap-[7.18px] items-center justify-start shrink-0 relative">
              <div className="shrink-0 w-[28.73px] h-[28.73px] relative overflow-hidden">
                <div className="w-[23.49px] h-[23.49px] absolute left-[1.31px] top-[2.62px] overflow-hidden">
                  <div className="absolute" style={{ inset: "0" }}>
                    <svg
                      className="absolute left-[-4.86px] top-[11.74px] overflow-visible"
                      style={{ transform: "translate(4.86px, -11.74px)" }}
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.8996 25.7429C30.4852 21.1572 30.4852 13.7224 25.8996 9.13679C21.3139 4.55115 13.8791 4.55115 9.29351 9.13679C4.70787 13.7224 4.70787 21.1572 9.29351 25.7429C13.8791 30.3285 21.3139 30.3285 25.8996 25.7429Z"
                        fill="#E8F2F0"
                      />
                    </svg>

                    <svg
                      className="absolute left-[-2.62px] top-0 overflow-visible"
                      style={{}}
                      width="27"
                      height="23"
                      viewBox="0 0 27 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8853 1.01583V1.02034C12.8808 1.02034 12.8402 1.02935 12.8357 1.03386C12.8402 1.03836 12.8402 1.03836 12.8492 1.03836C12.8627 1.03836 13.0024 1.02935 13.0249 1.00682C13.0249 1.00682 13.0249 1.00682 13.0204 1.00682C13.0204 1.00682 13.0204 1.00682 13.0294 0.997811C13.0114 0.988799 12.8943 1.01583 12.8853 1.01583Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M17.4947 5.52624H17.4587C17.4497 5.52624 17.4452 5.53075 17.3731 5.51723C17.31 5.50822 17.31 5.50822 17.292 5.51273C17.2785 5.51723 17.2785 5.51723 17.2559 5.55328C17.2379 5.57581 17.2109 5.58482 17.1883 5.60284C17.1928 5.61186 17.1974 5.62087 17.2019 5.62988L17.1838 5.68395C17.1883 5.69747 17.1974 5.70648 17.2019 5.71098C17.2334 5.74253 17.2785 5.75154 17.3145 5.76956C17.337 5.78308 17.337 5.78308 17.3415 5.78759C17.3596 5.81462 17.3596 5.81462 17.3596 5.81462C17.3776 5.82814 17.4001 5.83264 17.4136 5.84616C17.4272 5.85517 17.4317 5.86869 17.4452 5.8777C17.4812 5.89573 17.5218 5.88671 17.5578 5.89573C17.5713 5.88221 17.5713 5.88221 17.5804 5.88671C17.5668 5.86419 17.5488 5.85067 17.5308 5.82814C17.5353 5.82814 17.5668 5.82814 17.5804 5.85968C17.5939 5.85968 17.6029 5.85517 17.6164 5.85517V5.85067C17.6164 5.85067 17.6119 5.84616 17.6119 5.84166C17.6029 5.82363 17.5984 5.80561 17.5984 5.7966C17.5984 5.78308 17.5804 5.76956 17.5713 5.76055C17.5578 5.72901 17.5578 5.72901 17.4452 5.67944V5.65241L17.4272 5.60735C17.4587 5.61186 17.4632 5.62087 17.4677 5.62537C17.4857 5.65241 17.4857 5.65241 17.5353 5.62537L17.5263 5.61636L17.5218 5.58031C17.5218 5.55328 17.5128 5.54877 17.5083 5.54877C17.5083 5.52624 17.4993 5.52624 17.4947 5.52624Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M17.1118 5.66598C17.0712 5.66598 17.0712 5.66598 17.0712 5.66598C17.0622 5.66147 17.0622 5.65246 17.0532 5.64796C17.0442 5.63894 17.0306 5.63444 17.0171 5.62993C17.0036 5.62993 16.9856 5.62543 16.9811 5.62993C16.9676 5.63444 16.9631 5.64345 16.9495 5.65246C16.927 5.66598 16.9045 5.65697 16.8865 5.66147L16.8504 5.65697L16.8369 5.65246L16.8189 5.65697C16.8144 5.66147 16.8053 5.66147 16.8008 5.66598L16.7738 5.67499L16.7513 5.6795L16.7423 5.70653L16.7242 5.72906V5.75159C16.7648 5.79214 16.7783 5.81017 16.8099 5.81017C16.8279 5.81467 16.909 5.80566 16.9045 5.77412C16.9 5.72456 17.0171 5.78764 17.0216 5.78764C17.0216 5.78764 17.1027 5.81017 17.1072 5.81017C17.1208 5.81017 17.1343 5.79214 17.1388 5.78764C17.1433 5.77863 17.1433 5.77863 17.1433 5.7606C17.1568 5.75159 17.1568 5.75159 17.1523 5.74709C17.1478 5.73807 17.1343 5.73807 17.1253 5.72906C17.1163 5.72005 17.1163 5.70653 17.1072 5.69752C17.1163 5.68851 17.1298 5.684 17.1388 5.6795C17.1433 5.66598 17.1208 5.66598 17.1118 5.66598Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M14.2009 5.22431C14.2189 5.23332 14.2369 5.22431 14.2504 5.23332C14.2504 5.23332 14.2504 5.23332 14.2639 5.26036C14.2684 5.27387 14.3315 5.28288 14.3315 5.28288C14.3405 5.28288 14.4397 5.26036 14.4442 5.23332C14.4487 5.21079 14.4712 5.21079 14.5118 5.21079C14.6154 5.2198 14.6334 5.24233 14.6559 5.26486C14.665 5.27838 14.674 5.28288 14.6875 5.27387C14.7371 5.25585 14.7911 5.18826 14.7911 5.18826L14.8182 5.12968C14.8317 5.12067 14.8497 5.12067 14.8587 5.10715C14.8677 5.09814 14.8677 5.07561 14.8812 5.07111C14.8812 5.07111 14.9218 5.0666 14.9488 5.07561C14.9623 5.08012 14.9759 5.07561 14.9759 5.07561C14.9759 5.07561 14.9984 5.04407 14.9894 5.03506L14.9849 5.03055V5.02605C15.0344 4.99901 15.048 5.04858 15.048 5.04858C15.0435 5.08012 14.9984 5.09364 15.0029 5.13419C15.0029 5.14771 15.0435 5.15672 15.057 5.14771C15.102 5.12067 15.102 5.12067 15.1065 5.13419C15.111 5.13419 15.1156 5.1387 15.1156 5.1387L15.1201 5.13419V5.12968C15.1291 5.13419 15.1471 5.13419 15.1561 5.1387C15.1696 5.1387 15.1696 5.13419 15.1786 5.12968C15.1786 5.12518 15.1786 5.12067 15.1741 5.12067C15.1831 5.10265 15.1741 5.09814 15.1336 5.07111C15.1246 5.0621 15.1246 5.0621 15.1246 5.05759C15.1336 5.04407 15.1336 5.04407 15.1246 5.02605C15.1471 5.00352 15.1336 4.98099 15.0795 4.96747H15.0615H15.0164C14.9849 4.95846 14.9714 4.92241 14.9353 4.91791C14.9308 4.92241 14.9263 4.93142 14.9218 4.93593L14.8903 4.96297L14.8767 4.9855L14.8497 4.99901C14.8091 4.99 14.7911 4.89988 14.7461 4.93593C14.7371 4.94044 14.7235 4.94494 14.692 4.9089C14.665 4.87285 14.6559 4.86834 14.6289 4.86834C14.6199 4.85482 14.6199 4.85482 14.5974 4.8368V4.82779C14.5974 4.81878 14.5839 4.80977 14.5839 4.80075C14.5839 4.79174 14.5974 4.78273 14.5884 4.77372C14.5703 4.74668 14.5388 4.74218 14.5253 4.73767C14.5253 4.73767 14.5208 4.74218 14.5163 4.74218C14.4667 4.76921 14.4532 4.90439 14.4577 4.9134C14.4622 4.92241 14.4307 5.00352 14.3811 5.04407C14.3586 5.04858 14.3586 5.07111 14.3631 5.08012C14.3541 5.08913 14.345 5.09814 14.3315 5.10715C14.3225 5.11617 14.327 5.12518 14.318 5.13419C14.309 5.1432 14.2955 5.1387 14.2865 5.14771C14.2459 5.14771 14.2099 5.12968 14.1693 5.13419V5.1387C14.1918 5.17474 14.2549 5.15221 14.2639 5.20178C14.2414 5.20628 14.2189 5.21079 14.2009 5.22431Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M20.9644 8.30188L20.9864 8.3107L20.9688 8.30188H20.9644Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M20.8427 8.2208C20.8427 8.22531 20.8472 8.22981 20.8472 8.22981C20.8517 8.23883 20.8742 8.27938 20.8833 8.28388C20.8923 8.25685 20.8923 8.25685 21.0229 8.31543C21.0274 8.35147 21.0274 8.35147 21.0455 8.35598C21.0815 8.374 21.1581 8.41005 21.1761 8.41456L21.2978 8.45511C21.3113 8.43708 21.2347 8.38301 21.2347 8.38301C21.1987 8.36048 21.1581 8.35598 21.1221 8.33796C21.104 8.32894 21.0725 8.31543 21.0635 8.30191C21.05 8.27938 21.05 8.27938 20.9824 8.25234C20.9734 8.24784 20.9148 8.2208 20.8562 8.15321C20.8517 8.1442 20.8337 8.12618 20.8112 8.10815C20.8157 8.12167 20.8337 8.13519 20.8382 8.14871C20.8427 8.16673 20.8427 8.18475 20.8517 8.20278C20.8382 8.2163 20.8382 8.2163 20.8427 8.2208Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M20.5455 8.07655C20.5455 8.07655 20.55 8.06304 20.55 8.05402L20.5455 7.98193C20.5455 7.97292 20.5409 7.96391 20.5409 7.95489C20.5409 7.94588 20.5364 7.94138 20.5364 7.93236C20.5364 7.91434 20.5455 7.89632 20.5455 7.87829C20.5455 7.87379 20.5455 7.86928 20.5409 7.86027C20.5364 7.84675 20.5364 7.84675 20.5455 7.81972C20.5455 7.81071 20.5545 7.8062 20.5545 7.79719C20.5545 7.78818 20.5545 7.78367 20.55 7.77916C20.5455 7.77466 20.5409 7.77466 20.5364 7.77466C20.5274 7.77916 20.5274 7.78367 20.5274 7.8107C20.5274 7.81972 20.5274 7.83323 20.5229 7.83774C20.5184 7.84675 20.5094 7.85126 20.5004 7.86027C20.4959 7.86478 20.4914 7.86478 20.4869 7.86478C20.4779 7.86478 20.4689 7.86027 20.4148 7.93236C20.4148 7.93687 20.4103 7.94138 20.4103 7.94138C20.4238 7.94138 20.4238 7.94138 20.4238 7.94138L20.4734 8.04501C20.4779 8.05853 20.4824 8.05853 20.4869 8.05853C20.5004 8.06754 20.5409 8.08106 20.5455 8.07655Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M20.3695 7.94596C20.3695 7.93695 20.365 7.93244 20.347 7.90991C20.3425 7.90991 20.3154 7.92343 20.3289 7.94145C20.3289 7.94596 20.3335 7.94596 20.3335 7.95046C20.338 7.95497 20.338 7.95948 20.3425 7.96398C20.347 7.96849 20.3515 7.96849 20.3515 7.96849C20.3515 7.96849 20.356 7.96849 20.356 7.96398L20.3695 7.94596Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M20.5048 9.28418C20.5093 9.28868 20.5183 9.28418 20.5138 9.28418C20.5183 9.28418 20.5138 9.28418 20.5048 9.28418Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M17.8688 13.4973C17.8238 13.5874 17.8238 13.5874 17.8598 13.6685C17.8553 13.673 17.8553 13.682 17.8508 13.6865C17.8283 13.691 17.8103 13.691 17.7877 13.6955C17.7607 13.9614 17.7607 13.9614 17.7202 13.9929C17.6976 14.0199 17.6661 14.038 17.6436 14.0695C17.6661 14.0965 17.6976 14.1056 17.7156 14.1326L17.9905 13.8352C18.1077 13.8307 18.1392 13.5513 18.1392 13.5468C18.1032 13.3486 18.1978 13.2359 18.2293 13.1999C18.2293 13.1999 18.2293 13.1999 18.2383 13.1954C18.3285 13.0692 18.3285 13.0692 18.3735 13.0647C18.378 13.0692 18.3825 13.0782 18.3825 13.0827L18.4186 13.0737L18.4276 13.0647C18.4411 13.0737 18.4636 13.0827 18.4771 13.0917C18.4997 13.0827 18.5177 13.0737 18.5357 13.0692C18.5312 13.1052 18.5357 13.1098 18.5537 13.1233C18.6258 13.1052 18.6619 13.0377 18.7205 12.9971C18.6934 13.0512 18.6799 13.0737 18.5898 13.1368C18.5898 13.1728 18.5898 13.1728 18.6033 13.2134C18.6529 13.2404 18.6529 13.2404 18.8556 13.1458C18.9007 13.1188 18.9548 13.1098 18.9908 13.0692C18.9863 13.0557 18.9773 13.0422 18.9773 13.0196C19.0314 12.8935 19.0314 12.8304 19.0314 12.7403C19.0719 12.7538 19.1485 12.7763 19.1665 12.6502C19.1711 12.6862 19.1711 12.6862 19.2116 12.7177C19.2116 12.7177 19.3738 12.6456 19.3963 12.6096C19.3648 12.542 19.2837 12.4519 19.1756 12.4924C19.1665 12.4879 19.1485 12.4789 19.1395 12.4744C19.1305 12.4834 19.117 12.4924 19.108 12.497C19.1035 12.4924 19.0945 12.4924 19.0899 12.4879L19.1305 12.0644C19.1981 11.9157 19.3468 11.8391 19.4504 11.7219C19.509 11.6814 19.509 11.6814 19.4955 11.5868C19.545 11.5732 19.545 11.5732 19.5676 11.5597C19.5721 11.5237 19.6216 11.5192 19.6216 11.4786C19.6216 11.4336 19.5766 11.411 19.5631 11.3705C19.5766 11.375 19.5946 11.384 19.6126 11.3885C19.7027 11.5327 19.7118 11.5417 19.7748 11.4831C19.7884 11.4741 19.7974 11.4606 19.7748 11.3975C19.7568 11.3434 19.7568 11.3434 19.8154 11.1993C19.8019 11.1767 19.8019 11.1767 19.7613 11.1587C19.7388 11.2038 19.7388 11.2038 19.7343 11.2218C19.7028 11.2353 19.6982 11.2398 19.6757 11.2083C19.6757 11.2083 19.5315 11.2308 19.4865 11.2398C19.509 11.2218 19.509 11.2218 19.5225 11.1902C19.5586 11.1857 19.5946 11.1767 19.6307 11.1767C19.6622 11.1317 19.7163 11.1227 19.7613 11.0956C19.7658 10.9019 19.7658 10.9019 19.8469 10.8838C19.9055 10.7757 19.91 10.7216 19.91 10.6991C19.8424 10.7081 19.8424 10.7081 19.8109 10.7937C19.8064 10.7937 19.7974 10.7982 19.7929 10.7982C19.7929 10.7982 19.6397 10.7577 19.5946 10.7487C19.5495 10.7667 19.5135 10.8027 19.4684 10.8163C19.4549 10.8613 19.4549 10.8613 19.3197 10.9649C19.3333 11.0641 19.3963 11.1452 19.4324 11.2353C19.4279 11.2398 19.4279 11.2488 19.4234 11.2533C19.4234 11.2533 19.482 11.4516 19.3693 11.5011C19.2431 11.5597 19.1756 11.3975 19.0584 11.42C19.0539 11.4245 19.0539 11.4336 19.0494 11.4381C18.9863 11.4471 18.9638 11.4155 18.9413 11.3795C18.6033 11.3389 18.6303 11.749 18.4005 11.8526C18.4096 11.8661 18.4141 11.8796 18.4141 11.8977C18.2518 11.9878 17.8148 12.6411 17.9139 12.7673C17.8734 12.8619 17.8734 12.8619 17.8824 12.889C17.8373 12.9656 17.7652 13.0196 17.7292 13.1052C17.7111 13.1548 17.7292 13.1773 17.7472 13.1818C17.7697 13.1864 17.7697 13.1864 17.8824 13.1368C17.8824 13.1503 17.8959 13.1638 17.9049 13.1728C17.9229 13.281 17.8148 13.3756 17.8688 13.4973ZM19.1711 12.5015C19.1756 12.497 19.1801 12.4924 19.1846 12.4924C19.1846 12.4969 19.1846 12.5015 19.1801 12.5015C19.1801 12.5015 19.1756 12.5015 19.1711 12.5015Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M19.8017 10.6495C19.8197 10.6405 19.8287 10.627 19.8422 10.6179C19.8422 10.6179 19.9143 10.5504 19.9143 10.5459C19.9143 10.5323 19.8963 10.5008 19.8287 10.5278C19.7972 10.5413 19.7746 10.5549 19.7611 10.5729C19.7611 10.5729 19.7206 10.6315 19.7341 10.654C19.7476 10.672 19.7882 10.663 19.8017 10.6495Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M19.0223 11.1677C19.0313 11.1767 19.0719 11.2082 19.0764 11.2037C19.0809 11.1947 19.0809 11.1857 19.0899 11.1767C19.0989 11.1586 19.1169 11.1451 19.1259 11.1271C19.135 11.1091 19.1395 11.0911 19.144 11.082C19.144 11.064 19.1485 11.0325 19.0809 11.0685C19.0493 11.0865 19.0043 11.1451 19.0223 11.1677Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.12288 6.89601L9.10485 6.88249L9.08233 6.887C9.07331 6.8915 9.0643 6.89601 9.05529 6.90502C8.90209 6.84194 8.83901 6.99514 8.84802 7.03119C8.84802 7.03569 8.85252 7.0402 8.85703 7.04471C8.84802 7.08075 8.84802 7.08075 8.87505 7.15285C8.87055 7.15735 8.87055 7.16186 8.86604 7.16637C8.83901 7.16186 8.83901 7.16186 8.8345 7.1168L8.81197 7.08976H8.79395C8.79395 7.09427 8.78944 7.09878 8.78944 7.10779C8.78494 7.10779 8.78043 7.10328 8.77142 7.10328C8.76691 7.10779 8.76241 7.11229 8.76241 7.11229C8.7579 7.11229 8.75339 7.11229 8.74889 7.11229C8.74438 7.10779 8.73988 7.10328 8.73988 7.09878C8.70834 7.14384 8.74889 7.21593 8.69031 7.25198C8.67679 7.17988 8.72185 7.11229 8.69482 7.0402C8.68581 7.01316 8.58668 6.90052 8.54162 6.85095C8.53711 6.85095 8.53711 6.85095 8.46502 6.90502C8.46051 6.90052 8.45601 6.90052 8.4515 6.89601C8.43798 6.91403 8.42446 6.93656 8.41095 6.95909C8.40644 6.95909 8.40193 6.95909 8.39292 6.95909C8.23972 7.18889 8.23071 7.19791 8.28478 7.35561C8.31182 7.35561 8.32984 7.33308 8.36138 7.33759C8.36589 7.3466 8.37039 7.36462 8.37039 7.37364C8.2983 7.34209 8.28929 7.4953 8.28929 7.4953C8.3028 7.51782 8.3028 7.51783 8.39292 7.52684C8.39743 7.53585 8.40644 7.54937 8.41095 7.55838C8.40193 7.5719 8.40193 7.5719 8.37941 7.59443C8.36138 7.58992 8.28028 7.55387 8.26225 7.50881C8.23522 7.50431 8.23522 7.50431 8.23972 7.36913C8.23071 7.36462 8.21719 7.35561 8.20368 7.35111C8.19466 7.33308 8.19466 7.33308 8.21269 7.23395C8.20818 7.23395 8.19917 7.22945 8.19466 7.22945C8.19016 7.22044 8.19016 7.20692 8.19466 7.19791C8.2217 7.13032 8.26225 7.06723 8.28929 6.99965C8.24423 6.9636 8.20818 6.98613 8.17664 6.99965C7.96036 7.13933 7.81166 7.73411 8.03245 7.8062C8.05047 7.81071 8.10455 7.79268 8.12707 7.77917C8.11806 7.79719 8.11356 7.8062 8.07751 7.82873C8.05047 7.84225 8.03696 7.84676 8.02344 7.85577C8.04146 7.9594 8.04146 7.9594 8.16312 8.02249C8.19016 8.00897 8.21719 7.97743 8.23522 7.94138C8.25324 7.94589 8.27126 7.9594 8.28929 7.96391C8.29379 7.9594 8.2983 7.9549 8.2983 7.9549C8.30281 7.9549 8.31182 7.9549 8.31632 7.9594C8.33435 7.99996 8.33435 7.99996 8.65426 7.86478C8.66778 7.86027 8.67679 7.85126 8.69031 7.84676C8.72185 7.86928 8.72185 7.86928 8.74438 7.86928C8.74889 7.86478 8.7579 7.85126 8.76241 7.84225C8.74889 7.82873 8.72636 7.8062 8.71284 7.79268C8.76691 7.78818 8.76691 7.78818 8.78494 7.75213C8.78944 7.75213 8.78944 7.75213 8.86154 7.73411C8.86604 7.73411 8.87055 7.73411 8.87505 7.73411C8.88857 7.7296 8.88857 7.7296 8.89308 7.7296H8.89758L8.9066 7.7251C8.92462 7.72059 8.94715 7.7296 8.96517 7.71608C8.96968 7.72059 8.96968 7.72059 9.02825 7.68454C9.02825 7.68004 9.02825 7.67103 9.02825 7.66652C9.02375 7.653 9.02375 7.653 9.02375 7.653V7.6485V7.64399V7.63948V7.63498C9.01924 7.62597 9.01023 7.61245 9.00122 7.60344L8.9832 7.59893C8.97869 7.59893 8.96968 7.59443 8.96517 7.59443C8.96067 7.59893 8.95616 7.59893 8.95165 7.60344C8.94715 7.59893 8.94264 7.59443 8.93814 7.59443C8.93814 7.58992 8.93814 7.58091 8.93814 7.5764C8.94264 7.5764 8.94715 7.5719 8.95165 7.5719C8.95165 7.56288 8.95616 7.54486 8.95616 7.53585C8.96067 7.53585 8.96968 7.53585 8.97418 7.53585C8.97869 7.54486 8.9832 7.55838 8.9832 7.56739C8.99221 7.56739 9.00572 7.56288 9.01474 7.56288C9.01924 7.5719 9.02375 7.58541 9.03276 7.58992C9.06881 7.56739 9.07331 7.56739 9.09134 7.56739C9.10485 7.58992 9.09584 7.62597 9.12288 7.64399C9.14541 7.63498 9.14541 7.63498 9.15893 7.60344C9.16794 7.60344 9.18146 7.59893 9.19047 7.60344C9.19497 7.61695 9.20849 7.63047 9.213 7.64399C9.22201 7.64399 9.23553 7.63948 9.24904 7.63948C9.25806 7.66652 9.26707 7.68905 9.36169 7.66201C9.3707 7.68454 9.37971 7.72059 9.32114 7.76114C9.31663 7.76114 9.30762 7.75664 9.30311 7.75664C9.25806 7.81071 9.29861 7.84225 9.32564 7.83324C9.35719 7.82423 9.37971 7.78818 9.40224 7.7296L9.41126 7.71608L9.42477 7.72059C9.42928 7.71158 9.43829 7.70257 9.4473 7.69806C9.45181 7.69806 9.45631 7.69806 9.46533 7.70257C9.46983 7.71158 9.47434 7.7251 9.47884 7.73411C9.49687 7.73411 9.51039 7.73411 9.52841 7.77466C9.53742 7.77466 9.55094 7.77917 9.55995 7.77917C9.56446 7.73861 9.56446 7.73861 9.56896 7.7296C9.60501 7.74763 9.6005 7.76114 9.6005 7.77917C9.63204 7.79719 9.63655 7.79719 9.65908 7.77466C9.70865 7.8017 9.73568 7.86478 9.80327 7.86928C9.86635 7.94138 9.82129 8.0315 9.83481 8.1126C9.83481 8.12612 9.83481 8.12612 9.83481 8.12612C9.80327 8.20272 9.76272 8.33339 9.76272 8.33339C9.77623 8.39648 9.85283 8.36043 9.88438 8.40098C9.84382 8.53616 9.78074 8.54968 9.78074 8.54968C9.76272 8.57221 9.76272 8.57221 9.75821 8.59023C9.7537 8.60375 9.7537 8.60375 9.7537 8.60375C9.7537 8.60825 9.7492 8.61726 9.7492 8.62628C9.7537 8.63078 9.75821 8.63078 9.76272 8.63529C9.76722 8.63078 9.77173 8.62628 9.77623 8.62628C9.78525 8.63529 9.80327 8.66232 9.76722 8.68485C9.75821 8.67584 9.7537 8.66683 9.74469 8.65782C9.58699 8.63078 9.58248 8.63979 9.54193 8.69386C9.53291 8.70288 9.46533 8.80651 9.52841 8.9462C9.55094 8.95521 9.55094 8.95521 9.60952 8.94169C9.61402 8.94619 9.61853 8.94619 9.62303 8.9507C9.64556 8.93268 9.66359 8.90564 9.69513 8.89663C9.69513 8.90114 9.69963 8.90564 9.69963 8.91015C9.72667 8.89212 9.72667 8.89212 9.78074 8.77948C9.80327 8.77497 9.80327 8.77497 9.84833 8.78398C9.91141 8.72991 9.91141 8.72991 9.89339 8.69386C9.84833 8.68485 9.83932 8.68485 9.84382 8.6443C9.88888 8.63979 9.88888 8.63979 9.96548 8.71189C9.979 8.68936 9.979 8.68936 9.96999 8.66232C9.979 8.65782 10.0015 8.64881 10.0376 8.6443C10.0781 8.70288 10.0781 8.70288 10.1187 8.70738C10.1232 8.70288 10.1277 8.69837 10.1322 8.69837C10.1277 8.70288 10.1277 8.70738 10.1232 8.71189C10.1232 8.71639 10.1277 8.72541 10.1277 8.72991C10.1457 8.73442 10.1457 8.73442 10.1728 8.7209C10.1818 8.72991 10.1818 8.72991 10.1908 8.77046C10.1953 8.77046 10.2043 8.77497 10.2088 8.77497C10.2674 8.71189 10.2809 8.70288 10.3485 8.71639C10.3485 8.75244 10.3079 8.76596 10.2989 8.7975C10.3169 8.82003 10.3169 8.82003 10.4792 8.83355C10.4792 8.84707 10.4792 8.86058 10.4746 8.8741C10.5017 8.87861 10.5287 8.91465 10.5603 8.88762C10.5693 8.80651 10.5693 8.80651 10.5873 8.7975C10.6594 8.82454 10.9117 8.82003 10.9703 8.75244C11.0063 8.76145 11.0424 8.75244 11.0784 8.75695C11.0875 8.75244 11.092 8.73892 11.0965 8.72991C11.0604 8.61276 10.9207 8.66232 10.8576 8.58572C10.6233 8.61276 10.6008 8.50462 10.6143 8.49561C10.6188 8.4911 10.6999 8.48659 10.7135 8.4911C10.727 8.49561 10.772 8.50462 10.8802 8.49561L11.0063 8.46406C11.0244 8.47758 11.0244 8.47758 11.0424 8.50011C11.0469 8.4956 11.0469 8.49561 11.0874 8.4911C11.092 8.49561 11.101 8.50462 11.11 8.50912C11.1641 8.52264 11.1641 8.52264 11.1686 8.53165C11.1641 8.4911 11.1641 8.4911 11.0874 8.45956C11.0874 8.45505 11.0829 8.45055 11.0829 8.44153C11.092 8.43703 11.1055 8.43703 11.1145 8.44153C11.128 8.40098 11.0875 8.37395 11.0694 8.36043C11.0739 8.35142 11.0784 8.3424 11.0829 8.33339C11.0875 8.32889 11.092 8.32889 11.0965 8.32438C11.092 8.29735 11.092 8.29735 11.0559 8.25229C11.0108 8.22075 11.0108 8.22075 10.9838 8.1892C10.9162 8.19822 10.9117 8.1892 10.8892 8.09909C10.8261 8.09458 10.8261 8.09458 10.8036 8.07656C10.7991 8.08106 10.7946 8.08106 10.7901 8.08557C10.7901 8.09458 10.7856 8.1081 10.781 8.11711C10.709 8.11711 10.709 8.11711 10.6954 8.12612C10.6639 8.09909 10.5828 8.02699 10.5828 8.02699C10.5648 8.02249 10.5648 8.02249 10.5242 8.00446C10.5197 8.01347 10.5152 8.02699 10.5107 8.036C10.4882 8.02699 10.4882 8.02699 10.4746 7.99996C10.4206 7.98644 10.4026 7.98193 10.3755 7.9594C10.4251 7.9549 10.4746 7.96841 10.5197 7.95039C10.5197 7.93687 10.5197 7.93687 10.5062 7.90083C10.4656 7.90533 10.4611 7.90083 10.4431 7.89181C10.4431 7.88731 10.4431 7.8828 10.4431 7.8783C10.4656 7.86027 10.4701 7.85577 10.4837 7.84225C10.4701 7.81972 10.4656 7.81521 10.4611 7.79719C10.4656 7.79269 10.4701 7.78818 10.4701 7.78367C10.4882 7.78367 10.4882 7.78367 10.5603 7.81521C10.5648 7.81071 10.5693 7.81071 10.5738 7.8062C10.5873 7.8062 10.5873 7.8062 10.5873 7.8062C10.5918 7.8062 10.6008 7.8062 10.6053 7.8017C10.6369 7.83324 10.6414 7.83324 10.6594 7.83774C10.6639 7.82873 10.6729 7.81972 10.6774 7.81521C10.6999 7.82873 10.7315 7.82423 10.754 7.83324C10.7585 7.84225 10.763 7.85577 10.7675 7.86478C10.7765 7.86027 10.7901 7.86027 10.7991 7.86027C10.7991 7.86478 10.7991 7.86478 10.7991 7.86478C10.7991 7.8783 10.8036 7.89181 10.8081 7.90083C10.8667 7.91885 10.8667 7.91885 10.8982 7.88731C10.9072 7.88731 10.9207 7.89632 10.9297 7.90533C10.9523 7.90533 10.9523 7.90533 10.9748 7.89181C10.9838 7.89632 10.9973 7.90083 11.0063 7.90083C11.0289 7.82423 10.9523 7.79269 10.9342 7.7296C10.9838 7.72059 10.9838 7.72059 11.0018 7.66201L10.9973 7.63948L11.0063 7.61696C11.0063 7.59893 11.0063 7.59893 11.0018 7.56739C10.9568 7.54486 10.9568 7.54486 10.9433 7.52684C10.9568 7.50881 10.9793 7.50431 10.9928 7.48628C10.9973 7.48628 11.0018 7.49079 11.0063 7.49079C11.0424 7.47277 11.0649 7.45925 11.0289 7.37814C10.9838 7.31957 10.9252 7.36462 10.8712 7.35561C10.8531 7.36913 10.8531 7.36913 10.8531 7.40067C10.8441 7.40518 10.8351 7.41419 10.8306 7.4232C10.8171 7.38715 10.8171 7.38265 10.8306 7.35111C10.8036 7.32858 10.7044 7.30154 10.7044 7.30154C10.6729 7.32858 10.6594 7.33308 10.6504 7.33759C10.6369 7.36462 10.6459 7.39617 10.6459 7.4232C10.6414 7.4232 10.6369 7.4232 10.6324 7.4232C10.6278 7.41419 10.6233 7.40067 10.6188 7.39166C10.6188 7.38265 10.6188 7.38265 10.6188 7.38265C10.6098 7.36012 10.5918 7.3421 10.5783 7.32407C10.5467 7.33308 10.5467 7.33308 10.5107 7.32858C10.5062 7.33759 10.4972 7.3466 10.4882 7.35111C10.4611 7.33759 10.4611 7.33759 10.4431 7.35111C10.4431 7.36012 10.4476 7.37364 10.4476 7.38715C10.4206 7.39617 10.4071 7.40067 10.4116 7.43672C10.4071 7.43672 10.4026 7.44122 10.398 7.44573C10.3935 7.44122 10.389 7.43672 10.3845 7.43672C10.3755 7.36012 10.3755 7.36012 10.3485 7.31506C10.2719 7.32407 10.2539 7.32858 10.2494 7.41419C10.2268 7.43221 10.2268 7.44122 10.2358 7.45925C10.2313 7.45024 10.2223 7.44122 10.2223 7.43221C10.2133 7.42771 10.2133 7.42771 10.2133 7.42771C10.2088 7.43672 10.1998 7.44573 10.1998 7.45474C10.1953 7.45474 10.1908 7.45024 10.1863 7.45024C10.1818 7.41869 10.1818 7.41869 10.1728 7.40518C10.1457 7.40067 10.1187 7.41419 10.0962 7.39617C10.0691 7.40518 10.0691 7.40518 10.0511 7.40067C10.0466 7.37814 10.0556 7.36012 10.0511 7.33759C10.0556 7.32858 10.0556 7.32858 10.0871 7.30605C10.0871 7.30154 10.0871 7.29253 10.0871 7.28352L10.0736 7.27C10.1097 7.23395 10.1637 7.22945 10.1998 7.1934C10.1322 7.15735 10.0646 7.23395 9.99702 7.19791C9.99702 7.1934 9.99702 7.18889 9.99702 7.18439C10.0241 7.16186 10.0376 7.13032 10.0736 7.1168C10.0962 7.03119 10.0015 7.01767 9.96999 7.01316C9.94746 7.05372 9.94746 7.10328 9.9069 7.13482C9.9069 7.09878 9.90691 7.09878 9.88888 7.08976C9.88438 7.08976 9.87987 7.09427 9.87536 7.09878C9.87987 7.07174 9.88438 7.05372 9.9069 7.01316C9.88888 6.95909 9.8258 7.01316 9.79426 6.98162C9.77623 6.99514 9.74469 7.02218 9.73568 7.05372C9.73117 7.05372 9.72667 7.04921 9.72216 7.04471C9.72667 7.0402 9.72667 7.03569 9.73118 7.03119C9.72667 7.02668 9.72216 7.02668 9.71766 7.02218C9.70865 7.02668 9.70865 7.02668 9.66809 7.08976C9.66359 7.07625 9.66809 7.05372 9.66809 7.0402C9.66359 7.00866 9.65908 6.99965 9.63204 6.99063C9.60501 7.00415 9.60501 7.03569 9.59149 7.05822C9.58699 7.05372 9.58248 7.04921 9.57797 7.04921C9.56896 6.86447 9.42477 6.98162 9.42477 6.98613L9.39774 7.04921C9.39323 7.04471 9.39323 7.0402 9.38873 7.03569C9.37521 7.05372 9.37521 7.07625 9.36169 7.09427C9.35718 7.08526 9.35268 7.07625 9.35268 7.06723C9.34817 7.06273 9.34367 7.05822 9.34367 7.05372C9.33916 7.05372 9.33466 7.05822 9.33015 7.05822C9.33015 7.05822 9.33015 7.05822 9.31663 7.00866C9.29861 7.01316 9.2896 7.01316 9.25355 7.05822C9.24904 7.05372 9.24454 7.05372 9.24003 7.04921C9.24003 7.02218 9.26256 6.99514 9.25806 6.96811V6.9636V6.95909C9.24904 6.94558 9.22651 6.91854 9.19497 6.96811C9.18596 6.9636 9.16794 6.95909 9.15442 6.95909L9.14541 6.94107L9.12288 6.89601Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M5.46867 8.80647C5.52274 8.77042 5.55429 8.71185 5.59934 8.66679C5.63089 8.69382 5.65792 8.6037 5.68496 8.50908C5.68946 8.48655 5.69847 8.47303 5.70298 8.45952L5.80662 8.2928C5.81112 8.28829 5.81563 8.28379 5.82013 8.27928C5.91025 8.16663 6.01839 8.07651 6.0995 7.95486C6.104 7.95035 6.10851 7.94134 6.11752 7.91881C6.12653 7.88727 6.08598 7.88276 6.07246 7.86474C6.05444 7.84221 6.05444 7.8377 6.05444 7.77462C6.05444 7.77462 5.98235 7.77011 5.97333 7.7611C5.96883 7.76561 5.96432 7.76561 5.94179 7.78814C5.93278 7.79715 5.91926 7.80616 5.91025 7.81517C5.91025 7.81067 5.91025 7.80166 5.91025 7.79715C5.90124 7.79264 5.90124 7.79264 5.89673 7.77462C5.8742 7.77913 5.86069 7.80165 5.84266 7.81067C5.84266 7.81067 5.84266 7.81067 5.82013 7.70703C5.81563 7.70703 5.81112 7.70703 5.7931 7.74758C5.77057 7.74308 5.75705 7.72055 5.73002 7.72505L5.72551 7.72055C5.70298 7.73857 5.69397 7.76561 5.67144 7.78363C5.66693 7.77913 5.66243 7.77011 5.65792 7.76561C5.62638 7.79715 5.61737 7.80165 5.60385 7.80616V7.87375C5.59934 7.9909 5.59033 8.00442 5.5678 8.03596C5.53176 8.11707 5.53176 8.11707 5.4912 8.19817C5.48219 8.22972 5.48219 8.22972 5.45065 8.2928L5.42361 8.35137L5.40108 8.42347L5.3335 8.56315C5.338 8.56766 5.34251 8.56766 5.34701 8.57216C5.39207 8.56315 5.39207 8.56315 5.39207 8.56315C5.40108 8.60821 5.40108 8.60821 5.42361 8.60821L5.4146 8.68932C5.44164 8.72536 5.44164 8.72536 5.44164 8.77042C5.44614 8.80647 5.44614 8.81098 5.46867 8.80647Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.23005 8.05851C6.22554 8.05851 6.21653 8.05851 6.21202 8.05851C6.15795 8.15764 6.15795 8.15764 6.15795 8.16215H6.16696C6.15345 8.19369 6.14894 8.19369 6.13542 8.19819C6.13542 8.19819 6.13092 8.19369 6.12641 8.19369C6.1174 8.21171 6.1174 8.21171 6.10388 8.21622C6.10388 8.21622 6.09937 8.21171 6.09937 8.20721C6.11289 8.14863 6.14443 8.09906 6.16246 8.04499C6.16696 7.98642 6.17147 7.96389 6.14894 7.95037C6.08586 8.02697 6.08586 8.02697 6.07234 8.03148C6.06783 8.03148 6.06783 8.02697 6.06333 8.02697C6.0408 8.0495 6.01827 8.07203 5.99574 8.09456H5.98673C5.9687 8.11709 5.95519 8.13962 5.93716 8.16215C5.93716 8.16215 5.93716 8.16215 5.93266 8.16665C5.93266 8.16665 5.93266 8.16665 5.91013 8.18017C5.91013 8.18017 5.77946 8.33337 5.84704 8.36491C5.8155 8.40997 5.8155 8.40997 5.80199 8.41898C5.76594 8.45503 5.76594 8.50459 5.74341 8.54515C5.74791 8.56317 5.74791 8.56317 5.74341 8.57669L5.82451 8.54515C5.82451 8.54515 5.82902 8.54965 5.83353 8.54965C5.82451 8.57669 5.82001 8.58119 5.80649 8.59922C5.8155 8.62625 5.8155 8.62625 5.82902 8.62625C5.82902 8.62625 5.87408 8.59922 5.8921 8.5812C5.8921 8.5812 5.9642 8.53163 5.98222 8.53614C5.98673 8.53163 5.99123 8.52712 5.99574 8.52712C5.99123 8.53163 5.99123 8.53163 5.79748 8.70285C5.70736 8.77945 5.8155 8.85155 5.82451 8.85155L6.00475 8.79297C6.02277 8.78396 6.02728 8.78396 6.0408 8.77044L6.17597 8.76143C6.22103 8.76594 6.194 8.811 6.15795 8.83353C6.08135 8.8155 6.03629 8.8876 5.97321 8.89661C5.97321 8.89661 5.9687 8.8921 5.9687 8.8876C5.9642 8.8876 5.9642 8.8876 5.84254 8.95068C5.84254 8.95068 5.84254 8.95068 5.83803 8.95518C5.82001 8.98222 5.82001 8.98222 5.811 8.98222C5.811 8.98673 5.80649 8.99574 5.80649 9.00024C5.80649 9.00475 5.8155 9.24356 5.93266 9.194C5.9687 9.21653 5.9687 9.21653 5.97321 9.21653C5.98673 9.18949 5.98673 9.18949 5.99123 9.18499L5.99574 9.18949C6.01376 9.18499 6.02277 9.17597 6.0408 9.17597C6.09036 9.21202 6.0408 9.26609 6.04981 9.30665C6.06333 9.31566 6.07234 9.32016 6.08135 9.34269C6.09937 9.34269 6.09937 9.34269 6.10839 9.3472C6.15344 9.34269 6.18499 9.31115 6.22103 9.29763C6.22103 9.28412 6.22554 9.27961 6.25708 9.2706C6.30214 9.25708 6.33819 9.23455 6.3517 9.22554C6.3517 9.22554 6.4283 9.16696 6.57249 9.03629C6.59052 9.00024 6.59953 8.95518 6.62656 8.92364C6.63107 8.92364 6.64008 8.92364 6.64909 8.92364C6.65811 8.94167 6.64909 8.95969 6.64909 8.98222C6.64909 8.98222 6.67162 8.98222 6.71668 8.95969C6.74372 8.97771 6.75273 9.00926 6.77976 9.02728C6.83384 8.99123 6.90142 8.99574 6.95099 8.95518C6.99605 8.91914 7.0321 8.86957 7.0366 8.82902C7.00055 8.82451 7.01407 8.76594 6.97352 8.76594C6.9555 8.78396 6.94648 8.811 6.93297 8.83353C6.92846 8.82451 6.92846 8.82451 6.93747 8.78396C6.93297 8.77945 6.92395 8.77945 6.91945 8.77495C6.91945 8.77044 6.91494 8.77044 6.91494 8.76594C6.91945 8.76143 6.91945 8.76143 6.95099 8.76143C6.96 8.7344 6.94648 8.70736 6.96 8.68483C6.96901 8.66681 6.99154 8.67131 7.00055 8.6578C7.00506 8.6578 7.00957 8.6578 7.00957 8.6578C7.01407 8.67582 7.01407 8.67582 7.02759 8.67582C7.0321 8.67131 7.0366 8.66681 7.04111 8.6623C7.04111 8.6623 7.07715 8.6623 7.09518 8.6623C7.09968 8.65329 7.09968 8.64428 7.09968 8.60372C7.09968 8.54965 7.09968 8.54965 7.04111 8.53614C7.0321 8.52262 7.0321 8.50459 7.02308 8.49108C7.00055 8.51361 6.98704 8.5091 6.98253 8.5091C6.98253 8.5091 6.97352 8.47756 6.96 8.45954C6.95549 8.45954 6.94648 8.45954 6.94198 8.45954C6.93747 8.44602 6.92846 8.43701 6.92395 8.42349C6.90142 8.46404 6.90142 8.46404 6.89241 8.47305C6.89241 8.47305 6.89241 8.47305 6.84735 8.37843C6.83834 8.38294 6.82933 8.38744 6.82032 8.38744C6.78427 8.34238 6.83384 8.30634 6.83384 8.27029C6.83384 8.24325 6.83384 8.24325 6.8068 8.13511C6.78427 8.05401 6.78427 7.96839 6.76174 7.88729C6.79328 7.86926 6.86087 7.81069 6.84735 7.63045C6.83384 7.62594 6.82933 7.61243 6.81581 7.61243C6.79328 7.62144 6.77526 7.63946 6.75273 7.64397C6.72569 7.64847 6.68514 7.72507 6.68514 7.73409L6.74372 7.78816C6.74822 7.80618 6.74372 7.82871 6.74822 7.84673C6.74822 7.85124 6.74372 7.85124 6.73921 7.85575C6.72569 7.84673 6.72569 7.84673 6.68965 7.79266C6.68514 7.79266 6.68514 7.79266 6.68064 7.79266C6.67613 7.80618 6.67162 7.8197 6.66712 7.83322C6.64008 7.81069 6.64008 7.81069 6.63107 7.81069C6.63107 7.80618 6.62656 7.80618 6.62656 7.80167C6.58601 7.84673 6.58601 7.86926 6.577 8.0495C6.577 8.08104 6.60854 8.09906 6.60854 8.13061C6.60404 8.22523 6.60404 8.22523 6.60854 8.22973C6.61305 8.26128 6.56799 8.30183 6.56799 8.30183C6.56348 8.29732 6.55898 8.29282 6.55447 8.29282C6.55447 8.29282 6.53645 8.23875 6.53645 8.13511C6.53645 8.07203 6.53645 8.07203 6.47787 8.00444L6.47336 7.9729C6.46435 7.96839 6.46435 7.96839 6.41479 7.9774C6.41028 7.98642 6.41028 7.99092 6.40578 8.00895C6.45534 8.07203 6.45534 8.07203 6.44182 8.09005C6.43732 8.09005 6.4283 8.09005 6.4238 8.08555C6.40127 8.11709 6.40127 8.11709 6.39676 8.12159C6.39226 8.11709 6.38775 8.11709 6.38775 8.11258C6.33819 8.18918 6.33819 8.18918 6.32467 8.18918C6.36973 8.08104 6.36973 8.08104 6.32918 8.0495C6.32467 8.0495 6.32467 8.0495 6.32016 8.0495C6.32016 8.04499 6.32016 8.04499 6.31566 8.04049H6.30665C6.30665 8.04049 6.30214 8.03598 6.30214 8.03148C6.29313 8.03148 6.28862 8.02246 6.27961 8.02246C6.2751 8.02697 6.2706 8.02697 6.26609 8.03148C6.23906 8.06302 6.23455 8.05851 6.23005 8.05851Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.44671 5.99484L7.42869 5.98132H7.42418C7.42418 5.98132 7.39264 6.00385 7.39264 6.01286C7.38813 6.0399 7.37912 6.15705 7.38813 6.17508C7.39264 6.16606 7.39264 6.16607 7.39715 6.16156C7.40165 6.15705 7.40616 6.16156 7.41066 6.16156C7.41517 6.16156 7.41517 6.15705 7.41967 6.15705L7.4377 6.18409C7.42869 6.1931 7.41517 6.19761 7.40165 6.20662C7.40616 6.21563 7.41066 6.21112 7.41517 6.21112C7.41967 6.21112 7.41967 6.21563 7.41967 6.22014C7.41967 6.24717 7.42418 6.26069 7.42418 6.26069C7.42869 6.2697 7.4377 6.26519 7.44671 6.26069C7.44671 6.25618 7.47375 6.22014 7.47375 6.22014V6.22464V6.22915C7.47375 6.23365 7.48276 6.23816 7.48726 6.23365C7.50078 6.22464 7.50078 6.20662 7.50979 6.20211C7.53232 6.18859 7.53232 6.18859 7.53683 6.17958C7.55035 6.15705 7.55035 6.15705 7.55035 6.15255C7.55485 6.1165 7.55035 6.1165 7.54584 6.11199C7.54133 6.10749 7.53683 6.10749 7.55936 6.07144C7.55485 6.07144 7.55485 6.06243 7.55936 6.04891C7.55936 6.04441 7.55936 6.0399 7.55936 6.03539C7.55936 6.03539 7.55485 6.03089 7.5143 6.0399C7.5143 6.0399 7.5143 6.0399 7.50979 6.04891C7.49628 6.05342 7.50078 6.03089 7.50078 6.02188C7.50529 5.99484 7.49627 5.99484 7.49627 5.99484C7.49177 5.99484 7.48726 5.99935 7.48726 5.99935C7.48276 6.00385 7.47375 6.00836 7.46924 6.00836C7.46473 5.99484 7.45572 5.99935 7.44671 5.99484Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.52764 6.32378C7.53215 6.31928 7.54116 6.31477 7.54567 6.31027L7.55017 6.30576C7.56369 6.29224 7.56369 6.29224 7.56369 6.29224H7.59073C7.59523 6.28774 7.59523 6.28323 7.59974 6.27873C7.61326 6.27422 7.61326 6.27422 7.62227 6.26971C7.63579 6.2562 7.64029 6.22465 7.6448 6.21564C7.6448 6.21114 7.64029 6.1796 7.64029 6.17509C7.63579 6.17058 7.63128 6.1796 7.62677 6.1796C7.62227 6.1796 7.61776 6.1796 7.61326 6.1796C7.60875 6.1796 7.60875 6.18861 7.59974 6.1841C7.59523 6.1841 7.59523 6.1796 7.59523 6.1796H7.59073C7.56369 6.19311 7.55017 6.22465 7.52314 6.23817C7.51863 6.23367 7.51413 6.23367 7.51413 6.23367C7.50962 6.23367 7.50962 6.23817 7.50512 6.23817C7.50061 6.23817 7.4961 6.23817 7.4961 6.23817C7.4961 6.23817 7.46456 6.28774 7.46907 6.30126C7.46907 6.30576 7.48709 6.31928 7.48709 6.31928C7.4961 6.32378 7.4961 6.31477 7.50061 6.31027C7.50512 6.31477 7.50512 6.32378 7.50962 6.32829C7.50962 6.34631 7.50962 6.34631 7.52764 6.32378Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.83429 6.10754H7.82978C7.82978 6.10754 7.77571 6.13909 7.7622 6.16612C7.7622 6.17063 7.75769 6.17513 7.75769 6.18414C7.75769 6.20217 7.75769 6.20217 7.77121 6.2247C7.77571 6.23821 7.77571 6.24723 7.77121 6.25173C7.7667 6.25624 7.7667 6.26074 7.7667 6.26074L7.77571 6.27426L7.78473 6.26976C7.78473 6.26976 7.78923 6.25173 7.78923 6.24723C7.78923 6.23821 7.78923 6.23822 7.79374 6.23371C7.79824 6.24723 7.79824 6.24723 7.80275 6.24723C7.80275 6.24272 7.80275 6.23822 7.80726 6.23822C7.81176 6.23822 7.81176 6.24272 7.81176 6.24272C7.81627 6.24272 7.82077 6.24272 7.82978 6.24272C7.83429 6.24272 7.83429 6.24723 7.8388 6.24723H7.8433C7.85231 6.24272 7.85231 6.23371 7.85682 6.2292C7.85682 6.2247 7.86133 6.2247 7.86133 6.21118C7.86133 6.20217 7.86133 6.16161 7.85682 6.15711C7.85682 6.1526 7.85231 6.1526 7.84781 6.1481C7.8433 6.1481 7.8433 6.1481 7.8388 6.1481C7.8388 6.1481 7.82978 6.14359 7.82978 6.11656C7.8388 6.10754 7.8388 6.10754 7.83429 6.10754Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.82514 6.53112C7.82514 6.53563 7.82964 6.53563 7.83415 6.54014C7.84316 6.53563 7.85217 6.52662 7.86569 6.52211H7.87019H7.8747H7.87921C7.88822 6.51761 7.88822 6.51761 7.89272 6.5131C7.89272 6.50409 7.89272 6.49057 7.89272 6.48156C7.8747 6.47705 7.8747 6.47705 7.85217 6.48606C7.84767 6.48156 7.84767 6.48156 7.81612 6.46804C7.81162 6.45452 7.81162 6.45452 7.77107 6.41848C7.76656 6.41848 7.75755 6.42298 7.75304 6.42298C7.75304 6.42298 7.70348 6.44551 7.69897 6.45903C7.69446 6.47255 7.68996 6.48606 7.65842 6.48156C7.65391 6.49057 7.64941 6.49508 7.6449 6.50409C7.6449 6.49057 7.63589 6.45903 7.62688 6.45002C7.62688 6.45002 7.59533 6.4365 7.59083 6.44101L7.58632 6.44551C7.57281 6.45903 7.5683 6.45903 7.56379 6.45903C7.55929 6.45903 7.55478 6.45002 7.55028 6.45002C7.53676 6.45452 7.52775 6.45452 7.50972 6.45002C7.50522 6.45002 7.46917 6.46354 7.46466 6.46804C7.43312 6.49958 7.42862 6.51761 7.41961 6.55365C7.4151 6.56717 7.41961 6.59421 7.41961 6.59421C7.42411 6.60322 7.42862 6.59871 7.43763 6.60322C7.44213 6.60322 7.44213 6.60322 7.44213 6.60772C7.45565 6.62124 7.45565 6.62124 7.46917 6.61223C7.46917 6.61223 7.48719 6.59421 7.47368 6.63025C7.46917 6.64377 7.46917 6.64377 7.46917 6.64377C7.46917 6.64377 7.47368 6.64377 7.47818 6.64377H7.48269C7.48719 6.64377 7.48719 6.65278 7.4917 6.65278C7.4917 6.65278 7.50071 6.65278 7.50522 6.63927C7.50522 6.63476 7.50522 6.63476 7.50972 6.63476C7.51423 6.63927 7.51873 6.64377 7.52324 6.64828C7.52775 6.64828 7.52775 6.64377 7.53225 6.64377V6.64828C7.53676 6.65278 7.54126 6.65729 7.55028 6.66179C7.55478 6.66179 7.56379 6.65278 7.5683 6.66179L7.58632 6.65729C7.58632 6.65729 7.62237 6.62124 7.62237 6.61674C7.63138 6.59871 7.62688 6.5897 7.62237 6.57618C7.62237 6.57168 7.61786 6.56717 7.62237 6.56266C7.62688 6.55365 7.63138 6.54464 7.63589 6.54014C7.62688 6.57168 7.64039 6.60322 7.66292 6.65278C7.66743 6.65278 7.67194 6.64828 7.67644 6.64828C7.68095 6.65278 7.68095 6.65278 7.68545 6.66179C7.68996 6.67531 7.71249 6.67531 7.71249 6.69334C7.71699 6.72037 7.71699 6.72037 7.7215 6.7384C7.7215 6.7429 7.72601 6.75191 7.72601 6.75642C7.73051 6.77895 7.70798 6.79247 7.70348 6.81049C7.69446 6.84654 7.69446 6.85104 7.69897 6.85555L7.73502 6.97721C7.73952 6.97721 7.74403 6.97721 7.74854 6.97721C7.74854 6.98171 7.75304 6.98622 7.75304 6.99073C7.76656 7.00875 7.7981 7.00875 7.80711 6.97721C7.80711 6.9682 7.80711 6.96369 7.80711 6.95468L7.82063 6.94116C7.82514 6.9727 7.82514 6.9727 7.84767 6.99523L7.86569 6.99073C7.87019 6.99073 7.8747 6.98622 7.87921 6.98622C7.93328 6.95468 7.93328 6.95468 7.93328 6.95017C7.9513 6.92314 7.95581 6.8916 7.97834 6.86456C7.98284 6.86907 7.98284 6.86907 7.98735 6.91413C7.99185 6.92314 7.99636 6.93665 7.99636 6.94567C8.01438 6.93665 8.03241 6.92764 8.05043 6.91863C8.06845 6.90511 8.06845 6.87808 8.08648 6.86907C8.09098 6.87808 8.09098 6.87808 8.09549 6.88258C8.1045 6.88258 8.11351 6.87808 8.11802 6.86907L8.14055 6.86456C8.14956 6.85104 8.15857 6.83753 8.16758 6.82851C8.17209 6.82851 8.1766 6.83302 8.18561 6.83302C8.18561 6.83752 8.19011 6.83753 8.19462 6.83753C8.19913 6.82851 8.19913 6.82401 8.20363 6.815C8.20814 6.815 8.21264 6.81049 8.21715 6.81049C8.22616 6.815 8.22616 6.815 8.23517 6.81049L8.24418 6.79697C8.24869 6.79247 8.2577 6.78796 8.26221 6.78345C8.26671 6.78796 8.27122 6.79247 8.28023 6.79247C8.29375 6.78796 8.35683 6.72488 8.35683 6.72488C8.36584 6.70685 8.34782 6.69334 8.35233 6.67531C8.37035 6.67081 8.37486 6.67081 8.37486 6.69334C8.37486 6.72488 8.49651 6.68883 8.49651 6.68883C8.51904 6.65729 8.51904 6.65729 8.58663 6.59871C8.58663 6.57618 8.57762 6.55365 8.57762 6.53112C8.57312 6.49508 8.63169 6.50859 8.63169 6.47255L8.62268 6.46354C8.60916 6.46804 8.60916 6.46804 8.60466 6.46354C8.60466 6.45903 8.60015 6.45452 8.59564 6.45002C8.57762 6.42749 8.60015 6.40496 8.59564 6.37792C8.59114 6.33737 8.58663 6.33737 8.55059 6.35089C8.54157 6.33286 8.54157 6.33286 8.53707 6.32836C8.51454 6.33737 8.49651 6.34188 8.47399 6.35089C8.44244 6.33286 8.44244 6.33286 8.42442 6.33737H8.41991H8.41541H8.4109H8.4064H8.40189C8.40189 6.32385 8.40189 6.32385 8.39288 6.32385C8.37936 6.33286 8.37486 6.33737 8.37035 6.34188C8.36584 6.34188 8.36584 6.33737 8.36134 6.33737C8.36134 6.33737 8.32529 6.38243 8.31177 6.41848C8.29826 6.39595 8.29826 6.39595 8.29375 6.39595C8.28474 6.40045 8.28023 6.40496 8.26671 6.40045C8.26221 6.40496 8.2577 6.40496 8.2532 6.40946C8.23517 6.43199 8.23067 6.45903 8.21264 6.48156C8.19913 6.49958 8.1766 6.50859 8.16758 6.52662C8.1 6.54014 8.11802 6.57618 8.12703 6.58519C8.12253 6.59421 8.10901 6.59871 8.1 6.60322L8.09549 6.59871C8.08197 6.59421 8.06845 6.58519 8.05494 6.58069C8.0234 6.58519 8.00537 6.61674 7.97834 6.63025C7.97383 6.62575 7.96932 6.61674 7.96031 6.61223C7.95581 6.60772 7.93328 6.60772 7.93328 6.63476C7.91976 6.64377 7.92877 6.66179 7.92427 6.67531C7.90174 6.6663 7.90174 6.61674 7.90174 6.61223C7.90174 6.60772 7.90174 6.59421 7.88822 6.58519C7.8747 6.58069 7.87019 6.5897 7.86118 6.59421C7.85668 6.58519 7.86118 6.57618 7.86118 6.56717C7.84767 6.55816 7.84767 6.55816 7.81612 6.58519C7.81612 6.57618 7.81612 6.57618 7.82063 6.56266C7.80711 6.55365 7.80711 6.55816 7.7981 6.55816C7.81162 6.54014 7.81162 6.53563 7.82514 6.53112Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.06351 6.29225C7.06802 6.28774 7.07703 6.29225 7.08153 6.28774C7.08604 6.28323 7.08604 6.27422 7.09505 6.26972L7.1311 6.22916C7.1311 6.23817 7.12659 6.24719 7.1311 6.2562C7.1356 6.24719 7.14011 6.25169 7.14462 6.2562C7.14912 6.2562 7.15363 6.24719 7.15813 6.24268C7.18066 6.23817 7.17165 6.26521 7.17165 6.27873C7.18968 6.26972 7.18968 6.26972 7.18968 6.26521C7.2122 6.2562 7.2122 6.2607 7.2122 6.27873C7.21671 6.27873 7.21671 6.27873 7.21671 6.30576C7.21671 6.31027 7.21671 6.31027 7.22572 6.32829C7.23023 6.34181 7.23924 6.34632 7.24825 6.34181C7.26177 6.3373 7.26177 6.3373 7.26628 6.3328C7.27529 6.3373 7.29331 6.35082 7.32035 6.29225C7.32035 6.28774 7.32035 6.28774 7.32035 6.28323C7.31584 6.27873 7.31584 6.27873 7.32035 6.22916C7.32035 6.22466 7.32035 6.22466 7.31133 6.19762C7.30683 6.19762 7.30232 6.19312 7.30232 6.19312C7.29782 6.15256 7.29782 6.15256 7.30232 6.13904C7.31584 6.103 7.31584 6.103 7.31584 6.09849C7.31584 6.09399 7.31133 6.07596 7.29782 6.09399C7.29331 6.07596 7.29331 6.07146 7.29331 6.05794C7.29331 6.05343 7.29782 6.03991 7.29782 6.0309C7.29331 6.0309 7.29331 6.03541 7.28881 6.03541C7.2843 6.03541 7.2843 6.0309 7.27979 6.0309C7.27529 6.0309 7.27529 6.0309 7.27078 6.04442C7.26177 6.06244 7.26177 6.06244 7.25726 6.06244C7.24825 6.04442 7.25726 6.02189 7.24825 6.00387L7.24375 5.99936C7.24375 5.99486 7.24375 5.99486 7.24375 5.99035C7.23924 5.99035 7.22122 5.99486 7.22122 5.99486L7.21671 5.99035C7.2122 5.99035 7.18968 6.0309 7.18066 6.04893C7.17616 6.06244 7.17616 6.06244 7.17165 6.06244C7.17165 6.0309 7.18968 5.99936 7.18517 5.96782V5.96331C7.18066 5.95881 7.17165 5.95881 7.16715 5.9543C7.16264 5.9498 7.16264 5.94079 7.15813 5.93628C7.15363 5.94079 7.14912 5.94529 7.14462 5.9498C7.12659 5.96331 7.12659 5.96331 7.12209 5.95881C7.12209 5.95881 7.11758 5.95881 7.07252 5.98134C7.07252 5.98134 7.06351 5.98584 7.059 5.99486C7.04999 6.00837 7.02746 6.05343 7.03647 6.07596C7.04549 6.07596 7.04999 6.06695 7.059 6.06695L7.06802 6.07596C7.06802 6.07596 7.06351 6.09399 7.0545 6.09849C7.04999 6.103 7.04999 6.12102 7.04999 6.12553C7.059 6.12553 7.06802 6.12102 7.07252 6.11201C7.08153 6.08047 7.08153 6.08047 7.09055 6.07146C7.09505 6.07596 7.09956 6.06695 7.10406 6.06695C7.10406 6.07596 7.09505 6.08047 7.09505 6.08948C7.09055 6.09849 7.09505 6.11201 7.09505 6.12102C7.10406 6.11201 7.10857 6.11201 7.11307 6.11201C7.11307 6.12553 7.11308 6.14355 7.10857 6.15256V6.14355H7.10406C7.09055 6.15256 7.09055 6.15256 7.09055 6.15256C7.09055 6.15707 7.09055 6.15707 7.09055 6.15707C7.09505 6.15707 7.09505 6.15707 7.09956 6.15707C7.09956 6.16157 7.09505 6.18861 7.08604 6.1841L7.08153 6.18861C7.07252 6.1796 7.08153 6.16608 7.07252 6.15707C7.02296 6.20213 6.99592 6.23367 7.02746 6.27422C7.03647 6.27422 7.03197 6.28774 7.03647 6.29225C7.0545 6.30576 7.0545 6.30576 7.06351 6.29225Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.18526 6.35081C7.18526 6.3463 7.17625 6.3418 7.16724 6.3418C7.16273 6.3463 7.15372 6.3463 7.14922 6.35081C7.14021 6.35531 7.12669 6.37334 7.12669 6.37334L7.11768 6.39587V6.40037C7.11768 6.40037 7.11768 6.42741 7.12669 6.42741C7.13119 6.42741 7.13119 6.4229 7.1357 6.4229C7.14021 6.4229 7.14021 6.4229 7.14471 6.4229C7.14922 6.4229 7.14922 6.4229 7.14922 6.4229C7.15372 6.42741 7.15372 6.42741 7.15372 6.42741C7.15823 6.4229 7.16724 6.4229 7.17175 6.4229C7.18076 6.4184 7.18526 6.41389 7.18977 6.40939L7.19428 6.40488V6.38235C7.19428 6.36883 7.18977 6.35531 7.18526 6.35081Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.52779 8.60378C7.5323 8.60828 7.5368 8.60828 7.54131 8.59927C7.55032 8.58575 7.56835 8.52267 7.55032 8.51817C7.55032 8.51817 7.51428 8.50915 7.50076 8.51817C7.45119 8.55872 7.45119 8.55872 7.44669 8.55872C7.44218 8.55421 7.44218 8.55421 7.44218 8.55421C7.43317 8.55872 7.43317 8.58575 7.41515 8.57674C7.39712 8.56773 7.40163 8.54971 7.39262 8.53619L7.33855 8.52718C7.33855 8.52718 7.32503 8.53168 7.31602 8.53168C7.29349 8.54069 7.27546 8.63532 7.28447 8.66235C7.28898 8.67587 7.27997 8.6984 7.27997 8.6984C7.27546 8.70741 7.27096 8.71192 7.26645 8.71642C7.26195 8.72544 7.26195 8.73445 7.26195 8.74346C7.26195 8.74797 7.25744 8.75247 7.25744 8.75247C7.25744 8.75247 7.23942 8.76599 7.2304 8.76148C7.21689 8.75698 7.20337 8.77951 7.20337 8.77951C7.19436 8.80204 7.20787 8.82457 7.20337 8.8471C7.21689 8.8471 7.25744 8.84259 7.27546 8.82006C7.28447 8.81105 7.28447 8.81105 7.28447 8.81105C7.28898 8.82457 7.27096 8.84259 7.28447 8.8516C7.3025 8.86512 7.31602 8.84259 7.32953 8.84259C7.39262 8.84259 7.39262 8.84259 7.40613 8.83358C7.41064 8.82907 7.41064 8.82907 7.41515 8.82907C7.42866 8.83808 7.44218 8.8471 7.44669 8.8471C7.45119 8.8471 7.4557 8.84259 7.46471 8.84259C7.46922 8.84259 7.47372 8.8471 7.48273 8.8471H7.48724C7.49625 8.8471 7.49625 8.84259 7.50076 8.83808C7.50076 8.83808 7.51878 8.82006 7.51878 8.80654C7.52329 8.78401 7.52329 8.77951 7.52779 8.77951C7.52779 8.77951 7.56384 8.73445 7.57285 8.73445C7.57736 8.72093 7.57736 8.72093 7.58637 8.72093L7.57736 8.68038C7.56835 8.67137 7.55933 8.68038 7.55032 8.68038C7.55032 8.67587 7.54582 8.66235 7.54131 8.65785L7.50076 8.64433C7.49625 8.62631 7.49175 8.60828 7.48724 8.59026V8.58575C7.48724 8.57224 7.50526 8.57224 7.50977 8.56322C7.51428 8.58125 7.51878 8.59477 7.52779 8.60378Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.32062 7.34204C7.31161 7.34655 7.3116 7.34655 7.30259 7.35105C7.27105 7.36457 7.27105 7.42315 7.22599 7.40963C7.22599 7.40963 7.20346 7.44117 7.20797 7.45469C7.21248 7.45469 7.22149 7.45469 7.22599 7.45919C7.24402 7.50876 7.20346 7.50876 7.18093 7.47271C7.17643 7.46821 7.17192 7.45469 7.1539 7.45919C7.14489 7.48172 7.14489 7.48172 7.14489 7.48623C7.14939 7.49074 7.13137 7.51327 7.13137 7.51327C7.12686 7.51777 7.12686 7.51777 7.10433 7.50876C7.0818 7.53129 7.0818 7.53129 7.0818 7.5403C7.0773 7.58085 7.0773 7.58085 7.06829 7.58987L7.06378 7.58536C7.05026 7.58536 7.04576 7.58987 7.02773 7.65295V7.65745C7.03224 7.65745 7.03224 7.65295 7.03675 7.65295C7.05026 7.67097 7.04125 7.6935 7.05026 7.71152C7.10884 7.70702 7.10884 7.70702 7.10884 7.70702C7.10884 7.70702 7.14489 7.74307 7.10433 7.74757C7.09082 7.7656 7.11335 7.77911 7.11335 7.79714C7.11335 7.81065 7.09532 7.80615 7.08631 7.81516C7.0773 7.83318 7.06378 7.85121 7.05927 7.85121C7.05477 7.85571 7.05026 7.85571 7.04576 7.85571C7.04576 7.85571 7.04125 7.85121 7.03675 7.8422C7.02773 7.81967 6.99619 7.7656 6.99169 7.75658C6.99169 7.76109 6.99169 7.76109 6.98267 7.7656C6.98267 7.7656 6.91509 7.82417 6.93311 7.88726C6.93311 7.88726 6.94663 7.9188 6.94663 7.9233L6.95113 7.92781C6.96015 7.93682 6.96916 7.94583 6.97817 7.95484C6.98718 7.96386 6.97817 7.97737 6.98718 7.98638C7.00971 7.9999 7.01872 7.96385 7.04125 7.96836C7.04125 7.9954 7.04125 7.9954 7.04576 7.9954C7.05026 7.9954 7.05026 7.9954 7.05477 7.98638C7.09532 7.98638 7.08631 8.03595 7.11335 8.04947C7.12236 8.04496 7.12236 8.04496 7.12686 8.04496C7.13588 8.05397 7.14038 8.06749 7.14939 8.072C7.18093 8.09453 7.18093 8.10804 7.18995 8.14409C7.19445 8.17113 7.20797 8.17563 7.21698 8.17563C7.2305 8.18014 7.235 8.15761 7.24402 8.15761C7.24852 8.16211 7.24852 8.16211 7.24852 8.16662C7.28006 8.09903 7.28006 8.09903 7.28006 8.08551C7.27556 8.06298 7.235 8.02694 7.26655 8.01793H7.27105C7.28908 8.0765 7.28908 8.0765 7.29809 8.08101C7.30259 8.05397 7.32062 8.04496 7.32062 8.04496C7.32963 8.04046 7.34765 8.02694 7.34765 8.02694C7.35216 8.02243 7.35216 8.02243 7.36117 7.99089C7.36568 7.97287 7.38821 7.97287 7.39271 7.95484C7.39271 7.95484 7.40623 7.88275 7.38821 7.8467C7.37469 7.81065 7.39722 7.78362 7.40172 7.75208C7.40623 7.71152 7.38821 7.71152 7.3837 7.70702C7.37919 7.70702 7.37018 7.70251 7.37469 7.6935C7.37919 7.66647 7.39722 7.64394 7.39271 7.6169C7.39271 7.6124 7.39271 7.61239 7.3837 7.59888C7.34765 7.59437 7.32963 7.64844 7.34315 7.67097C7.34765 7.67097 7.35216 7.66647 7.35666 7.66647C7.36568 7.6935 7.36568 7.69801 7.33864 7.72054H7.33413C7.31611 7.65295 7.31611 7.65295 7.29358 7.63943C7.28908 7.64844 7.24852 7.70251 7.24852 7.70251L7.24402 7.69801C7.24852 7.6935 7.24852 7.6935 7.25303 7.67998C7.25753 7.66647 7.26204 7.65295 7.26655 7.63943C7.27105 7.63042 7.27105 7.62141 7.27556 7.61239C7.28006 7.60789 7.28006 7.60789 7.30259 7.57184C7.31611 7.55382 7.3116 7.52228 7.32512 7.50425H7.33413C7.36568 7.44117 7.32512 7.41864 7.31611 7.41414C7.29809 7.42315 7.29809 7.42315 7.28908 7.41864C7.32963 7.37358 7.32512 7.36006 7.32062 7.34204Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.15376 6.77894C7.15826 6.77894 7.18079 6.76543 7.1898 6.79697C7.19881 6.8195 7.19881 6.8195 7.19881 6.83752C7.19881 6.85104 7.19881 6.85554 7.21233 6.86005C7.21233 6.86906 7.21233 6.86906 7.21233 6.87807C7.20783 6.87807 7.20332 6.87807 7.18079 6.86456C7.17178 6.86005 7.17178 6.85104 7.16277 6.84203V6.83301C7.14474 6.82851 7.13573 6.77894 7.13573 6.77894C7.13573 6.77444 7.13573 6.77444 7.13123 6.76993C7.12672 6.77444 7.12672 6.78345 7.11771 6.78345C7.1087 6.78345 7.10419 6.77444 7.09518 6.77444C7.09518 6.77444 7.0321 6.83752 7.08617 6.9006C7.09518 6.9006 7.09518 6.9006 7.09968 6.9006C7.09968 6.93214 7.09968 6.93214 7.1132 6.94566C7.12221 6.95467 7.12672 6.95918 7.12221 6.96369L7.09518 6.9727C7.09067 6.9727 7.09067 6.9727 7.08617 6.95017H7.08166C7.06814 6.95467 7.06814 6.94566 7.07715 6.90961C7.06364 6.92313 7.05913 6.92313 7.05463 6.91863H7.05012C7.05012 6.91412 7.05012 6.91412 7.04561 6.90961C7.04561 6.87807 7.0366 6.83752 7.0366 6.83752C7.0321 6.82851 7.01858 6.83752 7.01407 6.82851C7.00957 6.8195 7.01858 6.81049 7.01407 6.80147H7.00957H7.00506C7.00055 6.79246 6.99605 6.78345 6.99154 6.77444C6.98704 6.76543 6.94198 6.78345 6.93297 6.80147C6.93297 6.80598 6.93297 6.81048 6.93297 6.81048C6.92846 6.84203 6.92846 6.84203 6.93747 6.88258C6.94648 6.91863 6.91044 6.94566 6.91494 6.98171C6.91945 6.9772 6.92395 6.9727 6.92846 6.96819C6.93747 6.96819 6.9555 6.95467 6.96451 6.94566C6.97352 6.96819 6.96 6.98622 6.96 7.00424C6.96901 6.99072 6.96901 6.99072 6.97352 6.98622C6.97352 6.99523 6.97352 7.00424 6.97803 7.01325C6.98253 7.01325 6.99154 7.00874 6.99605 7.00874C7.00055 7.00424 7.00055 7.00424 7.00506 7.00424C7.00957 7.00874 7.01407 7.01325 7.01407 7.01776C7.01407 7.04029 7.00506 7.05831 7.00055 7.08084L7.00506 7.08535C7.00957 7.08535 7.0321 7.08084 7.04111 7.08084C7.05012 7.0493 7.05012 7.0493 7.07265 7.03127C7.07715 7.03578 7.07715 7.04029 7.08617 7.04479C7.08617 7.04479 7.12221 7.03578 7.12221 7.03127C7.13573 7.02226 7.13573 7.00424 7.14474 6.99523C7.15375 6.98622 7.16727 6.98171 7.17628 6.9727C7.17628 6.9727 7.18079 6.96819 7.1853 6.96819C7.1853 6.9727 7.1853 6.9727 7.15826 7.01776C7.14024 7.05831 7.14024 7.05831 7.14925 7.08535C7.14925 7.08985 7.15375 7.09436 7.14474 7.1304C7.14474 7.14392 7.14474 7.16195 7.14474 7.17546C7.18079 7.17546 7.19431 7.16645 7.19881 7.16645C7.23486 7.1304 7.23486 7.1304 7.25739 7.1304C7.29344 7.16195 7.3385 7.04029 7.3385 7.02226V7.02677C7.33399 7.02226 7.3385 7.01776 7.33399 7.01325C7.32949 7.02226 7.32498 7.02677 7.32047 7.01776C7.32047 7.01776 7.32498 6.96369 7.32949 6.95918C7.33399 6.96819 7.33399 6.96819 7.343 6.95918C7.34751 6.96819 7.343 6.98171 7.35201 6.99072C7.35652 6.99072 7.37004 6.98622 7.36553 6.95918C7.36103 6.92764 7.36103 6.92764 7.37004 6.90511V6.9006C7.36553 6.8961 7.36103 6.89159 7.35652 6.87357C7.34751 6.86005 7.34751 6.86005 7.36103 6.72487C7.35652 6.72487 7.35652 6.72487 7.36103 6.65728L7.35652 6.65278C7.343 6.65728 7.343 6.65278 7.3385 6.64377C7.32498 6.64377 7.32498 6.64377 7.32047 6.63025H7.31597C7.31597 6.63025 7.28893 6.64827 7.27992 6.6708C7.27541 6.68432 7.25739 6.68883 7.25739 6.68883C7.25288 6.68432 7.24838 6.68883 7.24387 6.68432C7.24387 6.68432 7.24387 6.67981 7.24387 6.6708C7.24838 6.63025 7.24838 6.63025 7.24838 6.63025C7.23937 6.63025 7.23937 6.64377 7.23036 6.63926V6.63476C7.22134 6.64827 7.23036 6.67981 7.21233 6.67531C7.20783 6.6708 7.20783 6.6663 7.20783 6.66179C7.18079 6.66179 7.1853 6.68883 7.17178 6.70234H7.16727C7.17178 6.67531 7.17178 6.67531 7.17178 6.67531C7.17178 6.67531 7.11771 6.71136 7.13123 6.7474C7.15826 6.73839 7.15826 6.73839 7.15376 6.77894Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.43323 6.91858C7.43774 6.90957 7.44224 6.90957 7.44675 6.90506L7.45126 6.90056L7.45576 6.87352C7.44224 6.86001 7.43774 6.86001 7.43323 6.86451C7.42422 6.86902 7.41971 6.88253 7.41521 6.88704C7.4107 6.89155 7.40169 6.89605 7.39268 6.90506L7.38817 6.90957V6.91408L7.38367 6.9321C7.38367 6.9321 7.38817 6.94562 7.39268 6.94562H7.39718C7.40169 6.94562 7.4062 6.95012 7.4107 6.94562C7.4107 6.94562 7.4107 6.94562 7.41521 6.93661C7.42873 6.92309 7.42873 6.92309 7.43323 6.91858Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.57276 6.82848C7.57276 6.82848 7.56374 6.81947 7.56374 6.82848C7.56374 6.83299 7.56374 6.83299 7.54572 6.82848H7.54121L7.53671 6.82397C7.5322 6.82397 7.5277 6.83299 7.52319 6.83299C7.51869 6.83749 7.50967 6.83299 7.50517 6.83299C7.50066 6.83299 7.50066 6.83299 7.49165 6.86002C7.48714 6.86903 7.48714 6.87805 7.48264 6.88706C7.46912 6.9186 7.46912 6.9186 7.46011 6.92761C7.46011 6.92761 7.4556 6.92761 7.4556 6.93662L7.42857 6.9997L7.41956 7.04476C7.41956 7.05378 7.44209 7.0718 7.44209 7.0718V7.06729H7.44659C7.46011 7.0718 7.46912 7.08081 7.48264 7.08532C7.50517 7.08982 7.5277 7.08532 7.54572 7.09883C7.54572 7.09883 7.55473 7.10334 7.55924 7.10334L7.58627 7.09433C7.59078 7.08982 7.59529 7.08081 7.6043 7.07631C7.6088 7.0718 7.61331 7.07631 7.61781 7.07631C7.62683 7.0718 7.62683 7.0718 7.64034 6.9952C7.64034 6.98619 7.63584 6.97267 7.63584 6.97267V6.97717C7.62683 6.94563 7.62683 6.90959 7.61781 6.87354C7.61781 6.86903 7.6088 6.86453 7.6043 6.86002C7.58627 6.85552 7.58177 6.842 7.57276 6.82848Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.4647 7.17989C7.46921 7.17989 7.46921 7.17989 7.47371 7.17539C7.47822 7.17539 7.47822 7.17539 7.48272 7.17088H7.48723C7.48723 7.17088 7.48723 7.17088 7.49174 7.16638C7.49174 7.15736 7.49174 7.14835 7.49174 7.13483V7.12582V7.12132C7.48723 7.11231 7.48272 7.1123 7.47822 7.1123C7.47371 7.11681 7.46921 7.12582 7.46921 7.13033V7.13483H7.4647C7.4647 7.13483 7.4647 7.13483 7.4647 7.13934C7.4647 7.14385 7.4647 7.15286 7.46019 7.15736C7.46019 7.16187 7.45569 7.16187 7.45569 7.16638C7.45569 7.16638 7.45569 7.17088 7.46921 7.17088C7.4647 7.16638 7.4647 7.17088 7.4647 7.17989Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M7.55047 6.7699C7.55498 6.7699 7.55498 6.7699 7.55948 6.7699L7.56399 6.7654V6.76089C7.56399 6.75638 7.55948 6.75638 7.55948 6.75188C7.55948 6.74737 7.55948 6.74737 7.55498 6.74287C7.55047 6.73385 7.54597 6.72034 7.54597 6.72034C7.54146 6.72034 7.53696 6.72484 7.53245 6.72484C7.52344 6.72935 7.52344 6.76089 7.52344 6.76089L7.53245 6.77441H7.53696C7.53696 6.77441 7.53696 6.77441 7.54146 6.77441C7.54597 6.77891 7.55047 6.77441 7.55047 6.7699Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.59961 7.0177C6.62214 7.02671 6.61313 7.04924 6.62214 7.06276C6.60862 7.0943 6.56807 7.10781 6.56807 7.14837C6.58609 7.15287 6.58609 7.15287 6.5906 7.16189C6.59961 7.16189 6.61313 7.16189 6.61763 7.1754C6.61763 7.1754 6.5951 7.24299 6.57257 7.22046C6.53653 7.252 6.53653 7.252 6.53202 7.2475C6.53202 7.23849 6.53653 7.23398 6.53653 7.22497C6.53202 7.22497 6.52301 7.22947 6.5185 7.22497C6.5185 7.22497 6.49597 7.2475 6.48246 7.252C6.48246 7.22497 6.49597 7.19793 6.50048 7.1709C6.50048 7.16188 6.49147 7.15738 6.48696 7.15287C6.48246 7.15287 6.45993 7.14837 6.45993 7.10781C6.45542 7.10331 6.44641 7.10781 6.4419 7.10331C6.4374 7.08979 6.4419 7.07627 6.43289 7.06276C6.42388 7.06726 6.41036 7.06276 6.40135 7.07627C6.38783 7.08078 6.37882 7.08979 6.36981 7.0943C6.36981 7.06276 6.39234 7.03121 6.37432 6.99967C6.37432 6.99967 6.32475 7.03121 6.31574 7.03572C6.2842 7.06726 6.26167 7.11683 6.26167 7.11683C6.26167 7.12584 6.26167 7.12584 6.31574 7.12584C6.31123 7.13034 6.31123 7.13034 6.26617 7.13936C6.26167 7.13936 6.26167 7.13936 6.24364 7.13485C6.23013 7.13936 6.17606 7.21596 6.2121 7.23849C6.24364 7.22497 6.25716 7.21596 6.26167 7.20694C6.27068 7.19343 6.27969 7.19343 6.2842 7.20244C6.29771 7.22947 6.18957 7.25651 6.18957 7.252C6.17606 7.26101 6.1355 7.31509 6.1355 7.34212C6.15803 7.35113 6.17155 7.35564 6.2121 7.31509C6.22111 7.30607 6.22562 7.30157 6.23914 7.30607C6.19859 7.34663 6.19859 7.34663 6.19408 7.35113C6.17606 7.37366 6.17606 7.37366 6.16704 7.37817C6.15353 7.36465 6.1355 7.37366 6.12198 7.36916C6.08594 7.44576 6.08594 7.44576 6.08594 7.47279H6.09044H6.09495L6.09946 7.4773C6.09946 7.4818 6.09946 7.48631 6.09946 7.49082C6.12649 7.49532 6.12198 7.45477 6.14902 7.45927C6.14902 7.50433 6.14902 7.50433 6.15803 7.50884C6.15803 7.50884 6.17155 7.49532 6.18957 7.4773C6.18957 7.4818 6.19408 7.4818 6.18957 7.49983L6.19408 7.50433C6.22562 7.49532 6.23013 7.49532 6.23463 7.49983C6.25716 7.4773 6.25266 7.44576 6.26617 7.41872C6.27519 7.42773 6.27519 7.42773 6.27519 7.42773C6.2842 7.40971 6.2887 7.38718 6.29321 7.36465H6.29771C6.31123 7.37817 6.31123 7.37817 6.2842 7.44576C6.26617 7.49082 6.30222 7.48631 6.30222 7.48631C6.31123 7.46829 6.29771 7.44125 6.32024 7.42773C6.34728 7.44125 6.35629 7.4007 6.37432 7.39169C6.37882 7.4007 6.38783 7.40971 6.39234 7.41872C6.39234 7.41872 6.39234 7.41872 6.42388 7.37817L6.42839 7.38267C6.46894 7.33761 6.46894 7.33762 6.47345 7.33311C6.46894 7.36916 6.41036 7.43674 6.38783 7.44125C6.31574 7.45026 6.2121 7.60797 6.2121 7.60797C6.22562 7.61247 6.22562 7.6305 6.23914 7.62599C6.24815 7.635 6.24815 7.65303 6.26167 7.65753C6.27519 7.66204 6.29321 7.65303 6.29771 7.64852C6.35629 7.61698 6.35629 7.61698 6.45092 7.50884C6.45993 7.49983 6.46894 7.4818 6.47345 7.47279L6.47795 7.4773C6.47795 7.4773 6.48246 7.47279 6.48696 7.47279V7.4773C6.50048 7.46829 6.5185 7.46378 6.53202 7.45026C6.54554 7.43224 6.55005 7.40971 6.56807 7.39619C6.56807 7.4007 6.56807 7.4052 6.56807 7.4052C6.58609 7.36916 6.61313 7.38267 6.63115 7.39619C6.64016 7.38267 6.64467 7.36916 6.65368 7.35564C6.65819 7.34663 6.65819 7.34663 6.6672 7.38718C6.72578 7.36014 6.72578 7.36014 6.73479 7.35113C6.7483 7.33311 6.76182 7.31959 6.77534 7.30157C6.78886 7.28354 6.78435 7.25651 6.79787 7.23398C6.81589 7.20244 6.81589 7.16189 6.8249 7.13034V7.13485C6.83392 7.11232 6.83842 7.10781 6.84743 7.07177C6.85194 7.05374 6.85645 7.02671 6.84293 7.00868C6.8249 7.00418 6.8249 7.00418 6.8204 6.99967C6.80688 7.00868 6.79336 7.00868 6.78435 7.0222C6.77083 7.04023 6.77083 7.06276 6.76182 7.07627C6.75732 7.06726 6.75281 7.06276 6.7483 7.05374C6.73028 7.06726 6.72127 7.08979 6.69874 7.0988C6.71226 7.07627 6.72127 7.06276 6.72578 7.04473C6.72127 7.04473 6.72127 7.03572 6.71676 7.03572C6.68973 7.03121 6.68973 7.03121 6.68973 7.02671C6.68522 7.00868 6.70325 6.99967 6.70325 6.98616C6.70325 6.97264 6.70325 6.95912 6.70325 6.9456C6.70325 6.90054 6.73479 6.85999 6.72127 6.81042C6.71676 6.81042 6.69423 6.81493 6.69423 6.81493C6.6717 6.82845 6.57257 7.00418 6.58609 7.03572C6.5906 7.02671 6.5951 7.0222 6.59961 7.0177Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.09942 7.33311C6.11744 7.31058 6.15799 7.21596 6.15799 7.21596C6.1625 7.19793 6.15799 7.18442 6.14448 7.1709C6.14448 7.17991 6.14448 7.17991 6.14448 7.17991C6.13997 7.18442 6.13546 7.18442 6.13546 7.18892C6.12645 7.20244 6.11744 7.22046 6.10843 7.23398C6.10843 7.23849 6.10392 7.23849 6.09491 7.252C6.03633 7.3241 6.02282 7.36465 6.01831 7.36465C6.01831 7.36916 6.02732 7.4007 6.02732 7.4007C6.03183 7.39619 6.03183 7.39619 6.03633 7.39619C6.05436 7.4007 6.0859 7.35113 6.09942 7.33311Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M5.92362 7.28358C5.92813 7.28809 5.92813 7.2971 5.93263 7.2971C5.94165 7.2926 5.94164 7.2926 5.94615 7.2926L5.95066 7.2971C5.95066 7.30161 5.95066 7.30611 5.95066 7.30611L5.95516 7.31062C5.95967 7.30611 5.96417 7.30161 5.97319 7.27908C5.97769 7.26556 5.9822 7.24754 5.9867 7.23402V7.23853C5.99121 7.23853 5.99121 7.23853 5.99572 7.23402C6.00022 7.26556 5.96868 7.2926 5.9822 7.32864C5.99572 7.32864 6.03627 7.2926 6.05429 7.25204H6.04979C6.04979 7.24303 6.04979 7.23853 6.0588 7.21149H6.0633C6.07682 7.23402 6.07682 7.23402 6.07682 7.23402C6.07682 7.22501 6.11287 7.16193 6.11738 7.16193C6.11738 7.16193 6.11738 7.16193 6.12188 7.16193C6.13089 7.15291 6.1399 7.13489 6.1399 7.10785L6.18496 7.02224C6.18947 7.01323 6.18947 7.01323 6.19398 7.00873C6.22101 7.0628 6.15342 7.09884 6.17595 7.15291C6.18496 7.17094 6.212 7.13489 6.212 7.13489C6.23002 7.11236 6.23453 7.08082 6.24805 7.05378C6.27058 7.04928 6.28409 7.04928 6.31113 6.99521C6.31563 6.98169 6.31563 6.96817 6.31563 6.95015C6.31563 6.93663 6.33366 6.92762 6.33816 6.90959C6.33816 6.90509 6.33816 6.90509 6.33816 6.86003C6.34267 6.86003 6.38773 6.81047 6.40125 6.78343C6.41026 6.7609 6.40125 6.72936 6.39674 6.72485C6.38773 6.72485 6.38773 6.72485 6.38322 6.72485C6.34718 6.73837 6.34718 6.73837 6.33816 6.73837C6.32465 6.7609 6.31563 6.78794 6.30212 6.81047C6.29311 6.81047 6.29311 6.80145 6.28409 6.80145C6.26607 6.80145 6.24805 6.81497 6.23002 6.81497L6.2165 6.81948C6.15793 6.87355 6.13089 6.94564 6.08133 7.00873L6.08583 7.00422C5.9867 7.1394 5.97769 7.1439 5.96868 7.1439C5.94165 7.15291 5.93263 7.15291 5.89208 7.24303V7.24754H5.89659C5.90109 7.25204 5.90109 7.25655 5.88307 7.2926C5.88307 7.2926 5.86504 7.32864 5.87856 7.34216C5.89208 7.31513 5.90109 7.2926 5.92362 7.28358Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M5.96852 7.2655V7.26991L5.96411 7.27433V7.28315L5.96852 7.2655Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.39687 6.96819L6.41038 6.96369C6.41489 6.95918 6.41939 6.95467 6.4239 6.95017C6.42841 6.95017 6.42841 6.95467 6.43291 6.95017C6.43291 6.95017 6.43742 6.95017 6.45094 6.91863C6.45094 6.90962 6.45544 6.9006 6.45544 6.89159C6.44192 6.88709 6.43742 6.88708 6.43291 6.88708L6.42841 6.89159C6.4239 6.89159 6.41939 6.9006 6.41489 6.9006C6.41038 6.9006 6.40588 6.9006 6.40137 6.9006C6.39687 6.9006 6.39687 6.90511 6.39236 6.90961C6.39236 6.90961 6.36983 6.94116 6.38335 6.96369H6.38785C6.39236 6.96369 6.39236 6.95918 6.39687 6.95918C6.39236 6.96369 6.39236 6.96819 6.39687 6.96819Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.46455 6.63475C6.48708 6.62574 6.49159 6.63475 6.4961 6.63926C6.4961 6.64376 6.5006 6.63475 6.50511 6.63475C6.50961 6.63025 6.51412 6.62124 6.51862 6.61673C6.52313 6.61222 6.52764 6.60772 6.52764 6.60321C6.52764 6.60321 6.53214 6.59871 6.53214 6.58969C6.53665 6.58068 6.53665 6.57618 6.53665 6.57618C6.53214 6.56266 6.53214 6.56266 6.53214 6.56266L6.52764 6.55815C6.52313 6.54914 6.52313 6.54013 6.52313 6.53112C6.52313 6.52661 6.51862 6.52661 6.51862 6.52661C6.51412 6.52661 6.50961 6.53112 6.50511 6.53562C6.48708 6.55365 6.48708 6.55365 6.48258 6.56716C6.47807 6.57618 6.47807 6.57618 6.47807 6.58068L6.47357 6.58519C6.47357 6.58969 6.46906 6.60321 6.46455 6.60772C6.45554 6.63926 6.46005 6.63475 6.46455 6.63475Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.51397 6.7067C6.51847 6.7112 6.51847 6.7112 6.54551 6.7067C6.55902 6.70219 6.55001 6.72472 6.55452 6.72923L6.57254 6.72021L6.58606 6.7067C6.59057 6.70219 6.59958 6.69769 6.60859 6.69318H6.6131C6.62661 6.69318 6.62661 6.67516 6.63562 6.67065C6.64464 6.66614 6.65815 6.65713 6.66717 6.65263C6.66717 6.65263 6.68519 6.63911 6.6942 6.61658C6.69871 6.60306 6.69871 6.58954 6.70321 6.57603V6.558C6.69871 6.5535 6.6897 6.54899 6.68519 6.54449C6.6942 6.52646 6.69871 6.51294 6.70772 6.51294C6.71223 6.51294 6.71223 6.49943 6.72124 6.50393C6.72574 6.50844 6.73025 6.50844 6.73475 6.50393C6.74377 6.49492 6.75278 6.4769 6.75728 6.46789V6.46338C6.73926 6.4769 6.72124 6.46338 6.70321 6.46789C6.6942 6.47239 6.6942 6.47239 6.66717 6.49041C6.65815 6.49943 6.65365 6.51294 6.64013 6.51745C6.63112 6.52196 6.63562 6.50393 6.62661 6.49943L6.59958 6.52646C6.59057 6.53547 6.57705 6.53998 6.57254 6.54899L6.55452 6.57603C6.55452 6.57603 6.54551 6.58954 6.51397 6.68867C6.50946 6.70219 6.51397 6.7067 6.51397 6.7067Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.59941 6.44545C6.60392 6.44095 6.60842 6.44545 6.61743 6.44996C6.62645 6.44095 6.63095 6.43193 6.63996 6.42292C6.63996 6.42292 6.64897 6.41391 6.65348 6.41391L6.65799 6.41842H6.66249C6.6715 6.42743 6.6715 6.42743 6.6715 6.43193C6.6715 6.43644 6.6715 6.44095 6.67601 6.44095C6.69403 6.43193 6.68953 6.41391 6.69854 6.4049C6.69854 6.4049 6.69854 6.4049 6.71206 6.39589C6.71206 6.40039 6.71206 6.4049 6.71206 6.4049C6.71206 6.4049 6.71656 6.40941 6.72107 6.40941C6.73008 6.40941 6.73459 6.40039 6.7436 6.40039C6.75261 6.40039 6.75712 6.41391 6.76613 6.4049C6.78866 6.39138 6.79767 6.37786 6.81119 6.34182C6.81569 6.3283 6.8202 6.30577 6.8202 6.29676C6.8202 6.29676 6.81569 6.27873 6.80668 6.26972C6.79767 6.2517 6.79767 6.2517 6.79767 6.24719C6.78866 6.24719 6.78415 6.2517 6.77514 6.2562C6.75712 6.26522 6.71656 6.31929 6.71656 6.32379C6.68953 6.35984 6.6715 6.36435 6.6715 6.36435C6.6715 6.36435 6.6715 6.36435 6.667 6.36435C6.66249 6.36885 6.65799 6.36885 6.65348 6.37336C6.65348 6.37336 6.63996 6.39138 6.63546 6.39138C6.62645 6.39589 6.5904 6.44095 6.5949 6.46348C6.58589 6.45897 6.58589 6.45897 6.59941 6.44545Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.91492 6.54449C6.91492 6.54899 6.91492 6.58954 6.91492 6.59856C6.91942 6.61207 6.92393 6.6346 6.93294 6.64361L6.93745 6.64812C6.93745 6.65263 6.93745 6.65713 6.94195 6.66164C6.94195 6.66614 6.94646 6.66614 6.94646 6.66614C6.95096 6.66164 6.95547 6.65713 6.95998 6.65263C6.96448 6.64812 6.96899 6.64812 6.97349 6.64812C6.99152 6.63911 6.99152 6.63911 6.99152 6.63911C6.99152 6.63911 6.99602 6.61658 6.99152 6.60306C6.99152 6.59856 6.98701 6.59405 6.98701 6.58954C6.98701 6.58053 6.98701 6.57152 6.98701 6.56701V6.56251C6.98251 6.5535 6.98251 6.54899 6.98251 6.53998C6.98251 6.52196 6.98251 6.51745 6.98251 6.51294L6.96899 6.4814C6.95998 6.4814 6.96448 6.46338 6.95096 6.46338C6.92843 6.47239 6.91492 6.54449 6.91492 6.54449Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M6.88783 7.26556C6.89234 7.26556 6.89685 7.26556 6.89685 7.26556C6.91487 7.26105 6.91938 7.26105 6.91938 7.26105C6.92839 7.25655 6.9374 7.21149 6.9374 7.21149L6.9419 7.15742V7.15291C6.9419 7.15291 6.91938 7.13489 6.90135 7.1394C6.89234 7.14841 6.87432 7.18445 6.86981 7.20248C6.85629 7.25204 6.8653 7.26105 6.86981 7.27007C6.87432 7.27457 6.87432 7.27457 6.87882 7.27007C6.88333 7.27007 6.88333 7.27007 6.88783 7.26556Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M8.89295 6.73382C8.87943 6.72931 8.82536 6.7203 8.81185 6.73832C8.80734 6.74283 8.80734 6.74283 8.79382 6.74283L8.76228 6.73382C8.71272 6.8014 8.71272 6.8014 8.7037 6.79239C8.69019 6.78338 8.68117 6.78338 8.67216 6.78338H8.66766C8.65865 6.78789 8.66315 6.8014 8.64963 6.80591C8.64513 6.80591 8.63612 6.8014 8.63612 6.8014C8.63612 6.8014 8.6271 6.7969 8.60908 6.8014L8.60457 6.80591C8.56402 6.82844 8.61359 6.91856 8.61359 6.91856H8.64513C8.64963 6.91856 8.65414 6.91856 8.66315 6.92306C8.66766 6.92757 8.67216 6.93658 8.67216 6.9501C8.67667 6.96812 8.69019 6.99065 8.6992 6.99516C8.7037 6.99516 8.71272 6.99516 8.71722 6.99966C8.72623 7.00417 8.72623 7.01769 8.73525 7.02219C8.74426 7.0267 8.75327 7.01318 8.76228 7.01769C8.76679 7.01769 8.76679 7.01318 8.7758 6.99966C8.7803 6.99516 8.78932 6.99065 8.79382 6.98615C8.80734 6.97713 8.80734 6.97713 8.82987 6.93207C8.84339 6.90955 8.84339 6.90955 8.8524 6.90504C8.86141 6.90053 8.86592 6.89603 8.87493 6.89152C8.87943 6.88702 8.87943 6.89152 8.87943 6.89152C8.88845 6.90053 8.89746 6.89152 8.89746 6.89152C8.89746 6.89152 8.89746 6.89152 8.89295 6.88702C8.89295 6.88251 8.89295 6.88251 8.91999 6.878C8.98307 6.86899 8.99659 6.85547 9.00109 6.85097C8.96054 6.7969 8.93801 6.76986 8.93801 6.76986L8.89295 6.73382Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.1783 10.8523C13.1738 10.8387 13.1648 10.8342 13.1648 10.8342H12.98C12.9034 10.8477 12.7863 10.9153 12.7863 10.9153C12.7547 10.9379 12.7412 10.9514 12.7367 10.9694C12.7367 10.9694 12.7457 10.9739 12.7502 10.9784C12.7998 10.9964 12.8493 10.9649 12.8989 10.9649C12.935 10.9649 12.971 10.9694 13.0025 10.9694H13.0116C13.0161 10.9694 13.0431 10.9649 13.0611 10.9559C13.1467 10.9289 13.2098 10.9108 13.1783 10.8523Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M14.2686 10.1043C14.2055 10.0772 14.1559 10.1719 14.0928 10.1178C14.0838 10.1223 14.0703 10.2169 14.0793 10.2485C14.0838 10.271 14.0658 10.289 14.0613 10.2935C14.0298 10.253 13.9982 10.244 13.9982 10.244C13.9577 10.244 13.9487 10.2935 13.9126 10.2935C13.9036 10.2845 13.8901 10.253 13.9036 10.2214C13.9126 10.2034 13.9261 10.1674 13.8991 10.1584C13.8675 10.1764 13.8315 10.1809 13.8045 10.2079C13.809 10.2575 13.7955 10.3025 13.7909 10.3476L13.7324 10.1854C13.7189 10.1268 13.7684 10.0772 13.7594 10.0187C13.7504 9.97812 13.7459 9.97361 13.7279 9.9691C13.6963 9.9691 13.6918 9.95559 13.6918 9.94657C13.7459 9.888 13.7459 9.888 13.7053 9.86096C13.7008 9.86096 13.6963 9.86096 13.6918 9.86547C13.6873 9.87448 13.6828 9.88349 13.6468 9.91053C13.6197 9.92855 13.6197 9.92855 13.6017 9.99163C13.5927 10.0232 13.6152 10.0502 13.6242 10.0772C13.6287 10.1088 13.6062 10.1268 13.6062 10.1538C13.5972 10.253 13.6062 10.3251 13.6152 10.3566C13.6197 10.3836 13.6468 10.3972 13.6558 10.4242L13.6468 10.4828C13.6423 10.5053 13.6377 10.5323 13.6377 10.5549C13.6377 10.5864 13.6648 10.6089 13.6693 10.6405C13.6738 10.6765 13.6423 10.7036 13.6468 10.7396C13.7234 10.7171 13.7234 10.7171 13.7008 10.7847C13.6918 10.8162 13.6693 10.8883 13.7143 10.9153C13.7189 10.9153 14.0703 10.7351 14.1334 10.5999C14.1514 10.5639 14.1649 10.5684 14.1649 10.5684C14.192 10.5774 14.1785 10.6089 14.201 10.6225C14.2235 10.636 14.2505 10.6315 14.2731 10.645C14.246 10.7396 14.246 10.7396 14.246 10.7441C14.2596 10.7441 14.3136 10.7216 14.3317 10.6855C14.3407 10.6675 14.3362 10.645 14.3362 10.6225C14.3407 10.5909 14.3632 10.5684 14.3722 10.5414V10.5323C14.3722 10.5233 14.3722 10.5188 14.3632 10.5098V10.5053C14.3722 10.5008 14.3722 10.5008 14.4353 10.4828L14.4398 10.4873L14.4443 10.4918L14.4488 10.4963C14.4713 10.5278 14.4713 10.5278 14.5074 10.5684L14.5479 10.5053C14.5705 10.5143 14.6065 10.5323 14.629 10.5414C14.6606 10.5143 14.6651 10.4738 14.6606 10.4557C14.62 10.4287 14.6471 10.3791 14.6245 10.3431C14.62 10.3386 14.611 10.3251 14.5885 10.307C14.575 10.3251 14.5569 10.3476 14.5434 10.3656C14.5119 10.2755 14.5119 10.2755 14.4849 10.2665C14.4533 10.3116 14.4578 10.3251 14.4623 10.3521C14.4668 10.3656 14.4713 10.3791 14.4668 10.3927C14.4668 10.3972 14.3947 10.4467 14.3992 10.3521C14.4037 10.3025 14.4037 10.3025 14.4218 10.253C14.4443 10.1944 14.4353 10.1764 14.4308 10.1674H14.4263C14.4037 10.1944 14.4083 10.235 14.3812 10.2665C14.3677 10.2845 14.3407 10.28 14.3226 10.289C14.3226 10.2755 14.3271 10.262 14.3271 10.2485C14.3181 10.2575 14.3181 10.2575 14.2821 10.235C14.219 10.2034 14.3226 10.1268 14.2686 10.1043Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.22181 9.36077C9.23983 9.36978 9.31643 9.34725 9.33445 9.33373C9.35248 9.32021 9.36599 9.25262 9.36599 9.25262C9.36599 9.23911 9.30291 9.17602 9.29841 9.17152C9.2939 9.17152 9.28489 9.17602 9.28038 9.18053C9.26687 9.19405 9.22181 9.23009 9.19928 9.22559C9.14521 9.21207 9.15422 9.13096 9.09113 9.12646C9.06861 9.12646 9.05959 9.14448 9.04157 9.14899C9.03706 9.14899 9.02805 9.15349 8.96046 9.11294C8.94695 9.10393 8.93793 9.09942 8.89738 9.09041H8.88837C8.86133 9.08591 8.86584 9.12646 8.84782 9.13547C8.80726 9.158 8.81177 9.06338 8.77122 9.07689C8.7577 9.11745 8.75319 9.11745 8.72616 9.09942L8.72165 9.10393C8.6856 9.00931 8.6811 8.99579 8.64505 9.0048C8.62252 9.01832 8.54592 9.07239 8.6045 9.16701C8.63604 9.21207 8.63604 9.21658 8.64055 9.24361C8.64505 9.29318 8.62703 9.33824 8.63153 9.3878C8.63153 9.40132 8.65406 9.42835 8.67209 9.43737C8.69011 9.44638 8.6811 9.49594 8.6811 9.49594C8.67659 9.51847 8.66758 9.53199 8.65406 9.541L8.59999 9.6176C8.59999 9.6176 8.62703 9.66717 8.69912 9.60408C8.71264 9.59057 8.72165 9.58155 8.73517 9.56353C8.74869 9.54551 8.7622 9.53199 8.77122 9.53199C8.82078 9.54551 8.77122 9.60859 8.80276 9.63562C8.80276 9.63562 8.87936 9.65365 8.88837 9.64914C8.9109 9.63562 8.97398 9.43737 8.96948 9.35175C8.96948 9.34274 8.96948 9.33373 8.97849 9.32922C8.9875 9.32472 8.99201 9.32021 9.00552 9.32472C9.03706 9.32922 9.05509 9.36077 9.09113 9.36077C9.14971 9.35626 9.18576 9.34274 9.22181 9.36077Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M5.20272 14.2406C5.1937 14.2316 5.18469 14.2316 5.17568 14.2361C5.15766 14.2406 5.15766 14.2406 5.12612 14.2271C5.09457 14.2091 5.09457 14.2091 5.07655 14.2046C5.06754 14.2001 5.06303 14.2091 5.05402 14.2046C5.04501 14.2001 5.036 14.1911 5.01797 14.173C5.01347 14.1685 4.99995 14.155 4.99094 14.1505C4.98643 14.1505 4.98643 14.1505 4.97742 14.1505C4.96841 14.1505 4.94588 14.155 4.92786 14.1775V14.1821C4.97742 14.2001 4.97742 14.2046 4.97292 14.2677H4.97742C4.98193 14.2902 4.98193 14.2902 4.98643 14.2902C4.99094 14.2992 5.00446 14.2992 5.01347 14.3037C5.02248 14.3127 5.02248 14.3262 5.03149 14.3353L5.036 14.3398C5.05853 14.3262 5.09457 14.3623 5.09908 14.3353C5.13513 14.3758 5.13513 14.3803 5.13963 14.4119C5.14414 14.4524 5.14865 14.4569 5.15315 14.4614C5.17117 14.4794 5.19821 14.4569 5.21623 14.4659C5.22525 14.4704 5.22525 14.4704 5.23876 14.5065C5.24778 14.5245 5.25679 14.538 5.26129 14.538C5.27932 14.547 5.30185 14.538 5.32438 14.5425C5.32888 14.5876 5.32888 14.5876 5.3424 14.5966C5.36493 14.6101 5.37845 14.5786 5.40098 14.5921C5.43252 14.6101 5.44603 14.6507 5.48659 14.6552L5.50461 14.6056C5.50912 14.5921 5.50912 14.5921 5.45505 14.529C5.45054 14.5245 5.44603 14.52 5.44153 14.5155C5.42801 14.502 5.419 14.4975 5.40999 14.4975C5.40098 14.4975 5.30185 14.4209 5.30185 14.4209C5.26129 14.3623 5.25679 14.2902 5.20272 14.2406Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.66638 13.9073C4.67088 13.8938 4.67088 13.8848 4.67088 13.8758C4.67088 13.8668 4.66638 13.8578 4.66638 13.8578C4.66187 13.8533 4.66187 13.8488 4.65286 13.8442C4.63934 13.8397 4.63934 13.8397 4.61681 13.7902C4.60329 13.7631 4.62132 13.7271 4.58977 13.7091C4.58977 13.7091 4.58977 13.7091 4.58527 13.7136C4.58076 13.7136 4.58076 13.7091 4.58076 13.6775C4.58076 13.673 4.58076 13.673 4.55373 13.5288C4.55373 13.5198 4.55373 13.5198 4.56274 13.4928C4.57626 13.4522 4.58076 13.4297 4.57175 13.4207C4.56274 13.4207 4.55373 13.4252 4.54472 13.4207C4.5312 13.4162 4.52669 13.4027 4.51317 13.4027C4.50416 13.4027 4.50416 13.4117 4.49515 13.4072C4.48614 13.4027 4.48163 13.3937 4.47713 13.3846C4.46812 13.3982 4.47713 13.5604 4.51317 13.5604C4.51768 13.5694 4.51768 13.5694 4.51768 13.6054C4.51768 13.6144 4.5357 13.6325 4.54472 13.6235H4.54922C4.55373 13.646 4.55373 13.673 4.56274 13.6956L4.56725 13.7001C4.57175 13.7046 4.57175 13.7091 4.57175 13.7181C4.57175 13.7226 4.60329 13.7767 4.60329 13.7767C4.62132 13.7947 4.62132 13.8172 4.63483 13.8352C4.63934 13.8758 4.64835 13.8938 4.66638 13.9073Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.53592 13.2675C4.53592 13.263 4.53592 13.254 4.52691 13.2224C4.48636 13.0782 4.48636 13.0782 4.47735 13.0557C4.47284 13.0467 4.47284 13.0467 4.47284 13.0242C4.46833 12.9791 4.46383 12.9791 4.45482 12.9701C4.44581 12.9656 4.4413 12.9611 4.4413 12.9521C4.43679 12.9386 4.43679 12.925 4.43229 12.916C4.43229 12.9115 4.40525 12.88 4.39624 12.871C4.39624 12.871 4.39624 12.8755 4.40075 12.889C4.41877 12.9295 4.41877 12.9386 4.42328 12.9791C4.42328 12.9971 4.42328 13.0016 4.42328 13.0152C4.41877 13.0287 4.42328 13.0467 4.41877 13.0602C4.41426 13.0692 4.40976 13.0782 4.40525 13.0873C4.40525 13.0918 4.40525 13.0918 4.40525 13.0963C4.40525 13.1053 4.40976 13.1143 4.41426 13.1233C4.42328 13.1458 4.44581 13.1639 4.45932 13.1819C4.47284 13.1999 4.46383 13.2269 4.48185 13.2495C4.49086 13.272 4.53142 13.308 4.53592 13.2675Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.21138 12.4203C4.20237 12.4248 4.19787 12.4383 4.19787 12.4698C4.19787 12.4788 4.19787 12.4924 4.19787 12.5014C4.19787 12.5059 4.19336 12.5104 4.19336 12.5149C4.19336 12.5194 4.19336 12.5194 4.20237 12.5374C4.21589 12.569 4.22039 12.5825 4.22039 12.5915C4.22941 12.6411 4.22941 12.6501 4.22941 12.6726C4.22941 12.6771 4.22941 12.6816 4.22941 12.6861C4.22941 12.6906 4.23391 12.6951 4.23842 12.6996C4.23842 12.6816 4.23391 12.6636 4.23391 12.6411C4.23391 12.632 4.23842 12.6275 4.23842 12.6185C4.23842 12.596 4.25194 12.5735 4.25194 12.5509C4.25194 12.5509 4.25644 12.5014 4.23391 12.4879C4.2249 12.4833 4.24292 12.4518 4.25194 12.4338C4.25194 12.4338 4.24743 12.4293 4.22039 12.4113C4.22039 12.4203 4.22039 12.4203 4.21138 12.4203Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.35555 12.596C4.35555 12.5915 4.35555 12.5825 4.36006 12.578C4.36006 12.5599 4.34654 12.5464 4.34203 12.5329C4.33753 12.5149 4.33753 12.4969 4.33753 12.4788L4.30599 12.4563L4.28796 12.5509C4.28796 12.5509 4.30148 12.5825 4.315 12.5599C4.31951 12.5644 4.31951 12.5915 4.31951 12.596C4.31951 12.614 4.31049 12.6275 4.30599 12.6455C4.30599 12.6546 4.315 12.6636 4.31049 12.6726V12.6771C4.315 12.6861 4.33302 12.7086 4.33302 12.7086C4.33302 12.7086 4.33753 12.7041 4.33753 12.6861C4.34203 12.6726 4.33753 12.6591 4.34203 12.641C4.35105 12.6275 4.35555 12.614 4.35555 12.596Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.279 12.8348C4.28801 12.8528 4.28801 12.8528 4.28801 12.8574C4.28801 12.8664 4.28351 12.8709 4.28801 12.8799C4.28801 12.8844 4.28801 12.8844 4.28801 12.8889C4.28801 12.8889 4.30153 12.9294 4.30603 12.934C4.31054 12.9294 4.31505 12.8979 4.31505 12.8844L4.31054 12.7672C4.30603 12.7402 4.31054 12.7087 4.30153 12.6771C4.28801 12.6276 4.28801 12.6276 4.27449 12.623C4.26098 12.623 4.26098 12.623 4.25647 12.6771C4.25647 12.6906 4.26098 12.7042 4.26548 12.7132C4.26548 12.7267 4.26548 12.7447 4.26548 12.7582C4.26999 12.8123 4.27449 12.8303 4.279 12.8348Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.40064 12.8483C4.40965 12.8573 4.40965 12.8528 4.41416 12.8483C4.41866 12.8393 4.41866 12.8348 4.41866 12.8348C4.41866 12.8303 4.41416 12.8258 4.41416 12.8213C4.41416 12.8078 4.42317 12.8033 4.42317 12.7897V12.7852C4.42317 12.7807 4.41866 12.7762 4.41416 12.7717C4.40965 12.7627 4.40965 12.7537 4.40515 12.7447C4.40515 12.7447 4.40515 12.7402 4.40064 12.7357C4.39163 12.7222 4.38712 12.7222 4.38262 12.7177C4.3736 12.7177 4.35558 12.7627 4.36009 12.7943C4.36009 12.8033 4.36009 12.8078 4.3691 12.8168L4.3736 12.8213H4.37811C4.38262 12.8213 4.38262 12.8258 4.38712 12.8303C4.39613 12.8393 4.40064 12.8438 4.40064 12.8483Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.34201 12.7312C4.32849 12.7357 4.333 12.8213 4.333 12.8303C4.333 12.8529 4.34651 12.8754 4.35102 12.8934C4.36003 12.9295 4.35102 12.9655 4.35553 12.997V13.0016L4.36003 13.0061C4.36454 13.0016 4.36904 12.8754 4.36904 12.8754C4.36904 12.8799 4.36454 12.7492 4.34201 12.7312Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.73395 13.6413C4.73845 13.6413 4.73845 13.6368 4.73845 13.6233C4.73395 13.5782 4.73395 13.5782 4.72043 13.5692C4.6934 13.5467 4.65735 13.4746 4.65735 13.4746C4.67087 13.5467 4.67087 13.5467 4.67537 13.5602C4.6979 13.6008 4.72494 13.6413 4.73395 13.6413Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M3.08939 12.6004C3.08939 12.5959 3.08939 12.5959 3.08489 12.5914C3.07587 12.6004 3.06686 12.7041 3.08038 12.7176C3.08038 12.7176 3.08489 12.7041 3.08489 12.6996V12.6951C3.08939 12.7041 3.08939 12.7086 3.0939 12.7176C3.0939 12.7176 3.0984 12.7086 3.0984 12.6815C3.0984 12.6815 3.0984 12.6275 3.0939 12.6095C3.0939 12.6049 3.0939 12.6004 3.08939 12.6004Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M3.33272 12.2896C3.31019 12.3166 3.30569 12.4428 3.33723 12.4968C3.34173 12.5059 3.36877 12.4923 3.37778 12.4247C3.38229 12.4112 3.3913 12.3977 3.3958 12.3797C3.3958 12.3752 3.40031 12.3617 3.40031 12.3436C3.40031 12.3031 3.3958 12.2625 3.40031 12.222C3.40031 12.2085 3.41383 12.204 3.41833 12.1904C3.41833 12.1904 3.42284 12.1634 3.41833 12.1589C3.40482 12.1544 3.40482 12.1544 3.38679 12.2085C3.38229 12.2175 3.38229 12.2175 3.38229 12.2175C3.37778 12.213 3.37778 12.204 3.37327 12.1949C3.36877 12.1995 3.36877 12.1995 3.36426 12.222C3.36426 12.231 3.35976 12.2355 3.35525 12.2445C3.35525 12.2535 3.35525 12.2535 3.35976 12.3121C3.36426 12.3842 3.36426 12.3842 3.35976 12.3842C3.35976 12.3842 3.35525 12.3752 3.35074 12.3301C3.34624 12.3166 3.34173 12.2896 3.33272 12.2896Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M3.14821 11.3704C3.14821 11.3614 3.16623 11.2217 3.16173 11.1992C3.16173 11.1992 3.16173 11.1992 3.15722 11.2037C3.15272 11.2172 3.14821 11.2263 3.1437 11.2398C3.1437 11.2443 3.1392 11.2443 3.1392 11.2443C3.1392 11.2443 3.13469 11.2443 3.13469 11.2578C3.13469 11.2623 3.13019 11.3029 3.13469 11.3254L3.1437 11.384C3.1437 11.3795 3.1437 11.3795 3.14821 11.3704Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.1423 11.492C13.1378 11.4875 13.1378 11.4875 13.1333 11.483C13.1287 11.4785 13.1197 11.4785 13.1152 11.4785C13.1062 11.483 13.0927 11.5191 13.0972 11.5371C13.0972 11.5416 13.1017 11.5461 13.1062 11.5506C13.1062 11.5506 13.1287 11.5731 13.1378 11.5731C13.1558 11.5822 13.1738 11.5776 13.1963 11.5776C13.2008 11.5776 13.2099 11.5776 13.2144 11.5776H13.2234C13.2324 11.5776 13.2369 11.5776 13.2369 11.5686C13.2369 11.5641 13.2324 11.5551 13.2234 11.5506C13.2234 11.5506 13.1873 11.5236 13.1693 11.5191C13.1648 11.5146 13.1603 11.5146 13.1558 11.5146C13.1513 11.5056 13.1468 11.4965 13.1423 11.492Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.4259 11.402H13.4169C13.4169 11.402 13.4079 11.4065 13.3989 11.42C13.3899 11.429 13.3809 11.4425 13.3403 11.4651C13.3223 11.4741 13.3043 11.4876 13.2863 11.4966C13.2592 11.5101 13.2412 11.5191 13.2367 11.5281C13.2322 11.5326 13.2277 11.5507 13.2457 11.5687C13.2637 11.5867 13.2908 11.5822 13.2998 11.5822C13.3043 11.5822 13.3043 11.5822 13.3088 11.5822C13.3133 11.5822 13.3223 11.5777 13.3313 11.5732C13.3358 11.5687 13.3403 11.5642 13.3448 11.5597C13.3493 11.5552 13.3674 11.5462 13.3854 11.5507C13.3899 11.5507 13.4034 11.5552 13.4169 11.5507C13.4304 11.5417 13.4395 11.5146 13.4395 11.5146C13.444 11.5011 13.4395 11.4876 13.4395 11.4696C13.4395 11.4606 13.444 11.447 13.444 11.438C13.444 11.429 13.435 11.429 13.4304 11.4245C13.4304 11.411 13.4305 11.4065 13.4259 11.402Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.6737 11.1811C13.6601 11.1766 13.6466 11.1811 13.6331 11.1766C13.6016 11.1676 13.6016 11.1676 13.6016 11.1676C13.5926 11.1811 13.5971 11.1991 13.5926 11.2127C13.5926 11.2217 13.5881 11.2262 13.5835 11.2352V11.2442C13.5835 11.2532 13.579 11.2757 13.579 11.3163C13.5745 11.3839 13.5745 11.3974 13.5926 11.4064C13.6106 11.4154 13.6511 11.3929 13.6511 11.3929C13.6556 11.3884 13.6782 11.3614 13.6872 11.3433C13.7052 11.2983 13.6962 11.2082 13.6872 11.1901C13.6827 11.1856 13.6827 11.1811 13.6737 11.1811Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.7819 11.384L13.818 11.2984C13.818 11.2939 13.8225 11.2894 13.8225 11.2894C13.8225 11.2849 13.8225 11.2804 13.8225 11.2759C13.818 11.2669 13.7729 11.2353 13.7729 11.2353C13.7639 11.2308 13.7594 11.2308 13.7549 11.2353C13.7414 11.2488 13.7369 11.2623 13.7234 11.2804C13.7189 11.2849 13.7143 11.2894 13.7143 11.2939C13.7098 11.3029 13.7098 11.3074 13.7098 11.3119C13.7098 11.3164 13.7098 11.3209 13.7098 11.3299C13.7143 11.3435 13.7189 11.3525 13.7234 11.366C13.7234 11.375 13.7234 11.3795 13.7234 11.3885V11.393C13.7279 11.3975 13.7414 11.411 13.7414 11.411C13.7594 11.4155 13.7729 11.3975 13.7819 11.384Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.35709 8.16661C9.35709 8.17112 9.3616 8.17562 9.3616 8.18013C9.3616 8.18464 9.3661 8.18914 9.3661 8.19365C9.37512 8.20266 9.48326 8.17562 9.50128 8.14859C9.5148 8.13056 9.55085 8.06748 9.52381 7.96835C9.50579 7.90527 9.46974 7.89626 9.46974 7.89175C9.46073 7.88725 9.42919 7.89626 9.38863 7.91879C9.35709 7.93681 9.33456 7.97736 9.33456 7.97736C9.33006 7.98638 9.32104 8.06748 9.32104 8.06748C9.32104 8.10353 9.34808 8.13056 9.35709 8.16661Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.04177 7.95943C9.05979 7.97746 9.08232 7.9324 9.09133 7.90987C9.09584 7.90536 9.10034 7.89184 9.10485 7.86931L9.11837 7.80173C9.11837 7.79722 9.11837 7.79271 9.11386 7.78821H9.08232H9.07781C9.0643 7.79722 9.03726 7.90086 9.03726 7.90086C9.03276 7.92789 9.03276 7.94591 9.04177 7.95943Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.06873 7.67566C9.0462 7.68918 9.04169 7.75677 9.05521 7.77479C9.06422 7.7838 9.07323 7.7793 9.08225 7.76127L9.10027 7.72973C9.10027 7.72973 9.10478 7.72522 9.10478 7.72072C9.10928 7.7072 9.10928 7.68918 9.10928 7.68467C9.10928 7.68017 9.10928 7.67566 9.10027 7.67566H9.06873Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.23089 7.7702C9.26694 7.74767 9.26244 7.73415 9.26244 7.72965C9.25793 7.71162 9.22639 7.68909 9.19485 7.70261C9.17232 7.71613 9.17682 7.76569 9.19034 7.77921C9.19935 7.77921 9.21287 7.78372 9.23089 7.7702Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.46991 7.78816C9.4654 7.77014 9.46089 7.77014 9.45639 7.77014C9.44738 7.77915 9.44287 7.79267 9.44287 7.79718C9.44287 7.80168 9.46089 7.82421 9.4654 7.82872C9.47441 7.83322 9.47892 7.8152 9.46991 7.78816Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.64542 7.93244C9.65893 7.92342 9.67245 7.91441 9.68597 7.90991C9.69498 7.9054 9.69949 7.90991 9.7085 7.9054C9.713 7.90089 9.7085 7.86935 9.70399 7.86935C9.69949 7.85584 9.69498 7.85583 9.68146 7.85583C9.65443 7.85583 9.62739 7.86935 9.60036 7.86935C9.59135 7.86935 9.58233 7.86935 9.57332 7.86935H9.56882C9.56431 7.87386 9.5553 7.90089 9.5553 7.9054C9.5553 7.9054 9.58684 7.93694 9.59135 7.94595L9.59585 7.95046C9.60486 7.95046 9.61387 7.95046 9.64542 7.93244Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M8.93362 7.73865C8.92911 7.73865 8.9246 7.73865 8.9201 7.73865C8.90207 7.74766 8.91109 7.77469 8.89306 7.78821C8.88405 7.79272 8.87504 7.78371 8.87053 7.79272C8.86603 7.79722 8.87053 7.80173 8.87053 7.80624C8.87504 7.81525 8.90658 7.83778 8.90658 7.83778C8.91559 7.84228 8.9201 7.84228 8.9246 7.83778C8.92911 7.83778 8.92911 7.83327 8.94713 7.81074L8.98318 7.74766C8.98318 7.74315 8.98318 7.73865 8.97417 7.73865H8.93362Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M8.37036 8.53621C8.37036 8.54972 8.37487 8.55874 8.37487 8.56324C8.37937 8.57225 8.3974 8.59929 8.3974 8.59929C8.40641 8.60379 8.42443 8.58577 8.42894 8.58127C8.42894 8.58127 8.44246 8.54522 8.43795 8.51818C8.43344 8.50467 8.41542 8.45059 8.3974 8.4551C8.38388 8.45961 8.37036 8.51368 8.37036 8.53621Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M8.30267 8.00001C8.28915 7.9955 8.27113 8.00451 8.26212 8.00902C8.2486 8.01803 8.23959 8.02704 8.24409 8.03605C8.24409 8.03605 8.25761 8.04507 8.26662 8.04507H8.27113C8.28014 8.04507 8.28915 8.04056 8.29816 8.04056C8.30717 8.04056 8.31619 8.03605 8.3252 8.03605H8.3297C8.3297 8.03605 8.33421 8.03605 8.33421 8.03155C8.3297 8.02254 8.31619 8.00451 8.30267 8.00001Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.22213 9.50951C9.21312 9.51402 9.14103 9.58161 9.14103 9.58161C9.13652 9.58611 9.13202 9.59963 9.12751 9.60413C9.1185 9.61315 9.10949 9.61315 9.10498 9.62216C9.09597 9.63568 9.07795 9.71228 9.07795 9.71228C9.07344 9.7303 9.08696 9.74832 9.08696 9.74832C9.09597 9.76635 9.16806 9.77536 9.18158 9.76184C9.18158 9.76184 9.21312 9.71678 9.22664 9.68524C9.23565 9.65821 9.23565 9.62666 9.24917 9.59963C9.25818 9.58161 9.2717 9.57259 9.28071 9.55457C9.28071 9.55006 9.28071 9.54105 9.28071 9.53655C9.2717 9.52303 9.25368 9.51852 9.24016 9.505C9.23115 9.50951 9.22664 9.50951 9.22213 9.50951Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.60037 9.71222C9.60488 9.71672 9.61389 9.72123 9.61389 9.66716L9.60037 9.51846C9.59586 9.47791 9.55531 9.49593 9.55531 9.49593C9.53278 9.50945 9.49673 9.55902 9.50124 9.58605C9.50575 9.61309 9.53278 9.65815 9.53729 9.66265C9.5508 9.67617 9.56883 9.68518 9.58235 9.6987C9.58685 9.70321 9.59136 9.70771 9.60037 9.71222Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.63663 9.13555C9.60058 9.15357 9.57355 9.21665 9.60058 9.22567H9.60959C9.61861 9.22567 9.63212 9.22116 9.64114 9.21665C9.65015 9.21665 9.65916 9.21665 9.66817 9.21215C9.67268 9.21215 9.68169 9.20764 9.68619 9.20764C9.6907 9.20764 9.69521 9.21215 9.69971 9.21215C9.70422 9.20764 9.6907 9.15357 9.6907 9.15357C9.68619 9.14005 9.68169 9.14005 9.67718 9.13555C9.66817 9.13555 9.65015 9.13104 9.63663 9.13555Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M9.71746 9.03641C9.71746 9.03641 9.6724 9.07696 9.69943 9.09949C9.71295 9.11301 9.73999 9.11301 9.75351 9.11301C9.75801 9.11301 9.76252 9.1085 9.76702 9.104L9.78505 9.08147C9.78955 9.07696 9.78955 9.07696 9.78955 9.07245C9.78955 9.06795 9.78955 9.06344 9.749 9.04091C9.73098 9.0319 9.72647 9.0319 9.71746 9.03641Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.236 5.99487C11.2315 5.99487 11.227 6.00389 11.2225 6.00389C11.209 6.00839 11.1955 6.00388 11.182 6.0129C11.1775 6.0174 11.182 6.0174 11.1775 6.02191C11.1775 6.02191 11.1729 6.02191 11.1684 6.02191L11.1639 6.02641C11.1594 6.03092 11.1594 6.03092 11.1549 6.03543C11.1504 6.03993 11.1324 6.05345 11.1279 6.05345C11.1189 6.05796 11.0963 6.07598 11.0963 6.07598C11.0963 6.07598 11.0918 6.08049 11.0918 6.0895C11.0873 6.11203 11.1369 6.13005 11.1594 6.13005C11.182 6.13005 11.191 6.12554 11.191 6.12554C11.2 6.12104 11.2 6.12104 11.209 6.11653C11.2135 6.11203 11.218 6.11653 11.2225 6.11203C11.227 6.10752 11.2315 6.10301 11.236 6.10301C11.245 6.094 11.2586 6.09851 11.2721 6.094C11.2856 6.08499 11.2946 6.08049 11.2946 6.07598H11.2991C11.3171 6.07598 11.3216 6.0895 11.3352 6.094C11.3081 6.06246 11.2766 6.02641 11.2495 5.99487C11.2541 5.99487 11.236 5.99487 11.236 5.99487Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.8671 6.76984C11.8581 6.76984 11.8581 6.77886 11.8581 6.78336C11.8581 6.78787 11.8581 6.78787 11.8581 6.78787C11.8536 6.78787 11.8401 6.79688 11.8401 6.80139C11.8401 6.80589 11.8401 6.82842 11.8401 6.83293C11.8446 6.86447 11.8626 6.887 11.8716 6.8915C11.8761 6.89601 11.8942 6.8915 11.8987 6.887C11.9032 6.887 11.9077 6.88249 11.9122 6.88249C11.9527 6.82842 11.9482 6.82842 11.9482 6.81941C11.9302 6.79688 11.9077 6.76984 11.8897 6.74731V6.75182C11.8806 6.76984 11.8806 6.76984 11.8671 6.76984Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.9436 6.85991C11.9436 6.86442 11.9391 6.86892 11.9391 6.86892C11.9346 6.87793 11.9346 6.88695 11.9346 6.89596C11.9391 6.90046 11.9436 6.90497 11.9436 6.90947L11.9526 6.92299L11.9706 6.9275C11.9751 6.92299 11.9796 6.92299 11.9796 6.91849L11.9841 6.91398C11.9841 6.91398 11.9886 6.90947 12.0067 6.88695C11.9931 6.86892 11.9751 6.8509 11.9616 6.82837C11.9526 6.84189 11.9526 6.84189 11.9436 6.85991Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.777 6.67525C11.7635 6.67525 11.7499 6.68426 11.7454 6.68877C11.7409 6.69327 11.7364 6.69778 11.7319 6.70229V6.70679C11.7274 6.7158 11.7184 6.72031 11.7229 6.72932C11.7274 6.75185 11.7635 6.75636 11.7635 6.75636C11.768 6.75636 11.768 6.75636 11.7725 6.75636C11.7815 6.75636 11.7905 6.76086 11.7995 6.75636L11.8175 6.74284C11.8265 6.73383 11.8356 6.72031 11.8446 6.70679C11.831 6.68877 11.8175 6.67074 11.804 6.65723L11.7995 6.66624C11.7905 6.66624 11.7815 6.67074 11.777 6.67525Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.4661 6.12109C11.439 6.12109 11.421 6.14362 11.3985 6.15263C11.3849 6.15714 11.3849 6.15714 11.3669 6.14813C11.3579 6.14362 11.3354 6.13461 11.2993 6.13011C11.2768 6.13011 11.2768 6.13011 11.2678 6.13011C11.2588 6.13011 11.1957 6.16615 11.1777 6.17516C11.1416 6.2022 11.1281 6.22924 11.1461 6.25176C11.1461 6.25627 11.1506 6.25627 11.1551 6.26078C11.1822 6.28781 11.1822 6.28781 11.2182 6.26528C11.2182 6.26528 11.2588 6.26078 11.2137 6.29682C11.1957 6.31034 11.1867 6.31935 11.2363 6.34639C11.2588 6.35991 11.2723 6.35089 11.2858 6.33287C11.3083 6.31034 11.3309 6.28781 11.3489 6.32386C11.3444 6.33738 11.3264 6.33738 11.3264 6.3554L11.3354 6.35991C11.394 6.37793 11.5291 6.21121 11.5021 6.15714C11.5066 6.14813 11.4931 6.12109 11.4661 6.12109Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.7544 6.38683C11.7589 6.37332 11.7049 6.33276 11.7049 6.33276H11.7004C11.6868 6.33727 11.6778 6.35079 11.6643 6.35529C11.6598 6.35529 11.6508 6.35529 11.6463 6.35079C11.6418 6.34628 11.6238 6.33727 11.5877 6.3598C11.5652 6.37782 11.5607 6.39134 11.5607 6.39134C11.6057 6.39585 11.6192 6.41838 11.6192 6.41838C11.6192 6.41838 11.6102 6.4364 11.5787 6.46794C11.5652 6.48146 11.5652 6.48146 11.5652 6.48596V6.49047C11.5832 6.49498 11.6012 6.48596 11.6238 6.48146C11.6418 6.47695 11.6463 6.47245 11.6508 6.47695C11.6688 6.48596 11.6553 6.49948 11.6283 6.52652C11.6012 6.55355 11.6102 6.56707 11.6102 6.57158C11.6102 6.57608 11.6147 6.58059 11.6102 6.58059C11.6057 6.5896 11.5967 6.59411 11.5967 6.60312C11.5967 6.61664 11.6057 6.66169 11.6147 6.6662C11.6328 6.6662 11.6643 6.62565 11.6823 6.57608C11.6913 6.55355 11.6913 6.55355 11.7409 6.52201C11.7454 6.50849 11.7499 6.49498 11.7544 6.48146C11.7634 6.48596 11.7724 6.49047 11.7815 6.49498C11.795 6.49948 11.804 6.49498 11.8085 6.49047C11.8085 6.49047 11.831 6.43189 11.8265 6.41838C11.822 6.40936 11.813 6.39585 11.7995 6.40035C11.7589 6.41387 11.7274 6.44091 11.6868 6.45893C11.6913 6.44541 11.7094 6.40486 11.7319 6.39585C11.7454 6.39585 11.7544 6.39134 11.7544 6.38683Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.0024 3.89967C13.0114 3.89517 13.0159 3.88616 13.0249 3.88165C13.0384 3.87714 13.0564 3.88165 13.0699 3.87264L13.0745 3.86813C13.0745 3.86813 13.106 3.83659 13.115 3.82758L13.1195 3.79604V3.79153C13.115 3.79153 13.0925 3.78703 13.0519 3.79604C13.0474 3.79604 13.0384 3.80054 13.0249 3.80505C13.0114 3.80956 12.9888 3.82307 12.9753 3.83208C12.9618 3.8411 12.9438 3.83659 12.9303 3.8456L12.8852 3.89517C12.8852 3.89517 12.8762 3.91319 12.8987 3.91319C12.9258 3.91319 12.9483 3.90418 12.9708 3.89967C12.9663 3.90418 12.9843 3.90418 13.0024 3.89967Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M13.0294 3.96272C13.0429 3.96272 13.0565 3.95822 13.061 3.94921C13.061 3.9447 13.0655 3.9447 13.07 3.9447C13.106 3.93569 13.106 3.93569 13.1556 3.93118C13.1781 3.93118 13.1826 3.93118 13.1871 3.92668C13.1871 3.92668 13.2637 3.90415 13.2457 3.89063C13.2322 3.88162 13.2052 3.88162 13.1916 3.87711C13.1646 3.8726 13.1646 3.87261 13.1691 3.86359C13.1691 3.85458 13.1556 3.84557 13.1286 3.85008L13.088 3.85909C13.0655 3.8681 13.0475 3.88162 13.0249 3.89063C12.9934 3.90415 12.9844 3.90415 12.9754 3.90415C12.9663 3.90415 12.9663 3.90415 12.9618 3.90865L12.9573 3.91316C12.9528 3.91766 12.9438 3.9447 12.9573 3.95371C12.9528 3.95822 13.0294 3.96272 13.0294 3.96272Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M10.6774 5.77861C10.6684 5.78312 10.6503 5.81466 10.6684 5.81917C10.6729 5.81917 10.6729 5.81917 10.6819 5.81466C10.6909 5.81015 10.6954 5.80565 10.7044 5.80114C10.7134 5.79664 10.7224 5.79213 10.7269 5.78762L10.7314 5.78312C10.7359 5.77861 10.745 5.77411 10.7405 5.7651C10.7269 5.74707 10.6909 5.7696 10.6774 5.77861Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M10.8262 5.8867C10.8352 5.8867 10.8397 5.84614 10.7992 5.77855L10.7947 5.77405C10.7947 5.77405 10.7947 5.77405 10.7902 5.77855C10.7902 5.78306 10.7857 5.78306 10.7812 5.78757C10.7767 5.79207 10.7676 5.79207 10.7631 5.79658C10.7586 5.80108 10.7586 5.80108 10.7541 5.80559L10.7451 5.83262V5.83713C10.7586 5.83713 10.7631 5.82361 10.7767 5.82361C10.7857 5.82361 10.7857 5.83262 10.7857 5.83713C10.7812 5.84614 10.7722 5.84614 10.7631 5.85065C10.7631 5.85065 10.7586 5.85515 10.7586 5.85966C10.7586 5.85966 10.7722 5.8912 10.7722 5.89571V5.90021C10.7812 5.90472 10.7902 5.88219 10.7992 5.86417C10.8037 5.85515 10.8037 5.85966 10.8082 5.86867C10.8172 5.88219 10.8217 5.8867 10.8262 5.8867Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.074 5.96336C11.074 5.97688 11.074 5.97688 11.074 5.98139C11.0785 5.9904 11.0875 5.99491 11.092 5.99941L11.0965 6.00392C11.101 6.00392 11.1235 5.99491 11.128 5.98139C11.1325 5.97688 11.1235 5.96787 11.119 5.95886C11.1055 5.94083 11.083 5.93182 11.074 5.93633L11.0695 5.94083C11.074 5.94985 11.074 5.95886 11.074 5.96336Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.1191 5.87772C11.1146 5.88222 11.1101 5.88673 11.1101 5.89574V5.90025C11.1101 5.90025 11.1146 5.93179 11.1281 5.93629C11.1326 5.93629 11.1371 5.93629 11.1371 5.93629C11.1416 5.93629 11.1462 5.93179 11.1552 5.93179C11.1597 5.93179 11.1642 5.93179 11.1642 5.92728C11.1642 5.92728 11.1777 5.90025 11.1732 5.89123C11.1732 5.88673 11.1687 5.88673 11.1642 5.88222C11.1281 5.87321 11.1236 5.87321 11.1191 5.87772Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.074 5.8867V5.8822C11.074 5.87769 11.074 5.87769 11.0695 5.87769C11.0695 5.87318 11.0695 5.87318 11.0695 5.86868V5.86417C11.065 5.85516 11.038 5.85066 11.038 5.85516C11.038 5.85967 11.0425 5.85967 11.0425 5.86417C11.0425 5.86868 11.038 5.87318 11.038 5.87769V5.8822C11.0425 5.89121 11.056 5.89571 11.0605 5.89571C11.065 5.89121 11.0695 5.8867 11.074 5.8867Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.1911 5.83716C11.1911 5.83716 11.1551 5.84166 11.1416 5.84617C11.1325 5.84617 11.1325 5.85068 11.128 5.85068C11.128 5.85068 11.128 5.85068 11.1235 5.85518C11.1235 5.85969 11.128 5.85969 11.1461 5.85518C11.1596 5.85518 11.1641 5.85518 11.1686 5.85518C11.1731 5.85518 11.1776 5.86419 11.1821 5.86419C11.1866 5.8687 11.1911 5.87321 11.1911 5.87321H11.1956C11.2046 5.87321 11.2272 5.86419 11.2137 5.84617C11.2091 5.84166 11.2046 5.83716 11.2001 5.83716H11.1911Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M11.2857 5.92737C11.2947 5.92287 11.3037 5.91836 11.3127 5.90935C11.3217 5.90484 11.3308 5.90034 11.3398 5.89583C11.3443 5.89583 11.3443 5.89133 11.3443 5.89133C11.3443 5.88682 11.3082 5.87781 11.3037 5.87781C11.2902 5.87781 11.2857 5.87781 11.2812 5.88231C11.2632 5.89583 11.2677 5.92287 11.2767 5.92737C11.2767 5.93188 11.2767 5.93188 11.2857 5.92737Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M8.6947 11.3209C8.6947 11.3164 8.69921 11.3119 8.69921 11.3074H8.6947C8.67217 11.3209 8.65415 11.3389 8.63162 11.3569C8.6181 11.366 8.60458 11.3705 8.59106 11.3795C8.63162 11.3614 8.67217 11.3389 8.71723 11.3209C8.71272 11.3209 8.71272 11.3209 8.6947 11.3209Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M4.64391 13.3214C4.6394 13.3394 4.6394 13.3394 4.6394 13.3439C4.6394 13.3484 4.6394 13.3484 4.64842 13.3665C4.64842 13.353 4.64842 13.3349 4.64391 13.3214Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M5.00894 9.11742C5.00444 9.11742 5.00444 9.11742 5.00444 9.11742C4.99993 9.11742 5.00444 9.11292 4.99993 9.11292L4.97289 9.13544C4.96839 9.13995 4.96388 9.14446 4.96388 9.14896C4.95938 9.15347 4.95487 9.15797 4.95036 9.15347C4.94586 9.15347 4.94586 9.15347 4.94586 9.15347C4.94586 9.14896 4.94586 9.14896 4.94586 9.14446C4.93685 9.18501 4.92784 9.23007 4.91882 9.27062C4.94135 9.24809 4.99542 9.18501 5.01345 9.13094C5.01345 9.11742 5.01345 9.11742 5.00894 9.11742Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M18.3826 6.75186C18.351 6.78791 18.351 6.78791 18.342 6.81494C18.3375 6.84198 18.3375 6.84198 18.2789 6.85549C18.2609 6.83747 18.2699 6.81044 18.2474 6.79241C18.2068 6.76538 18.1888 6.76538 18.1618 6.76988C18.1167 6.74735 18.0762 6.71581 18.0266 6.7068C18.0266 6.7068 17.8914 6.67526 17.8464 6.70229C17.8418 6.70229 17.8148 6.72032 17.7968 6.71581C17.7157 6.70229 17.6481 6.64372 17.567 6.6302C17.549 6.62569 17.549 6.62569 17.5174 6.62119L17.4994 6.62569C17.4633 6.63471 17.4318 6.65273 17.3958 6.66174C17.3822 6.70229 17.3822 6.70229 17.3777 6.7068C17.3507 6.67526 17.3867 6.6302 17.3462 6.60316C17.3372 6.59866 17.3372 6.59866 17.2966 6.48151L17.2696 6.45447V6.42293C17.2426 6.34182 17.1569 6.30127 17.1524 6.30127C17.0984 6.35534 17.0984 6.35534 17.0939 6.35534C17.0533 6.41392 17.0533 6.41392 17.0037 6.45447C17.0037 6.477 17.0083 6.49502 16.9992 6.51755C16.9947 6.51755 16.9902 6.52206 16.9902 6.52206C16.9767 6.51305 16.9722 6.50854 16.9271 6.48601C16.9226 6.46799 16.9271 6.46348 16.9317 6.45447C16.9091 6.34182 16.9091 6.34182 16.8956 6.33281L16.8596 6.31028C16.81 6.33732 16.7965 6.41392 16.7289 6.42293L16.6793 6.45447C16.7064 6.48151 16.7199 6.49953 16.7424 6.54008L16.7109 6.5536C16.7334 6.57162 16.7649 6.58965 16.7875 6.60767C16.6838 6.67976 16.8551 6.72933 16.8551 6.72933C16.9001 6.73384 16.9046 6.73384 16.9317 6.82846C16.9226 6.88704 16.9181 6.90506 16.9497 6.91858C16.9587 6.91858 16.9767 6.91407 16.9812 6.90957C16.9812 6.90506 16.9812 6.89605 16.9857 6.89154C16.9947 6.89154 17.0037 6.89605 17.0083 6.90055C17.0083 6.91407 17.0083 6.92759 17.0128 6.9366C17.0398 6.91858 17.0263 6.87352 17.0263 6.87352L17.0173 6.86C17.0128 6.85099 17.0083 6.83747 17.0083 6.82846C17.0173 6.81945 17.0263 6.81044 17.0353 6.80593C17.0939 6.84198 17.0668 6.90957 17.0894 6.95913C17.1164 6.95913 17.1164 6.95012 17.1164 6.91858C17.1434 6.88253 17.1434 6.88253 17.1344 6.86C17.1344 6.8555 17.1389 6.8555 17.1434 6.85099C17.1569 6.85099 17.1705 6.85099 17.184 6.85549C17.193 6.87352 17.211 6.89154 17.22 6.90957C17.2651 6.90957 17.2651 6.90957 17.2786 6.90957C17.2831 6.91407 17.2876 6.92308 17.2921 6.92759C17.2966 6.92759 17.3011 6.92308 17.3011 6.92308C17.3237 6.94561 17.3282 6.98166 17.3372 7.0132C17.3552 7.06277 17.3552 7.06277 17.4093 7.08079C17.4769 7.03122 17.4724 7.01771 17.4724 7.00419C17.4814 6.99968 17.4949 6.99518 17.5039 6.98617C17.5174 6.96814 17.5174 6.96814 17.5174 6.94561C17.5129 6.94561 17.5129 6.94111 17.5084 6.94111C17.5445 6.86 17.576 6.91858 17.576 6.9366C17.576 6.94561 17.5715 6.97715 17.603 6.99067C17.6436 6.96814 17.6481 6.97265 17.6931 7.00419C17.7112 6.99968 17.7202 6.99518 17.7382 6.98617C17.7382 6.98617 17.8734 7.11684 17.8599 7.14387C17.8058 7.15739 17.8058 7.21146 17.7788 7.243C17.7878 7.29257 17.7878 7.29707 17.8013 7.30608C17.8283 7.32411 17.8554 7.30158 17.8824 7.3151L17.9365 7.41873C17.9365 7.41873 17.941 7.4728 17.9139 7.48632C17.9094 7.58094 17.9094 7.58094 17.941 7.60347C17.968 7.59897 17.968 7.59897 17.9815 7.57193C18.0131 7.52687 18.0716 7.52237 18.1167 7.49533C18.1167 7.49083 18.1167 7.48632 18.1167 7.48632C18.1257 7.48632 18.1257 7.48632 18.1528 7.48632C18.1528 7.48632 18.1843 7.42774 18.2113 7.34664C18.2339 7.38269 18.2384 7.38719 18.2429 7.40071C18.2384 7.40521 18.2339 7.41423 18.2294 7.42324C18.2339 7.44577 18.2519 7.49984 18.2113 7.49984C18.2068 7.52237 18.2068 7.52237 18.1978 7.53138C18.1933 7.53138 18.1888 7.52687 18.1888 7.52237C18.1843 7.52687 18.1753 7.52687 18.1663 7.53138C18.1437 7.58996 18.1437 7.59446 18.1528 7.6981C18.1573 7.75667 18.1528 7.81075 18.1573 7.86932C18.1573 7.86932 18.1618 7.91438 18.1888 7.90537C18.1978 7.90537 18.2203 7.89636 18.2158 7.86031C18.2068 7.79272 18.2474 7.72513 18.2519 7.72513C18.333 7.72063 18.333 7.70711 18.342 7.66656L18.333 7.63502C18.3285 7.6215 18.315 7.59446 18.324 7.58094C18.3555 7.52687 18.4096 7.49984 18.4411 7.45027C18.4411 7.43676 18.4456 7.42324 18.4456 7.41423C18.4592 7.40522 18.4592 7.40521 18.5087 7.3962C18.5267 7.36917 18.5312 7.33763 18.5493 7.3151C18.5763 7.28806 18.6169 7.27905 18.6394 7.25201C18.6394 7.25201 18.6529 7.2385 18.6619 7.22047C18.689 7.17992 18.698 7.13035 18.716 7.08079V7.02672C18.7115 7.01771 18.707 7.0087 18.7025 6.99968C18.6484 6.99518 18.6349 7.05826 18.5853 7.05826C18.5808 7.05375 18.5808 7.04925 18.5763 7.04925C18.6078 6.87802 18.5673 6.82846 18.5403 6.80142L18.5358 6.77889C18.5177 6.71131 18.4096 6.72482 18.3826 6.75186Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M17.3958 7.36008C17.4543 7.26545 17.4318 7.20688 17.4273 7.19786C17.4183 7.17984 17.22 7.11225 17.1705 7.15731C17.166 7.16182 17.1614 7.16632 17.1569 7.17083L17.1344 7.20237C17.1299 7.2294 17.1299 7.26095 17.1254 7.28798C17.1524 7.31502 17.1524 7.31502 17.1614 7.43668C17.1705 7.44569 17.175 7.45019 17.184 7.45921C17.202 7.4547 17.229 7.45019 17.2471 7.44569C17.1885 7.47723 17.175 7.48624 17.1614 7.47272C17.1524 7.46371 17.1434 7.45921 17.1299 7.46371L17.1254 7.48624L17.1299 7.54482C17.1074 7.55383 17.0939 7.55834 17.0758 7.60339C17.0623 7.63494 17.0308 7.62142 17.0082 7.63944C16.9902 7.65296 16.9632 7.65296 16.9542 7.67999C16.9497 7.69351 16.9812 7.72055 16.9902 7.72505C17.0218 7.73857 17.0533 7.70252 17.0803 7.72956C17.1074 7.7566 17.0713 7.80616 17.1164 7.82418C17.1209 7.82869 17.1209 7.82869 17.1614 7.79715C17.1795 7.78363 17.202 7.77462 17.22 7.76561C17.2651 7.74308 17.229 7.84671 17.2786 7.85572C17.2876 7.85572 17.3011 7.85572 17.3101 7.85572C17.3146 7.87375 17.3282 7.90078 17.3192 7.92331C17.3146 7.94134 17.3011 7.98189 17.3011 8.01794C17.3056 8.16213 17.4904 8.08553 17.4949 8.08102C17.4949 8.08102 17.585 7.98189 17.585 7.87375C17.585 7.85573 17.585 7.84221 17.585 7.82418C17.585 7.80616 17.5715 7.78363 17.5805 7.76561C17.585 7.7611 17.6796 7.66197 17.6841 7.66197C17.5174 7.35106 17.4498 7.3781 17.4093 7.40063C17.4093 7.40063 17.3237 7.43668 17.3146 7.39162C17.3417 7.37359 17.3732 7.39162 17.3958 7.36008Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M14.1515 6.29227C14.1515 6.30128 14.1515 6.30579 14.2055 6.34634C14.1965 6.33282 14.1965 6.33282 14.1965 6.32831C14.2776 6.29677 14.2641 6.26073 14.2596 6.24721C14.3002 6.20666 14.3002 6.20666 14.3272 6.20215L14.3227 6.1661C14.3588 6.14808 14.3633 6.14357 14.3678 6.13456C14.4128 6.1661 14.4083 6.19764 14.4083 6.22468L14.4759 6.20666C14.4714 6.22468 14.4714 6.22468 14.4399 6.22919C14.4444 6.25171 14.4444 6.25171 14.3723 6.34183C14.3362 6.38239 14.3047 6.42744 14.3813 6.40942C14.4038 6.35986 14.4534 6.33733 14.4849 6.29677C14.548 6.35986 14.566 6.33282 14.5931 6.28326C14.6066 6.29677 14.5976 6.32381 14.6201 6.33282C14.6201 6.33282 14.6832 6.31029 14.6652 6.38239C14.6561 6.41393 14.6066 6.43195 14.6291 6.4725C14.6426 6.49954 14.6561 6.49954 14.7057 6.468C14.7913 6.41843 14.7868 6.35084 14.7868 6.32831C14.8904 6.32831 14.8904 6.32831 14.904 6.3193C14.958 6.33282 14.9716 6.33733 15.1428 6.23369C15.1608 6.22017 15.1608 6.22017 15.1563 6.17061C15.1653 6.1616 15.1653 6.1616 15.1923 6.1616C15.2149 6.13456 15.2059 6.12555 15.1788 6.0895C15.1833 6.085 15.1923 6.08049 15.1968 6.07598C15.1833 6.03543 15.2329 6.02642 15.2419 5.99488C15.2509 5.96334 15.2509 5.96334 15.2509 5.92729C15.2734 5.90025 15.2374 5.87772 15.2464 5.8552L15.2509 5.8597C15.2825 5.83717 15.2689 5.81014 15.2689 5.80563C15.2554 5.76958 15.3185 5.73804 15.3185 5.73804C15.3275 5.69298 15.305 5.66595 15.2825 5.63891C15.287 5.6299 15.278 5.61188 15.296 5.60737V5.60287L15.3591 5.6299C15.3636 5.62539 15.4086 5.60737 15.4402 5.64792L15.5258 5.7786C15.5303 5.7831 15.5844 5.80563 15.6159 5.81014C15.715 5.82365 15.6835 5.88674 15.6835 5.88674C15.688 5.89124 15.688 5.90025 15.6925 5.90476C15.688 5.92278 15.688 5.92278 15.6925 5.9363C15.8592 6.01741 15.8682 6.02191 15.9358 5.97685C15.9313 5.95883 15.9133 5.94081 15.9178 5.91828C15.9403 5.91828 15.9583 5.89575 15.9854 5.90025C16.0079 5.90476 16.0169 5.92729 16.0395 5.9363C16.0395 5.9363 16.08 5.96784 16.107 5.95883C16.1025 5.90927 16.1025 5.90927 16.1025 5.90025C16.098 5.89575 16.0935 5.88674 16.0935 5.87772C16.1476 5.8597 16.1836 5.91828 16.2377 5.90476L16.2738 5.88223C16.3098 5.87322 16.3098 5.87322 16.3549 5.7786C16.3819 5.76958 16.4089 5.79662 16.4044 5.81014C16.3999 5.81915 16.3954 5.82816 16.3909 5.83717C16.4225 5.86871 16.427 5.86871 16.4675 5.8552C16.5261 5.8552 16.5802 5.88674 16.6387 5.89124C16.6432 5.88674 16.6523 5.87772 16.6568 5.87322V5.8597L16.6613 5.83717C16.6658 5.79662 16.6658 5.79662 16.5847 5.73804C16.5802 5.72903 16.5757 5.72452 16.5711 5.71551C16.5802 5.71101 16.5892 5.71101 16.5982 5.71101L16.8009 5.64342C16.8595 5.62089 16.9271 5.61188 16.9857 5.59385C16.9857 5.58935 16.9902 5.58034 16.9902 5.57583C17.0398 5.5533 17.0668 5.6299 17.0668 5.6299C17.0713 5.6299 17.0713 5.63441 17.0758 5.63441C17.1389 5.60737 17.1704 5.53978 17.2425 5.52626C17.2425 5.52176 17.2335 5.51275 17.229 5.51275C17.229 5.50824 17.2245 5.49923 17.22 5.49022C17.1209 5.49472 17.1209 5.49472 17.0938 5.49022C17.0758 5.48121 17.0758 5.48121 17.0082 5.47219H16.9722L16.9181 5.46769L16.855 5.45868L16.819 5.44966C16.819 5.44966 16.8145 5.44516 16.81 5.44065C16.8055 5.44065 16.7964 5.44516 16.7919 5.44516C16.7919 5.44966 16.7874 5.45417 16.7874 5.45868L16.7649 5.46769L16.7514 5.4767C16.7424 5.46769 16.7424 5.46769 16.6973 5.49472L16.6703 5.49923C16.6523 5.49472 16.6523 5.49472 16.6252 5.50824C16.6252 5.50824 16.5126 5.51725 16.5126 5.56231C16.5126 5.56231 16.5081 5.56682 16.5081 5.57132C16.4991 5.57132 16.49 5.57132 16.4855 5.57132C16.4855 5.57132 16.481 5.56682 16.4765 5.56682C16.4765 5.56682 16.4765 5.56682 16.4495 5.60737C16.3639 5.62539 16.3008 5.55781 16.2197 5.54879C16.1791 5.54429 16.1611 5.49923 16.1251 5.48571C16.1206 5.49022 16.116 5.49472 16.116 5.49472C16.089 5.50374 16.0755 5.52626 16.053 5.53978L16.0169 5.54879L15.8637 5.56231H15.8367C15.8232 5.56231 15.8232 5.56231 15.7601 5.51725C15.733 5.49923 15.7105 5.52626 15.6835 5.51725L15.5934 5.48571C15.5934 5.48571 15.5934 5.48571 15.5753 5.46318C15.5483 5.46769 15.5438 5.46318 15.5078 5.44516L15.5032 5.43615L15.4852 5.42713L15.4492 5.40461L15.4312 5.39559L15.4131 5.38208C15.4086 5.36856 15.3996 5.35053 15.3951 5.33702C15.3816 5.27393 15.314 5.25591 15.278 5.21085C15.2599 5.20635 15.2419 5.22888 15.2239 5.21986C15.2104 5.21536 15.2104 5.21536 15.2014 5.1748C15.1563 5.17931 15.1518 5.21986 15.1563 5.22437C15.1608 5.22888 15.1428 5.24239 15.1338 5.23789C15.1112 5.22888 15.1112 5.22888 15.0932 5.20184C15.0797 5.20184 15.0752 5.19733 15.0527 5.20635C15.0482 5.21085 15.0436 5.21536 15.0436 5.22437C15.0707 5.27844 15.0707 5.27844 15.0887 5.27844C15.0977 5.38208 15.1022 5.43164 15.1067 5.46318C15.1022 5.46318 15.0977 5.46318 15.0932 5.46769C15.0842 5.48121 15.0797 5.49923 15.0617 5.51275C15.0572 5.51275 15.0572 5.51275 15.0346 5.48121C15.0166 5.48571 15.0031 5.51725 14.9806 5.50374C14.9716 5.49923 14.9535 5.46769 14.9535 5.46769C14.9535 5.46318 14.949 5.46318 14.949 5.45868C14.9265 5.44516 14.904 5.46318 14.8859 5.44966C14.8679 5.43615 14.8769 5.40461 14.8499 5.40461C14.8048 5.4001 14.8679 5.49923 14.8274 5.49472L14.6967 5.48571C14.6967 5.48571 14.6922 5.49022 14.6877 5.49022C14.6832 5.49923 14.6787 5.50824 14.6742 5.51725C14.6922 5.54879 14.7327 5.5533 14.7418 5.58935C14.7327 5.59385 14.6832 5.60737 14.6697 5.61638C14.6742 5.64342 14.6922 5.66144 14.7012 5.68397C14.6697 5.69749 14.6201 5.67496 14.6066 5.72452C14.6246 5.75156 14.6606 5.74255 14.6832 5.75607C14.6787 5.76508 14.6787 5.76958 14.6742 5.7786C14.6471 5.7786 14.6291 5.74705 14.6021 5.75156C14.584 5.75156 14.566 5.73804 14.5435 5.74705C14.5435 5.74705 14.5435 5.74705 14.521 5.79662C14.5165 5.81014 14.5165 5.81464 14.5074 5.82816C14.5165 5.84618 14.5435 5.84618 14.548 5.86871L14.4173 5.90025C14.4399 5.94531 14.512 5.94531 14.5074 6.0084C14.4984 6.0084 14.4894 5.99938 14.4759 5.99488C14.4534 6.04444 14.4534 6.04444 14.4489 6.04444C14.4534 6.05345 14.4534 6.05346 14.5255 6.11654L14.4939 6.12104L14.4894 6.11654L14.4849 6.11203C14.4804 6.11203 14.4804 6.10753 14.4759 6.10753C14.4714 6.10753 14.4714 6.10302 14.4669 6.10302C14.4624 6.10302 14.4624 6.09851 14.4579 6.09851L14.4534 6.09401L14.4489 6.0895C14.4128 6.07148 14.4128 6.07148 14.3497 6.0895C14.3407 6.07598 14.3362 6.07148 14.3362 6.02642C14.2957 5.99488 14.2731 5.98136 14.2686 5.98136C14.1605 5.99938 14.0433 6.02642 14.0569 6.07148C14.0569 6.07598 14.0659 6.08049 14.0704 6.085C14.0929 6.06247 14.0929 6.06247 14.0929 6.06247C14.1289 6.06697 14.156 6.09851 14.192 6.10302C14.1785 6.15258 14.0884 6.11203 14.0974 6.1661C14.1109 6.17061 14.1109 6.17061 14.1244 6.17962C14.1199 6.18863 14.1199 6.20215 14.1154 6.21116L14.1515 6.22919C14.174 6.22468 14.174 6.22468 14.1515 6.29227Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M21.1807 8.04507C21.2167 8.0676 21.2257 8.08562 21.2527 8.13068C21.2663 8.15321 21.2798 8.17124 21.2933 8.17574C21.2933 8.17574 21.3294 8.18475 21.3384 8.1442C21.3429 8.11716 21.3339 8.09464 21.3384 8.0676C21.3429 8.04958 21.3654 8.03606 21.3654 8.01353C21.3654 7.991 21.3339 7.94594 21.3339 7.94594C21.3158 7.92341 21.1852 7.79725 21.1491 7.77472C21.1266 7.7612 21.0995 7.77472 21.0725 7.79274L21.0635 7.75669L21.059 7.75219C21.032 7.75219 21.0229 7.75219 21.0139 7.74768C20.9824 7.89187 20.9824 7.89187 21.0049 7.92341C21.0139 7.94143 21.0229 7.94594 21.041 7.96396C21.077 8.00452 21.1356 8.01803 21.1807 8.04507Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M24.4293 6.26526C24.4338 6.28779 24.4383 6.30131 24.4879 6.38692C24.4744 6.34186 24.4609 6.2968 24.4293 6.26526Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M24.4924 6.38684C24.4924 6.39135 24.4969 6.40036 24.5014 6.40486C24.5105 6.41388 24.515 6.41838 24.515 6.41838C24.5014 6.40486 24.4969 6.39585 24.4924 6.38684Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M15.2101 0.763539C15.1831 0.763539 15.1561 0.759033 15.129 0.759033C15.1561 0.763539 15.1831 0.763539 15.2101 0.763539Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M24.3484 5.89125C24.2718 5.7786 24.2267 5.71552 24.1952 5.66596C24.1591 5.61189 24.1141 5.55331 24.069 5.49023C24.033 5.44066 23.9834 5.37307 23.9428 5.319C23.9383 5.30999 23.9293 5.30098 23.9203 5.29197C23.9158 5.28296 23.9113 5.27845 23.9023 5.26944C23.8617 5.21537 23.8077 5.15228 23.7716 5.10272C23.7266 5.04865 23.6725 4.98106 23.6184 4.91798C23.5689 4.8594 23.5238 4.80082 23.4787 4.75126C23.4292 4.69719 23.3796 4.63411 23.321 4.57553C23.312 4.56652 23.3075 4.55751 23.2985 4.553C23.2895 4.54399 23.285 4.53948 23.276 4.53047C23.2309 4.48091 23.1768 4.42233 23.1318 4.37727C23.1228 4.36826 23.1138 4.35925 23.1093 4.35023C23.0687 4.30968 23.0281 4.26462 22.9876 4.22407C22.9831 4.21956 22.9741 4.21055 22.9651 4.20154C22.893 4.12945 22.8704 4.10241 22.7938 4.03032C22.7443 3.98075 22.6812 3.92217 22.6271 3.87261C22.6091 3.85459 22.5866 3.83656 22.5595 3.81403C22.5145 3.77348 22.4739 3.73743 22.4379 3.70138C22.4289 3.69237 22.4153 3.68336 22.4063 3.67435C22.3613 3.6338 22.3162 3.59775 22.2712 3.5572C22.2667 3.55269 22.2576 3.54818 22.2531 3.53917C22.2441 3.53016 22.2351 3.52565 22.2261 3.51664C22.1585 3.45807 22.1044 3.41301 22.0639 3.38147C22.0504 3.36795 22.0323 3.35443 22.0143 3.34091C21.9332 3.27783 21.8837 3.23728 21.8476 3.20574C21.798 3.16518 21.7485 3.12914 21.7034 3.09759C21.6944 3.09309 21.6854 3.08408 21.6809 3.07957C21.5953 3.01649 21.5682 2.99396 21.4871 2.93538C21.4826 2.93088 21.4781 2.93088 21.4781 2.92637C21.4105 2.88131 21.361 2.84526 21.3249 2.81823H21.3204L21.3159 2.81372C21.3114 2.81372 21.3114 2.80922 21.3069 2.80922L21.3024 2.80471L21.2979 2.80021C21.2934 2.7957 21.2889 2.79119 21.2844 2.79119C21.2799 2.78669 21.2708 2.78218 21.2663 2.77768C21.2393 2.75965 21.2168 2.74163 21.1942 2.72811C21.1762 2.71459 21.1537 2.70108 21.1312 2.68305C21.1222 2.67404 21.1086 2.66953 21.0951 2.66052C21.0861 2.65151 21.0771 2.647 21.0681 2.6425C21.0185 2.61096 20.969 2.57942 20.9284 2.55238C20.9194 2.54337 20.9059 2.53886 20.8924 2.52985C20.8203 2.48479 20.7662 2.44875 20.7301 2.43072C20.7211 2.42622 20.7076 2.4172 20.6941 2.40819C20.6851 2.39918 20.6716 2.39467 20.6626 2.39017C20.622 2.36764 20.5769 2.3406 20.5229 2.30906C20.5139 2.30456 20.5003 2.29554 20.4868 2.29104C20.4418 2.264 20.4102 2.24598 20.3787 2.22796C20.3607 2.21894 20.3381 2.20543 20.3156 2.19191C20.3066 2.1874 20.2931 2.17839 20.2796 2.17389C20.266 2.16487 20.2525 2.16037 20.2435 2.15136C20.221 2.13784 20.2029 2.12883 20.1849 2.11981C20.1579 2.1063 20.1354 2.09278 20.1038 2.07476C20.0993 2.07025 20.0903 2.07025 20.0858 2.06574C20.0813 2.06574 20.0813 2.06124 20.0768 2.06124C20.0678 2.05673 20.0588 2.05223 20.0497 2.04772C20.0002 2.02068 19.9461 1.99365 19.8875 1.96661C19.8785 1.96211 19.874 1.9576 19.865 1.9576C19.7749 1.91254 19.7433 1.89903 19.6532 1.85397L19.6487 1.84946C19.5811 1.81792 19.5135 1.78638 19.4505 1.75934C19.446 1.75934 19.4415 1.75484 19.4369 1.75484C19.4234 1.75033 19.4099 1.74132 19.3964 1.73681C19.3423 1.71428 19.2928 1.69175 19.2522 1.67373C19.2432 1.66922 19.2297 1.66472 19.2207 1.66021C19.2162 1.66021 19.2162 1.65571 19.2117 1.65571C19.1531 1.63318 19.09 1.60614 19.0224 1.57911C18.9548 1.55207 18.8872 1.52504 18.8287 1.50251L18.8241 1.498L18.7836 1.48448C18.7791 1.48448 18.7791 1.48448 18.7746 1.47998C18.7205 1.45745 18.6574 1.43492 18.5898 1.41239C18.5808 1.40788 18.5718 1.40788 18.5628 1.40338C18.5538 1.39887 18.5493 1.39887 18.5448 1.39436C18.4772 1.37184 18.4051 1.34931 18.3375 1.32227C18.3105 1.31326 18.2834 1.30425 18.2609 1.29974C18.2249 1.28622 18.1798 1.27271 18.1212 1.25468C18.1167 1.25468 18.1077 1.25018 18.1032 1.25018C18.0266 1.22765 17.9455 1.20512 17.8779 1.18259C17.8554 1.17808 17.8374 1.17358 17.8238 1.16907C17.7788 1.15555 17.7292 1.14203 17.6796 1.12852C17.6706 1.12401 17.6571 1.12401 17.6481 1.11951C17.6436 1.11951 17.6391 1.11951 17.6346 1.115C17.5805 1.10148 17.5129 1.08346 17.4138 1.06093C17.3462 1.04741 17.2696 1.02939 17.193 1.01136C17.1525 1.01587 17.1389 1.01136 17.1254 1.01136C17.0623 0.997846 16.9947 0.984328 16.9181 0.97081C16.8461 0.957293 16.801 0.948281 16.7514 0.939269C16.7289 0.934763 16.7064 0.930257 16.6793 0.925751H16.6748C16.6208 0.91674 16.5487 0.903222 16.436 0.885198C16.4225 0.885198 16.409 0.880692 16.3955 0.880692C16.3549 0.876187 16.2828 0.862669 16.1927 0.853657H16.1882C16.1792 0.853657 16.1702 0.849151 16.1612 0.849151C16.0936 0.840139 16.008 0.831128 15.9449 0.822116C15.9404 0.822116 15.9359 0.822116 15.9314 0.822116C15.8683 0.813104 15.8007 0.808598 15.7331 0.804092C15.7241 0.804092 15.7106 0.804092 15.7016 0.799586C15.6835 0.799586 15.67 0.79508 15.6565 0.79508C15.6205 0.790574 15.5619 0.786069 15.4853 0.781563C15.4763 0.781563 15.4672 0.781563 15.4537 0.781563L15.314 0.772551C15.2825 0.772551 15.2465 0.768045 15.2104 0.768045C15.1879 0.768045 15.1608 0.768045 15.1383 0.763539C15.1248 0.763539 15.1113 0.763539 15.0978 0.763539C15.1068 0.763539 15.1158 0.763539 15.1248 0.763539C15.1158 0.763539 15.1068 0.763539 15.0933 0.763539C15.0482 0.763539 15.0031 0.759033 14.9626 0.759033C14.9491 0.759033 14.931 0.759033 14.913 0.759033C14.904 0.759033 14.895 0.759033 14.886 0.759033C14.8409 0.759033 14.7869 0.759033 14.7193 0.759033C14.7148 0.759033 14.7103 0.759033 14.7058 0.759033C14.6021 0.759033 14.5661 0.759033 14.4534 0.759033C14.4264 0.759033 14.3994 0.759033 14.3768 0.763539C14.3453 0.763539 14.3092 0.768045 14.2732 0.768045C14.2687 0.768045 14.2642 0.768045 14.2642 0.768045C14.2597 0.768045 14.2552 0.768045 14.2507 0.768045C14.1876 0.772551 14.129 0.772551 14.0704 0.777057C14.0614 0.777057 14.0479 0.777057 14.0344 0.777057C14.0028 0.777057 13.9713 0.781563 13.9443 0.781563C13.8677 0.786069 13.8001 0.790574 13.7415 0.79508C13.7009 0.799586 13.6469 0.804092 13.6108 0.804092C13.6063 0.804092 13.6018 0.804092 13.5973 0.804092C13.6288 0.799586 13.6649 0.799586 13.7009 0.79508C13.5658 0.808598 13.4847 0.81761 13.4847 0.81761C13.5162 0.813104 13.5477 0.813104 13.5793 0.808598C13.2143 0.844645 12.6015 0.948281 12.597 0.948281C12.5835 0.952787 12.57 0.957293 12.5609 0.961799C12.615 0.957293 12.6691 0.943775 12.7277 0.934763C12.7277 0.934763 12.6691 0.948281 12.606 0.966305C12.606 0.966305 12.606 0.966305 12.615 0.966305C12.6601 0.961799 12.7051 0.952787 12.7457 0.948281C12.4483 1.01136 12.4483 1.01587 12.4168 1.04741C12.4348 1.0429 12.4618 1.0429 12.4843 1.04741C12.4753 1.05192 12.4618 1.05642 12.4528 1.05642C12.5339 1.05642 12.5384 1.05642 12.5745 1.03389C12.597 1.04741 12.6195 1.06093 13.0656 0.97081C13.0701 0.97081 13.5207 0.89421 13.8001 0.880692C13.6919 0.898716 13.5838 0.912234 13.4801 0.930257C13.336 0.957293 13.336 0.957293 13.007 1.02939C13.0251 1.03389 13.0476 1.0429 13.0656 1.04741C12.98 1.03389 12.8764 1.07895 12.6691 1.16907C12.6781 1.16907 12.6916 1.16456 12.7006 1.16456C12.7051 1.17358 12.7096 1.18709 12.7096 1.19611C12.0473 1.40338 11.9617 1.44844 11.9346 1.46195C11.9436 1.46646 11.9572 1.46646 11.9662 1.47097C11.9617 1.47998 11.9526 1.48899 11.9481 1.498C11.9887 1.50251 12.0292 1.51152 12.0698 1.51602C12.0653 1.52053 12.0563 1.52954 12.0473 1.53855C12.1239 1.55658 12.1464 1.53405 12.1689 1.51602C12.1779 1.51602 12.1915 1.52053 12.2005 1.52053C12.205 1.5746 12.205 1.5746 12.223 1.61065C12.1509 1.77286 11.9752 1.6467 11.858 1.69175C11.8625 1.70077 11.867 1.71428 11.867 1.7233C11.7814 1.81341 11.5922 1.74132 11.5606 1.90804C11.5516 1.91254 11.5426 1.92156 11.5336 1.92606C11.5336 1.92606 11.5336 1.92606 11.5156 1.93958C11.4976 1.93958 11.4705 1.93057 11.457 1.91705C11.439 1.92606 11.4164 1.93507 11.3984 1.94408C11.4164 1.94859 11.43 1.9531 11.448 1.96211C11.4435 1.96211 11.439 1.96661 11.4345 1.97112C11.4164 1.96661 11.3939 1.96211 11.3759 1.9531C11.3579 1.96211 11.3353 1.98013 11.3218 1.99816C11.2768 1.98914 11.2272 1.98013 11.1821 1.97563C11.2002 1.96661 11.2272 1.9531 11.2452 1.94859C11.1686 1.94408 11.1146 1.99365 11.047 2.01167C11.038 2.00266 11.0289 1.99365 11.0199 1.98914C11.0109 1.99365 10.9974 1.99365 10.9884 1.99816C10.9388 2.02519 10.8983 2.07025 10.8442 2.09278C10.6009 2.24598 10.6009 2.24598 10.5693 2.27752L10.5648 2.29554C10.4657 2.32709 10.4612 2.33159 10.3531 2.42622C10.3576 2.44424 10.3756 2.46677 10.3936 2.48029C10.4071 2.46677 10.4342 2.45325 10.4522 2.45325C10.3891 2.4893 10.3891 2.4893 10.3756 2.52084C10.2314 2.57942 10.2449 2.63799 10.2494 2.66953C10.2494 2.66953 10.0602 2.77317 9.98808 2.7957L9.95654 2.81372L9.93401 2.82273C9.81235 2.89934 9.81235 2.89934 9.79883 2.90384C9.78982 2.90835 9.7763 2.91736 9.76729 2.92186C9.76278 2.92637 9.75828 2.92637 9.75377 2.93088C9.71772 2.9489 9.71772 2.9489 9.58705 3.12012C9.59156 3.12914 9.60057 3.14265 9.60508 3.15167C9.62761 3.15617 9.65464 3.16068 9.67266 3.16518C9.64112 3.21024 9.58255 3.23277 9.57353 3.29585C9.58255 3.30487 9.59156 3.31388 9.59606 3.31838C9.59156 3.3274 9.58255 3.33641 9.57804 3.34542C9.55551 3.28684 9.53298 3.26882 9.43836 3.3274L9.43385 3.3319L9.41132 3.34993L9.36626 3.37245L9.33923 3.39498L9.3167 3.41301C9.29417 3.42202 9.26263 3.44004 9.24911 3.46257L9.21306 3.49411C9.19954 3.50313 9.18152 3.51214 9.168 3.52115L9.13196 3.54368C9.0914 3.57071 9.05085 3.60226 9.00579 3.62478C8.97876 3.64281 8.97876 3.64281 8.89765 3.65633C8.89314 3.70138 8.89314 3.70139 8.89765 3.75996C8.81204 3.80953 8.79401 3.94921 8.65884 3.93119C8.66785 3.8681 8.66785 3.8636 8.68137 3.81854C8.67235 3.81403 8.66334 3.80502 8.65433 3.79601C8.51014 3.83656 8.43805 3.98075 8.31639 4.04834H8.31188L8.30738 4.05285L8.30287 4.05735L8.29836 4.06186L8.29386 4.06636L8.28935 4.07087C8.28935 4.07087 8.28485 4.07087 8.26682 4.08439C8.08659 4.22407 8.08659 4.22407 7.42422 5.15679C7.43323 5.17481 7.43774 5.20636 7.44224 5.22438C7.44224 5.2424 7.44224 5.26493 7.44224 5.28296C7.42422 5.29197 7.40169 5.30999 7.38367 5.32351C7.38367 5.30098 7.37916 5.27394 7.37466 5.25141C7.37466 5.2379 7.37466 5.22438 7.37466 5.21537C7.16738 5.36857 7.16738 5.36857 6.97814 5.71552C6.99616 5.70651 7.0232 5.69299 7.03671 5.67947C7.05474 5.69299 7.08177 5.702 7.1043 5.70651C7.15837 5.67497 7.20343 5.63442 7.2575 5.60738C7.253 5.62991 7.2575 5.66145 7.26201 5.67947C7.27102 5.67947 7.28454 5.67947 7.29355 5.67947C7.29355 5.68849 7.28904 5.70651 7.28454 5.71552C7.29355 5.71552 7.30707 5.71102 7.32058 5.71102C7.31608 5.72003 7.31157 5.73355 7.30707 5.74256C7.32509 5.73355 7.34762 5.71552 7.36114 5.6975C7.36564 5.6975 7.36564 5.6975 7.37015 5.702C7.37015 5.71102 7.37015 5.72453 7.37015 5.72904C7.37015 5.72904 7.37466 5.72904 7.37916 5.72003C7.38367 5.71552 7.38367 5.71552 7.38367 5.71552C7.38367 5.71552 7.38817 5.72003 7.38817 5.72453C7.38817 5.72904 7.39268 5.73355 7.39268 5.73355C7.39268 5.73805 7.4107 5.74256 7.41521 5.73805C7.41521 5.73805 7.42873 5.71102 7.43323 5.68849C7.43323 5.68849 7.44224 5.64793 7.43774 5.64343C7.43323 5.62991 7.43323 5.6254 7.42873 5.6209C7.46477 5.58485 7.53236 5.50374 7.59995 5.42264C7.59544 5.43165 7.59094 5.44066 7.58643 5.45869C7.59094 5.4677 7.59995 5.48572 7.58193 5.48572C7.55489 5.48572 7.55489 5.53979 7.55489 5.53979C7.56841 5.53529 7.58643 5.53078 7.59995 5.52177C7.60446 5.52627 7.60446 5.53078 7.60896 5.53078C7.62248 5.52177 7.62248 5.52177 7.6405 5.52177C7.64951 5.50825 7.64951 5.49023 7.66303 5.48121C7.64951 5.51726 7.636 5.56232 7.56841 5.56683C7.5639 5.5488 7.5639 5.5488 7.5594 5.5488C7.51884 5.53529 7.55038 5.68849 7.55038 5.68849C7.58643 5.67947 7.61797 5.63892 7.62248 5.62991H7.62699C7.63149 5.67497 7.57291 5.68398 7.57291 5.68398C7.54588 5.72904 7.58643 5.76509 7.59544 5.7741C7.59995 5.7741 7.61797 5.74256 7.636 5.71552C7.636 5.73355 7.636 5.73805 7.63149 5.75608C7.63149 5.75608 7.69457 5.67947 7.69908 5.66145C7.70359 5.66145 7.72161 5.67046 7.72612 5.67046C7.72612 5.67947 7.72612 5.68398 7.72612 5.69299C7.73963 5.68849 7.74414 5.67497 7.75315 5.67046L7.75766 5.67497C7.75766 5.68398 7.75315 5.6975 7.7171 5.71552L7.7126 5.71102C7.7126 5.71102 7.7126 5.73355 7.7126 5.74256C7.7171 5.74256 7.7171 5.74256 7.72612 5.73805C7.78019 5.6975 7.78019 5.6975 7.78469 5.702C7.78019 5.72003 7.75766 5.74256 7.75766 5.74256C7.75766 5.74256 7.66754 5.79663 7.65853 5.79663C7.65402 5.81465 7.65402 5.81465 7.64951 5.81916L7.6405 5.81465C7.62248 5.82366 7.62248 5.82366 7.61797 5.81916C7.63149 5.89125 7.65853 5.89576 7.65853 5.89576C7.66303 5.89125 7.66303 5.89125 7.66754 5.88224H7.67204C7.67655 5.90026 7.66754 5.91378 7.67655 5.9318C7.68106 5.9318 7.68106 5.9318 7.7171 5.90026C7.73513 5.90928 7.73513 5.90928 7.73513 5.90928C7.73513 5.92279 7.70809 5.94532 7.69908 5.94983C7.69457 5.94983 7.69007 5.94532 7.68556 5.94532C7.65402 5.99038 7.70809 6.0039 7.73963 6.00841C7.74414 6.01742 7.74414 6.02192 7.74864 6.03093C7.76667 6.03093 7.78019 6.00841 7.78469 5.99939C7.79821 5.98137 7.80272 5.98588 7.82525 5.99939L7.82975 5.99489C7.82975 5.97236 7.82074 5.95433 7.82074 5.93631C7.82074 5.93181 7.82975 5.90928 7.84327 5.91829C7.86129 5.9273 7.85679 5.94532 7.8658 5.95884C7.88382 5.94532 7.8703 5.92279 7.87481 5.90928C7.88833 5.91829 7.89734 5.93631 7.91086 5.94082C7.96042 5.91378 7.89283 5.83268 7.95141 5.81916C7.95141 5.82366 7.95141 5.82366 7.95141 5.84169H7.95592C7.96493 5.81916 7.96493 5.80564 7.96493 5.79663C7.96493 5.7786 7.95141 5.76959 7.9469 5.75157C7.9424 5.72904 7.9424 5.72003 7.95141 5.68849C7.96042 5.68849 7.96493 5.68398 7.96943 5.67947C7.96943 5.71102 7.95141 5.73805 7.96042 5.76959C7.96493 5.76959 7.96493 5.76959 7.96943 5.7741C7.98746 5.75157 7.99647 5.72003 8.00999 5.69299C8.03252 5.65244 8.06406 5.6209 8.08659 5.58034C8.0956 5.56683 8.1001 5.55331 8.10461 5.5443C8.10461 5.5443 8.1001 5.5488 8.0956 5.5488C8.0956 5.5443 8.10461 5.53529 8.10461 5.52627C8.10461 5.52627 8.09109 5.44967 8.07307 5.44967L8.06856 5.44517H8.06406C8.05955 5.45869 8.06406 5.4722 8.05505 5.48121C8.04603 5.47671 8.04603 5.46319 8.03702 5.45869C8.019 5.46319 8.00999 5.48122 7.99647 5.49023C7.99196 5.4677 8.00999 5.44967 7.99647 5.42714L7.99196 5.43165C7.97845 5.41363 7.99647 5.3956 7.98746 5.38209C7.97394 5.36406 7.97394 5.36406 7.96493 5.36406C7.95592 5.37307 7.95592 5.37758 7.95141 5.37758C7.98295 5.33252 7.98295 5.33252 7.98295 5.32801C7.98295 5.319 7.98295 5.28296 7.9469 5.28296C7.93789 5.28296 7.91987 5.33252 7.93339 5.35054C7.9424 5.36406 7.93789 5.38659 7.93339 5.3911C7.90185 5.37758 7.90185 5.37758 7.91086 5.30549C7.91086 5.29647 7.91086 5.29647 7.91086 5.29197C7.90185 5.29647 7.89283 5.28746 7.88382 5.28746C7.87481 5.28746 7.8658 5.30098 7.85228 5.30098H7.84777C7.84777 5.28296 7.84327 5.24691 7.83876 5.2379C7.83426 5.2379 7.83426 5.2379 7.80722 5.1658C7.83426 5.13426 7.84777 5.11173 7.85228 5.11173C7.86129 5.09821 7.86129 5.09821 7.84327 5.05315H7.85228C7.89283 4.99007 7.89283 4.99007 7.90635 4.98557C7.90635 4.99007 7.91086 4.99458 7.91086 4.99458C7.8658 5.05766 7.8658 5.05766 7.8658 5.07568C7.8703 5.07568 7.87481 5.07568 7.87481 5.08019C7.90185 5.06217 7.91086 5.03063 7.93789 5.0081C7.93339 5.06667 7.82524 5.11173 7.87932 5.17031C7.88382 5.17031 7.88833 5.17031 7.89283 5.17031C7.89734 5.1658 7.90635 5.1613 7.91086 5.15679C7.93789 5.28296 8.00098 5.21537 8.00548 5.21537C8.03702 5.17932 8.04153 5.12975 8.06856 5.09371H8.07758C8.06856 5.13426 8.04153 5.17031 8.03252 5.21086C8.03702 5.21086 8.04153 5.21537 8.04153 5.21537C8.11813 5.19734 8.11813 5.19734 8.18572 5.08019C8.19473 5.09821 8.19022 5.11624 8.19473 5.12976C8.19473 5.12976 8.22176 5.11624 8.24429 5.10272C8.24429 5.11624 8.2488 5.13426 8.25781 5.14778C8.21726 5.20636 8.21726 5.21086 8.22627 5.22438C8.23078 5.22438 8.23078 5.22438 8.23528 5.22888C8.22627 5.2424 8.22627 5.24691 8.22176 5.25592C8.19923 5.23339 8.14967 5.19734 8.1001 5.25592C8.02801 5.2379 8.0235 5.33252 8.03702 5.35956C8.07307 5.42264 8.07307 5.42264 8.09109 5.42264C8.1001 5.42264 8.12263 5.42714 8.12714 5.43165C8.15868 5.4677 8.1722 5.51726 8.21726 5.53979C8.24429 5.55331 8.2488 5.5443 8.30738 5.48572C8.30738 5.49023 8.31188 5.49473 8.31188 5.49473C8.30738 5.51726 8.28485 5.5443 8.25331 5.56683C8.30287 5.57584 8.27584 5.6209 8.27584 5.6209C8.27133 5.6254 8.26682 5.6254 8.26682 5.6254C8.23979 5.6209 8.23528 5.58936 8.20825 5.58485C8.1722 5.58485 8.14516 5.60738 8.10912 5.61639C8.10912 5.6209 8.10461 5.6254 8.10461 5.6254C8.04153 5.64793 7.96493 5.81916 8.00548 5.86422C8.00999 5.86422 8.01449 5.86422 8.019 5.86422C8.019 5.86872 8.019 5.87323 8.019 5.87773C8.0235 5.87773 8.02801 5.88224 8.03252 5.88224C8.04153 5.87323 8.04603 5.86422 8.05955 5.82366C8.06406 5.82366 8.06856 5.82366 8.06856 5.82817C8.06856 5.83718 8.07307 5.8507 8.07307 5.85971C8.14967 5.87773 8.1001 5.74706 8.14967 5.71102C8.15418 5.76509 8.15418 5.76509 8.15868 5.7741C8.16769 5.7741 8.1767 5.7786 8.18121 5.78311C8.1722 5.82817 8.0956 5.83268 8.11362 5.89125C8.11813 5.89125 8.12263 5.89125 8.12714 5.89125C8.13165 5.88675 8.14066 5.87773 8.14516 5.87773C8.15868 5.90477 8.12714 5.93181 8.14066 5.96335C8.14516 5.96335 8.15418 5.95884 8.16319 5.95433C8.23979 5.92279 8.23979 5.92279 8.2488 5.88224C8.26682 5.79212 8.26682 5.79212 8.27584 5.78311C8.28034 5.78311 8.28485 5.78762 8.28485 5.78762C8.22627 6.08501 8.11813 5.99939 8.11362 5.99939C8.0956 5.97236 8.05955 5.95884 8.03252 5.93631C7.92888 5.98137 7.9424 6.01742 7.98295 6.11204C7.99647 6.10753 8.00097 6.10753 8.019 6.11204C8.02801 6.13908 8.02801 6.14809 7.98746 6.16161C7.9469 6.17512 7.82524 6.28777 7.88833 6.40492C7.90185 6.40943 7.92437 6.41394 7.92888 6.32382C7.9424 6.34635 7.92888 6.39141 7.96493 6.39141C7.97394 6.38239 7.98295 6.37338 7.98746 6.33734C7.99196 6.33734 7.99196 6.33734 8.01449 6.35987C8.04603 6.34635 8.04603 6.34635 8.07307 6.29228C8.07758 6.30129 8.08208 6.31481 8.09109 6.32382C8.10912 6.31931 8.14516 6.31481 8.14516 6.31481C8.17671 6.28777 8.17671 6.28777 8.17671 6.28327C8.17671 6.27425 8.1722 6.26524 8.16769 6.26074C8.16769 6.25623 8.1722 6.25172 8.1722 6.25172C8.19022 6.25623 8.19473 6.25623 8.20825 6.25623C8.21275 6.23821 8.20825 6.21568 8.21726 6.19315C8.22176 6.19765 8.22627 6.20666 8.22627 6.21568C8.23078 6.22018 8.23979 6.22469 8.2488 6.22919C8.25781 6.22469 8.26682 6.21568 8.27133 6.21117L8.27584 6.20216C8.30287 6.21117 8.31639 6.24271 8.34342 6.24722C8.37947 6.22018 8.39299 6.15259 8.35694 6.14809C8.35694 6.14809 8.33892 6.14358 8.34342 6.11655C8.34793 6.11655 8.35244 6.11655 8.35694 6.11204C8.38848 6.14358 8.38848 6.14358 8.43805 6.12556C8.44255 6.13006 8.44255 6.13006 8.44706 6.13457C8.44255 6.18864 8.44255 6.18864 8.44706 6.19765C8.46508 6.20216 8.46508 6.20216 8.48761 6.17963C8.51465 6.12105 8.5552 6.07599 8.57773 6.01742C8.58224 6.01742 8.58674 6.01742 8.59125 6.01742C8.59125 6.02192 8.59575 6.02643 8.59575 6.03093C8.60026 6.03995 8.60026 6.03995 8.60026 6.03995C8.65433 5.95433 8.63631 5.93631 8.59125 5.88224C8.58674 5.88224 8.58224 5.88224 8.58224 5.88224C8.57322 5.90026 8.56872 5.92279 8.55971 5.94082C8.55971 5.94082 8.52366 5.94082 8.51465 5.9318C8.52817 5.90026 8.51915 5.85971 8.53267 5.82817C8.53267 5.82817 8.60927 5.7786 8.5552 5.69299C8.54619 5.67947 8.54619 5.67947 8.61378 5.61639C8.64532 5.6209 8.67686 5.57133 8.69038 5.53979C8.69038 5.53078 8.68587 5.52177 8.68587 5.51726C8.68587 5.51276 8.68137 5.50825 8.68137 5.50374C8.67235 5.48121 8.69038 5.44066 8.65433 5.43165C8.65884 5.40461 8.69939 5.40011 8.7039 5.36406L8.69939 5.35054C8.7039 5.34604 8.7084 5.33703 8.71291 5.33252C8.69488 5.32351 8.67686 5.319 8.65884 5.30999C8.64081 5.3145 8.64081 5.3145 8.62279 5.30999C8.62279 5.30999 8.62729 5.30549 8.6318 5.30549C8.69038 5.25592 8.69038 5.25592 8.67235 5.21537C8.65884 5.21086 8.65884 5.21086 8.57773 5.2424C8.56421 5.23339 8.56421 5.23339 8.56421 5.21537C8.59125 5.20636 8.62279 5.20636 8.64982 5.19284L8.66334 5.1658C8.66334 5.1658 8.69038 5.14778 8.71291 5.12525C8.82105 5.10272 8.92468 5.07118 9.03283 5.03964C9.02832 5.04414 9.02832 5.05315 9.02381 5.05766V5.07118L9.02832 5.11173L9.01931 5.13426C8.99227 5.17481 8.99227 5.17481 8.97876 5.17481C8.97425 5.18383 8.96073 5.19284 8.95623 5.20185L8.95172 5.21537C8.94271 5.23339 8.94271 5.23339 8.92919 5.24691C8.89765 5.26043 8.89765 5.26043 8.89765 5.28746V5.30098C8.89765 5.30548 8.89314 5.3145 8.89314 5.319C8.88864 5.319 8.87963 5.319 8.87512 5.319C8.87061 5.32351 8.86611 5.33252 8.8616 5.33703V5.35054L8.86611 5.37307L8.8616 5.3911V5.40011C8.86611 5.41363 8.86611 5.41363 8.91117 5.42714L8.91567 5.43616C8.96524 5.43616 9.05085 5.42264 9.05085 5.42264C9.05536 5.41813 9.05536 5.41813 9.05536 5.41813C9.05986 5.41363 9.06437 5.40461 9.06887 5.40011L9.0869 5.41363C9.0914 5.41363 9.09591 5.41813 9.10042 5.41813C9.10492 5.43616 9.10492 5.43616 9.10943 5.44066C9.12745 5.43165 9.12745 5.43165 9.13196 5.43165C9.14547 5.41813 9.14097 5.3956 9.15899 5.38209C9.1635 5.38659 9.17251 5.3911 9.17702 5.3911C9.19053 5.38209 9.20856 5.37307 9.21757 5.35956C9.23559 5.35956 9.23559 5.35956 9.24911 5.29647C9.26713 5.28746 9.29867 5.29647 9.32571 5.30999C9.32571 5.3145 9.3212 5.32351 9.3212 5.32801C9.3212 5.33252 9.3212 5.33252 9.3212 5.33252C9.3167 5.35956 9.3167 5.35956 9.19053 5.43616C9.17702 5.44967 9.17701 5.44967 9.17251 5.45869C9.15899 5.53078 9.08239 5.52627 9.04634 5.57584L9.04184 5.58485C9.12745 5.53078 9.21757 5.48122 9.30318 5.42714C9.21757 5.48122 9.12745 5.53529 9.04184 5.58936C9.03283 5.60738 9.04184 5.61189 9.05536 5.6209C9.07789 5.6254 9.07789 5.6254 9.0869 5.63442L9.09591 5.63892C9.10041 5.63892 9.10492 5.63442 9.10492 5.63442C9.11393 5.62991 9.11393 5.62991 9.13646 5.58936H9.14547L9.14097 5.60287L9.14998 5.61639L9.1635 5.6254L9.17251 5.62991C9.20405 5.61639 9.22658 5.60287 9.23109 5.59837H9.2401C9.27164 5.58034 9.27164 5.58034 9.28516 5.58936V5.60287L9.26713 5.6209H9.25362L9.24911 5.6254L9.2401 5.62991C9.2401 5.63892 9.2401 5.63892 9.21757 5.66596V5.67947V5.69299H9.22658C9.2446 5.71552 9.2446 5.71552 9.26713 5.72453C9.31219 5.72453 9.31219 5.72453 9.3167 5.72904C9.33472 5.72453 9.41132 5.68398 9.41583 5.66596C9.38429 5.64793 9.38429 5.63892 9.37978 5.6254C9.38879 5.6254 9.3933 5.6254 9.40231 5.6209C9.42484 5.63892 9.42484 5.63892 9.43385 5.63892L9.43836 5.63442C9.42935 5.58485 9.42935 5.58485 9.46539 5.58034L9.4699 5.59386C9.4744 5.59837 9.47891 5.60287 9.48342 5.60738C9.51045 5.59386 9.51946 5.56232 9.54199 5.53979C9.53749 5.53078 9.54199 5.51726 9.54199 5.50825C9.56002 5.49023 9.57804 5.50825 9.60057 5.50825C9.60057 5.50825 9.61409 5.45869 9.60958 5.43616C9.61859 5.43165 9.61859 5.43165 9.65915 5.43616C9.70421 5.41813 9.70421 5.41813 9.70871 5.41363C9.72223 5.41813 9.73124 5.42264 9.76278 5.40011C9.78982 5.37758 9.78982 5.37758 9.84839 5.38209C9.86191 5.38209 9.86191 5.38209 9.88444 5.35956C9.91148 5.35956 9.91148 5.35956 9.95203 5.37758L9.97005 5.37307L9.98808 5.36406C9.99258 5.35956 9.99709 5.35956 10.0016 5.35505C10.0061 5.35956 10.0061 5.36406 10.0106 5.36406C10.0151 5.36857 10.0196 5.37307 10.0241 5.37758C10.0286 5.37758 10.0286 5.37758 10.0286 5.37758C10.0376 5.37758 10.0467 5.38209 10.0512 5.38209C10.0602 5.3911 10.0602 5.3911 10.0692 5.41363L10.0827 5.43165C10.1187 5.45418 10.1187 5.45418 10.1278 5.45869C10.2224 5.44967 10.2224 5.44967 10.2674 5.48121H10.281C10.3395 5.48572 10.3395 5.48572 10.3576 5.49473C10.3485 5.53078 10.4297 5.56683 10.4657 5.58034C10.4702 5.58485 10.4702 5.58034 10.4702 5.58034C10.5063 5.60287 10.5063 5.60287 10.5243 5.6254C10.5423 5.63892 10.5693 5.6254 10.5829 5.63892C10.6054 5.66145 10.6099 5.69299 10.6279 5.72003C10.6279 5.71552 10.6324 5.71102 10.6324 5.71102C10.6504 5.71102 10.6504 5.71102 10.6775 5.69299C10.691 5.6975 10.691 5.6975 10.709 5.71552C10.7541 5.7741 10.7541 5.7741 10.7856 5.76509C10.7946 5.76959 10.7991 5.76959 10.7991 5.78762H10.7901L10.7856 5.79212C10.7901 5.81465 10.7991 5.8507 10.7991 5.85971L10.8036 5.87773C10.8036 5.89576 10.7991 5.90928 10.7991 5.9273L10.8036 5.9318C10.8352 5.91829 10.8172 5.88224 10.8307 5.86422C10.8352 5.86872 10.8397 5.86872 10.8442 5.87323C10.8442 5.88224 10.8487 5.89125 10.8487 5.90026L10.8442 5.91829C10.8397 5.94983 10.8397 5.94983 10.8307 5.96335L10.8217 5.97686C10.7856 6.04445 10.8712 6.02643 10.8712 6.02643C10.8893 6.02192 10.8983 5.99939 10.9163 5.99489C10.9208 5.99489 10.9208 5.99939 10.9253 5.99939C10.9343 5.99489 10.9749 5.97686 10.9839 5.94983C10.9929 5.91378 10.9659 5.88224 10.9704 5.84619L10.9343 5.82366C10.9343 5.82366 10.8712 5.80113 10.8622 5.7741C10.8667 5.7741 10.8712 5.7741 10.8712 5.7741C10.8802 5.78762 10.9028 5.82366 10.9794 5.83268C10.9839 5.82366 10.9839 5.81015 10.9884 5.80113C10.9929 5.80113 10.9929 5.80113 10.9974 5.80113C11.0109 5.81916 11.0064 5.84619 11.0244 5.85971C11.0334 5.8552 11.038 5.8552 11.047 5.83718C11.0515 5.83718 11.0605 5.83718 11.065 5.84169C11.0695 5.83718 11.0785 5.83268 11.083 5.82366C11.0875 5.82817 11.0965 5.83718 11.101 5.84169L11.1281 5.84619C11.1281 5.84619 11.1281 5.84619 11.1641 5.79212C11.1731 5.79212 11.1821 5.79212 11.1912 5.79663C11.1912 5.80564 11.1866 5.81465 11.1866 5.82366C11.1912 5.82817 11.2002 5.83718 11.2047 5.84169C11.2002 5.87323 11.2002 5.87323 11.2047 5.89125C11.2542 5.88675 11.2542 5.88675 11.3489 5.89576C11.3714 5.92279 11.3714 5.92279 11.3894 5.93631L11.4119 5.94532L11.4255 5.95433L11.421 5.97686L11.4119 5.98137L11.3984 5.98588L11.3894 5.99038H11.3714C11.3398 6.0039 11.3398 6.0039 11.3128 5.99939L11.2993 6.0039C11.2723 6.00841 11.2407 6.0039 11.2137 6.00841C11.2407 6.03995 11.2678 6.07599 11.2948 6.10753C11.3489 6.11204 11.3534 6.11204 11.3759 6.08951C11.4074 6.07599 11.4074 6.07599 11.4119 6.07599C11.421 6.06248 11.4255 6.04896 11.4345 6.03995L11.448 6.04445L11.466 6.03093C11.484 6.01742 11.4976 5.99489 11.5201 5.98588C11.5381 6.0039 11.5651 6.03093 11.5651 6.03093C11.5606 6.03995 11.5606 6.05346 11.5606 6.06248L11.5787 6.07149L11.5922 6.0805V6.10303C11.5832 6.13457 11.5787 6.15259 11.6012 6.16161C11.6057 6.16161 11.6102 6.1571 11.6102 6.1571C11.6327 6.13908 11.6598 6.12105 11.6823 6.10303C11.6823 6.10754 11.6823 6.10753 11.6868 6.11204C11.6643 6.13006 11.6417 6.14358 11.6237 6.16161C11.6372 6.16611 11.6372 6.16611 11.6643 6.18414L11.6688 6.15259C11.6778 6.17062 11.6913 6.19315 11.7003 6.21117C11.6417 6.22018 11.6417 6.22018 11.6372 6.22018H11.6282L11.6327 6.23821C11.6417 6.24271 11.6508 6.25172 11.6598 6.26074C11.6643 6.26074 11.6688 6.25623 11.6733 6.25623C11.6733 6.25623 11.6733 6.25623 11.6778 6.26074C11.6823 6.26524 11.6823 6.26524 11.6868 6.26975C11.6868 6.28326 11.6823 6.30129 11.6823 6.31481C11.6958 6.32382 11.7138 6.32382 11.7274 6.33283C11.7274 6.34184 11.7274 6.35085 11.7274 6.35987C11.7319 6.36437 11.7409 6.37338 11.7454 6.37789C11.7589 6.38239 11.7724 6.38239 11.7814 6.39141C11.8085 6.40042 11.8085 6.40042 11.8445 6.39141C11.849 6.38239 11.8535 6.37338 11.858 6.36888C11.8625 6.36888 11.867 6.37338 11.8715 6.37338L11.8851 6.38239L11.8896 6.3869L11.8941 6.40042L11.9031 6.40492H11.9256L11.9301 6.40943L11.9256 6.42295L11.9166 6.43196C11.9121 6.43647 11.9031 6.44097 11.8986 6.44548L11.8941 6.45449C11.8941 6.459 11.8986 6.4635 11.9031 6.46801C11.9121 6.46801 11.9211 6.4635 11.9256 6.459C11.9301 6.459 11.9346 6.4635 11.9391 6.4635C11.9346 6.46801 11.9256 6.47251 11.9166 6.47702C11.9121 6.49504 11.8941 6.49955 11.8806 6.50856C11.849 6.50856 11.849 6.50856 11.8355 6.50856C11.822 6.50856 11.8085 6.51757 11.7994 6.51757C11.7904 6.5356 11.7904 6.5356 11.7364 6.54461L11.7228 6.55362L11.6868 6.57164C11.6823 6.57615 11.6778 6.58065 11.6733 6.58967C11.6688 6.59417 11.6643 6.60318 11.6598 6.60769H11.6553C11.6462 6.6167 11.6508 6.62571 11.6508 6.64374C11.6508 6.67077 11.6417 6.6933 11.6372 6.70682C11.6327 6.72034 11.6327 6.72034 11.6327 6.72484C11.6372 6.72484 11.6372 6.72034 11.6417 6.72034C11.6462 6.72034 11.6462 6.72484 11.6508 6.72484C11.6508 6.72484 11.6553 6.72484 11.6598 6.72034C11.6643 6.72034 11.6868 6.69781 11.6868 6.69781L11.7003 6.67978C11.7003 6.67528 11.7048 6.67077 11.7048 6.67077C11.7093 6.66627 11.7138 6.66627 11.7183 6.66627C11.7228 6.66176 11.7274 6.65725 11.7319 6.65275C11.7364 6.65275 11.7364 6.65275 11.7409 6.65275C11.7409 6.65275 11.7454 6.64824 11.7499 6.64824L11.7544 6.64374C11.7859 6.60318 11.7859 6.60318 11.8085 6.59868C11.8265 6.59417 11.8265 6.59417 11.8355 6.57164C11.858 6.56714 11.858 6.56714 11.8715 6.56714L11.876 6.58066L11.8806 6.58516C11.9166 6.57164 11.9346 6.53109 11.9707 6.51757C11.9707 6.52208 11.9752 6.52658 11.9752 6.53109C11.9617 6.5356 11.9572 6.5401 11.9481 6.55813L11.9436 6.56263C11.9436 6.56263 11.9436 6.56263 11.9436 6.57615C11.9391 6.58065 11.9301 6.58516 11.9256 6.59417C11.9031 6.58516 11.876 6.60318 11.8535 6.58066C11.8355 6.60318 11.7994 6.60769 11.7814 6.63022C11.7769 6.63923 11.7724 6.64824 11.7679 6.65726L11.7634 6.66176C11.7769 6.67978 11.7904 6.69781 11.813 6.70231C11.831 6.69781 11.8355 6.69781 11.849 6.70231C11.8535 6.72484 11.8535 6.72484 11.8445 6.75638C11.8625 6.77891 11.8851 6.80595 11.9031 6.82397C11.9031 6.78793 11.9031 6.78793 11.9076 6.7699C11.9211 6.69781 11.9301 6.64374 11.9797 6.57615C11.9842 6.58065 11.9932 6.58065 11.9977 6.58516C11.9977 6.58967 11.9977 6.58967 11.9662 6.62571C11.9211 6.71133 11.9211 6.71583 11.9166 6.74737V6.77441C11.9166 6.79243 11.9121 6.81947 11.9076 6.83749C11.9211 6.85551 11.9391 6.87354 11.9572 6.89156C11.9752 6.87354 11.9887 6.85551 12.0067 6.842C12.0112 6.842 12.0157 6.8465 12.0157 6.85101C12.0067 6.88255 12.0022 6.89156 11.9707 6.91409C11.9662 6.9186 11.9662 6.9186 11.9617 6.9231L11.9572 6.92761C11.9526 6.93211 11.9526 6.94563 11.9481 6.95014L11.9572 6.95915L11.9707 6.98168L11.9977 6.97717C12.0067 6.97717 12.0067 6.97717 12.0157 6.97717C12.0923 6.96816 12.0608 6.87354 12.1149 6.8465L12.1464 6.82848L12.1554 6.83298C12.1554 6.83749 12.1509 6.842 12.1509 6.8465C12.1104 6.86002 12.1104 6.86002 12.0923 6.88706V6.89607C12.0968 6.99069 12.0968 6.99069 12.1734 7.06729C12.1779 7.06729 12.1825 7.06729 12.187 7.06729C12.187 7.06279 12.187 7.06279 12.1915 7.03124C12.223 7.00872 12.223 7.00872 12.241 7.01773C12.241 7.02223 12.2455 7.02674 12.2455 7.03124L12.232 7.04927L12.223 7.06729L12.214 7.08081C12.2185 7.15741 12.259 7.17093 12.2906 7.17093C12.2906 7.10334 12.2816 7.0763 12.2681 7.04476C12.2726 7.03575 12.2771 7.02223 12.2771 7.01322L12.3041 7.00421C12.2906 6.97267 12.2591 6.95915 12.2545 6.9231C12.2771 6.93662 12.2996 6.94563 12.3176 6.95464C12.3402 6.94563 12.3582 6.93211 12.3852 6.93211C12.4123 6.94113 12.4258 6.96816 12.4528 6.97717C12.4663 6.97717 12.4798 6.98168 12.4934 6.98619C12.4934 6.99069 12.4979 6.9952 12.5024 6.9997C12.4934 7.00871 12.4934 7.00872 12.4303 7.03124C12.4393 7.04927 12.4528 7.06729 12.4528 7.08982C12.4483 7.09433 12.4393 7.09883 12.4348 7.10785L12.4213 7.12587L12.4348 7.1529C12.4303 7.16642 12.4303 7.16642 12.4168 7.18445V7.19346C12.4348 7.25203 12.4393 7.25203 12.4573 7.24302C12.4618 7.23401 12.4663 7.225 12.4708 7.22049C12.4798 7.22049 12.4889 7.21599 12.4934 7.21148C12.4979 7.21148 12.5024 7.21599 12.5024 7.21599L12.5069 7.23401L12.5114 7.25203H12.5384C12.5429 7.26105 12.5474 7.27456 12.5519 7.28357C12.5655 7.27907 12.5655 7.27907 12.6015 7.26105C12.6015 7.27006 12.597 7.27907 12.5925 7.28808C12.6556 7.28358 12.6556 7.28357 12.6781 7.26105C12.6826 7.26105 12.6871 7.26105 12.6916 7.26105C12.6961 7.27006 12.6961 7.27907 12.7006 7.28808C12.7051 7.29259 12.7051 7.29259 12.7096 7.29709L12.7322 7.3061L12.7412 7.32413L12.7367 7.34215C12.7412 7.40974 12.8223 7.3827 12.8403 7.37369C12.8538 7.3827 12.8583 7.39622 12.8719 7.40523L12.8854 7.40974L12.9079 7.40523C12.9214 7.39172 12.9259 7.37369 12.9394 7.36017C12.9394 7.36468 12.9394 7.36919 12.9394 7.37369C12.9439 7.37369 12.9485 7.3782 12.9485 7.3827C12.962 7.3782 12.9665 7.37369 12.9845 7.3827C12.98 7.39172 12.9755 7.40523 12.9755 7.41425C12.9845 7.41425 12.9935 7.41425 13.0025 7.41425C13.0115 7.42326 13.0205 7.43678 13.0296 7.44579C13.0386 7.44579 13.0476 7.44128 13.0521 7.43678C13.0521 7.43678 13.0521 7.43678 13.0566 7.43678C13.0926 7.43678 13.0926 7.43678 13.1017 7.45029C13.1017 7.4593 13.1062 7.46832 13.1062 7.47282C13.1197 7.48183 13.1197 7.48183 13.1422 7.47733L13.1512 7.46381V7.44128C13.1512 7.43678 13.1512 7.43227 13.1512 7.42776C13.1557 7.42776 13.1602 7.43227 13.1647 7.43227C13.1783 7.43678 13.1918 7.44579 13.2053 7.44579L13.2008 7.45931L13.1918 7.47733C13.2143 7.49085 13.2413 7.51338 13.2639 7.52689C13.2729 7.52689 13.2864 7.52239 13.2954 7.51788C13.3089 7.48634 13.2909 7.44579 13.3224 7.41875C13.3269 7.42326 13.336 7.43227 13.345 7.43678C13.4351 7.39622 13.4126 7.31061 13.399 7.27006C13.399 7.26555 13.4035 7.26105 13.4081 7.26105C13.4486 7.28808 13.4486 7.28808 13.4666 7.27907C13.4666 7.26105 13.4666 7.26105 13.4666 7.2295C13.5072 7.26105 13.5027 7.31512 13.5297 7.35567C13.5567 7.35567 13.5567 7.35567 13.6018 7.3061C13.6153 7.33765 13.6288 7.33765 13.6424 7.33765C13.6469 7.33314 13.6559 7.32413 13.6604 7.31512C13.6649 7.31962 13.6694 7.33314 13.6694 7.33765C13.6964 7.41425 13.719 7.36468 13.7415 7.31512C13.746 7.31512 13.7505 7.31061 13.755 7.31061C13.7595 7.31061 13.764 7.31512 13.7685 7.31962C13.782 7.31512 13.782 7.31512 13.8001 7.3016C13.8046 7.3016 13.8046 7.3016 13.8316 7.32413C13.8361 7.31512 13.8361 7.3061 13.8361 7.29709C13.8091 7.27456 13.8316 7.26555 13.8541 7.25654C13.8541 7.22049 13.8496 7.21599 13.8361 7.21148C13.7911 7.23401 13.773 7.21599 13.764 7.20697C13.8226 7.17093 13.8181 7.16192 13.8136 7.14389C13.8136 7.14389 13.8136 7.14389 13.8046 7.13939C13.8001 7.13488 13.8001 7.13037 13.7956 7.13037C13.8046 7.09433 13.8046 7.09433 13.8091 7.0763C13.7866 7.05377 13.755 7.04026 13.737 7.01322C13.7415 6.97717 13.7415 6.97717 13.6874 6.94113C13.7009 6.90959 13.7009 6.90959 13.6784 6.86453L13.6739 6.86002L13.6694 6.85551L13.6649 6.85101L13.6604 6.8465L13.6559 6.842L13.6514 6.83749C13.6514 6.83749 13.6469 6.83299 13.6424 6.82848C13.6243 6.78342 13.6243 6.78342 13.4937 6.78342C13.4937 6.78342 13.4486 6.73386 13.5207 6.71583C13.5793 6.70231 13.5703 6.64374 13.5342 6.6122C13.5477 6.51307 13.5387 6.50856 13.5207 6.49504C13.5117 6.49504 13.5027 6.49955 13.4937 6.50405C13.4711 6.49504 13.4711 6.49504 13.4621 6.48152C13.4711 6.47702 13.4801 6.47251 13.4847 6.46801C13.4847 6.459 13.4847 6.44998 13.4847 6.44548C13.4982 6.44548 13.5117 6.44998 13.5207 6.44998C13.5072 6.37789 13.4711 6.36437 13.4486 6.35536C13.4081 6.34184 13.39 6.39141 13.3495 6.3869C13.363 6.36437 13.363 6.34184 13.381 6.32382C13.4396 6.32382 13.4171 6.26524 13.4081 6.25623C13.4081 6.25623 13.3269 6.20666 13.3044 6.2337C13.2729 6.26975 13.2594 6.25172 13.2278 6.22018C13.2323 6.21568 13.2413 6.20666 13.2458 6.20666C13.2458 6.19765 13.2458 6.19765 13.3089 6.17963C13.3179 6.15259 13.2954 6.11655 13.3224 6.08951C13.3179 6.08501 13.3134 6.07599 13.3044 6.07149C13.2819 6.08951 13.2594 6.08501 13.2549 6.0805C13.2458 6.06698 13.2458 6.06698 13.2458 6.03995C13.3765 5.93631 13.3765 5.93631 13.3315 5.87323C13.3315 5.86422 13.336 5.85971 13.345 5.8507C13.3315 5.82366 13.2999 5.80564 13.2954 5.7741C13.3134 5.76058 13.3134 5.76058 13.3315 5.76058C13.3675 5.87773 13.372 5.88224 13.381 5.88675C13.4261 5.91829 13.4351 5.89125 13.4396 5.87773C13.4486 5.8507 13.4081 5.84619 13.4035 5.82366C13.4261 5.82366 13.4261 5.82366 13.4396 5.81916C13.4351 5.7741 13.4351 5.7741 13.4801 5.7786C13.4847 5.7741 13.4847 5.76959 13.4892 5.76959C13.4396 5.75157 13.4576 5.72904 13.4666 5.72003C13.4892 5.72904 13.5117 5.72453 13.5297 5.71552C13.5252 5.702 13.5117 5.6975 13.5072 5.68398C13.5117 5.67947 13.5117 5.67497 13.5162 5.67497C13.5162 5.65244 13.4892 5.63892 13.5027 5.61189C13.5613 5.60738 13.5658 5.55331 13.5658 5.55331C13.5703 5.51276 13.5207 5.50825 13.5117 5.47671C13.5207 5.47671 13.5297 5.47671 13.5387 5.47671C13.5432 5.45869 13.5432 5.45418 13.5162 5.41813C13.4126 5.27394 13.4261 5.18383 13.4441 5.13877C13.4576 5.12074 13.4621 5.11624 13.4441 5.09371C13.4892 5.06667 13.4892 5.06667 13.4801 5.06667C13.4711 5.06667 13.4666 5.07118 13.4576 5.07118C13.4441 5.07118 13.4306 5.06217 13.4171 5.05766C13.4126 5.05766 13.4126 5.05766 13.4035 5.05766C13.4261 5.07118 13.4486 5.0892 13.4711 5.10272C13.4486 5.0892 13.4216 5.07118 13.3945 5.05315C13.3855 5.04865 13.3765 5.04414 13.372 5.03964C13.372 5.03513 13.3675 5.03063 13.3675 5.02612L13.4937 5.0081C13.5072 5.0081 13.5162 5.0081 13.5297 5.0126C13.5387 5.01711 13.5387 5.0126 13.5432 5.0126C13.5432 5.0126 13.5973 4.98557 13.5567 4.94952V4.94501C13.5748 4.936 13.5928 4.94051 13.6063 4.936C13.6424 4.88193 13.6063 4.88644 13.6063 4.88644C13.5973 4.88644 13.5973 4.89995 13.5883 4.89995C13.5793 4.89995 13.5703 4.89094 13.5703 4.89094C13.5793 4.87742 13.5793 4.87742 13.5748 4.87292C13.5973 4.8594 13.6198 4.87742 13.6424 4.86841C13.6424 4.85039 13.6333 4.83687 13.6379 4.81885C13.6424 4.80082 13.6739 4.80984 13.6739 4.78731L13.6829 4.72873L13.7054 4.71521C13.728 4.7062 13.7415 4.6296 13.737 4.61608C13.7325 4.60707 13.737 4.60707 13.737 4.60256C13.746 4.58905 13.773 4.59806 13.773 4.57553C13.773 4.553 13.773 4.553 13.782 4.54849L13.7775 4.54399C13.782 4.53498 13.782 4.52596 13.7775 4.51695C13.8001 4.48992 13.8001 4.45838 13.7911 4.42683C13.7956 4.41332 13.7956 4.40431 13.7956 4.40431C13.8316 4.37727 13.8767 4.36375 13.9127 4.33672C14.0479 4.40431 14.0479 4.40431 14.1065 4.46739L14.1741 4.50344L14.1831 4.52146C14.1831 4.56201 14.1741 4.60256 14.1831 4.64312C14.1696 4.66565 14.165 4.66565 14.1605 4.67015C14.156 4.68367 14.156 4.68367 14.165 4.69719C14.1696 4.70169 14.1741 4.71071 14.1831 4.71521C14.2101 4.74225 14.2101 4.74225 14.2416 4.74225L14.2462 4.73774C14.2326 4.71521 14.2326 4.71521 14.2281 4.68818C14.2326 4.68367 14.2371 4.68367 14.2416 4.67917C14.2462 4.67466 14.2462 4.67466 14.2462 4.67466C14.2642 4.66565 14.2687 4.63861 14.2867 4.6296C14.3137 4.61608 14.3137 4.61608 14.3318 4.6296C14.3318 4.6296 14.4084 4.68818 14.4444 4.64312C14.4354 4.63411 14.4219 4.6296 14.4129 4.61608C14.4219 4.58004 14.4219 4.58004 14.3994 4.55751C14.3723 4.53047 14.3273 4.53047 14.3002 4.50344L14.3047 4.49893C14.3047 4.49442 14.3002 4.47189 14.2912 4.46288C14.2597 4.42683 14.2011 4.44486 14.1696 4.3998C14.1425 4.36375 14.147 4.30968 14.111 4.27814C14.1065 4.27363 14.102 4.27363 14.0975 4.26913C13.9893 4.21055 13.9893 4.21055 13.8947 4.12945C13.8992 4.13395 13.9037 4.13395 13.9082 4.13846C13.8992 4.12043 13.8632 4.07537 13.8632 4.07537C13.8316 4.0979 13.773 4.03482 13.7775 3.98976C13.782 3.9402 13.764 3.89063 13.764 3.89063L13.6694 3.84107C13.6288 3.82755 13.6198 3.77799 13.5883 3.75996C13.5883 3.75996 13.5477 3.73743 13.5162 3.75996C13.5117 3.75996 13.5117 3.76447 13.5072 3.76897C13.5072 3.77348 13.5072 3.77799 13.5072 3.77799C13.4035 3.75546 13.4035 3.75546 13.4081 3.71941C13.4126 3.69237 13.3675 3.67886 13.3405 3.69237C13.3179 3.7104 13.3134 3.71941 13.3134 3.75546C13.3315 3.74644 13.4351 3.91767 13.4441 3.93569C13.4306 3.93569 13.4171 3.9402 13.399 3.94921C13.399 3.95822 13.4035 3.96723 13.4035 3.97625C13.3765 3.97625 13.3585 3.95822 13.3315 3.95372C13.3315 3.95372 13.3269 3.95822 13.3224 3.96273C13.2954 3.95372 13.2954 3.95372 13.2909 3.94921C13.2503 3.96723 13.1963 3.91316 13.1647 3.96723C13.1557 3.96723 13.1467 3.96723 13.1377 3.97174L13.0881 3.98075C13.0566 3.98976 13.0251 3.98976 12.998 4.00779H12.9755C12.9485 3.98976 12.9214 3.97174 12.8403 3.98526C12.8403 3.97624 12.8403 3.97625 12.7953 3.95372C12.7817 3.96723 12.7817 3.96723 12.7322 3.98075L12.7277 3.98526L12.7232 3.98976L12.7187 3.99427L12.7141 3.99877L12.7096 4.00328L12.7051 4.00779C12.6781 4.03482 12.6511 4.06186 12.615 4.03482C12.6466 4.02581 12.7006 3.99427 12.7006 3.99427C12.7187 3.97624 12.6871 3.95822 12.6961 3.93569C12.7006 3.93569 12.7051 3.93569 12.7051 3.93119C12.7051 3.92668 12.7006 3.92217 12.7006 3.92217C12.7051 3.92668 12.7141 3.93119 12.7232 3.93569C12.7727 3.92217 12.8088 3.88613 12.8538 3.87261C12.8178 3.81854 12.7637 3.89063 12.7141 3.89514L12.7096 3.88613C12.7051 3.88613 12.7006 3.88613 12.7006 3.88613C12.6916 3.89514 12.6916 3.89514 12.6916 3.91767C12.6781 3.92217 12.6691 3.92217 12.6601 3.90866C12.6601 3.90415 12.6646 3.89964 12.6646 3.89514L12.6871 3.89063C12.6916 3.89063 12.6916 3.88613 12.6961 3.88613C12.6961 3.8681 12.6826 3.85459 12.6781 3.84107C12.6826 3.83656 12.6871 3.83206 12.6916 3.82755C12.7412 3.787 12.7412 3.787 12.8043 3.78249C12.7862 3.80051 12.7862 3.80051 12.7412 3.80051C12.7412 3.80502 12.7367 3.80502 12.7367 3.80953C12.7367 3.81403 12.7412 3.81854 12.7412 3.81854C12.7367 3.82304 12.7277 3.82755 12.7187 3.83206C12.7232 3.83656 12.7232 3.84107 12.7277 3.84107C12.7457 3.85008 12.7547 3.85459 12.7682 3.85909C12.8133 3.85459 12.8538 3.82755 12.9034 3.82755C12.9485 3.787 12.8989 3.70589 12.9665 3.67435C12.9665 3.67435 12.962 3.61127 12.8358 3.62929C12.8403 3.65182 12.8403 3.65182 12.7592 3.67886C12.7592 3.68787 12.7547 3.69688 12.7547 3.70138C12.7457 3.70589 12.7141 3.71941 12.7006 3.67886C12.7141 3.66984 12.7187 3.66534 12.7277 3.65633C12.7817 3.65182 12.7817 3.65182 12.7862 3.64731C12.7862 3.6383 12.7817 3.62929 12.7772 3.62478C12.8043 3.60226 12.8043 3.60226 12.7907 3.56621L12.7953 3.5617C12.8043 3.55269 12.8178 3.54368 12.8223 3.53016C12.7998 3.50763 12.7998 3.44004 12.7502 3.45356C12.7457 3.46257 12.7457 3.46257 12.7457 3.46257C12.7457 3.46708 12.7457 3.47158 12.7457 3.47158C12.7322 3.4806 12.7187 3.47609 12.7051 3.4806C12.7051 3.4851 12.7051 3.49411 12.7051 3.50313C12.6736 3.52115 12.6646 3.47609 12.6375 3.47609C12.606 3.47609 12.5835 3.50763 12.5519 3.50763C12.5474 3.50763 12.5429 3.50763 12.5384 3.50763C12.5384 3.50763 12.4979 3.50313 12.4843 3.4851C12.5069 3.45807 12.5745 3.4851 12.5655 3.44455L12.4573 3.37245L12.4393 3.36795L12.3537 3.35894C12.4303 3.30036 12.6015 3.1787 12.7998 3.16518H12.8043C12.8088 3.16518 12.8133 3.16518 12.8178 3.16518C12.8403 3.16518 12.9304 3.17419 12.9304 3.17419C12.962 3.1787 12.9935 3.16518 13.0251 3.16518C13.0656 3.16518 13.0656 3.16518 13.1197 3.18771C13.1422 3.19672 13.1692 3.18771 13.1918 3.18771C13.3044 3.18771 13.4126 3.16068 13.5252 3.18321C13.5477 3.19222 13.5793 3.18771 13.6018 3.18321C13.6288 3.20123 13.6288 3.20123 14.1335 3.19222C14.138 3.20123 14.147 3.21475 14.1515 3.21925C14.129 3.2508 14.1155 3.26882 14.0299 3.29135C14.0254 3.30036 14.0209 3.31388 14.0209 3.3274C14.0884 3.35894 14.0884 3.35894 14.1065 3.39498C14.0389 3.43103 13.9713 3.35894 13.8992 3.39048C13.9217 3.39048 13.9533 3.39498 13.9758 3.39949C14.0254 3.4851 14.0254 3.4851 14.0299 3.48961C13.9352 3.51214 13.9352 3.51214 13.9217 3.51214C13.9352 3.52566 13.9488 3.53917 13.9623 3.54818C13.9488 3.53467 13.9352 3.52115 13.9172 3.51214C13.9082 3.51214 13.9082 3.51214 13.8496 3.49862L13.8136 3.4806L13.764 3.48961L13.7595 3.49411L13.755 3.49862C13.7505 3.49862 13.7505 3.50313 13.746 3.50313C13.7415 3.50313 13.7415 3.50763 13.737 3.50763C13.7325 3.50763 13.7325 3.51214 13.728 3.51214C13.728 3.51214 13.7235 3.51214 13.7235 3.51664H13.719C13.7145 3.51664 13.7099 3.52115 13.7054 3.52115C13.6739 3.53917 13.6739 3.54368 13.6919 3.58874C13.7009 3.60676 13.7009 3.60676 13.6424 3.67886C13.6379 3.70589 13.6243 3.72842 13.6198 3.75546C13.6784 3.77799 13.6784 3.77799 13.6829 3.7915C13.719 3.85008 13.719 3.85008 13.728 3.85909C13.7325 3.8636 13.9848 3.97174 13.9848 3.97174C14.0479 3.99877 14.0569 3.99877 14.0659 4.00779C14.0884 4.02581 14.0884 4.05285 14.1065 4.07087L14.3498 4.2511C14.3498 4.2511 14.5255 4.30067 14.5886 4.29616C14.5886 4.29616 14.6562 4.29616 14.6607 4.29616C14.7103 4.30968 14.7553 4.34573 14.8049 4.36375C14.7959 4.35474 14.7869 4.34573 14.7778 4.33672C14.7824 4.33672 14.7914 4.34122 14.7959 4.34122C14.8049 4.35023 14.8184 4.35925 14.8274 4.37276C15.9539 4.63861 15.9719 4.59355 16.035 4.41782C16.044 4.41782 16.062 4.41332 16.071 4.41332C16.0755 4.40431 16.0801 4.39079 16.0846 4.37727C16.2423 4.41782 16.409 4.39529 16.5577 4.4764C16.6208 4.51245 16.6929 4.52596 16.7649 4.53948C16.8235 4.59355 16.828 4.59806 16.8415 4.63411C16.8235 4.65664 16.801 4.69268 16.7875 4.71972C16.8235 4.75126 16.8235 4.75126 16.8325 4.8549C16.8776 5.09371 17.0713 5.1613 17.2426 5.25592L17.2516 5.28296L17.2561 5.30999C17.2741 5.30098 17.2876 5.29647 17.3057 5.29197C17.3597 5.32801 17.4138 5.36406 17.4544 5.41813C17.4769 5.40011 17.5084 5.36857 17.5264 5.34604C17.576 5.3911 17.5625 5.48572 17.6481 5.50374C17.8644 5.53979 18.0987 5.40912 17.8193 4.90897L18.6755 5.21086C18.6709 5.25592 18.6484 5.30098 18.6709 5.34604C18.689 5.34604 18.7115 5.34604 18.7295 5.35054C18.743 5.38209 18.743 5.38209 18.752 5.44967C18.8151 5.46319 18.8827 5.42714 18.9368 5.48572C18.9188 5.49023 18.8962 5.49924 18.8782 5.50825C18.8782 5.52627 18.8827 5.55331 18.8872 5.57133C18.8737 5.58034 18.8467 5.58936 18.8332 5.58936C18.8602 5.60738 18.8872 5.62991 18.9143 5.65244C18.8827 5.67046 18.8377 5.67497 18.7836 5.62991C18.6845 5.64343 18.6845 5.64343 18.5628 5.46319C18.5718 5.43165 18.5763 5.3911 18.5763 5.35956C18.3826 5.29197 18.3826 5.29197 18.3781 5.26493C18.2699 5.19284 18.2699 5.19284 18.2429 5.17481C18.2294 5.17932 18.2113 5.18833 18.1978 5.19284C18.2834 5.60738 18.2834 5.60738 18.4907 5.72453C18.5042 5.71552 18.5222 5.70651 18.5358 5.702C18.5493 5.70651 18.5718 5.71552 18.5853 5.72003C18.5853 5.73355 18.5898 5.75607 18.5898 5.76959C18.6755 5.80564 18.6754 5.80564 18.7385 5.81015C18.8106 5.84619 18.8827 5.88224 18.8557 5.99939C18.5042 6.09852 18.8692 6.51757 18.8106 6.77441C18.8151 7.12587 18.8151 7.12587 18.8782 7.16192C18.8782 7.23401 18.8467 7.3016 18.8332 7.36919C18.8512 7.39172 18.8737 7.43227 18.8782 7.46381C18.7881 7.53591 18.6619 7.55843 18.5898 7.65306C18.7701 7.69812 18.7836 7.72515 18.8106 7.77021C18.5493 7.92792 18.4862 7.96847 18.4907 8.11717C18.5898 8.18475 18.5898 8.18475 18.6304 8.18475C18.6349 8.18475 19.1215 8.15321 19.2387 8.12618C19.3288 8.18926 19.3288 8.18926 19.3558 8.2208C19.4279 8.35147 19.6037 8.41456 19.5992 8.59479C19.5992 8.5993 19.0269 9.17155 18.8647 9.20759C18.7746 9.40135 18.7836 9.46894 18.7881 9.50048C18.9098 9.54103 18.9233 9.55905 18.9548 9.60411C19.6172 10.3836 19.6172 10.3836 19.6262 10.4017C19.7253 10.3386 19.7704 10.2169 19.883 10.1719C19.9731 10.1358 20.0407 10.244 20.1309 10.2124C20.1489 10.2079 20.1669 10.1944 20.1804 10.1854C20.1939 10.0772 20.2525 9.98261 20.248 9.86996C20.3291 9.83391 20.3291 9.83391 20.4553 9.75281L20.4643 9.71676C20.4643 9.71676 20.4868 9.46894 20.4958 9.29321H20.5003C20.5003 9.29321 20.5003 9.2887 20.4958 9.2887C20.4958 9.26166 20.5003 9.23463 20.5003 9.20759C20.5048 9.20759 20.5094 9.20759 20.5184 9.20759C20.5184 9.20309 20.5229 9.19858 20.5364 9.18957C20.5589 9.2121 20.5905 9.12198 20.595 9.08593C20.586 9.08143 20.5814 9.08143 20.5724 9.03637C20.5679 9.01384 20.5679 9.01384 20.5274 8.96428C20.5094 8.96428 20.5003 8.94625 20.5003 8.94625C20.5048 8.94175 20.5048 8.93724 20.5003 8.92372C20.4823 8.87416 20.5409 8.85613 20.5544 8.85163C20.5589 8.86064 20.5634 8.87416 20.5679 8.88317C20.5769 8.89218 20.595 8.92372 20.604 8.89218C20.6085 8.87866 20.595 8.86515 20.604 8.85163C20.6085 8.85163 20.6085 8.85163 20.6355 8.86965C20.6445 8.86515 20.658 8.86064 20.6671 8.85613C20.649 8.80657 20.7031 8.8291 20.7031 8.8291C20.7166 8.8336 20.7256 8.84262 20.7392 8.85163C20.7301 8.87416 20.7301 8.87416 20.8158 8.94175C20.8112 8.95076 20.8112 8.96428 20.8067 8.97329C20.8112 8.9823 20.8293 9.00483 20.8383 9.00032C20.8383 8.99582 20.8518 8.96878 20.8473 8.96428C20.8383 8.94175 20.8112 8.92823 20.8022 8.90119C20.7932 8.87866 20.7887 8.85163 20.7797 8.8291L20.7752 8.82459C20.7707 8.82009 20.7392 8.77953 20.7392 8.77953C20.7346 8.77503 20.7256 8.76602 20.6896 8.7525C20.658 8.74349 20.6265 8.76602 20.595 8.7525C20.5679 8.74349 20.5679 8.69843 20.5319 8.70744C20.5319 8.70744 20.4733 8.73898 20.4643 8.74799C20.4688 8.77052 20.4958 8.77953 20.4868 8.80206C20.4778 8.82009 20.4463 8.81558 20.4418 8.81107C20.4327 8.80657 20.4328 8.80657 20.4237 8.77503C20.4102 8.77503 20.3922 8.7525 20.3832 8.76602C20.3697 8.78855 20.3697 8.78855 20.3561 8.78404C20.3426 8.77953 20.3426 8.76151 20.3291 8.757C20.3066 8.74799 20.2841 8.7525 20.2615 8.74799C20.266 8.69392 20.2796 8.64886 20.2976 8.5993L20.3381 8.61281C20.3426 8.61281 20.3426 8.61281 20.3742 8.61281C20.3787 8.59479 20.3877 8.59029 20.3877 8.58578C20.3877 8.58578 20.3967 8.57677 20.3922 8.55874C20.3922 8.55424 20.3922 8.54973 20.3832 8.54973C20.3787 8.54973 20.3697 8.54523 20.3561 8.53171C20.3471 8.53171 20.3336 8.5272 20.3246 8.5227C20.3291 8.50918 20.3336 8.50017 20.3381 8.48665L20.3922 8.5272C20.4328 8.54973 20.4328 8.54973 20.4508 8.57677C20.4508 8.57226 20.4508 8.57226 20.4418 8.55874C20.4373 8.55424 20.4373 8.54973 20.4328 8.54523C20.4328 8.54072 20.4282 8.53621 20.4282 8.53621C20.4282 8.53171 20.4237 8.53171 20.4237 8.5272L20.4282 8.53621V8.53171C20.4418 8.50467 20.4463 8.50467 20.4463 8.50467C20.4463 8.50467 20.4733 8.54072 20.4823 8.56325C20.4958 8.59029 20.4958 8.61732 20.5184 8.63985C20.5229 8.63084 20.5409 8.58127 20.5409 8.58127C20.5454 8.56325 20.5634 8.55424 20.5679 8.53621C20.5679 8.5272 20.5544 8.49566 20.5544 8.49566C20.5454 8.47764 20.5229 8.48665 20.5094 8.48214C20.4823 8.47313 20.4778 8.46412 20.4688 8.45511C20.4463 8.42807 20.4463 8.42807 20.4463 8.42807C20.4418 8.41906 20.4508 8.40554 20.4418 8.39203C20.4327 8.38752 20.4282 8.37851 20.4192 8.374C20.4102 8.3695 20.4057 8.36499 20.3967 8.36049C20.3922 8.35598 20.3877 8.35598 20.3832 8.35147C20.3832 8.34246 20.3832 8.33795 20.3832 8.32894C20.3922 8.33345 20.4057 8.33795 20.4463 8.35147C20.4688 8.36048 20.4733 8.36499 20.4733 8.3695C20.4778 8.38301 20.4913 8.39203 20.4913 8.39203C20.4958 8.38752 20.5003 8.38752 20.5048 8.36499C20.5094 8.36499 20.5094 8.36499 20.5139 8.36499C20.5409 8.36499 20.5409 8.36499 20.5589 8.374C20.5814 8.38752 20.5814 8.38752 20.586 8.37851C20.5769 8.36499 20.5724 8.35147 20.5634 8.34246C20.5499 8.32894 20.5319 8.31543 20.5184 8.30191L20.5139 8.2974C20.4958 8.27938 20.4823 8.25685 20.4778 8.23883C20.4733 8.22531 20.4733 8.22531 20.4688 8.18475C20.4598 8.13068 20.4598 8.13068 20.4598 8.11717C20.4418 8.11717 20.4057 8.0631 20.4102 8.05408C20.4057 8.05408 20.4057 8.05408 20.3967 8.05859C20.3156 8.09013 20.3832 8.13519 20.3877 8.13519C20.3922 8.13519 20.3967 8.1397 20.4012 8.1397C20.4237 8.14871 20.4237 8.14871 20.4282 8.15321C20.4373 8.15772 20.4418 8.17124 20.4553 8.17574C20.4553 8.18025 20.4553 8.18475 20.4508 8.18475C20.4418 8.19827 20.4192 8.20278 20.4102 8.2163C20.4057 8.22531 20.4102 8.24333 20.3967 8.25234C20.3922 8.25685 20.3877 8.26136 20.3742 8.25685C20.3697 8.25234 20.3652 8.25234 20.3607 8.25685C20.3291 8.19827 20.275 8.1397 20.2435 8.08562C20.2435 8.07661 20.239 8.0676 20.2345 8.0676C20.212 8.02254 20.212 7.98199 20.257 7.94594V7.95045C20.257 7.96397 20.257 7.98199 20.257 7.99551C20.257 7.99551 20.266 8.03606 20.2705 8.03606C20.275 8.03606 20.275 8.03155 20.2796 8.03155C20.2841 8.03155 20.2886 8.03155 20.2886 8.02705C20.2886 8.00452 20.266 7.991 20.266 7.96847C20.266 7.96397 20.266 7.96397 20.2705 7.96397C20.2795 7.95946 20.2841 7.95045 20.2841 7.94594C20.2841 7.93693 20.2886 7.92792 20.2886 7.92341C20.3156 7.90539 20.3426 7.88737 20.3652 7.87385C20.3787 7.88286 20.3922 7.88286 20.3967 7.88286C20.3967 7.88286 20.4643 7.82879 20.4643 7.80175C20.5274 7.73867 20.5229 7.68009 20.5139 7.52689C20.5139 7.50887 20.5319 7.48634 20.5454 7.47282C20.5319 7.40073 20.7256 7.26105 20.7256 7.26105C20.987 7.39172 21.2799 7.3016 21.5502 7.36468C21.5592 7.35116 21.5727 7.33765 21.5772 7.32413C21.6088 7.32863 21.6493 7.34215 21.6719 7.35567C21.78 7.31962 21.8341 7.33314 21.9062 7.41875C21.8972 7.48634 21.9242 7.54942 21.9648 7.608L21.9603 7.61251C21.9332 7.66207 21.9602 7.72065 21.9287 7.77021C21.9152 7.78824 21.8836 7.80626 21.8656 7.81978C21.8251 7.84231 21.8206 7.84681 21.8025 7.86484C21.807 7.85582 21.8161 7.85132 21.8206 7.84231C21.7755 7.84231 21.762 7.87835 21.78 7.92792C21.7755 7.93242 21.771 7.93693 21.7665 7.94144C21.753 7.93242 21.735 7.91891 21.7214 7.9099C21.7079 7.9144 21.6854 7.91891 21.6674 7.92341C21.5322 8.21179 21.5322 8.21179 21.5052 8.2163C21.3835 8.43708 21.3835 8.43708 21.3745 8.48665C21.3565 8.49566 21.3384 8.50918 21.3204 8.51819L21.2889 8.50918C21.0861 8.72096 20.969 8.91922 20.9014 9.08143C20.9014 9.07692 20.8969 9.07242 20.8969 9.06791C20.8969 9.0589 20.9059 9.05439 20.9014 9.04538C20.8969 9.03637 20.8833 9.02736 20.8698 9.01835C20.8653 9.02736 20.8653 9.04538 20.8743 9.0589C20.8788 9.06791 20.8924 9.08143 20.8969 9.08593C20.8022 9.31574 20.8067 9.46894 20.8112 9.48245C20.7707 9.5906 20.604 9.65818 20.5995 9.65818C20.5905 9.6717 20.5814 9.68972 20.5724 9.70324C20.5229 9.79336 20.5048 9.79787 20.4508 9.8204C20.4508 9.8204 20.4508 9.8204 20.4328 9.83391C20.275 9.85644 20.275 9.85644 20.239 9.87447C20.248 10.0367 20.3156 10.1854 20.3201 10.3476C20.1218 10.7531 20.4958 11.1091 20.4192 11.5056C20.4282 11.6903 20.266 11.8165 20.2615 11.9922C20.2705 12.0193 20.2841 12.0553 20.2931 12.0824C20.3111 12.4203 20.3246 12.6636 20.3336 12.8393C20.3246 12.8393 20.3201 12.8393 20.3111 12.8393C20.3111 12.8484 20.3066 12.8574 20.3066 12.8664C20.3066 12.8799 20.3066 12.8799 20.3066 12.8799C20.275 12.9565 20.2029 13.0016 20.1624 13.0691C20.1534 13.0646 20.1399 13.0601 20.1309 13.0556C20.1263 13.0646 20.1263 13.0646 20.0362 13.1638C19.9506 13.1412 19.9506 13.1412 19.9506 13.1412C19.9416 13.2043 19.9416 13.2043 19.9146 13.2584C19.892 13.2404 19.874 13.2133 19.8515 13.1908C19.829 13.2899 19.829 13.2899 19.8245 13.326C19.8605 13.3395 19.883 13.3755 19.9146 13.3981C19.9146 13.4161 19.9236 13.4386 19.9326 13.4567C19.9686 13.4612 19.9957 13.4251 20.0317 13.4251C20.0362 13.4341 20.0407 13.4431 20.0452 13.4522C20.0362 13.4702 20.0182 13.4882 20.0047 13.5017C20.0137 13.5017 20.0227 13.4972 20.0317 13.4972C20.0362 13.5107 20.0362 13.5107 20.1939 13.6504L20.1849 13.7045C20.1354 13.7811 20.1534 13.8847 20.0858 13.9523C20.0227 13.9523 20.0182 13.9523 19.9506 14.1956C19.9416 14.2001 19.8515 14.3038 19.865 14.3443C19.8515 14.3578 19.8515 14.3578 19.8154 14.4209C19.8019 14.4389 19.8019 14.4389 19.8019 14.4389C19.8019 14.448 19.8019 14.457 19.8019 14.466C19.7208 14.502 19.7208 14.502 19.6983 14.502C19.6938 14.5065 19.6848 14.5155 19.6803 14.52C19.6262 14.4975 19.5947 14.4389 19.5361 14.4254C19.3063 13.9658 19.3063 13.9658 19.1441 13.7405C19.1621 13.6504 18.9819 13.4431 18.8872 13.4431C18.8872 13.5062 18.9323 13.8757 18.9323 13.8757C18.9773 14.2182 18.9773 14.2182 18.8962 14.2227C18.8106 14.3398 18.8332 14.3849 18.9007 14.5426C18.9323 14.6147 18.9323 14.6147 18.9233 14.894C19.0449 15.0157 19.0314 15.3266 18.8467 15.4978C18.8557 15.5474 18.8106 15.5789 18.8061 15.624C18.8151 15.6285 18.8151 15.6285 18.8782 16.043C18.8602 16.0385 18.8377 16.025 18.8196 16.0115C18.7971 16.043 18.8061 16.0836 18.7836 16.1151C18.7746 16.1151 18.7656 16.1151 18.7566 16.1196C18.7475 16.1962 18.8016 16.3675 18.8016 16.3675C18.7701 16.426 18.7701 16.426 18.734 16.746C18.725 16.746 18.716 16.7505 18.707 16.7505C18.6845 16.7324 18.6619 16.7144 18.6394 16.6964C18.6619 16.791 18.7385 16.8541 18.7746 16.9397C18.8332 17.0704 18.8602 17.2146 18.9323 17.3407C19.0179 17.4714 19.1305 17.5841 19.2342 17.7012C19.2297 17.7057 19.2297 17.7057 19.2297 17.7057C19.2117 17.8139 19.1621 17.913 19.1531 18.0211C19.1441 18.0121 19.1351 17.9986 19.126 17.9896C19.0179 18.0617 19.0179 18.0617 18.9413 18.0572C19.1936 17.895 19.1936 17.895 19.1396 17.7057C18.8106 17.8139 18.8602 17.9265 18.8962 18.0166C18.8602 18.0211 18.8241 18.0211 18.7566 17.9626C18.7881 17.5931 18.7881 17.5931 18.6394 17.6201C18.1708 17.2867 17.941 17.4354 17.8644 17.4849C17.8599 17.4849 17.594 17.6426 17.585 17.6877C17.576 17.6877 17.558 17.6877 17.549 17.6877C17.4408 17.8274 17.2696 17.7147 17.148 17.7958C16.9632 17.6516 16.6793 17.6967 16.5802 17.8319C16.5622 17.8048 16.5622 17.8048 16.5667 17.7192C16.4856 17.6877 16.4811 17.6877 16.427 17.7373C16.4045 17.7373 16.3684 17.7373 16.3459 17.7418C16.3369 17.7598 16.3144 17.7868 16.2963 17.7958C16.2873 17.7868 16.2738 17.7778 16.2648 17.7688C16.2468 17.7823 16.2152 17.7913 16.1927 17.7913C16.1882 17.7823 16.1792 17.7688 16.1747 17.7598C16.1882 17.7373 16.2062 17.7057 16.2152 17.6832C15.9088 17.8094 15.7016 18.0887 15.3816 18.1924C15.3005 18.1563 15.3005 18.1563 15.2825 18.1383C15.0797 18.2104 15.0797 18.2104 15.0167 18.1338C14.9941 18.1383 14.9626 18.1428 14.9401 18.1473C14.922 18.2374 14.9356 18.2599 14.9581 18.296C14.9265 18.3411 14.8815 18.3771 14.8544 18.4312C14.877 18.4943 14.931 18.5168 14.9851 18.5393C14.9806 18.5393 14.9761 18.5393 14.9716 18.5393C14.9446 18.5393 14.9265 18.5258 14.8995 18.5258C14.8905 18.5258 14.886 18.5303 14.877 18.5303H14.8725C14.877 18.5393 14.877 18.5483 14.8725 18.5618C14.8725 18.5663 14.8725 18.5663 14.8725 18.5709C14.868 18.5078 14.8409 18.4267 14.7373 18.3996C14.7373 18.3861 14.7373 18.3726 14.7373 18.3591C14.8004 18.3275 14.8004 18.3275 14.8139 18.269C14.8229 18.2645 14.8364 18.2554 14.8454 18.2509C14.8229 18.2194 14.8049 18.1924 14.7418 18.2239C14.6111 18.3095 14.4354 18.6249 14.4309 18.6565C14.3137 18.7105 14.3768 18.8277 14.3768 18.9223C14.3678 18.9088 14.3588 18.8908 14.3498 18.8818C14.3453 18.8773 14.3453 18.8727 14.3408 18.8727C14.1876 18.8727 14.1876 18.8727 14.1155 18.8547C14.0209 18.8322 13.9443 18.7691 13.8496 18.7466C13.8226 18.697 13.782 18.661 13.764 18.6114C13.746 18.5663 13.6739 18.5438 13.7054 18.4807C13.6333 18.287 13.6333 18.287 13.5252 18.2419C13.354 18.1698 13.1873 18.2059 13.1828 18.2059C13.1647 18.2104 13.0521 18.305 13.0521 18.305C13.0025 18.3636 12.9169 18.3411 12.8583 18.3861C12.8538 18.3906 12.8538 18.3906 12.8493 18.3951C12.8223 18.4177 12.7817 18.4312 12.7592 18.4582C12.7367 18.4807 12.7457 18.5168 12.7187 18.5393C12.7141 18.5438 12.7096 18.5438 12.7051 18.5438C12.6195 18.5078 12.7051 18.4086 12.6691 18.3501C12.633 18.2915 12.633 18.2915 12.5249 18.2104C12.5609 18.1653 12.5609 18.1653 12.5564 18.1563C12.5384 18.1158 12.4843 18.1203 12.4618 18.0842C12.4663 18.0617 12.4708 18.0572 12.4753 18.0437C12.4889 18.0482 12.4889 18.0482 12.5609 18.1203C12.5609 18.0752 12.5564 18.0707 12.5429 18.0572C12.5429 18.0572 12.4348 17.895 12.4213 17.8319C12.4123 17.7958 12.4618 17.6336 12.4618 17.6291C12.3852 17.5705 12.3266 17.5931 12.3041 17.6021C12.2906 17.6156 12.2906 17.6156 12.2771 17.6381C12.2455 17.6877 12.2455 17.6877 12.1554 17.7102C12.1013 17.7192 12.0833 17.7733 12.0473 17.8048C12.0157 17.8319 11.9797 17.8364 11.9436 17.8499C11.9031 17.8679 11.9526 17.931 11.9076 17.9445C11.9301 18.0076 11.9932 18.0527 12.0112 18.1203C12.0157 18.1338 12.0022 18.1473 12.0022 18.1563C11.9977 18.2059 12.0202 18.2509 11.9977 18.3005C12.0022 18.305 12.0022 18.305 11.9256 18.3546C11.9211 18.3501 11.9076 18.3456 11.9031 18.3456C11.858 18.3816 11.8355 18.4402 11.7904 18.4762C11.7949 18.4807 11.7949 18.4852 11.7994 18.4852C11.7994 18.4852 11.7994 18.4852 11.7949 18.4897C11.7904 18.4852 11.7904 18.4807 11.7859 18.4807C11.7814 18.4852 11.7724 18.4897 11.7679 18.4897C11.7634 18.4897 11.7634 18.4897 11.7634 18.4897C11.7048 18.5213 11.6733 18.5799 11.6102 18.6024C11.5967 18.5934 11.5021 18.5618 11.484 18.5709C11.3939 18.6159 11.2452 18.5663 11.0334 18.4312C10.7541 18.2509 10.7541 18.2509 10.5874 17.9941C10.6054 17.949 10.6054 17.949 10.5063 17.8409C10.5108 17.8048 10.5243 17.7688 10.5153 17.7328C10.5063 17.7147 10.5108 17.7102 10.5108 17.7102V17.7057L10.5017 17.6877L10.4972 17.6742L10.4927 17.6652C10.4432 17.5796 10.335 17.557 10.29 17.4669C10.2539 17.3993 10.2945 17.3227 10.281 17.2551C10.3531 17.1966 10.4837 16.9848 10.4837 16.9848C10.4747 16.9622 10.4657 16.9397 10.4567 16.9172C10.5423 16.8766 10.5738 16.755 10.6955 16.773C10.7225 16.7775 10.7225 16.7775 10.8938 16.6964C10.9614 16.6649 11.0244 16.7279 11.0965 16.7099C11.1236 16.7009 11.1281 16.6694 11.1506 16.6558C11.1506 16.6604 11.1506 16.6694 11.1461 16.6739C11.1506 16.6784 11.1551 16.6784 11.1596 16.6829C11.2182 16.6603 11.2182 16.6288 11.2137 16.6063L11.2227 16.5928C11.2497 16.5928 11.2678 16.6198 11.2903 16.6243C11.2993 16.6198 11.3173 16.6063 11.3218 16.5702C11.2993 16.5522 11.2632 16.5477 11.2452 16.5252C11.2452 16.5207 11.2407 16.5207 11.2407 16.5162L11.2362 16.5117L11.2317 16.5071L11.2272 16.5026L11.2227 16.4981V16.4936H11.1821C11.1776 16.4891 11.1731 16.4846 11.1731 16.4801C11.1371 16.4801 11.1055 16.5026 11.074 16.5117C11.074 16.4891 11.074 16.4891 11.092 16.4621C11.1506 16.4531 11.1506 16.4531 11.2452 16.372C11.2993 16.3765 11.3038 16.3765 11.3669 16.3675C11.3714 16.3449 11.3624 16.3224 11.3669 16.2999C11.3714 16.2999 11.3759 16.2954 11.3804 16.2954C11.4525 16.3314 11.466 16.2954 11.4705 16.2819C11.4795 16.2593 11.493 16.2278 11.7138 16.1647L11.7454 16.1917C11.8806 16.2098 11.8806 16.2098 11.9977 16.0746C12.0473 16.0701 12.223 16.0701 12.3447 16.2007C12.3492 16.2548 12.3762 16.381 12.5024 16.39C12.5024 16.39 12.6466 16.4125 12.6691 16.5207C12.6961 16.5297 12.7277 16.5387 12.7547 16.5477C12.7727 16.5387 12.7772 16.5117 12.8043 16.5162C12.8088 16.5162 12.8178 16.5162 12.8223 16.5207C12.8583 16.5342 12.8673 16.5792 12.9034 16.5928C12.9304 16.6063 12.9575 16.5747 12.989 16.5838C12.9935 16.5657 12.998 16.5432 13.0025 16.5252C12.9845 16.4756 13.007 16.417 12.9755 16.3675C12.971 16.3675 12.9665 16.3675 12.962 16.3675C12.9034 16.3089 12.8538 16.2458 12.7998 16.1872C12.7412 16.1196 12.615 16.1287 12.606 16.007C12.597 15.8943 12.4663 15.9304 12.4077 15.8718C12.3131 15.7727 12.3131 15.7727 12.2726 15.6736C12.2726 15.6736 12.232 15.5294 12.3492 15.2861C12.3717 15.241 12.3942 15.1914 12.4077 15.0337C12.5249 14.9436 12.5249 14.9436 12.5339 14.8985C12.5655 14.7273 12.6015 14.7408 12.6195 14.7453C12.6466 14.7183 12.6601 14.6732 12.6601 14.6732C12.6556 14.6732 12.6511 14.6687 12.6466 14.6687C12.6105 14.6868 12.5745 14.7093 12.5384 14.7273C12.5745 14.7093 12.6105 14.6868 12.6421 14.6687C12.6195 14.6687 12.588 14.6687 12.5655 14.6687C12.5609 14.6597 12.5564 14.6462 12.5564 14.6372C12.588 14.5786 12.6691 14.5516 12.6556 14.466C12.6466 14.4615 12.6375 14.4525 12.6285 14.448C12.5429 14.4705 12.5519 14.4164 12.5609 14.3804C12.5519 14.3714 12.5519 14.3714 12.5024 14.2857C12.4573 14.2857 12.4077 14.2948 12.3627 14.2902C12.3717 14.2722 12.3852 14.2497 12.3897 14.2272C12.3266 14.1911 12.3266 14.1911 12.2275 14.11C12.2861 14.0875 12.2861 14.0875 12.241 13.8937C12.3041 13.9523 12.3311 14.0469 12.4123 14.0875C12.4123 14.1055 12.4123 14.1325 12.4123 14.1506C12.4303 14.1596 12.4618 14.1596 12.4798 14.1551C12.4934 14.1145 12.4258 13.9433 12.3537 13.8442C12.4934 13.8667 12.5024 13.6639 12.5024 13.6639C12.4889 13.6189 12.4708 13.5738 12.4528 13.5288C12.4348 13.5242 12.4077 13.5197 12.3897 13.5242C12.3582 13.4747 12.3582 13.4702 12.3762 13.4251C12.3897 13.4386 12.4077 13.4612 12.4258 13.4747L12.4528 13.4116C12.5069 13.2944 12.5069 13.2944 12.579 13.2854C12.615 13.2088 12.7187 13.1773 12.7187 13.0782C12.7412 13.0556 12.7412 13.0556 12.7772 12.988C12.7232 12.9295 12.6466 12.8754 12.6466 12.8754C12.633 12.587 12.6285 12.542 12.9124 12.2265C12.9169 12.2085 12.9214 12.1815 12.9214 12.1635C12.9394 12.159 12.962 12.1454 12.9755 12.1274C12.971 12.1229 12.971 12.1229 12.9755 12.1229C12.9665 12.1049 12.953 12.0779 12.9439 12.0643C13.0115 12.0238 13.0115 12.0238 13.0205 11.9562C13.0836 11.9562 13.1873 11.8526 13.1737 11.785C13.1828 11.7805 13.1963 11.776 13.2008 11.7715C13.2143 11.785 13.2233 11.8075 13.2323 11.8255C13.2684 11.803 13.2954 11.7579 13.3405 11.7534C13.3495 11.7579 13.3585 11.7669 13.3675 11.7715C13.3675 11.7805 13.3675 11.794 13.3675 11.803C13.2954 11.821 13.2729 11.9021 13.2053 11.9247C13.2008 11.9292 13.2008 11.9292 13.1422 12.186C13.1512 12.1995 13.1512 12.1995 13.1918 12.2716C13.3945 12.2175 13.3269 11.9877 13.4486 11.8796C13.5748 11.7669 13.6198 11.5867 13.7595 11.4831C13.737 11.4831 13.7099 11.4741 13.6874 11.4696C13.6829 11.4605 13.6784 11.447 13.6739 11.4335C13.6243 11.4425 13.5838 11.447 13.5613 11.5462C13.5522 11.5416 13.5342 11.5416 13.5252 11.5371C13.4847 11.5642 13.4576 11.6002 13.4216 11.6318C13.39 11.6228 13.3405 11.6318 13.3089 11.6408C13.2549 11.6453 13.0746 11.5867 12.953 11.5281C12.9575 11.4921 12.9665 11.456 12.9665 11.42C12.953 11.4065 12.9304 11.393 12.9124 11.3839C12.8989 11.393 12.8989 11.393 12.8448 11.4605C12.8313 11.447 12.8043 11.438 12.7862 11.438C12.9259 11.1857 12.9259 11.1857 12.9124 11.1586C12.6781 11.1541 12.4393 11.1496 12.1824 12.0373C12.1194 11.7309 12.3672 11.5146 12.4168 11.2443C12.4303 11.1541 12.4303 11.1406 12.5204 11.028C12.962 10.7216 12.971 10.7216 13.0251 10.7261C13.0611 10.7036 13.0971 10.6765 13.1332 10.654C13.2729 10.4873 13.2729 10.4873 13.2864 10.4602L13.6018 9.85644L13.5928 9.79787L13.5207 9.77534L13.4801 9.7483C13.4756 9.68071 13.4216 9.63115 13.4035 9.56356C13.3134 9.5185 13.1467 9.57257 13.1783 9.65368C13.1828 9.66269 13.1873 9.67621 13.1918 9.68522C13.1512 9.66269 13.1287 9.61763 13.0926 9.59059C13.0205 9.61312 13.0205 9.62214 12.9349 9.79336C12.8989 9.95557 12.8583 9.95107 12.8088 9.94206C12.8043 9.93304 12.7953 9.92403 12.7907 9.91502C12.8989 9.80688 12.962 9.6672 13.0521 9.54554L13.0746 9.49597C12.9935 9.51399 12.9935 9.514 12.9575 9.46443C12.9304 9.46894 12.9034 9.47344 12.8673 9.54554C12.8583 9.55004 12.8403 9.55004 12.8313 9.55455C12.8178 9.54103 12.7907 9.52301 12.7727 9.51399C12.7637 9.5185 12.7547 9.52301 12.7457 9.52751C12.7277 9.59961 12.7277 9.59961 12.7141 9.62214C12.7096 9.60411 12.6916 9.58158 12.6826 9.56807C12.597 9.59059 12.5294 9.47344 12.4348 9.53652C12.3627 9.51399 12.2275 9.45992 12.2275 9.45542C12.241 9.4419 12.2636 9.41487 12.2726 9.39684C12.2681 9.38783 12.2681 9.36981 12.2636 9.36079C12.2455 9.35178 12.223 9.33826 12.2095 9.32475C12.1779 9.30672 12.1374 9.32024 12.1058 9.2887C12.0833 9.26617 12.1104 9.24815 12.1149 9.22562C12.0608 9.19858 12.0022 9.21661 11.9481 9.20759C11.9256 9.17155 11.8896 9.16253 11.8851 9.16253C11.8806 9.16704 11.8715 9.17605 11.8625 9.18056C11.804 9.18056 11.8085 9.12198 11.7769 9.09495C11.7589 9.09495 11.7589 9.09495 11.6553 9.04989C11.6598 9.04989 11.6643 9.05439 11.6688 9.05439C11.6688 9.04538 11.6643 9.03637 11.6598 9.03186L11.5246 8.9868C11.5066 8.97329 11.5066 8.97329 11.4705 8.92372C11.4525 8.96428 11.4795 9.00933 11.448 9.04538C11.4525 9.04989 11.4525 9.0589 11.457 9.0634C11.4615 9.08143 11.4615 9.08143 11.43 9.11748C11.4435 9.15352 11.484 9.15803 11.5021 9.18506C11.5021 9.18957 11.4976 9.19408 11.4976 9.19858C11.4885 9.20309 11.4795 9.20309 11.475 9.20759C11.4705 9.23463 11.484 9.26166 11.4885 9.29321C11.493 9.29321 11.4976 9.29321 11.5021 9.29771C11.5066 9.29321 11.5156 9.28419 11.5246 9.27969C11.5336 9.32925 11.5246 9.37882 11.5381 9.42388C11.5336 9.42388 11.5246 9.42838 11.5201 9.43289C11.4976 9.42388 11.4795 9.41036 11.4615 9.40135C11.4615 9.40135 11.3984 9.4419 11.4345 9.52301C11.3759 9.59961 11.3759 9.59961 11.3714 9.61312C11.3579 9.60411 11.3489 9.59059 11.3398 9.58158C11.3308 9.58158 11.3218 9.58609 11.3128 9.58609C11.2948 9.6717 11.2948 9.6717 11.2768 9.68071C11.2587 9.67621 11.2587 9.67621 11.2497 9.58609C11.2182 9.56356 11.1731 9.51399 11.1731 9.51399C11.1416 9.53202 11.0695 9.61312 11.083 9.65818C11.0785 9.65818 11.074 9.66269 11.074 9.6672C11.0289 9.65818 11.0154 9.65368 10.9974 9.62214C10.9974 9.61763 11.0019 9.61312 11.0019 9.60862C11.0875 9.5951 11.083 9.57257 11.0425 9.53202C11.0425 9.53652 11.0425 9.54103 11.0425 9.54554L10.9163 9.42838C10.8577 9.32475 10.8577 9.32475 10.8532 9.32475C10.8397 9.32475 10.8397 9.30672 10.8397 9.27518C10.8442 9.21661 10.8397 9.20309 10.8352 9.17155C10.7856 9.16254 10.7676 9.20759 10.7316 9.22562C10.7225 9.22111 10.718 9.2121 10.7135 9.20759C10.6865 9.22111 10.664 9.24364 10.6369 9.25716C10.5333 9.23914 10.5333 9.23914 10.5063 9.19408C10.5017 9.18506 10.4747 9.15803 10.3936 9.18957C10.317 9.12649 10.317 9.12649 10.29 9.10846C10.29 9.10846 10.1368 9.16253 10.1187 9.26617C10.1142 9.26617 10.1097 9.27068 10.1097 9.27068C10.0692 9.25265 10.0512 9.24815 10.0331 9.27068C10.0286 9.27068 10.0241 9.27068 10.0196 9.27068C10.0106 9.27969 10.0106 9.27969 10.0016 9.31123C9.99709 9.31123 9.99258 9.31123 9.98808 9.31574C9.97456 9.30222 9.97456 9.30222 9.95654 9.27969C9.95203 9.27969 9.94752 9.27969 9.94302 9.27969C9.93851 9.27518 9.93401 9.26617 9.92499 9.26166C9.90246 9.28419 9.89345 9.31574 9.86191 9.32925C9.83938 9.33827 9.82136 9.31123 9.79883 9.31123C9.76278 9.35178 9.70871 9.43289 9.71322 9.45091C9.72223 9.52301 9.83938 9.60411 9.83938 9.60411C9.85741 9.66269 9.8529 9.73028 9.87994 9.78435C9.89796 9.8249 9.95203 9.82941 9.97005 9.86996C9.99258 9.91502 10.0421 9.94656 10.0557 9.99613C10.0602 10.0051 10.0467 10.0141 10.0376 10.0187C10.0286 10.0232 10.0196 10.0322 10.0151 10.0412C10.0331 10.1358 9.97456 10.2259 9.99258 10.3206C10.0602 10.307 10.1323 10.316 10.2044 10.3025C10.2584 10.3566 10.335 10.3836 10.3756 10.4512C10.6459 10.7802 10.326 11.0911 10.29 11.1226C10.281 11.1226 10.2674 11.1181 10.2584 11.1181C10.2269 11.1767 10.2134 11.2037 10.5378 11.5732C10.6324 11.5687 10.6279 11.5912 10.6099 11.7489C10.6279 11.7624 10.6549 11.776 10.673 11.7895C10.6775 11.812 10.6775 11.839 10.6775 11.8616C10.6324 11.8616 10.6324 11.8616 10.5738 11.8526C10.5513 11.9247 10.5513 11.9382 10.6099 11.9652C10.4972 11.9382 10.4972 11.9382 10.4387 12.0283C10.4387 11.9382 10.4387 11.9382 10.4251 11.8931C10.335 11.8706 10.2674 11.8526 10.2629 11.8526C10.2449 11.8616 10.2269 11.8796 10.2179 11.8976C10.2179 11.8751 10.2224 11.8481 10.2269 11.8255C10.1773 11.7895 10.1187 11.7805 10.0647 11.7534C10.0557 11.7084 10.0376 11.6633 10.0331 11.6182C9.98357 11.5822 9.98357 11.5822 9.95654 11.5101C9.86642 11.4696 9.95203 11.3434 9.85741 11.3028C9.76278 11.2623 9.72223 11.3749 9.64563 11.3794C9.63662 11.3749 9.62761 11.3659 9.61859 11.3569C9.56452 11.3839 9.52848 11.4335 9.4699 11.4425C9.45638 11.429 9.43385 11.4065 9.42033 11.393C9.33923 11.4245 9.2446 11.3749 9.1635 11.429C9.14547 11.4155 9.12294 11.3975 9.11393 11.3749C8.92468 11.3479 8.92468 11.3479 8.90666 11.3479C8.85259 11.3344 8.85259 11.3344 8.80753 11.3344C8.80303 11.3434 8.79401 11.3524 8.785 11.3569C8.76698 11.3524 8.73994 11.3434 8.72642 11.3299C8.66334 11.3389 8.62279 11.3614 8.57773 11.3794C8.50564 11.4741 8.50564 11.4741 8.45156 11.5011C8.44706 11.4921 8.44255 11.4786 8.43805 11.4696C8.42453 11.4515 8.40651 11.4605 8.38848 11.4696C8.40651 11.4605 8.42904 11.4515 8.44706 11.4425C8.45607 11.4155 8.45607 11.411 8.45607 11.4065C8.45607 11.3975 8.44255 11.3839 8.43354 11.3749C8.40651 11.3524 8.39299 11.3344 8.37496 11.2983C8.36595 11.2803 8.36595 11.2758 8.35694 11.2713C8.34793 11.2578 8.33441 11.2488 8.3254 11.2352C8.30287 11.1947 8.30738 11.1902 8.31188 11.1902C8.31188 11.1857 8.30738 11.1857 8.30287 11.1812C8.20374 11.1406 8.18121 11.1722 8.15418 11.2082C8.13615 11.1992 8.10912 11.1812 8.04603 11.1046C8.05054 11.0956 8.05054 11.0866 8.05505 11.0775C8.05505 11.055 8.05505 11.0505 8.05505 11.0505V11.046V11.0415V11.037V11.0325C8.05505 11.028 8.05505 11.028 8.05505 11.0235C8.05505 11.019 8.05505 11.019 8.05505 11.0145C8.05505 11.01 8.05505 11.01 8.05505 11.0054C8.02801 10.5323 8.02801 10.5323 8.05955 10.4828C8.0956 10.4197 8.1001 10.4152 8.07307 10.3656C8.07307 10.3611 8.07758 10.3611 8.07758 10.3566C8.08208 10.3521 8.08659 10.3431 8.09109 10.3386C8.08659 10.3251 8.08659 10.316 8.08208 10.3025C8.08208 10.2935 8.08208 10.289 8.08208 10.28C8.08659 10.298 8.09109 10.316 8.0956 10.3296C8.11362 10.3115 8.11362 10.3115 8.13165 10.2755C8.13165 10.2394 8.12714 10.2394 8.10912 10.2304C8.1001 10.2034 8.1001 10.2034 8.1722 10.1403C8.14967 10.1043 8.14967 10.1043 8.14516 10.0953C8.16769 10.0772 8.20374 10.0862 8.22627 10.0682C8.24429 10.0547 8.24429 10.0547 8.26232 10.0051L8.28935 9.98711C8.29386 9.96008 8.29386 9.96008 8.29386 9.94206C8.28935 9.94206 8.28485 9.93755 8.28034 9.93755C8.23528 9.92403 8.20374 9.85644 8.14967 9.89249C8.14516 9.89249 8.14066 9.88798 8.13615 9.88798C8.13615 9.87897 8.13165 9.86996 8.12714 9.86095C8.12263 9.86095 8.11813 9.86095 8.11362 9.86095C8.1001 9.87447 8.09109 9.89249 8.07758 9.90601C8.05505 9.87447 8.019 9.87447 7.99196 9.85194C8.00999 9.85194 8.0235 9.85644 8.08208 9.84743C8.08208 9.85644 8.08208 9.86546 8.08208 9.86996C8.14066 9.80688 8.22627 9.88348 8.28935 9.83391C8.28935 9.81589 8.28935 9.81589 8.31639 9.78885C8.30738 9.6672 8.30738 9.6672 8.36595 9.69423C8.37496 9.68972 8.37947 9.68522 8.38848 9.68071C8.45607 9.62214 8.45607 9.62214 8.4786 9.57257L8.50564 9.54103C8.50113 9.49147 8.52817 9.45091 8.52366 9.40135L8.54619 9.34277L8.54168 9.31123L8.52366 9.24815C8.51465 9.25265 8.51014 9.25716 8.50113 9.26166C8.48311 9.25716 8.46959 9.26617 8.45156 9.26617C8.54619 9.22562 8.62279 8.95977 8.54619 8.94175C8.53267 8.93724 8.51915 8.94175 8.51014 8.94175C8.50113 8.91471 8.50113 8.91471 8.52817 8.88768C8.55971 8.89218 8.55971 8.89218 8.58674 8.85613C8.69939 8.91922 8.69939 8.91922 8.72192 8.85163C8.72192 8.85163 8.81204 8.83811 8.80303 8.81107C8.79852 8.80206 8.79401 8.79756 8.74895 8.76151C8.73994 8.7525 8.73994 8.7525 8.68587 8.72096C8.65884 8.73447 8.65884 8.73447 8.65433 8.73898C8.65433 8.72096 8.67235 8.71195 8.68137 8.69843H8.68587C8.71741 8.73898 8.80303 8.76151 8.80303 8.76151C8.83006 8.78855 8.83457 8.79305 8.88413 8.80657C8.87963 8.79756 8.87061 8.78855 8.86611 8.78404C8.86611 8.77953 8.86611 8.77953 8.92468 8.6759C8.92018 8.66689 8.91567 8.65787 8.90666 8.65337C8.9337 8.62633 8.9337 8.62633 8.9382 8.56776C8.95623 8.54973 8.98777 8.5227 8.97425 8.40554C8.97425 8.40104 8.96974 8.39653 8.96974 8.39203C8.80303 8.30641 8.80302 8.30641 8.77599 8.23432C8.78951 8.22531 8.80302 8.2163 8.81204 8.20728C8.81654 8.21179 8.83006 8.21179 8.83457 8.20728C8.84358 8.16673 8.87963 8.13068 8.87512 8.08562C8.84358 8.07661 8.84358 8.07661 8.83457 8.09013C8.81204 8.08563 8.81204 8.08112 8.80753 8.0676C8.81654 8.05408 8.83006 8.04057 8.83457 8.02254C8.83006 8.00902 8.82105 7.99551 8.81204 7.98199C8.77599 7.97748 8.72192 8.02254 8.7039 7.97298C8.69939 7.97298 8.69488 7.97298 8.69488 7.96847C8.69038 7.97298 8.68137 7.97748 8.67235 7.98199C8.66785 7.96397 8.66785 7.96397 8.67686 7.94594C8.67686 7.93693 8.67235 7.92341 8.66785 7.9144C8.64081 7.92341 8.6318 7.95495 8.60477 7.95946C8.5552 7.91891 8.42904 8.01804 8.42904 8.01804C8.42453 8.01353 8.41101 8.00902 8.40651 8.00902C8.39749 8.02705 8.39749 8.02705 8.39749 8.04507C8.402 8.04507 8.40651 8.04507 8.41101 8.04958C8.42002 8.0631 8.42904 8.08562 8.43354 8.10365C8.43354 8.11266 8.43805 8.12167 8.43805 8.13068C8.44255 8.13519 8.44706 8.1397 8.44706 8.1397C8.45156 8.1397 8.46058 8.13519 8.46508 8.13068C8.46959 8.13068 8.47409 8.13068 8.4786 8.13068C8.52366 8.18926 8.52366 8.18926 8.54168 8.18025C8.54168 8.18025 8.54619 8.22981 8.48311 8.27938C8.4786 8.27938 8.47409 8.27487 8.47409 8.27487C8.46959 8.27487 8.46959 8.27938 8.46508 8.27938C8.46959 8.30191 8.48761 8.46863 8.49212 8.46863C8.48311 8.49116 8.46959 8.51369 8.46058 8.53621C8.45157 8.55874 8.45157 8.55874 8.45607 8.6759C8.44706 8.68491 8.43805 8.69392 8.42904 8.69843C8.39749 8.7525 8.39749 8.7525 8.402 8.80657C8.35694 8.70744 8.21726 8.65337 8.26232 8.51369C8.26682 8.51369 8.27133 8.51369 8.27584 8.51369C8.28034 8.51819 8.28034 8.5227 8.28485 8.5227C8.30287 8.48665 8.28485 8.46412 8.26232 8.43258C8.25781 8.41906 8.25781 8.40554 8.25331 8.39203L8.23078 8.36499L8.21275 8.33345L8.19473 8.35147L8.16319 8.33796H8.13615C8.07758 8.2929 8.05955 8.42807 8.05955 8.43258C8.05955 8.44159 8.06406 8.45511 8.06406 8.46412C8.03702 8.49116 8.03702 8.54523 8.03702 8.59479C8.03702 8.59479 7.99647 8.50017 8.02801 8.4506C8.02801 8.4461 8.0235 8.44159 8.0235 8.43709C8.00548 8.43258 8.00548 8.43258 7.97394 8.43258C7.96493 8.39653 7.96493 8.39653 8.00999 8.37851C8.00548 8.36048 8.00097 8.34697 7.99647 8.32894C7.96943 8.32444 7.96943 8.32444 7.96493 8.31543C7.92888 8.32444 7.91536 8.2929 7.88833 8.27938C7.88382 8.28839 7.87481 8.2974 7.88382 8.31543C7.8658 8.36499 7.79821 8.35598 7.7937 8.34246C7.7937 8.33796 7.7937 8.33345 7.7937 8.32894C7.7937 8.33345 7.7892 8.33345 7.78469 8.33796C7.84327 8.2163 7.84777 8.2163 7.86129 8.20728C7.8658 8.20728 7.8703 8.21179 7.8703 8.21179C7.87481 8.21179 7.87932 8.20728 7.87932 8.20728C7.87932 8.17574 7.88382 8.1442 7.83876 8.12618C7.80722 8.1397 7.76216 8.08562 7.73062 8.03606C7.70809 8.00001 7.72612 7.95946 7.70359 7.92341C7.68106 7.89638 7.67204 7.89187 7.64501 7.85132C7.59544 7.86033 7.59544 7.86033 7.5639 7.8378C7.62699 7.76571 7.62699 7.76571 7.636 7.71164L7.65853 7.65756L7.64501 7.63504C7.636 7.59899 7.636 7.59448 7.67655 7.56294C7.7171 7.5314 7.7171 7.5314 7.72612 7.5314C7.73513 7.5314 7.76667 7.53591 7.7892 7.48634C7.79821 7.46832 7.79821 7.46832 7.79821 7.3827C7.79821 7.36468 7.79821 7.36468 7.81173 7.35116C7.81623 7.34666 7.82074 7.34215 7.82074 7.34215L7.84777 7.27456L7.8658 7.17994C7.8658 7.17093 7.85679 7.14389 7.85679 7.14389C7.85228 7.13939 7.81173 7.13488 7.81173 7.13488L7.74414 7.16642C7.74414 7.16642 7.73513 7.17093 7.72612 7.17994C7.72161 7.17543 7.72161 7.17093 7.7126 7.16642C7.70809 7.16642 7.70359 7.17093 7.69908 7.17093C7.69007 7.17093 7.68556 7.15741 7.67655 7.16192C7.67204 7.16642 7.66754 7.16642 7.66303 7.17093H7.65853C7.50082 7.29259 7.50082 7.29259 7.50983 7.35567C7.50082 7.35567 7.49181 7.35116 7.4828 7.35116C7.45576 7.54942 7.59544 7.74318 7.49181 7.93693C7.50082 7.95495 7.50533 7.97748 7.50983 7.99551C7.47829 8.00902 7.4107 8.04057 7.42873 8.2208C7.44224 8.22981 7.46477 8.24333 7.47829 8.25685C7.44224 8.34697 7.44675 8.46863 7.55038 8.45961H7.58193C7.60446 8.47313 7.6405 8.47313 7.66754 8.47313C7.68106 8.53622 7.66303 8.64886 7.66303 8.64886C7.67204 8.65337 7.68106 8.65787 7.69007 8.65787C7.70809 8.63084 7.70809 8.63084 7.72161 8.56776C7.78469 8.6759 7.72161 8.757 7.636 8.86965C7.55489 8.97329 7.64951 9.07692 7.636 9.18056C7.60896 9.09945 7.60896 9.09945 7.60896 9.09044C7.59094 9.09495 7.56841 9.09495 7.55038 9.09044C7.52335 9.04989 7.53687 9.03186 7.55489 9.00483C7.5594 8.9823 7.5594 8.9823 7.5594 8.9823V8.97779V8.97329V8.95977V8.95526V8.95076V8.94625C7.5594 8.92823 7.55489 8.9057 7.54588 8.88768C7.53687 8.88768 7.52335 8.89218 7.51434 8.89218C7.50983 8.88767 7.50082 8.88317 7.49631 8.87866C7.49181 8.88768 7.4828 8.89669 7.47829 8.90119C7.46928 8.90119 7.46027 8.90119 7.45126 8.90119C7.44224 8.88317 7.43323 8.86515 7.41971 8.85163C7.4062 8.85613 7.4062 8.85613 7.34762 8.93724C7.3296 8.93724 7.31157 8.94175 7.29355 8.95076C7.32058 8.97779 7.33861 8.99131 7.30707 9.12649C7.29805 9.12198 7.28904 9.12198 7.28003 9.11748C7.28003 9.10846 7.28003 9.09495 7.28003 9.08593C7.20343 9.1355 7.12683 9.18506 7.05474 9.23463C7.01418 9.2121 6.95561 9.25265 6.92857 9.19408C6.91956 9.18957 6.91055 9.18957 6.90154 9.18506C6.87901 9.19858 6.87901 9.19858 6.82043 9.22111C6.71679 9.12649 6.71679 9.12649 6.69426 9.03186C6.57711 9.01835 6.41039 9.27518 6.42842 9.32024C6.43292 9.32925 6.44193 9.33376 6.44644 9.34277C6.50502 9.31574 6.50502 9.31574 6.51403 9.29321C6.54557 9.23012 6.62668 9.20759 6.65822 9.14451C6.66272 9.15352 6.66723 9.16704 6.66723 9.17605C6.61316 9.26617 6.51853 9.32475 6.47798 9.42838C6.51403 9.48696 6.55458 9.63115 6.55458 9.63115C6.54557 9.63115 6.53205 9.63115 6.52755 9.63115C6.52304 9.65368 6.52304 9.65368 6.52755 9.72127C6.51853 9.71225 6.50952 9.70324 6.50502 9.69423C6.4915 9.69423 6.46897 9.68522 6.45996 9.6717C6.496 9.56807 6.496 9.56807 6.47798 9.52301C6.45996 9.52751 6.43743 9.53652 6.42842 9.54554C6.39688 9.50048 6.39687 9.49597 6.40138 9.45542C6.35182 9.45542 6.34731 9.44641 6.32478 9.41937C6.31577 9.41937 6.30225 9.41937 6.29324 9.41937C6.27522 9.4419 6.27522 9.4419 6.22565 9.47344C6.21664 9.51399 6.20763 9.55004 6.09498 9.56356C6.06794 9.59961 6.05443 9.59961 6.02289 9.59059C6.01387 9.5951 6.00486 9.59961 5.99585 9.60411C5.98233 9.59059 5.96431 9.57708 5.9553 9.56356C5.94629 9.56807 5.93727 9.57257 5.93277 9.58158C5.92376 9.58158 5.91024 9.57708 5.90573 9.57708C5.91474 9.50949 6.01387 9.50498 6.00486 9.42838C5.99585 9.36079 5.92376 9.26166 5.86518 9.2887C5.82913 9.30222 5.8021 9.33826 5.76605 9.34728C5.62186 9.25716 5.62186 9.25716 5.58131 9.26617C5.5723 9.24815 5.56779 9.22111 5.56328 9.20309C5.39657 9.16253 5.39657 9.16253 5.39206 9.16704C5.32898 9.18957 5.35601 9.27969 5.29293 9.30222C5.28842 9.23914 5.31546 9.09495 5.31546 9.09495C5.30645 9.09495 5.29744 9.09044 5.28842 9.09044C5.23886 9.15803 5.23886 9.24815 5.19831 9.32024C5.17127 9.20309 5.25238 9.0589 5.1172 8.96428C5.08566 9.15803 5.08566 9.15803 5.02708 9.21661C4.98653 9.20759 4.97301 9.20309 4.91894 9.29771C4.90993 9.32925 4.90542 9.36079 4.90092 9.38783C4.90092 9.38783 4.90092 9.38783 4.89641 9.38783C4.90092 9.36079 4.90993 9.32925 4.91443 9.30222L4.90542 9.32024C4.89641 9.33376 4.8874 9.34728 4.87839 9.36079C4.87839 9.35629 4.87388 9.34728 4.87388 9.33826L4.86938 9.33376C4.8919 9.31123 4.91443 9.28419 4.92795 9.25265C4.93696 9.2121 4.94598 9.16704 4.95499 9.12649C4.92345 9.14902 4.91443 9.19858 4.86938 9.20759C4.83333 9.25716 4.78827 9.29321 4.76123 9.34728C4.75673 9.34277 4.74772 9.34277 4.74321 9.33826C4.7342 9.34728 4.72519 9.36079 4.71617 9.36981C4.7387 9.30222 4.7387 9.30222 4.72068 9.27518C4.70266 9.29321 4.69365 9.32024 4.67562 9.34277C4.62155 9.34728 4.62155 9.34728 4.59902 9.53202C4.59452 9.52301 4.59001 9.50949 4.5855 9.49597C4.581 9.49147 4.57649 9.48245 4.57649 9.47795C4.56748 9.46894 4.56748 9.46894 4.56748 9.46443C4.5044 9.46894 4.5044 9.46894 4.47736 9.31123L4.49088 9.26166H4.47736C4.47286 9.26617 4.46835 9.27068 4.46384 9.27518C4.4323 9.26166 4.4323 9.26166 4.40977 9.27068C4.40076 9.27068 4.40076 9.27068 4.39626 9.27068C4.38274 9.2121 4.37823 9.14902 4.3557 9.09044C4.32867 9.08593 4.32867 9.08593 4.30163 9.11297C4.29262 9.10846 4.2791 9.10396 4.27009 9.09945C4.2746 9.07242 4.27009 9.04538 4.2746 9.02285C4.24306 9.01835 4.23855 9.01835 4.22053 9.03186C4.17096 8.91471 4.17096 8.91471 4.14393 8.89669C4.14393 8.89218 4.14393 8.88317 4.14843 8.87866C4.13942 8.88768 4.1259 8.90119 4.11689 8.9102C4.1214 8.83811 4.1214 8.83811 4.11689 8.82459C4.13942 8.757 4.13942 8.757 4.13942 8.71645C4.13491 8.71645 4.1259 8.72096 4.11689 8.72096C4.11238 8.71645 4.10788 8.71195 4.10337 8.70744C4.09887 8.71195 4.09436 8.71645 4.08985 8.72096C4.08985 8.70744 4.08985 8.70744 4.10337 8.64436C4.08985 8.64886 4.08985 8.64886 4.06282 8.68942C4.06282 8.63084 4.10337 8.57677 4.09887 8.51819C4.07183 8.55424 4.05381 8.5993 4.01776 8.63084C4.00875 8.62633 3.99523 8.61732 3.99072 8.6038C3.95468 8.63534 3.94567 8.68491 3.90511 8.71645C3.90511 8.71194 3.90511 8.70293 3.90061 8.69392C3.76994 8.757 3.78796 8.9057 3.72488 9.00483C3.72037 9.00032 3.71586 8.99131 3.71136 8.9868L3.70235 9.00032C3.70235 8.99582 3.69784 8.99131 3.69784 8.9868C3.67982 9.01384 3.67982 9.01384 3.55816 9.59059C3.56266 9.5951 3.56717 9.59961 3.56717 9.60411C3.57168 9.59961 3.57168 9.5906 3.57618 9.58609C3.58069 9.64467 3.55816 9.69874 3.54915 9.75731H3.55365C3.55816 9.75731 3.56717 9.76182 3.57168 9.76182C3.57168 9.76633 3.57168 9.77534 3.57168 9.77984L3.56266 9.81589C3.56266 9.81138 3.56266 9.80237 3.56266 9.79787C3.54464 9.8204 3.54464 9.84743 3.51761 9.86095C3.5131 9.85644 3.50409 9.85194 3.49958 9.84743C3.49958 9.83842 3.49057 9.8204 3.48606 9.81138C3.49057 9.75731 3.51761 9.71225 3.52211 9.65818C3.51761 9.65368 3.5131 9.64917 3.50859 9.64467C3.47705 9.70775 3.47705 9.70775 3.47255 9.73478C3.47255 9.73028 3.46804 9.72127 3.46804 9.71676C3.46353 9.71225 3.46353 9.71225 3.46353 9.71225C3.35539 9.87897 3.35539 10.1854 3.37792 10.2034C3.38693 10.2304 3.38693 10.253 3.39144 10.28C3.40946 10.262 3.41848 10.2349 3.4365 10.2169C3.45002 10.271 3.35539 10.5819 3.35539 10.5819C3.35089 10.5774 3.35089 10.5684 3.34638 10.5639C3.34188 10.5684 3.34188 10.5684 3.31033 10.627C3.30132 10.6089 3.30132 10.6089 3.30583 10.5684C3.30583 10.5594 3.30132 10.5594 3.30132 10.5549C3.30132 10.5549 3.20219 10.8928 3.19318 11.019C3.20219 11.0009 3.20219 11.0009 3.21571 10.9604C3.21571 10.9694 3.2112 10.9784 3.2112 10.9874C3.2112 10.9874 3.17966 11.1271 3.2067 11.1632C3.20219 11.2127 3.20219 11.2127 3.19769 11.2307C3.19769 11.2172 3.19318 11.1992 3.19318 11.1857C3.19318 11.1902 3.18867 11.1992 3.18867 11.2037C3.18417 11.1812 3.18417 11.1812 3.18867 11.1451C3.16615 11.1812 3.16164 11.4245 3.17516 11.4425C3.2067 11.3975 3.20219 11.3434 3.21571 11.2938C3.21571 11.2938 3.18417 11.6588 3.17065 11.7715C3.17516 11.7715 3.18417 11.7669 3.18867 11.7669C3.19318 11.7624 3.19318 11.7534 3.19769 11.7489C3.20219 11.7579 3.2067 11.776 3.2067 11.785L3.21571 11.7895C3.21571 11.8345 3.21571 11.8345 3.22022 11.9247C3.22022 11.9247 3.22472 11.9201 3.22923 11.9156L3.23824 11.8481L3.24275 11.83C3.24725 11.8075 3.24725 11.785 3.25176 11.7669C3.26528 11.8165 3.24275 11.8706 3.24725 11.9201C3.25176 11.9156 3.25626 11.9111 3.26077 11.9066L3.26528 11.8931L3.27429 11.8841C3.2833 11.8706 3.2833 11.8706 3.29231 11.821C3.30132 11.9472 3.23824 12.0643 3.24275 12.1905C3.23373 12.1995 3.22472 12.213 3.22472 12.222C3.23373 12.2446 3.24275 12.2626 3.25626 12.2806C3.24275 12.2671 3.22923 12.2491 3.21571 12.2311C3.2112 12.2581 3.21571 12.2851 3.20219 12.3077C3.19769 12.3122 3.19769 12.3122 3.19769 12.3167C3.19769 12.3122 3.19769 12.3077 3.19769 12.3077C3.18417 12.3122 3.19318 12.3257 3.18867 12.3392C3.18417 12.3437 3.17966 12.3482 3.17516 12.3572C3.17516 12.3572 3.17516 12.3617 3.17516 12.3662C3.17065 12.3888 3.16615 12.4023 3.16164 12.4023C3.15713 12.4248 3.16615 12.4518 3.15263 12.4744C3.14812 12.4699 3.14812 12.4654 3.14812 12.4609C3.14362 12.4563 3.14362 12.4428 3.1346 12.4428C3.1346 12.4428 3.1346 12.4428 3.1346 12.4383C3.12559 12.4428 3.11658 12.5059 3.11658 12.5284C3.11658 12.542 3.11658 12.551 3.11207 12.551L3.10757 12.5465V12.5555H3.10306V12.551C3.09856 12.5645 3.10306 12.6276 3.10757 12.6411C3.11207 12.6321 3.10306 12.6186 3.11207 12.6095V12.6456L3.11658 12.6231C3.11658 12.6231 3.11658 12.6231 3.12559 12.551C3.1301 12.551 3.1301 12.5555 3.1301 12.56C3.1301 12.56 3.1301 12.587 3.1301 12.596C3.1346 12.596 3.1346 12.5915 3.1346 12.587C3.1346 12.5915 3.13911 12.596 3.13911 12.6005C3.13911 12.6231 3.13911 12.6276 3.14362 12.6321C3.14812 12.6231 3.14812 12.5915 3.15263 12.5735L3.16164 12.569C3.16164 12.56 3.16164 12.5555 3.16164 12.5465C3.17516 12.5645 3.16164 12.5825 3.16615 12.6005H3.17065C3.17065 12.596 3.17065 12.587 3.17516 12.5825L3.17966 12.5645L3.18867 12.5465V12.542C3.18867 12.5465 3.19318 12.5465 3.19318 12.551V12.5465C3.19318 12.5465 3.19318 12.5465 3.19769 12.5104C3.19769 12.4924 3.19318 12.4744 3.19769 12.4563C3.19769 12.4563 3.2112 12.4158 3.22022 12.4068L3.22472 12.4023C3.22472 12.4023 3.22472 12.4023 3.22472 12.4113C3.22923 12.4068 3.22923 12.3978 3.22923 12.3933C3.24275 12.3797 3.24275 12.3797 3.25176 12.3122V12.3077C3.25176 12.2941 3.25176 12.2806 3.25176 12.2671C3.25626 12.2626 3.26528 12.2581 3.26978 12.2581C3.27429 12.2446 3.2833 12.222 3.29231 12.2085L3.29682 12.1905L3.30583 12.177L3.31033 12.168C3.34188 12.1409 3.31935 12.0914 3.35089 12.0643C3.39595 11.9427 3.37342 11.812 3.42298 11.6903C3.42298 11.6813 3.42298 11.6768 3.42749 11.6678C3.4365 11.5822 3.49057 11.5146 3.51761 11.438C3.52211 11.4425 3.53112 11.447 3.53563 11.447C3.55816 11.4245 3.56266 11.42 3.57168 11.402C3.58069 11.447 3.55365 11.4921 3.56717 11.5371C3.55816 11.5326 3.54464 11.5281 3.53112 11.5281C3.52662 11.5191 3.52211 11.5011 3.52211 11.4921C3.46804 11.5326 3.42749 11.8841 3.42749 11.9247C3.42749 11.9292 3.42749 11.9292 3.42749 11.9292C3.44101 11.9292 3.47705 11.9337 3.53112 11.812C3.67081 11.7715 3.54915 11.6002 3.62575 11.5146C3.62124 11.5281 3.61674 11.5462 3.61674 11.5642C3.61674 11.5777 3.61674 11.5912 3.61674 11.6047C3.62124 11.6002 3.62575 11.5957 3.63025 11.5867C3.64377 11.5867 3.65729 11.5867 3.6663 11.5822C3.67531 11.6047 3.67982 11.6092 3.68432 11.6633C3.67531 11.6768 3.67531 11.6768 3.6663 11.7174C3.67081 11.7174 3.67982 11.7174 3.68432 11.7174C3.68883 11.7309 3.68883 11.7444 3.69334 11.7579H3.69784C3.72037 11.7444 3.72938 11.7174 3.74741 11.6994C3.72938 11.7444 3.72938 11.7444 3.75191 11.8571C3.76543 11.8571 3.77895 11.8571 3.79247 11.8526C3.79247 11.8571 3.79697 11.8661 3.79697 11.8706C3.80598 11.8706 3.81499 11.8751 3.8195 11.8751L3.82851 11.8661L3.83752 11.8616H3.85104C3.86005 11.8661 3.86907 11.8796 3.87808 11.8886C3.88258 11.8841 3.8916 11.8841 3.8961 11.8796C3.92764 11.9877 3.92764 11.9877 3.95468 11.9967C3.9682 11.9742 3.9682 11.9697 3.99072 11.9517C3.99974 11.9607 4.00424 11.9742 4.00424 11.9877C3.86907 12.1139 4.1259 12.222 4.1259 12.3617C4.17547 12.3527 4.17547 12.3257 4.17547 12.3122C4.17547 12.2986 4.17547 12.2986 4.17547 12.2986C4.18448 12.2806 4.18448 12.2581 4.18898 12.2401C4.24306 12.3572 4.24306 12.3572 4.24756 12.3572C4.25657 12.3167 4.24756 12.2716 4.24756 12.2265C4.38724 12.6005 4.38724 12.6005 4.38274 12.6276C4.41879 12.6276 4.45934 12.6276 4.49989 12.6231C4.45934 12.6231 4.41879 12.6276 4.38274 12.6276C4.37823 12.6321 4.37373 12.6411 4.38274 12.6546C4.39175 12.6726 4.40977 12.6861 4.41879 12.7042L4.45033 12.7898C4.45033 12.7943 4.45033 12.7943 4.45483 12.7988C4.45483 12.7988 4.46384 12.8213 4.47286 12.8393V12.8439C4.48187 12.8529 4.47736 12.8664 4.48637 12.8799C4.49088 12.8889 4.5089 12.8844 4.51341 12.8979C4.51341 12.9024 4.5089 12.9069 4.5044 12.9114C4.48637 12.925 4.49088 12.9655 4.49088 12.9745C4.49088 12.9745 4.51791 12.9835 4.52693 12.961C4.53143 12.952 4.54946 12.952 4.55396 12.9565L4.581 13.0286C4.581 13.0421 4.56748 13.0511 4.56748 13.0646C4.56748 13.0691 4.56748 13.0691 4.56748 13.0737C4.57199 13.0962 4.59902 13.1052 4.60353 13.1322C4.60353 13.1503 4.59902 13.1548 4.59452 13.1593C4.59001 13.1593 4.5855 13.1683 4.59452 13.2088C4.59902 13.2224 4.60353 13.2359 4.60803 13.2404C4.61254 13.2404 4.61704 13.2359 4.62155 13.2359V13.2404C4.62155 13.2494 4.62606 13.2629 4.62606 13.2674C4.62606 13.2944 4.62606 13.3125 4.63056 13.326C4.63507 13.335 4.63957 13.344 4.64408 13.353L4.6621 13.335C4.66661 13.3395 4.67562 13.3485 4.68463 13.3575C4.68013 13.3756 4.66661 13.3936 4.65309 13.4071C4.6576 13.4251 4.6576 13.4251 4.72969 13.5333C4.7387 13.5152 4.74772 13.4927 4.75222 13.4747C4.76123 13.4792 4.77025 13.4837 4.77926 13.4882C4.77025 13.6189 4.8919 13.7721 4.8919 13.7721C4.90993 13.7856 4.90993 13.7856 4.90993 13.7856L4.92795 13.7721C4.93696 13.7721 4.95048 13.7721 4.95949 13.7721C4.95499 13.7811 4.95499 13.7901 4.95048 13.7991C4.94598 13.7991 4.94147 13.8036 4.93696 13.8036C4.91443 13.8577 4.89641 13.9072 4.92795 13.9388C4.93246 13.9343 4.94147 13.9253 4.95048 13.9208C4.95048 14.0559 4.95048 14.0559 4.99554 14.0785L5.00005 14.074C5.00906 14.0785 5.01807 14.092 5.02708 14.092C5.03159 14.083 5.03609 14.074 5.04511 14.065C5.05412 14.065 5.06763 14.0695 5.07665 14.074C5.08115 14.092 5.08566 14.1145 5.08115 14.1325C5.15775 14.1596 5.16226 14.1641 5.20732 14.1325C5.21182 14.1506 5.22084 14.1776 5.22534 14.1956C5.23435 14.1956 5.24336 14.2001 5.25238 14.2046C5.2704 14.2722 5.2704 14.2722 5.29293 14.2857C5.30645 14.2857 5.31095 14.2857 5.31997 14.2857H5.33799C5.36502 14.3443 5.47317 14.3533 5.45064 14.4434C5.45514 14.457 5.45514 14.457 5.45514 14.457C5.47767 14.4885 5.52273 14.502 5.53625 14.5426C5.53174 14.5516 5.52273 14.5606 5.51822 14.5696C5.52273 14.5786 5.52724 14.5876 5.53174 14.5966C5.47767 14.6642 5.44162 14.6417 5.36953 14.5966C5.36052 14.6012 5.35151 14.6057 5.34249 14.6102C5.33348 14.84 5.5002 15.0157 5.54526 15.2275C5.67143 15.9169 5.79759 16.3269 6.15806 16.6603C6.19862 16.6513 6.23016 16.6288 6.27071 16.6198C6.14454 16.737 6.31577 16.8181 6.31577 16.8181C6.39688 16.9442 6.51853 17.0388 6.60865 17.1605C6.68976 17.2506 6.81592 17.2146 6.91055 17.2732C6.99616 17.2371 7.1764 17.3858 7.21695 17.4669C7.21695 17.4714 7.636 17.886 7.75766 17.94L7.7937 17.949L7.84777 17.9761C7.97394 18.0617 7.97394 18.0617 8.01449 18.1203C8.00548 18.1293 7.99647 18.1428 7.98295 18.1518C7.97845 18.1473 7.96943 18.1428 7.96493 18.1383C7.92437 18.1518 7.92437 18.1518 7.90185 18.1743C7.90185 18.1833 7.90635 18.1924 7.91086 18.1969C7.96493 18.2014 8.02801 18.2509 8.05955 18.2735C8.0956 18.2645 8.1001 18.269 8.13165 18.2825C8.22627 18.3275 8.33892 18.305 8.42904 18.3591C8.50113 18.4041 8.49212 18.5078 8.56872 18.5483L8.83457 18.6339C8.91117 18.6339 9.01931 18.7691 9.05536 18.67C9.05085 18.661 9.04634 18.6475 9.04184 18.6384C8.90666 18.5438 8.71291 18.5348 8.6273 18.3636C8.56872 18.3456 8.56872 18.3456 8.5552 18.3456C8.55971 18.332 8.56872 18.314 8.58224 18.305L7.96042 17.8364C7.90635 17.8048 7.83876 17.8409 7.78469 17.8048C7.69007 17.7328 7.64951 17.6201 7.56841 17.5435C7.7126 17.5345 7.7126 17.5345 7.72612 17.521C7.75315 17.53 7.75766 17.53 7.81173 17.5705C7.81623 17.566 7.82525 17.5615 7.82975 17.557C7.88382 17.6246 7.88382 17.6246 7.89734 17.6652C8.09109 17.7688 8.20825 17.9941 8.45607 18.0121C8.48311 18.0301 8.48761 18.0707 8.51915 18.0887L9.00128 18.3185C9.05536 18.3005 9.69519 18.5934 9.69519 18.6925C9.87092 18.7871 9.83037 18.8908 9.83037 18.8908C9.91598 18.9674 10.0241 19.0665 10.3666 19.0845C10.3801 19.0845 10.3801 19.0845 10.3801 19.0845C10.6054 19.071 10.6054 19.071 10.9253 19.098C10.9568 19.098 10.9659 19.089 10.9794 19.0845H11.0199C11.3038 19.08 11.6958 19.071 11.7364 18.8547C11.7994 18.8142 11.9346 18.8232 12.0202 18.8367C12.0383 18.8547 12.0608 18.8502 12.0788 18.8412C12.0788 18.8412 12.0788 18.8457 12.0833 18.8457C12.1509 18.8547 12.1509 18.8547 12.1599 18.8412C12.3627 18.9133 12.3627 18.9133 12.3807 18.9088C12.4393 18.8998 12.5024 18.9448 12.5564 18.8863C12.579 18.8592 12.633 18.8547 12.6511 18.8547C12.8133 18.8457 12.8133 18.8457 13.0791 18.7466C13.0881 18.7466 13.0881 18.7466 13.0881 18.7466C13.0971 18.7421 13.1062 18.7421 13.1152 18.7376C13.1828 18.7961 13.2729 18.7826 13.345 18.8277C13.4171 18.8727 13.5342 18.7826 13.5793 18.8863C13.5928 18.9629 13.6784 19.053 13.8541 18.9944C13.8496 18.9719 13.8496 18.9719 13.7911 18.9358C13.8316 18.9268 13.8632 18.9809 13.9082 18.9629C13.9172 18.9674 13.9262 18.9719 13.9352 18.9719C13.9488 18.9629 13.9488 18.9629 14.0254 18.9448C14.0479 18.9629 14.0839 18.9584 14.093 18.9944C14.1245 19.0079 14.1605 19.0034 14.1876 19.0214C14.1966 19.0124 14.2101 19.0079 14.2191 18.9989C14.2191 18.9944 14.2146 18.9899 14.2146 18.9854C14.2462 18.9539 14.2957 18.9629 14.3363 18.9539C14.3137 19.0575 14.3994 19.1791 14.2822 19.2648C14.2867 19.2738 14.2957 19.2918 14.3002 19.3008C14.2957 19.3143 14.2912 19.3323 14.2867 19.3414C14.4039 19.3549 14.4805 19.4225 14.5255 19.5351C14.5571 19.5486 14.5571 19.5486 14.7328 19.7154C14.7103 19.864 14.7103 19.864 14.6472 19.9542C14.6652 19.9947 14.6787 20.0353 14.6922 20.0758C14.7012 20.0803 14.7148 20.0893 14.7238 20.0938C14.6742 20.1344 14.6742 20.1344 14.5886 20.229C14.5976 20.247 14.6246 20.2696 14.6427 20.2786C14.6697 20.2966 14.6697 20.2966 14.6697 20.2966C14.6652 20.3101 14.6652 20.3101 14.7373 20.5129C14.7508 20.5399 14.7508 20.5399 14.7508 20.5399C14.7643 20.5399 14.7824 20.5444 14.7959 20.5444C14.8004 20.5534 14.8094 20.567 14.8184 20.576C14.859 20.576 14.895 20.585 14.9356 20.5895C14.9401 20.567 14.9356 20.5354 14.931 20.5084C14.9986 20.5534 15.0122 20.5625 14.9851 20.6346C14.9085 20.7652 14.9085 20.7652 15.1473 20.9229C15.1473 20.9319 15.1473 20.95 15.1473 20.959C16.4991 21.3375 16.5442 21.3375 16.6523 21.3375C16.7379 21.3825 17.1434 21.3149 17.148 21.3149C17.3642 21.2564 17.3642 21.2564 17.6391 21.2789C17.7157 21.2834 18.2474 21.8241 18.2474 21.8286C18.2744 21.8421 18.2744 21.8421 18.4276 22.0269V22.0314C18.5493 22.144 18.734 22.1846 18.8016 22.3603C18.8151 22.3648 18.8286 22.3693 18.8422 22.3693C18.8647 22.4279 18.9143 22.473 18.9188 22.536C18.9683 22.5586 19.2117 22.6577 19.3378 22.5991C19.491 22.6622 19.491 22.6622 19.5271 22.6577C19.5361 22.6667 19.5451 22.6757 19.5541 22.6847C19.5631 22.6802 19.5811 22.6802 19.5901 22.6757C19.5947 22.6847 19.6037 22.6983 19.6082 22.7073C19.5721 22.7253 19.5361 22.7343 19.5 22.7568C19.509 22.7613 19.5226 22.7703 19.5316 22.7794C19.5947 22.7298 19.6713 22.7298 19.7433 22.7073C19.7343 22.7163 19.7208 22.7253 19.7118 22.7298C19.7163 22.7343 19.7253 22.7388 19.7298 22.7433C19.7569 22.7343 19.7569 22.7343 19.883 22.7118C19.8875 22.7208 19.8875 22.7208 19.8875 22.7208C19.9686 22.6937 20.275 22.5631 20.2796 22.5631C20.2705 22.5631 20.2615 22.5631 20.2525 22.5631L20.257 22.5586C20.2796 22.5451 20.2796 22.5451 20.2796 22.5451C20.3021 22.5405 20.3336 22.5315 20.3561 22.5225C20.3471 22.527 20.3336 22.536 20.3246 22.5405C20.3967 22.509 20.595 22.3873 20.595 22.3873C20.5094 22.4324 20.4147 22.4639 20.3291 22.518C20.3201 22.5225 20.3066 22.527 20.2931 22.536C20.3021 22.5315 20.3156 22.5225 20.3246 22.5135C20.2255 22.5405 20.2255 22.5405 20.2165 22.5405C20.221 22.5315 20.23 22.518 20.2345 22.509C20.2255 22.5045 20.212 22.4955 20.2029 22.4865C20.221 22.4685 20.239 22.4459 20.2525 22.4279C20.23 22.4279 20.2029 22.4189 20.1804 22.4144C20.0903 22.4639 20.0858 22.4639 20.0362 22.4549C20.0362 22.4414 20.0362 22.4279 20.0362 22.4144C20.0543 22.4009 20.0768 22.3783 20.0903 22.3648C20.0903 22.3513 20.0858 22.3378 20.0858 22.3288C20.0768 22.3288 20.0678 22.3288 20.0633 22.3288V22.3153C20.0633 22.3062 20.0678 22.2882 20.0678 22.2792C20.0543 22.2792 20.0407 22.2747 20.0272 22.2747C20.0452 22.2612 20.0768 22.2477 20.0993 22.2477C20.0993 22.2387 20.1038 22.2206 20.1038 22.2116C19.9371 22.2387 19.9371 22.2387 19.9371 22.2387C19.9777 22.1621 20.0723 22.1711 20.1218 22.1125C20.1128 22.108 20.0948 22.1035 20.0858 22.1035C20.0858 22.09 20.0858 22.0764 20.0858 22.0629C20.0768 22.0539 20.0633 22.0449 20.0543 22.0359C20.1263 21.8602 20.5319 21.8016 20.3787 21.5898C20.3246 21.5988 20.2931 21.5493 20.248 21.5357C20.1579 21.5853 20.1399 21.5808 20.0993 21.5718C20.0588 21.4817 20.0588 21.4817 20.0588 21.4636C20.0497 21.4546 20.0362 21.4411 20.0272 21.4276C20.0497 21.4411 20.0948 21.4727 20.1218 21.5538C20.3832 21.5447 20.6761 21.2879 20.6175 21.0401C20.7752 20.8013 20.8698 20.3507 20.6761 20.2876C20.6806 20.2786 20.6896 20.2651 20.6986 20.2561C20.6896 20.247 20.6761 20.238 20.6671 20.2335C20.6851 20.202 20.7121 20.1795 20.7346 20.1524C20.7887 19.9992 20.7887 19.9992 20.9735 19.8325C20.969 19.8235 20.9599 19.81 20.9554 19.801C21.0095 19.7514 21.0095 19.7514 21.014 19.7018C21.2708 19.5081 21.2754 19.481 21.2754 19.4405L21.3925 18.9719C21.3745 18.9178 21.352 18.8637 21.3384 18.8097C21.4331 18.6565 21.2213 18.2735 21.1582 18.2419C21.1717 18.2194 21.1897 18.1969 21.2078 18.1788C21.1942 18.1788 21.1807 18.1833 21.1672 18.1879C21.4781 17.6562 21.397 17.3362 21.3429 17.1245C21.3339 17.1019 21.3114 17.0794 21.2979 17.0614C21.2934 17.0614 21.2934 17.0614 21.2934 17.0614C21.2528 17.0388 21.2168 17.0118 21.1762 16.9893C21.1942 16.9577 21.2078 16.9307 21.2168 16.8992C21.1762 16.8586 21.1762 16.8496 21.2438 16.746C21.2528 16.746 21.2663 16.746 21.2754 16.7415C21.2844 16.7234 21.2934 16.7009 21.2979 16.6874C21.3069 16.6874 21.3204 16.6829 21.3294 16.6829C21.352 16.6784 21.361 16.6739 21.37 16.6694C21.415 16.6243 21.3925 16.5477 21.4466 16.5071C21.5052 16.4576 21.5908 16.4846 21.6538 16.4396C21.6629 16.4396 21.6629 16.4351 21.6629 16.4351H21.6674H21.6719H21.6764L21.6809 16.4306L21.6854 16.426H21.6899H21.6944C21.7034 16.426 21.7124 16.426 21.7214 16.426C21.7395 16.4441 21.7665 16.4621 21.789 16.4756L21.8161 16.4711C21.8656 16.4756 21.8656 16.4756 21.9693 16.4306C21.9783 16.426 21.9873 16.4215 21.9963 16.417C22.0098 16.426 22.0278 16.4441 22.0459 16.4531C22.1315 16.5026 22.172 16.6243 22.2982 16.6153L22.3297 16.6063C22.3883 16.5747 22.4559 16.5657 22.5145 16.5342L22.5505 16.5567L22.564 16.5838L22.6001 16.6063L22.6271 16.6153L22.6406 16.6468L22.6542 16.6739L22.6767 16.6874C22.6857 16.6874 22.6992 16.6919 22.7082 16.6919C22.7488 16.6649 22.7488 16.6649 22.7938 16.6603C22.7983 16.6558 23.0732 16.3855 22.929 16.2954C22.929 16.0971 22.929 16.0971 23.0372 15.4528C23.0867 15.1689 23.2354 14.9121 23.2489 14.6237C23.2264 14.6913 23.2264 14.6913 23.1633 14.8355C23.1498 14.8039 23.1498 14.8039 23.1994 14.6597C23.1768 14.6823 23.1543 14.7093 23.1363 14.7904C23.1273 14.7769 23.1183 14.7498 23.1228 14.7318C23.1768 14.5336 23.2219 14.3714 23.1723 14.119C23.2354 14.0695 23.3075 14.0244 23.4021 13.9838C23.4517 13.8487 23.5373 13.7315 23.5914 13.6008C23.5914 13.6008 23.6319 13.5107 23.6905 13.3981C23.8437 13.1052 23.8617 13.1052 24.069 13.0917C24.087 13.1187 24.1096 13.1593 24.1231 13.1908C24.1366 13.1953 24.1591 13.1998 24.1726 13.2043C24.1862 13.1908 24.1862 13.1908 24.3979 12.9114C24.4024 12.925 24.4115 12.9475 24.4205 12.961C24.434 12.961 24.4565 12.9655 24.4745 12.97C24.4881 12.961 24.5016 12.943 24.5151 12.934C24.5782 12.9971 24.6187 13.0421 24.6097 13.1773C24.6368 13.6684 24.6368 13.6684 25.0288 13.9884C25.0468 14.0109 25.0603 14.0469 25.0648 14.074V14.0785V14.083V14.0875V14.092V14.0965V14.101C25.0648 14.101 25.0648 14.1055 25.0693 14.137C25.2721 14.6012 25.2721 14.6012 25.1279 15.651C25.1279 15.6826 25.1279 15.7186 25.1234 15.7592C25.1144 15.9079 25.182 16.0475 25.1865 16.1962C25.236 16.5071 25.1234 16.8045 25.1144 17.1109C25.1144 17.1154 25.0964 17.3948 24.9792 17.6156C24.9341 17.7688 24.9341 17.7688 24.9341 17.7913C24.9522 17.7688 24.9747 17.7328 24.9882 17.7057C25.0288 17.6336 25.0693 17.557 25.1144 17.4849C25.1144 17.4849 25.1144 17.4849 25.1189 17.4804C25.1369 17.4534 25.1594 17.4218 25.173 17.3948C25.1955 17.3633 25.2045 17.3272 25.2225 17.2957C25.2225 17.2912 25.227 17.2867 25.227 17.2822C25.3397 17.0479 25.7317 16.2053 25.9975 15.0202L26.002 15.0067H26.0065L26.0156 14.9661C26.0651 14.7724 26.1462 14.4434 26.2273 13.8171C26.2273 13.8126 26.2273 13.8126 26.2273 13.8126C26.2499 13.6414 26.2634 13.4882 26.2724 13.3575V13.353V13.3485C26.2814 13.2674 26.2814 13.2674 26.2904 13.0511C26.2949 12.97 26.3039 12.8348 26.3039 12.569C26.2949 12.6231 26.2634 13.0691 26.2634 13.0737L26.2589 13.1457C26.2634 13.1322 26.2634 13.1322 26.2679 13.1052C26.2679 13.1322 26.2634 13.1818 26.2544 13.2404L26.2454 13.3305C26.2454 13.362 26.2273 13.5423 26.2003 13.754C26.2499 13.2989 26.2679 12.8168 26.2454 12.3212C26.2454 12.0508 26.2454 12.0328 26.1147 10.4738C26.0606 9.96909 25.8849 9.21661 25.6866 8.64886C25.6686 8.59479 25.6686 8.59479 25.6371 8.51819C25.6641 8.61282 25.6641 8.61281 25.6911 8.72546C25.6956 8.757 25.7047 8.80206 25.7092 8.8336L25.7137 8.84712V8.86515C25.7182 8.9057 25.7272 8.95977 25.7272 9.00483C25.7317 9.02736 25.7182 9.0589 25.7047 9.08143C25.6956 9.06791 25.6866 9.04989 25.6821 9.03637L25.6776 9.02736C25.6235 8.94175 25.5875 8.84712 25.5334 8.76151C25.5064 8.73447 25.4658 8.69843 25.4298 8.6759C25.3126 8.58578 25.2676 8.44159 25.182 8.32894C25.0062 8.19827 24.9747 7.94144 24.79 7.81527C24.7854 7.79725 24.7854 7.79274 24.7854 7.78373C24.7764 7.77472 24.7629 7.77922 24.7584 7.76571C24.7584 7.76571 24.7494 7.74768 24.7134 7.64855C24.7043 7.68009 24.6863 7.70262 24.6908 7.73867C24.6908 7.73867 24.6908 7.74768 24.6953 7.7612C24.479 7.54492 24.3619 7.2295 24.042 7.11686C24.0104 7.08081 23.9654 7.02674 23.9338 6.98619C23.9338 6.98619 24.0555 7.08982 24.1907 7.17093L24.0555 7.02223C24.2267 7.12587 24.5872 7.42776 24.5917 7.43227L24.6818 7.54041C24.7134 7.58998 24.7359 7.61701 24.7674 7.65756C24.7674 7.65756 24.7674 7.65756 24.7764 7.67108C24.799 7.72515 24.799 7.72515 24.7854 7.75219C24.8801 7.78824 24.844 7.94144 24.9657 7.95495C24.9747 7.92341 24.9792 7.90989 24.9702 7.87835C25.0468 7.95495 25.1324 8.03155 25.1775 8.13519C25.1865 8.1442 25.1955 8.15772 25.2045 8.17124C25.2135 8.18475 25.2225 8.20728 25.227 8.2208L25.2451 8.26586L25.2856 8.33796C25.3171 8.39653 25.3171 8.39653 25.4343 8.61281C25.4929 8.55424 25.3667 8.05859 25.3667 8.05408L25.3532 8.00902C25.3352 7.94594 25.3262 7.88286 25.3126 7.81978C25.2991 7.76571 25.2946 7.7612 25.2676 7.69361C25.2315 7.61251 25.2225 7.59448 25.191 7.50436L25.1865 7.49535V7.48634C25.1324 7.34666 25.1324 7.34666 25.0513 7.1484C24.8756 6.81046 24.7854 6.63473 24.7314 6.53109C24.7043 6.48603 24.6818 6.44097 24.6548 6.40042C24.6458 6.3869 24.6368 6.37789 24.6322 6.36437L24.6187 6.34184L24.6052 6.31931C24.5602 6.25172 24.5602 6.25172 24.5376 6.22919C24.5421 6.2337 24.5466 6.24271 24.5466 6.24722C24.5376 6.24271 24.5376 6.24271 24.5376 6.24271C24.5151 6.22018 24.5151 6.22018 24.3258 5.95433C24.407 6.09402 24.407 6.09402 24.416 6.10753L24.452 6.16161C24.5602 6.35536 24.5602 6.36888 24.5917 6.48152C24.5196 6.46801 24.4926 6.42745 24.4745 6.37338C24.4565 6.35085 24.416 6.3103 24.3664 6.26074C24.3168 6.17062 24.2718 6.07599 24.2357 5.98137C24.2447 5.99038 24.2538 5.99939 24.2628 6.00841C24.3123 6.07599 24.3574 6.14809 24.416 6.21117C24.4205 6.20666 24.425 6.19765 24.425 6.19315C24.4024 6.12556 24.3574 6.07149 24.3213 6.01291C24.3258 6.01291 24.3304 6.01291 24.3349 6.01291C24.3304 5.99489 24.3168 5.96785 24.3033 5.93631H24.3078C24.2943 5.90477 24.2853 5.88224 24.2763 5.85971C24.2898 5.87773 24.3168 5.90928 24.3709 5.96785C24.3709 5.95884 24.3664 5.94983 24.3619 5.94532C24.3709 5.94082 24.3709 5.94082 24.3709 5.94082V5.93631V5.9318V5.9273V5.92279V5.91829V5.91378C24.3664 5.90928 24.3664 5.90026 24.3619 5.89125C24.3664 5.89576 24.3709 5.90477 24.3754 5.90928C24.3709 5.90477 24.3709 5.90026 24.3664 5.89576C24.3664 5.89576 24.3619 5.89125 24.3619 5.88675C24.3574 5.87773 24.3484 5.86872 24.3439 5.85971C24.3439 5.86422 24.3484 5.86422 24.3484 5.86872V5.89125ZM7.65402 5.40912C7.64501 5.3911 7.64501 5.38659 7.6405 5.38209C7.64501 5.37307 7.65402 5.36857 7.65853 5.35956C7.66303 5.35956 7.66754 5.35505 7.67204 5.35505C7.68106 5.38209 7.65853 5.40912 7.65402 5.40912ZM7.82975 5.04865C7.82525 5.03964 7.82074 5.03513 7.81623 5.02612C7.84327 4.99458 7.85679 4.97655 7.87932 4.97205C7.84777 5.0081 7.83426 5.03513 7.82975 5.04865ZM8.56421 5.23339C8.56421 5.23339 8.53267 5.27845 8.52817 5.28746C8.52366 5.27845 8.54168 5.2424 8.54168 5.2424C8.55069 5.23339 8.5552 5.23339 8.56421 5.23339ZM13.5477 3.98976C13.5567 3.99877 13.5613 3.99877 13.5703 4.00779C13.5613 4.00779 13.5522 4.00779 13.5387 4.01229C13.5387 4.00779 13.5432 3.99877 13.5477 3.98976ZM13.5658 4.07537C13.5703 4.07537 13.5703 4.07087 13.5748 4.07087C13.5838 4.07537 13.5973 4.07988 13.6063 4.08439C13.6108 4.0934 13.6108 4.10241 13.6108 4.11142C13.5973 4.0979 13.5703 4.10241 13.5658 4.07537ZM13.1557 4.39529C13.1557 4.36826 13.1692 4.35474 13.2053 4.3232C13.2458 4.28715 13.2639 4.20605 13.2458 4.19253C13.2413 4.18802 13.1467 4.18802 13.0971 4.24209L13.0791 4.25561C13.0701 4.25561 13.0611 4.26012 13.0566 4.26012C13.0566 4.25561 13.0521 4.2511 13.0521 4.2511C13.0971 4.21956 13.2819 4.12494 13.4081 4.15648C13.4261 4.16099 13.4351 4.16549 13.4441 4.17C13.4892 4.18352 13.5207 4.18802 13.5162 4.16099C13.5973 4.14296 13.6063 4.14296 13.6198 4.12494C13.6243 4.14747 13.6333 4.1745 13.6514 4.19253C13.6604 4.19253 13.6694 4.19253 13.6784 4.19703C13.6739 4.20154 13.6739 4.20605 13.6694 4.21055C13.6333 4.2466 13.5838 4.23759 13.5432 4.25561C13.5252 4.26462 13.4531 4.30518 13.4531 4.30518C13.3945 4.4764 13.3765 4.48992 13.372 4.48992C13.372 4.49893 13.3675 4.51695 13.3269 4.52596C13.3224 4.52596 13.3224 4.52596 13.3224 4.52596C13.336 4.50794 13.3765 4.46288 13.3765 4.46288C13.3585 4.41782 13.3585 4.41782 13.399 4.39079C13.399 4.37727 13.399 4.37276 13.3675 4.34122C13.372 4.33672 13.3765 4.32771 13.381 4.31869C13.3945 4.26462 13.3945 4.26012 13.372 4.22858C13.2864 4.23308 13.2864 4.23308 13.2233 4.34122L13.2503 4.44035C13.2549 4.44486 13.2549 4.44486 13.2594 4.44936C13.2684 4.44936 13.2774 4.44936 13.2819 4.44486C13.2639 4.47189 13.2323 4.48091 13.2053 4.49893L13.1557 4.39529ZM20.4147 8.48214C20.4057 8.48665 20.4012 8.48665 20.4057 8.49566C20.4057 8.49566 20.3832 8.48214 20.3607 8.46412C20.3652 8.4506 20.3697 8.44159 20.3697 8.42807C20.3787 8.43709 20.4012 8.45511 20.4012 8.45511C20.4057 8.46412 20.4057 8.47313 20.4147 8.48214ZM4.72068 9.57708C4.68914 9.53202 4.69365 9.50949 4.71617 9.49147C4.74321 9.45992 4.77025 9.43289 4.80179 9.40585C4.77926 9.45091 4.77025 9.50048 4.72519 9.53202C4.72519 9.54554 4.72068 9.56356 4.72068 9.57708ZM20.7076 20.9004C20.7076 20.9094 20.6941 20.9319 20.6896 20.9319C20.6896 20.9319 20.6896 20.9319 20.6851 20.9274C20.6806 20.9319 20.6761 20.977 20.6806 20.986C20.6806 20.9905 20.6626 21.0266 20.658 21.0401C20.6445 21.0266 20.6355 21.0176 20.64 20.9995V20.995C20.64 20.995 20.64 20.9905 20.6445 20.9905C20.6535 20.977 20.6626 20.9635 20.6626 20.959C20.6716 20.9364 20.6626 20.9139 20.6716 20.8959C20.6716 20.8914 20.6761 20.8869 20.6806 20.8824C20.6806 20.8779 20.6851 20.8734 20.6851 20.8644C20.6851 20.8553 20.6896 20.8463 20.6941 20.8463L20.6986 20.8508C20.6896 20.8463 20.7076 20.8959 20.7076 20.9004ZM20.9104 17.1425C20.9014 17.1425 20.8924 17.1425 20.8878 17.1425C20.8833 17.1154 20.8833 17.0974 20.8833 17.0884C20.8878 17.1064 20.9014 17.1245 20.9104 17.1425ZM21.5908 7.04476C21.5682 7.02674 21.5367 6.9952 21.5142 6.97267C21.4781 7.00872 21.4376 7.04026 21.406 7.0763C20.7797 6.9231 20.7797 6.9231 20.6896 6.81046C20.7076 6.76089 20.6986 6.71133 20.7121 6.66176C20.7256 6.66176 20.7482 6.65726 20.7617 6.65726C20.8203 6.72034 20.8383 6.71583 20.8924 6.6933C20.8969 6.67978 20.8969 6.65726 20.9014 6.64374C20.9149 6.63923 20.9329 6.63473 20.9509 6.63022C20.9599 6.63923 20.9735 6.65726 20.9825 6.66627C21.0861 6.63923 21.1672 6.73386 21.2708 6.72034C21.2799 6.70682 21.2889 6.6933 21.2979 6.67978C21.397 6.6888 21.4961 6.65726 21.5953 6.66627C21.6358 6.65275 21.6358 6.65275 21.78 6.6888C21.8161 6.70682 21.8431 6.73386 21.8656 6.76089C21.8656 6.81046 21.8341 6.93211 21.8206 6.99069C21.7079 6.9997 21.5908 7.04476 21.5908 7.04476ZM21.8071 7.11686C21.8071 7.13037 21.8071 7.14389 21.8116 7.15741C21.8071 7.1484 21.807 7.13939 21.8025 7.13037C21.8025 7.12587 21.8025 7.12136 21.8071 7.11686ZM21.8071 7.86484C21.8071 7.86484 21.8071 7.86033 21.8341 7.86033C21.8386 7.86934 21.8431 7.87385 21.8521 7.9099C21.8386 7.90539 21.8206 7.89638 21.8071 7.88737L21.8025 7.89187C21.8025 7.88286 21.8025 7.87385 21.8071 7.86484ZM23.0777 7.43227C23.0687 7.49986 23.1318 7.65306 23.2444 7.93242C23.2399 7.97748 23.2264 8.04507 23.2039 8.08562C23.1813 8.08112 23.1813 8.08112 22.884 8.22531C22.884 8.22531 22.884 8.22531 22.8704 8.23883C22.8479 8.21179 22.8479 8.21179 22.7488 8.1442C22.6992 8.15772 22.6497 8.18025 22.5956 8.18475C22.3523 8.3695 22.3523 8.3695 22.2171 8.35598C22.2126 8.3695 22.2081 8.39203 22.2036 8.40554C22.0549 8.40554 22.1225 8.21179 22.0684 8.11717L22.0639 8.11266L22.0594 8.10815L22.0549 8.10365L22.0504 8.09914L22.0459 8.09464L22.0414 8.09013L22.0369 8.08562V8.08112C21.9017 8.01804 21.8927 8.01353 21.8656 7.93242C21.8836 7.92341 21.8972 7.92341 21.9287 7.91891C22.154 7.90088 22.1675 7.86934 22.1765 7.84681C22.181 7.83329 22.1675 7.81077 22.1675 7.80626C22.145 7.78373 22.1089 7.77472 22.0864 7.75219C22.0549 7.72065 22.0459 7.68009 22.0278 7.64405C22.1225 7.72515 22.2486 7.77472 22.3387 7.77922C22.3478 7.77021 22.3568 7.7612 22.3613 7.75669C22.3613 7.74768 22.3568 7.73416 22.3568 7.72515C22.3928 7.74768 22.4244 7.77922 22.4649 7.80175C22.4649 7.89187 22.4649 7.89187 22.4649 7.89187C22.5235 7.94144 22.6136 7.92792 22.6722 7.97748C22.6812 7.98199 22.6902 7.991 22.6992 7.99551C22.7082 7.99551 22.7172 7.991 22.7263 7.991C22.7037 7.90088 22.6046 7.83329 22.6542 7.72515C22.6722 7.72515 22.6992 7.73416 22.7127 7.74768C22.6767 7.55843 22.7713 7.31962 22.7713 7.31962C22.8389 7.3061 22.8389 7.3061 22.8569 7.28808C22.8434 7.24302 22.8164 7.20697 22.8119 7.16192C22.8885 7.13939 22.9876 7.27907 23.0777 7.43227ZM23.1904 5.87323C23.2444 5.95433 23.294 6.02192 23.294 6.02643C23.2534 5.97686 23.2219 5.92279 23.1904 5.87323ZM23.5013 6.31481C23.4968 6.32382 23.4923 6.33283 23.4923 6.34184C23.6094 6.46801 23.704 6.6167 23.8032 6.75638C23.7987 6.7699 23.7942 6.78342 23.7896 6.79243C23.7536 6.78793 23.7536 6.78793 23.6995 7.08982C23.5869 7.1529 23.5373 7.33314 23.3616 7.28357C23.33 7.35567 23.3165 7.36468 23.267 7.40073C23.2129 7.38721 23.1768 7.3827 23.1453 7.3827C23.1002 7.27907 23.0732 7.18895 23.0912 7.15741C23.0552 7.06279 22.947 6.77441 22.9335 6.63022C22.9515 6.63022 22.9741 6.62571 22.9921 6.62571C23.0507 6.67077 23.1093 6.71133 23.1678 6.75638C23.1994 6.73836 23.2039 6.73386 23.2444 6.70231C23.1904 6.6122 23.1543 6.54911 23.1273 6.50405C23.1138 6.45899 23.1002 6.41394 23.1318 6.36888C23.2174 6.40042 23.2174 6.40042 23.276 6.38239C23.2625 6.19765 23.2625 6.19765 23.2805 6.03995C23.3616 6.14358 23.3616 6.14358 23.3931 6.19315C23.3931 6.19315 23.3931 6.19315 23.3796 6.15259C23.3661 6.12556 23.3571 6.11204 23.3481 6.09852C23.3976 6.17512 23.4337 6.26074 23.4877 6.33734C23.4923 6.32382 23.4968 6.31481 23.5013 6.30129C23.5013 6.30579 23.5013 6.3103 23.5013 6.31481Z"
                        fill="#AECBCE"
                      />
                      <path
                        d="M16.3865 17.5886C16.3865 17.5931 16.3865 17.5976 16.3865 17.6066C16.3865 17.6202 16.391 17.6337 16.391 17.6472C16.391 17.6562 16.3865 17.6697 16.391 17.6787C16.391 17.6832 16.391 17.6832 16.3955 17.6877C16.4 17.6877 16.409 17.6877 16.4315 17.6697C16.4496 17.6562 16.4631 17.6472 16.4631 17.6472C16.4721 17.6427 16.4811 17.6382 16.4856 17.6337L16.4901 17.6292C16.4946 17.6202 16.4811 17.5931 16.4721 17.5796C16.4405 17.53 16.418 17.5436 16.409 17.5436C16.4045 17.5481 16.391 17.5616 16.3865 17.5886Z"
                        fill="#AECBCE"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start shrink-0 relative">
                <div
                  className="text-light text-left relative"
                  style={{ font: "700 10.24px 'Ubuntu', sans-serif" }}
                >
                  World Friends
                </div>

                <div
                  className="text-light text-left relative"
                  style={{
                    margin: "-5.12px 0 0 0",
                    font: "700 18.82px 'Ubuntu', sans-serif",
                  }}
                >
                  Languages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-12 items-center justify-start w-[1128px] absolute left-[76px] top-[34px]">
        <div className="flex flex-row gap-[7.18px] items-center justify-start shrink-0 relative">
          <div className="shrink-0 w-[28.73px] h-[28.73px] relative overflow-hidden">
            <div className="w-[23.49px] h-[23.49px] absolute left-[1.31px] top-[2.62px] overflow-hidden">
              <div className="absolute" style={{ inset: "0" }}>
                <svg
                  className="absolute left-[-4.86px] top-[11.74px] overflow-visible"
                  style={{ transform: "translate(4.86px, -11.74px)" }}
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.354 25.8022C29.9397 21.2166 29.9397 13.7818 25.354 9.19617C20.7684 4.61054 13.3336 4.61054 8.74798 9.19617C4.16234 13.7818 4.16234 21.2166 8.74798 25.8022C13.3336 30.3879 20.7684 30.3879 25.354 25.8022Z"
                    fill="#E8F2F0"
                  />
                </svg>

                <svg
                  className="absolute left-[-2.62px] top-0 overflow-visible"
                  style={{}}
                  width="27"
                  height="23"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3397 1.07534V1.07985C13.3352 1.07985 13.2947 1.08886 13.2902 1.09337C13.2947 1.09787 13.2947 1.09787 13.3037 1.09787C13.3172 1.09787 13.4569 1.08886 13.4794 1.06633C13.4794 1.06633 13.4794 1.06633 13.4749 1.06633C13.4749 1.06633 13.4749 1.06633 13.4839 1.05732C13.4659 1.04831 13.3487 1.07534 13.3397 1.07534Z"
                    fill="url(#paint0_linear_268_6864)"
                  />
                  <path
                    d="M17.9492 5.58569H17.9131C17.9041 5.58569 17.8996 5.5902 17.8275 5.57668C17.7644 5.56767 17.7644 5.56767 17.7464 5.57217C17.7329 5.57668 17.7329 5.57668 17.7103 5.61273C17.6923 5.63526 17.6653 5.64427 17.6428 5.66229C17.6473 5.6713 17.6518 5.68032 17.6563 5.68933L17.6382 5.7434C17.6428 5.75692 17.6518 5.76593 17.6563 5.77043C17.6878 5.80197 17.7329 5.81099 17.7689 5.82901C17.7914 5.84253 17.7914 5.84253 17.796 5.84703C17.814 5.87407 17.814 5.87407 17.814 5.87407C17.832 5.88759 17.8545 5.89209 17.868 5.90561C17.8816 5.91462 17.8861 5.92814 17.8996 5.93715C17.9356 5.95517 17.9762 5.94616 18.0122 5.95517C18.0258 5.94166 18.0258 5.94166 18.0348 5.94616C18.0212 5.92363 18.0032 5.91012 17.9852 5.88759C17.9897 5.88759 18.0212 5.88759 18.0348 5.91913C18.0483 5.91913 18.0573 5.91462 18.0708 5.91462V5.91012C18.0708 5.91012 18.0663 5.90561 18.0663 5.9011C18.0573 5.88308 18.0528 5.86506 18.0528 5.85605C18.0528 5.84253 18.0348 5.82901 18.0258 5.82C18.0122 5.78846 18.0122 5.78846 17.8996 5.73889V5.71186L17.8816 5.6668C17.9131 5.6713 17.9176 5.68032 17.9221 5.68482C17.9401 5.71186 17.9401 5.71186 17.9897 5.68482L17.9807 5.67581L17.9762 5.63976C17.9762 5.61273 17.9672 5.60822 17.9627 5.60822C17.9627 5.58569 17.9537 5.58569 17.9492 5.58569Z"
                    fill="url(#paint1_linear_268_6864)"
                  />
                  <path
                    d="M17.5662 5.72543C17.5257 5.72543 17.5257 5.72543 17.5257 5.72543C17.5167 5.72092 17.5167 5.71191 17.5076 5.7074C17.4986 5.69839 17.4851 5.69389 17.4716 5.68938C17.4581 5.68938 17.4401 5.68487 17.4355 5.68938C17.422 5.69389 17.4175 5.7029 17.404 5.71191C17.3815 5.72543 17.3589 5.71642 17.3409 5.72092L17.3049 5.71642L17.2914 5.71191L17.2733 5.71642C17.2688 5.72092 17.2598 5.72092 17.2553 5.72543L17.2283 5.73444L17.2057 5.73895L17.1967 5.76598L17.1787 5.78851V5.81104C17.2193 5.85159 17.2328 5.86962 17.2643 5.86962C17.2823 5.87412 17.3635 5.86511 17.3589 5.83357C17.3544 5.784 17.4716 5.84709 17.4761 5.84709C17.4761 5.84709 17.5572 5.86962 17.5617 5.86962C17.5752 5.86962 17.5887 5.85159 17.5933 5.84709C17.5978 5.83808 17.5978 5.83808 17.5978 5.82005C17.6113 5.81104 17.6113 5.81104 17.6068 5.80653C17.6023 5.79752 17.5887 5.79752 17.5797 5.78851C17.5707 5.7795 17.5707 5.76598 17.5617 5.75697C17.5707 5.74796 17.5842 5.74345 17.5933 5.73895C17.5978 5.72543 17.5752 5.72543 17.5662 5.72543Z"
                    fill="url(#paint2_linear_268_6864)"
                  />
                  <path
                    d="M14.6554 5.28382C14.6734 5.29283 14.6914 5.28382 14.7049 5.29283C14.7049 5.29283 14.7049 5.29283 14.7185 5.31986C14.723 5.33338 14.7861 5.34239 14.7861 5.34239C14.7951 5.34239 14.8942 5.31986 14.8987 5.29283C14.9032 5.2703 14.9257 5.2703 14.9663 5.2703C15.0699 5.27931 15.0879 5.30184 15.1105 5.32437C15.1195 5.33789 15.1285 5.34239 15.142 5.33338C15.1916 5.31536 15.2457 5.24777 15.2457 5.24777L15.2727 5.18919C15.2862 5.18018 15.3042 5.18018 15.3132 5.16666C15.3223 5.15765 15.3223 5.13512 15.3358 5.13062C15.3358 5.13062 15.3763 5.12611 15.4034 5.13512C15.4169 5.13963 15.4304 5.13512 15.4304 5.13512C15.4304 5.13512 15.4529 5.10358 15.4439 5.09457L15.4394 5.09006V5.08556C15.489 5.05852 15.5025 5.10809 15.5025 5.10809C15.498 5.13963 15.4529 5.15315 15.4574 5.1937C15.4574 5.20722 15.498 5.21623 15.5115 5.20722C15.5566 5.18018 15.5566 5.18018 15.5611 5.1937C15.5656 5.1937 15.5701 5.19821 15.5701 5.19821L15.5746 5.1937V5.18919C15.5836 5.1937 15.6016 5.1937 15.6106 5.19821C15.6241 5.19821 15.6241 5.1937 15.6332 5.18919C15.6332 5.18469 15.6332 5.18018 15.6287 5.18018C15.6377 5.16216 15.6287 5.15765 15.5881 5.13062C15.5791 5.1216 15.5791 5.12161 15.5791 5.1171C15.5881 5.10358 15.5881 5.10358 15.5791 5.08556C15.6016 5.06303 15.5881 5.0405 15.534 5.02698H15.516H15.4709C15.4394 5.01797 15.4259 4.98192 15.3898 4.97742C15.3853 4.98192 15.3808 4.99093 15.3763 4.99544L15.3448 5.02248L15.3313 5.045L15.3042 5.05852C15.2637 5.04951 15.2457 4.95939 15.2006 4.99544C15.1916 4.99995 15.1781 5.00445 15.1465 4.9684C15.1195 4.93236 15.1105 4.92785 15.0834 4.92785C15.0744 4.91433 15.0744 4.91433 15.0519 4.89631V4.8873C15.0519 4.87829 15.0384 4.86927 15.0384 4.86026C15.0384 4.85125 15.0519 4.84224 15.0429 4.83323C15.0249 4.80619 14.9933 4.80169 14.9798 4.79718C14.9798 4.79718 14.9753 4.80169 14.9708 4.80169C14.9212 4.82872 14.9077 4.9639 14.9122 4.97291C14.9167 4.98192 14.8852 5.06303 14.8356 5.10358C14.8131 5.10809 14.8131 5.13062 14.8176 5.13963C14.8086 5.14864 14.7996 5.15765 14.7861 5.16666C14.777 5.17568 14.7815 5.18469 14.7725 5.1937C14.7635 5.20271 14.75 5.19821 14.741 5.20722C14.7004 5.20722 14.6644 5.18919 14.6238 5.1937V5.19821C14.6464 5.23425 14.7095 5.21172 14.7185 5.26129C14.6959 5.26579 14.6734 5.2703 14.6554 5.28382Z"
                    fill="url(#paint3_linear_268_6864)"
                  />
                  <path
                    d="M21.4188 8.36133L21.4409 8.37015L21.4232 8.36133H21.4188Z"
                    fill="url(#paint4_linear_268_6864)"
                  />
                  <path
                    d="M21.2972 8.28019C21.2972 8.28469 21.3017 8.2892 21.3017 8.2892C21.3062 8.29821 21.3287 8.33877 21.3377 8.34327C21.3467 8.31624 21.3467 8.31624 21.4774 8.37481C21.4819 8.41086 21.4819 8.41086 21.4999 8.41537C21.536 8.43339 21.6126 8.46944 21.6306 8.47394L21.7523 8.5145C21.7658 8.49647 21.6892 8.4424 21.6892 8.4424C21.6531 8.41987 21.6126 8.41537 21.5765 8.39734C21.5585 8.38833 21.527 8.37481 21.518 8.3613C21.5044 8.33877 21.5044 8.33877 21.4368 8.31173C21.4278 8.30722 21.3693 8.28019 21.3107 8.2126C21.3062 8.20359 21.2882 8.18557 21.2656 8.16754C21.2701 8.18106 21.2882 8.19458 21.2927 8.20809C21.2972 8.22612 21.2972 8.24414 21.3062 8.26217C21.2927 8.27568 21.2927 8.27568 21.2972 8.28019Z"
                    fill="url(#paint5_linear_268_6864)"
                  />
                  <path
                    d="M20.9999 8.13606C20.9999 8.13606 21.0044 8.12254 21.0044 8.11353L20.9999 8.04144C20.9999 8.03243 20.9954 8.02342 20.9954 8.0144C20.9954 8.00539 20.9909 8.00089 20.9909 7.99187C20.9909 7.97385 20.9999 7.95583 20.9999 7.9378C20.9999 7.9333 20.9999 7.92879 20.9954 7.91978C20.9909 7.90626 20.9909 7.90626 20.9999 7.87923C20.9999 7.87021 21.0089 7.86571 21.0089 7.8567C21.0089 7.84769 21.0089 7.84318 21.0044 7.83867C20.9999 7.83417 20.9954 7.83417 20.9909 7.83417C20.9819 7.83867 20.9819 7.84318 20.9819 7.87021C20.9819 7.87923 20.9819 7.89274 20.9774 7.89725C20.9729 7.90626 20.9639 7.91077 20.9549 7.91978C20.9504 7.92429 20.9459 7.92429 20.9413 7.92429C20.9323 7.92429 20.9233 7.91978 20.8693 7.99187C20.8693 7.99638 20.8647 8.00089 20.8647 8.00089C20.8783 8.00089 20.8783 8.00089 20.8783 8.00089L20.9278 8.10452C20.9323 8.11804 20.9368 8.11804 20.9413 8.11804C20.9549 8.12705 20.9954 8.14057 20.9999 8.13606Z"
                    fill="url(#paint6_linear_268_6864)"
                  />
                  <path
                    d="M20.8241 8.00541C20.8241 7.9964 20.8196 7.99189 20.8016 7.96936C20.7971 7.96936 20.77 7.98288 20.7835 8.0009C20.7835 8.00541 20.788 8.00541 20.788 8.00991C20.7925 8.01442 20.7925 8.01893 20.7971 8.02343C20.8016 8.02794 20.8061 8.02794 20.8061 8.02794C20.8061 8.02794 20.8106 8.02794 20.8106 8.02343L20.8241 8.00541Z"
                    fill="url(#paint7_linear_268_6864)"
                  />
                  <path
                    d="M20.9593 9.34357C20.9638 9.34807 20.9728 9.34357 20.9683 9.34357C20.9728 9.34357 20.9683 9.34357 20.9593 9.34357Z"
                    fill="url(#paint8_linear_268_6864)"
                  />
                  <path
                    d="M18.3234 13.5566C18.2783 13.6468 18.2783 13.6468 18.3144 13.7279C18.3099 13.7324 18.3099 13.7414 18.3054 13.7459C18.2828 13.7504 18.2648 13.7504 18.2423 13.7549C18.2152 14.0208 18.2152 14.0208 18.1747 14.0523C18.1522 14.0793 18.1206 14.0974 18.0981 14.1289C18.1206 14.1559 18.1522 14.1649 18.1702 14.192L18.445 13.8946C18.5622 13.8901 18.5937 13.6107 18.5937 13.6062C18.5577 13.408 18.6523 13.2953 18.6839 13.2593C18.6839 13.2593 18.6838 13.2593 18.6929 13.2548C18.783 13.1286 18.783 13.1286 18.828 13.1241C18.8325 13.1286 18.8371 13.1376 18.8371 13.1421L18.8731 13.1331L18.8821 13.1241C18.8956 13.1331 18.9182 13.1421 18.9317 13.1511C18.9542 13.1421 18.9722 13.1331 18.9903 13.1286C18.9857 13.1646 18.9903 13.1691 19.0083 13.1827C19.0804 13.1646 19.1164 13.097 19.175 13.0565C19.148 13.1106 19.1344 13.1331 19.0443 13.1962C19.0443 13.2322 19.0443 13.2322 19.0578 13.2728C19.1074 13.2998 19.1074 13.2998 19.3102 13.2052C19.3552 13.1782 19.4093 13.1691 19.4453 13.1286C19.4408 13.1151 19.4318 13.1016 19.4318 13.079C19.4859 12.9529 19.4859 12.8898 19.4859 12.7997C19.5265 12.8132 19.6031 12.8357 19.6211 12.7095C19.6256 12.7456 19.6256 12.7456 19.6661 12.7771C19.6661 12.7771 19.8283 12.705 19.8509 12.669C19.8193 12.6014 19.7382 12.5113 19.6301 12.5518C19.6211 12.5473 19.6031 12.5383 19.594 12.5338C19.585 12.5428 19.5715 12.5518 19.5625 12.5563C19.558 12.5518 19.549 12.5518 19.5445 12.5473L19.585 12.1238C19.6526 11.9751 19.8013 11.8985 19.9049 11.7813C19.9635 11.7408 19.9635 11.7408 19.95 11.6461C19.9996 11.6326 19.9996 11.6326 20.0221 11.6191C20.0266 11.5831 20.0762 11.5786 20.0762 11.538C20.0762 11.4929 20.0311 11.4704 20.0176 11.4299C20.0311 11.4344 20.0491 11.4434 20.0672 11.4479C20.1573 11.5921 20.1663 11.6011 20.2294 11.5425C20.2429 11.5335 20.2519 11.52 20.2294 11.4569C20.2113 11.4028 20.2113 11.4028 20.2699 11.2586C20.2564 11.2361 20.2564 11.2361 20.2159 11.2181C20.1933 11.2631 20.1933 11.2631 20.1888 11.2812C20.1573 11.2947 20.1528 11.2992 20.1302 11.2677C20.1302 11.2677 19.9861 11.2902 19.941 11.2992C19.9635 11.2812 19.9635 11.2812 19.977 11.2496C20.0131 11.2451 20.0491 11.2361 20.0852 11.2361C20.1167 11.1911 20.1708 11.182 20.2159 11.155C20.2204 10.9612 20.2204 10.9612 20.3015 10.9432C20.36 10.8351 20.3646 10.781 20.3646 10.7585C20.297 10.7675 20.297 10.7675 20.2654 10.8531C20.2609 10.8531 20.2519 10.8576 20.2474 10.8576C20.2474 10.8576 20.0942 10.8171 20.0491 10.808C20.0041 10.8261 19.968 10.8621 19.923 10.8756C19.9095 10.9207 19.9095 10.9207 19.7743 11.0243C19.7878 11.1235 19.8509 11.2046 19.8869 11.2947C19.8824 11.2992 19.8824 11.3082 19.8779 11.3127C19.8779 11.3127 19.9365 11.511 19.8238 11.5605C19.6977 11.6191 19.6301 11.4569 19.5129 11.4794C19.5084 11.4839 19.5084 11.4929 19.5039 11.4975C19.4408 11.5065 19.4183 11.4749 19.3958 11.4389C19.0578 11.3983 19.0849 11.8084 18.8551 11.912C18.8641 11.9255 18.8686 11.939 18.8686 11.9571C18.7064 12.0472 18.2693 12.7005 18.3684 12.8267C18.3279 12.9213 18.3279 12.9213 18.3369 12.9484C18.2918 13.025 18.2197 13.079 18.1837 13.1646C18.1657 13.2142 18.1837 13.2367 18.2017 13.2412C18.2242 13.2457 18.2242 13.2457 18.3369 13.1962C18.3369 13.2097 18.3504 13.2232 18.3594 13.2322C18.3774 13.3404 18.2693 13.435 18.3234 13.5566ZM19.6256 12.5608C19.6301 12.5563 19.6346 12.5518 19.6391 12.5518C19.6391 12.5563 19.6391 12.5608 19.6346 12.5608C19.6346 12.5608 19.6301 12.5608 19.6256 12.5608Z"
                    fill="url(#paint9_linear_268_6864)"
                  />
                  <path
                    d="M20.2563 10.7089C20.2743 10.6999 20.2833 10.6863 20.2968 10.6773C20.2968 10.6773 20.3689 10.6097 20.3689 10.6052C20.3689 10.5917 20.3509 10.5602 20.2833 10.5872C20.2518 10.6007 20.2292 10.6142 20.2157 10.6323C20.2157 10.6323 20.1752 10.6909 20.1887 10.7134C20.2022 10.7314 20.2427 10.7224 20.2563 10.7089Z"
                    fill="url(#paint10_linear_268_6864)"
                  />
                  <path
                    d="M19.4768 11.227C19.4858 11.2361 19.5264 11.2676 19.5309 11.2631C19.5354 11.2541 19.5354 11.2451 19.5444 11.2361C19.5534 11.218 19.5715 11.2045 19.5805 11.1865C19.5895 11.1685 19.594 11.1504 19.5985 11.1414C19.5985 11.1234 19.603 11.0919 19.5354 11.1279C19.5039 11.1459 19.4588 11.2045 19.4768 11.227Z"
                    fill="url(#paint11_linear_268_6864)"
                  />
                  <path
                    d="M9.57741 6.95552L9.55938 6.942L9.53685 6.94651C9.52784 6.95101 9.51883 6.95552 9.50982 6.96453C9.35662 6.90145 9.29354 7.05465 9.30255 7.0907C9.30255 7.0952 9.30705 7.09971 9.31156 7.10421C9.30255 7.14026 9.30255 7.14026 9.32958 7.21236C9.32508 7.21686 9.32508 7.22137 9.32057 7.22587C9.29354 7.22137 9.29354 7.22137 9.28903 7.17631L9.2665 7.14927H9.24848C9.24848 7.15378 9.24397 7.15829 9.24397 7.1673C9.23946 7.1673 9.23496 7.16279 9.22595 7.16279C9.22144 7.1673 9.21694 7.1718 9.21694 7.1718C9.21243 7.1718 9.20792 7.1718 9.20342 7.1718C9.19891 7.1673 9.19441 7.16279 9.19441 7.15829C9.16286 7.20334 9.20342 7.27544 9.14484 7.31149C9.13132 7.23939 9.17638 7.1718 9.14935 7.09971C9.14034 7.07267 9.04121 6.96003 8.99615 6.91046C8.99164 6.91046 8.99164 6.91046 8.91955 6.96453C8.91504 6.96003 8.91053 6.96003 8.90603 6.95552C8.89251 6.97354 8.87899 6.99607 8.86548 7.0186C8.86097 7.0186 8.85646 7.0186 8.84745 7.0186C8.69425 7.2484 8.68524 7.25742 8.73931 7.41512C8.76635 7.41512 8.78437 7.39259 8.81591 7.3971C8.82042 7.40611 8.82492 7.42413 8.82492 7.43315C8.75283 7.4016 8.74382 7.5548 8.74382 7.5548C8.75733 7.57733 8.75733 7.57733 8.84745 7.58635C8.85196 7.59536 8.86097 7.60888 8.86548 7.61789C8.85646 7.63141 8.85646 7.63141 8.83393 7.65393C8.81591 7.64943 8.7348 7.61338 8.71678 7.56832C8.68975 7.56382 8.68975 7.56382 8.69425 7.42864C8.68524 7.42413 8.67172 7.41512 8.6582 7.41062C8.64919 7.39259 8.64919 7.39259 8.66722 7.29346C8.66271 7.29346 8.6537 7.28896 8.64919 7.28896C8.64469 7.27994 8.64469 7.26643 8.64919 7.25742C8.67623 7.18983 8.71678 7.12674 8.74382 7.05916C8.69876 7.02311 8.66271 7.04564 8.63117 7.05916C8.41489 7.19884 8.26619 7.79362 8.48698 7.86571C8.505 7.87022 8.55907 7.85219 8.5816 7.83868C8.57259 7.8567 8.56809 7.86571 8.53204 7.88824C8.505 7.90176 8.49149 7.90626 8.47797 7.91528C8.49599 8.01891 8.49599 8.01891 8.61765 8.082C8.64469 8.06848 8.67172 8.03694 8.68975 8.00089C8.70777 8.00539 8.72579 8.01891 8.74382 8.02342C8.74832 8.01891 8.75283 8.01441 8.75283 8.01441C8.75733 8.01441 8.76635 8.01441 8.77085 8.01891C8.78887 8.05947 8.78887 8.05947 9.10879 7.92429C9.12231 7.91978 9.13132 7.91077 9.14484 7.90626C9.17638 7.92879 9.17638 7.92879 9.19891 7.92879C9.20342 7.92429 9.21243 7.91077 9.21694 7.90176C9.20342 7.88824 9.18089 7.86571 9.16737 7.85219C9.22144 7.84769 9.22144 7.84769 9.23947 7.81164C9.24397 7.81164 9.24397 7.81164 9.31607 7.79362C9.32057 7.79362 9.32508 7.79362 9.32958 7.79362C9.3431 7.78911 9.3431 7.78911 9.34761 7.78911H9.35211L9.36112 7.78461C9.37915 7.7801 9.40168 7.78911 9.4197 7.77559C9.42421 7.7801 9.42421 7.7801 9.48278 7.74405C9.48278 7.73955 9.48278 7.73053 9.48278 7.72603C9.47828 7.71251 9.47828 7.71251 9.47828 7.71251V7.70801V7.7035V7.69899V7.69449C9.47377 7.68548 9.46476 7.67196 9.45575 7.66295L9.43772 7.65844C9.43322 7.65844 9.42421 7.65393 9.4197 7.65393C9.4152 7.65844 9.41069 7.65844 9.40618 7.66295C9.40168 7.65844 9.39717 7.65393 9.39267 7.65393C9.39267 7.64943 9.39267 7.64042 9.39267 7.63591C9.39717 7.63591 9.40168 7.63141 9.40618 7.63141C9.40618 7.62239 9.41069 7.60437 9.41069 7.59536C9.41519 7.59536 9.42421 7.59536 9.42871 7.59536C9.43322 7.60437 9.43772 7.61789 9.43772 7.6269C9.44674 7.6269 9.46025 7.62239 9.46927 7.62239C9.47377 7.6314 9.47828 7.64492 9.48729 7.64943C9.52334 7.6269 9.52784 7.6269 9.54587 7.6269C9.55938 7.64943 9.55037 7.68548 9.57741 7.7035C9.59994 7.69449 9.59994 7.69449 9.61345 7.66295C9.62247 7.66295 9.63598 7.65844 9.645 7.66295C9.6495 7.67646 9.66302 7.68998 9.66753 7.7035C9.67654 7.7035 9.69005 7.69899 9.70357 7.69899C9.71258 7.72603 9.7216 7.74856 9.81622 7.72152C9.82523 7.74405 9.83424 7.7801 9.77567 7.82065C9.77116 7.82065 9.76215 7.81615 9.75764 7.81615C9.71258 7.87022 9.75314 7.90176 9.78017 7.89275C9.81171 7.88374 9.83424 7.84769 9.85677 7.78911L9.86578 7.77559L9.8793 7.7801C9.88381 7.77109 9.89282 7.76208 9.90183 7.75757C9.90634 7.75757 9.91084 7.75757 9.91986 7.76208C9.92436 7.77109 9.92887 7.78461 9.93337 7.79362C9.9514 7.79362 9.96491 7.79362 9.98294 7.83417C9.99195 7.83417 10.0055 7.83868 10.0145 7.83868C10.019 7.79812 10.019 7.79812 10.0235 7.78911C10.0595 7.80714 10.055 7.82065 10.055 7.83868C10.0866 7.8567 10.0911 7.8567 10.1136 7.83417C10.1632 7.86121 10.1902 7.92429 10.2578 7.92879C10.3209 8.00089 10.2758 8.09101 10.2893 8.17211C10.2893 8.18563 10.2893 8.18563 10.2893 8.18563C10.2578 8.26223 10.2172 8.3929 10.2172 8.3929C10.2308 8.45598 10.3074 8.41994 10.3389 8.46049C10.2984 8.59567 10.2353 8.60919 10.2353 8.60919C10.2172 8.63171 10.2172 8.63171 10.2127 8.64974C10.2082 8.66326 10.2082 8.66326 10.2082 8.66326C10.2082 8.66776 10.2037 8.67677 10.2037 8.68579C10.2082 8.69029 10.2127 8.69029 10.2172 8.6948C10.2218 8.69029 10.2263 8.68579 10.2308 8.68579C10.2398 8.6948 10.2578 8.72183 10.2218 8.74436C10.2127 8.73535 10.2082 8.72634 10.1992 8.71733C10.0415 8.69029 10.037 8.6993 9.99646 8.75337C9.98744 8.76239 9.91986 8.86602 9.98294 9.0057C10.0055 9.01472 10.0055 9.01472 10.064 9.0012C10.0685 9.0057 10.0731 9.0057 10.0776 9.01021C10.1001 8.99219 10.1181 8.96515 10.1497 8.95614C10.1497 8.96065 10.1542 8.96515 10.1542 8.96966C10.1812 8.95163 10.1812 8.95163 10.2353 8.83899C10.2578 8.83448 10.2578 8.83448 10.3029 8.84349C10.3659 8.78942 10.3659 8.78942 10.3479 8.75337C10.3029 8.74436 10.2938 8.74436 10.2984 8.70381C10.3434 8.6993 10.3434 8.6993 10.42 8.7714C10.4335 8.74887 10.4335 8.74887 10.4245 8.72183C10.4335 8.71733 10.4561 8.70831 10.4921 8.70381C10.5327 8.76239 10.5327 8.76239 10.5732 8.76689C10.5777 8.76239 10.5822 8.75788 10.5867 8.75788C10.5822 8.76239 10.5822 8.76689 10.5777 8.7714C10.5777 8.7759 10.5822 8.78492 10.5822 8.78942C10.6002 8.79393 10.6002 8.79393 10.6273 8.78041C10.6363 8.78942 10.6363 8.78942 10.6453 8.82997C10.6498 8.82997 10.6588 8.83448 10.6633 8.83448C10.7219 8.7714 10.7354 8.76239 10.803 8.7759C10.803 8.81195 10.7625 8.82547 10.7534 8.85701C10.7715 8.87954 10.7715 8.87954 10.9337 8.89306C10.9337 8.90657 10.9337 8.92009 10.9292 8.93361C10.9562 8.93812 10.9832 8.97416 11.0148 8.94713C11.0238 8.86602 11.0238 8.86602 11.0418 8.85701C11.1139 8.88405 11.3662 8.87954 11.4248 8.81195C11.4609 8.82096 11.4969 8.81195 11.533 8.81646C11.542 8.81195 11.5465 8.79843 11.551 8.78942C11.5149 8.67227 11.3753 8.72183 11.3122 8.64523C11.0779 8.67227 11.0553 8.56413 11.0689 8.55511C11.0734 8.55061 11.1545 8.5461 11.168 8.55061C11.1815 8.55511 11.2266 8.56413 11.3347 8.55511L11.4609 8.52357C11.4789 8.53709 11.4789 8.53709 11.4969 8.55962C11.5014 8.55511 11.5014 8.55511 11.542 8.55061C11.5465 8.55511 11.5555 8.56413 11.5645 8.56863C11.6186 8.58215 11.6186 8.58215 11.6231 8.59116C11.6186 8.55061 11.6186 8.55061 11.542 8.51907C11.542 8.51456 11.5375 8.51006 11.5375 8.50104C11.5465 8.49654 11.56 8.49654 11.569 8.50104C11.5825 8.46049 11.542 8.43346 11.524 8.41994C11.5285 8.41093 11.533 8.40191 11.5375 8.3929C11.542 8.3884 11.5465 8.3884 11.551 8.38389C11.5465 8.35685 11.5465 8.35685 11.5104 8.3118C11.4654 8.28025 11.4654 8.28025 11.4383 8.24871C11.3708 8.25773 11.3662 8.24871 11.3437 8.1586C11.2806 8.15409 11.2806 8.15409 11.2581 8.13607C11.2536 8.14057 11.2491 8.14057 11.2446 8.14508C11.2446 8.15409 11.2401 8.16761 11.2356 8.17662C11.1635 8.17662 11.1635 8.17662 11.15 8.18563C11.1184 8.15859 11.0373 8.0865 11.0373 8.0865C11.0193 8.08199 11.0193 8.08199 10.9787 8.06397C10.9742 8.07298 10.9697 8.0865 10.9652 8.09551C10.9427 8.0865 10.9427 8.0865 10.9292 8.05947C10.8751 8.04595 10.8571 8.04144 10.83 8.01891C10.8796 8.01441 10.9292 8.02792 10.9742 8.0099C10.9742 7.99638 10.9742 7.99638 10.9607 7.96034C10.9202 7.96484 10.9157 7.96034 10.8976 7.95132C10.8976 7.94682 10.8976 7.94231 10.8976 7.93781C10.9202 7.91978 10.9247 7.91528 10.9382 7.90176C10.9247 7.87923 10.9202 7.87472 10.9157 7.8567C10.9202 7.85219 10.9247 7.84769 10.9247 7.84318C10.9427 7.84318 10.9427 7.84318 11.0148 7.87472C11.0193 7.87022 11.0238 7.87022 11.0283 7.86571C11.0418 7.86571 11.0418 7.86571 11.0418 7.86571C11.0463 7.86571 11.0553 7.86571 11.0598 7.86121C11.0914 7.89275 11.0959 7.89275 11.1139 7.89725C11.1184 7.88824 11.1274 7.87923 11.1319 7.87472C11.1545 7.88824 11.186 7.88374 11.2085 7.89275C11.213 7.90176 11.2176 7.91528 11.2221 7.92429C11.2311 7.91978 11.2446 7.91978 11.2536 7.91978C11.2536 7.92429 11.2536 7.92429 11.2536 7.92429C11.2536 7.93781 11.2581 7.95132 11.2626 7.96034C11.3212 7.97836 11.3212 7.97836 11.3527 7.94682C11.3617 7.94682 11.3753 7.95583 11.3843 7.96484C11.4068 7.96484 11.4068 7.96484 11.4293 7.95132C11.4383 7.95583 11.4519 7.96034 11.4609 7.96034C11.4834 7.88374 11.4068 7.85219 11.3888 7.78911C11.4383 7.7801 11.4383 7.7801 11.4564 7.72152L11.4519 7.69899L11.4609 7.67646C11.4609 7.65844 11.4609 7.65844 11.4564 7.6269C11.4113 7.60437 11.4113 7.60437 11.3978 7.58635C11.4113 7.56832 11.4338 7.56382 11.4474 7.54579C11.4519 7.54579 11.4564 7.5503 11.4609 7.5503C11.4969 7.53228 11.5194 7.51876 11.4834 7.43765C11.4383 7.37907 11.3798 7.42413 11.3257 7.41512C11.3077 7.42864 11.3077 7.42864 11.3077 7.46018C11.2987 7.46469 11.2896 7.4737 11.2851 7.48271C11.2716 7.44666 11.2716 7.44216 11.2851 7.41062C11.2581 7.38809 11.159 7.36105 11.159 7.36105C11.1274 7.38809 11.1139 7.39259 11.1049 7.3971C11.0914 7.42413 11.1004 7.45568 11.1004 7.48271C11.0959 7.48271 11.0914 7.48271 11.0869 7.48271C11.0824 7.4737 11.0779 7.46018 11.0734 7.45117C11.0734 7.44216 11.0734 7.44216 11.0734 7.44216C11.0644 7.41963 11.0463 7.4016 11.0328 7.38358C11.0013 7.39259 11.0013 7.39259 10.9652 7.38809C10.9607 7.3971 10.9517 7.40611 10.9427 7.41062C10.9157 7.3971 10.9157 7.3971 10.8976 7.41062C10.8976 7.41963 10.9021 7.43315 10.9021 7.44666C10.8751 7.45567 10.8616 7.46018 10.8661 7.49623C10.8616 7.49623 10.8571 7.50073 10.8526 7.50524C10.8481 7.50073 10.8436 7.49623 10.8391 7.49623C10.83 7.41963 10.83 7.41963 10.803 7.37457C10.7264 7.38358 10.7084 7.38809 10.7039 7.4737C10.6814 7.49172 10.6814 7.50073 10.6904 7.51876C10.6859 7.50975 10.6768 7.50073 10.6768 7.49172C10.6678 7.48722 10.6678 7.48722 10.6678 7.48722C10.6633 7.49623 10.6543 7.50524 10.6543 7.51425C10.6498 7.51425 10.6453 7.50975 10.6408 7.50975C10.6363 7.4782 10.6363 7.4782 10.6273 7.46469C10.6002 7.46018 10.5732 7.4737 10.5507 7.45567C10.5236 7.46469 10.5236 7.46469 10.5056 7.46018C10.5011 7.43765 10.5101 7.41963 10.5056 7.3971C10.5101 7.38809 10.5101 7.38809 10.5417 7.36556C10.5417 7.36105 10.5417 7.35204 10.5417 7.34303L10.5282 7.32951C10.5642 7.29346 10.6183 7.28896 10.6543 7.25291C10.5867 7.21686 10.5191 7.29346 10.4516 7.25742C10.4516 7.25291 10.4516 7.2484 10.4516 7.2439C10.4786 7.22137 10.4921 7.18983 10.5282 7.17631C10.5507 7.0907 10.4561 7.07718 10.4245 7.07267C10.402 7.11323 10.402 7.16279 10.3614 7.19433C10.3614 7.15829 10.3614 7.15829 10.3434 7.14927C10.3389 7.14927 10.3344 7.15378 10.3299 7.15829C10.3344 7.13125 10.3389 7.11323 10.3614 7.07267C10.3434 7.0186 10.2803 7.07267 10.2488 7.04113C10.2308 7.05465 10.1992 7.08169 10.1902 7.11323C10.1857 7.11323 10.1812 7.10872 10.1767 7.10421C10.1812 7.09971 10.1812 7.0952 10.1857 7.0907C10.1812 7.08619 10.1767 7.08619 10.1722 7.08169C10.1632 7.08619 10.1632 7.08619 10.1226 7.14927C10.1181 7.13576 10.1226 7.11323 10.1226 7.09971C10.1181 7.06817 10.1136 7.05916 10.0866 7.05014C10.0595 7.06366 10.0595 7.0952 10.046 7.11773C10.0415 7.11323 10.037 7.10872 10.0325 7.10872C10.0235 6.92398 9.8793 7.04113 9.8793 7.04564L9.85227 7.10872C9.84776 7.10421 9.84776 7.09971 9.84326 7.0952C9.82974 7.11323 9.82974 7.13576 9.81622 7.15378C9.81171 7.14477 9.80721 7.13576 9.80721 7.12674C9.8027 7.12224 9.7982 7.11773 9.7982 7.11323C9.79369 7.11323 9.78918 7.11773 9.78468 7.11773C9.78468 7.11773 9.78468 7.11773 9.77116 7.06817C9.75314 7.07267 9.74413 7.07267 9.70808 7.11773C9.70357 7.11323 9.69907 7.11323 9.69456 7.10872C9.69456 7.08169 9.71709 7.05465 9.71258 7.02761V7.02311V7.0186C9.70357 7.00509 9.68104 6.97805 9.6495 7.02761C9.64049 7.02311 9.62247 7.0186 9.60895 7.0186L9.59994 7.00058L9.57741 6.95552Z"
                    fill="url(#paint12_linear_268_6864)"
                  />
                  <path
                    d="M5.9232 8.86598C5.97727 8.82993 6.00881 8.77136 6.05387 8.7263C6.08541 8.75333 6.11245 8.66321 6.13948 8.56859C6.14399 8.54606 6.153 8.53254 6.15751 8.51903L6.26114 8.35231C6.26565 8.3478 6.27016 8.3433 6.27466 8.33879C6.36478 8.22614 6.47292 8.13602 6.55403 8.01436C6.55853 8.00986 6.56304 8.00085 6.57205 7.97832C6.58106 7.94678 6.54051 7.94227 6.52699 7.92425C6.50897 7.90172 6.50897 7.89721 6.50897 7.83413C6.50897 7.83413 6.43687 7.82962 6.42786 7.82061C6.42336 7.82512 6.41885 7.82512 6.39632 7.84765C6.38731 7.85666 6.37379 7.86567 6.36478 7.87468C6.36478 7.87018 6.36478 7.86116 6.36478 7.85666C6.35577 7.85215 6.35577 7.85215 6.35126 7.83413C6.32873 7.83863 6.31522 7.86116 6.29719 7.87018C6.29719 7.87018 6.29719 7.87018 6.27466 7.76654C6.27016 7.76654 6.26565 7.76654 6.24763 7.80709C6.2251 7.80259 6.21158 7.78006 6.18454 7.78456L6.18004 7.78006C6.15751 7.79808 6.1485 7.82512 6.12597 7.84314C6.12146 7.83863 6.11696 7.82962 6.11245 7.82512C6.08091 7.85666 6.0719 7.86116 6.05838 7.86567V7.93326C6.05387 8.05041 6.04486 8.06393 6.02233 8.09547C5.98628 8.17658 5.98628 8.17658 5.94573 8.25768C5.93672 8.28922 5.93672 8.28922 5.90518 8.35231L5.87814 8.41088L5.85561 8.48298L5.78802 8.62266C5.79253 8.62717 5.79704 8.62717 5.80154 8.63167C5.8466 8.62266 5.8466 8.62266 5.8466 8.62266C5.85561 8.66772 5.85561 8.66772 5.87814 8.66772L5.86913 8.74883C5.89617 8.78487 5.89617 8.78487 5.89617 8.82993C5.90067 8.86598 5.90067 8.87049 5.9232 8.86598Z"
                    fill="url(#paint13_linear_268_6864)"
                  />
                  <path
                    d="M6.68451 8.11802C6.68001 8.11802 6.671 8.11802 6.66649 8.11802C6.61242 8.21715 6.61242 8.21715 6.61242 8.22166H6.62143C6.60791 8.2532 6.60341 8.2532 6.58989 8.2577C6.58989 8.2577 6.58538 8.2532 6.58088 8.2532C6.57187 8.27122 6.57187 8.27122 6.55835 8.27573C6.55835 8.27573 6.55384 8.27122 6.55384 8.26671C6.56736 8.20814 6.5989 8.15857 6.61692 8.1045C6.62143 8.04593 6.62594 8.0234 6.60341 8.00988C6.54032 8.08648 6.54032 8.08648 6.52681 8.09098C6.5223 8.09098 6.5223 8.08648 6.51779 8.08648C6.49527 8.10901 6.47274 8.13154 6.45021 8.15407H6.44119C6.42317 8.1766 6.40965 8.19913 6.39163 8.22166C6.39163 8.22166 6.39163 8.22166 6.38712 8.22616C6.38712 8.22616 6.38712 8.22616 6.36459 8.23968C6.36459 8.23968 6.23392 8.39288 6.30151 8.42442C6.26997 8.46948 6.26997 8.46948 6.25645 8.47849C6.22041 8.51454 6.22041 8.5641 6.19788 8.60466C6.20238 8.62268 6.20238 8.62268 6.19788 8.6362L6.27898 8.60466C6.27898 8.60466 6.28349 8.60916 6.28799 8.60916C6.27898 8.6362 6.27448 8.6407 6.26096 8.65873C6.26997 8.68576 6.26997 8.68576 6.28349 8.68576C6.28349 8.68576 6.32855 8.65873 6.34657 8.6407C6.34657 8.6407 6.41867 8.59114 6.43669 8.59565C6.44119 8.59114 6.4457 8.58663 6.45021 8.58663C6.4457 8.59114 6.4457 8.59114 6.25195 8.76236C6.16183 8.83896 6.26997 8.91106 6.27898 8.91106L6.45922 8.85248C6.47724 8.84347 6.48175 8.84347 6.49527 8.82995L6.63044 8.82094C6.6755 8.82545 6.64847 8.87051 6.61242 8.89303C6.53582 8.87501 6.49076 8.94711 6.42768 8.95612C6.42768 8.95612 6.42317 8.95161 6.42317 8.94711C6.41867 8.94711 6.41867 8.94711 6.29701 9.01019C6.29701 9.01019 6.29701 9.01019 6.2925 9.01469C6.27448 9.04173 6.27448 9.04173 6.26546 9.04173C6.26546 9.04624 6.26096 9.05525 6.26096 9.05975C6.26096 9.06426 6.26997 9.30307 6.38712 9.25351C6.42317 9.27604 6.42317 9.27604 6.42768 9.27604C6.44119 9.249 6.44119 9.249 6.4457 9.24449L6.45021 9.249C6.46823 9.24449 6.47724 9.23548 6.49527 9.23548C6.54483 9.27153 6.49527 9.3256 6.50428 9.36615C6.51779 9.37517 6.52681 9.37967 6.53582 9.4022C6.55384 9.4022 6.55384 9.4022 6.56285 9.40671C6.60791 9.4022 6.63945 9.37066 6.6755 9.35714C6.6755 9.34362 6.68001 9.33912 6.71155 9.33011C6.75661 9.31659 6.79265 9.29406 6.80617 9.28505C6.80617 9.28505 6.88277 9.22647 7.02696 9.0958C7.04499 9.05975 7.054 9.01469 7.08103 8.98315C7.08554 8.98315 7.09455 8.98315 7.10356 8.98315C7.11257 9.00118 7.10356 9.0192 7.10356 9.04173C7.10356 9.04173 7.12609 9.04173 7.17115 9.0192C7.19819 9.03722 7.2072 9.06876 7.23423 9.08679C7.2883 9.05074 7.35589 9.05525 7.40546 9.01469C7.45052 8.97865 7.48656 8.92908 7.49107 8.88853C7.45502 8.88402 7.46854 8.82545 7.42799 8.82545C7.40996 8.84347 7.40095 8.87051 7.38743 8.89303C7.38293 8.88402 7.38293 8.88402 7.39194 8.84347C7.38743 8.83896 7.37842 8.83896 7.37392 8.83446C7.37392 8.82995 7.36941 8.82995 7.36941 8.82545C7.37392 8.82094 7.37392 8.82094 7.40546 8.82094C7.41447 8.7939 7.40095 8.76687 7.41447 8.74434C7.42348 8.72632 7.44601 8.73082 7.45502 8.7173C7.45953 8.7173 7.46403 8.7173 7.46403 8.7173C7.46854 8.73533 7.46854 8.73533 7.48206 8.73533C7.48656 8.73082 7.49107 8.72632 7.49557 8.72181C7.49557 8.72181 7.53162 8.72181 7.54965 8.72181C7.55415 8.7128 7.55415 8.70379 7.55415 8.66323C7.55415 8.60916 7.55415 8.60916 7.49557 8.59565C7.48656 8.58213 7.48656 8.5641 7.47755 8.55059C7.45502 8.57312 7.4415 8.56861 7.437 8.56861C7.437 8.56861 7.42799 8.53707 7.41447 8.51905C7.40996 8.51905 7.40095 8.51905 7.39644 8.51905C7.39194 8.50553 7.38293 8.49652 7.37842 8.483C7.35589 8.52355 7.35589 8.52355 7.34688 8.53256C7.34688 8.53256 7.34688 8.53256 7.30182 8.43794C7.29281 8.44244 7.2838 8.44695 7.27479 8.44695C7.23874 8.40189 7.2883 8.36584 7.2883 8.3298C7.2883 8.30276 7.2883 8.30276 7.26127 8.19462C7.23874 8.11351 7.23874 8.0279 7.21621 7.9468C7.24775 7.92877 7.31534 7.8702 7.30182 7.68996C7.2883 7.68545 7.2838 7.67194 7.27028 7.67194C7.24775 7.68095 7.22973 7.69897 7.2072 7.70348C7.18016 7.70798 7.13961 7.78458 7.13961 7.7936L7.19819 7.84767C7.20269 7.86569 7.19819 7.88822 7.20269 7.90624C7.20269 7.91075 7.19819 7.91075 7.19368 7.91525C7.18016 7.90624 7.18016 7.90624 7.14411 7.85217C7.13961 7.85217 7.13961 7.85217 7.1351 7.85217C7.1306 7.86569 7.12609 7.87921 7.12159 7.89272C7.09455 7.8702 7.09455 7.8702 7.08554 7.8702C7.08554 7.86569 7.08103 7.86569 7.08103 7.86118C7.04048 7.90624 7.04048 7.92877 7.03147 8.10901C7.03147 8.14055 7.06301 8.15857 7.06301 8.19011C7.0585 8.28474 7.0585 8.28474 7.06301 8.28924C7.06751 8.32079 7.02246 8.36134 7.02246 8.36134C7.01795 8.35683 7.01344 8.35233 7.00894 8.35233C7.00894 8.35233 6.99091 8.29826 6.99091 8.19462C6.99091 8.13154 6.99091 8.13154 6.93234 8.06395L6.92783 8.03241C6.91882 8.0279 6.91882 8.0279 6.86925 8.03691C6.86475 8.04593 6.86475 8.05043 6.86024 8.06846C6.90981 8.13154 6.90981 8.13154 6.89629 8.14956C6.89178 8.14956 6.88277 8.14956 6.87827 8.14506C6.85574 8.1766 6.85574 8.1766 6.85123 8.1811C6.84673 8.1766 6.84222 8.1766 6.84222 8.17209C6.79265 8.24869 6.79265 8.24869 6.77914 8.24869C6.8242 8.14055 6.8242 8.14055 6.78364 8.10901C6.77914 8.10901 6.77914 8.10901 6.77463 8.10901C6.77463 8.1045 6.77463 8.1045 6.77013 8.1H6.76111C6.76111 8.1 6.75661 8.09549 6.75661 8.09098C6.7476 8.09098 6.74309 8.08197 6.73408 8.08197C6.72957 8.08648 6.72507 8.08648 6.72056 8.09098C6.69352 8.12253 6.68902 8.11802 6.68451 8.11802Z"
                    fill="url(#paint14_linear_268_6864)"
                  />
                  <path
                    d="M7.90118 6.05429L7.88315 6.04077H7.87865C7.87865 6.04077 7.84711 6.0633 7.84711 6.07231C7.8426 6.09935 7.83359 6.2165 7.8426 6.23452C7.84711 6.22551 7.84711 6.22551 7.85161 6.22101C7.85612 6.2165 7.86062 6.22101 7.86513 6.22101C7.86964 6.22101 7.86964 6.2165 7.87414 6.2165L7.89217 6.24354C7.88315 6.25255 7.86964 6.25705 7.85612 6.26607C7.86062 6.27508 7.86513 6.27057 7.86964 6.27057C7.87414 6.27057 7.87414 6.27508 7.87414 6.27958C7.87414 6.30662 7.87865 6.32014 7.87865 6.32014C7.88315 6.32915 7.89217 6.32464 7.90118 6.32014C7.90118 6.31563 7.92821 6.27958 7.92821 6.27958V6.28409V6.2886C7.92821 6.2931 7.93723 6.29761 7.94173 6.2931C7.95525 6.28409 7.95525 6.26607 7.96426 6.26156C7.98679 6.24804 7.98679 6.24804 7.9913 6.23903C8.00481 6.2165 8.00481 6.2165 8.00481 6.212C8.00932 6.17595 8.00481 6.17595 8.00031 6.17144C7.9958 6.16694 7.9913 6.16694 8.01383 6.13089C8.00932 6.13089 8.00932 6.12188 8.01383 6.10836C8.01383 6.10385 8.01383 6.09935 8.01383 6.09484C8.01383 6.09484 8.00932 6.09034 7.96877 6.09935C7.96877 6.09935 7.96877 6.09935 7.96426 6.10836C7.95074 6.11287 7.95525 6.09034 7.95525 6.08132C7.95975 6.05429 7.95074 6.05429 7.95074 6.05429C7.94624 6.05429 7.94173 6.05879 7.94173 6.05879C7.93723 6.0633 7.92821 6.06781 7.92371 6.06781C7.9192 6.05429 7.91019 6.05879 7.90118 6.05429Z"
                    fill="url(#paint15_linear_268_6864)"
                  />
                  <path
                    d="M7.98223 6.38329C7.98674 6.37879 7.99575 6.37428 8.00026 6.36978L8.00476 6.36527C8.01828 6.35175 8.01828 6.35175 8.01828 6.35175H8.04532C8.04982 6.34725 8.04982 6.34274 8.05433 6.33823C8.06785 6.33373 8.06785 6.33373 8.07686 6.32922C8.09038 6.31571 8.09488 6.28416 8.09939 6.27515C8.09939 6.27065 8.09488 6.2391 8.09488 6.2346C8.09038 6.23009 8.08587 6.2391 8.08136 6.2391C8.07686 6.2391 8.07235 6.2391 8.06785 6.2391C8.06334 6.2391 8.06334 6.24812 8.05433 6.24361C8.04982 6.24361 8.04982 6.2391 8.04982 6.2391H8.04532C8.01828 6.25262 8.00476 6.28416 7.97773 6.29768C7.97322 6.29318 7.96872 6.29318 7.96872 6.29318C7.96421 6.29318 7.96421 6.29768 7.95971 6.29768C7.9552 6.29768 7.95069 6.29768 7.95069 6.29768C7.95069 6.29768 7.91915 6.34725 7.92366 6.36076C7.92366 6.36527 7.94168 6.37879 7.94168 6.37879C7.95069 6.38329 7.95069 6.37428 7.9552 6.36978C7.95971 6.37428 7.95971 6.38329 7.96421 6.3878C7.96421 6.40582 7.96421 6.40582 7.98223 6.38329Z"
                    fill="url(#paint16_linear_268_6864)"
                  />
                  <path
                    d="M8.28876 6.16693H8.28425C8.28425 6.16693 8.23018 6.19847 8.21666 6.22551C8.21666 6.23001 8.21216 6.23452 8.21216 6.24353C8.21216 6.26156 8.21216 6.26155 8.22568 6.28408C8.23018 6.2976 8.23018 6.30661 8.22568 6.31112C8.22117 6.31563 8.22117 6.32013 8.22117 6.32013L8.23018 6.33365L8.23919 6.32914C8.23919 6.32914 8.2437 6.31112 8.2437 6.30661C8.2437 6.2976 8.2437 6.2976 8.24821 6.2931C8.25271 6.30661 8.25271 6.30661 8.25722 6.30661C8.25722 6.30211 8.25722 6.2976 8.26172 6.2976C8.26623 6.2976 8.26623 6.30211 8.26623 6.30211C8.27073 6.30211 8.27524 6.30211 8.28425 6.30211C8.28876 6.30211 8.28876 6.30661 8.29326 6.30661H8.29777C8.30678 6.30211 8.30678 6.2931 8.31129 6.28859C8.31129 6.28408 8.31579 6.28408 8.31579 6.27057C8.31579 6.26156 8.31579 6.221 8.31129 6.2165C8.31129 6.21199 8.30678 6.21199 8.30228 6.20748C8.29777 6.20748 8.29777 6.20748 8.29326 6.20748C8.29326 6.20748 8.28425 6.20298 8.28425 6.17594C8.29326 6.16693 8.29326 6.16693 8.28876 6.16693Z"
                    fill="url(#paint17_linear_268_6864)"
                  />
                  <path
                    d="M8.27966 6.59051C8.27966 6.59502 8.28417 6.59502 8.28868 6.59952C8.29769 6.59502 8.3067 6.58601 8.32022 6.5815H8.32472H8.32923H8.33374C8.34275 6.57699 8.34275 6.57699 8.34725 6.57249C8.34725 6.56348 8.34725 6.54996 8.34725 6.54095C8.32923 6.53644 8.32923 6.53644 8.3067 6.54545C8.30219 6.54095 8.30219 6.54095 8.27065 6.52743C8.26615 6.51391 8.26615 6.51391 8.22559 6.47786C8.22109 6.47786 8.21208 6.48237 8.20757 6.48237C8.20757 6.48237 8.15801 6.5049 8.1535 6.51842C8.14899 6.53193 8.14449 6.54545 8.11295 6.54095C8.10844 6.54996 8.10393 6.55446 8.09943 6.56348C8.09943 6.54996 8.09042 6.51842 8.08141 6.5094C8.08141 6.5094 8.04986 6.49589 8.04536 6.50039L8.04085 6.5049C8.02733 6.51842 8.02283 6.51842 8.01832 6.51842C8.01382 6.51842 8.00931 6.5094 8.0048 6.5094C7.99129 6.51391 7.98228 6.51391 7.96425 6.5094C7.95975 6.5094 7.9237 6.52292 7.91919 6.52743C7.88765 6.55897 7.88315 6.57699 7.87413 6.61304C7.86963 6.62656 7.87413 6.65359 7.87413 6.65359C7.87864 6.66261 7.88315 6.6581 7.89216 6.66261C7.89666 6.66261 7.89666 6.66261 7.89666 6.66711C7.91018 6.68063 7.91018 6.68063 7.9237 6.67162C7.9237 6.67162 7.94172 6.65359 7.9282 6.68964C7.9237 6.70316 7.9237 6.70316 7.9237 6.70316C7.9237 6.70316 7.9282 6.70316 7.93271 6.70316H7.93722C7.94172 6.70316 7.94172 6.71217 7.94623 6.71217C7.94623 6.71217 7.95524 6.71217 7.95975 6.69865C7.95975 6.69415 7.95975 6.69415 7.96425 6.69415C7.96876 6.69865 7.97326 6.70316 7.97777 6.70766C7.98228 6.70766 7.98228 6.70316 7.98678 6.70316V6.70766C7.99129 6.71217 7.99579 6.71668 8.0048 6.72118C8.00931 6.72118 8.01832 6.71217 8.02283 6.72118L8.04085 6.71668C8.04085 6.71668 8.0769 6.68063 8.0769 6.67612C8.08591 6.6581 8.08141 6.64909 8.0769 6.63557C8.0769 6.63106 8.07239 6.62656 8.0769 6.62205C8.08141 6.61304 8.08591 6.60403 8.09042 6.59952C8.08141 6.63106 8.09492 6.66261 8.11745 6.71217C8.12196 6.71217 8.12646 6.70766 8.13097 6.70766C8.13548 6.71217 8.13548 6.71217 8.13998 6.72118C8.14449 6.7347 8.16702 6.7347 8.16702 6.75272C8.17152 6.77976 8.17152 6.77976 8.17603 6.79778C8.17603 6.80229 8.18053 6.8113 8.18053 6.81581C8.18504 6.83834 8.16251 6.85185 8.15801 6.86988C8.14899 6.90592 8.14899 6.91043 8.1535 6.91494L8.18955 7.03659C8.19405 7.03659 8.19856 7.03659 8.20306 7.03659C8.20306 7.0411 8.20757 7.04561 8.20757 7.05011C8.22109 7.06814 8.25263 7.06814 8.26164 7.03659C8.26164 7.02758 8.26164 7.02308 8.26164 7.01407L8.27516 7.00055C8.27966 7.03209 8.27966 7.03209 8.30219 7.05462L8.32022 7.05011C8.32472 7.05011 8.32923 7.04561 8.33374 7.04561C8.38781 7.01407 8.38781 7.01407 8.38781 7.00956C8.40583 6.98252 8.41034 6.95098 8.43287 6.92395C8.43737 6.92845 8.43737 6.92845 8.44188 6.97351C8.44638 6.98252 8.45089 6.99604 8.45089 7.00505C8.46891 6.99604 8.48694 6.98703 8.50496 6.97802C8.52298 6.9645 8.52298 6.93747 8.54101 6.92845C8.54551 6.93747 8.54551 6.93747 8.55002 6.94197C8.55903 6.94197 8.56804 6.93747 8.57255 6.92845L8.59508 6.92395C8.60409 6.91043 8.6131 6.89691 8.62211 6.8879C8.62662 6.8879 8.63112 6.89241 8.64014 6.89241C8.64014 6.89691 8.64464 6.89691 8.64915 6.89691C8.65365 6.8879 8.65365 6.88339 8.65816 6.87438C8.66267 6.87438 8.66717 6.86988 8.67168 6.86988C8.68069 6.87438 8.68069 6.87438 8.6897 6.86988L8.69871 6.85636C8.70322 6.85185 8.71223 6.84735 8.71674 6.84284C8.72124 6.84735 8.72575 6.85185 8.73476 6.85185C8.74828 6.84735 8.81136 6.78426 8.81136 6.78426C8.82037 6.76624 8.80235 6.75272 8.80685 6.7347C8.82488 6.73019 8.82938 6.73019 8.82938 6.75272C8.82938 6.78426 8.95104 6.74822 8.95104 6.74822C8.97357 6.71668 8.97357 6.71668 9.04116 6.6581C9.04116 6.63557 9.03215 6.61304 9.03215 6.59051C9.02764 6.55446 9.08622 6.56798 9.08622 6.53193L9.07721 6.52292C9.06369 6.52743 9.06369 6.52743 9.05919 6.52292C9.05919 6.51842 9.05468 6.51391 9.05017 6.5094C9.03215 6.48688 9.05468 6.46435 9.05017 6.43731C9.04567 6.39676 9.04116 6.39676 9.00511 6.41028C8.9961 6.39225 8.9961 6.39225 8.9916 6.38775C8.96907 6.39676 8.95104 6.40126 8.92851 6.41028C8.89697 6.39225 8.89697 6.39225 8.87895 6.39676H8.87444H8.86994H8.86543H8.86093H8.85642C8.85642 6.38324 8.85642 6.38324 8.84741 6.38324C8.83389 6.39225 8.82938 6.39676 8.82488 6.40126C8.82037 6.40126 8.82037 6.39676 8.81587 6.39676C8.81587 6.39676 8.77982 6.44182 8.7663 6.47786C8.75278 6.45533 8.75278 6.45533 8.74828 6.45533C8.73927 6.45984 8.73476 6.46435 8.72124 6.45984C8.71674 6.46435 8.71223 6.46435 8.70773 6.46885C8.6897 6.49138 8.6852 6.51842 8.66717 6.54095C8.65365 6.55897 8.63112 6.56798 8.62211 6.586C8.55452 6.59952 8.57255 6.63557 8.58156 6.64458C8.57705 6.65359 8.56354 6.6581 8.55452 6.66261L8.55002 6.6581C8.5365 6.65359 8.52298 6.64458 8.50947 6.64008C8.47792 6.64458 8.4599 6.67612 8.43287 6.68964C8.42836 6.68513 8.42385 6.67612 8.41484 6.67162C8.41034 6.66711 8.38781 6.66711 8.38781 6.69415C8.37429 6.70316 8.3833 6.72118 8.37879 6.7347C8.35626 6.72569 8.35626 6.67612 8.35626 6.67162C8.35626 6.66711 8.35626 6.65359 8.34275 6.64458C8.32923 6.64008 8.32472 6.64909 8.31571 6.65359C8.31121 6.64458 8.31571 6.63557 8.31571 6.62656C8.30219 6.61755 8.30219 6.61755 8.27065 6.64458C8.27065 6.63557 8.27065 6.63557 8.27516 6.62205C8.26164 6.61304 8.26164 6.61755 8.25263 6.61755C8.26615 6.59952 8.26615 6.59502 8.27966 6.59051Z"
                    fill="url(#paint18_linear_268_6864)"
                  />
                  <path
                    d="M7.51798 6.35169C7.52248 6.34719 7.5315 6.35169 7.536 6.34719C7.54051 6.34268 7.54051 6.33367 7.54952 6.32916L7.58557 6.28861C7.58557 6.29762 7.58106 6.30663 7.58557 6.31565C7.59007 6.30663 7.59458 6.31114 7.59908 6.31565C7.60359 6.31565 7.6081 6.30663 7.6126 6.30213C7.63513 6.29762 7.62612 6.32466 7.62612 6.33818C7.64414 6.32916 7.64414 6.32916 7.64414 6.32466C7.66667 6.31565 7.66667 6.32015 7.66667 6.33818C7.67118 6.33818 7.67118 6.33818 7.67118 6.36521C7.67118 6.36972 7.67118 6.36972 7.68019 6.38774C7.6847 6.40126 7.69371 6.40576 7.70272 6.40126C7.71624 6.39675 7.71624 6.39675 7.72074 6.39225C7.72976 6.39675 7.74778 6.41027 7.77481 6.35169C7.77481 6.34719 7.77481 6.34719 7.77481 6.34268C7.77031 6.33818 7.77031 6.33818 7.77481 6.28861C7.77481 6.28411 7.77481 6.2841 7.7658 6.25707C7.7613 6.25707 7.75679 6.25256 7.75679 6.25256C7.75228 6.21201 7.75228 6.21201 7.75679 6.19849C7.77031 6.16245 7.77031 6.16245 7.77031 6.15794C7.77031 6.15343 7.7658 6.13541 7.75228 6.15343C7.74778 6.13541 7.74778 6.1309 7.74778 6.11739C7.74778 6.11288 7.75228 6.09936 7.75228 6.09035C7.74778 6.09035 7.74778 6.09486 7.74327 6.09486C7.73877 6.09486 7.73877 6.09035 7.73426 6.09035C7.72975 6.09035 7.72976 6.09035 7.72525 6.10387C7.71624 6.12189 7.71624 6.12189 7.71173 6.12189C7.70272 6.10387 7.71173 6.08134 7.70272 6.06332L7.69821 6.05881C7.69821 6.0543 7.69821 6.0543 7.69821 6.0498C7.69371 6.0498 7.67568 6.0543 7.67568 6.0543L7.67118 6.0498C7.66667 6.0498 7.64414 6.09035 7.63513 6.10838C7.63063 6.12189 7.63063 6.12189 7.62612 6.12189C7.62612 6.09035 7.64414 6.05881 7.63964 6.02727V6.02276C7.63513 6.01826 7.62612 6.01826 7.62161 6.01375C7.61711 6.00924 7.61711 6.00023 7.6126 5.99573C7.6081 6.00023 7.60359 6.00474 7.59908 6.00925C7.58106 6.02276 7.58106 6.02276 7.57655 6.01826C7.57655 6.01826 7.57205 6.01826 7.52699 6.04079C7.52699 6.04079 7.51798 6.04529 7.51347 6.0543C7.50446 6.06782 7.48193 6.11288 7.49094 6.13541C7.49995 6.13541 7.50446 6.1264 7.51347 6.1264L7.52248 6.13541C7.52248 6.13541 7.51798 6.15343 7.50897 6.15794C7.50446 6.16245 7.50446 6.18047 7.50446 6.18498C7.51347 6.18498 7.52248 6.18047 7.52699 6.17146C7.536 6.13992 7.536 6.13992 7.54501 6.1309C7.54952 6.13541 7.55403 6.1264 7.55853 6.1264C7.55853 6.13541 7.54952 6.13992 7.54952 6.14893C7.54501 6.15794 7.54952 6.17146 7.54952 6.18047C7.55853 6.17146 7.56304 6.17146 7.56754 6.17146C7.56754 6.18498 7.56754 6.203 7.56304 6.21201V6.203H7.55853C7.54501 6.21201 7.54501 6.21201 7.54501 6.21201C7.54501 6.21652 7.54501 6.21652 7.54501 6.21652C7.54952 6.21652 7.54952 6.21652 7.55402 6.21652C7.55402 6.22102 7.54952 6.24806 7.54051 6.24355L7.536 6.24806C7.52699 6.23905 7.536 6.22553 7.52699 6.21652C7.47742 6.26158 7.45039 6.29312 7.48193 6.33367C7.49094 6.33367 7.48644 6.34719 7.49094 6.35169C7.50897 6.36521 7.50897 6.36521 7.51798 6.35169Z"
                    fill="url(#paint19_linear_268_6864)"
                  />
                  <path
                    d="M7.63979 6.41032C7.63979 6.40581 7.63078 6.40131 7.62177 6.40131C7.61726 6.40581 7.60825 6.40581 7.60375 6.41032C7.59473 6.41482 7.58122 6.43285 7.58122 6.43285L7.5722 6.45538V6.45988C7.5722 6.45988 7.5722 6.48692 7.58122 6.48692C7.58572 6.48692 7.58572 6.48241 7.59023 6.48241C7.59473 6.48241 7.59473 6.48241 7.59924 6.48241C7.60375 6.48241 7.60375 6.48241 7.60375 6.48241C7.60825 6.48692 7.60825 6.48692 7.60825 6.48692C7.61276 6.48241 7.62177 6.48241 7.62628 6.48241C7.63529 6.47791 7.63979 6.4734 7.6443 6.46889L7.64881 6.46439V6.44186C7.64881 6.42834 7.6443 6.41482 7.63979 6.41032Z"
                    fill="url(#paint20_linear_268_6864)"
                  />
                  <path
                    d="M7.98232 8.66323C7.98683 8.66773 7.99133 8.66773 7.99584 8.65872C8.00485 8.6452 8.02287 8.58212 8.00485 8.57761C8.00485 8.57761 7.9688 8.5686 7.95529 8.57761C7.90572 8.61817 7.90572 8.61817 7.90122 8.61817C7.89671 8.61366 7.89671 8.61366 7.89671 8.61366C7.8877 8.61817 7.8877 8.6452 7.86967 8.63619C7.85165 8.62718 7.85616 8.60915 7.84714 8.59564L7.79307 8.58663C7.79307 8.58663 7.77956 8.59113 7.77054 8.59113C7.74802 8.60014 7.72999 8.69477 7.739 8.7218C7.74351 8.73532 7.7345 8.75785 7.7345 8.75785C7.72999 8.76686 7.72549 8.77137 7.72098 8.77587C7.71647 8.78488 7.71647 8.7939 7.71647 8.80291C7.71647 8.80741 7.71197 8.81192 7.71197 8.81192C7.71197 8.81192 7.69394 8.82544 7.68493 8.82093C7.67141 8.81643 7.6579 8.83896 7.6579 8.83896C7.64889 8.86148 7.6624 8.88401 7.6579 8.90654C7.67141 8.90654 7.71197 8.90204 7.72999 8.87951C7.739 8.8705 7.739 8.8705 7.739 8.8705C7.74351 8.88401 7.72549 8.90204 7.739 8.91105C7.75703 8.92457 7.77054 8.90204 7.78406 8.90204C7.84715 8.90204 7.84714 8.90204 7.86066 8.89303C7.86517 8.88852 7.86517 8.88852 7.86967 8.88852C7.88319 8.89753 7.89671 8.90654 7.90122 8.90654C7.90572 8.90654 7.91023 8.90204 7.91924 8.90204C7.92375 8.90204 7.92825 8.90654 7.93726 8.90654H7.94177C7.95078 8.90654 7.95078 8.90204 7.95529 8.89753C7.95529 8.89753 7.97331 8.87951 7.97331 8.86599C7.97782 8.84346 7.97782 8.83896 7.98232 8.83896C7.98232 8.83896 8.01837 8.7939 8.02738 8.7939C8.03189 8.78038 8.03189 8.78038 8.0409 8.78038L8.03189 8.73983C8.02288 8.73081 8.01386 8.73983 8.00485 8.73983C8.00485 8.73532 8.00035 8.7218 7.99584 8.7173L7.95529 8.70378C7.95078 8.68575 7.94627 8.66773 7.94177 8.64971V8.6452C7.94177 8.63168 7.95979 8.63168 7.9643 8.62267C7.9688 8.6407 7.97331 8.65421 7.98232 8.66323Z"
                    fill="url(#paint21_linear_268_6864)"
                  />
                  <path
                    d="M7.77508 7.40155C7.76607 7.40606 7.76607 7.40606 7.75706 7.41056C7.72552 7.42408 7.72552 7.48266 7.68046 7.46914C7.68046 7.46914 7.65793 7.50068 7.66244 7.5142C7.66694 7.5142 7.67595 7.5142 7.68046 7.5187C7.69848 7.56827 7.65793 7.56827 7.6354 7.53222C7.6309 7.52772 7.62639 7.5142 7.60837 7.5187C7.59935 7.54123 7.59935 7.54123 7.59935 7.54574C7.60386 7.55024 7.58584 7.57277 7.58584 7.57277C7.58133 7.57728 7.58133 7.57728 7.5588 7.56827C7.53627 7.5908 7.53627 7.5908 7.53627 7.59981C7.53177 7.64036 7.53177 7.64036 7.52275 7.64937L7.51825 7.64487C7.50473 7.64487 7.50022 7.64937 7.4822 7.71246V7.71696C7.48671 7.71696 7.48671 7.71246 7.49121 7.71246C7.50473 7.73048 7.49572 7.75301 7.50473 7.77103C7.56331 7.76653 7.56331 7.76653 7.56331 7.76653C7.56331 7.76653 7.59935 7.80258 7.5588 7.80708C7.54528 7.8251 7.56781 7.83862 7.56781 7.85665C7.56781 7.87016 7.54979 7.86566 7.54078 7.87467C7.53177 7.89269 7.51825 7.91072 7.51374 7.91072C7.50924 7.91522 7.50473 7.91522 7.50022 7.91522C7.50022 7.91522 7.49572 7.91072 7.49121 7.90171C7.4822 7.87918 7.45066 7.8251 7.44615 7.81609C7.44615 7.8206 7.44615 7.8206 7.43714 7.8251C7.43714 7.8251 7.36955 7.88368 7.38758 7.94676C7.38758 7.94676 7.4011 7.97831 7.4011 7.98281L7.4056 7.98732C7.41461 7.99633 7.42362 8.00534 7.43264 8.01435C7.44165 8.02336 7.43264 8.03688 7.44165 8.04589C7.46418 8.05941 7.47319 8.02336 7.49572 8.02787C7.49572 8.05491 7.49572 8.05491 7.50022 8.05491C7.50473 8.05491 7.50473 8.05491 7.50924 8.04589C7.54979 8.04589 7.54078 8.09546 7.56781 8.10898C7.57683 8.10447 7.57683 8.10447 7.58133 8.10447C7.59034 8.11348 7.59485 8.127 7.60386 8.13151C7.6354 8.15404 7.6354 8.16755 7.64441 8.2036C7.64892 8.23064 7.66244 8.23514 7.67145 8.23514C7.68497 8.23965 7.68947 8.21712 7.69848 8.21712C7.70299 8.22162 7.70299 8.22162 7.70299 8.22613C7.73453 8.15854 7.73453 8.15854 7.73453 8.14502C7.73003 8.12249 7.68947 8.08645 7.72101 8.07744H7.72552C7.74354 8.13601 7.74354 8.13601 7.75256 8.14052C7.75706 8.11348 7.77508 8.10447 7.77508 8.10447C7.7841 8.09996 7.80212 8.08645 7.80212 8.08645C7.80663 8.08194 7.80663 8.08194 7.81564 8.0504C7.82014 8.03238 7.84267 8.03238 7.84718 8.01435C7.84718 8.01435 7.8607 7.94226 7.84267 7.90621C7.82916 7.87016 7.85169 7.84313 7.85619 7.81159C7.8607 7.77103 7.84267 7.77103 7.83817 7.76653C7.83366 7.76653 7.82465 7.76202 7.82916 7.75301C7.83366 7.72598 7.85168 7.70345 7.84718 7.67641C7.84718 7.6719 7.84718 7.6719 7.83817 7.65839C7.80212 7.65388 7.7841 7.70795 7.79761 7.73048C7.80212 7.73048 7.80663 7.72597 7.81113 7.72597C7.82014 7.75301 7.82014 7.75752 7.79311 7.78005H7.7886C7.77058 7.71246 7.77058 7.71246 7.74805 7.69894C7.74354 7.70795 7.70299 7.76202 7.70299 7.76202L7.69848 7.75752C7.70299 7.75301 7.70299 7.75301 7.7075 7.73949C7.712 7.72597 7.71651 7.71246 7.72101 7.69894C7.72552 7.68993 7.72552 7.68092 7.73003 7.6719C7.73453 7.6674 7.73453 7.6674 7.75706 7.63135C7.77058 7.61333 7.76607 7.58179 7.77959 7.56376H7.7886C7.82014 7.50068 7.77959 7.47815 7.77058 7.47364C7.75256 7.48266 7.75256 7.48266 7.74354 7.47815C7.7841 7.43309 7.77959 7.41957 7.77508 7.40155Z"
                    fill="url(#paint22_linear_268_6864)"
                  />
                  <path
                    d="M7.60835 6.83839C7.61285 6.83839 7.63538 6.82487 7.64439 6.85642C7.6534 6.87894 7.6534 6.87895 7.6534 6.89697C7.6534 6.91049 7.6534 6.91499 7.66692 6.9195C7.66692 6.92851 7.66692 6.92851 7.66692 6.93752C7.66242 6.93752 7.65791 6.93752 7.63538 6.924C7.62637 6.9195 7.62637 6.91049 7.61736 6.90147V6.89246C7.59933 6.88796 7.59032 6.83839 7.59032 6.83839C7.59032 6.83389 7.59032 6.83389 7.58582 6.82938C7.58131 6.83389 7.58131 6.8429 7.5723 6.8429C7.56329 6.8429 7.55878 6.83389 7.54977 6.83389C7.54977 6.83389 7.48669 6.89697 7.54076 6.96005C7.54977 6.96005 7.54977 6.96005 7.55427 6.96005C7.55427 6.99159 7.55427 6.99159 7.56779 7.00511C7.5768 7.01412 7.58131 7.01863 7.5768 7.02313L7.54977 7.03215C7.54526 7.03215 7.54526 7.03215 7.54076 7.00962H7.53625C7.52273 7.01412 7.52273 7.00511 7.53174 6.96906C7.51823 6.98258 7.51372 6.98258 7.50922 6.97808H7.50471C7.50471 6.97357 7.50471 6.97357 7.5002 6.96906C7.5002 6.93752 7.49119 6.89697 7.49119 6.89697C7.48669 6.88796 7.47317 6.89697 7.46866 6.88796C7.46416 6.87895 7.47317 6.86993 7.46866 6.86092H7.46416H7.45965C7.45514 6.85191 7.45064 6.8429 7.44613 6.83389C7.44163 6.82487 7.39657 6.8429 7.38756 6.86092C7.38756 6.86543 7.38756 6.86993 7.38756 6.86993C7.38305 6.90147 7.38305 6.90147 7.39206 6.94203C7.40107 6.97808 7.36503 7.00511 7.36953 7.04116C7.37404 7.03665 7.37854 7.03215 7.38305 7.02764C7.39206 7.02764 7.41009 7.01412 7.4191 7.00511C7.42811 7.02764 7.41459 7.04566 7.41459 7.06369C7.4236 7.05017 7.4236 7.05017 7.42811 7.04566C7.42811 7.05468 7.42811 7.06369 7.43261 7.0727C7.43712 7.0727 7.44613 7.06819 7.45064 7.06819C7.45514 7.06369 7.45514 7.06369 7.45965 7.06369C7.46416 7.06819 7.46866 7.0727 7.46866 7.0772C7.46866 7.09973 7.45965 7.11776 7.45514 7.14029L7.45965 7.14479C7.46416 7.14479 7.48669 7.14029 7.4957 7.14029C7.50471 7.10875 7.50471 7.10875 7.52724 7.09072C7.53174 7.09523 7.53174 7.09973 7.54076 7.10424C7.54076 7.10424 7.5768 7.09523 7.5768 7.09072C7.59032 7.08171 7.59032 7.06369 7.59933 7.05468C7.60834 7.04566 7.62186 7.04116 7.63087 7.03215C7.63087 7.03215 7.63538 7.02764 7.63989 7.02764C7.63989 7.03215 7.63989 7.03215 7.61285 7.0772C7.59483 7.11776 7.59483 7.11776 7.60384 7.14479C7.60384 7.1493 7.60834 7.15381 7.59933 7.18985C7.59933 7.20337 7.59933 7.22139 7.59933 7.23491C7.63538 7.23491 7.6489 7.2259 7.6534 7.2259C7.68945 7.18985 7.68945 7.18985 7.71198 7.18985C7.74803 7.22139 7.79309 7.09973 7.79309 7.08171V7.08622C7.78858 7.08171 7.79309 7.0772 7.78858 7.0727C7.78408 7.08171 7.77957 7.08622 7.77506 7.0772C7.77506 7.0772 7.77957 7.02313 7.78408 7.01863C7.78858 7.02764 7.78858 7.02764 7.79759 7.01863C7.8021 7.02764 7.79759 7.04116 7.8066 7.05017C7.81111 7.05017 7.82463 7.04566 7.82012 7.01863C7.81562 6.98709 7.81562 6.98709 7.82463 6.96456V6.96005C7.82012 6.95555 7.81562 6.95104 7.81111 6.93302C7.8021 6.9195 7.8021 6.9195 7.81562 6.78432C7.81111 6.78432 7.81111 6.78432 7.81562 6.71673L7.81111 6.71223C7.79759 6.71673 7.79759 6.71223 7.79309 6.70322C7.77957 6.70322 7.77957 6.70321 7.77506 6.6897H7.77056C7.77056 6.6897 7.74352 6.70772 7.73451 6.73025C7.73 6.74377 7.71198 6.74827 7.71198 6.74827C7.70747 6.74377 7.70297 6.74827 7.69846 6.74377C7.69846 6.74377 7.69846 6.73926 7.69846 6.73025C7.70297 6.6897 7.70297 6.6897 7.70297 6.6897C7.69396 6.6897 7.69396 6.70321 7.68495 6.69871V6.6942C7.67593 6.70772 7.68495 6.73926 7.66692 6.73476C7.66242 6.73025 7.66242 6.72574 7.66242 6.72124C7.63538 6.72124 7.63989 6.74827 7.62637 6.76179H7.62186C7.62637 6.73476 7.62637 6.73476 7.62637 6.73476C7.62637 6.73476 7.5723 6.7708 7.58582 6.80685C7.61285 6.79784 7.61285 6.79784 7.60835 6.83839Z"
                    fill="url(#paint23_linear_268_6864)"
                  />
                  <path
                    d="M7.8877 6.97803C7.89221 6.96902 7.89671 6.96902 7.90122 6.96451L7.90572 6.96001L7.91023 6.93297C7.89671 6.91945 7.89221 6.91945 7.8877 6.92396C7.87869 6.92847 7.87418 6.94198 7.86968 6.94649C7.86517 6.95099 7.85616 6.9555 7.84715 6.96451L7.84264 6.96902V6.97352L7.83813 6.99155C7.83813 6.99155 7.84264 7.00507 7.84715 7.00507H7.85165C7.85616 7.00507 7.86066 7.00957 7.86517 7.00507C7.86517 7.00507 7.86517 7.00507 7.86968 6.99605C7.88319 6.98254 7.88319 6.98254 7.8877 6.97803Z"
                    fill="url(#paint24_linear_268_6864)"
                  />
                  <path
                    d="M8.02728 6.88787C8.02728 6.88787 8.01827 6.87886 8.01827 6.88787C8.01827 6.89237 8.01827 6.89237 8.00025 6.88787H7.99574L7.99124 6.88336C7.98673 6.88336 7.98223 6.89237 7.97772 6.89237C7.97321 6.89688 7.9642 6.89237 7.9597 6.89237C7.95519 6.89237 7.95519 6.89237 7.94618 6.91941C7.94167 6.92842 7.94167 6.93743 7.93717 6.94644C7.92365 6.97799 7.92365 6.97799 7.91464 6.987C7.91464 6.987 7.91013 6.987 7.91013 6.99601L7.8831 7.05909L7.87408 7.10415C7.87408 7.11316 7.89661 7.13119 7.89661 7.13119V7.12668H7.90112C7.91464 7.13119 7.92365 7.1402 7.93717 7.1447C7.9597 7.14921 7.98223 7.1447 8.00025 7.15822C8.00025 7.15822 8.00926 7.16273 8.01377 7.16273L8.0408 7.15372C8.04531 7.14921 8.04981 7.1402 8.05883 7.13569C8.06333 7.13119 8.06784 7.13569 8.07234 7.13569C8.08136 7.13119 8.08136 7.13119 8.09487 7.05459C8.09487 7.04557 8.09037 7.03206 8.09037 7.03206V7.03656C8.08136 7.00502 8.08136 6.96897 8.07234 6.93293C8.07234 6.92842 8.06333 6.92392 8.05883 6.91941C8.0408 6.9149 8.0363 6.90139 8.02728 6.88787Z"
                    fill="url(#paint25_linear_268_6864)"
                  />
                  <path
                    d="M7.91929 7.2394C7.9238 7.2394 7.9238 7.2394 7.9283 7.2349C7.93281 7.2349 7.93281 7.2349 7.93731 7.23039H7.94182C7.94182 7.23039 7.94182 7.23039 7.94633 7.22589C7.94633 7.21687 7.94633 7.20786 7.94633 7.19434V7.18533V7.18083C7.94182 7.17181 7.93731 7.17181 7.93281 7.17181C7.9283 7.17632 7.9238 7.18533 7.9238 7.18984V7.19434H7.91929C7.91929 7.19434 7.91929 7.19434 7.91929 7.19885C7.91929 7.20336 7.91929 7.21237 7.91478 7.21687C7.91478 7.22138 7.91028 7.22138 7.91028 7.22589C7.91028 7.22589 7.91028 7.23039 7.9238 7.23039C7.91929 7.22588 7.91929 7.23039 7.91929 7.2394Z"
                    fill="url(#paint26_linear_268_6864)"
                  />
                  <path
                    d="M8.00494 6.82935C8.00945 6.82935 8.00945 6.82935 8.01395 6.82935L8.01846 6.82484V6.82034C8.01846 6.81583 8.01395 6.81583 8.01395 6.81133C8.01395 6.80682 8.01395 6.80682 8.00945 6.80231C8.00494 6.7933 8.00043 6.77979 8.00043 6.77979C7.99593 6.77979 7.99142 6.78429 7.98692 6.78429C7.97791 6.7888 7.97791 6.82034 7.97791 6.82034L7.98692 6.83386H7.99142C7.99142 6.83386 7.99142 6.83386 7.99593 6.83386C8.00043 6.83836 8.00494 6.83386 8.00494 6.82935Z"
                    fill="url(#paint27_linear_268_6864)"
                  />
                  <path
                    d="M7.05408 7.07714C7.07661 7.08616 7.0676 7.10869 7.07661 7.1222C7.06309 7.15374 7.02254 7.16726 7.02254 7.20782C7.04056 7.21232 7.04056 7.21232 7.04507 7.22133C7.05408 7.22133 7.0676 7.22133 7.0721 7.23485C7.0721 7.23485 7.04957 7.30244 7.02704 7.27991C6.991 7.31145 6.991 7.31145 6.98649 7.30695C6.98649 7.29793 6.991 7.29343 6.991 7.28442C6.98649 7.28442 6.97748 7.28892 6.97297 7.28442C6.97297 7.28442 6.95044 7.30695 6.93692 7.31145C6.93692 7.28442 6.95044 7.25738 6.95495 7.23034C6.95495 7.22133 6.94594 7.21683 6.94143 7.21232C6.93692 7.21232 6.91439 7.20782 6.91439 7.16726C6.90989 7.16276 6.90088 7.16726 6.89637 7.16276C6.89187 7.14924 6.89637 7.13572 6.88736 7.1222C6.87835 7.12671 6.86483 7.1222 6.85582 7.13572C6.8423 7.14023 6.83329 7.14924 6.82428 7.15374C6.82428 7.1222 6.84681 7.09066 6.82878 7.05912C6.82878 7.05912 6.77922 7.09066 6.77021 7.09517C6.73867 7.12671 6.71614 7.17627 6.71614 7.17627C6.71614 7.18529 6.71614 7.18529 6.77021 7.18529C6.7657 7.18979 6.7657 7.18979 6.72064 7.1988C6.71614 7.1988 6.71614 7.1988 6.69811 7.1943C6.68459 7.1988 6.63052 7.2754 6.66657 7.29793C6.69811 7.28442 6.71163 7.2754 6.71614 7.26639C6.72515 7.25287 6.73416 7.25287 6.73866 7.26189C6.75218 7.28892 6.64404 7.31596 6.64404 7.31145C6.63052 7.32046 6.58997 7.37453 6.58997 7.40157C6.6125 7.41058 6.62602 7.41509 6.66657 7.37453C6.67558 7.36552 6.68009 7.36102 6.69361 7.36552C6.65305 7.40608 6.65305 7.40608 6.64855 7.41058C6.63052 7.43311 6.63052 7.43311 6.62151 7.43762C6.60799 7.4241 6.58997 7.43311 6.57645 7.4286C6.54041 7.50521 6.54041 7.5052 6.54041 7.53224H6.54491H6.54942L6.55392 7.53675C6.55392 7.54125 6.55392 7.54576 6.55392 7.55026C6.58096 7.55477 6.57645 7.51422 6.60349 7.51872C6.60349 7.56378 6.60349 7.56378 6.6125 7.56829C6.6125 7.56829 6.62602 7.55477 6.64404 7.53675C6.64404 7.54125 6.64855 7.54125 6.64404 7.55928L6.64855 7.56378C6.68009 7.55477 6.68459 7.55477 6.6891 7.55928C6.71163 7.53675 6.70712 7.5052 6.72064 7.47817C6.72965 7.48718 6.72965 7.48718 6.72965 7.48718C6.73867 7.46916 6.74317 7.44663 6.74768 7.4241H6.75218C6.7657 7.43762 6.7657 7.43762 6.73866 7.50521C6.72064 7.55026 6.75669 7.54576 6.75669 7.54576C6.7657 7.52773 6.75218 7.5007 6.77471 7.48718C6.80175 7.5007 6.81076 7.46015 6.82878 7.45113C6.83329 7.46015 6.8423 7.46916 6.84681 7.47817C6.84681 7.47817 6.84681 7.47817 6.87835 7.43762L6.88285 7.44212C6.92341 7.39706 6.92341 7.39706 6.92791 7.39256C6.92341 7.4286 6.86483 7.49619 6.8423 7.5007C6.77021 7.50971 6.66657 7.66742 6.66657 7.66742C6.68009 7.67192 6.68009 7.68995 6.69361 7.68544C6.70262 7.69445 6.70262 7.71248 6.71614 7.71698C6.72965 7.72149 6.74768 7.71248 6.75218 7.70797C6.81076 7.67643 6.81076 7.67643 6.90538 7.56829C6.9144 7.55928 6.92341 7.54125 6.92791 7.53224L6.93242 7.53675C6.93242 7.53675 6.93692 7.53224 6.94143 7.53224V7.53675C6.95495 7.52773 6.97297 7.52323 6.98649 7.50971C7.00001 7.49169 7.00451 7.46916 7.02254 7.45564C7.02254 7.46015 7.02254 7.46465 7.02254 7.46465C7.04056 7.4286 7.0676 7.44212 7.08562 7.45564C7.09463 7.44212 7.09914 7.4286 7.10815 7.41509C7.11265 7.40608 7.11265 7.40608 7.12167 7.44663C7.18024 7.41959 7.18024 7.41959 7.18925 7.41058C7.20277 7.39256 7.21629 7.37904 7.22981 7.36102C7.24333 7.34299 7.23882 7.31596 7.25234 7.29343C7.27036 7.26189 7.27036 7.22133 7.27937 7.18979V7.1943C7.28838 7.17177 7.29289 7.16726 7.3019 7.13122C7.30641 7.11319 7.31091 7.08616 7.2974 7.06813C7.27937 7.06363 7.27937 7.06363 7.27487 7.05912C7.26135 7.06813 7.24783 7.06813 7.23882 7.08165C7.2253 7.09967 7.2253 7.1222 7.21629 7.13572C7.21178 7.12671 7.20728 7.1222 7.20277 7.11319C7.18475 7.12671 7.17574 7.14924 7.15321 7.15825C7.16673 7.13572 7.17574 7.1222 7.18024 7.10418C7.17574 7.10418 7.17574 7.09517 7.17123 7.09517C7.1442 7.09066 7.1442 7.09066 7.1442 7.08616C7.13969 7.06813 7.15771 7.05912 7.15771 7.0456C7.15771 7.03209 7.15771 7.01857 7.15771 7.00505C7.15771 6.95999 7.18925 6.91944 7.17574 6.86987C7.17123 6.86987 7.1487 6.87438 7.1487 6.87438C7.12617 6.8879 7.02704 7.06363 7.04056 7.09517C7.04507 7.08616 7.04957 7.08165 7.05408 7.07714Z"
                    fill="url(#paint28_linear_268_6864)"
                  />
                  <path
                    d="M6.55388 7.39256C6.57191 7.37003 6.61246 7.27541 6.61246 7.27541C6.61697 7.25738 6.61246 7.24386 6.59894 7.23035C6.59894 7.23936 6.59894 7.23936 6.59894 7.23936C6.59444 7.24386 6.58993 7.24386 6.58993 7.24837C6.58092 7.26189 6.57191 7.27991 6.5629 7.29343C6.5629 7.29794 6.55839 7.29794 6.54938 7.31145C6.4908 7.38355 6.47728 7.4241 6.47278 7.4241C6.47278 7.42861 6.48179 7.46015 6.48179 7.46015C6.4863 7.45564 6.4863 7.45564 6.4908 7.45564C6.50883 7.46015 6.54037 7.41058 6.55388 7.39256Z"
                    fill="url(#paint29_linear_268_6864)"
                  />
                  <path
                    d="M6.37815 7.34303C6.38266 7.34754 6.38266 7.35655 6.38716 7.35655C6.39617 7.35204 6.39617 7.35204 6.40068 7.35204L6.40519 7.35655C6.40519 7.36106 6.40519 7.36556 6.40519 7.36556L6.40969 7.37007C6.4142 7.36556 6.4187 7.36106 6.42772 7.33853C6.43222 7.32501 6.43673 7.30699 6.44123 7.29347V7.29797C6.44574 7.29797 6.44574 7.29797 6.45024 7.29347C6.45475 7.32501 6.42321 7.35204 6.43673 7.38809C6.45024 7.38809 6.4908 7.35204 6.50882 7.31149H6.50432C6.50432 7.30248 6.50432 7.29797 6.51333 7.27094H6.51783C6.53135 7.29347 6.53135 7.29347 6.53135 7.29347C6.53135 7.28446 6.5674 7.22137 6.5719 7.22137C6.5719 7.22137 6.5719 7.22137 6.57641 7.22137C6.58542 7.21236 6.59443 7.19434 6.59443 7.1673L6.63949 7.08169C6.644 7.07268 6.644 7.07268 6.6485 7.06817C6.67554 7.12224 6.60795 7.15829 6.63048 7.21236C6.63949 7.23039 6.66653 7.19434 6.66653 7.19434C6.68455 7.17181 6.68906 7.14027 6.70258 7.11323C6.7251 7.10873 6.73862 7.10873 6.76566 7.05466C6.77016 7.04114 6.77016 7.02762 6.77016 7.0096C6.77016 6.99608 6.78819 6.98707 6.79269 6.96904C6.79269 6.96454 6.79269 6.96454 6.79269 6.91948C6.7972 6.91948 6.84226 6.86991 6.85578 6.84288C6.86479 6.82035 6.85578 6.78881 6.85127 6.7843C6.84226 6.7843 6.84226 6.7843 6.83775 6.7843C6.8017 6.79782 6.8017 6.79782 6.79269 6.79782C6.77918 6.82035 6.77016 6.84738 6.75665 6.86991C6.74763 6.86991 6.74763 6.8609 6.73862 6.8609C6.7206 6.8609 6.70258 6.87442 6.68455 6.87442L6.67103 6.87893C6.61246 6.933 6.58542 7.00509 6.53586 7.06817L6.54036 7.06367C6.44123 7.19884 6.43222 7.20335 6.42321 7.20335C6.39617 7.21236 6.38716 7.21236 6.34661 7.30248V7.30699H6.35111C6.35562 7.31149 6.35562 7.316 6.3376 7.35204C6.3376 7.35204 6.31957 7.38809 6.33309 7.40161C6.34661 7.37457 6.35562 7.35204 6.37815 7.34303Z"
                    fill="url(#paint30_linear_268_6864)"
                  />
                  <path
                    d="M6.42305 7.32495V7.32936L6.41864 7.33378V7.3426L6.42305 7.32495Z"
                    fill="url(#paint31_linear_268_6864)"
                  />
                  <path
                    d="M6.85145 7.02764L6.86497 7.02313C6.86948 7.01863 6.87398 7.01412 6.87849 7.00962C6.883 7.00962 6.883 7.01412 6.8875 7.00962C6.8875 7.00962 6.89201 7.00962 6.90553 6.97808C6.90553 6.96906 6.91003 6.96005 6.91003 6.95104C6.89651 6.94653 6.89201 6.94653 6.8875 6.94653L6.883 6.95104C6.87849 6.95104 6.87398 6.96005 6.86948 6.96005C6.86497 6.96005 6.86047 6.96005 6.85596 6.96005C6.85145 6.96005 6.85146 6.96456 6.84695 6.96906C6.84695 6.96906 6.82442 7.0006 6.83794 7.02313H6.84244C6.84695 7.02313 6.84695 7.01863 6.85145 7.01863C6.84695 7.02313 6.84695 7.02764 6.85145 7.02764Z"
                    fill="url(#paint32_linear_268_6864)"
                  />
                  <path
                    d="M6.91902 6.69414C6.94155 6.68513 6.94606 6.69414 6.95056 6.69865C6.95056 6.70315 6.95507 6.69414 6.95957 6.69414C6.96408 6.68963 6.96859 6.68062 6.97309 6.67612C6.9776 6.67161 6.9821 6.66711 6.9821 6.6626C6.9821 6.6626 6.98661 6.65809 6.98661 6.64908C6.99112 6.64007 6.99112 6.63556 6.99112 6.63556C6.98661 6.62205 6.98661 6.62205 6.98661 6.62205L6.9821 6.61754C6.9776 6.60853 6.9776 6.59952 6.9776 6.5905C6.9776 6.586 6.97309 6.586 6.97309 6.586C6.96859 6.586 6.96408 6.5905 6.95957 6.59501C6.94155 6.61303 6.94155 6.61303 6.93704 6.62655C6.93254 6.63556 6.93254 6.63556 6.93254 6.64007L6.92803 6.64458C6.92803 6.64908 6.92353 6.6626 6.91902 6.6671C6.91001 6.69865 6.91452 6.69414 6.91902 6.69414Z"
                    fill="url(#paint33_linear_268_6864)"
                  />
                  <path
                    d="M6.96849 6.76621C6.973 6.77071 6.973 6.77071 7.00004 6.76621C7.01355 6.7617 7.00454 6.78423 7.00905 6.78874L7.02707 6.77972L7.04059 6.76621C7.04509 6.7617 7.05411 6.7572 7.06312 6.75269H7.06762C7.08114 6.75269 7.08114 6.73467 7.09015 6.73016C7.09917 6.72565 7.11268 6.71664 7.12169 6.71214C7.12169 6.71214 7.13972 6.69862 7.14873 6.67609C7.15324 6.66257 7.15324 6.64905 7.15774 6.63554V6.61751C7.15324 6.61301 7.14422 6.6085 7.13972 6.60399C7.14873 6.58597 7.15324 6.57245 7.16225 6.57245C7.16675 6.57245 7.16675 6.55894 7.17577 6.56344C7.18027 6.56795 7.18478 6.56795 7.18928 6.56344C7.1983 6.55443 7.20731 6.53641 7.21181 6.52739V6.52289C7.19379 6.53641 7.17577 6.52289 7.15774 6.52739C7.14873 6.5319 7.14873 6.5319 7.12169 6.54992C7.11268 6.55894 7.10818 6.57245 7.09466 6.57696C7.08565 6.58146 7.09015 6.56344 7.08114 6.55894L7.05411 6.58597C7.04509 6.59498 7.03158 6.59949 7.02707 6.6085L7.00905 6.63554C7.00905 6.63554 7.00004 6.64905 6.96849 6.74818C6.96399 6.7617 6.96849 6.76621 6.96849 6.76621Z"
                    fill="url(#paint34_linear_268_6864)"
                  />
                  <path
                    d="M7.05394 6.5049C7.05844 6.50039 7.06295 6.5049 7.07196 6.50941C7.08097 6.50039 7.08548 6.49138 7.09449 6.48237C7.09449 6.48237 7.1035 6.47336 7.10801 6.47336L7.11252 6.47786H7.11702C7.12603 6.48688 7.12603 6.48688 7.12603 6.49138C7.12603 6.49589 7.12603 6.50039 7.13054 6.50039C7.14856 6.49138 7.14406 6.47336 7.15307 6.46435C7.15307 6.46435 7.15307 6.46435 7.16659 6.45534C7.16659 6.45984 7.16659 6.46435 7.16659 6.46435C7.16659 6.46435 7.17109 6.46885 7.1756 6.46885C7.18461 6.46885 7.18912 6.45984 7.19813 6.45984C7.20714 6.45984 7.21165 6.47336 7.22066 6.46435C7.24319 6.45083 7.2522 6.43731 7.26572 6.40126C7.27022 6.38775 7.27473 6.36522 7.27473 6.35621C7.27473 6.35621 7.27022 6.33818 7.26121 6.32917C7.2522 6.31115 7.2522 6.31115 7.2522 6.30664C7.24319 6.30664 7.23868 6.31115 7.22967 6.31565C7.21164 6.32466 7.17109 6.37874 7.17109 6.38324C7.14406 6.41929 7.12603 6.42379 7.12603 6.42379C7.12603 6.42379 7.12603 6.42379 7.12153 6.42379C7.11702 6.4283 7.11252 6.4283 7.10801 6.43281C7.10801 6.43281 7.09449 6.45083 7.08999 6.45083C7.08097 6.45534 7.04493 6.50039 7.04943 6.52292C7.04042 6.51842 7.04042 6.51842 7.05394 6.5049Z"
                    fill="url(#paint35_linear_268_6864)"
                  />
                  <path
                    d="M7.36938 6.60399C7.36938 6.6085 7.36938 6.64905 7.36938 6.65807C7.37389 6.67158 7.3784 6.69411 7.38741 6.70312L7.39191 6.70763C7.39191 6.71214 7.39191 6.71664 7.39642 6.72115C7.39642 6.72565 7.40093 6.72565 7.40093 6.72565C7.40543 6.72115 7.40994 6.71664 7.41444 6.71214C7.41895 6.70763 7.42346 6.70763 7.42796 6.70763C7.44599 6.69862 7.44599 6.69862 7.44599 6.69862C7.44599 6.69862 7.45049 6.67609 7.44599 6.66257C7.44599 6.65807 7.44148 6.65356 7.44148 6.64905C7.44148 6.64004 7.44148 6.63103 7.44148 6.62652V6.62202C7.43697 6.61301 7.43697 6.6085 7.43697 6.59949C7.43697 6.58146 7.43697 6.57696 7.43697 6.57245L7.42346 6.54091C7.41444 6.54091 7.41895 6.52289 7.40543 6.52289C7.3829 6.5319 7.36938 6.60399 7.36938 6.60399Z"
                    fill="url(#paint36_linear_268_6864)"
                  />
                  <path
                    d="M7.34236 7.32501C7.34687 7.32501 7.35137 7.32501 7.35137 7.32501C7.3694 7.3205 7.3739 7.3205 7.3739 7.3205C7.38292 7.316 7.39193 7.27094 7.39193 7.27094L7.39643 7.21687V7.21236C7.39643 7.21236 7.3739 7.19434 7.35588 7.19884C7.34687 7.20786 7.32885 7.2439 7.32434 7.26193C7.31082 7.31149 7.31983 7.3205 7.32434 7.32951C7.32885 7.33402 7.32885 7.33402 7.33335 7.32951C7.33786 7.32951 7.33786 7.32951 7.34236 7.32501Z"
                    fill="url(#paint37_linear_268_6864)"
                  />
                  <path
                    d="M9.34742 6.79332C9.3339 6.78882 9.27983 6.77981 9.26631 6.79783C9.26181 6.80234 9.26181 6.80234 9.24829 6.80234L9.21675 6.79332C9.16718 6.86091 9.16718 6.86091 9.15817 6.8519C9.14465 6.84289 9.13564 6.84289 9.12663 6.84289H9.12212C9.11311 6.8474 9.11762 6.86091 9.1041 6.86542C9.0996 6.86542 9.09058 6.86091 9.09058 6.86091C9.09058 6.86091 9.08157 6.85641 9.06355 6.86091L9.05904 6.86542C9.01849 6.88795 9.06805 6.97807 9.06805 6.97807H9.0996C9.1041 6.97807 9.10861 6.97807 9.11762 6.98257C9.12212 6.98708 9.12663 6.99609 9.12663 7.00961C9.13114 7.02763 9.14465 7.05016 9.15367 7.05467C9.15817 7.05467 9.16718 7.05467 9.17169 7.05917C9.1807 7.06368 9.1807 7.0772 9.18971 7.0817C9.19872 7.08621 9.20774 7.07269 9.21675 7.0772C9.22125 7.0772 9.22125 7.07269 9.23027 7.05917C9.23477 7.05467 9.24378 7.05016 9.24829 7.04566C9.26181 7.03664 9.26181 7.03664 9.28434 6.99158C9.29785 6.96905 9.29785 6.96905 9.30687 6.96455C9.31588 6.96004 9.32038 6.95554 9.3294 6.95103C9.3339 6.94653 9.3339 6.95103 9.3339 6.95103C9.34291 6.96004 9.35193 6.95103 9.35193 6.95103C9.35193 6.95103 9.35193 6.95103 9.34742 6.94652C9.34742 6.94202 9.34742 6.94202 9.37446 6.93751C9.43754 6.9285 9.45105 6.91498 9.45556 6.91048C9.41501 6.85641 9.39248 6.82937 9.39248 6.82937L9.34742 6.79332Z"
                    fill="url(#paint38_linear_268_6864)"
                  />
                  <path
                    d="M13.6328 10.9116C13.6283 10.8981 13.6193 10.8936 13.6193 10.8936H13.4345C13.3579 10.9071 13.2408 10.9747 13.2408 10.9747C13.2092 10.9973 13.1957 11.0108 13.1912 11.0288C13.1912 11.0288 13.2002 11.0333 13.2047 11.0378C13.2543 11.0558 13.3039 11.0243 13.3534 11.0243C13.3895 11.0243 13.4255 11.0288 13.4571 11.0288H13.4661C13.4706 11.0288 13.4976 11.0243 13.5156 11.0153C13.6013 10.9882 13.6643 10.9702 13.6328 10.9116Z"
                    fill="url(#paint39_linear_268_6864)"
                  />
                  <path
                    d="M14.723 10.1637C14.66 10.1366 14.6104 10.2313 14.5473 10.1772C14.5383 10.1817 14.5248 10.2763 14.5338 10.3079C14.5383 10.3304 14.5203 10.3484 14.5158 10.3529C14.4842 10.3124 14.4527 10.3034 14.4527 10.3034C14.4121 10.3034 14.4031 10.3529 14.3671 10.3529C14.3581 10.3439 14.3445 10.3124 14.3581 10.2808C14.3671 10.2628 14.3806 10.2268 14.3536 10.2177C14.322 10.2358 14.286 10.2403 14.2589 10.2673C14.2634 10.3169 14.2499 10.3619 14.2454 10.407L14.1868 10.2448C14.1733 10.1862 14.2229 10.1366 14.2139 10.0781C14.2049 10.0375 14.2004 10.033 14.1823 10.0285C14.1508 10.0285 14.1463 10.015 14.1463 10.006C14.2004 9.94738 14.2004 9.94738 14.1598 9.92035C14.1553 9.92035 14.1508 9.92035 14.1463 9.92486C14.1418 9.93387 14.1373 9.94288 14.1012 9.96991C14.0742 9.98794 14.0742 9.98794 14.0562 10.051C14.0472 10.0826 14.0697 10.1096 14.0787 10.1366C14.0832 10.1682 14.0607 10.1862 14.0607 10.2132C14.0517 10.3124 14.0607 10.3845 14.0697 10.416C14.0742 10.443 14.1012 10.4566 14.1102 10.4836L14.1012 10.5422C14.0967 10.5647 14.0922 10.5917 14.0922 10.6143C14.0922 10.6458 14.1192 10.6683 14.1238 10.6999C14.1283 10.7359 14.0967 10.763 14.1012 10.799C14.1778 10.7765 14.1778 10.7765 14.1553 10.8441C14.1463 10.8756 14.1238 10.9477 14.1688 10.9747C14.1733 10.9747 14.5248 10.7945 14.5879 10.6593C14.6059 10.6233 14.6194 10.6278 14.6194 10.6278C14.6464 10.6368 14.6329 10.6683 14.6554 10.6818C14.678 10.6954 14.705 10.6909 14.7275 10.7044C14.7005 10.799 14.7005 10.799 14.7005 10.8035C14.714 10.8035 14.7681 10.781 14.7861 10.7449C14.7951 10.7269 14.7906 10.7044 14.7906 10.6818C14.7951 10.6503 14.8177 10.6278 14.8267 10.6007V10.5917C14.8267 10.5827 14.8267 10.5782 14.8177 10.5692V10.5647C14.8267 10.5602 14.8267 10.5602 14.8898 10.5422L14.8943 10.5467L14.8988 10.5512L14.9033 10.5557C14.9258 10.5872 14.9258 10.5872 14.9619 10.6278L15.0024 10.5647C15.0249 10.5737 15.061 10.5917 15.0835 10.6007C15.1151 10.5737 15.1196 10.5332 15.1151 10.5151C15.0745 10.4881 15.1015 10.4385 15.079 10.4025C15.0745 10.398 15.0655 10.3845 15.043 10.3664C15.0294 10.3845 15.0114 10.407 14.9979 10.425C14.9664 10.3349 14.9664 10.3349 14.9393 10.3259C14.9078 10.3709 14.9123 10.3845 14.9168 10.4115C14.9213 10.425 14.9258 10.4385 14.9213 10.452C14.9213 10.4566 14.8492 10.5061 14.8537 10.4115C14.8582 10.3619 14.8582 10.3619 14.8762 10.3124C14.8988 10.2538 14.8898 10.2358 14.8853 10.2268H14.8807C14.8582 10.2538 14.8627 10.2943 14.8357 10.3259C14.8222 10.3439 14.7951 10.3394 14.7771 10.3484C14.7771 10.3349 14.7816 10.3214 14.7816 10.3079C14.7726 10.3169 14.7726 10.3169 14.7366 10.2943C14.6735 10.2628 14.7771 10.1862 14.723 10.1637Z"
                    fill="url(#paint40_linear_268_6864)"
                  />
                  <path
                    d="M9.6764 9.42027C9.69442 9.42929 9.77102 9.40676 9.78904 9.39324C9.80707 9.37972 9.82058 9.31213 9.82058 9.31213C9.82058 9.29861 9.7575 9.23553 9.753 9.23103C9.74849 9.23103 9.73948 9.23553 9.73497 9.24004C9.72146 9.25356 9.6764 9.2896 9.65387 9.2851C9.5998 9.27158 9.60881 9.19047 9.54572 9.18597C9.5232 9.18597 9.51418 9.20399 9.49616 9.2085C9.49165 9.2085 9.48264 9.213 9.41505 9.17245C9.40154 9.16344 9.39252 9.15893 9.35197 9.14992H9.34296C9.31592 9.14541 9.32043 9.18597 9.30241 9.19498C9.26185 9.21751 9.26636 9.12289 9.22581 9.1364C9.21229 9.17696 9.20778 9.17696 9.18075 9.15893L9.17624 9.16344C9.14019 9.06881 9.13569 9.0553 9.09964 9.06431C9.07711 9.07783 9.00051 9.1319 9.05909 9.22652C9.09063 9.27158 9.09063 9.27609 9.09513 9.30312C9.09964 9.35269 9.08162 9.39774 9.08612 9.44731C9.08612 9.46083 9.10865 9.48786 9.12668 9.49687C9.1447 9.50589 9.13569 9.55545 9.13569 9.55545C9.13118 9.57798 9.12217 9.5915 9.10865 9.60051L9.05458 9.67711C9.05458 9.67711 9.08162 9.72668 9.15371 9.66359C9.16723 9.65008 9.17624 9.64106 9.18976 9.62304C9.20328 9.60502 9.21679 9.5915 9.22581 9.5915C9.27537 9.60502 9.22581 9.6681 9.25735 9.69513C9.25735 9.69513 9.33395 9.71316 9.34296 9.70865C9.36549 9.69513 9.42857 9.49688 9.42407 9.41126C9.42407 9.40225 9.42407 9.39324 9.43308 9.38873C9.44209 9.38423 9.4466 9.37972 9.46011 9.38423C9.49165 9.38873 9.50968 9.42027 9.54572 9.42027C9.6043 9.41577 9.64035 9.40225 9.6764 9.42027Z"
                    fill="url(#paint41_linear_268_6864)"
                  />
                  <path
                    d="M5.65718 14.3001C5.64817 14.2911 5.63916 14.2911 5.63015 14.2956C5.61213 14.3001 5.61213 14.3001 5.58058 14.2866C5.54904 14.2685 5.54904 14.2685 5.53102 14.264C5.52201 14.2595 5.5175 14.2685 5.50849 14.264C5.49948 14.2595 5.49047 14.2505 5.47244 14.2325C5.46794 14.228 5.45442 14.2145 5.44541 14.21C5.4409 14.21 5.4409 14.21 5.43189 14.21C5.42288 14.21 5.40035 14.2145 5.38232 14.237V14.2415C5.43189 14.2595 5.43189 14.264 5.42738 14.3271H5.43189C5.43639 14.3496 5.43639 14.3496 5.4409 14.3496C5.44541 14.3587 5.45892 14.3587 5.46794 14.3632C5.47695 14.3722 5.47695 14.3857 5.48596 14.3947L5.49047 14.3992C5.513 14.3857 5.54904 14.4217 5.55355 14.3947C5.5896 14.4353 5.5896 14.4398 5.5941 14.4713C5.59861 14.5119 5.60311 14.5164 5.60762 14.5209C5.62564 14.5389 5.65268 14.5164 5.6707 14.5254C5.67971 14.5299 5.67971 14.5299 5.69323 14.5659C5.70224 14.584 5.71125 14.5975 5.71576 14.5975C5.73378 14.6065 5.75631 14.5975 5.77884 14.602C5.78335 14.647 5.78335 14.647 5.79687 14.656C5.8194 14.6696 5.83291 14.638 5.85544 14.6515C5.88698 14.6696 5.9005 14.7101 5.94106 14.7146L5.95908 14.6651C5.96359 14.6515 5.96359 14.6515 5.90951 14.5885C5.90501 14.584 5.9005 14.5794 5.896 14.5749C5.88248 14.5614 5.87347 14.5569 5.86446 14.5569C5.85544 14.5569 5.75631 14.4803 5.75631 14.4803C5.71576 14.4217 5.71125 14.3496 5.65718 14.3001Z"
                    fill="url(#paint42_linear_268_6864)"
                  />
                  <path
                    d="M5.1209 13.9667C5.12541 13.9532 5.12541 13.9442 5.12541 13.9352C5.12541 13.9262 5.1209 13.9172 5.1209 13.9172C5.1164 13.9126 5.1164 13.9081 5.10739 13.9036C5.09387 13.8991 5.09387 13.8991 5.07134 13.8496C5.05782 13.8225 5.07584 13.7865 5.0443 13.7685C5.0443 13.7685 5.0443 13.7685 5.0398 13.773C5.03529 13.773 5.03529 13.7685 5.03529 13.7369C5.03529 13.7324 5.03529 13.7324 5.00826 13.5882C5.00826 13.5792 5.00826 13.5792 5.01727 13.5522C5.03079 13.5116 5.03529 13.4891 5.02628 13.4801C5.01727 13.4801 5.00826 13.4846 4.99924 13.4801C4.98573 13.4756 4.98122 13.4621 4.9677 13.4621C4.95869 13.4621 4.95869 13.4711 4.94968 13.4666C4.94067 13.4621 4.93616 13.453 4.93166 13.444C4.92264 13.4575 4.93166 13.6198 4.9677 13.6198C4.97221 13.6288 4.97221 13.6288 4.97221 13.6648C4.97221 13.6738 4.99023 13.6919 4.99924 13.6828H5.00375C5.00826 13.7054 5.00826 13.7324 5.01727 13.7549L5.02177 13.7594C5.02628 13.7639 5.02628 13.7685 5.02628 13.7775C5.02628 13.782 5.05782 13.836 5.05782 13.836C5.07584 13.8541 5.07584 13.8766 5.08936 13.8946C5.09387 13.9352 5.10288 13.9532 5.1209 13.9667Z"
                    fill="url(#paint43_linear_268_6864)"
                  />
                  <path
                    d="M4.99039 13.3269C4.99039 13.3224 4.99039 13.3134 4.98138 13.2818C4.94083 13.1376 4.94083 13.1376 4.93181 13.1151C4.92731 13.1061 4.92731 13.1061 4.92731 13.0836C4.9228 13.0385 4.9183 13.0385 4.90928 13.0295C4.90027 13.025 4.89577 13.0205 4.89577 13.0115C4.89126 12.9979 4.89126 12.9844 4.88676 12.9754C4.88676 12.9709 4.85972 12.9394 4.85071 12.9304C4.85071 12.9304 4.85071 12.9349 4.85521 12.9484C4.87324 12.9889 4.87324 12.9979 4.87774 13.0385C4.87774 13.0565 4.87774 13.061 4.87774 13.0745C4.87324 13.0881 4.87774 13.1061 4.87324 13.1196C4.86873 13.1286 4.86423 13.1376 4.85972 13.1466C4.85972 13.1511 4.85972 13.1511 4.85972 13.1557C4.85972 13.1647 4.86423 13.1737 4.86873 13.1827C4.87774 13.2052 4.90027 13.2232 4.91379 13.2413C4.92731 13.2593 4.9183 13.2863 4.93632 13.3089C4.94533 13.3314 4.98588 13.3674 4.99039 13.3269Z"
                    fill="url(#paint44_linear_268_6864)"
                  />
                  <path
                    d="M4.66591 12.4797C4.6569 12.4842 4.65239 12.4977 4.65239 12.5293C4.65239 12.5383 4.65239 12.5518 4.65239 12.5608C4.65239 12.5653 4.64789 12.5698 4.64789 12.5743C4.64789 12.5788 4.64789 12.5788 4.6569 12.5969C4.67042 12.6284 4.67492 12.6419 4.67492 12.6509C4.68394 12.7005 4.68394 12.7095 4.68394 12.732C4.68394 12.7366 4.68394 12.7411 4.68394 12.7456C4.68394 12.7501 4.68844 12.7546 4.69295 12.7591C4.69295 12.7411 4.68844 12.723 4.68844 12.7005C4.68844 12.6915 4.69295 12.687 4.69295 12.678C4.69295 12.6554 4.70646 12.6329 4.70646 12.6104C4.70646 12.6104 4.71097 12.5608 4.68844 12.5473C4.67943 12.5428 4.69745 12.5113 4.70646 12.4932C4.70646 12.4932 4.70196 12.4887 4.67492 12.4707C4.67492 12.4797 4.67492 12.4797 4.66591 12.4797Z"
                    fill="url(#paint45_linear_268_6864)"
                  />
                  <path
                    d="M4.81002 12.6555C4.81002 12.651 4.81002 12.642 4.81453 12.6375C4.81453 12.6194 4.80101 12.6059 4.7965 12.5924C4.792 12.5744 4.792 12.5564 4.792 12.5383L4.76046 12.5158L4.74243 12.6104C4.74243 12.6104 4.75595 12.642 4.76947 12.6194C4.77397 12.6239 4.77397 12.651 4.77397 12.6555C4.77397 12.6735 4.76496 12.687 4.76046 12.7051C4.76046 12.7141 4.76947 12.7231 4.76496 12.7321V12.7366C4.76947 12.7456 4.78749 12.7681 4.78749 12.7681C4.78749 12.7681 4.792 12.7636 4.792 12.7456C4.7965 12.7321 4.792 12.7186 4.7965 12.7006C4.80551 12.687 4.81002 12.6735 4.81002 12.6555Z"
                    fill="url(#paint46_linear_268_6864)"
                  />
                  <path
                    d="M4.73353 12.8943C4.74254 12.9123 4.74254 12.9123 4.74254 12.9168C4.74254 12.9258 4.73803 12.9303 4.74254 12.9393C4.74254 12.9438 4.74254 12.9438 4.74254 12.9483C4.74254 12.9483 4.75606 12.9889 4.76056 12.9934C4.76507 12.9889 4.76958 12.9574 4.76958 12.9438L4.76507 12.8267C4.76056 12.7996 4.76507 12.7681 4.75606 12.7366C4.74254 12.687 4.74254 12.687 4.72902 12.6825C4.7155 12.6825 4.7155 12.6825 4.711 12.7366C4.711 12.7501 4.7155 12.7636 4.72001 12.7726C4.72001 12.7861 4.72001 12.8042 4.72001 12.8177C4.72452 12.8717 4.72902 12.8898 4.73353 12.8943Z"
                    fill="url(#paint47_linear_268_6864)"
                  />
                  <path
                    d="M4.85523 12.9078C4.86424 12.9168 4.86424 12.9123 4.86875 12.9078C4.87325 12.8988 4.87325 12.8943 4.87325 12.8943C4.87325 12.8897 4.86875 12.8852 4.86875 12.8807C4.86875 12.8672 4.87776 12.8627 4.87776 12.8492V12.8447C4.87776 12.8402 4.87325 12.8357 4.86875 12.8312C4.86424 12.8222 4.86424 12.8131 4.85974 12.8041C4.85974 12.8041 4.85974 12.7996 4.85523 12.7951C4.84622 12.7816 4.84171 12.7816 4.83721 12.7771C4.82819 12.7771 4.81017 12.8222 4.81468 12.8537C4.81468 12.8627 4.81468 12.8672 4.82369 12.8762L4.82819 12.8807H4.8327C4.83721 12.8807 4.83721 12.8852 4.84171 12.8897C4.85072 12.8988 4.85523 12.9033 4.85523 12.9078Z"
                    fill="url(#paint48_linear_268_6864)"
                  />
                  <path
                    d="M4.79648 12.7906C4.78296 12.7952 4.78746 12.8808 4.78746 12.8898C4.78746 12.9123 4.80098 12.9348 4.80549 12.9529C4.8145 12.9889 4.80549 13.025 4.80999 13.0565V13.061L4.8145 13.0655C4.81901 13.061 4.82351 12.9348 4.82351 12.9348C4.82351 12.9393 4.81901 12.8087 4.79648 12.7906Z"
                    fill="url(#paint49_linear_268_6864)"
                  />
                  <path
                    d="M5.18848 13.7008C5.19298 13.7008 5.19298 13.6963 5.19298 13.6828C5.18848 13.6377 5.18848 13.6377 5.17496 13.6287C5.14792 13.6062 5.11188 13.5341 5.11188 13.5341C5.1254 13.6062 5.1254 13.6062 5.1299 13.6197C5.15243 13.6602 5.17947 13.7008 5.18848 13.7008Z"
                    fill="url(#paint50_linear_268_6864)"
                  />
                  <path
                    d="M3.54392 12.66C3.54392 12.6554 3.54392 12.6554 3.53941 12.6509C3.5304 12.66 3.52139 12.7636 3.53491 12.7771C3.53491 12.7771 3.53941 12.7636 3.53941 12.7591V12.7546C3.54392 12.7636 3.54392 12.7681 3.54843 12.7771C3.54843 12.7771 3.55293 12.7681 3.55293 12.7411C3.55293 12.7411 3.55293 12.687 3.54843 12.669C3.54843 12.6645 3.54843 12.66 3.54392 12.66Z"
                    fill="url(#paint51_linear_268_6864)"
                  />
                  <path
                    d="M3.78725 12.349C3.76472 12.3761 3.76021 12.5022 3.79176 12.5563C3.79626 12.5653 3.8233 12.5518 3.83231 12.4842C3.83681 12.4707 3.84583 12.4572 3.85033 12.4391C3.85033 12.4346 3.85484 12.4211 3.85484 12.4031C3.85484 12.3625 3.85033 12.322 3.85484 12.2814C3.85484 12.2679 3.86836 12.2634 3.87286 12.2499C3.87286 12.2499 3.87737 12.2229 3.87286 12.2183C3.85934 12.2138 3.85934 12.2138 3.84132 12.2679C3.83681 12.2769 3.83681 12.2769 3.83681 12.2769C3.83231 12.2724 3.83231 12.2634 3.8278 12.2544C3.8233 12.2589 3.8233 12.2589 3.81879 12.2814C3.81879 12.2904 3.81429 12.2949 3.80978 12.304C3.80978 12.313 3.80978 12.313 3.81429 12.3715C3.81879 12.4436 3.81879 12.4436 3.81429 12.4436C3.81429 12.4436 3.80978 12.4346 3.80527 12.3896C3.80077 12.3761 3.79626 12.349 3.78725 12.349Z"
                    fill="url(#paint52_linear_268_6864)"
                  />
                  <path
                    d="M3.60268 11.4298C3.60268 11.4208 3.6207 11.2811 3.6162 11.2586C3.6162 11.2586 3.6162 11.2586 3.61169 11.2631C3.60718 11.2766 3.60268 11.2856 3.59817 11.2992C3.59817 11.3037 3.59367 11.3037 3.59367 11.3037C3.59367 11.3037 3.58916 11.3037 3.58916 11.3172C3.58916 11.3217 3.58465 11.3622 3.58916 11.3848L3.59817 11.4433C3.59817 11.4388 3.59817 11.4388 3.60268 11.4298Z"
                    fill="url(#paint53_linear_268_6864)"
                  />
                  <path
                    d="M13.5967 11.5515C13.5922 11.547 13.5922 11.547 13.5877 11.5425C13.5832 11.538 13.5742 11.538 13.5697 11.538C13.5607 11.5425 13.5472 11.5785 13.5517 11.5965C13.5517 11.601 13.5562 11.6056 13.5607 11.6101C13.5607 11.6101 13.5832 11.6326 13.5922 11.6326C13.6103 11.6416 13.6283 11.6371 13.6508 11.6371C13.6553 11.6371 13.6643 11.6371 13.6688 11.6371H13.6778C13.6869 11.6371 13.6914 11.6371 13.6914 11.6281C13.6914 11.6236 13.6869 11.6146 13.6778 11.6101C13.6778 11.6101 13.6418 11.583 13.6238 11.5785C13.6193 11.574 13.6148 11.574 13.6103 11.574C13.6057 11.565 13.6012 11.556 13.5967 11.5515Z"
                    fill="url(#paint54_linear_268_6864)"
                  />
                  <path
                    d="M13.8805 11.4614H13.8715C13.8715 11.4614 13.8624 11.4659 13.8534 11.4794C13.8444 11.4884 13.8354 11.5019 13.7949 11.5244C13.7768 11.5335 13.7588 11.547 13.7408 11.556C13.7138 11.5695 13.6957 11.5785 13.6912 11.5875C13.6867 11.592 13.6822 11.6101 13.7002 11.6281C13.7183 11.6461 13.7453 11.6416 13.7543 11.6416C13.7588 11.6416 13.7588 11.6416 13.7633 11.6416C13.7678 11.6416 13.7768 11.6371 13.7858 11.6326C13.7904 11.6281 13.7949 11.6236 13.7994 11.6191C13.8039 11.6146 13.8219 11.6056 13.8399 11.6101C13.8444 11.6101 13.8579 11.6146 13.8715 11.6101C13.885 11.601 13.894 11.574 13.894 11.574C13.8985 11.5605 13.894 11.547 13.894 11.529C13.894 11.5199 13.8985 11.5064 13.8985 11.4974C13.8985 11.4884 13.8895 11.4884 13.885 11.4839C13.885 11.4704 13.885 11.4659 13.8805 11.4614Z"
                    fill="url(#paint55_linear_268_6864)"
                  />
                  <path
                    d="M14.1282 11.2406C14.1147 11.2361 14.1012 11.2406 14.0876 11.2361C14.0561 11.2271 14.0561 11.2271 14.0561 11.2271C14.0471 11.2406 14.0516 11.2586 14.0471 11.2721C14.0471 11.2811 14.0426 11.2856 14.0381 11.2946V11.3037C14.0381 11.3127 14.0336 11.3352 14.0336 11.3757C14.0291 11.4433 14.0291 11.4569 14.0471 11.4659C14.0651 11.4749 14.1057 11.4523 14.1057 11.4523C14.1102 11.4478 14.1327 11.4208 14.1417 11.4028C14.1597 11.3577 14.1507 11.2676 14.1417 11.2496C14.1372 11.2451 14.1372 11.2406 14.1282 11.2406Z"
                    fill="url(#paint56_linear_268_6864)"
                  />
                  <path
                    d="M14.2364 11.4434L14.2724 11.3578C14.2724 11.3533 14.277 11.3488 14.277 11.3488C14.277 11.3443 14.277 11.3398 14.277 11.3353C14.2724 11.3262 14.2274 11.2947 14.2274 11.2947C14.2184 11.2902 14.2139 11.2902 14.2094 11.2947C14.1958 11.3082 14.1913 11.3217 14.1778 11.3398C14.1733 11.3443 14.1688 11.3488 14.1688 11.3533C14.1643 11.3623 14.1643 11.3668 14.1643 11.3713C14.1643 11.3758 14.1643 11.3803 14.1643 11.3893C14.1688 11.4028 14.1733 11.4119 14.1778 11.4254C14.1778 11.4344 14.1778 11.4389 14.1778 11.4479V11.4524C14.1823 11.4569 14.1958 11.4704 14.1958 11.4704C14.2139 11.4749 14.2274 11.4569 14.2364 11.4434Z"
                    fill="url(#paint57_linear_268_6864)"
                  />
                  <path
                    d="M9.81168 8.22612C9.81168 8.23063 9.81619 8.23513 9.81619 8.23964C9.81619 8.24414 9.82069 8.24865 9.82069 8.25316C9.82971 8.26217 9.93785 8.23513 9.95587 8.2081C9.96939 8.19007 10.0054 8.12699 9.9784 8.02786C9.96038 7.96478 9.92433 7.95577 9.92433 7.95126C9.91532 7.94675 9.88378 7.95577 9.84322 7.9783C9.81168 7.99632 9.78915 8.03687 9.78915 8.03687C9.78465 8.04589 9.77563 8.12699 9.77563 8.12699C9.77563 8.16304 9.80267 8.19007 9.81168 8.22612Z"
                    fill="url(#paint58_linear_268_6864)"
                  />
                  <path
                    d="M9.49636 8.01888C9.51438 8.0369 9.53691 7.99185 9.54592 7.96932C9.55043 7.96481 9.55493 7.95129 9.55944 7.92876L9.57296 7.86117C9.57296 7.85667 9.57296 7.85216 9.56845 7.84766H9.53691H9.5324C9.51889 7.85667 9.49185 7.9603 9.49185 7.9603C9.48735 7.98734 9.48735 8.00536 9.49636 8.01888Z"
                    fill="url(#paint59_linear_268_6864)"
                  />
                  <path
                    d="M9.5232 7.73505C9.50067 7.74856 9.49616 7.81615 9.50968 7.83418C9.51869 7.84319 9.5277 7.83868 9.53671 7.82066L9.55474 7.78912C9.55474 7.78912 9.55924 7.78461 9.55924 7.78011C9.56375 7.76659 9.56375 7.74856 9.56375 7.74406C9.56375 7.73955 9.56375 7.73505 9.55474 7.73505H9.5232Z"
                    fill="url(#paint60_linear_268_6864)"
                  />
                  <path
                    d="M9.68542 7.82959C9.72147 7.80706 9.71696 7.79354 9.71696 7.78903C9.71246 7.77101 9.68092 7.74848 9.64938 7.762C9.62685 7.77551 9.63135 7.82508 9.64487 7.8386C9.65388 7.8386 9.6674 7.8431 9.68542 7.82959Z"
                    fill="url(#paint61_linear_268_6864)"
                  />
                  <path
                    d="M9.92437 7.84767C9.91987 7.82965 9.91536 7.82965 9.91086 7.82965C9.90184 7.83866 9.89734 7.85218 9.89734 7.85669C9.89734 7.86119 9.91536 7.88372 9.91987 7.88823C9.92888 7.89273 9.93339 7.87471 9.92437 7.84767Z"
                    fill="url(#paint62_linear_268_6864)"
                  />
                  <path
                    d="M10.0999 7.99188C10.1135 7.98287 10.127 7.97386 10.1405 7.96935C10.1495 7.96485 10.154 7.96935 10.163 7.96485C10.1675 7.96034 10.163 7.9288 10.1585 7.9288C10.154 7.91528 10.1495 7.91528 10.136 7.91528C10.109 7.91528 10.0819 7.9288 10.0549 7.9288C10.0459 7.9288 10.0369 7.9288 10.0279 7.9288H10.0233C10.0188 7.93331 10.0098 7.96034 10.0098 7.96485C10.0098 7.96485 10.0414 7.99639 10.0459 8.0054L10.0504 8.00991C10.0594 8.00991 10.0684 8.00991 10.0999 7.99188Z"
                    fill="url(#paint63_linear_268_6864)"
                  />
                  <path
                    d="M9.38814 7.7981C9.38364 7.7981 9.37913 7.7981 9.37463 7.7981C9.3566 7.80711 9.36561 7.83414 9.34759 7.84766C9.33858 7.85217 9.32957 7.84315 9.32506 7.85217C9.32056 7.85667 9.32506 7.86118 9.32506 7.86568C9.32957 7.8747 9.36111 7.89723 9.36111 7.89723C9.37012 7.90173 9.37463 7.90173 9.37913 7.89723C9.38364 7.89723 9.38364 7.89272 9.40166 7.87019L9.43771 7.80711C9.43771 7.8026 9.43771 7.7981 9.4287 7.7981H9.38814Z"
                    fill="url(#paint64_linear_268_6864)"
                  />
                  <path
                    d="M8.82489 8.59559C8.82489 8.60911 8.8294 8.61812 8.8294 8.62263C8.8339 8.63164 8.85193 8.65868 8.85193 8.65868C8.86094 8.66318 8.87896 8.64516 8.88347 8.64065C8.88347 8.64065 8.89698 8.60461 8.89248 8.57757C8.88797 8.56405 8.86995 8.50998 8.85193 8.51449C8.83841 8.51899 8.82489 8.57306 8.82489 8.59559Z"
                    fill="url(#paint65_linear_268_6864)"
                  />
                  <path
                    d="M8.7572 8.05946C8.74368 8.05495 8.72566 8.06396 8.71664 8.06847C8.70313 8.07748 8.69411 8.08649 8.69862 8.0955C8.69862 8.0955 8.71214 8.10451 8.72115 8.10451H8.72566C8.73467 8.10451 8.74368 8.10001 8.75269 8.10001C8.7617 8.10001 8.77072 8.0955 8.77973 8.0955H8.78423C8.78423 8.0955 8.78874 8.0955 8.78874 8.091C8.78423 8.08198 8.77072 8.06396 8.7572 8.05946Z"
                    fill="url(#paint66_linear_268_6864)"
                  />
                  <path
                    d="M9.67666 9.56896C9.66765 9.57347 9.59556 9.64105 9.59556 9.64105C9.59105 9.64556 9.58655 9.65908 9.58204 9.66358C9.57303 9.67259 9.56402 9.67259 9.55951 9.68161C9.5505 9.69512 9.53247 9.77172 9.53247 9.77172C9.52797 9.78975 9.54149 9.80777 9.54149 9.80777C9.5505 9.82579 9.62259 9.83481 9.63611 9.82129C9.63611 9.82129 9.66765 9.77623 9.68117 9.74469C9.69018 9.71765 9.69018 9.68611 9.7037 9.65908C9.71271 9.64105 9.72623 9.63204 9.73524 9.61402C9.73524 9.60951 9.73524 9.6005 9.73524 9.59599C9.72623 9.58248 9.7082 9.57797 9.69469 9.56445C9.68567 9.56896 9.68117 9.56896 9.67666 9.56896Z"
                    fill="url(#paint67_linear_268_6864)"
                  />
                  <path
                    d="M10.055 9.77167C10.0595 9.77617 10.0685 9.78068 10.0685 9.72661L10.055 9.57791C10.0505 9.53736 10.0099 9.55538 10.0099 9.55538C9.98737 9.5689 9.95132 9.61847 9.95583 9.6455C9.96034 9.67254 9.98737 9.7176 9.99188 9.7221C10.0054 9.73562 10.0234 9.74463 10.0369 9.75815C10.0414 9.76265 10.0459 9.76716 10.055 9.77167Z"
                    fill="url(#paint68_linear_268_6864)"
                  />
                  <path
                    d="M10.0911 9.19493C10.0551 9.21296 10.028 9.27604 10.0551 9.28505H10.0641C10.0731 9.28505 10.0866 9.28055 10.0956 9.27604C10.1046 9.27604 10.1136 9.27604 10.1226 9.27153C10.1271 9.27153 10.1362 9.26703 10.1407 9.26703C10.1452 9.26703 10.1497 9.27153 10.1542 9.27153C10.1587 9.26703 10.1452 9.21296 10.1452 9.21296C10.1407 9.19944 10.1362 9.19944 10.1317 9.19493C10.1226 9.19493 10.1046 9.19043 10.0911 9.19493Z"
                    fill="url(#paint69_linear_268_6864)"
                  />
                  <path
                    d="M10.172 9.09579C10.172 9.09579 10.127 9.13635 10.154 9.15888C10.1675 9.17239 10.1946 9.17239 10.2081 9.17239C10.2126 9.17239 10.2171 9.16789 10.2216 9.16338L10.2396 9.14085C10.2441 9.13635 10.2441 9.13635 10.2441 9.13184C10.2441 9.12734 10.2441 9.12283 10.2036 9.1003C10.1856 9.09129 10.1811 9.09129 10.172 9.09579Z"
                    fill="url(#paint70_linear_268_6864)"
                  />
                  <path
                    d="M11.6906 6.05432C11.6861 6.05432 11.6815 6.06333 11.677 6.06333C11.6635 6.06784 11.65 6.06333 11.6365 6.07234C11.632 6.07685 11.6365 6.07685 11.632 6.08136C11.632 6.08136 11.6275 6.08136 11.623 6.08136L11.6185 6.08586C11.614 6.09037 11.614 6.09037 11.6095 6.09487C11.6049 6.09938 11.5869 6.1129 11.5824 6.1129C11.5734 6.1174 11.5509 6.13543 11.5509 6.13543C11.5509 6.13543 11.5464 6.13993 11.5464 6.14895C11.5419 6.17147 11.5914 6.1895 11.614 6.1895C11.6365 6.1895 11.6455 6.18499 11.6455 6.18499C11.6545 6.18049 11.6545 6.18049 11.6635 6.17598C11.668 6.17147 11.6725 6.17598 11.677 6.17147C11.6815 6.16697 11.6861 6.16246 11.6906 6.16246C11.6996 6.15345 11.7131 6.15796 11.7266 6.15345C11.7401 6.14444 11.7491 6.13993 11.7491 6.13543H11.7536C11.7717 6.13543 11.7762 6.14895 11.7897 6.15345C11.7627 6.12191 11.7311 6.08586 11.7041 6.05432C11.7086 6.05432 11.6906 6.05432 11.6906 6.05432Z"
                    fill="url(#paint71_linear_268_6864)"
                  />
                  <path
                    d="M12.3216 6.82935C12.3126 6.82935 12.3126 6.83837 12.3126 6.84287C12.3126 6.84738 12.3126 6.84738 12.3126 6.84738C12.3081 6.84738 12.2946 6.85639 12.2946 6.86089C12.2946 6.8654 12.2946 6.88793 12.2946 6.89244C12.2991 6.92398 12.3171 6.94651 12.3261 6.95101C12.3306 6.95552 12.3486 6.95101 12.3531 6.94651C12.3576 6.94651 12.3621 6.942 12.3667 6.942C12.4072 6.88793 12.4027 6.88793 12.4027 6.87892C12.3847 6.85639 12.3621 6.82935 12.3441 6.80682V6.81133C12.3351 6.82935 12.3351 6.82935 12.3216 6.82935Z"
                    fill="url(#paint72_linear_268_6864)"
                  />
                  <path
                    d="M12.3981 6.91942C12.3981 6.92393 12.3936 6.92843 12.3936 6.92843C12.3891 6.93744 12.3891 6.94646 12.3891 6.95547C12.3936 6.95997 12.3981 6.96448 12.3981 6.96898L12.4071 6.9825L12.4251 6.98701C12.4297 6.9825 12.4342 6.9825 12.4342 6.978L12.4387 6.97349C12.4387 6.97349 12.4432 6.96898 12.4612 6.94645C12.4477 6.92843 12.4297 6.91041 12.4161 6.88788C12.4071 6.9014 12.4071 6.9014 12.3981 6.91942Z"
                    fill="url(#paint73_linear_268_6864)"
                  />
                  <path
                    d="M12.2314 6.7347C12.2179 6.7347 12.2044 6.74371 12.1999 6.74822C12.1954 6.75272 12.1909 6.75723 12.1864 6.76173V6.76624C12.1819 6.77525 12.1729 6.77976 12.1774 6.78877C12.1819 6.8113 12.2179 6.8158 12.2179 6.8158C12.2224 6.8158 12.2224 6.8158 12.2269 6.8158C12.236 6.8158 12.245 6.82031 12.254 6.8158L12.272 6.80229C12.281 6.79327 12.29 6.77976 12.299 6.76624C12.2855 6.74822 12.272 6.73019 12.2585 6.71667L12.254 6.72569C12.245 6.72569 12.236 6.73019 12.2314 6.7347Z"
                    fill="url(#paint74_linear_268_6864)"
                  />
                  <path
                    d="M11.9205 6.18048C11.8935 6.18048 11.8755 6.20301 11.8529 6.21202C11.8394 6.21653 11.8394 6.21653 11.8214 6.20752C11.8124 6.20301 11.7898 6.194 11.7538 6.18949C11.7313 6.18949 11.7313 6.18949 11.7223 6.18949C11.7132 6.18949 11.6502 6.22554 11.6321 6.23455C11.5961 6.26159 11.5826 6.28862 11.6006 6.31115C11.6006 6.31566 11.6051 6.31566 11.6096 6.32016C11.6366 6.3472 11.6366 6.3472 11.6727 6.32467C11.6727 6.32467 11.7132 6.32016 11.6682 6.35621C11.6502 6.36973 11.6412 6.37874 11.6907 6.40578C11.7132 6.41929 11.7268 6.41028 11.7403 6.39226C11.7628 6.36973 11.7853 6.3472 11.8034 6.38325C11.7989 6.39676 11.7808 6.39676 11.7808 6.41479L11.7898 6.41929C11.8484 6.43732 11.9836 6.2706 11.9566 6.21653C11.9611 6.20752 11.9476 6.18048 11.9205 6.18048Z"
                    fill="url(#paint75_linear_268_6864)"
                  />
                  <path
                    d="M12.209 6.44628C12.2135 6.43277 12.1594 6.39221 12.1594 6.39221H12.1549C12.1414 6.39672 12.1324 6.41024 12.1188 6.41474C12.1143 6.41474 12.1053 6.41474 12.1008 6.41024C12.0963 6.40573 12.0783 6.39672 12.0422 6.41925C12.0197 6.43727 12.0152 6.45079 12.0152 6.45079C12.0603 6.45529 12.0738 6.47782 12.0738 6.47782C12.0738 6.47782 12.0648 6.49585 12.0332 6.52739C12.0197 6.54091 12.0197 6.54091 12.0197 6.54541V6.54992C12.0377 6.55442 12.0558 6.54541 12.0783 6.54091C12.0963 6.5364 12.1008 6.53189 12.1053 6.5364C12.1233 6.54541 12.1098 6.55893 12.0828 6.58597C12.0558 6.613 12.0648 6.62652 12.0648 6.63102C12.0648 6.63553 12.0693 6.64004 12.0648 6.64004C12.0603 6.64905 12.0512 6.65355 12.0512 6.66257C12.0512 6.67608 12.0603 6.72114 12.0693 6.72565C12.0873 6.72565 12.1188 6.6851 12.1369 6.63553C12.1459 6.613 12.1459 6.613 12.1954 6.58146C12.1999 6.56794 12.2044 6.55442 12.209 6.54091C12.218 6.54541 12.227 6.54992 12.236 6.55442C12.2495 6.55893 12.2585 6.55442 12.263 6.54992C12.263 6.54992 12.2856 6.49134 12.281 6.47782C12.2765 6.46881 12.2675 6.45529 12.254 6.4598C12.2135 6.47332 12.1819 6.50035 12.1414 6.51838C12.1459 6.50486 12.1639 6.46431 12.1864 6.45529C12.1999 6.45529 12.209 6.45079 12.209 6.44628Z"
                    fill="url(#paint76_linear_268_6864)"
                  />
                  <path
                    d="M13.4568 3.95912C13.4658 3.95462 13.4703 3.9456 13.4794 3.9411C13.4929 3.93659 13.5109 3.9411 13.5244 3.93209L13.5289 3.92758C13.5289 3.92758 13.5605 3.89604 13.5695 3.88703L13.574 3.85549V3.85098C13.5695 3.85098 13.5469 3.84647 13.5064 3.85549C13.5019 3.85549 13.4929 3.85999 13.4794 3.8645C13.4658 3.869 13.4433 3.88252 13.4298 3.89153C13.4163 3.90054 13.3982 3.89604 13.3847 3.90505L13.3397 3.95462C13.3397 3.95462 13.3307 3.97264 13.3532 3.97264C13.3802 3.97264 13.4028 3.96363 13.4253 3.95912C13.4208 3.96363 13.4388 3.96363 13.4568 3.95912Z"
                    fill="url(#paint77_linear_268_6864)"
                  />
                  <path
                    d="M13.4839 4.02217C13.4974 4.02217 13.5109 4.01767 13.5154 4.00865C13.5154 4.00415 13.5199 4.00415 13.5244 4.00415C13.5605 3.99514 13.5605 3.99514 13.6101 3.99063C13.6326 3.99063 13.6371 3.99063 13.6416 3.98612C13.6416 3.98612 13.7182 3.96359 13.7002 3.95008C13.6867 3.94107 13.6596 3.94106 13.6461 3.93656C13.6191 3.93205 13.6191 3.93205 13.6236 3.92304C13.6236 3.91403 13.6101 3.90502 13.583 3.90952L13.5425 3.91854C13.5199 3.92755 13.5019 3.94107 13.4794 3.95008C13.4478 3.96359 13.4388 3.96359 13.4298 3.96359C13.4208 3.96359 13.4208 3.96359 13.4163 3.9681L13.4118 3.97261C13.4073 3.97711 13.3983 4.00415 13.4118 4.01316C13.4073 4.01767 13.4839 4.02217 13.4839 4.02217Z"
                    fill="url(#paint78_linear_268_6864)"
                  />
                  <path
                    d="M11.132 5.83806C11.1229 5.84257 11.1049 5.87411 11.1229 5.87861C11.1275 5.87861 11.1275 5.87861 11.1365 5.87411C11.1455 5.8696 11.15 5.8651 11.159 5.86059C11.168 5.85608 11.177 5.85158 11.1815 5.84707L11.186 5.84257C11.1905 5.83806 11.1995 5.83356 11.195 5.82454C11.1815 5.80652 11.1455 5.82905 11.132 5.83806Z"
                    fill="url(#paint79_linear_268_6864)"
                  />
                  <path
                    d="M11.2807 5.9462C11.2897 5.9462 11.2942 5.90565 11.2537 5.83806L11.2491 5.83356C11.2491 5.83356 11.2491 5.83356 11.2446 5.83806C11.2446 5.84257 11.2401 5.84257 11.2356 5.84707C11.2311 5.85158 11.2221 5.85158 11.2176 5.85609C11.2131 5.86059 11.2131 5.86059 11.2086 5.8651L11.1996 5.89213V5.89664C11.2131 5.89664 11.2176 5.88312 11.2311 5.88312C11.2401 5.88312 11.2401 5.89213 11.2401 5.89664C11.2356 5.90565 11.2266 5.90565 11.2176 5.91016C11.2176 5.91016 11.2131 5.91466 11.2131 5.91917C11.2131 5.91917 11.2266 5.95071 11.2266 5.95522V5.95972C11.2356 5.96423 11.2446 5.9417 11.2537 5.92368C11.2582 5.91466 11.2582 5.91917 11.2627 5.92818C11.2717 5.9417 11.2762 5.9462 11.2807 5.9462Z"
                    fill="url(#paint80_linear_268_6864)"
                  />
                  <path
                    d="M11.5284 6.02275C11.5284 6.03627 11.5284 6.03627 11.5284 6.04078C11.5329 6.04979 11.5419 6.05429 11.5464 6.0588L11.5509 6.0633C11.5554 6.0633 11.5779 6.05429 11.5824 6.04078C11.5869 6.03627 11.5779 6.02726 11.5734 6.01825C11.5599 6.00022 11.5374 5.99121 11.5284 5.99572L11.5239 6.00022C11.5284 6.00923 11.5284 6.01825 11.5284 6.02275Z"
                    fill="url(#paint81_linear_268_6864)"
                  />
                  <path
                    d="M11.5736 5.93716C11.5691 5.94167 11.5646 5.94618 11.5646 5.95519V5.95969C11.5646 5.95969 11.5691 5.99123 11.5826 5.99574C11.5871 5.99574 11.5916 5.99574 11.5916 5.99574C11.5961 5.99574 11.6006 5.99123 11.6096 5.99123C11.6141 5.99123 11.6186 5.99123 11.6186 5.98673C11.6186 5.98673 11.6322 5.95969 11.6277 5.95068C11.6277 5.94618 11.6232 5.94618 11.6186 5.94167C11.5826 5.93266 11.5781 5.93266 11.5736 5.93716Z"
                    fill="url(#paint82_linear_268_6864)"
                  />
                  <path
                    d="M11.5285 5.94621V5.94171C11.5285 5.9372 11.5285 5.9372 11.524 5.9372C11.524 5.93269 11.524 5.93269 11.524 5.92819V5.92368C11.5195 5.91467 11.4925 5.91016 11.4925 5.91467C11.4925 5.91918 11.497 5.91918 11.497 5.92368C11.497 5.92819 11.4925 5.93269 11.4925 5.9372V5.94171C11.497 5.95072 11.5105 5.95522 11.515 5.95522C11.5195 5.95072 11.524 5.94621 11.5285 5.94621Z"
                    fill="url(#paint83_linear_268_6864)"
                  />
                  <path
                    d="M11.6457 5.89661C11.6457 5.89661 11.6097 5.90111 11.5961 5.90562C11.5871 5.90562 11.5871 5.91012 11.5826 5.91012C11.5826 5.91012 11.5826 5.91012 11.5781 5.91463C11.5781 5.91914 11.5826 5.91914 11.6007 5.91463C11.6142 5.91463 11.6187 5.91463 11.6232 5.91463C11.6277 5.91463 11.6322 5.92364 11.6367 5.92364C11.6412 5.92815 11.6457 5.93265 11.6457 5.93265H11.6502C11.6592 5.93265 11.6818 5.92364 11.6682 5.90562C11.6637 5.90111 11.6592 5.89661 11.6547 5.89661H11.6457Z"
                    fill="url(#paint84_linear_268_6864)"
                  />
                  <path
                    d="M11.7403 5.98676C11.7493 5.98225 11.7583 5.97775 11.7673 5.96874C11.7763 5.96423 11.7853 5.95972 11.7944 5.95522C11.7989 5.95522 11.7989 5.95071 11.7989 5.95071C11.7989 5.94621 11.7628 5.93719 11.7583 5.93719C11.7448 5.93719 11.7403 5.93719 11.7358 5.9417C11.7178 5.95522 11.7223 5.98225 11.7313 5.98676C11.7313 5.99127 11.7313 5.99127 11.7403 5.98676Z"
                    fill="url(#paint85_linear_268_6864)"
                  />
                  <path
                    d="M9.14929 11.3803C9.14929 11.3758 9.1538 11.3713 9.1538 11.3668H9.14929C9.12676 11.3803 9.10874 11.3983 9.08621 11.4163C9.07269 11.4253 9.05917 11.4298 9.04565 11.4389C9.08621 11.4208 9.12676 11.3983 9.17182 11.3803C9.16731 11.3803 9.16731 11.3803 9.14929 11.3803Z"
                    fill="url(#paint86_linear_268_6864)"
                  />
                  <path
                    d="M5.09838 13.3809C5.09387 13.3989 5.09387 13.3989 5.09387 13.4034C5.09387 13.408 5.09387 13.408 5.10288 13.426C5.10288 13.4125 5.10288 13.3944 5.09838 13.3809Z"
                    fill="url(#paint87_linear_268_6864)"
                  />
                  <path
                    d="M5.46353 9.17693C5.45903 9.17693 5.45903 9.17693 5.45903 9.17693C5.45452 9.17693 5.45903 9.17242 5.45452 9.17242L5.42748 9.19495C5.42298 9.19946 5.41847 9.20397 5.41847 9.20847C5.41397 9.21298 5.40946 9.21748 5.40495 9.21298C5.40045 9.21298 5.40045 9.21298 5.40045 9.21298C5.40045 9.20847 5.40045 9.20847 5.40045 9.20397C5.39144 9.24452 5.38242 9.28958 5.37341 9.33013C5.39594 9.3076 5.45001 9.24452 5.46804 9.19045C5.46804 9.17693 5.46804 9.17693 5.46353 9.17693Z"
                    fill="url(#paint88_linear_268_6864)"
                  />
                  <path
                    d="M18.8371 6.81137C18.8055 6.84742 18.8055 6.84742 18.7965 6.87445C18.792 6.90149 18.792 6.90149 18.7334 6.915C18.7154 6.89698 18.7244 6.86995 18.7019 6.85192C18.6614 6.82489 18.6433 6.82489 18.6163 6.82939C18.5712 6.80686 18.5307 6.77532 18.4811 6.76631C18.4811 6.76631 18.3459 6.73477 18.3009 6.7618C18.2964 6.7618 18.2693 6.77983 18.2513 6.77532C18.1702 6.7618 18.1026 6.70323 18.0215 6.68971C18.0035 6.6852 18.0035 6.6852 17.9719 6.6807L17.9539 6.6852C17.9179 6.69422 17.8863 6.71224 17.8503 6.72125C17.8368 6.7618 17.8368 6.7618 17.8323 6.76631C17.8052 6.73477 17.8413 6.68971 17.8007 6.66267C17.7917 6.65817 17.7917 6.65817 17.7512 6.54101L17.7241 6.51398V6.48244C17.6971 6.40133 17.6115 6.36078 17.607 6.36078C17.5529 6.41485 17.5529 6.41485 17.5484 6.41485C17.5078 6.47343 17.5078 6.47343 17.4583 6.51398C17.4583 6.53651 17.4628 6.55453 17.4538 6.57706C17.4493 6.57706 17.4448 6.58157 17.4448 6.58157C17.4312 6.57256 17.4267 6.56805 17.3817 6.54552C17.3772 6.5275 17.3817 6.52299 17.3862 6.51398C17.3637 6.40133 17.3637 6.40133 17.3501 6.39232L17.3141 6.36979C17.2645 6.39683 17.251 6.47343 17.1834 6.48244L17.1339 6.51398C17.1609 6.54101 17.1744 6.55904 17.1969 6.59959L17.1654 6.61311C17.1879 6.63113 17.2195 6.64916 17.242 6.66718C17.1384 6.73927 17.3096 6.78884 17.3096 6.78884C17.3546 6.79334 17.3591 6.79335 17.3862 6.88797C17.3772 6.94655 17.3727 6.96457 17.4042 6.97809C17.4132 6.97809 17.4312 6.97358 17.4357 6.96907C17.4357 6.96457 17.4357 6.95556 17.4403 6.95105C17.4493 6.95105 17.4583 6.95556 17.4628 6.96006C17.4628 6.97358 17.4628 6.9871 17.4673 6.99611C17.4943 6.97809 17.4808 6.93303 17.4808 6.93303L17.4718 6.91951C17.4673 6.9105 17.4628 6.89698 17.4628 6.88797C17.4718 6.87896 17.4808 6.86995 17.4898 6.86544C17.5484 6.90149 17.5214 6.96908 17.5439 7.01864C17.5709 7.01864 17.5709 7.00963 17.5709 6.97809C17.598 6.94204 17.598 6.94204 17.5889 6.91951C17.5889 6.915 17.5935 6.915 17.598 6.9105C17.6115 6.9105 17.625 6.9105 17.6385 6.915C17.6475 6.93303 17.6655 6.95105 17.6746 6.96907C17.7196 6.96907 17.7196 6.96907 17.7331 6.96907C17.7376 6.97358 17.7421 6.98259 17.7467 6.9871C17.7512 6.9871 17.7557 6.98259 17.7557 6.98259C17.7782 7.00512 17.7827 7.04117 17.7917 7.07271C17.8097 7.12228 17.8097 7.12228 17.8638 7.1403C17.9314 7.09073 17.9269 7.07722 17.9269 7.0637C17.9359 7.05919 17.9494 7.05469 17.9584 7.04568C17.9719 7.02765 17.9719 7.02765 17.9719 7.00512C17.9674 7.00512 17.9674 7.00062 17.9629 7.00062C17.999 6.91951 18.0305 6.97809 18.0305 6.99611C18.0305 7.00512 18.026 7.03666 18.0576 7.05018C18.0981 7.02765 18.1026 7.03216 18.1477 7.0637C18.1657 7.05919 18.1747 7.05469 18.1927 7.04568C18.1927 7.04568 18.3279 7.17635 18.3144 7.20338C18.2603 7.2169 18.2603 7.27097 18.2333 7.30251C18.2423 7.35208 18.2423 7.35658 18.2558 7.36559C18.2829 7.38362 18.3099 7.36109 18.3369 7.37461L18.391 7.47824C18.391 7.47824 18.3955 7.53231 18.3685 7.54583C18.364 7.64045 18.364 7.64045 18.3955 7.66298C18.4225 7.65848 18.4225 7.65848 18.4361 7.63144C18.4676 7.58638 18.5262 7.58188 18.5712 7.55484C18.5712 7.55034 18.5712 7.54583 18.5712 7.54583C18.5802 7.54583 18.5802 7.54583 18.6073 7.54583C18.6073 7.54583 18.6388 7.48725 18.6659 7.40615C18.6884 7.44219 18.6929 7.4467 18.6974 7.46022C18.6929 7.46472 18.6884 7.47374 18.6839 7.48275C18.6884 7.50528 18.7064 7.55935 18.6659 7.55935C18.6614 7.58188 18.6614 7.58188 18.6523 7.59089C18.6478 7.59089 18.6433 7.58638 18.6433 7.58188C18.6388 7.58638 18.6298 7.58638 18.6208 7.59089C18.5983 7.64947 18.5983 7.65397 18.6073 7.75761C18.6118 7.81618 18.6073 7.87025 18.6118 7.92883C18.6118 7.92883 18.6163 7.97389 18.6433 7.96488C18.6523 7.96488 18.6749 7.95587 18.6704 7.91982C18.6614 7.85223 18.7019 7.78464 18.7064 7.78464C18.7875 7.78014 18.7875 7.76662 18.7965 7.72607L18.7875 7.69452C18.783 7.68101 18.7695 7.65397 18.7785 7.64045C18.81 7.58638 18.8641 7.55935 18.8957 7.50978C18.8957 7.49627 18.9002 7.48275 18.9002 7.47374C18.9137 7.46472 18.9137 7.46472 18.9632 7.45571C18.9813 7.42868 18.9858 7.39714 19.0038 7.37461C19.0308 7.34757 19.0714 7.33856 19.0939 7.31152C19.0939 7.31152 19.1074 7.29801 19.1164 7.27998C19.1435 7.23943 19.1525 7.18986 19.1705 7.1403V7.08623C19.166 7.07722 19.1615 7.0682 19.157 7.05919C19.1029 7.05469 19.0894 7.11777 19.0398 7.11777C19.0353 7.11326 19.0353 7.10876 19.0308 7.10876C19.0624 6.93753 19.0218 6.88797 18.9948 6.86093L18.9903 6.8384C18.9723 6.77082 18.8641 6.78433 18.8371 6.81137Z"
                    fill="url(#paint89_linear_268_6864)"
                  />
                  <path
                    d="M17.8502 7.41959C17.9088 7.32496 17.8863 7.26638 17.8818 7.25737C17.8727 7.23935 17.6745 7.17176 17.6249 7.21682C17.6204 7.22133 17.6159 7.22583 17.6114 7.23034L17.5889 7.26188C17.5844 7.28891 17.5844 7.32046 17.5799 7.34749C17.6069 7.37453 17.6069 7.37453 17.6159 7.49619C17.6249 7.5052 17.6294 7.5097 17.6384 7.51872C17.6565 7.51421 17.6835 7.5097 17.7015 7.5052C17.6429 7.53674 17.6294 7.54575 17.6159 7.53223C17.6069 7.52322 17.5979 7.51871 17.5844 7.52322L17.5799 7.54575L17.5844 7.60433C17.5618 7.61334 17.5483 7.61784 17.5303 7.6629C17.5168 7.69445 17.4852 7.68093 17.4627 7.69895C17.4447 7.71247 17.4177 7.71247 17.4086 7.7395C17.4041 7.75302 17.4357 7.78006 17.4447 7.78456C17.4762 7.79808 17.5078 7.76203 17.5348 7.78907C17.5618 7.8161 17.5258 7.86567 17.5709 7.88369C17.5754 7.8882 17.5754 7.8882 17.6159 7.85666C17.6339 7.84314 17.6565 7.83413 17.6745 7.82512C17.7195 7.80259 17.6835 7.90622 17.7331 7.91523C17.7421 7.91523 17.7556 7.91523 17.7646 7.91523C17.7691 7.93326 17.7826 7.96029 17.7736 7.98282C17.7691 8.00085 17.7556 8.0414 17.7556 8.07745C17.7601 8.22164 17.9448 8.14503 17.9493 8.14053C17.9493 8.14053 18.0395 8.0414 18.0395 7.93326C18.0395 7.91523 18.0395 7.90172 18.0395 7.88369C18.0395 7.86567 18.0259 7.84314 18.035 7.82512C18.0395 7.82061 18.1341 7.72148 18.1386 7.72148C17.9719 7.41057 17.9043 7.43761 17.8637 7.46014C17.8637 7.46014 17.7781 7.49619 17.7691 7.45113C17.7961 7.4331 17.8277 7.45113 17.8502 7.41959Z"
                    fill="url(#paint90_linear_268_6864)"
                  />
                  <path
                    d="M14.6059 6.35172C14.6059 6.36073 14.6059 6.36523 14.66 6.40579C14.651 6.39227 14.651 6.39227 14.651 6.38776C14.7321 6.35622 14.7186 6.32017 14.7141 6.30666C14.7546 6.2661 14.7546 6.2661 14.7817 6.2616L14.7772 6.22555C14.8132 6.20753 14.8177 6.20302 14.8222 6.19401C14.8673 6.22555 14.8628 6.25709 14.8628 6.28413L14.9304 6.2661C14.9259 6.28413 14.9259 6.28413 14.8943 6.28863C14.8988 6.31116 14.8988 6.31116 14.8267 6.40128C14.7907 6.44183 14.7591 6.48689 14.8357 6.46887C14.8583 6.4193 14.9078 6.39677 14.9394 6.35622C15.0025 6.4193 15.0205 6.39227 15.0475 6.3427C15.061 6.35622 15.052 6.38326 15.0746 6.39227C15.0746 6.39227 15.1376 6.36974 15.1196 6.44183C15.1106 6.47337 15.061 6.4914 15.0836 6.53195C15.0971 6.55899 15.1106 6.55899 15.1602 6.52745C15.2458 6.47788 15.2413 6.41029 15.2413 6.38776C15.3449 6.38776 15.3449 6.38776 15.3584 6.37875C15.4125 6.39227 15.426 6.39677 15.5972 6.29314C15.6153 6.27962 15.6153 6.27962 15.6108 6.23006C15.6198 6.22104 15.6198 6.22104 15.6468 6.22104C15.6693 6.19401 15.6603 6.185 15.6333 6.14895C15.6378 6.14444 15.6468 6.13994 15.6513 6.13543C15.6378 6.09488 15.6874 6.08587 15.6964 6.05433C15.7054 6.02279 15.7054 6.02279 15.7054 5.98674C15.7279 5.9597 15.6919 5.93717 15.7009 5.91464L15.7054 5.91915C15.7369 5.89662 15.7234 5.86958 15.7234 5.86508C15.7099 5.82903 15.773 5.79749 15.773 5.79749C15.782 5.75243 15.7595 5.7254 15.7369 5.69836C15.7414 5.68935 15.7324 5.67133 15.7504 5.66682V5.66231L15.8135 5.68935C15.818 5.68484 15.8631 5.66682 15.8946 5.70737L15.9802 5.83804C15.9848 5.84255 16.0388 5.86508 16.0704 5.86958C16.1695 5.8831 16.138 5.94618 16.138 5.94618C16.1425 5.95069 16.1425 5.9597 16.147 5.96421C16.1425 5.98223 16.1425 5.98223 16.147 5.99575C16.3137 6.07686 16.3227 6.08136 16.3903 6.0363C16.3858 6.01828 16.3678 6.00026 16.3723 5.97773C16.3948 5.97773 16.4128 5.9552 16.4398 5.9597C16.4624 5.96421 16.4714 5.98674 16.4939 5.99575C16.4939 5.99575 16.5345 6.02729 16.5615 6.01828C16.557 5.96871 16.557 5.96871 16.557 5.9597C16.5525 5.9552 16.548 5.94618 16.548 5.93717C16.6021 5.91915 16.6381 5.97773 16.6922 5.96421L16.7282 5.94168C16.7643 5.93267 16.7643 5.93267 16.8093 5.83804C16.8364 5.82903 16.8634 5.85607 16.8589 5.86958C16.8544 5.8786 16.8499 5.88761 16.8454 5.89662C16.8769 5.92816 16.8814 5.92816 16.922 5.91464C16.9806 5.91464 17.0346 5.94619 17.0932 5.95069C17.0977 5.94619 17.1067 5.93717 17.1112 5.93267V5.91915L17.1157 5.89662C17.1202 5.85607 17.1202 5.85607 17.0391 5.79749C17.0346 5.78848 17.0301 5.78397 17.0256 5.77496C17.0346 5.77045 17.0436 5.77045 17.0526 5.77045L17.2554 5.70287C17.314 5.68034 17.3816 5.67132 17.4402 5.6533C17.4402 5.6488 17.4447 5.63978 17.4447 5.63528C17.4942 5.61275 17.5213 5.68935 17.5213 5.68935C17.5258 5.68935 17.5258 5.69385 17.5303 5.69385C17.5934 5.66682 17.6249 5.59923 17.697 5.58571C17.697 5.58121 17.688 5.5722 17.6835 5.5722C17.6835 5.56769 17.679 5.55868 17.6745 5.54967C17.5753 5.55417 17.5753 5.55417 17.5483 5.54967C17.5303 5.54065 17.5303 5.54065 17.4627 5.53164H17.4266L17.3726 5.52714L17.3095 5.51812L17.2734 5.50911C17.2734 5.50911 17.2689 5.50461 17.2644 5.5001C17.2599 5.5001 17.2509 5.50461 17.2464 5.50461C17.2464 5.50911 17.2419 5.51362 17.2419 5.51812L17.2194 5.52714L17.2058 5.53615C17.1968 5.52714 17.1968 5.52714 17.1518 5.55417L17.1247 5.55868C17.1067 5.55417 17.1067 5.55417 17.0797 5.56769C17.0797 5.56769 16.967 5.5767 16.967 5.62176C16.967 5.62176 16.9625 5.62627 16.9625 5.63077C16.9535 5.63077 16.9445 5.63077 16.94 5.63077C16.94 5.63077 16.9355 5.62627 16.931 5.62627C16.931 5.62627 16.931 5.62627 16.904 5.66682C16.8183 5.68484 16.7553 5.61725 16.6742 5.60824C16.6336 5.60374 16.6156 5.55868 16.5795 5.54516C16.575 5.54967 16.5705 5.55417 16.5705 5.55417C16.5435 5.56318 16.53 5.58571 16.5074 5.59923L16.4714 5.60824L16.3182 5.62176H16.2912C16.2776 5.62176 16.2776 5.62176 16.2146 5.5767C16.1875 5.55868 16.165 5.58571 16.138 5.5767L16.0478 5.54516C16.0478 5.54516 16.0478 5.54516 16.0298 5.52263C16.0028 5.52714 15.9983 5.52263 15.9622 5.50461L15.9577 5.49559L15.9397 5.48658L15.9036 5.46405L15.8856 5.45504L15.8676 5.44152C15.8631 5.42801 15.8541 5.40998 15.8496 5.39647C15.8361 5.33338 15.7685 5.31536 15.7324 5.2703C15.7144 5.26579 15.6964 5.28832 15.6784 5.27931C15.6648 5.27481 15.6648 5.27481 15.6558 5.23425C15.6108 5.23876 15.6063 5.27931 15.6108 5.28382C15.6153 5.28832 15.5972 5.30184 15.5882 5.29734C15.5657 5.28832 15.5657 5.28832 15.5477 5.26129C15.5342 5.26129 15.5297 5.25678 15.5071 5.26579C15.5026 5.2703 15.4981 5.27481 15.4981 5.28382C15.5251 5.33789 15.5251 5.33789 15.5432 5.33789C15.5522 5.44152 15.5567 5.49109 15.5612 5.52263C15.5567 5.52263 15.5522 5.52263 15.5477 5.52714C15.5387 5.54065 15.5342 5.55868 15.5161 5.5722C15.5116 5.5722 15.5116 5.5722 15.4891 5.54065C15.4711 5.54516 15.4576 5.5767 15.435 5.56318C15.426 5.55868 15.408 5.52714 15.408 5.52714C15.408 5.52263 15.4035 5.52263 15.4035 5.51812C15.381 5.50461 15.3584 5.52263 15.3404 5.50911C15.3224 5.49559 15.3314 5.46405 15.3044 5.46405C15.2593 5.45955 15.3224 5.55868 15.2818 5.55417L15.1512 5.54516C15.1512 5.54516 15.1467 5.54967 15.1421 5.54967C15.1376 5.55868 15.1331 5.56769 15.1286 5.5767C15.1467 5.60824 15.1872 5.61275 15.1962 5.6488C15.1872 5.6533 15.1376 5.66682 15.1241 5.67583C15.1286 5.70287 15.1467 5.72089 15.1557 5.74342C15.1241 5.75694 15.0746 5.73441 15.061 5.78397C15.0791 5.81101 15.1151 5.802 15.1376 5.81551C15.1331 5.82453 15.1331 5.82903 15.1286 5.83804C15.1016 5.83804 15.0836 5.8065 15.0565 5.81101C15.0385 5.81101 15.0205 5.79749 14.998 5.8065C14.998 5.8065 14.998 5.8065 14.9754 5.85607C14.9709 5.86958 14.9709 5.87409 14.9619 5.88761C14.9709 5.90563 14.998 5.90563 15.0025 5.92816L14.8718 5.9597C14.8943 6.00476 14.9664 6.00476 14.9619 6.06784C14.9529 6.06784 14.9439 6.05883 14.9304 6.05433C14.9078 6.10389 14.9078 6.10389 14.9033 6.10389C14.9078 6.1129 14.9078 6.1129 14.9799 6.17599L14.9484 6.18049L14.9439 6.17599L14.9394 6.17148C14.9349 6.17148 14.9349 6.16697 14.9304 6.16697C14.9259 6.16697 14.9259 6.16247 14.9214 6.16247C14.9169 6.16247 14.9169 6.15796 14.9123 6.15796L14.9078 6.15346L14.9033 6.14895C14.8673 6.13093 14.8673 6.13093 14.8042 6.14895C14.7952 6.13543 14.7907 6.13093 14.7907 6.08587C14.7501 6.05433 14.7276 6.04081 14.7231 6.04081C14.615 6.05883 14.4978 6.08587 14.5113 6.13093C14.5113 6.13543 14.5203 6.13994 14.5248 6.14444C14.5474 6.12191 14.5474 6.12191 14.5474 6.12191C14.5834 6.12642 14.6105 6.15796 14.6465 6.16247C14.633 6.21203 14.5429 6.17148 14.5519 6.22555C14.5654 6.23006 14.5654 6.23006 14.5789 6.23907C14.5744 6.24808 14.5744 6.2616 14.5699 6.27061L14.6059 6.28863C14.6285 6.28413 14.6285 6.28413 14.6059 6.35172Z"
                    fill="url(#paint91_linear_268_6864)"
                  />
                  <path
                    d="M21.6352 8.10452C21.6712 8.12705 21.6802 8.14507 21.7073 8.19013C21.7208 8.21266 21.7343 8.23068 21.7478 8.23519C21.7478 8.23519 21.7839 8.2442 21.7929 8.20365C21.7974 8.17661 21.7884 8.15408 21.7929 8.12705C21.7974 8.10902 21.8199 8.09551 21.8199 8.07298C21.8199 8.05045 21.7884 8.00539 21.7884 8.00539C21.7704 7.98286 21.6397 7.85669 21.6036 7.83416C21.5811 7.82065 21.5541 7.83416 21.527 7.85219L21.518 7.81614L21.5135 7.81164C21.4865 7.81164 21.4775 7.81163 21.4685 7.80713C21.4369 7.95132 21.4369 7.95132 21.4595 7.98286C21.4685 8.00088 21.4775 8.00539 21.4955 8.02341C21.5315 8.06397 21.5901 8.07748 21.6352 8.10452Z"
                    fill="url(#paint92_linear_268_6864)"
                  />
                  <path
                    d="M24.8838 6.32471C24.8883 6.34724 24.8928 6.36075 24.9424 6.44637C24.9288 6.40131 24.9153 6.35625 24.8838 6.32471Z"
                    fill="url(#paint93_linear_268_6864)"
                  />
                  <path
                    d="M24.9469 6.44629C24.9469 6.45079 24.9514 6.45981 24.9559 6.46431C24.9649 6.47332 24.9694 6.47783 24.9694 6.47783C24.9559 6.46431 24.9514 6.4553 24.9469 6.44629Z"
                    fill="url(#paint94_linear_268_6864)"
                  />
                  <path
                    d="M15.6647 0.822987C15.6377 0.822987 15.6107 0.818481 15.5836 0.818481C15.6107 0.822987 15.6377 0.822987 15.6647 0.822987Z"
                    fill="url(#paint95_linear_268_6864)"
                  />
                  <path
                    d="M24.8029 5.9507C24.7263 5.83805 24.6812 5.77497 24.6497 5.72541C24.6137 5.67133 24.5686 5.61276 24.5235 5.54968C24.4875 5.50011 24.4379 5.43252 24.3974 5.37845C24.3929 5.36944 24.3839 5.36043 24.3748 5.35142C24.3703 5.3424 24.3658 5.3379 24.3568 5.32889C24.3163 5.27482 24.2622 5.21173 24.2262 5.16217C24.1811 5.1081 24.127 5.04051 24.0729 4.97743C24.0234 4.91885 23.9783 4.86027 23.9333 4.81071C23.8837 4.75664 23.8341 4.69355 23.7756 4.63498C23.7665 4.62597 23.762 4.61695 23.753 4.61245C23.744 4.60344 23.7395 4.59893 23.7305 4.58992C23.6854 4.54035 23.6314 4.48178 23.5863 4.43672C23.5773 4.42771 23.5683 4.41869 23.5638 4.40968C23.5232 4.36913 23.4827 4.32407 23.4421 4.28352C23.4376 4.27901 23.4286 4.27 23.4196 4.26099C23.3475 4.18889 23.325 4.16186 23.2484 4.08976C23.1988 4.0402 23.1357 3.98162 23.0817 3.93206C23.0636 3.91403 23.0411 3.89601 23.0141 3.87348C22.969 3.83293 22.9285 3.79688 22.8924 3.76083C22.8834 3.75182 22.8699 3.74281 22.8609 3.7338C22.8158 3.69324 22.7707 3.6572 22.7257 3.61664C22.7212 3.61214 22.7122 3.60763 22.7077 3.59862C22.6987 3.58961 22.6896 3.5851 22.6806 3.57609C22.613 3.51751 22.559 3.47246 22.5184 3.44091C22.5049 3.4274 22.4869 3.41388 22.4689 3.40036C22.3877 3.33728 22.3382 3.29673 22.3021 3.26518C22.2526 3.22463 22.203 3.18858 22.1579 3.15704C22.1489 3.15254 22.1399 3.14353 22.1354 3.13902C22.0498 3.07594 22.0228 3.05341 21.9417 2.99483C21.9372 2.99032 21.9326 2.99032 21.9326 2.98582C21.8651 2.94076 21.8155 2.90471 21.7794 2.87768H21.7749L21.7704 2.87317C21.7659 2.87317 21.7659 2.86867 21.7614 2.86867L21.7569 2.86416L21.7524 2.85965C21.7479 2.85515 21.7434 2.85064 21.7389 2.85064C21.7344 2.84614 21.7254 2.84163 21.7209 2.83712C21.6938 2.8191 21.6713 2.80108 21.6488 2.78756C21.6308 2.77404 21.6082 2.76052 21.5857 2.7425C21.5767 2.73349 21.5632 2.72898 21.5496 2.71997C21.5406 2.71096 21.5316 2.70645 21.5226 2.70195C21.473 2.67041 21.4235 2.63886 21.3829 2.61183C21.3739 2.60282 21.3604 2.59831 21.3469 2.5893C21.2748 2.54424 21.2207 2.50819 21.1847 2.49017C21.1757 2.48566 21.1621 2.47665 21.1486 2.46764C21.1396 2.45863 21.1261 2.45412 21.1171 2.44962C21.0765 2.42709 21.0315 2.40005 20.9774 2.36851C20.9684 2.364 20.9549 2.35499 20.9413 2.35049C20.8963 2.32345 20.8647 2.30543 20.8332 2.2874C20.8152 2.27839 20.7927 2.26488 20.7701 2.25136C20.7611 2.24685 20.7476 2.23784 20.7341 2.23333C20.7206 2.22432 20.707 2.21982 20.698 2.2108C20.6755 2.19729 20.6575 2.18827 20.6395 2.17926C20.6124 2.16575 20.5899 2.15223 20.5583 2.1342C20.5538 2.1297 20.5448 2.1297 20.5403 2.12519C20.5358 2.12519 20.5358 2.12069 20.5313 2.12069C20.5223 2.11618 20.5133 2.11167 20.5043 2.10717C20.4547 2.08013 20.4006 2.0531 20.3421 2.02606C20.3331 2.02156 20.3285 2.01705 20.3195 2.01705C20.2294 1.97199 20.1979 1.95847 20.1078 1.91341L20.1033 1.90891C20.0357 1.87737 19.9681 1.84583 19.905 1.81879C19.9005 1.81879 19.896 1.81429 19.8915 1.81429C19.878 1.80978 19.8644 1.80077 19.8509 1.79626C19.7969 1.77373 19.7473 1.7512 19.7067 1.73318C19.6977 1.72867 19.6842 1.72417 19.6752 1.71966C19.6707 1.71966 19.6707 1.71516 19.6662 1.71516C19.6076 1.69263 19.5445 1.66559 19.4769 1.63856C19.4093 1.61152 19.3418 1.58448 19.2832 1.56195L19.2787 1.55745L19.2381 1.54393C19.2336 1.54393 19.2336 1.54393 19.2291 1.53943C19.175 1.5169 19.112 1.49437 19.0444 1.47184C19.0354 1.46733 19.0263 1.46733 19.0173 1.46282C19.0083 1.45832 19.0038 1.45832 18.9993 1.45381C18.9317 1.43128 18.8596 1.40875 18.792 1.38172C18.765 1.37271 18.738 1.3637 18.7154 1.35919C18.6794 1.34567 18.6343 1.33215 18.5758 1.31413C18.5712 1.31413 18.5622 1.30962 18.5577 1.30962C18.4811 1.28709 18.4 1.26457 18.3324 1.24204C18.3099 1.23753 18.2919 1.23302 18.2784 1.22852C18.2333 1.215 18.1837 1.20148 18.1342 1.18797C18.1252 1.18346 18.1116 1.18346 18.1026 1.17895C18.0981 1.17895 18.0936 1.17895 18.0891 1.17445C18.035 1.16093 17.9675 1.14291 17.8683 1.12038C17.8007 1.10686 17.7241 1.08884 17.6475 1.07081C17.607 1.07532 17.5935 1.07081 17.5799 1.07081C17.5169 1.05729 17.4493 1.04378 17.3727 1.03026C17.3006 1.01674 17.2555 1.00773 17.206 0.998717C17.1834 0.994211 17.1609 0.989706 17.1339 0.9852H17.1294C17.0753 0.976188 17.0032 0.96267 16.8905 0.944647C16.877 0.944647 16.8635 0.940141 16.85 0.940141C16.8094 0.935635 16.7373 0.922117 16.6472 0.913105H16.6427C16.6337 0.913105 16.6247 0.908599 16.6157 0.908599C16.5481 0.899588 16.4625 0.890576 16.3994 0.881564C16.3949 0.881564 16.3904 0.881564 16.3859 0.881564C16.3228 0.872552 16.2552 0.868046 16.1876 0.86354C16.1786 0.86354 16.1651 0.86354 16.1561 0.859035C16.1381 0.859035 16.1245 0.854529 16.111 0.854529C16.075 0.850023 16.0164 0.845517 15.9398 0.841011C15.9308 0.841011 15.9218 0.841011 15.9083 0.841011L15.7686 0.831999C15.737 0.831999 15.701 0.827493 15.6649 0.827493C15.6424 0.827493 15.6154 0.827493 15.5928 0.822987C15.5793 0.822987 15.5658 0.822987 15.5523 0.822987C15.5613 0.822987 15.5703 0.822987 15.5793 0.822987C15.5703 0.822987 15.5613 0.822987 15.5478 0.822987C15.5027 0.822987 15.4577 0.818481 15.4171 0.818481C15.4036 0.818481 15.3856 0.818481 15.3676 0.818481C15.3585 0.818481 15.3495 0.818481 15.3405 0.818481C15.2955 0.818481 15.2414 0.818481 15.1738 0.818481C15.1693 0.818481 15.1648 0.818481 15.1603 0.818481C15.0566 0.818481 15.0206 0.818481 14.908 0.818481C14.8809 0.818481 14.8539 0.818481 14.8314 0.822987C14.7998 0.822987 14.7638 0.827493 14.7277 0.827493C14.7232 0.827493 14.7187 0.827493 14.7187 0.827493C14.7142 0.827493 14.7097 0.827493 14.7052 0.827493C14.6421 0.831999 14.5835 0.831999 14.525 0.836505C14.5159 0.836505 14.5024 0.836505 14.4889 0.836505C14.4574 0.836505 14.4258 0.841011 14.3988 0.841011C14.3222 0.845517 14.2546 0.850023 14.196 0.854529C14.1555 0.859035 14.1014 0.86354 14.0653 0.86354C14.0608 0.86354 14.0563 0.86354 14.0518 0.86354C14.0834 0.859035 14.1194 0.859035 14.1555 0.854529C14.0203 0.868046 13.9392 0.877058 13.9392 0.877058C13.9707 0.872552 14.0023 0.872552 14.0338 0.868046C13.6688 0.904094 13.056 1.00773 13.0515 1.00773C13.038 1.01224 13.0245 1.01674 13.0155 1.02125C13.0695 1.01674 13.1236 1.00322 13.1822 0.994212C13.1822 0.994212 13.1236 1.00773 13.0605 1.02575C13.0605 1.02575 13.0605 1.02575 13.0695 1.02575C13.1146 1.02125 13.1597 1.01224 13.2002 1.00773C12.9028 1.07081 12.9028 1.07532 12.8713 1.10686C12.8893 1.10235 12.9163 1.10235 12.9389 1.10686C12.9299 1.11136 12.9163 1.11587 12.9073 1.11587C12.9884 1.11587 12.9929 1.11587 13.029 1.09334C13.0515 1.10686 13.0741 1.12038 13.5201 1.03026C13.5246 1.03026 13.9752 0.953658 14.2546 0.940141C14.1465 0.958164 14.0383 0.971682 13.9347 0.989706C13.7905 1.01674 13.7905 1.01674 13.4616 1.08884C13.4796 1.09334 13.5021 1.10235 13.5201 1.10686C13.4345 1.09334 13.3309 1.1384 13.1236 1.22852C13.1326 1.22852 13.1461 1.22401 13.1552 1.22401C13.1597 1.23302 13.1642 1.24654 13.1642 1.25555C12.5018 1.46283 12.4162 1.50788 12.3892 1.5214C12.3982 1.52591 12.4117 1.52591 12.4207 1.53041C12.4162 1.53943 12.4072 1.54844 12.4027 1.55745C12.4432 1.56195 12.4838 1.57097 12.5243 1.57547C12.5198 1.57998 12.5108 1.58899 12.5018 1.598C12.5784 1.61603 12.6009 1.5935 12.6235 1.57547C12.6325 1.57547 12.646 1.57998 12.655 1.57998C12.6595 1.63405 12.6595 1.63405 12.6775 1.6701C12.6054 1.83231 12.4297 1.70614 12.3126 1.7512C12.3171 1.76021 12.3216 1.77373 12.3216 1.78274C12.236 1.87286 12.0467 1.80077 12.0152 1.96749C12.0062 1.97199 11.9971 1.981 11.9881 1.98551C11.9881 1.98551 11.9881 1.98551 11.9701 1.99903C11.9521 1.99903 11.925 1.99002 11.9115 1.9765C11.8935 1.98551 11.871 1.99452 11.853 2.00353C11.871 2.00804 11.8845 2.01254 11.9025 2.02156C11.898 2.02156 11.8935 2.02606 11.889 2.03057C11.871 2.02606 11.8484 2.02156 11.8304 2.01254C11.8124 2.02156 11.7899 2.03958 11.7764 2.0576C11.7313 2.04859 11.6817 2.03958 11.6367 2.03507C11.6547 2.02606 11.6817 2.01254 11.6998 2.00804C11.6232 2.00353 11.5691 2.0531 11.5015 2.07112C11.4925 2.06211 11.4835 2.0531 11.4745 2.04859C11.4654 2.0531 11.4519 2.0531 11.4429 2.0576C11.3934 2.08464 11.3528 2.1297 11.2987 2.15223C11.0554 2.30543 11.0554 2.30543 11.0239 2.33697L11.0194 2.35499C10.9202 2.38653 10.9157 2.39104 10.8076 2.48566C10.8121 2.50369 10.8301 2.52622 10.8481 2.53973C10.8617 2.52622 10.8887 2.5127 10.9067 2.5127C10.8436 2.54875 10.8436 2.54875 10.8301 2.58029C10.6859 2.63886 10.6994 2.69744 10.7039 2.72898C10.7039 2.72898 10.5147 2.83262 10.4426 2.85515L10.4111 2.87317L10.3885 2.88218C10.2669 2.95878 10.2669 2.95878 10.2534 2.96329C10.2443 2.9678 10.2308 2.97681 10.2218 2.98131C10.2173 2.98582 10.2128 2.98582 10.2083 2.99032C10.1723 3.00835 10.1723 3.00835 10.0416 3.17957C10.0461 3.18858 10.0551 3.2021 10.0596 3.21111C10.0821 3.21562 10.1092 3.22013 10.1272 3.22463C10.0957 3.26969 10.0371 3.29222 10.0281 3.3553C10.0371 3.36431 10.0461 3.37333 10.0506 3.37783C10.0461 3.38684 10.0371 3.39586 10.0326 3.40487C10.01 3.34629 9.98751 3.32827 9.89289 3.38684L9.88838 3.39135L9.86585 3.40937L9.82079 3.4319L9.79376 3.45443L9.77123 3.47246C9.7487 3.48147 9.71716 3.49949 9.70364 3.52202L9.66759 3.55356C9.65407 3.56257 9.63605 3.57159 9.62253 3.5806L9.58649 3.60313C9.54593 3.63016 9.50538 3.6617 9.46032 3.68423C9.43328 3.70226 9.43328 3.70226 9.35218 3.71577C9.34767 3.76083 9.34767 3.76083 9.35218 3.81941C9.26657 3.86897 9.24854 4.00866 9.11337 3.99063C9.12238 3.92755 9.12238 3.92305 9.13589 3.87799C9.12688 3.87348 9.11787 3.86447 9.10886 3.85546C8.96467 3.89601 8.89258 4.0402 8.77092 4.10779H8.76641L8.7619 4.11229L8.7574 4.1168L8.75289 4.12131L8.74839 4.12581L8.74388 4.13032C8.74388 4.13032 8.73938 4.13032 8.72135 4.14383C8.54112 4.28352 8.54112 4.28352 7.87875 5.21624C7.88776 5.23426 7.89227 5.2658 7.89677 5.28383C7.89677 5.30185 7.89677 5.32438 7.89677 5.3424C7.87875 5.35142 7.85622 5.36944 7.8382 5.38296C7.8382 5.36043 7.83369 5.33339 7.82918 5.31086C7.82918 5.29734 7.82918 5.28383 7.82918 5.27482C7.62191 5.42802 7.62191 5.42802 7.43266 5.77497C7.45069 5.76596 7.47772 5.75244 7.49124 5.73892C7.50927 5.75244 7.5363 5.76145 7.55883 5.76596C7.6129 5.73442 7.65796 5.69386 7.71203 5.66683C7.70752 5.68936 7.71203 5.7209 7.71654 5.73892C7.72555 5.73892 7.73907 5.73892 7.74808 5.73892C7.74808 5.74793 7.74357 5.76596 7.73907 5.77497C7.74808 5.77497 7.7616 5.77046 7.77511 5.77046C7.77061 5.77948 7.7661 5.79299 7.7616 5.80201C7.77962 5.79299 7.80215 5.77497 7.81567 5.75695C7.82017 5.75695 7.82017 5.75695 7.82468 5.76145C7.82468 5.77046 7.82468 5.78398 7.82468 5.78849C7.82468 5.78849 7.82918 5.78849 7.83369 5.77948C7.8382 5.77497 7.8382 5.77497 7.8382 5.77497C7.8382 5.77497 7.8427 5.77948 7.8427 5.78398C7.8427 5.78849 7.84721 5.79299 7.84721 5.79299C7.84721 5.7975 7.86523 5.80201 7.86974 5.7975C7.86974 5.7975 7.88325 5.77046 7.88776 5.74793C7.88776 5.74793 7.89677 5.70738 7.89227 5.70288C7.88776 5.68936 7.88776 5.68485 7.88325 5.68035C7.9193 5.6443 7.98689 5.56319 8.05448 5.48209C8.04997 5.4911 8.04547 5.50011 8.04096 5.51813C8.04547 5.52715 8.05448 5.54517 8.03646 5.54517C8.00942 5.54517 8.00942 5.59924 8.00942 5.59924C8.02294 5.59473 8.04096 5.59023 8.05448 5.58122C8.05898 5.58572 8.05898 5.59023 8.06349 5.59023C8.07701 5.58122 8.07701 5.58122 8.09503 5.58122C8.10404 5.5677 8.10404 5.54967 8.11756 5.54066C8.10404 5.57671 8.09053 5.62177 8.02294 5.62628C8.01843 5.60825 8.01843 5.60825 8.01393 5.60825C7.97337 5.59473 8.00491 5.74793 8.00491 5.74793C8.04096 5.73892 8.0725 5.69837 8.07701 5.68936H8.08151C8.08602 5.73442 8.02744 5.74343 8.02744 5.74343C8.00041 5.78849 8.04096 5.82453 8.04997 5.83355C8.05448 5.83355 8.0725 5.80201 8.09053 5.77497C8.09053 5.79299 8.09053 5.7975 8.08602 5.81552C8.08602 5.81552 8.1491 5.73892 8.15361 5.7209C8.15811 5.7209 8.17614 5.72991 8.18064 5.72991C8.18064 5.73892 8.18064 5.74343 8.18064 5.75244C8.19416 5.74793 8.19867 5.73442 8.20768 5.72991L8.21219 5.73442C8.21219 5.74343 8.20768 5.75695 8.17163 5.77497L8.16713 5.77046C8.16713 5.77046 8.16713 5.79299 8.16713 5.80201C8.17163 5.80201 8.17163 5.80201 8.18064 5.7975C8.23471 5.75695 8.23471 5.75695 8.23922 5.76145C8.23471 5.77948 8.21219 5.80201 8.21219 5.80201C8.21219 5.80201 8.12207 5.85608 8.11306 5.85608C8.10855 5.8741 8.10855 5.8741 8.10404 5.87861L8.09503 5.8741C8.07701 5.88311 8.07701 5.88311 8.0725 5.87861C8.08602 5.9507 8.11306 5.95521 8.11306 5.95521C8.11756 5.9507 8.11756 5.9507 8.12207 5.94169H8.12657C8.13108 5.95971 8.12207 5.97323 8.13108 5.99125C8.13559 5.99125 8.13559 5.99125 8.17163 5.95971C8.18966 5.96872 8.18966 5.96872 8.18966 5.96872C8.18966 5.98224 8.16262 6.00477 8.15361 6.00928C8.1491 6.00928 8.1446 6.00477 8.14009 6.00477C8.10855 6.04983 8.16262 6.06335 8.19416 6.06785C8.19867 6.07687 8.19867 6.08137 8.20317 6.09038C8.2212 6.09038 8.23471 6.06785 8.23922 6.05884C8.25274 6.04082 8.25724 6.04532 8.27977 6.05884L8.28428 6.05434C8.28428 6.03181 8.27527 6.01378 8.27527 5.99576C8.27527 5.99125 8.28428 5.96872 8.2978 5.97774C8.31582 5.98675 8.31131 6.00477 8.32033 6.01829C8.33835 6.00477 8.32483 5.98224 8.32934 5.96872C8.34286 5.97774 8.35187 5.99576 8.36539 6.00027C8.41495 5.97323 8.34736 5.89212 8.40594 5.87861C8.40594 5.88311 8.40594 5.88311 8.40594 5.90114H8.41044C8.41946 5.87861 8.41946 5.86509 8.41946 5.85608C8.41946 5.83805 8.40594 5.82904 8.40143 5.81102C8.39693 5.78849 8.39693 5.77948 8.40594 5.74793C8.41495 5.74793 8.41946 5.74343 8.42396 5.73892C8.42396 5.77046 8.40594 5.7975 8.41495 5.82904C8.41946 5.82904 8.41946 5.82904 8.42396 5.83355C8.44199 5.81102 8.451 5.77948 8.46452 5.75244C8.48705 5.71189 8.51859 5.68035 8.54112 5.63979C8.55013 5.62628 8.55463 5.61276 8.55914 5.60375C8.55914 5.60375 8.55463 5.60825 8.55013 5.60825C8.55013 5.60375 8.55914 5.59473 8.55914 5.58572C8.55914 5.58572 8.54562 5.50912 8.5276 5.50912L8.52309 5.50462H8.51859C8.51408 5.51813 8.51859 5.53165 8.50957 5.54066C8.50056 5.53616 8.50056 5.52264 8.49155 5.51813C8.47353 5.52264 8.46452 5.54066 8.451 5.54968C8.44649 5.52715 8.46452 5.50912 8.451 5.48659L8.44649 5.4911C8.43297 5.47307 8.451 5.45505 8.44199 5.44153C8.42847 5.42351 8.42847 5.42351 8.41946 5.42351C8.41044 5.43252 8.41044 5.43703 8.40594 5.43703C8.43748 5.39197 8.43748 5.39197 8.43748 5.38746C8.43748 5.37845 8.43748 5.3424 8.40143 5.3424C8.39242 5.3424 8.3744 5.39197 8.38792 5.40999C8.39693 5.42351 8.39242 5.44604 8.38792 5.45055C8.35637 5.43703 8.35637 5.43703 8.36539 5.36493C8.36539 5.35592 8.36539 5.35592 8.36539 5.35142C8.35637 5.35592 8.34736 5.34691 8.33835 5.34691C8.32934 5.34691 8.32033 5.36043 8.30681 5.36043H8.3023C8.3023 5.3424 8.2978 5.30636 8.29329 5.29734C8.28879 5.29734 8.28879 5.29734 8.26175 5.22525C8.28879 5.19371 8.3023 5.17118 8.30681 5.17118C8.31582 5.15766 8.31582 5.15766 8.2978 5.1126H8.30681C8.34736 5.04952 8.34736 5.04952 8.36088 5.04501C8.36088 5.04952 8.36539 5.05403 8.36539 5.05403C8.32033 5.11711 8.32033 5.11711 8.32033 5.13513C8.32483 5.13513 8.32934 5.13513 8.32934 5.13964C8.35637 5.12161 8.36539 5.09007 8.39242 5.06754C8.38792 5.12612 8.27977 5.17118 8.33384 5.22976C8.33835 5.22976 8.34286 5.22976 8.34736 5.22976C8.35187 5.22525 8.36088 5.22074 8.36539 5.21624C8.39242 5.3424 8.4555 5.27482 8.46001 5.27482C8.49155 5.23877 8.49606 5.1892 8.52309 5.15316H8.5321C8.52309 5.19371 8.49606 5.22976 8.48705 5.27031C8.49155 5.27031 8.49606 5.27482 8.49606 5.27482C8.57266 5.25679 8.57266 5.25679 8.64025 5.13964C8.64926 5.15766 8.64475 5.17569 8.64926 5.1892C8.64926 5.1892 8.67629 5.17569 8.69882 5.16217C8.69882 5.17569 8.70333 5.19371 8.71234 5.20723C8.67179 5.2658 8.67179 5.27031 8.6808 5.28383C8.6853 5.28383 8.6853 5.28383 8.68981 5.28833C8.6808 5.30185 8.6808 5.30636 8.67629 5.31537C8.65376 5.29284 8.6042 5.25679 8.55463 5.31537C8.48254 5.29734 8.47803 5.39197 8.49155 5.419C8.5276 5.48209 8.5276 5.48209 8.54562 5.48209C8.55463 5.48209 8.57716 5.48659 8.58167 5.4911C8.61321 5.52715 8.62673 5.57671 8.67179 5.59924C8.69882 5.61276 8.70333 5.60375 8.7619 5.54517C8.7619 5.54968 8.76641 5.55418 8.76641 5.55418C8.7619 5.57671 8.73938 5.60375 8.70783 5.62628C8.7574 5.63529 8.73036 5.68035 8.73036 5.68035C8.72586 5.68485 8.72135 5.68485 8.72135 5.68485C8.69432 5.68035 8.68981 5.6488 8.66278 5.6443C8.62673 5.6443 8.59969 5.66683 8.56365 5.67584C8.56365 5.68035 8.55914 5.68485 8.55914 5.68485C8.49606 5.70738 8.41946 5.87861 8.46001 5.92366C8.46452 5.92366 8.46902 5.92366 8.47353 5.92366C8.47353 5.92817 8.47353 5.93268 8.47353 5.93718C8.47803 5.93718 8.48254 5.94169 8.48705 5.94169C8.49606 5.93268 8.50056 5.92366 8.51408 5.88311C8.51859 5.88311 8.52309 5.88311 8.52309 5.88762C8.52309 5.89663 8.5276 5.91015 8.5276 5.91916C8.6042 5.93718 8.55463 5.80651 8.6042 5.77046C8.6087 5.82454 8.6087 5.82453 8.61321 5.83355C8.62222 5.83355 8.63123 5.83805 8.63574 5.84256C8.62673 5.88762 8.55013 5.89212 8.56815 5.9507C8.57266 5.9507 8.57716 5.9507 8.58167 5.9507C8.58617 5.94619 8.59519 5.93718 8.59969 5.93718C8.61321 5.96422 8.58167 5.99125 8.59519 6.02279C8.59969 6.02279 8.6087 6.01829 8.61772 6.01378C8.69432 5.98224 8.69432 5.98224 8.70333 5.94169C8.72135 5.85157 8.72135 5.85157 8.73036 5.84256C8.73487 5.84256 8.73938 5.84706 8.73938 5.84706C8.6808 6.14445 8.57266 6.05884 8.56815 6.05884C8.55013 6.03181 8.51408 6.01829 8.48705 5.99576C8.38341 6.04082 8.39693 6.07687 8.43748 6.17149C8.451 6.16698 8.4555 6.16698 8.47353 6.17149C8.48254 6.19852 8.48254 6.20754 8.44199 6.22105C8.40143 6.23457 8.27977 6.34722 8.34286 6.46437C8.35637 6.46888 8.3789 6.47338 8.38341 6.38327C8.39693 6.4058 8.38341 6.45085 8.41946 6.45085C8.42847 6.44184 8.43748 6.43283 8.44199 6.39678C8.44649 6.39678 8.44649 6.39678 8.46902 6.41931C8.50056 6.4058 8.50056 6.4058 8.5276 6.35172C8.5321 6.36074 8.53661 6.37425 8.54562 6.38327C8.56365 6.37876 8.59969 6.37425 8.59969 6.37425C8.63123 6.34722 8.63123 6.34722 8.63123 6.34271C8.63123 6.3337 8.62673 6.32469 8.62222 6.32018C8.62222 6.31568 8.62673 6.31117 8.62673 6.31117C8.64475 6.31568 8.64926 6.31568 8.66278 6.31568C8.66728 6.29765 8.66278 6.27512 8.67179 6.2526C8.67629 6.2571 8.6808 6.26611 8.6808 6.27512C8.6853 6.27963 8.69432 6.28414 8.70333 6.28864C8.71234 6.28414 8.72135 6.27512 8.72586 6.27062L8.73036 6.26161C8.7574 6.27062 8.77092 6.30216 8.79795 6.30667C8.834 6.27963 8.84752 6.21204 8.81147 6.20754C8.81147 6.20754 8.79345 6.20303 8.79795 6.176C8.80246 6.176 8.80696 6.17599 8.81147 6.17149C8.84301 6.20303 8.84301 6.20303 8.89258 6.18501C8.89708 6.18951 8.89708 6.18951 8.90159 6.19402C8.89708 6.24809 8.89708 6.24809 8.90159 6.2571C8.91961 6.26161 8.91961 6.26161 8.94214 6.23908C8.96918 6.1805 9.00973 6.13544 9.03226 6.07687C9.03676 6.07687 9.04127 6.07687 9.04578 6.07687C9.04578 6.08137 9.05028 6.08588 9.05028 6.09038C9.05479 6.09939 9.05479 6.09939 9.05479 6.09939C9.10886 6.01378 9.09084 5.99576 9.04578 5.94169C9.04127 5.94169 9.03676 5.94169 9.03676 5.94169C9.02775 5.95971 9.02325 5.98224 9.01424 6.00027C9.01424 6.00027 8.97819 6.00026 8.96918 5.99125C8.98269 5.95971 8.97368 5.91916 8.9872 5.88762C8.9872 5.88762 9.0638 5.83805 9.00973 5.75244C9.00072 5.73892 9.00072 5.73892 9.06831 5.67584C9.09985 5.68035 9.13139 5.63078 9.14491 5.59924C9.14491 5.59023 9.1404 5.58122 9.1404 5.57671C9.1404 5.5722 9.13589 5.5677 9.13589 5.56319C9.12688 5.54066 9.14491 5.50011 9.10886 5.4911C9.11336 5.46406 9.15392 5.45956 9.15842 5.42351L9.15392 5.40999C9.15842 5.40549 9.16293 5.39647 9.16744 5.39197C9.14941 5.38296 9.13139 5.37845 9.11337 5.36944C9.09534 5.37395 9.09534 5.37395 9.07732 5.36944C9.07732 5.36944 9.08182 5.36493 9.08633 5.36493C9.14491 5.31537 9.14491 5.31537 9.12688 5.27482C9.11337 5.27031 9.11337 5.27031 9.03226 5.30185C9.01874 5.29284 9.01874 5.29284 9.01874 5.27482C9.04578 5.2658 9.07732 5.2658 9.10435 5.25229L9.11787 5.22525C9.11787 5.22525 9.14491 5.20723 9.16744 5.1847C9.27558 5.16217 9.37921 5.13063 9.48736 5.09909C9.48285 5.10359 9.48285 5.1126 9.47834 5.11711V5.13063L9.48285 5.17118L9.47384 5.19371C9.4468 5.23426 9.4468 5.23426 9.43328 5.23426C9.42878 5.24327 9.41526 5.25229 9.41075 5.2613L9.40625 5.27482C9.39724 5.29284 9.39724 5.29284 9.38372 5.30636C9.35218 5.31987 9.35218 5.31987 9.35218 5.34691V5.36043C9.35218 5.36493 9.34767 5.37394 9.34767 5.37845C9.34317 5.37845 9.33415 5.37845 9.32965 5.37845C9.32514 5.38296 9.32064 5.39197 9.31613 5.39647V5.40999L9.32064 5.43252L9.31613 5.45055V5.45956C9.32064 5.47307 9.32064 5.47307 9.3657 5.48659L9.3702 5.4956C9.41977 5.4956 9.50538 5.48209 9.50538 5.48209C9.50988 5.47758 9.50988 5.47758 9.50988 5.47758C9.51439 5.47307 9.5189 5.46406 9.5234 5.45956L9.54143 5.47307C9.54593 5.47307 9.55044 5.47758 9.55494 5.47758C9.55945 5.4956 9.55945 5.4956 9.56396 5.50011C9.58198 5.4911 9.58198 5.4911 9.58649 5.4911C9.6 5.47758 9.5955 5.45505 9.61352 5.44153C9.61803 5.44604 9.62704 5.45055 9.63154 5.45055C9.64506 5.44153 9.66309 5.43252 9.6721 5.419C9.69012 5.419 9.69012 5.419 9.70364 5.35592C9.72166 5.34691 9.7532 5.35592 9.78024 5.36944C9.78024 5.37395 9.77573 5.38296 9.77573 5.38746C9.77573 5.39197 9.77573 5.39197 9.77573 5.39197C9.77123 5.419 9.77123 5.419 9.64506 5.4956C9.63154 5.50912 9.63154 5.50912 9.62704 5.51813C9.61352 5.59023 9.53692 5.58572 9.50087 5.63529L9.49637 5.6443C9.58198 5.59023 9.6721 5.54066 9.75771 5.48659C9.6721 5.54066 9.58198 5.59473 9.49637 5.6488C9.48736 5.66683 9.49637 5.67133 9.50988 5.68035C9.53241 5.68485 9.53241 5.68485 9.54143 5.69386L9.55044 5.69837C9.55494 5.69837 9.55945 5.69386 9.55945 5.69386C9.56846 5.68936 9.56846 5.68936 9.59099 5.6488H9.6L9.5955 5.66232L9.60451 5.67584L9.61803 5.68485L9.62704 5.68936C9.65858 5.67584 9.68111 5.66232 9.68561 5.65782H9.69463C9.72617 5.63979 9.72617 5.63979 9.73969 5.6488V5.66232L9.72166 5.68035H9.70814L9.70364 5.68485L9.69463 5.68936C9.69463 5.69837 9.69463 5.69837 9.6721 5.72541V5.73892V5.75244H9.68111C9.69913 5.77497 9.69913 5.77497 9.72166 5.78398C9.76672 5.78398 9.76672 5.78398 9.77123 5.78849C9.78925 5.78398 9.86585 5.74343 9.87036 5.72541C9.83882 5.70738 9.83882 5.69837 9.83431 5.68485C9.84332 5.68485 9.84783 5.68485 9.85684 5.68035C9.87937 5.69837 9.87937 5.69837 9.88838 5.69837L9.89289 5.69386C9.88387 5.6443 9.88387 5.6443 9.91992 5.63979L9.92443 5.65331C9.92893 5.65782 9.93344 5.66232 9.93795 5.66683C9.96498 5.65331 9.97399 5.62177 9.99652 5.59924C9.99202 5.59023 9.99652 5.57671 9.99652 5.5677C10.0145 5.54968 10.0326 5.5677 10.0551 5.5677C10.0551 5.5677 10.0686 5.51813 10.0641 5.4956C10.0731 5.4911 10.0731 5.4911 10.1137 5.4956C10.1587 5.47758 10.1587 5.47758 10.1632 5.47307C10.1768 5.47758 10.1858 5.48209 10.2173 5.45956C10.2443 5.43703 10.2443 5.43703 10.3029 5.44153C10.3164 5.44153 10.3164 5.44153 10.339 5.419C10.366 5.419 10.366 5.419 10.4066 5.43703L10.4246 5.43252L10.4426 5.42351C10.4471 5.419 10.4516 5.419 10.4561 5.4145C10.4606 5.419 10.4606 5.42351 10.4651 5.42351C10.4696 5.42802 10.4741 5.43252 10.4787 5.43703C10.4832 5.43703 10.4832 5.43703 10.4832 5.43703C10.4922 5.43703 10.5012 5.44153 10.5057 5.44153C10.5147 5.45055 10.5147 5.45055 10.5237 5.47307L10.5372 5.4911C10.5733 5.51363 10.5733 5.51363 10.5823 5.51813C10.6769 5.50912 10.6769 5.50912 10.722 5.54066H10.7355C10.7941 5.54517 10.7941 5.54517 10.8121 5.55418C10.8031 5.59023 10.8842 5.62628 10.9202 5.63979C10.9247 5.6443 10.9247 5.63979 10.9247 5.63979C10.9608 5.66232 10.9608 5.66232 10.9788 5.68485C10.9968 5.69837 11.0239 5.68485 11.0374 5.69837C11.0599 5.7209 11.0644 5.75244 11.0824 5.77948C11.0824 5.77497 11.0869 5.77046 11.0869 5.77046C11.105 5.77046 11.105 5.77046 11.132 5.75244C11.1455 5.75695 11.1455 5.75695 11.1635 5.77497C11.2086 5.83355 11.2086 5.83355 11.2401 5.82453C11.2492 5.82904 11.2537 5.82904 11.2537 5.84706H11.2447L11.2401 5.85157C11.2447 5.8741 11.2537 5.91015 11.2537 5.91916L11.2582 5.93718C11.2582 5.95521 11.2537 5.96872 11.2537 5.98675L11.2582 5.99125C11.2897 5.97774 11.2717 5.94169 11.2852 5.92366C11.2897 5.92817 11.2942 5.92817 11.2987 5.93268C11.2987 5.94169 11.3032 5.9507 11.3032 5.95971L11.2987 5.97774C11.2942 6.00928 11.2942 6.00928 11.2852 6.02279L11.2762 6.03631C11.2402 6.1039 11.3258 6.08588 11.3258 6.08588C11.3438 6.08137 11.3528 6.05884 11.3708 6.05434C11.3753 6.05434 11.3753 6.05884 11.3798 6.05884C11.3888 6.05434 11.4294 6.03631 11.4384 6.00928C11.4474 5.97323 11.4204 5.94169 11.4249 5.90564L11.3888 5.88311C11.3888 5.88311 11.3258 5.86058 11.3168 5.83355C11.3213 5.83355 11.3258 5.83355 11.3258 5.83355C11.3348 5.84706 11.3573 5.88311 11.4339 5.89212C11.4384 5.88311 11.4384 5.86959 11.4429 5.86058C11.4474 5.86058 11.4474 5.86058 11.4519 5.86058C11.4654 5.87861 11.4609 5.90564 11.479 5.91916C11.488 5.91465 11.4925 5.91465 11.5015 5.89663C11.506 5.89663 11.515 5.89663 11.5195 5.90114C11.524 5.89663 11.533 5.89212 11.5375 5.88311C11.542 5.88762 11.5511 5.89663 11.5556 5.90114L11.5826 5.90564C11.5826 5.90564 11.5826 5.90564 11.6186 5.85157C11.6277 5.85157 11.6367 5.85157 11.6457 5.85608C11.6457 5.86509 11.6412 5.8741 11.6412 5.88311C11.6457 5.88762 11.6547 5.89663 11.6592 5.90114C11.6547 5.93268 11.6547 5.93268 11.6592 5.9507C11.7088 5.94619 11.7088 5.94619 11.8034 5.95521C11.8259 5.98224 11.8259 5.98224 11.8439 5.99576L11.8665 6.00477L11.88 6.01378L11.8755 6.03631L11.8665 6.04082L11.853 6.04532L11.8439 6.04983H11.8259C11.7944 6.06335 11.7944 6.06335 11.7673 6.05884L11.7538 6.06335C11.7268 6.06785 11.6952 6.06335 11.6682 6.06785C11.6952 6.09939 11.7223 6.13544 11.7493 6.16698C11.8034 6.17149 11.8079 6.17149 11.8304 6.14896C11.862 6.13544 11.862 6.13544 11.8665 6.13544C11.8755 6.12192 11.88 6.10841 11.889 6.09939L11.9025 6.1039L11.9205 6.09038C11.9386 6.07687 11.9521 6.05434 11.9746 6.04532C11.9926 6.06335 12.0197 6.09038 12.0197 6.09038C12.0152 6.09939 12.0152 6.11291 12.0152 6.12192L12.0332 6.13094L12.0467 6.13995V6.16248C12.0377 6.19402 12.0332 6.21204 12.0557 6.22105C12.0602 6.22105 12.0647 6.21655 12.0647 6.21655C12.0873 6.19852 12.1143 6.1805 12.1368 6.16248C12.1368 6.16698 12.1368 6.16698 12.1413 6.17149C12.1188 6.18951 12.0963 6.20303 12.0782 6.22105C12.0918 6.22556 12.0918 6.22556 12.1188 6.24358L12.1233 6.21204C12.1323 6.23007 12.1458 6.2526 12.1548 6.27062C12.0963 6.27963 12.0963 6.27963 12.0918 6.27963H12.0828L12.0873 6.29765C12.0963 6.30216 12.1053 6.31117 12.1143 6.32018C12.1188 6.32018 12.1233 6.31568 12.1278 6.31568C12.1278 6.31568 12.1278 6.31568 12.1323 6.32018C12.1368 6.32469 12.1368 6.32469 12.1413 6.3292C12.1413 6.34271 12.1368 6.36074 12.1368 6.37425C12.1503 6.38327 12.1684 6.38327 12.1819 6.39228C12.1819 6.40129 12.1819 6.4103 12.1819 6.41931C12.1864 6.42382 12.1954 6.43283 12.1999 6.43734C12.2134 6.44184 12.2269 6.44184 12.236 6.45085C12.263 6.45987 12.263 6.45987 12.299 6.45085C12.3035 6.44184 12.308 6.43283 12.3126 6.42833C12.3171 6.42833 12.3216 6.43283 12.3261 6.43283L12.3396 6.44184L12.3441 6.44635L12.3486 6.45987L12.3576 6.46437H12.3801L12.3846 6.46888L12.3801 6.4824L12.3711 6.49141C12.3666 6.49591 12.3576 6.50042 12.3531 6.50493L12.3486 6.51394C12.3486 6.51844 12.3531 6.52295 12.3576 6.52746C12.3666 6.52746 12.3756 6.52295 12.3801 6.51844C12.3846 6.51844 12.3892 6.52295 12.3937 6.52295C12.3892 6.52746 12.3801 6.53196 12.3711 6.53647C12.3666 6.55449 12.3486 6.559 12.3351 6.56801C12.3035 6.56801 12.3035 6.56801 12.29 6.56801C12.2765 6.56801 12.263 6.57702 12.254 6.57702C12.245 6.59504 12.245 6.59504 12.1909 6.60406L12.1774 6.61307L12.1413 6.63109C12.1368 6.6356 12.1323 6.6401 12.1278 6.64911C12.1233 6.65362 12.1188 6.66263 12.1143 6.66714H12.1098C12.1008 6.67615 12.1053 6.68516 12.1053 6.70319C12.1053 6.73022 12.0963 6.75275 12.0918 6.76627C12.0873 6.77979 12.0873 6.77979 12.0873 6.78429C12.0918 6.78429 12.0918 6.77979 12.0963 6.77979C12.1008 6.77979 12.1008 6.78429 12.1053 6.78429C12.1053 6.78429 12.1098 6.78429 12.1143 6.77979C12.1188 6.77979 12.1413 6.75726 12.1413 6.75726L12.1548 6.73923C12.1548 6.73473 12.1594 6.73022 12.1594 6.73022C12.1639 6.72572 12.1684 6.72572 12.1729 6.72572C12.1774 6.72121 12.1819 6.7167 12.1864 6.7122C12.1909 6.7122 12.1909 6.7122 12.1954 6.7122C12.1954 6.7122 12.1999 6.70769 12.2044 6.70769L12.2089 6.70319C12.2405 6.66263 12.2405 6.66263 12.263 6.65813C12.281 6.65362 12.281 6.65362 12.29 6.63109C12.3126 6.62659 12.3126 6.62659 12.3261 6.62659L12.3306 6.6401L12.3351 6.64461C12.3711 6.63109 12.3892 6.59054 12.4252 6.57702C12.4252 6.58153 12.4297 6.58603 12.4297 6.59054C12.4162 6.59504 12.4117 6.59955 12.4027 6.61757L12.3982 6.62208C12.3982 6.62208 12.3982 6.62208 12.3982 6.6356C12.3937 6.6401 12.3846 6.64461 12.3801 6.65362C12.3576 6.64461 12.3306 6.66263 12.308 6.6401C12.29 6.66263 12.254 6.66714 12.236 6.68967C12.2314 6.69868 12.2269 6.70769 12.2224 6.7167L12.2179 6.72121C12.2314 6.73923 12.245 6.75726 12.2675 6.76176C12.2855 6.75726 12.29 6.75726 12.3035 6.76176C12.308 6.78429 12.308 6.78429 12.299 6.81583C12.3171 6.83836 12.3396 6.8654 12.3576 6.88342C12.3576 6.84737 12.3576 6.84737 12.3621 6.82935C12.3756 6.75726 12.3846 6.70319 12.4342 6.6356C12.4387 6.6401 12.4477 6.6401 12.4522 6.64461C12.4522 6.64911 12.4522 6.64912 12.4207 6.68516C12.3756 6.77077 12.3756 6.77528 12.3711 6.80682V6.83386C12.3711 6.85188 12.3666 6.87892 12.3621 6.89694C12.3756 6.91496 12.3937 6.93299 12.4117 6.95101C12.4297 6.93299 12.4432 6.91496 12.4612 6.90144C12.4658 6.90144 12.4703 6.90595 12.4703 6.91046C12.4612 6.942 12.4567 6.95101 12.4252 6.97354C12.4207 6.97805 12.4207 6.97805 12.4162 6.98255L12.4117 6.98706C12.4072 6.99156 12.4072 7.00508 12.4027 7.00959L12.4117 7.0186L12.4252 7.04113L12.4522 7.03662C12.4612 7.03662 12.4612 7.03662 12.4703 7.03662C12.5469 7.02761 12.5153 6.93299 12.5694 6.90595L12.6009 6.88793L12.6099 6.89243C12.6099 6.89694 12.6054 6.90145 12.6054 6.90595C12.5649 6.91947 12.5649 6.91947 12.5469 6.9465V6.95552C12.5514 7.05014 12.5514 7.05014 12.628 7.12674C12.6325 7.12674 12.637 7.12674 12.6415 7.12674C12.6415 7.12223 12.6415 7.12223 12.646 7.09069C12.6775 7.06816 12.6775 7.06816 12.6956 7.07718C12.6956 7.08168 12.7001 7.08619 12.7001 7.09069L12.6865 7.10872L12.6775 7.12674L12.6685 7.14026C12.673 7.21686 12.7136 7.23038 12.7451 7.23038C12.7451 7.16279 12.7361 7.13575 12.7226 7.10421C12.7271 7.0952 12.7316 7.08168 12.7316 7.07267L12.7586 7.06366C12.7451 7.03212 12.7136 7.0186 12.7091 6.98255C12.7316 6.99607 12.7541 7.00508 12.7722 7.01409C12.7947 7.00508 12.8127 6.99156 12.8397 6.99156C12.8668 7.00057 12.8803 7.02761 12.9073 7.03662C12.9209 7.03662 12.9344 7.04113 12.9479 7.04563C12.9479 7.05014 12.9524 7.05465 12.9569 7.05915C12.9479 7.06816 12.9479 7.06816 12.8848 7.09069C12.8938 7.10872 12.9073 7.12674 12.9073 7.14927C12.9028 7.15378 12.8938 7.15828 12.8893 7.16729L12.8758 7.18532L12.8893 7.21235C12.8848 7.22587 12.8848 7.22587 12.8713 7.24389V7.25291C12.8893 7.31148 12.8938 7.31148 12.9118 7.30247C12.9163 7.29346 12.9208 7.28445 12.9254 7.27994C12.9344 7.27994 12.9434 7.27543 12.9479 7.27093C12.9524 7.27093 12.9569 7.27543 12.9569 7.27543L12.9614 7.29346L12.9659 7.31148H12.9929C12.9975 7.32049 13.002 7.33401 13.0065 7.34302C13.02 7.33852 13.02 7.33852 13.056 7.32049C13.056 7.32951 13.0515 7.33852 13.047 7.34753C13.1101 7.34302 13.1101 7.34302 13.1326 7.32049C13.1371 7.32049 13.1416 7.32049 13.1461 7.32049C13.1507 7.32951 13.1507 7.33852 13.1552 7.34753C13.1597 7.35204 13.1597 7.35203 13.1642 7.35654L13.1867 7.36555L13.1957 7.38358L13.1912 7.4016C13.1957 7.46919 13.2768 7.44215 13.2948 7.43314C13.3084 7.44215 13.3129 7.45567 13.3264 7.46468L13.3399 7.46919L13.3624 7.46468C13.3759 7.45116 13.3805 7.43314 13.394 7.41962C13.394 7.42413 13.394 7.42864 13.394 7.43314C13.3985 7.43314 13.403 7.43765 13.403 7.44215C13.4165 7.43765 13.421 7.43314 13.439 7.44215C13.4345 7.45116 13.43 7.46468 13.43 7.47369C13.439 7.47369 13.448 7.47369 13.4571 7.47369C13.4661 7.48271 13.4751 7.49622 13.4841 7.50524C13.4931 7.50524 13.5021 7.50073 13.5066 7.49622C13.5066 7.49622 13.5066 7.49622 13.5111 7.49622C13.5472 7.49622 13.5472 7.49622 13.5562 7.50974C13.5562 7.51875 13.5607 7.52776 13.5607 7.53227C13.5742 7.54128 13.5742 7.54128 13.5967 7.53678L13.6057 7.52326V7.50073C13.6057 7.49622 13.6057 7.49172 13.6057 7.48721C13.6103 7.48721 13.6148 7.49172 13.6193 7.49172C13.6328 7.49622 13.6463 7.50524 13.6598 7.50524L13.6553 7.51875L13.6463 7.53678C13.6688 7.55029 13.6959 7.57282 13.7184 7.58634C13.7274 7.58634 13.7409 7.58184 13.7499 7.57733C13.7635 7.54579 13.7454 7.50524 13.777 7.4782C13.7815 7.48271 13.7905 7.49172 13.7995 7.49622C13.8896 7.45567 13.8671 7.37006 13.8536 7.32951C13.8536 7.325 13.8581 7.32049 13.8626 7.32049C13.9031 7.34753 13.9031 7.34753 13.9212 7.33852C13.9212 7.32049 13.9212 7.32049 13.9212 7.28895C13.9617 7.32049 13.9572 7.37456 13.9842 7.41512C14.0113 7.41512 14.0113 7.41512 14.0563 7.36555C14.0699 7.39709 14.0834 7.39709 14.0969 7.39709C14.1014 7.39259 14.1104 7.38358 14.1149 7.37456C14.1194 7.37907 14.1239 7.39259 14.1239 7.39709C14.151 7.47369 14.1735 7.42413 14.196 7.37456C14.2005 7.37456 14.205 7.37006 14.2095 7.37006C14.214 7.37006 14.2185 7.37456 14.2231 7.37907C14.2366 7.37456 14.2366 7.37456 14.2546 7.36105C14.2591 7.36105 14.2591 7.36105 14.2861 7.38358C14.2906 7.37456 14.2906 7.36555 14.2906 7.35654C14.2636 7.33401 14.2861 7.325 14.3087 7.31599C14.3087 7.27994 14.3042 7.27543 14.2906 7.27093C14.2456 7.29346 14.2276 7.27543 14.2185 7.26642C14.2771 7.23038 14.2726 7.22136 14.2681 7.20334C14.2681 7.20334 14.2681 7.20334 14.2591 7.19883C14.2546 7.19433 14.2546 7.18982 14.2501 7.18982C14.2591 7.15378 14.2591 7.15378 14.2636 7.13575C14.2411 7.11322 14.2095 7.0997 14.1915 7.07267C14.196 7.03662 14.196 7.03662 14.1419 7.00058C14.1555 6.96903 14.1555 6.96903 14.1329 6.92397L14.1284 6.91947L14.1239 6.91496L14.1194 6.91046L14.1149 6.90595L14.1104 6.90144L14.1059 6.89694C14.1059 6.89694 14.1014 6.89243 14.0969 6.88793C14.0789 6.84287 14.0789 6.84287 13.9482 6.84287C13.9482 6.84287 13.9031 6.7933 13.9752 6.77528C14.0338 6.76176 14.0248 6.70319 13.9887 6.67164C14.0023 6.57251 13.9933 6.56801 13.9752 6.55449C13.9662 6.55449 13.9572 6.559 13.9482 6.5635C13.9257 6.55449 13.9257 6.55449 13.9167 6.54097C13.9257 6.53647 13.9347 6.53196 13.9392 6.52746C13.9392 6.51844 13.9392 6.50943 13.9392 6.50493C13.9527 6.50493 13.9662 6.50943 13.9752 6.50943C13.9617 6.43734 13.9257 6.42382 13.9031 6.41481C13.8626 6.40129 13.8446 6.45086 13.804 6.44635C13.8175 6.42382 13.8175 6.40129 13.8355 6.38327C13.8941 6.38327 13.8716 6.32469 13.8626 6.31568C13.8626 6.31568 13.7815 6.26611 13.7589 6.29315C13.7274 6.3292 13.7139 6.31117 13.6823 6.27963C13.6869 6.27512 13.6959 6.26611 13.7004 6.26611C13.7004 6.2571 13.7004 6.2571 13.7635 6.23908C13.7725 6.21204 13.7499 6.17599 13.777 6.14896C13.7725 6.14445 13.768 6.13544 13.7589 6.13094C13.7364 6.14896 13.7139 6.14445 13.7094 6.13995C13.7004 6.12643 13.7004 6.12643 13.7004 6.09939C13.831 5.99576 13.831 5.99576 13.786 5.93268C13.786 5.92366 13.7905 5.91916 13.7995 5.91015C13.786 5.88311 13.7544 5.86509 13.7499 5.83355C13.768 5.82003 13.768 5.82003 13.786 5.82003C13.822 5.93718 13.8265 5.94169 13.8355 5.94619C13.8806 5.97774 13.8896 5.9507 13.8941 5.93718C13.9031 5.91015 13.8626 5.90564 13.8581 5.88311C13.8806 5.88311 13.8806 5.88311 13.8941 5.87861C13.8896 5.83355 13.8896 5.83355 13.9347 5.83805C13.9392 5.83355 13.9392 5.82904 13.9437 5.82904C13.8941 5.81102 13.9121 5.78849 13.9212 5.77948C13.9437 5.78849 13.9662 5.78398 13.9842 5.77497C13.9797 5.76145 13.9662 5.75695 13.9617 5.74343C13.9662 5.73892 13.9662 5.73442 13.9707 5.73442C13.9707 5.71189 13.9437 5.69837 13.9572 5.67133C14.0158 5.66683 14.0203 5.61276 14.0203 5.61276C14.0248 5.5722 13.9752 5.5677 13.9662 5.53616C13.9752 5.53616 13.9842 5.53616 13.9933 5.53616C13.9978 5.51813 13.9978 5.51363 13.9707 5.47758C13.8671 5.33339 13.8806 5.24327 13.8986 5.19821C13.9121 5.18019 13.9167 5.17569 13.8986 5.15316C13.9437 5.12612 13.9437 5.12612 13.9347 5.12612C13.9257 5.12612 13.9212 5.13063 13.9121 5.13063C13.8986 5.13063 13.8851 5.12161 13.8716 5.11711C13.8671 5.11711 13.8671 5.11711 13.8581 5.11711C13.8806 5.13063 13.9031 5.14865 13.9257 5.16217C13.9031 5.14865 13.8761 5.13063 13.8491 5.1126C13.8401 5.1081 13.831 5.10359 13.8265 5.09909C13.8265 5.09458 13.822 5.09007 13.822 5.08557L13.9482 5.06754C13.9617 5.06754 13.9707 5.06754 13.9842 5.07205C13.9933 5.07656 13.9933 5.07205 13.9978 5.07205C13.9978 5.07205 14.0518 5.04501 14.0113 5.00897V5.00446C14.0293 4.99545 14.0473 4.99996 14.0608 4.99545C14.0969 4.94138 14.0608 4.94588 14.0608 4.94588C14.0518 4.94588 14.0518 4.9594 14.0428 4.9594C14.0338 4.9594 14.0248 4.95039 14.0248 4.95039C14.0338 4.93687 14.0338 4.93687 14.0293 4.93237C14.0518 4.91885 14.0744 4.93687 14.0969 4.92786C14.0969 4.90984 14.0879 4.89632 14.0924 4.8783C14.0969 4.86027 14.1284 4.86928 14.1284 4.84676L14.1374 4.78818L14.16 4.77466C14.1825 4.76565 14.196 4.68905 14.1915 4.67553C14.187 4.66652 14.1915 4.66652 14.1915 4.66201C14.2005 4.6485 14.2276 4.65751 14.2276 4.63498C14.2276 4.61245 14.2276 4.61245 14.2366 4.60794L14.2321 4.60344C14.2366 4.59442 14.2366 4.58541 14.2321 4.5764C14.2546 4.54937 14.2546 4.51782 14.2456 4.48628C14.2501 4.47277 14.2501 4.46375 14.2501 4.46375C14.2861 4.43672 14.3312 4.4232 14.3672 4.39617C14.5024 4.46375 14.5024 4.46375 14.561 4.52684L14.6286 4.56288L14.6376 4.58091C14.6376 4.62146 14.6286 4.66201 14.6376 4.70257C14.6241 4.7251 14.6196 4.7251 14.6151 4.7296C14.6106 4.74312 14.6106 4.74312 14.6196 4.75664C14.6241 4.76114 14.6286 4.77015 14.6376 4.77466C14.6646 4.8017 14.6646 4.8017 14.6962 4.8017L14.7007 4.79719C14.6872 4.77466 14.6872 4.77466 14.6827 4.74763C14.6872 4.74312 14.6917 4.74312 14.6962 4.73861C14.7007 4.73411 14.7007 4.73411 14.7007 4.73411C14.7187 4.7251 14.7232 4.69806 14.7412 4.68905C14.7683 4.67553 14.7683 4.67553 14.7863 4.68905C14.7863 4.68905 14.8629 4.74763 14.8989 4.70257C14.8899 4.69355 14.8764 4.68905 14.8674 4.67553C14.8764 4.63948 14.8764 4.63948 14.8539 4.61695C14.8268 4.58992 14.7818 4.58992 14.7548 4.56288L14.7593 4.55838C14.7593 4.55387 14.7548 4.53134 14.7457 4.52233C14.7142 4.48628 14.6556 4.50431 14.6241 4.45925C14.597 4.4232 14.6016 4.36913 14.5655 4.33759C14.561 4.33308 14.5565 4.33308 14.552 4.32858C14.4438 4.27 14.4438 4.27 14.3492 4.18889C14.3537 4.1934 14.3582 4.1934 14.3627 4.19791C14.3537 4.17988 14.3177 4.13482 14.3177 4.13482C14.2861 4.15735 14.2276 4.09427 14.2321 4.04921C14.2366 3.99965 14.2185 3.95008 14.2185 3.95008L14.1239 3.90052C14.0834 3.887 14.0744 3.83743 14.0428 3.81941C14.0428 3.81941 14.0023 3.79688 13.9707 3.81941C13.9662 3.81941 13.9662 3.82392 13.9617 3.82842C13.9617 3.83293 13.9617 3.83743 13.9617 3.83743C13.8581 3.8149 13.8581 3.8149 13.8626 3.77886C13.8671 3.75182 13.822 3.7383 13.795 3.75182C13.7725 3.76985 13.768 3.77886 13.768 3.8149C13.786 3.80589 13.8896 3.97712 13.8986 3.99514C13.8851 3.99514 13.8716 3.99965 13.8536 4.00866C13.8536 4.01767 13.8581 4.02668 13.8581 4.03569C13.831 4.03569 13.813 4.01767 13.786 4.01316C13.786 4.01316 13.7815 4.01767 13.777 4.02218C13.7499 4.01316 13.7499 4.01316 13.7454 4.00866C13.7049 4.02668 13.6508 3.97261 13.6193 4.02668C13.6103 4.02668 13.6012 4.02668 13.5922 4.03119L13.5427 4.0402C13.5111 4.04921 13.4796 4.04921 13.4525 4.06723H13.43C13.403 4.04921 13.3759 4.03119 13.2948 4.0447C13.2948 4.03569 13.2948 4.03569 13.2498 4.01316C13.2363 4.02668 13.2363 4.02668 13.1867 4.0402L13.1822 4.0447L13.1777 4.04921L13.1732 4.05372L13.1687 4.05822L13.1642 4.06273L13.1597 4.06723C13.1326 4.09427 13.1056 4.12131 13.0695 4.09427C13.1011 4.08526 13.1552 4.05372 13.1552 4.05372C13.1732 4.03569 13.1416 4.01767 13.1507 3.99514C13.1552 3.99514 13.1597 3.99514 13.1597 3.99063C13.1597 3.98613 13.1552 3.98162 13.1552 3.98162C13.1597 3.98613 13.1687 3.99063 13.1777 3.99514C13.2273 3.98162 13.2633 3.94558 13.3084 3.93206C13.2723 3.87799 13.2182 3.95008 13.1687 3.95459L13.1642 3.94558C13.1597 3.94558 13.1552 3.94558 13.1552 3.94558C13.1461 3.95459 13.1461 3.95459 13.1461 3.97712C13.1326 3.98162 13.1236 3.98162 13.1146 3.9681C13.1146 3.9636 13.1191 3.95909 13.1191 3.95459L13.1416 3.95008C13.1461 3.95008 13.1461 3.94558 13.1507 3.94558C13.1507 3.92755 13.1371 3.91403 13.1326 3.90052C13.1371 3.89601 13.1416 3.8915 13.1461 3.887C13.1957 3.84645 13.1957 3.84645 13.2588 3.84194C13.2408 3.85996 13.2408 3.85996 13.1957 3.85996C13.1957 3.86447 13.1912 3.86447 13.1912 3.86897C13.1912 3.87348 13.1957 3.87799 13.1957 3.87799C13.1912 3.88249 13.1822 3.887 13.1732 3.8915C13.1777 3.89601 13.1777 3.90052 13.1822 3.90052C13.2002 3.90953 13.2092 3.91403 13.2227 3.91854C13.2678 3.91403 13.3084 3.887 13.3579 3.887C13.403 3.84645 13.3534 3.76534 13.421 3.7338C13.421 3.7338 13.4165 3.67072 13.2903 3.68874C13.2948 3.71127 13.2948 3.71127 13.2137 3.7383C13.2137 3.74732 13.2092 3.75633 13.2092 3.76083C13.2002 3.76534 13.1687 3.77886 13.1552 3.7383C13.1687 3.72929 13.1732 3.72479 13.1822 3.71577C13.2363 3.71127 13.2363 3.71127 13.2408 3.70676C13.2408 3.69775 13.2363 3.68874 13.2318 3.68423C13.2588 3.6617 13.2588 3.6617 13.2453 3.62566L13.2498 3.62115C13.2588 3.61214 13.2723 3.60313 13.2768 3.58961C13.2543 3.56708 13.2543 3.49949 13.2047 3.51301C13.2002 3.52202 13.2002 3.52202 13.2002 3.52202C13.2002 3.52653 13.2002 3.53103 13.2002 3.53103C13.1867 3.54004 13.1732 3.53554 13.1597 3.54004C13.1597 3.54455 13.1597 3.55356 13.1597 3.56257C13.1281 3.5806 13.1191 3.53554 13.0921 3.53554C13.0605 3.53554 13.038 3.56708 13.0065 3.56708C13.002 3.56708 12.9975 3.56708 12.9929 3.56708C12.9929 3.56708 12.9524 3.56257 12.9389 3.54455C12.9614 3.51751 13.029 3.54455 13.02 3.504L12.9118 3.4319L12.8938 3.4274L12.8082 3.41838C12.8848 3.35981 13.056 3.23815 13.2543 3.22463H13.2588C13.2633 3.22463 13.2678 3.22463 13.2723 3.22463C13.2948 3.22463 13.385 3.23364 13.385 3.23364C13.4165 3.23815 13.448 3.22463 13.4796 3.22463C13.5201 3.22463 13.5201 3.22463 13.5742 3.24716C13.5967 3.25617 13.6238 3.24716 13.6463 3.24716C13.7589 3.24716 13.8671 3.22013 13.9797 3.24265C14.0023 3.25167 14.0338 3.24716 14.0563 3.24265C14.0834 3.26068 14.0834 3.26068 14.588 3.25167C14.5925 3.26068 14.6016 3.2742 14.6061 3.2787C14.5835 3.31024 14.57 3.32827 14.4844 3.3508C14.4799 3.35981 14.4754 3.37333 14.4754 3.38684C14.543 3.41839 14.543 3.41839 14.561 3.45443C14.4934 3.49048 14.4258 3.41838 14.3537 3.44993C14.3763 3.44993 14.4078 3.45443 14.4303 3.45894C14.4799 3.54455 14.4799 3.54455 14.4844 3.54906C14.3898 3.57159 14.3898 3.57159 14.3763 3.57159C14.3898 3.5851 14.4033 3.59862 14.4168 3.60763C14.4033 3.59412 14.3898 3.5806 14.3717 3.57159C14.3627 3.57159 14.3627 3.57159 14.3042 3.55807L14.2681 3.54004L14.2185 3.54906L14.214 3.55356L14.2095 3.55807C14.205 3.55807 14.205 3.56257 14.2005 3.56257C14.196 3.56257 14.196 3.56708 14.1915 3.56708C14.187 3.56708 14.187 3.57159 14.1825 3.57159C14.1825 3.57159 14.178 3.57159 14.178 3.57609H14.1735C14.169 3.57609 14.1645 3.5806 14.16 3.5806C14.1284 3.59862 14.1284 3.60313 14.1465 3.64819C14.1555 3.66621 14.1555 3.66621 14.0969 3.7383C14.0924 3.76534 14.0789 3.78787 14.0744 3.8149C14.1329 3.83743 14.1329 3.83743 14.1374 3.85095C14.1735 3.90953 14.1735 3.90953 14.1825 3.91854C14.187 3.92305 14.4393 4.03119 14.4393 4.03119C14.5024 4.05822 14.5114 4.05822 14.5204 4.06723C14.543 4.08526 14.543 4.11229 14.561 4.13032L14.8043 4.31055C14.8043 4.31055 14.98 4.36012 15.0431 4.35561C15.0431 4.35561 15.1107 4.35561 15.1152 4.35561C15.1648 4.36913 15.2098 4.40518 15.2594 4.4232C15.2504 4.41419 15.2414 4.40518 15.2324 4.39617C15.2369 4.39617 15.2459 4.40067 15.2504 4.40067C15.2594 4.40968 15.2729 4.41869 15.2819 4.43221C16.4084 4.69806 16.4264 4.653 16.4895 4.47727C16.4985 4.47727 16.5166 4.47277 16.5256 4.47277C16.5301 4.46375 16.5346 4.45024 16.5391 4.43672C16.6968 4.47727 16.8635 4.45474 17.0122 4.53585C17.0753 4.5719 17.1474 4.58541 17.2195 4.59893C17.2781 4.653 17.2826 4.65751 17.2961 4.69355C17.2781 4.71608 17.2555 4.75213 17.242 4.77917C17.2781 4.81071 17.2781 4.81071 17.2871 4.91434C17.3321 5.15316 17.5259 5.22074 17.6971 5.31537L17.7061 5.3424L17.7106 5.36944C17.7286 5.36043 17.7422 5.35592 17.7602 5.35142C17.8143 5.38746 17.8683 5.42351 17.9089 5.47758C17.9314 5.45956 17.963 5.42802 17.981 5.40549C18.0305 5.45055 18.017 5.54517 18.1026 5.56319C18.3189 5.59924 18.5532 5.46857 18.2739 4.96841L19.13 5.27031C19.1255 5.31537 19.1029 5.36043 19.1255 5.40549C19.1435 5.40549 19.166 5.40549 19.184 5.40999C19.1976 5.44153 19.1976 5.44153 19.2066 5.50912C19.2697 5.52264 19.3372 5.48659 19.3913 5.54517C19.3733 5.54968 19.3508 5.55869 19.3327 5.5677C19.3327 5.58572 19.3372 5.61276 19.3418 5.63078C19.3282 5.63979 19.3012 5.6488 19.2877 5.6488C19.3147 5.66683 19.3418 5.68936 19.3688 5.71189C19.3372 5.72991 19.2922 5.73442 19.2381 5.68936C19.139 5.70288 19.139 5.70288 19.0173 5.52264C19.0263 5.4911 19.0308 5.45055 19.0308 5.419C18.8371 5.35142 18.8371 5.35142 18.8326 5.32438C18.7244 5.25229 18.7244 5.25229 18.6974 5.23426C18.6839 5.23877 18.6659 5.24778 18.6524 5.25229C18.738 5.66683 18.738 5.66683 18.9452 5.78398C18.9588 5.77497 18.9768 5.76596 18.9903 5.76145C19.0038 5.76596 19.0263 5.77497 19.0399 5.77948C19.0399 5.79299 19.0444 5.81552 19.0444 5.82904C19.13 5.86509 19.13 5.86509 19.1931 5.86959C19.2652 5.90564 19.3373 5.94169 19.3102 6.05884C18.9588 6.15797 19.3237 6.57702 19.2652 6.83386C19.2697 7.18532 19.2697 7.18532 19.3327 7.22136C19.3327 7.29346 19.3012 7.36105 19.2877 7.42864C19.3057 7.45117 19.3282 7.49172 19.3327 7.52326C19.2426 7.59535 19.1165 7.61788 19.0444 7.71251C19.2246 7.75757 19.2381 7.7846 19.2652 7.82966C19.0038 7.98737 18.9407 8.02792 18.9452 8.17661C19.0444 8.2442 19.0444 8.2442 19.0849 8.2442C19.0894 8.2442 19.5761 8.21266 19.6932 8.18563C19.7833 8.24871 19.7833 8.24871 19.8104 8.28025C19.8825 8.41092 20.0582 8.474 20.0537 8.65424C20.0537 8.65875 19.4814 9.23099 19.3192 9.26704C19.2291 9.4608 19.2381 9.52838 19.2426 9.55993C19.3643 9.60048 19.3778 9.6185 19.4093 9.66356C20.0717 10.4431 20.0717 10.4431 20.0807 10.4611C20.1799 10.398 20.2249 10.2764 20.3376 10.2313C20.4277 10.1953 20.4953 10.3034 20.5854 10.2719C20.6034 10.2674 20.6214 10.2538 20.6349 10.2448C20.6485 10.1367 20.707 10.0421 20.7025 9.92941C20.7836 9.89336 20.7836 9.89336 20.9098 9.81226L20.9188 9.77621C20.9188 9.77621 20.9414 9.52838 20.9504 9.35265H20.9549C20.9549 9.35265 20.9549 9.34815 20.9504 9.34815C20.9504 9.32111 20.9549 9.29408 20.9549 9.26704C20.9594 9.26704 20.9639 9.26704 20.9729 9.26704C20.9729 9.26254 20.9774 9.25803 20.9909 9.24902C21.0134 9.27155 21.045 9.18143 21.0495 9.14538C21.0405 9.14088 21.036 9.14088 21.027 9.09582C21.0225 9.07329 21.0225 9.07329 20.9819 9.02372C20.9639 9.02372 20.9549 9.0057 20.9549 9.0057C20.9594 9.00119 20.9594 8.99669 20.9549 8.98317C20.9368 8.93361 20.9954 8.91558 21.0089 8.91108C21.0134 8.92009 21.018 8.93361 21.0225 8.94262C21.0315 8.95163 21.0495 8.98317 21.0585 8.95163C21.063 8.93811 21.0495 8.92459 21.0585 8.91108C21.063 8.91108 21.063 8.91108 21.09 8.9291C21.0991 8.92459 21.1126 8.92009 21.1216 8.91558C21.1036 8.86602 21.1576 8.88855 21.1576 8.88855C21.1712 8.89305 21.1802 8.90206 21.1937 8.91108C21.1847 8.93361 21.1847 8.93361 21.2703 9.00119C21.2658 9.01021 21.2658 9.02372 21.2613 9.03274C21.2658 9.04175 21.2838 9.06428 21.2928 9.05977C21.2928 9.05526 21.3063 9.02823 21.3018 9.02372C21.2928 9.00119 21.2658 8.98768 21.2568 8.96064C21.2478 8.93811 21.2432 8.91108 21.2342 8.88855L21.2297 8.88404C21.2252 8.87953 21.1937 8.83898 21.1937 8.83898C21.1892 8.83448 21.1802 8.82546 21.1441 8.81195C21.1126 8.80293 21.081 8.82546 21.0495 8.81195C21.0225 8.80293 21.0225 8.75788 20.9864 8.76689C20.9864 8.76689 20.9278 8.79843 20.9188 8.80744C20.9233 8.82997 20.9504 8.83898 20.9413 8.86151C20.9323 8.87953 20.9008 8.87503 20.8963 8.87052C20.8873 8.86602 20.8873 8.86602 20.8783 8.83448C20.8647 8.83448 20.8467 8.81195 20.8377 8.82546C20.8242 8.84799 20.8242 8.84799 20.8107 8.84349C20.7972 8.83898 20.7972 8.82096 20.7836 8.81645C20.7611 8.80744 20.7386 8.81195 20.7161 8.80744C20.7206 8.75337 20.7341 8.70831 20.7521 8.65875L20.7927 8.67226C20.7972 8.67226 20.7972 8.67226 20.8287 8.67226C20.8332 8.65424 20.8422 8.64973 20.8422 8.64523C20.8422 8.64523 20.8512 8.63622 20.8467 8.61819C20.8467 8.61369 20.8467 8.60918 20.8377 8.60918C20.8332 8.60918 20.8242 8.60467 20.8107 8.59116C20.8017 8.59116 20.7882 8.58665 20.7791 8.58215C20.7836 8.56863 20.7881 8.55962 20.7927 8.5461L20.8467 8.58665C20.8873 8.60918 20.8873 8.60918 20.9053 8.63622C20.9053 8.63171 20.9053 8.63171 20.8963 8.61819C20.8918 8.61369 20.8918 8.60918 20.8873 8.60467C20.8873 8.60017 20.8828 8.59566 20.8828 8.59566C20.8828 8.59116 20.8783 8.59116 20.8783 8.58665L20.8828 8.59566V8.59116C20.8963 8.56412 20.9008 8.56412 20.9008 8.56412C20.9008 8.56412 20.9278 8.60017 20.9368 8.6227C20.9504 8.64973 20.9504 8.67677 20.9729 8.6993C20.9774 8.69029 20.9954 8.64072 20.9954 8.64072C20.9999 8.6227 21.018 8.61369 21.0225 8.59566C21.0225 8.58665 21.0089 8.55511 21.0089 8.55511C20.9999 8.53709 20.9774 8.5461 20.9639 8.54159C20.9368 8.53258 20.9323 8.52357 20.9233 8.51456C20.9008 8.48752 20.9008 8.48752 20.9008 8.48752C20.8963 8.47851 20.9053 8.46499 20.8963 8.45147C20.8873 8.44697 20.8828 8.43796 20.8738 8.43345C20.8647 8.42894 20.8602 8.42444 20.8512 8.41993C20.8467 8.41543 20.8422 8.41543 20.8377 8.41092C20.8377 8.40191 20.8377 8.3974 20.8377 8.38839C20.8467 8.3929 20.8602 8.3974 20.9008 8.41092C20.9233 8.41993 20.9278 8.42444 20.9278 8.42894C20.9323 8.44246 20.9459 8.45147 20.9459 8.45147C20.9504 8.44697 20.9549 8.44697 20.9594 8.42444C20.9639 8.42444 20.9639 8.42444 20.9684 8.42444C20.9954 8.42444 20.9954 8.42444 21.0134 8.43345C21.036 8.44697 21.036 8.44697 21.0405 8.43796C21.0315 8.42444 21.027 8.41092 21.018 8.40191C21.0044 8.38839 20.9864 8.37487 20.9729 8.36136L20.9684 8.35685C20.9504 8.33883 20.9368 8.3163 20.9323 8.29827C20.9278 8.28476 20.9278 8.28476 20.9233 8.2442C20.9143 8.19013 20.9143 8.19013 20.9143 8.17661C20.8963 8.17661 20.8602 8.12254 20.8648 8.11353C20.8602 8.11353 20.8602 8.11353 20.8512 8.11804C20.7701 8.14958 20.8377 8.19464 20.8422 8.19464C20.8467 8.19464 20.8512 8.19914 20.8557 8.19914C20.8783 8.20816 20.8783 8.20816 20.8828 8.21266C20.8918 8.21717 20.8963 8.23069 20.9098 8.23519C20.9098 8.2397 20.9098 8.2442 20.9053 8.2442C20.8963 8.25772 20.8738 8.26223 20.8648 8.27574C20.8602 8.28476 20.8647 8.30278 20.8512 8.31179C20.8467 8.3163 20.8422 8.3208 20.8287 8.3163C20.8242 8.31179 20.8197 8.31179 20.8152 8.3163C20.7836 8.25772 20.7296 8.19914 20.698 8.14507C20.698 8.13606 20.6935 8.12705 20.689 8.12705C20.6665 8.08199 20.6665 8.04144 20.7115 8.00539V8.0099C20.7115 8.02341 20.7115 8.04144 20.7115 8.05496C20.7115 8.05496 20.7206 8.09551 20.7251 8.09551C20.7296 8.09551 20.7296 8.091 20.7341 8.091C20.7386 8.091 20.7431 8.091 20.7431 8.0865C20.7431 8.06397 20.7206 8.05045 20.7206 8.02792C20.7206 8.02341 20.7206 8.02341 20.7251 8.02341C20.7341 8.01891 20.7386 8.0099 20.7386 8.00539C20.7386 7.99638 20.7431 7.98737 20.7431 7.98286C20.7701 7.96484 20.7972 7.94681 20.8197 7.9333C20.8332 7.94231 20.8467 7.94231 20.8512 7.94231C20.8512 7.94231 20.9188 7.88824 20.9188 7.8612C20.9819 7.79812 20.9774 7.73954 20.9684 7.58634C20.9684 7.56832 20.9864 7.54579 20.9999 7.53227C20.9864 7.46018 21.1802 7.32049 21.1802 7.32049C21.4415 7.45116 21.7344 7.36105 22.0047 7.42413C22.0138 7.41061 22.0273 7.39709 22.0318 7.38358C22.0633 7.38808 22.1039 7.4016 22.1264 7.41512C22.2345 7.37907 22.2886 7.39259 22.3607 7.4782C22.3517 7.54579 22.3787 7.60887 22.4193 7.66745L22.4148 7.67195C22.3877 7.72152 22.4148 7.7801 22.3832 7.82966C22.3697 7.84768 22.3382 7.86571 22.3202 7.87923C22.2796 7.90175 22.2751 7.90626 22.2571 7.92428C22.2616 7.91527 22.2706 7.91077 22.2751 7.90175C22.23 7.90175 22.2165 7.9378 22.2345 7.98737C22.23 7.99187 22.2255 7.99638 22.221 8.00088C22.2075 7.99187 22.1895 7.97836 22.176 7.96934C22.1624 7.97385 22.1399 7.97835 22.1219 7.98286C21.9867 8.27124 21.9867 8.27124 21.9597 8.27574C21.838 8.49653 21.838 8.49653 21.829 8.5461C21.811 8.55511 21.793 8.56863 21.7749 8.57764L21.7434 8.56863C21.5406 8.7804 21.4235 8.97866 21.3559 9.14088C21.3559 9.13637 21.3514 9.13187 21.3514 9.12736C21.3514 9.11835 21.3604 9.11384 21.3559 9.10483C21.3514 9.09582 21.3379 9.08681 21.3244 9.07779C21.3198 9.08681 21.3198 9.10483 21.3289 9.11835C21.3334 9.12736 21.3469 9.14088 21.3514 9.14538C21.2568 9.37518 21.2613 9.52838 21.2658 9.5419C21.2252 9.65004 21.0585 9.71763 21.054 9.71763C21.045 9.73115 21.036 9.74917 21.027 9.76269C20.9774 9.85281 20.9594 9.85731 20.9053 9.87984C20.9053 9.87984 20.9053 9.87984 20.8873 9.89336C20.7296 9.91589 20.7296 9.91589 20.6935 9.93391C20.7025 10.0961 20.7701 10.2448 20.7746 10.407C20.5764 10.8126 20.9504 11.1685 20.8738 11.5651C20.8828 11.7498 20.7206 11.876 20.7161 12.0517C20.7251 12.0787 20.7386 12.1148 20.7476 12.1418C20.7656 12.4797 20.7791 12.7231 20.7881 12.8988C20.7791 12.8988 20.7746 12.8988 20.7656 12.8988C20.7656 12.9078 20.7611 12.9168 20.7611 12.9258C20.7611 12.9393 20.7611 12.9393 20.7611 12.9393C20.7296 13.0159 20.6575 13.061 20.6169 13.1286C20.6079 13.1241 20.5944 13.1196 20.5854 13.1151C20.5809 13.1241 20.5809 13.1241 20.4908 13.2232C20.4051 13.2007 20.4051 13.2007 20.4051 13.2007C20.3961 13.2638 20.3961 13.2638 20.3691 13.3178C20.3466 13.2998 20.3285 13.2728 20.306 13.2503C20.2835 13.3494 20.2835 13.3494 20.279 13.3854C20.315 13.399 20.3376 13.435 20.3691 13.4575C20.3691 13.4756 20.3781 13.4981 20.3871 13.5161C20.4232 13.5206 20.4502 13.4846 20.4863 13.4846C20.4908 13.4936 20.4953 13.5026 20.4998 13.5116C20.4908 13.5296 20.4727 13.5476 20.4592 13.5612C20.4682 13.5612 20.4772 13.5567 20.4863 13.5567C20.4908 13.5702 20.4908 13.5702 20.6485 13.7099L20.6395 13.7639C20.5899 13.8405 20.6079 13.9442 20.5403 14.0118C20.4772 14.0118 20.4727 14.0118 20.4051 14.2551C20.3961 14.2596 20.306 14.3632 20.3195 14.4038C20.306 14.4173 20.306 14.4173 20.27 14.4804C20.2565 14.4984 20.2565 14.4984 20.2565 14.4984C20.2565 14.5074 20.2565 14.5164 20.2565 14.5254C20.1753 14.5615 20.1753 14.5615 20.1528 14.5615C20.1483 14.566 20.1393 14.575 20.1348 14.5795C20.0807 14.557 20.0492 14.4984 19.9906 14.4849C19.7608 14.0253 19.7608 14.0253 19.5986 13.8C19.6166 13.7099 19.4364 13.5026 19.3418 13.5026C19.3418 13.5657 19.3868 13.9352 19.3868 13.9352C19.4319 14.2776 19.4319 14.2776 19.3508 14.2821C19.2652 14.3993 19.2877 14.4443 19.3553 14.602C19.3868 14.6741 19.3868 14.6741 19.3778 14.9535C19.4995 15.0751 19.4859 15.3861 19.3012 15.5573C19.3102 15.6068 19.2652 15.6384 19.2606 15.6834C19.2697 15.6879 19.2697 15.6879 19.3327 16.1025C19.3147 16.098 19.2922 16.0845 19.2742 16.0709C19.2516 16.1025 19.2606 16.143 19.2381 16.1746C19.2291 16.1746 19.2201 16.1746 19.2111 16.1791C19.2021 16.2557 19.2561 16.4269 19.2561 16.4269C19.2246 16.4855 19.2246 16.4855 19.1886 16.8054C19.1795 16.8054 19.1705 16.8099 19.1615 16.8099C19.139 16.7919 19.1165 16.7739 19.0939 16.7558C19.1165 16.8505 19.1931 16.9136 19.2291 16.9992C19.2877 17.1298 19.3147 17.274 19.3868 17.4002C19.4724 17.5309 19.5851 17.6435 19.6887 17.7607C19.6842 17.7652 19.6842 17.7652 19.6842 17.7652C19.6662 17.8733 19.6166 17.9724 19.6076 18.0806C19.5986 18.0716 19.5896 18.058 19.5806 18.049C19.4724 18.1211 19.4724 18.1211 19.3958 18.1166C19.6482 17.9544 19.6482 17.9544 19.5941 17.7652C19.2652 17.8733 19.3147 17.986 19.3508 18.0761C19.3147 18.0806 19.2787 18.0806 19.2111 18.022C19.2426 17.6525 19.2426 17.6525 19.0939 17.6796C18.6253 17.3461 18.3955 17.4948 18.3189 17.5444C18.3144 17.5444 18.0486 17.7021 18.0396 17.7471C18.0305 17.7471 18.0125 17.7471 18.0035 17.7471C17.8954 17.8868 17.7241 17.7742 17.6025 17.8553C17.4177 17.7111 17.1339 17.7562 17.0347 17.8913C17.0167 17.8643 17.0167 17.8643 17.0212 17.7787C16.9401 17.7471 16.9356 17.7471 16.8815 17.7967C16.859 17.7967 16.823 17.7967 16.8004 17.8012C16.7914 17.8192 16.7689 17.8463 16.7509 17.8553C16.7419 17.8463 16.7283 17.8373 16.7193 17.8282C16.7013 17.8418 16.6698 17.8508 16.6472 17.8508C16.6427 17.8418 16.6337 17.8283 16.6292 17.8192C16.6427 17.7967 16.6607 17.7652 16.6698 17.7426C16.3634 17.8688 16.1561 18.1482 15.8362 18.2518C15.7551 18.2158 15.7551 18.2158 15.737 18.1977C15.5343 18.2698 15.5343 18.2698 15.4712 18.1932C15.4487 18.1977 15.4171 18.2022 15.3946 18.2067C15.3766 18.2969 15.3901 18.3194 15.4126 18.3554C15.3811 18.4005 15.336 18.4365 15.309 18.4906C15.3315 18.5537 15.3856 18.5762 15.4396 18.5988C15.4351 18.5988 15.4306 18.5988 15.4261 18.5988C15.3991 18.5988 15.3811 18.5852 15.354 18.5852C15.345 18.5852 15.3405 18.5897 15.3315 18.5897H15.327C15.3315 18.5988 15.3315 18.6078 15.327 18.6213C15.327 18.6258 15.327 18.6258 15.327 18.6303C15.3225 18.5672 15.2955 18.4861 15.1918 18.4591C15.1918 18.4456 15.1918 18.432 15.1918 18.4185C15.2549 18.387 15.2549 18.387 15.2684 18.3284C15.2774 18.3239 15.291 18.3149 15.3 18.3104C15.2774 18.2788 15.2594 18.2518 15.1963 18.2833C15.0657 18.369 14.8899 18.6844 14.8854 18.7159C14.7683 18.77 14.8314 18.8871 14.8314 18.9818C14.8223 18.9682 14.8133 18.9502 14.8043 18.9412C14.7998 18.9367 14.7998 18.9322 14.7953 18.9322C14.6421 18.9322 14.6421 18.9322 14.57 18.9142C14.4754 18.8916 14.3988 18.8286 14.3042 18.806C14.2771 18.7565 14.2366 18.7204 14.2185 18.6709C14.2005 18.6258 14.1284 18.6033 14.16 18.5402C14.0879 18.3464 14.0879 18.3464 13.9797 18.3014C13.8085 18.2293 13.6418 18.2653 13.6373 18.2653C13.6193 18.2698 13.5066 18.3645 13.5066 18.3645C13.4571 18.423 13.3714 18.4005 13.3129 18.4456C13.3084 18.4501 13.3084 18.4501 13.3039 18.4546C13.2768 18.4771 13.2363 18.4906 13.2137 18.5177C13.1912 18.5402 13.2002 18.5762 13.1732 18.5988C13.1687 18.6033 13.1642 18.6033 13.1597 18.6033C13.0741 18.5672 13.1597 18.4681 13.1236 18.4095C13.0876 18.3509 13.0876 18.3509 12.9794 18.2698C13.0155 18.2248 13.0155 18.2248 13.011 18.2158C12.9929 18.1752 12.9389 18.1797 12.9163 18.1437C12.9209 18.1211 12.9254 18.1166 12.9299 18.1031C12.9434 18.1076 12.9434 18.1076 13.0155 18.1797C13.0155 18.1347 13.011 18.1301 12.9975 18.1166C12.9975 18.1166 12.8893 17.9544 12.8758 17.8913C12.8668 17.8553 12.9163 17.6931 12.9163 17.6886C12.8397 17.63 12.7812 17.6525 12.7586 17.6615C12.7451 17.675 12.7451 17.675 12.7316 17.6976C12.7001 17.7471 12.7001 17.7471 12.6099 17.7697C12.5559 17.7787 12.5378 17.8328 12.5018 17.8643C12.4703 17.8913 12.4342 17.8958 12.3982 17.9094C12.3576 17.9274 12.4072 17.9905 12.3621 18.004C12.3846 18.0671 12.4477 18.1121 12.4658 18.1797C12.4703 18.1932 12.4567 18.2067 12.4567 18.2158C12.4522 18.2653 12.4748 18.3104 12.4522 18.3599C12.4567 18.3645 12.4567 18.3645 12.3801 18.414C12.3756 18.4095 12.3621 18.405 12.3576 18.405C12.3126 18.4411 12.29 18.4996 12.245 18.5357C12.2495 18.5402 12.2495 18.5447 12.254 18.5447C12.254 18.5447 12.254 18.5447 12.2495 18.5492C12.245 18.5447 12.245 18.5402 12.2405 18.5402C12.236 18.5447 12.2269 18.5492 12.2224 18.5492C12.2179 18.5492 12.2179 18.5492 12.2179 18.5492C12.1594 18.5807 12.1278 18.6393 12.0647 18.6618C12.0512 18.6528 11.9566 18.6213 11.9386 18.6303C11.8484 18.6754 11.6998 18.6258 11.488 18.4906C11.2086 18.3104 11.2086 18.3104 11.0419 18.0535C11.0599 18.0085 11.0599 18.0085 10.9608 17.9003C10.9653 17.8643 10.9788 17.8282 10.9698 17.7922C10.9608 17.7742 10.9653 17.7697 10.9653 17.7697V17.7652L10.9563 17.7471L10.9518 17.7336L10.9473 17.7246C10.8977 17.639 10.7896 17.6165 10.7445 17.5264C10.7085 17.4588 10.749 17.3822 10.7355 17.3146C10.8076 17.256 10.9383 17.0442 10.9383 17.0442C10.9292 17.0217 10.9202 16.9992 10.9112 16.9766C10.9968 16.9361 11.0284 16.8144 11.15 16.8324C11.1771 16.837 11.1771 16.837 11.3483 16.7558C11.4159 16.7243 11.479 16.7874 11.5511 16.7694C11.5781 16.7604 11.5826 16.7288 11.6051 16.7153C11.6051 16.7198 11.6051 16.7288 11.6006 16.7333C11.6051 16.7378 11.6096 16.7378 11.6141 16.7423C11.6727 16.7198 11.6727 16.6883 11.6682 16.6657L11.6772 16.6522C11.7043 16.6522 11.7223 16.6792 11.7448 16.6838C11.7538 16.6792 11.7718 16.6657 11.7764 16.6297C11.7538 16.6117 11.7178 16.6072 11.6998 16.5846C11.6998 16.5801 11.6952 16.5801 11.6952 16.5756L11.6907 16.5711L11.6862 16.5666L11.6817 16.5621L11.6772 16.5576V16.5531H11.6367C11.6322 16.5486 11.6277 16.5441 11.6277 16.5396C11.5916 16.5396 11.5601 16.5621 11.5285 16.5711C11.5285 16.5486 11.5285 16.5486 11.5466 16.5215C11.6051 16.5125 11.6051 16.5125 11.6998 16.4314C11.7538 16.4359 11.7583 16.4359 11.8214 16.4269C11.8259 16.4044 11.8169 16.3819 11.8214 16.3593C11.8259 16.3593 11.8304 16.3548 11.8349 16.3548C11.907 16.3909 11.9205 16.3548 11.925 16.3413C11.9341 16.3188 11.9476 16.2872 12.1684 16.2241L12.1999 16.2512C12.3351 16.2692 12.3351 16.2692 12.4522 16.134C12.5018 16.1295 12.6775 16.1295 12.7992 16.2602C12.8037 16.3143 12.8307 16.4404 12.9569 16.4494C12.9569 16.4494 13.1011 16.472 13.1236 16.5801C13.1507 16.5891 13.1822 16.5981 13.2092 16.6072C13.2273 16.5981 13.2318 16.5711 13.2588 16.5756C13.2633 16.5756 13.2723 16.5756 13.2768 16.5801C13.3129 16.5936 13.3219 16.6387 13.3579 16.6522C13.385 16.6657 13.412 16.6342 13.4435 16.6432C13.448 16.6252 13.4525 16.6026 13.4571 16.5846C13.439 16.5351 13.4616 16.4765 13.43 16.4269C13.4255 16.4269 13.421 16.4269 13.4165 16.4269C13.3579 16.3683 13.3084 16.3053 13.2543 16.2467C13.1957 16.1791 13.0695 16.1881 13.0605 16.0664C13.0515 15.9538 12.9209 15.9898 12.8623 15.9313C12.7676 15.8321 12.7676 15.8321 12.7271 15.733C12.7271 15.733 12.6865 15.5888 12.8037 15.3455C12.8262 15.3004 12.8488 15.2509 12.8623 15.0932C12.9794 15.0031 12.9794 15.0031 12.9884 14.958C13.02 14.7868 13.056 14.8003 13.0741 14.8048C13.1011 14.7778 13.1146 14.7327 13.1146 14.7327C13.1101 14.7327 13.1056 14.7282 13.1011 14.7282C13.065 14.7462 13.029 14.7687 12.9929 14.7868C13.029 14.7687 13.065 14.7462 13.0966 14.7282C13.0741 14.7282 13.0425 14.7282 13.02 14.7282C13.0155 14.7192 13.011 14.7057 13.011 14.6966C13.0425 14.6381 13.1236 14.611 13.1101 14.5254C13.1011 14.5209 13.0921 14.5119 13.0831 14.5074C12.9975 14.5299 13.0065 14.4759 13.0155 14.4398C13.0065 14.4308 13.0065 14.4308 12.9569 14.3452C12.9118 14.3452 12.8623 14.3542 12.8172 14.3497C12.8262 14.3317 12.8397 14.3091 12.8443 14.2866C12.7812 14.2506 12.7812 14.2506 12.682 14.1695C12.7406 14.1469 12.7406 14.1469 12.6956 13.9532C12.7586 14.0118 12.7857 14.1064 12.8668 14.1469C12.8668 14.165 12.8668 14.192 12.8668 14.21C12.8848 14.219 12.9163 14.219 12.9344 14.2145C12.9479 14.174 12.8803 14.0027 12.8082 13.9036C12.9479 13.9261 12.9569 13.7234 12.9569 13.7234C12.9434 13.6783 12.9254 13.6333 12.9073 13.5882C12.8893 13.5837 12.8623 13.5792 12.8443 13.5837C12.8127 13.5341 12.8127 13.5296 12.8307 13.4846C12.8443 13.4981 12.8623 13.5206 12.8803 13.5341L12.9073 13.471C12.9614 13.3539 12.9614 13.3539 13.0335 13.3449C13.0695 13.2683 13.1732 13.2367 13.1732 13.1376C13.1957 13.1151 13.1957 13.1151 13.2318 13.0475C13.1777 12.9889 13.1011 12.9348 13.1011 12.9348C13.0876 12.6465 13.0831 12.6014 13.3669 12.286C13.3714 12.268 13.3759 12.2409 13.3759 12.2229C13.394 12.2184 13.4165 12.2049 13.43 12.1869C13.4255 12.1824 13.4255 12.1824 13.43 12.1824C13.421 12.1643 13.4075 12.1373 13.3985 12.1238C13.4661 12.0832 13.4661 12.0832 13.4751 12.0156C13.5382 12.0156 13.6418 11.912 13.6283 11.8444C13.6373 11.8399 13.6508 11.8354 13.6553 11.8309C13.6688 11.8444 13.6778 11.8669 13.6869 11.885C13.7229 11.8624 13.7499 11.8174 13.795 11.8129C13.804 11.8174 13.813 11.8264 13.822 11.8309C13.822 11.8399 13.822 11.8534 13.822 11.8624C13.7499 11.8805 13.7274 11.9616 13.6598 11.9841C13.6553 11.9886 13.6553 11.9886 13.5967 12.2454C13.6057 12.259 13.6057 12.259 13.6463 12.3311C13.8491 12.277 13.7815 12.0472 13.9031 11.939C14.0293 11.8264 14.0744 11.6462 14.214 11.5425C14.1915 11.5425 14.1645 11.5335 14.1419 11.529C14.1374 11.52 14.1329 11.5065 14.1284 11.493C14.0789 11.502 14.0383 11.5065 14.0158 11.6056C14.0068 11.6011 13.9887 11.6011 13.9797 11.5966C13.9392 11.6236 13.9121 11.6597 13.8761 11.6912C13.8446 11.6822 13.795 11.6912 13.7635 11.7002C13.7094 11.7047 13.5291 11.6462 13.4075 11.5876C13.412 11.5515 13.421 11.5155 13.421 11.4794C13.4075 11.4659 13.385 11.4524 13.3669 11.4434C13.3534 11.4524 13.3534 11.4524 13.2993 11.52C13.2858 11.5065 13.2588 11.4975 13.2408 11.4975C13.3805 11.2451 13.3805 11.2451 13.3669 11.2181C13.1326 11.2136 12.8938 11.2091 12.637 12.0967C12.5739 11.7903 12.8217 11.5741 12.8713 11.3037C12.8848 11.2136 12.8848 11.2001 12.9749 11.0874C13.4165 10.781 13.4255 10.781 13.4796 10.7855C13.5156 10.763 13.5517 10.736 13.5877 10.7134C13.7274 10.5467 13.7274 10.5467 13.7409 10.5197L14.0563 9.91589L14.0473 9.85731L13.9752 9.83479L13.9347 9.80775C13.9302 9.74016 13.8761 9.6906 13.8581 9.62301C13.768 9.57795 13.6012 9.63202 13.6328 9.71313C13.6373 9.72214 13.6418 9.73566 13.6463 9.74467C13.6057 9.72214 13.5832 9.67708 13.5472 9.65004C13.4751 9.67257 13.4751 9.68158 13.3895 9.85281C13.3534 10.015 13.3129 10.0105 13.2633 10.0015C13.2588 9.99249 13.2498 9.98348 13.2453 9.97447C13.3534 9.86633 13.4165 9.72664 13.5066 9.60498L13.5291 9.55542C13.448 9.57344 13.448 9.57344 13.412 9.52388C13.385 9.52838 13.3579 9.53289 13.3219 9.60498C13.3129 9.60949 13.2948 9.60949 13.2858 9.614C13.2723 9.60048 13.2453 9.58245 13.2273 9.57344C13.2182 9.57795 13.2092 9.58245 13.2002 9.58696C13.1822 9.65906 13.1822 9.65906 13.1687 9.68158C13.1642 9.66356 13.1461 9.64103 13.1371 9.62751C13.0515 9.65004 12.9839 9.53289 12.8893 9.59597C12.8172 9.57344 12.682 9.51937 12.682 9.51487C12.6956 9.50135 12.7181 9.47431 12.7271 9.45629C12.7226 9.44728 12.7226 9.42925 12.7181 9.42024C12.7001 9.41123 12.6775 9.39771 12.664 9.3842C12.6325 9.36617 12.5919 9.37969 12.5604 9.34815C12.5378 9.32562 12.5649 9.3076 12.5694 9.28507C12.5153 9.25803 12.4567 9.27605 12.4027 9.26704C12.3801 9.23099 12.3441 9.22198 12.3396 9.22198C12.3351 9.22649 12.3261 9.2355 12.3171 9.24001C12.2585 9.24001 12.263 9.18143 12.2314 9.15439C12.2134 9.15439 12.2134 9.15439 12.1098 9.10934C12.1143 9.10934 12.1188 9.11384 12.1233 9.11384C12.1233 9.10483 12.1188 9.09582 12.1143 9.09131L11.9791 9.04625C11.9611 9.03274 11.9611 9.03274 11.925 8.98317C11.907 9.02372 11.9341 9.06878 11.9025 9.10483C11.907 9.10934 11.907 9.11835 11.9115 9.12285C11.916 9.14088 11.916 9.14088 11.8845 9.17692C11.898 9.21297 11.9386 9.21748 11.9566 9.24451C11.9566 9.24902 11.9521 9.25352 11.9521 9.25803C11.9431 9.26254 11.9341 9.26254 11.9296 9.26704C11.925 9.29408 11.9386 9.32111 11.9431 9.35265C11.9476 9.35265 11.9521 9.35265 11.9566 9.35716C11.9611 9.35265 11.9701 9.34364 11.9791 9.33914C11.9881 9.3887 11.9791 9.43827 11.9926 9.48332C11.9881 9.48332 11.9791 9.48783 11.9746 9.49234C11.9521 9.48332 11.9341 9.46981 11.916 9.4608C11.916 9.4608 11.853 9.50135 11.889 9.58245C11.8304 9.65905 11.8304 9.65905 11.8259 9.67257C11.8124 9.66356 11.8034 9.65004 11.7944 9.64103C11.7854 9.64103 11.7764 9.64554 11.7673 9.64554C11.7493 9.73115 11.7493 9.73115 11.7313 9.74016C11.7133 9.73566 11.7133 9.73566 11.7043 9.64554C11.6727 9.62301 11.6277 9.57344 11.6277 9.57344C11.5961 9.59147 11.524 9.67257 11.5375 9.71763C11.533 9.71763 11.5285 9.72214 11.5285 9.72664C11.4835 9.71763 11.47 9.71313 11.4519 9.68158C11.4519 9.67708 11.4564 9.67257 11.4564 9.66807C11.542 9.65455 11.5375 9.63202 11.497 9.59147C11.497 9.59597 11.497 9.60048 11.497 9.60498L11.3708 9.48783C11.3122 9.3842 11.3122 9.3842 11.3077 9.3842C11.2942 9.3842 11.2942 9.36617 11.2942 9.33463C11.2987 9.27605 11.2942 9.26254 11.2897 9.231C11.2402 9.22198 11.2221 9.26704 11.1861 9.28507C11.1771 9.28056 11.1726 9.27155 11.1681 9.26704C11.141 9.28056 11.1185 9.30309 11.0915 9.31661C10.9878 9.29858 10.9878 9.29858 10.9608 9.25352C10.9563 9.24451 10.9292 9.21748 10.8481 9.24902C10.7715 9.18594 10.7715 9.18594 10.7445 9.16791C10.7445 9.16791 10.5913 9.22198 10.5733 9.32562C10.5688 9.32562 10.5643 9.33012 10.5643 9.33012C10.5237 9.3121 10.5057 9.3076 10.4877 9.33012C10.4832 9.33012 10.4787 9.33012 10.4741 9.33012C10.4651 9.33914 10.4651 9.33914 10.4561 9.37068C10.4516 9.37068 10.4471 9.37068 10.4426 9.37518C10.4291 9.36167 10.4291 9.36167 10.4111 9.33914C10.4066 9.33914 10.4021 9.33914 10.3975 9.33914C10.393 9.33463 10.3885 9.32562 10.3795 9.32111C10.357 9.34364 10.348 9.37518 10.3164 9.3887C10.2939 9.39771 10.2759 9.37068 10.2534 9.37068C10.2173 9.41123 10.1632 9.49234 10.1677 9.51036C10.1768 9.58246 10.2939 9.66356 10.2939 9.66356C10.3119 9.72214 10.3074 9.78973 10.3345 9.8438C10.3525 9.88435 10.4066 9.88886 10.4246 9.92941C10.4471 9.97447 10.4967 10.006 10.5102 10.0556C10.5147 10.0646 10.5012 10.0736 10.4922 10.0781C10.4832 10.0826 10.4741 10.0916 10.4696 10.1006C10.4877 10.1953 10.4291 10.2854 10.4471 10.38C10.5147 10.3665 10.5868 10.3755 10.6589 10.362C10.713 10.416 10.7896 10.4431 10.8301 10.5107C11.1005 10.8396 10.7805 11.1505 10.7445 11.182C10.7355 11.182 10.722 11.1775 10.713 11.1775C10.6814 11.2361 10.6679 11.2632 10.9923 11.6326C11.0869 11.6281 11.0824 11.6507 11.0644 11.8084C11.0824 11.8219 11.1095 11.8354 11.1275 11.8489C11.132 11.8715 11.132 11.8985 11.132 11.921C11.0869 11.921 11.0869 11.921 11.0284 11.912C11.0058 11.9841 11.0058 11.9976 11.0644 12.0247C10.9518 11.9976 10.9518 11.9976 10.8932 12.0877C10.8932 11.9976 10.8932 11.9976 10.8797 11.9526C10.7896 11.93 10.722 11.912 10.7175 11.912C10.6994 11.921 10.6814 11.939 10.6724 11.9571C10.6724 11.9345 10.6769 11.9075 10.6814 11.885C10.6319 11.8489 10.5733 11.8399 10.5192 11.8129C10.5102 11.7678 10.4922 11.7228 10.4877 11.6777C10.4381 11.6417 10.4381 11.6417 10.4111 11.5696C10.3209 11.529 10.4066 11.4028 10.3119 11.3623C10.2173 11.3217 10.1768 11.4344 10.1002 11.4389C10.0911 11.4344 10.0821 11.4254 10.0731 11.4164C10.0191 11.4434 9.983 11.493 9.92443 11.502C9.91091 11.4885 9.88838 11.4659 9.87486 11.4524C9.79376 11.4839 9.69913 11.4344 9.61803 11.4884C9.6 11.4749 9.57747 11.4569 9.56846 11.4344C9.37921 11.4073 9.37921 11.4073 9.36119 11.4073C9.30712 11.3938 9.30712 11.3938 9.26206 11.3938C9.25755 11.4028 9.24854 11.4119 9.23953 11.4164C9.22151 11.4119 9.19447 11.4028 9.18095 11.3893C9.11787 11.3983 9.07732 11.4209 9.03226 11.4389C8.96016 11.5335 8.96016 11.5335 8.90609 11.5605C8.90159 11.5515 8.89708 11.538 8.89258 11.529C8.87906 11.511 8.86103 11.52 8.84301 11.529C8.86103 11.52 8.88356 11.511 8.90159 11.502C8.9106 11.4749 8.9106 11.4704 8.9106 11.4659C8.9106 11.4569 8.89708 11.4434 8.88807 11.4344C8.86103 11.4118 8.84752 11.3938 8.82949 11.3578C8.82048 11.3398 8.82048 11.3352 8.81147 11.3307C8.80246 11.3172 8.78894 11.3082 8.77993 11.2947C8.7574 11.2541 8.7619 11.2496 8.76641 11.2496C8.76641 11.2451 8.76191 11.2451 8.7574 11.2406C8.65827 11.2001 8.63574 11.2316 8.6087 11.2677C8.59068 11.2586 8.56365 11.2406 8.50056 11.164C8.50507 11.155 8.50507 11.146 8.50957 11.137C8.50957 11.1145 8.50957 11.11 8.50957 11.11V11.1054V11.1009V11.0964V11.0919C8.50957 11.0874 8.50957 11.0874 8.50957 11.0829C8.50957 11.0784 8.50957 11.0784 8.50957 11.0739C8.50957 11.0694 8.50957 11.0694 8.50957 11.0649C8.48254 10.5918 8.48254 10.5918 8.51408 10.5422C8.55013 10.4791 8.55463 10.4746 8.5276 10.4251C8.5276 10.4206 8.5321 10.4206 8.5321 10.416C8.53661 10.4115 8.54112 10.4025 8.54562 10.398C8.54112 10.3845 8.54112 10.3755 8.53661 10.362C8.53661 10.353 8.53661 10.3485 8.53661 10.3394C8.54112 10.3575 8.54562 10.3755 8.55013 10.389C8.56815 10.371 8.56815 10.371 8.58617 10.3349C8.58617 10.2989 8.58167 10.2989 8.56365 10.2899C8.55463 10.2628 8.55463 10.2628 8.62673 10.1998C8.6042 10.1637 8.6042 10.1637 8.59969 10.1547C8.62222 10.1367 8.65827 10.1457 8.6808 10.1277C8.69882 10.1142 8.69882 10.1142 8.71685 10.0646L8.74388 10.0466C8.74839 10.0195 8.74839 10.0195 8.74839 10.0015C8.74388 10.0015 8.73938 9.997 8.73487 9.997C8.68981 9.98348 8.65827 9.91589 8.6042 9.95194C8.59969 9.95194 8.59519 9.94743 8.59068 9.94743C8.59068 9.93842 8.58617 9.92941 8.58167 9.9204C8.57716 9.9204 8.57266 9.9204 8.56815 9.9204C8.55463 9.93391 8.54562 9.95194 8.5321 9.96546C8.50957 9.93391 8.47353 9.93391 8.44649 9.91139C8.46452 9.91139 8.47803 9.91589 8.53661 9.90688C8.53661 9.91589 8.53661 9.9249 8.53661 9.92941C8.59519 9.86633 8.6808 9.94293 8.74388 9.89336C8.74388 9.87534 8.74388 9.87534 8.77092 9.8483C8.7619 9.72664 8.76191 9.72664 8.82048 9.75368C8.82949 9.74917 8.834 9.74467 8.84301 9.74016C8.9106 9.68158 8.9106 9.68158 8.93313 9.63202L8.96016 9.60048C8.95566 9.55091 8.98269 9.51036 8.97819 9.4608L9.00072 9.40222L8.99621 9.37068L8.97819 9.3076C8.96918 9.3121 8.96467 9.31661 8.95566 9.32111C8.93764 9.31661 8.92412 9.32562 8.90609 9.32562C9.00072 9.28507 9.07732 9.01922 9.00072 9.00119C8.9872 8.99669 8.97368 9.00119 8.96467 9.00119C8.95566 8.97416 8.95566 8.97416 8.98269 8.94712C9.01424 8.95163 9.01424 8.95163 9.04127 8.91558C9.15392 8.97866 9.15392 8.97866 9.17645 8.91108C9.17645 8.91108 9.26657 8.89756 9.25755 8.87052C9.25305 8.86151 9.24854 8.85701 9.20348 8.82096C9.19447 8.81195 9.19447 8.81195 9.1404 8.78041C9.11336 8.79392 9.11336 8.79392 9.10886 8.79843C9.10886 8.7804 9.12688 8.77139 9.13589 8.75788H9.1404C9.17194 8.79843 9.25755 8.82096 9.25755 8.82096C9.28459 8.84799 9.2891 8.8525 9.33866 8.86602C9.33415 8.85701 9.32514 8.84799 9.32064 8.84349C9.32064 8.83898 9.32064 8.83898 9.37921 8.73535C9.37471 8.72633 9.3702 8.71732 9.36119 8.71282C9.38823 8.68578 9.38823 8.68578 9.39273 8.6272C9.41075 8.60918 9.4423 8.58215 9.42878 8.46499C9.42878 8.46049 9.42427 8.45598 9.42427 8.45147C9.25755 8.36586 9.25755 8.36586 9.23052 8.29377C9.24404 8.28476 9.25755 8.27574 9.26657 8.26673C9.27107 8.27124 9.28459 8.27124 9.2891 8.26673C9.29811 8.22618 9.33415 8.19013 9.32965 8.14507C9.29811 8.13606 9.29811 8.13606 9.2891 8.14958C9.26657 8.14507 9.26657 8.14057 9.26206 8.12705C9.27107 8.11353 9.28459 8.10001 9.2891 8.08199C9.28459 8.06847 9.27558 8.05496 9.26657 8.04144C9.23052 8.03693 9.17645 8.08199 9.15842 8.03243C9.15392 8.03243 9.14941 8.03243 9.14941 8.02792C9.14491 8.03243 9.13589 8.03693 9.12688 8.04144C9.12238 8.02341 9.12238 8.02341 9.13139 8.00539C9.13139 7.99638 9.12688 7.98286 9.12238 7.97385C9.09534 7.98286 9.08633 8.0144 9.05929 8.01891C9.00973 7.97835 8.88356 8.07748 8.88356 8.07748C8.87906 8.07298 8.86554 8.06847 8.86103 8.06847C8.85202 8.0865 8.85202 8.0865 8.85202 8.10452C8.85653 8.10452 8.86103 8.10452 8.86554 8.10903C8.87455 8.12254 8.88356 8.14507 8.88807 8.1631C8.88807 8.17211 8.89258 8.18112 8.89258 8.19013C8.89708 8.19464 8.90159 8.19914 8.90159 8.19914C8.90609 8.19914 8.91511 8.19464 8.91961 8.19013C8.92412 8.19013 8.92862 8.19013 8.93313 8.19013C8.97819 8.24871 8.97819 8.24871 8.99621 8.2397C8.99621 8.2397 9.00072 8.28926 8.93764 8.33883C8.93313 8.33883 8.92862 8.33432 8.92862 8.33432C8.92412 8.33432 8.92412 8.33883 8.91961 8.33883C8.92412 8.36136 8.94214 8.52807 8.94665 8.52807C8.93763 8.5506 8.92412 8.57313 8.91511 8.59566C8.90609 8.61819 8.90609 8.61819 8.9106 8.73535C8.90159 8.74436 8.89258 8.75337 8.88356 8.75788C8.85202 8.81195 8.85202 8.81195 8.85653 8.86602C8.81147 8.76689 8.67179 8.71282 8.71685 8.57313C8.72135 8.57313 8.72586 8.57313 8.73036 8.57313C8.73487 8.57764 8.73487 8.58215 8.73938 8.58215C8.7574 8.5461 8.73938 8.52357 8.71685 8.49203C8.71234 8.47851 8.71234 8.46499 8.70783 8.45147L8.6853 8.42444L8.66728 8.3929L8.64926 8.41092L8.61772 8.3974H8.59068C8.5321 8.35234 8.51408 8.48752 8.51408 8.49203C8.51408 8.50104 8.51859 8.51456 8.51859 8.52357C8.49155 8.5506 8.49155 8.60467 8.49155 8.65424C8.49155 8.65424 8.451 8.55962 8.48254 8.51005C8.48254 8.50555 8.47803 8.50104 8.47803 8.49653C8.46001 8.49203 8.46001 8.49203 8.42847 8.49203C8.41946 8.45598 8.41946 8.45598 8.46452 8.43796C8.46001 8.41993 8.4555 8.40642 8.451 8.38839C8.42396 8.38389 8.42396 8.38389 8.41946 8.37487C8.38341 8.38389 8.36989 8.35234 8.34286 8.33883C8.33835 8.34784 8.32934 8.35685 8.33835 8.37487C8.32033 8.42444 8.25274 8.41543 8.24823 8.40191C8.24823 8.3974 8.24823 8.3929 8.24823 8.38839C8.24823 8.3929 8.24373 8.3929 8.23922 8.3974C8.2978 8.27574 8.3023 8.27574 8.31582 8.26673C8.32033 8.26673 8.32483 8.27124 8.32483 8.27124C8.32934 8.27124 8.33384 8.26673 8.33384 8.26673C8.33384 8.23519 8.33835 8.20365 8.29329 8.18563C8.26175 8.19914 8.21669 8.14507 8.18515 8.09551C8.16262 8.05946 8.18064 8.01891 8.15811 7.98286C8.13558 7.95583 8.12657 7.95132 8.09954 7.91077C8.04997 7.91978 8.04997 7.91978 8.01843 7.89725C8.08151 7.82515 8.08151 7.82515 8.09053 7.77108L8.11306 7.71701L8.09954 7.69448C8.09053 7.65844 8.09053 7.65393 8.13108 7.62239C8.17163 7.59085 8.17163 7.59085 8.18064 7.59085C8.18966 7.59085 8.2212 7.59535 8.24373 7.54579C8.25274 7.52776 8.25274 7.52776 8.25274 7.44215C8.25274 7.42413 8.25274 7.42413 8.26626 7.41061C8.27076 7.40611 8.27527 7.4016 8.27527 7.4016L8.3023 7.33401L8.32033 7.23939C8.32033 7.23038 8.31132 7.20334 8.31132 7.20334C8.30681 7.19883 8.26626 7.19433 8.26626 7.19433L8.19867 7.22587C8.19867 7.22587 8.18966 7.23038 8.18064 7.23939C8.17614 7.23488 8.17614 7.23038 8.16713 7.22587C8.16262 7.22587 8.15811 7.23038 8.15361 7.23038C8.1446 7.23038 8.14009 7.21686 8.13108 7.22136C8.12657 7.22587 8.12207 7.22587 8.11756 7.23038H8.11306C7.95535 7.35203 7.95535 7.35204 7.96436 7.41512C7.95535 7.41512 7.94634 7.41061 7.93733 7.41061C7.91029 7.60887 8.04997 7.80262 7.94634 7.99638C7.95535 8.0144 7.95986 8.03693 7.96436 8.05496C7.93282 8.06847 7.86523 8.10001 7.88325 8.28025C7.89677 8.28926 7.9193 8.30278 7.93282 8.3163C7.89677 8.40642 7.90128 8.52807 8.00491 8.51906H8.03646C8.05898 8.53258 8.09503 8.53258 8.12207 8.53258C8.13559 8.59566 8.11756 8.70831 8.11756 8.70831C8.12657 8.71282 8.13559 8.71732 8.1446 8.71732C8.16262 8.69029 8.16262 8.69029 8.17614 8.6272C8.23922 8.73535 8.17614 8.81645 8.09053 8.9291C8.00942 9.03273 8.10404 9.13637 8.09053 9.24001C8.06349 9.1589 8.06349 9.1589 8.06349 9.14989C8.04547 9.15439 8.02294 9.15439 8.00491 9.14989C7.97788 9.10934 7.9914 9.09131 8.00942 9.06428C8.01393 9.04175 8.01393 9.04175 8.01393 9.04175V9.03724V9.03274V9.01922V9.01471V9.01021V9.0057C8.01393 8.98768 8.00942 8.96515 8.00041 8.94712C7.9914 8.94712 7.97788 8.95163 7.96887 8.95163C7.96436 8.94712 7.95535 8.94262 7.95084 8.93811C7.94634 8.94712 7.93733 8.95614 7.93282 8.96064C7.92381 8.96064 7.9148 8.96064 7.90578 8.96064C7.89677 8.94262 7.88776 8.92459 7.87424 8.91108C7.86073 8.91558 7.86073 8.91558 7.80215 8.99669C7.78412 8.99669 7.7661 9.00119 7.74808 9.01021C7.77511 9.03724 7.79314 9.05076 7.7616 9.18594C7.75258 9.18143 7.74357 9.18143 7.73456 9.17692C7.73456 9.16791 7.73456 9.15439 7.73456 9.14538C7.65796 9.19495 7.58136 9.24451 7.50926 9.29408C7.46871 9.27155 7.41014 9.3121 7.3831 9.25352C7.37409 9.24902 7.36508 9.24902 7.35606 9.24451C7.33354 9.25803 7.33353 9.25803 7.27496 9.28056C7.17132 9.18594 7.17132 9.18594 7.14879 9.09131C7.03164 9.07779 6.86492 9.33463 6.88295 9.37969C6.88745 9.3887 6.89646 9.39321 6.90097 9.40222C6.95955 9.37518 6.95955 9.37518 6.96856 9.35265C7.0001 9.28957 7.0812 9.26704 7.11275 9.20396C7.11725 9.21297 7.12176 9.22649 7.12176 9.2355C7.06769 9.32562 6.97306 9.3842 6.93251 9.48783C6.96856 9.54641 7.00911 9.6906 7.00911 9.6906C7.0001 9.6906 6.98658 9.6906 6.98207 9.6906C6.97757 9.71313 6.97757 9.71313 6.98207 9.78071C6.97306 9.7717 6.96405 9.76269 6.95955 9.75368C6.94603 9.75368 6.9235 9.74467 6.91449 9.73115C6.95053 9.62751 6.95053 9.62751 6.93251 9.58245C6.91449 9.58696 6.89196 9.59597 6.88295 9.60498C6.8514 9.55993 6.8514 9.55542 6.85591 9.51487C6.80634 9.51487 6.80184 9.50585 6.77931 9.47882C6.7703 9.47882 6.75678 9.47882 6.74777 9.47882C6.72974 9.50135 6.72974 9.50135 6.68018 9.53289C6.67117 9.57344 6.66216 9.60949 6.54951 9.62301C6.52247 9.65906 6.50896 9.65905 6.47741 9.65004C6.4684 9.65455 6.45939 9.65906 6.45038 9.66356C6.43686 9.65004 6.41884 9.63653 6.40983 9.62301C6.40081 9.62751 6.3918 9.63202 6.3873 9.64103C6.37828 9.64103 6.36477 9.63653 6.36026 9.63653C6.36927 9.56894 6.4684 9.56443 6.45939 9.48783C6.45038 9.42024 6.37828 9.32111 6.31971 9.34815C6.28366 9.36167 6.25662 9.39771 6.22058 9.40672C6.07639 9.31661 6.07639 9.31661 6.03584 9.32562C6.02682 9.30759 6.02232 9.28056 6.01781 9.26254C5.85109 9.22198 5.85109 9.22198 5.84659 9.22649C5.78351 9.24902 5.81054 9.33914 5.74746 9.36167C5.74295 9.29858 5.76999 9.15439 5.76999 9.15439C5.76098 9.15439 5.75196 9.14989 5.74295 9.14989C5.69339 9.21748 5.69339 9.30759 5.65283 9.37969C5.6258 9.26254 5.70691 9.11835 5.57173 9.02372C5.54019 9.21748 5.54019 9.21748 5.48161 9.27605C5.44106 9.26704 5.42754 9.26254 5.37347 9.35716C5.36446 9.3887 5.35995 9.42024 5.35545 9.44728C5.35545 9.44728 5.35545 9.44728 5.35094 9.44728C5.35545 9.42024 5.36446 9.3887 5.36896 9.36167L5.35995 9.37969C5.35094 9.39321 5.34193 9.40672 5.33292 9.42024C5.33292 9.41574 5.32841 9.40672 5.32841 9.39771L5.3239 9.39321C5.34643 9.37068 5.36896 9.34364 5.38248 9.3121C5.39149 9.27155 5.4005 9.22649 5.40952 9.18594C5.37797 9.20847 5.36896 9.25803 5.3239 9.26704C5.28786 9.31661 5.2428 9.35265 5.21576 9.40672C5.21126 9.40222 5.20224 9.40222 5.19774 9.39771C5.18873 9.40672 5.17972 9.42024 5.1707 9.42925C5.19323 9.36167 5.19323 9.36167 5.17521 9.33463C5.15719 9.35265 5.14817 9.37969 5.13015 9.40222C5.07608 9.40672 5.07608 9.40673 5.05355 9.59147C5.04904 9.58246 5.04454 9.56894 5.04003 9.55542C5.03553 9.55091 5.03102 9.5419 5.03102 9.5374C5.02201 9.52838 5.02201 9.52838 5.02201 9.52388C4.95893 9.52838 4.95893 9.52838 4.93189 9.37068L4.94541 9.32111H4.93189C4.92738 9.32562 4.92288 9.33012 4.91837 9.33463C4.88683 9.32111 4.88683 9.32111 4.8643 9.33012C4.85529 9.33012 4.85529 9.33012 4.85078 9.33012C4.83727 9.27155 4.83276 9.20847 4.81023 9.14989C4.7832 9.14538 4.7832 9.14538 4.75616 9.17242C4.74715 9.16791 4.73363 9.16341 4.72462 9.1589C4.72913 9.13187 4.72462 9.10483 4.72913 9.0823C4.69758 9.07779 4.69308 9.07779 4.67505 9.09131C4.62549 8.97416 4.62549 8.97416 4.59845 8.95613C4.59845 8.95163 4.59845 8.94262 4.60296 8.93811C4.59395 8.94712 4.58043 8.96064 4.57142 8.96965C4.57592 8.89756 4.57592 8.89756 4.57142 8.88404C4.59395 8.81645 4.59395 8.81645 4.59395 8.7759C4.58944 8.7759 4.58043 8.78041 4.57142 8.78041C4.56691 8.7759 4.56241 8.77139 4.5579 8.76689C4.5534 8.77139 4.54889 8.7759 4.54438 8.78041C4.54438 8.76689 4.54438 8.76689 4.5579 8.7038C4.54438 8.70831 4.54438 8.70831 4.51735 8.74886C4.51735 8.69029 4.5579 8.63622 4.5534 8.57764C4.52636 8.61369 4.50834 8.65875 4.47229 8.69029C4.46328 8.68578 4.44976 8.67677 4.44525 8.66325C4.40921 8.69479 4.40019 8.74436 4.35964 8.7759C4.35964 8.77139 4.35964 8.76238 4.35514 8.75337C4.22446 8.81645 4.24249 8.96515 4.17941 9.06428C4.1749 9.05977 4.17039 9.05076 4.16589 9.04625L4.15688 9.05977C4.15688 9.05526 4.15237 9.05076 4.15237 9.04625C4.13435 9.07329 4.13435 9.07329 4.01269 9.65004C4.01719 9.65455 4.0217 9.65906 4.0217 9.66356C4.02621 9.65906 4.0262 9.65004 4.03071 9.64554C4.03522 9.70411 4.01269 9.75819 4.00368 9.81676H4.00818C4.01269 9.81676 4.0217 9.82127 4.0262 9.82127C4.0262 9.82577 4.0262 9.83479 4.0262 9.83929L4.01719 9.87534C4.01719 9.87083 4.01719 9.86182 4.01719 9.85731C3.99917 9.87984 3.99917 9.90688 3.97213 9.9204C3.96763 9.91589 3.95862 9.91139 3.95411 9.90688C3.95411 9.89787 3.9451 9.87984 3.94059 9.87083C3.9451 9.81676 3.97213 9.7717 3.97664 9.71763C3.97213 9.71313 3.96763 9.70862 3.96312 9.70411C3.93158 9.7672 3.93158 9.7672 3.92708 9.79423C3.92708 9.78973 3.92257 9.78071 3.92257 9.77621C3.91806 9.7717 3.91806 9.7717 3.91806 9.7717C3.80992 9.93842 3.80992 10.2448 3.83245 10.2628C3.84146 10.2899 3.84146 10.3124 3.84597 10.3394C3.86399 10.3214 3.873 10.2944 3.89103 10.2764C3.90455 10.3304 3.80992 10.6413 3.80992 10.6413C3.80542 10.6368 3.80542 10.6278 3.80091 10.6233C3.7964 10.6278 3.7964 10.6278 3.76486 10.6864C3.75585 10.6684 3.75585 10.6684 3.76036 10.6278C3.76036 10.6188 3.75585 10.6188 3.75585 10.6143C3.75585 10.6143 3.65672 10.9522 3.64771 11.0784C3.65672 11.0604 3.65672 11.0604 3.67024 11.0198C3.67024 11.0288 3.66573 11.0379 3.66573 11.0469C3.66573 11.0469 3.63419 11.1866 3.66123 11.2226C3.65672 11.2722 3.65672 11.2722 3.65222 11.2902C3.65222 11.2767 3.64771 11.2586 3.64771 11.2451C3.64771 11.2496 3.6432 11.2586 3.6432 11.2632C3.6387 11.2406 3.6387 11.2406 3.6432 11.2046C3.62067 11.2406 3.61617 11.4839 3.62969 11.502C3.66123 11.4569 3.65672 11.4028 3.67024 11.3533C3.67024 11.3533 3.6387 11.7183 3.62518 11.8309C3.62969 11.8309 3.6387 11.8264 3.6432 11.8264C3.64771 11.8219 3.64771 11.8129 3.65222 11.8084C3.65672 11.8174 3.66123 11.8354 3.66123 11.8444L3.67024 11.8489C3.67024 11.894 3.67024 11.894 3.67474 11.9841C3.67474 11.9841 3.67925 11.9796 3.68376 11.9751L3.69277 11.9075L3.69727 11.8895C3.70178 11.8669 3.70178 11.8444 3.70629 11.8264C3.7198 11.876 3.69727 11.93 3.70178 11.9796C3.70629 11.9751 3.71079 11.9706 3.7153 11.9661L3.7198 11.9526L3.72882 11.9435C3.73783 11.93 3.73783 11.93 3.74684 11.8805C3.75585 12.0066 3.69277 12.1238 3.69727 12.2499C3.68826 12.259 3.67925 12.2725 3.67925 12.2815C3.68826 12.304 3.69727 12.322 3.71079 12.3401C3.69727 12.3265 3.68376 12.3085 3.67024 12.2905C3.66573 12.3175 3.67024 12.3446 3.65672 12.3671C3.65222 12.3716 3.65222 12.3716 3.65222 12.3761C3.65222 12.3716 3.65222 12.3671 3.65222 12.3671C3.6387 12.3716 3.64771 12.3851 3.6432 12.3986C3.6387 12.4031 3.63419 12.4077 3.62969 12.4167C3.62969 12.4167 3.62969 12.4212 3.62969 12.4257C3.62518 12.4482 3.62067 12.4617 3.61617 12.4617C3.61166 12.4843 3.62067 12.5113 3.60716 12.5338C3.60265 12.5293 3.60265 12.5248 3.60265 12.5203C3.59814 12.5158 3.59814 12.5023 3.58913 12.5023C3.58913 12.5023 3.58913 12.5023 3.58913 12.4978C3.58012 12.5023 3.57111 12.5654 3.57111 12.5879C3.57111 12.6014 3.57111 12.6104 3.5666 12.6104L3.5621 12.6059V12.6149H3.55759V12.6104C3.55309 12.6239 3.55759 12.687 3.5621 12.7005C3.5666 12.6915 3.55759 12.678 3.5666 12.669V12.705L3.57111 12.6825C3.57111 12.6825 3.57111 12.6825 3.58012 12.6104C3.58463 12.6104 3.58463 12.6149 3.58463 12.6194C3.58463 12.6194 3.58463 12.6465 3.58463 12.6555C3.58913 12.6555 3.58913 12.651 3.58913 12.6465C3.58913 12.651 3.59364 12.6555 3.59364 12.66C3.59364 12.6825 3.59364 12.687 3.59814 12.6915C3.60265 12.6825 3.60265 12.651 3.60716 12.6329L3.61617 12.6284C3.61617 12.6194 3.61617 12.6149 3.61617 12.6059C3.62969 12.6239 3.61617 12.642 3.62067 12.66H3.62518C3.62518 12.6555 3.62518 12.6465 3.62969 12.642L3.63419 12.6239L3.6432 12.6059V12.6014C3.6432 12.6059 3.64771 12.6059 3.64771 12.6104V12.6059C3.64771 12.6059 3.64771 12.6059 3.65222 12.5699C3.65222 12.5518 3.64771 12.5338 3.65222 12.5158C3.65222 12.5158 3.66573 12.4752 3.67474 12.4662L3.67925 12.4617C3.67925 12.4617 3.67925 12.4617 3.67925 12.4707C3.68376 12.4662 3.68376 12.4572 3.68376 12.4527C3.69727 12.4392 3.69727 12.4392 3.70629 12.3716V12.3671C3.70629 12.3536 3.70629 12.3401 3.70629 12.3265C3.71079 12.322 3.7198 12.3175 3.72431 12.3175C3.72882 12.304 3.73783 12.2815 3.74684 12.268L3.75135 12.2499L3.76036 12.2364L3.76486 12.2274C3.7964 12.2004 3.77387 12.1508 3.80542 12.1238C3.85047 12.0021 3.82795 11.8715 3.87751 11.7498C3.87751 11.7408 3.87751 11.7363 3.88202 11.7273C3.89103 11.6417 3.9451 11.5741 3.97213 11.4975C3.97664 11.502 3.98565 11.5065 3.99016 11.5065C4.01269 11.4839 4.01719 11.4794 4.0262 11.4614C4.03522 11.5065 4.00818 11.5515 4.0217 11.5966C4.01269 11.5921 3.99917 11.5876 3.98565 11.5876C3.98115 11.5786 3.97664 11.5605 3.97664 11.5515C3.92257 11.5921 3.88202 11.9435 3.88202 11.9841C3.88202 11.9886 3.88202 11.9886 3.88202 11.9886C3.89553 11.9886 3.93158 11.9931 3.98565 11.8715C4.12533 11.8309 4.00368 11.6597 4.08028 11.5741C4.07577 11.5876 4.07126 11.6056 4.07126 11.6236C4.07126 11.6371 4.07126 11.6507 4.07126 11.6642C4.07577 11.6597 4.08028 11.6552 4.08478 11.6462C4.0983 11.6462 4.11182 11.6462 4.12083 11.6417C4.12984 11.6642 4.13435 11.6687 4.13885 11.7228C4.12984 11.7363 4.12984 11.7363 4.12083 11.7768C4.12533 11.7768 4.13435 11.7768 4.13885 11.7768C4.14336 11.7903 4.14336 11.8039 4.14786 11.8174H4.15237C4.1749 11.8039 4.18391 11.7768 4.20194 11.7588C4.18391 11.8039 4.18391 11.8039 4.20644 11.9165C4.21996 11.9165 4.23348 11.9165 4.24699 11.912C4.24699 11.9165 4.2515 11.9255 4.2515 11.93C4.26051 11.93 4.26952 11.9345 4.27403 11.9345L4.28304 11.9255L4.29205 11.921H4.30557C4.31458 11.9255 4.32359 11.939 4.33261 11.9481C4.33711 11.9435 4.34612 11.9435 4.35063 11.939C4.38217 12.0472 4.38217 12.0472 4.40921 12.0562C4.42272 12.0337 4.42272 12.0292 4.44525 12.0111C4.45427 12.0201 4.45877 12.0337 4.45877 12.0472C4.32359 12.1733 4.58043 12.2815 4.58043 12.4212C4.63 12.4122 4.63 12.3851 4.63 12.3716C4.63 12.3581 4.63 12.3581 4.63 12.3581C4.63901 12.3401 4.63901 12.3175 4.64351 12.2995C4.69758 12.4167 4.69758 12.4167 4.70209 12.4167C4.7111 12.3761 4.70209 12.3311 4.70209 12.286C4.84177 12.66 4.84177 12.66 4.83727 12.687C4.87331 12.687 4.91387 12.687 4.95442 12.6825C4.91387 12.6825 4.87331 12.687 4.83727 12.687C4.83276 12.6915 4.82826 12.7005 4.83727 12.7141C4.84628 12.7321 4.8643 12.7456 4.87331 12.7636L4.90486 12.8492C4.90486 12.8537 4.90486 12.8537 4.90936 12.8582C4.90936 12.8582 4.91837 12.8808 4.92738 12.8988V12.9033C4.9364 12.9123 4.93189 12.9258 4.9409 12.9393C4.94541 12.9484 4.96343 12.9439 4.96794 12.9574C4.96794 12.9619 4.96343 12.9664 4.95893 12.9709C4.9409 12.9844 4.94541 13.025 4.94541 13.034C4.94541 13.034 4.97244 13.043 4.98146 13.0205C4.98596 13.0114 5.00399 13.0114 5.00849 13.016L5.03553 13.088C5.03553 13.1016 5.02201 13.1106 5.02201 13.1241C5.02201 13.1286 5.02201 13.1286 5.02201 13.1331C5.02651 13.1556 5.05355 13.1646 5.05806 13.1917C5.05806 13.2097 5.05355 13.2142 5.04904 13.2187C5.04454 13.2187 5.04003 13.2277 5.04904 13.2683C5.05355 13.2818 5.05806 13.2953 5.06256 13.2998C5.06707 13.2998 5.07157 13.2953 5.07608 13.2953V13.2998C5.07608 13.3088 5.08059 13.3224 5.08059 13.3269C5.08059 13.3539 5.08059 13.3719 5.08509 13.3854C5.0896 13.3944 5.0941 13.4035 5.09861 13.4125L5.11663 13.3944C5.12114 13.399 5.13015 13.408 5.13916 13.417C5.13466 13.435 5.12114 13.453 5.10762 13.4665C5.11213 13.4846 5.11213 13.4846 5.18422 13.5927C5.19323 13.5747 5.20224 13.5522 5.20675 13.5341C5.21576 13.5386 5.22477 13.5431 5.23379 13.5476C5.22477 13.6783 5.34643 13.8315 5.34643 13.8315C5.36446 13.845 5.36446 13.845 5.36446 13.845L5.38248 13.8315C5.39149 13.8315 5.40501 13.8315 5.41402 13.8315C5.40952 13.8405 5.40952 13.8495 5.40501 13.8586C5.4005 13.8586 5.396 13.8631 5.39149 13.8631C5.36896 13.9171 5.35094 13.9667 5.38248 13.9982C5.38699 13.9937 5.396 13.9847 5.40501 13.9802C5.40501 14.1154 5.40501 14.1154 5.45007 14.1379L5.45457 14.1334C5.46359 14.1379 5.4726 14.1514 5.48161 14.1514C5.48612 14.1424 5.49062 14.1334 5.49963 14.1244C5.50865 14.1244 5.52216 14.1289 5.53118 14.1334C5.53568 14.1514 5.54019 14.174 5.53568 14.192C5.61228 14.219 5.61679 14.2235 5.66185 14.192C5.66635 14.21 5.67536 14.237 5.67987 14.2551C5.68888 14.2551 5.69789 14.2596 5.70691 14.2641C5.72493 14.3317 5.72493 14.3317 5.74746 14.3452C5.76098 14.3452 5.76548 14.3452 5.77449 14.3452H5.79252C5.81955 14.4038 5.92769 14.4128 5.90516 14.5029C5.90967 14.5164 5.90967 14.5164 5.90967 14.5164C5.9322 14.548 5.97726 14.5615 5.99078 14.602C5.98627 14.611 5.97726 14.62 5.97275 14.6291C5.97726 14.6381 5.98177 14.6471 5.98627 14.6561C5.9322 14.7237 5.89615 14.7012 5.82406 14.6561C5.81505 14.6606 5.80604 14.6651 5.79702 14.6696C5.78801 14.8994 5.95473 15.0751 5.99979 15.2869C6.12595 15.9763 6.25212 16.3864 6.61259 16.7198C6.65314 16.7108 6.68469 16.6883 6.72524 16.6792C6.59907 16.7964 6.7703 16.8775 6.7703 16.8775C6.8514 17.0037 6.97306 17.0983 7.06318 17.22C7.14429 17.3101 7.27045 17.274 7.36508 17.3326C7.45069 17.2966 7.63092 17.4452 7.67148 17.5264C7.67148 17.5309 8.09053 17.9454 8.21219 17.9995L8.24823 18.0085L8.3023 18.0355C8.42847 18.1211 8.42847 18.1211 8.46902 18.1797C8.46001 18.1887 8.451 18.2022 8.43748 18.2113C8.43297 18.2067 8.42396 18.2022 8.41946 18.1977C8.3789 18.2113 8.3789 18.2113 8.35637 18.2338C8.35637 18.2428 8.36088 18.2518 8.36539 18.2563C8.41946 18.2608 8.48254 18.3104 8.51408 18.3329C8.55013 18.3239 8.55463 18.3284 8.58617 18.3419C8.6808 18.387 8.79345 18.3645 8.88356 18.4185C8.95566 18.4636 8.94665 18.5672 9.02325 18.6078L9.2891 18.6934C9.3657 18.6934 9.47384 18.8286 9.50988 18.7294C9.50538 18.7204 9.50087 18.7069 9.49637 18.6979C9.36119 18.6033 9.16744 18.5943 9.08182 18.423C9.02325 18.405 9.02325 18.405 9.00973 18.405C9.01424 18.3915 9.02325 18.3735 9.03676 18.3645L8.41495 17.8958C8.36088 17.8643 8.29329 17.9003 8.23922 17.8643C8.1446 17.7922 8.10404 17.6796 8.02294 17.603C8.16713 17.5939 8.16713 17.5939 8.18064 17.5804C8.20768 17.5894 8.21219 17.5894 8.26626 17.63C8.27076 17.6255 8.27977 17.621 8.28428 17.6165C8.33835 17.6841 8.33835 17.6841 8.35187 17.7246C8.54562 17.8282 8.66278 18.0535 8.9106 18.0716C8.93764 18.0896 8.94214 18.1301 8.97368 18.1482L9.45581 18.378C9.50988 18.3599 10.1497 18.6528 10.1497 18.752C10.3255 18.8466 10.2849 18.9502 10.2849 18.9502C10.3705 19.0268 10.4787 19.1259 10.8211 19.144C10.8346 19.144 10.8346 19.144 10.8346 19.144C11.0599 19.1305 11.0599 19.1305 11.3798 19.1575C11.4114 19.1575 11.4204 19.1485 11.4339 19.144H11.4745C11.7583 19.1395 12.1503 19.1305 12.1909 18.9142C12.254 18.8736 12.3892 18.8826 12.4748 18.8961C12.4928 18.9142 12.5153 18.9097 12.5333 18.9007C12.5333 18.9007 12.5333 18.9052 12.5378 18.9052C12.6054 18.9142 12.6054 18.9142 12.6144 18.9007C12.8172 18.9727 12.8172 18.9727 12.8352 18.9682C12.8938 18.9592 12.9569 19.0043 13.011 18.9457C13.0335 18.9187 13.0876 18.9142 13.1056 18.9142C13.2678 18.9052 13.2678 18.9052 13.5337 18.806C13.5427 18.806 13.5427 18.806 13.5427 18.806C13.5517 18.8015 13.5607 18.8015 13.5697 18.797C13.6373 18.8556 13.7274 18.8421 13.7995 18.8871C13.8716 18.9322 13.9887 18.8421 14.0338 18.9457C14.0473 19.0223 14.1329 19.1124 14.3087 19.0539C14.3042 19.0313 14.3042 19.0313 14.2456 18.9953C14.2861 18.9863 14.3177 19.0403 14.3627 19.0223C14.3717 19.0268 14.3808 19.0313 14.3898 19.0313C14.4033 19.0223 14.4033 19.0223 14.4799 19.0043C14.5024 19.0223 14.5385 19.0178 14.5475 19.0539C14.579 19.0674 14.6151 19.0629 14.6421 19.0809C14.6511 19.0719 14.6646 19.0674 14.6736 19.0584C14.6736 19.0539 14.6691 19.0493 14.6691 19.0448C14.7007 19.0133 14.7502 19.0223 14.7908 19.0133C14.7683 19.1169 14.8539 19.2386 14.7367 19.3242C14.7412 19.3332 14.7502 19.3512 14.7548 19.3603C14.7502 19.3738 14.7457 19.3918 14.7412 19.4008C14.8584 19.4143 14.935 19.4819 14.98 19.5946C15.0116 19.6081 15.0116 19.6081 15.1873 19.7748C15.1648 19.9235 15.1648 19.9235 15.1017 20.0136C15.1197 20.0542 15.1332 20.0947 15.1468 20.1353C15.1558 20.1398 15.1693 20.1488 15.1783 20.1533C15.1287 20.1938 15.1287 20.1938 15.0431 20.2885C15.0521 20.3065 15.0792 20.329 15.0972 20.338C15.1242 20.3561 15.1242 20.3561 15.1242 20.3561C15.1197 20.3696 15.1197 20.3696 15.1918 20.5723C15.2053 20.5994 15.2053 20.5994 15.2053 20.5994C15.2189 20.5994 15.2369 20.6039 15.2504 20.6039C15.2549 20.6129 15.2639 20.6264 15.2729 20.6354C15.3135 20.6354 15.3495 20.6444 15.3901 20.6489C15.3946 20.6264 15.3901 20.5949 15.3856 20.5678C15.4532 20.6129 15.4667 20.6219 15.4396 20.694C15.363 20.8247 15.363 20.8247 15.6019 20.9824C15.6019 20.9914 15.6019 21.0094 15.6019 21.0184C16.9536 21.3969 16.9987 21.3969 17.1068 21.3969C17.1924 21.442 17.598 21.3744 17.6025 21.3744C17.8188 21.3158 17.8188 21.3158 18.0936 21.3383C18.1702 21.3429 18.7019 21.8836 18.7019 21.8881C18.729 21.9016 18.729 21.9016 18.8822 22.0863V22.0908C19.0038 22.2035 19.1886 22.244 19.2561 22.4198C19.2697 22.4243 19.2832 22.4288 19.2967 22.4288C19.3192 22.4873 19.3688 22.5324 19.3733 22.5955C19.4229 22.618 19.6662 22.7172 19.7923 22.6586C19.9455 22.7217 19.9455 22.7217 19.9816 22.7171C19.9906 22.7262 19.9996 22.7352 20.0086 22.7442C20.0176 22.7397 20.0357 22.7397 20.0447 22.7352C20.0492 22.7442 20.0582 22.7577 20.0627 22.7667C20.0267 22.7847 19.9906 22.7938 19.9546 22.8163C19.9636 22.8208 19.9771 22.8298 19.9861 22.8388C20.0492 22.7892 20.1258 22.7892 20.1979 22.7667C20.1889 22.7757 20.1753 22.7847 20.1663 22.7892C20.1708 22.7938 20.1799 22.7983 20.1844 22.8028C20.2114 22.7937 20.2114 22.7938 20.3376 22.7712C20.3421 22.7802 20.3421 22.7802 20.3421 22.7802C20.4232 22.7532 20.7296 22.6225 20.7341 22.6225C20.7251 22.6225 20.7161 22.6225 20.707 22.6225L20.7115 22.618C20.7341 22.6045 20.7341 22.6045 20.7341 22.6045C20.7566 22.6 20.7881 22.591 20.8107 22.582C20.8017 22.5865 20.7882 22.5955 20.7791 22.6C20.8512 22.5685 21.0495 22.4468 21.0495 22.4468C20.9639 22.4919 20.8693 22.5234 20.7836 22.5775C20.7746 22.582 20.7611 22.5865 20.7476 22.5955C20.7566 22.591 20.7701 22.582 20.7791 22.573C20.68 22.6 20.68 22.6 20.671 22.6C20.6755 22.591 20.6845 22.5775 20.689 22.5685C20.68 22.5639 20.6665 22.5549 20.6575 22.5459C20.6755 22.5279 20.6935 22.5054 20.707 22.4873C20.6845 22.4873 20.6575 22.4783 20.6349 22.4738C20.5448 22.5234 20.5403 22.5234 20.4908 22.5144C20.4908 22.5009 20.4908 22.4873 20.4908 22.4738C20.5088 22.4603 20.5313 22.4378 20.5448 22.4243C20.5448 22.4107 20.5403 22.3972 20.5403 22.3882C20.5313 22.3882 20.5223 22.3882 20.5178 22.3882V22.3747C20.5178 22.3657 20.5223 22.3477 20.5223 22.3387C20.5088 22.3387 20.4953 22.3341 20.4817 22.3341C20.4998 22.3206 20.5313 22.3071 20.5538 22.3071C20.5538 22.2981 20.5583 22.2801 20.5583 22.2711C20.3916 22.2981 20.3916 22.2981 20.3916 22.2981C20.4322 22.2215 20.5268 22.2305 20.5764 22.1719C20.5674 22.1674 20.5493 22.1629 20.5403 22.1629C20.5403 22.1494 20.5403 22.1359 20.5403 22.1224C20.5313 22.1134 20.5178 22.1043 20.5088 22.0953C20.5809 21.9196 20.9864 21.861 20.8332 21.6493C20.7791 21.6583 20.7476 21.6087 20.7025 21.5952C20.6124 21.6447 20.5944 21.6402 20.5538 21.6312C20.5133 21.5411 20.5133 21.5411 20.5133 21.5231C20.5043 21.5141 20.4908 21.5006 20.4817 21.487C20.5043 21.5006 20.5493 21.5321 20.5764 21.6132C20.8377 21.6042 21.1306 21.3474 21.072 21.0995C21.2297 20.8607 21.3244 20.4101 21.1306 20.347C21.1351 20.338 21.1441 20.3245 21.1531 20.3155C21.1441 20.3065 21.1306 20.2975 21.1216 20.293C21.1396 20.2614 21.1666 20.2389 21.1892 20.2119C21.2432 20.0587 21.2432 20.0587 21.428 19.892C21.4235 19.8829 21.4145 19.8694 21.41 19.8604C21.464 19.8108 21.464 19.8108 21.4685 19.7613C21.7254 19.5675 21.7299 19.5405 21.7299 19.4999L21.847 19.0313C21.829 18.9773 21.8065 18.9232 21.793 18.8691C21.8876 18.7159 21.6758 18.3329 21.6127 18.3014C21.6262 18.2788 21.6443 18.2563 21.6623 18.2383C21.6488 18.2383 21.6353 18.2428 21.6217 18.2473C21.9326 17.7156 21.8515 17.3957 21.7975 17.1839C21.7885 17.1614 21.7659 17.1388 21.7524 17.1208C21.7479 17.1208 21.7479 17.1208 21.7479 17.1208C21.7074 17.0983 21.6713 17.0713 21.6308 17.0487C21.6488 17.0172 21.6623 16.9902 21.6713 16.9586C21.6308 16.9181 21.6308 16.909 21.6983 16.8054C21.7074 16.8054 21.7209 16.8054 21.7299 16.8009C21.7389 16.7829 21.7479 16.7604 21.7524 16.7468C21.7614 16.7468 21.7749 16.7423 21.784 16.7423C21.8065 16.7378 21.8155 16.7333 21.8245 16.7288C21.8696 16.6838 21.847 16.6072 21.9011 16.5666C21.9597 16.517 22.0453 16.5441 22.1084 16.499C22.1174 16.499 22.1174 16.4945 22.1174 16.4945H22.1219H22.1264H22.1309L22.1354 16.49L22.1399 16.4855H22.1444H22.1489C22.1579 16.4855 22.167 16.4855 22.176 16.4855C22.194 16.5035 22.221 16.5215 22.2436 16.5351L22.2706 16.5306C22.3202 16.5351 22.3202 16.5351 22.4238 16.49C22.4328 16.4855 22.4418 16.481 22.4508 16.4765C22.4643 16.4855 22.4824 16.5035 22.5004 16.5125C22.586 16.5621 22.6266 16.6838 22.7527 16.6747L22.7843 16.6657C22.8428 16.6342 22.9104 16.6252 22.969 16.5936L23.0051 16.6162L23.0186 16.6432L23.0546 16.6657L23.0817 16.6747L23.0952 16.7063L23.1087 16.7333L23.1312 16.7468C23.1402 16.7468 23.1537 16.7513 23.1628 16.7513C23.2033 16.7243 23.2033 16.7243 23.2484 16.7198C23.2529 16.7153 23.5277 16.4449 23.3835 16.3548C23.3835 16.1566 23.3835 16.1566 23.4917 15.5122C23.5413 15.2283 23.6899 14.9715 23.7035 14.6831C23.6809 14.7507 23.6809 14.7507 23.6179 14.8949C23.6043 14.8634 23.6043 14.8634 23.6539 14.7192C23.6314 14.7417 23.6088 14.7687 23.5908 14.8499C23.5818 14.8363 23.5728 14.8093 23.5773 14.7913C23.6314 14.593 23.6764 14.4308 23.6269 14.1785C23.6899 14.1289 23.762 14.0838 23.8567 14.0433C23.9062 13.9081 23.9918 13.791 24.0459 13.6603C24.0459 13.6603 24.0865 13.5702 24.145 13.4575C24.2982 13.1646 24.3163 13.1646 24.5235 13.1511C24.5416 13.1782 24.5641 13.2187 24.5776 13.2503C24.5911 13.2548 24.6137 13.2593 24.6272 13.2638C24.6407 13.2503 24.6407 13.2503 24.8525 12.9709C24.857 12.9844 24.866 13.0069 24.875 13.0205C24.8885 13.0205 24.911 13.025 24.9291 13.0295C24.9426 13.0205 24.9561 13.0024 24.9696 12.9934C25.0327 13.0565 25.0733 13.1016 25.0642 13.2367C25.0913 13.7279 25.0913 13.7279 25.4833 14.0478C25.5013 14.0703 25.5148 14.1064 25.5193 14.1334V14.1379V14.1424V14.1469V14.1514V14.1559V14.1604C25.5193 14.1604 25.5193 14.165 25.5238 14.1965C25.7266 14.6606 25.7266 14.6606 25.5824 15.7105C25.5824 15.742 25.5824 15.7781 25.5779 15.8186C25.5689 15.9673 25.6365 16.107 25.641 16.2557C25.6906 16.5666 25.5779 16.864 25.5689 17.1704C25.5689 17.1749 25.5509 17.4543 25.4337 17.675C25.3887 17.8282 25.3887 17.8282 25.3887 17.8508C25.4067 17.8282 25.4292 17.7922 25.4427 17.7652C25.4833 17.6931 25.5238 17.6165 25.5689 17.5444C25.5689 17.5444 25.5689 17.5444 25.5734 17.5399C25.5914 17.5128 25.614 17.4813 25.6275 17.4543C25.65 17.4227 25.659 17.3867 25.677 17.3551C25.677 17.3506 25.6816 17.3461 25.6816 17.3416C25.7942 17.1073 26.1862 16.2647 26.4521 15.0797L26.4566 15.0661H26.4611L26.4701 15.0256C26.5197 14.8318 26.6008 14.5029 26.6819 13.8766C26.6819 13.8721 26.6819 13.8721 26.6819 13.8721C26.7044 13.7008 26.7179 13.5476 26.7269 13.417V13.4125V13.408C26.7359 13.3269 26.7359 13.3269 26.7449 13.1106C26.7495 13.0295 26.7585 12.8943 26.7585 12.6284C26.7495 12.6825 26.7179 13.1286 26.7179 13.1331L26.7134 13.2052C26.7179 13.1917 26.7179 13.1917 26.7224 13.1646C26.7224 13.1917 26.7179 13.2412 26.7089 13.2998L26.6999 13.3899C26.6999 13.4215 26.6819 13.6017 26.6548 13.8135C26.7044 13.3584 26.7224 12.8763 26.6999 12.3806C26.6999 12.1103 26.6999 12.0922 26.5692 10.5332C26.5151 10.0285 26.3394 9.27605 26.1412 8.70831C26.1231 8.65424 26.1231 8.65424 26.0916 8.57764C26.1186 8.67226 26.1186 8.67226 26.1457 8.78491C26.1502 8.81645 26.1592 8.86151 26.1637 8.89305L26.1682 8.90657V8.92459C26.1727 8.96515 26.1817 9.01922 26.1817 9.06428C26.1862 9.08681 26.1727 9.11835 26.1592 9.14088C26.1502 9.12736 26.1412 9.10934 26.1367 9.09582L26.1321 9.08681C26.0781 9.00119 26.042 8.90657 25.988 8.82096C25.9609 8.79392 25.9204 8.75788 25.8843 8.73535C25.7672 8.64523 25.7221 8.50104 25.6365 8.38839C25.4608 8.25772 25.4292 8.00088 25.2445 7.87472C25.24 7.8567 25.24 7.85219 25.24 7.84318C25.231 7.83417 25.2174 7.83867 25.2129 7.82515C25.2129 7.82515 25.2039 7.80713 25.1679 7.708C25.1589 7.73954 25.1408 7.76207 25.1454 7.79812C25.1454 7.79812 25.1454 7.80713 25.1499 7.82065C24.9336 7.60437 24.8164 7.28895 24.4965 7.1763C24.465 7.14026 24.4199 7.08619 24.3884 7.04563C24.3884 7.04563 24.51 7.14927 24.6452 7.23038L24.51 7.08168C24.6812 7.18532 25.0417 7.48721 25.0462 7.49172L25.1363 7.59986C25.1679 7.64942 25.1904 7.67646 25.222 7.71701C25.222 7.71701 25.222 7.71701 25.231 7.73053C25.2535 7.7846 25.2535 7.7846 25.24 7.81164C25.3346 7.84768 25.2986 8.00088 25.4202 8.0144C25.4292 7.98286 25.4337 7.96934 25.4247 7.9378C25.5013 8.0144 25.5869 8.091 25.632 8.19464C25.641 8.20365 25.65 8.21717 25.659 8.23068C25.668 8.2442 25.6771 8.26673 25.6816 8.28025L25.6996 8.32531L25.7401 8.3974C25.7717 8.45598 25.7717 8.45598 25.8888 8.67226C25.9474 8.61369 25.8212 8.11804 25.8212 8.11353L25.8077 8.06847C25.7897 8.00539 25.7807 7.94231 25.7672 7.87923C25.7537 7.82515 25.7491 7.82065 25.7221 7.75306C25.6861 7.67195 25.6771 7.65393 25.6455 7.56381L25.641 7.5548V7.54579C25.5869 7.40611 25.5869 7.40611 25.5058 7.20785C25.3301 6.8699 25.24 6.69417 25.1859 6.59054C25.1589 6.54548 25.1363 6.50042 25.1093 6.45987C25.1003 6.44635 25.0913 6.43734 25.0868 6.42382L25.0733 6.40129L25.0597 6.37876C25.0147 6.31117 25.0147 6.31117 24.9922 6.28864C24.9967 6.29315 25.0012 6.30216 25.0012 6.30667C24.9922 6.30216 24.9922 6.30216 24.9922 6.30216C24.9696 6.27963 24.9696 6.27963 24.7804 6.01378C24.8615 6.15347 24.8615 6.15347 24.8705 6.16698L24.9065 6.22105C25.0147 6.41481 25.0147 6.42833 25.0462 6.54097C24.9741 6.52745 24.9471 6.4869 24.9291 6.43283C24.911 6.4103 24.8705 6.36975 24.8209 6.32018C24.7714 6.23007 24.7263 6.13544 24.6903 6.04082C24.6993 6.04983 24.7083 6.05884 24.7173 6.06785C24.7669 6.13544 24.8119 6.20754 24.8705 6.27062C24.875 6.26611 24.8795 6.2571 24.8795 6.2526C24.857 6.18501 24.8119 6.13094 24.7759 6.07236C24.7804 6.07236 24.7849 6.07236 24.7894 6.07236C24.7849 6.05434 24.7714 6.0273 24.7578 5.99576H24.7624C24.7488 5.96422 24.7398 5.94169 24.7308 5.91916C24.7443 5.93718 24.7714 5.96872 24.8254 6.0273C24.8254 6.01829 24.8209 6.00928 24.8164 6.00477C24.8254 6.00027 24.8254 6.00027 24.8254 6.00027V5.99576V5.99125V5.98675V5.98224V5.97774V5.97323C24.8209 5.96872 24.8209 5.95971 24.8164 5.9507C24.8209 5.95521 24.8254 5.96422 24.8299 5.96872C24.8254 5.96422 24.8254 5.95971 24.8209 5.95521C24.8209 5.95521 24.8164 5.9507 24.8164 5.94619C24.8119 5.93718 24.8029 5.92817 24.7984 5.91916C24.7984 5.92366 24.8029 5.92366 24.8029 5.92817V5.9507ZM8.10855 5.46857C8.09954 5.45055 8.09954 5.44604 8.09503 5.44153C8.09954 5.43252 8.10855 5.42802 8.11306 5.419C8.11756 5.419 8.12207 5.4145 8.12657 5.4145C8.13559 5.44153 8.11306 5.46857 8.10855 5.46857ZM8.28428 5.1081C8.27977 5.09909 8.27527 5.09458 8.27076 5.08557C8.2978 5.05403 8.31132 5.036 8.33384 5.0315C8.3023 5.06754 8.28879 5.09458 8.28428 5.1081ZM9.01874 5.29284C9.01874 5.29284 8.9872 5.3379 8.98269 5.34691C8.97819 5.3379 8.99621 5.30185 8.99621 5.30185C9.00522 5.29284 9.00973 5.29284 9.01874 5.29284ZM14.0023 4.04921C14.0113 4.05822 14.0158 4.05822 14.0248 4.06723C14.0158 4.06723 14.0068 4.06723 13.9933 4.07174C13.9933 4.06723 13.9978 4.05822 14.0023 4.04921ZM14.0203 4.13482C14.0248 4.13482 14.0248 4.13032 14.0293 4.13032C14.0383 4.13482 14.0518 4.13933 14.0608 4.14383C14.0653 4.15285 14.0653 4.16186 14.0653 4.17087C14.0518 4.15735 14.0248 4.16186 14.0203 4.13482ZM13.6103 4.45474C13.6103 4.42771 13.6238 4.41419 13.6598 4.38265C13.7004 4.3466 13.7184 4.26549 13.7004 4.25198C13.6959 4.24747 13.6012 4.24747 13.5517 4.30154L13.5337 4.31506C13.5246 4.31506 13.5156 4.31956 13.5111 4.31956C13.5111 4.31506 13.5066 4.31055 13.5066 4.31055C13.5517 4.27901 13.7364 4.18439 13.8626 4.21593C13.8806 4.22044 13.8896 4.22494 13.8986 4.22945C13.9437 4.24296 13.9752 4.24747 13.9707 4.22044C14.0518 4.20241 14.0608 4.20241 14.0744 4.18439C14.0789 4.20692 14.0879 4.23395 14.1059 4.25198C14.1149 4.25198 14.1239 4.25198 14.1329 4.25648C14.1284 4.26099 14.1284 4.26549 14.1239 4.27C14.0879 4.30605 14.0383 4.29704 13.9978 4.31506C13.9797 4.32407 13.9076 4.36462 13.9076 4.36462C13.8491 4.53585 13.831 4.54937 13.8265 4.54937C13.8265 4.55838 13.822 4.5764 13.7815 4.58541C13.777 4.58541 13.777 4.58541 13.777 4.58541C13.7905 4.56739 13.831 4.52233 13.831 4.52233C13.813 4.47727 13.813 4.47727 13.8536 4.45024C13.8536 4.43672 13.8536 4.43221 13.822 4.40067C13.8265 4.39617 13.831 4.38715 13.8355 4.37814C13.8491 4.32407 13.8491 4.31956 13.8265 4.28802C13.7409 4.29253 13.7409 4.29253 13.6778 4.40067L13.7049 4.4998C13.7094 4.50431 13.7094 4.50431 13.7139 4.50881C13.7229 4.50881 13.7319 4.50881 13.7364 4.50431C13.7184 4.53134 13.6869 4.54035 13.6598 4.55838L13.6103 4.45474ZM20.8693 8.54159C20.8602 8.5461 20.8557 8.5461 20.8602 8.55511C20.8602 8.55511 20.8377 8.54159 20.8152 8.52357C20.8197 8.51005 20.8242 8.50104 20.8242 8.48752C20.8332 8.49653 20.8557 8.51456 20.8557 8.51456C20.8602 8.52357 20.8602 8.53258 20.8693 8.54159ZM5.17521 9.63653C5.14367 9.59147 5.14817 9.56894 5.1707 9.55091C5.19774 9.51937 5.22477 9.49234 5.25632 9.4653C5.23379 9.51036 5.22477 9.55993 5.17972 9.59147C5.17972 9.60498 5.17521 9.62301 5.17521 9.63653ZM21.1621 20.9598C21.1621 20.9689 21.1486 20.9914 21.1441 20.9914C21.1441 20.9914 21.1441 20.9914 21.1396 20.9869C21.1351 20.9914 21.1306 21.0364 21.1351 21.0455C21.1351 21.05 21.1171 21.086 21.1126 21.0995C21.0991 21.086 21.09 21.077 21.0946 21.059V21.0545C21.0946 21.0545 21.0946 21.05 21.0991 21.05C21.1081 21.0364 21.1171 21.0229 21.1171 21.0184C21.1261 20.9959 21.1171 20.9734 21.1261 20.9553C21.1261 20.9508 21.1306 20.9463 21.1351 20.9418C21.1351 20.9373 21.1396 20.9328 21.1396 20.9238C21.1396 20.9148 21.1441 20.9058 21.1486 20.9058L21.1531 20.9103C21.1441 20.9058 21.1621 20.9553 21.1621 20.9598ZM21.3649 17.2019C21.3559 17.2019 21.3469 17.2019 21.3424 17.2019C21.3379 17.1749 21.3379 17.1569 21.3379 17.1479C21.3424 17.1659 21.3559 17.1839 21.3649 17.2019ZM22.0453 7.10421C22.0228 7.08619 21.9912 7.05465 21.9687 7.03212C21.9326 7.06816 21.8921 7.0997 21.8606 7.13575C21.2342 6.98255 21.2342 6.98255 21.1441 6.8699C21.1621 6.82034 21.1531 6.77077 21.1666 6.72121C21.1802 6.72121 21.2027 6.7167 21.2162 6.7167C21.2748 6.77979 21.2928 6.77528 21.3469 6.75275C21.3514 6.73923 21.3514 6.7167 21.3559 6.70319C21.3694 6.69868 21.3874 6.69417 21.4055 6.68967C21.4145 6.69868 21.428 6.7167 21.437 6.72572C21.5406 6.69868 21.6217 6.7933 21.7254 6.77979C21.7344 6.76627 21.7434 6.75275 21.7524 6.73923C21.8515 6.74824 21.9507 6.7167 22.0498 6.72572C22.0904 6.7122 22.0904 6.7122 22.2345 6.74824C22.2706 6.76627 22.2976 6.7933 22.3202 6.82034C22.3202 6.8699 22.2886 6.99156 22.2751 7.05014C22.1624 7.05915 22.0453 7.10421 22.0453 7.10421ZM22.2616 7.1763C22.2616 7.18982 22.2616 7.20334 22.2661 7.21686C22.2616 7.20785 22.2616 7.19883 22.2571 7.18982C22.2571 7.18532 22.2571 7.18081 22.2616 7.1763ZM22.2616 7.92428C22.2616 7.92428 22.2616 7.91978 22.2886 7.91978C22.2931 7.92879 22.2976 7.9333 22.3066 7.96934C22.2931 7.96484 22.2751 7.95583 22.2616 7.94681L22.2571 7.95132C22.2571 7.94231 22.2571 7.9333 22.2616 7.92428ZM23.5322 7.49172C23.5232 7.55931 23.5863 7.71251 23.699 7.99187C23.6945 8.03693 23.6809 8.10452 23.6584 8.14507C23.6359 8.14057 23.6359 8.14057 23.3385 8.28476C23.3385 8.28476 23.3385 8.28476 23.325 8.29827C23.3024 8.27124 23.3024 8.27124 23.2033 8.20365C23.1537 8.21717 23.1042 8.2397 23.0501 8.2442C22.8068 8.42894 22.8068 8.42894 22.6716 8.41543C22.6671 8.42894 22.6626 8.45147 22.6581 8.46499C22.5094 8.46499 22.577 8.27124 22.5229 8.17661L22.5184 8.17211L22.5139 8.1676L22.5094 8.1631L22.5049 8.15859L22.5004 8.15408L22.4959 8.14958L22.4914 8.14507V8.14057C22.3562 8.07748 22.3472 8.07298 22.3202 7.99187C22.3382 7.98286 22.3517 7.98286 22.3832 7.97836C22.6085 7.96033 22.622 7.92879 22.6311 7.90626C22.6356 7.89274 22.6221 7.87021 22.6221 7.86571C22.5995 7.84318 22.5635 7.83417 22.5409 7.81164C22.5094 7.7801 22.5004 7.73954 22.4824 7.70349C22.577 7.7846 22.7032 7.83417 22.7933 7.83867C22.8023 7.82966 22.8113 7.82065 22.8158 7.81614C22.8158 7.80713 22.8113 7.79361 22.8113 7.7846C22.8473 7.80713 22.8789 7.83867 22.9194 7.8612C22.9194 7.95132 22.9194 7.95132 22.9194 7.95132C22.978 8.00088 23.0681 7.98737 23.1267 8.03693C23.1357 8.04144 23.1447 8.05045 23.1537 8.05496C23.1628 8.05496 23.1718 8.05045 23.1808 8.05045C23.1583 7.96033 23.0591 7.89274 23.1087 7.7846C23.1267 7.7846 23.1537 7.79361 23.1673 7.80713C23.1312 7.61788 23.2258 7.37907 23.2258 7.37907C23.2934 7.36555 23.2934 7.36555 23.3115 7.34753C23.2979 7.30247 23.2709 7.26642 23.2664 7.22136C23.343 7.19883 23.4421 7.33852 23.5322 7.49172ZM23.6449 5.93268C23.699 6.01378 23.7485 6.08137 23.7485 6.08588C23.708 6.03631 23.6764 5.98224 23.6449 5.93268ZM23.9558 6.37425C23.9513 6.38327 23.9468 6.39228 23.9468 6.40129C24.0639 6.52746 24.1586 6.67615 24.2577 6.81583C24.2532 6.82935 24.2487 6.84287 24.2442 6.85188C24.2081 6.84737 24.2081 6.84737 24.1541 7.14927C24.0414 7.21235 23.9918 7.39259 23.8161 7.34302C23.7846 7.41512 23.7711 7.42413 23.7215 7.46018C23.6674 7.44666 23.6314 7.44215 23.5998 7.44215C23.5548 7.33852 23.5277 7.2484 23.5458 7.21686C23.5097 7.12223 23.4016 6.83386 23.3881 6.68967C23.4061 6.68967 23.4286 6.68516 23.4466 6.68516C23.5052 6.73022 23.5638 6.77077 23.6224 6.81583C23.6539 6.79781 23.6584 6.7933 23.699 6.76176C23.6449 6.67164 23.6088 6.60856 23.5818 6.5635C23.5683 6.51844 23.5548 6.47338 23.5863 6.42833C23.6719 6.45987 23.6719 6.45987 23.7305 6.44184C23.717 6.2571 23.717 6.2571 23.735 6.09939C23.8161 6.20303 23.8161 6.20303 23.8477 6.2526C23.8477 6.2526 23.8477 6.2526 23.8341 6.21204C23.8206 6.18501 23.8116 6.17149 23.8026 6.15797C23.8522 6.23457 23.8882 6.32018 23.9423 6.39678C23.9468 6.38327 23.9513 6.37425 23.9558 6.36074C23.9558 6.36524 23.9558 6.36975 23.9558 6.37425Z"
                    fill="url(#paint96_linear_268_6864)"
                  />
                  <path
                    d="M16.841 17.648C16.841 17.6525 16.841 17.657 16.841 17.666C16.841 17.6795 16.8455 17.6931 16.8455 17.7066C16.8455 17.7156 16.841 17.7291 16.8455 17.7381C16.8455 17.7426 16.8455 17.7426 16.85 17.7471C16.8545 17.7471 16.8635 17.7471 16.8861 17.7291C16.9041 17.7156 16.9176 17.7066 16.9176 17.7066C16.9266 17.7021 16.9356 17.6976 16.9401 17.6931L16.9446 17.6886C16.9491 17.6795 16.9356 17.6525 16.9266 17.639C16.8951 17.5894 16.8725 17.6029 16.8635 17.6029C16.859 17.6074 16.8455 17.621 16.841 17.648Z"
                    fill="url(#paint97_linear_268_6864)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_268_6864"
                      x1="13.2904"
                      y1="1.09787"
                      x2="13.4838"
                      y2="1.0559"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_268_6864"
                      x1="17.6388"
                      y1="5.95518"
                      x2="18.0896"
                      y2="5.93118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_268_6864"
                      x1="17.1792"
                      y1="5.8707"
                      x2="17.6239"
                      y2="5.82109"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_268_6864"
                      x1="14.6251"
                      y1="5.34239"
                      x2="15.6718"
                      y2="5.25038"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_268_6864"
                      x1="21.4188"
                      y1="8.37015"
                      x2="21.4416"
                      y2="8.36745"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_268_6864"
                      x1="21.2662"
                      y1="8.5145"
                      x2="21.7742"
                      y2="8.48055"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_268_6864"
                      x1="20.8649"
                      y1="8.13696"
                      x2="21.0155"
                      y2="8.13355"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_268_6864"
                      x1="20.7798"
                      y1="8.02794"
                      x2="20.8261"
                      y2="8.02628"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_268_6864"
                      x1="20.9593"
                      y1="9.34557"
                      x2="20.9699"
                      y2="9.34287"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_268_6864"
                      x1="18.1008"
                      y1="14.192"
                      x2="20.4671"
                      y2="14.1178"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_268_6864"
                      x1="20.1861"
                      y1="10.7235"
                      x2="20.3767"
                      y2="10.7122"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_268_6864"
                      x1="19.4729"
                      y1="11.2635"
                      x2="19.6042"
                      y2="11.2584"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_268_6864"
                      x1="8.38191"
                      y1="9.01199"
                      x2="11.7551"
                      y2="8.76463"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint13_linear_268_6864"
                      x1="5.78897"
                      y1="8.86742"
                      x2="6.60875"
                      y2="8.83965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint14_linear_268_6864"
                      x1="6.19952"
                      y1="9.40671"
                      x2="7.61497"
                      y2="9.35416"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint15_linear_268_6864"
                      x1="7.83896"
                      y1="6.32534"
                      x2="8.02177"
                      y2="6.32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint16_linear_268_6864"
                      x1="7.92343"
                      y1="6.4008"
                      x2="8.10708"
                      y2="6.39163"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint17_linear_268_6864"
                      x1="8.21228"
                      y1="6.33365"
                      x2="8.3205"
                      y2="6.33046"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint18_linear_268_6864"
                      x1="7.8736"
                      y1="7.06229"
                      x2="9.13333"
                      y2="6.95533"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint19_linear_268_6864"
                      x1="7.46875"
                      y1="6.40295"
                      x2="7.78859"
                      y2="6.39152"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint20_linear_268_6864"
                      x1="7.5723"
                      y1="6.48692"
                      x2="7.65221"
                      y2="6.48352"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint21_linear_268_6864"
                      x1="7.65519"
                      y1="8.91537"
                      x2="8.05761"
                      y2="8.89378"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint22_linear_268_6864"
                      x1="7.38509"
                      y1="8.23574"
                      x2="7.87841"
                      y2="8.22247"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint23_linear_268_6864"
                      x1="7.36969"
                      y1="7.23491"
                      x2="7.84496"
                      y2="7.21606"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint24_linear_268_6864"
                      x1="7.83822"
                      y1="7.00707"
                      x2="7.91345"
                      y2="7.00407"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint25_linear_268_6864"
                      x1="7.87435"
                      y1="7.16273"
                      x2="8.10477"
                      y2="7.15408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint26_linear_268_6864"
                      x1="7.91032"
                      y1="7.2394"
                      x2="7.94797"
                      y2="7.23845"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint27_linear_268_6864"
                      x1="7.97795"
                      y1="6.83572"
                      x2="8.02029"
                      y2="6.83426"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint28_linear_268_6864"
                      x1="6.54133"
                      y1="7.71821"
                      x2="7.34039"
                      y2="7.68395"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint29_linear_268_6864"
                      x1="6.47295"
                      y1="7.46015"
                      x2="6.62057"
                      y2="7.45584"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint30_linear_268_6864"
                      x1="6.32871"
                      y1="7.40161"
                      x2="6.8833"
                      y2="7.37893"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint31_linear_268_6864"
                      x1="6.41865"
                      y1="7.3426"
                      x2="6.42326"
                      y2="7.34254"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint32_linear_268_6864"
                      x1="6.83371"
                      y1="7.02764"
                      x2="6.91341"
                      y2="7.02407"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint33_linear_268_6864"
                      x1="6.91391"
                      y1="6.69991"
                      x2="6.99461"
                      y2="6.69731"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint34_linear_268_6864"
                      x1="6.96679"
                      y1="6.78874"
                      x2="7.22267"
                      y2="6.77752"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint35_linear_268_6864"
                      x1="7.04343"
                      y1="6.52292"
                      x2="7.28482"
                      y2="6.51065"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint36_linear_268_6864"
                      x1="7.36948"
                      y1="6.72565"
                      x2="7.4516"
                      y2="6.72414"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint37_linear_268_6864"
                      x1="7.3173"
                      y1="7.33289"
                      x2="7.40004"
                      y2="7.33058"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint38_linear_268_6864"
                      x1="9.04359"
                      y1="7.08264"
                      x2="9.47276"
                      y2="7.0542"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint39_linear_268_6864"
                      x1="13.1918"
                      y1="11.0434"
                      x2="13.6525"
                      y2="10.9776"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint40_linear_268_6864"
                      x1="14.0554"
                      y1="10.9747"
                      x2="15.1632"
                      y2="10.9217"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint41_linear_268_6864"
                      x1="9.03842"
                      y1="9.70938"
                      x2="9.85414"
                      y2="9.66252"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint42_linear_268_6864"
                      x1="5.38302"
                      y1="14.7146"
                      x2="5.98586"
                      y2="14.6818"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint43_linear_268_6864"
                      x1="4.92864"
                      y1="13.9667"
                      x2="5.13446"
                      y2="13.963"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint44_linear_268_6864"
                      x1="4.85088"
                      y1="13.3452"
                      x2="4.99682"
                      y2="13.3429"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint45_linear_268_6864"
                      x1="4.64796"
                      y1="12.7591"
                      x2="4.70955"
                      y2="12.7585"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint46_linear_268_6864"
                      x1="4.74252"
                      y1="12.7681"
                      x2="4.81785"
                      y2="12.7671"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint47_linear_268_6864"
                      x1="4.71107"
                      y1="12.9934"
                      x2="4.77228"
                      y2="12.9929"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint48_linear_268_6864"
                      x1="4.81404"
                      y1="12.913"
                      x2="4.88068"
                      y2="12.9115"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint49_linear_268_6864"
                      x1="4.78679"
                      y1="13.0655"
                      x2="4.82521"
                      y2="13.0653"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint50_linear_268_6864"
                      x1="5.11198"
                      y1="13.7008"
                      x2="5.19669"
                      y2="13.6988"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint51_linear_268_6864"
                      x1="3.52805"
                      y1="12.7771"
                      x2="3.55408"
                      y2="12.7769"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint52_linear_268_6864"
                      x1="3.76935"
                      y1="12.5588"
                      x2="3.87973"
                      y2="12.5572"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint53_linear_268_6864"
                      x1="3.58719"
                      y1="11.4433"
                      x2="3.61829"
                      y2="11.4431"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint54_linear_268_6864"
                      x1="13.551"
                      y1="11.6382"
                      x2="13.6972"
                      y2="11.6285"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint55_linear_268_6864"
                      x1="13.6875"
                      y1="11.6421"
                      x2="13.9076"
                      y2="11.6299"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint56_linear_268_6864"
                      x1="14.0312"
                      y1="11.468"
                      x2="14.1576"
                      y2="11.465"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint57_linear_268_6864"
                      x1="14.1644"
                      y1="11.4711"
                      x2="14.2821"
                      y2="11.4676"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint58_linear_268_6864"
                      x1="9.77589"
                      y1="8.25492"
                      x2="9.99779"
                      y2="8.24757"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint59_linear_268_6864"
                      x1="9.48899"
                      y1="8.02304"
                      x2="9.5768"
                      y2="8.02104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint60_linear_268_6864"
                      x1="9.50215"
                      y1="7.83868"
                      x2="9.56655"
                      y2="7.83686"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint61_linear_268_6864"
                      x1="9.63371"
                      y1="7.83932"
                      x2="9.7208"
                      y2="7.83508"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint62_linear_268_6864"
                      x1="9.89738"
                      y1="7.88892"
                      x2="9.93074"
                      y2="7.88806"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint63_linear_268_6864"
                      x1="10.01"
                      y1="8.00991"
                      x2="10.1711"
                      y2="7.99737"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint64_linear_268_6864"
                      x1="9.3232"
                      y1="7.9006"
                      x2="9.44268"
                      y2="7.89426"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint65_linear_268_6864"
                      x1="8.82497"
                      y1="8.65939"
                      x2="8.89653"
                      y2="8.65779"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint66_linear_268_6864"
                      x1="8.69756"
                      y1="8.10451"
                      x2="8.79213"
                      y2="8.09566"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint67_linear_268_6864"
                      x1="9.5318"
                      y1="9.8278"
                      x2="9.74438"
                      y2="9.81999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint68_linear_268_6864"
                      x1="9.95558"
                      y1="9.77417"
                      x2="10.0736"
                      y2="9.77132"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint69_linear_268_6864"
                      x1="10.0442"
                      y1="9.28505"
                      x2="10.1599"
                      y2="9.27843"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint70_linear_268_6864"
                      x1="10.1455"
                      y1="9.17239"
                      x2="10.2484"
                      y2="9.16633"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint71_linear_268_6864"
                      x1="11.5464"
                      y1="6.1895"
                      x2="11.7991"
                      y2="6.16787"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint72_linear_268_6864"
                      x1="12.2947"
                      y1="6.95288"
                      x2="12.4077"
                      y2="6.9489"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint73_linear_268_6864"
                      x1="12.3892"
                      y1="6.98701"
                      x2="12.4644"
                      y2="6.98441"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint74_linear_268_6864"
                      x1="12.1763"
                      y1="6.81781"
                      x2="12.3043"
                      y2="6.81042"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint75_linear_268_6864"
                      x1="11.5931"
                      y1="6.42065"
                      x2="11.9751"
                      y2="6.3929"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint76_linear_268_6864"
                      x1="12.0155"
                      y1="6.72565"
                      x2="12.2936"
                      y2="6.7151"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint77_linear_268_6864"
                      x1="13.3382"
                      y1="3.97264"
                      x2="13.5829"
                      y2="3.9503"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint78_linear_268_6864"
                      x1="13.405"
                      y1="4.02217"
                      x2="13.712"
                      y2="3.98398"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint79_linear_268_6864"
                      x1="11.1153"
                      y1="5.87861"
                      x2="11.1997"
                      y2="5.87328"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint80_linear_268_6864"
                      x1="11.1997"
                      y1="5.96031"
                      x2="11.2907"
                      y2="5.95733"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint81_linear_268_6864"
                      x1="11.5239"
                      y1="6.0633"
                      x2="11.5863"
                      y2="6.06073"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint82_linear_268_6864"
                      x1="11.5647"
                      y1="5.99574"
                      x2="11.6314"
                      y2="5.99245"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint83_linear_268_6864"
                      x1="11.4925"
                      y1="5.95522"
                      x2="11.5301"
                      y2="5.9537"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint84_linear_268_6864"
                      x1="11.5782"
                      y1="5.93265"
                      x2="11.6753"
                      y2="5.92059"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint85_linear_268_6864"
                      x1="11.7235"
                      y1="5.99014"
                      x2="11.802"
                      y2="5.98482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint86_linear_268_6864"
                      x1="9.04581"
                      y1="11.4389"
                      x2="9.17675"
                      y2="11.428"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint87_linear_268_6864"
                      x1="5.09388"
                      y1="13.426"
                      x2="5.1033"
                      y2="13.4259"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint88_linear_268_6864"
                      x1="5.37353"
                      y1="9.33013"
                      x2="5.47234"
                      y2="9.32732"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint89_linear_268_6864"
                      x1="17.1363"
                      y1="7.96607"
                      x2="19.2571"
                      y2="7.8383"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint90_linear_268_6864"
                      x1="17.4091"
                      y1="8.16486"
                      x2="18.1714"
                      y2="8.13741"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint91_linear_268_6864"
                      x1="14.5141"
                      y1="6.5517"
                      x2="17.8011"
                      y2="6.17413"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint92_linear_268_6864"
                      x1="21.444"
                      y1="8.23604"
                      x2="21.8367"
                      y2="8.21968"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint93_linear_268_6864"
                      x1="24.8839"
                      y1="6.44637"
                      x2="24.945"
                      y2="6.44497"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint94_linear_268_6864"
                      x1="24.9469"
                      y1="6.47783"
                      x2="24.9704"
                      y2="6.47703"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint95_linear_268_6864"
                      x1="15.5837"
                      y1="0.822987"
                      x2="15.6327"
                      y2="0.781122"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint96_linear_268_6864"
                      x1="3.58378"
                      y1="22.8388"
                      x2="27.7717"
                      y2="21.6285"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                    <linearGradient
                      id="paint97_linear_268_6864"
                      x1="16.8411"
                      y1="17.7471"
                      x2="16.9502"
                      y2="17.7434"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00A0AA" />
                      <stop offset="1" stopColor="#00AAA0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start shrink-0 relative">
            <div
              className="text-dark text-left relative"
              style={{ font: "700 10.24px 'Ubuntu', sans-serif" }}
            >
              World Friends
            </div>

            <div
              className="text-dark text-left relative"
              style={{
                margin: "-5.12px 0 0 0",
                font: "700 18.82px 'Ubuntu', sans-serif",
              }}
            >
              Languages
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-12 items-center justify-start flex-1 relative">
          <div className="bg-gray-light rounded-[8px_8px_8px_0px] pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[399.09px] h-[55px] relative">
            <svg
              className="shrink-0 relative overflow-visible"
              style={{}}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6591 11C16.6591 12.0384 16.3512 13.0534 15.7743 13.9168C15.1974 14.7801 14.3775 15.453 13.4182 15.8504C12.4589 16.2477 11.4033 16.3517 10.3849 16.1491C9.36646 15.9466 8.431 15.4466 7.69678 14.7123C6.96255 13.9781 6.46254 13.0426 6.25996 12.0242C6.05739 11.0058 6.16136 9.95024 6.55872 8.99093C6.95608 8.03162 7.62899 7.21168 8.49234 6.6348C9.3557 6.05792 10.3707 5.75002 11.4091 5.75002C12.8015 5.75002 14.1368 6.30314 15.1214 7.28771C16.106 8.27227 16.6591 9.60763 16.6591 11ZM22.4397 22.0306C22.3701 22.1004 22.2873 22.1557 22.1963 22.1934C22.1052 22.2312 22.0076 22.2506 21.9091 22.2506C21.8105 22.2506 21.7129 22.2312 21.6219 22.1934C21.5308 22.1557 21.4481 22.1004 21.3785 22.0306L16.6853 17.3366C15.0532 18.6944 12.9605 19.3707 10.8425 19.2249C8.72449 19.0791 6.7442 18.1224 5.31355 16.5538C3.88289 14.9852 3.11202 12.9254 3.16128 10.803C3.21054 8.68051 4.07613 6.65873 5.57801 5.15818C7.07989 3.65763 9.10243 2.79382 11.2249 2.74644C13.3475 2.69906 15.4065 3.47175 16.9739 4.90379C18.5412 6.33582 19.4962 8.31696 19.6401 10.4351C19.784 12.5533 19.1058 14.6454 17.7466 16.2763L22.4397 20.9694C22.5094 21.039 22.5648 21.1218 22.6025 21.2128C22.6402 21.3039 22.6597 21.4015 22.6597 21.5C22.6597 21.5986 22.6402 21.6962 22.6025 21.7872C22.5648 21.8783 22.5094 21.961 22.4397 22.0306ZM11.4091 17.75C12.7441 17.75 14.0492 17.3541 15.1592 16.6124C16.2692 15.8707 17.1344 14.8165 17.6453 13.5831C18.1562 12.3497 18.2898 10.9925 18.0294 9.68316C17.7689 8.37379 17.1261 7.17105 16.1821 6.22705C15.2381 5.28304 14.0353 4.64017 12.7259 4.37972C11.4166 4.11927 10.0594 4.25294 8.82597 4.76383C7.59257 5.27472 6.53837 6.13989 5.79667 7.24992C5.05497 8.35995 4.65909 9.66499 4.65909 11C4.66107 12.7896 5.37287 14.5054 6.63831 15.7708C7.90375 17.0362 9.61948 17.748 11.4091 17.75Z"
                fill="#AECBCE"
              />
            </svg>

            <div
              className="text-dark text-center relative"
              style={{
                font: "var(--base, 300 16px/20px 'Ubuntu', sans-serif)",
              }}
            >
              Busca clases o cursos
            </div>
          </div>

          <div
            className="text-dark text-center relative"
            style={{ font: "700 16px 'Ubuntu', sans-serif" }}
          >
            Ver cursos
          </div>

          <div
            className="text-dark text-center relative"
            style={{ font: "700 16px 'Ubuntu', sans-serif" }}
          >
            Clases 1 a 1
          </div>

          <div
            className="text-dark text-center relative"
            style={{ font: "700 16px 'Ubuntu', sans-serif" }}
          >
            Marco teórico
          </div>

          <div className="bg-secondary rounded-[8px_8px_8px_0px] pt-2 pr-3 pb-2 pl-3 flex flex-row gap-2 items-start justify-center shrink-0 relative">
            <div
              className="text-light text-center relative"
              style={{ font: "700 16px 'Ubuntu', sans-serif" }}
            >
              Ingresa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
