import Logo from "./payload/Logo";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-12 items-center justify-start w-[1128px]sticky left-[76px] top-[0]">
      <div className="container flex items-center justify-between gap-24">
        <Logo />

        <div className="flex flex-row gap-12 items-center relative">
          <div className="bg-gray-light rounded pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2 items-center justify-start relative">
            <div className="text-dark text-center relative">
              Busca clases o cursos
            </div>
          </div>

          <div className="text-dark text-center">Ver cursos</div>

          <div className="text-dark text-center">Clases 1 a 1</div>

          <div className="text-dark text-center">Marco teórico</div>
          <div className="bg-secondary rounded flex flex-row gap-2 items-start justify-center relative">
            <div className="text-light text-center">Ingresa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
