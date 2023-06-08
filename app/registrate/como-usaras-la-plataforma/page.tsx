import TipoCuentaForm from "./tipoCuentaForm";

const Page = () => {
  return (
    <div className="container py-12 grid gap-12">
      <h1 className="text-center text-2xl font-bold">
        ¿Cómo usarás la plataforma?
      </h1>
      <TipoCuentaForm />
    </div>
  );
};

export default Page;
