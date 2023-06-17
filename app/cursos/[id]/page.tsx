// Página que muestra el detalle de un curso

import payloadApi from "@/lib/axios";
import { DateTime } from "luxon";
import { slateToHtml } from "slate-serializers";
import Icon from "@/components/Icon";
import AddToCartButton from "../addToCartButton";

// Obtenemos la información de un curso
async function getCurso(id: string) {
  const curso = await payloadApi.get(`/cursos/${id}`);

  if (curso.status !== 200) {
    throw new Error(curso.statusText);
  }

  return curso.data;
}

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const curso = await getCurso(id);

  if (!curso) {
    return <div>Curso no encontrado</div>;
  }

  const startDate = DateTime.fromISO(curso.startDate).toLocaleString(
    DateTime.DATE_FULL
  );

  const fechaInicio = DateTime.fromISO(curso.startDate);
  const fechaFin = DateTime.fromISO(curso.endDate);
  // Obtenemos la diferencia en semanas
  let diferenciaDeSemanas = fechaFin
    .diff(fechaInicio, "weeks")
    .weeks.toFixed(0);

  let duracion = diferenciaDeSemanas;

  // Esta variable nos dice si escribir "semanas", "días" o "meses"
  let magnitudFecha = Number(diferenciaDeSemanas) > 1 ? "semanas" : "semana";

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

  const objetivos = slateToHtml(curso.objetivos);

  const temario = slateToHtml(curso.temario);

  return (
    // Two columns: left one with the course image, right one with the course info
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 pt-12 font-normal">
      {/* LEFT COLUMN */}
      <div className="relative">
        <img
          src="/images/demo/cursocover.jpg"
          alt={curso.alt}
          className="object-cover rounded-3xl rounded-bl-none"
          width={1280}
          height={720}
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col gap-4">
        {/* COURSE NAME */}
        <h1 className="text-4xl font-bold">{curso.name}</h1>

        {/* COURSE DESCRIPTION */}
        <div className="flex flex-col">
          <p className="font-bold text-primary">Comienza:</p>
          <p>{startDate}</p>
        </div>

        <p>{curso.descripcion}</p>

        {/* COURSE TAGS */}
        <div className="flex gap-2">
          {curso.tags.map((tag: any) => (
            <div className="rounded-full px-4 py-2 bg-primary/10" key={tag.id}>
              <p className="text-primary">{tag.title}</p>
            </div>
          ))}
        </div>

        {/* TWO HORIZONTAL COLUMNS: ONE WITH "MODALIDAD" AND OTHER WITH "DURACIÓN" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* MODALIDAD */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-primary">Modalidad:</p>
            <p>{curso.modalidad}</p>
          </div>

          {/* DURACIÓN */}
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

        <div className="flex gap-12">
          {/* PRECIO */}
          <div className="flex gap-2">
            <p className="text-xl">
              <span className="text-secondary font-bold">
                {new Intl.NumberFormat("es-MX", {
                  style: "currency",
                  currency: "MXN",
                }).format(curso.price)}
              </span>
              {/* // MXN DEBE ESTAR MÁS CHIQUITO Y ARRIBA DEL PRECIO */}
              <span className="text-sm align-top">MXN</span>
            </p>
          </div>
          {/* BOTÓN DE AÑADIR AL CARRITO */}
          <div className="flex w-full justify-center items-center text-center mx-auto items-stretch">
            <AddToCartButton curso={curso} />
          </div>
        </div>

        {/* Objetivos: */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-primary">Objetivos:</p>
          <div
            dangerouslySetInnerHTML={{
              __html: objetivos,
            }}
            className="prose"
          />
        </div>

        {/* Temario: */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-primary">Temario:</p>
          <div
            dangerouslySetInnerHTML={{
              __html: temario,
            }}
            className="prose"
          />
        </div>
      </div>
    </div>
  );
}
