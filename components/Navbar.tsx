import Logo from "./payload/Logo";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-12 items-center justify-start w-screen sticky top-[0] z-[10]">
      <div className="container flex items-center justify-between gap-24 py-4">
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
          <div className="bg-secondary rounded flex flex-row gap-2 items-start justify-center relative px-3 py-1">
            <div className="text-light text-center">Ingresa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
