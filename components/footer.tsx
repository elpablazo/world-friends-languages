import Logo from "./payload/Logo";

const Footer = () => {
  return (
    <div className="flex flex-col gap-0 items-start justify-start self-stretch relative mt-24">
      <div className="bg-dark py-12 grid lg:grid-cols-3 gap-y-4 gap-x-12 items-start justify-center self-stretch relative">
        <div className="grid gap-4 relative w-full max-w-sm mx-auto">
          <div className="text-gray-mid text-left relative">Nosotros</div>

          <div className="text-gray-dark text-left relative">Marco teórico</div>

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

        <div className="grid gap-4 relative w-full max-w-sm mx-auto">
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

        <div className="grid gap-4 relative w-full max-w-sm mx-auto">
          <div className="text-gray-mid text-left relative">Redes sociales</div>

          <div className="flex flex-row gap-2 items-center justify-start relative">
            <div className="text-gray-dark text-left relative">Facebook</div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start relative">
            <div className="text-gray-dark text-left relative">Instagram</div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-start relative">
            <div className="text-gray-dark text-left relative">
              rargumosa1@yahoo.com.mx
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
  );
};

export default Footer;
