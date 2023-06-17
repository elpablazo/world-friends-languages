import GridBanderas from "@/components/GridBanderas";
import Image from "next/image";
import { iBandera } from "@/components/BanderaThumbnail";
import CardCursoLP from "@/components/CardCursoLP";
import Icon from "@/components/Icon";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import payloadApi from "@/lib/axios";
import Link from "next/link";
import { DateTime } from "luxon";
const bannerSrc = "/images/demo/bannerCursos.jpg";

async function getStaticProps() {
  const res = await payloadApi.get("/cursos");

  if (res.status !== 200) {
    throw new Error(res.statusText);
  }

  return res.data;
}

// Todo: pasar las banderas a un componente
const banderas = [
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
];

const Page = async () => {
  const cursos = await getStaticProps();

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
      <GridBanderas banderas={banderas} />
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-6">
          {cursos?.docs?.map((curso: any, i: number) => {
            const fechaInicio = DateTime.fromISO(curso.startDate);
            const fechaFin = DateTime.fromISO(curso.endDate);
            // Obtenemos la diferencia en semanas
            let diferenciaDeSemanas = fechaFin
              .diff(fechaInicio, "weeks")
              .weeks.toFixed(0);

            let duracion = diferenciaDeSemanas;

            // Esta variable nos dice si escribir "semanas", "días" o "meses"
            let magnitudFecha =
              Number(diferenciaDeSemanas) > 1 ? "semanas" : "semana";

            // Si la diferencia es 0, entonces escribimos en días
            if (Number(diferenciaDeSemanas) === 0) {
              duracion = fechaFin.diff(fechaInicio, "days").days.toFixed(0);

              magnitudFecha = "días";
            }

            // Si la diferencia es mayor a 12 semanas, entonces escribimos en meses
            if (Number(diferenciaDeSemanas) > 12) {
              duracion = fechaFin.diff(fechaInicio, "months").months.toFixed(0);

              magnitudFecha = "meses";
            }

            return (
              <Link href={`/cursos/${curso.id}`} key={i}>
                <CardCursoLP
                  titulo={curso.name}
                  imagenUrl={
                    banderas.find(
                      (bandera: iBandera) => bandera.pais === curso.flag
                    )?.imagenUrl || "/images/demo/banderas/usa.jpg"
                  }
                >
                  <div className="flex flex-col gap-4">
                    <p>{curso.descripcion}</p>
                    <div className="flex flex-row gap-2 text-primary text-base">
                      <div className="mt-1">
                        <Icon variant="reloj" />
                      </div>
                      <div className="grid">
                        <span className="font-bold">Duración:</span>
                        <span className="text-dark">
                          {duracion} {magnitudFecha}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardCursoLP>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
