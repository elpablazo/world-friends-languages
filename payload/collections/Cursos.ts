import { CollectionBeforeChangeHook, CollectionConfig } from "payload/types";

const Cursos: CollectionConfig = {
  slug: "cursos",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // Tab de información general
        {
          label: "Información general",
          description: "Información general del curso.",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Nombre del curso",
              required: true,
            },
            {
              name: "description",
              label: "Descripción",
              type: "richText",
              required: true,
            },
          ],
        },

        // Horarios
        {
          label: "Horarios y fechas",
          description:
            "Horarios del curso. Marca cuándo inicia y finaliza el curso, y se generan automáticamente las clases en las fechas dadas.",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "startDate",
                  type: "date",
                  label: "Fecha de inicio",
                  required: true,
                  admin: {
                    date: {
                      displayFormat: "dd/MM/yyyy",
                    },
                  },
                },
                {
                  name: "endDate",
                  type: "date",
                  label: "Fecha de finalización",
                  required: true,
                  admin: {
                    date: {
                      displayFormat: "dd/MM/yyyy",
                    },
                  },
                  validate: (value, allValues) => {
                    // Validamos que la hora de finalización sea mayor a la hora de inicio
                    const startTime = new Date(allValues.siblingData.startDate);
                    const endTime = new Date(value);

                    if (endTime > startTime) {
                      return true;
                    } else {
                      return "La fecha de finalización debe ser mayor a la fecha de inicio.";
                    }
                  },
                },
              ],
            },
            {
              type: "array",
              name: "schedule",
              label: "Horarios",
              fields: [
                {
                  type: "select",
                  name: "day",
                  label: "Día de la semana",
                  required: true,
                  options: [
                    {
                      label: "Lunes",
                      value: "monday",
                    },
                    {
                      label: "Martes",
                      value: "tuesday",
                    },
                    {
                      label: "Miércoles",
                      value: "wednesday",
                    },
                    {
                      label: "Jueves",
                      value: "thursday",
                    },
                    {
                      label: "Viernes",
                      value: "friday",
                    },
                    {
                      label: "Sábado",
                      value: "saturday",
                    },
                    {
                      label: "Domingo",
                      value: "sunday",
                    },
                  ],
                },
                {
                  type: "date",
                  name: "startTime",
                  label: "Hora de inicio",
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: "timeOnly",
                    },
                  },
                },
                {
                  type: "date",
                  name: "endTime",
                  label: "Hora de finalización",
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: "timeOnly",
                    },
                  },
                  validate: (value, allValues) => {
                    // Validamos que la hora de finalización sea mayor a la hora de inicio
                    const startTime = new Date(allValues.siblingData.startTime);
                    const endTime = new Date(value);

                    if (endTime > startTime) {
                      return true;
                    } else {
                      return "La hora de finalización debe ser mayor a la fecha de inicio.";
                    }
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    // Sidebar position
    {
      name: "tags",
      type: "relationship",
      label: "Etiquetas",
      relationTo: "tags",
      hasMany: true,
      admin: {
        position: "sidebar",
        description: "Elije el idioma del curso.",
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, operation, originalDoc }) => {
        console.log("originalDoc: ", originalDoc);
      },
    ],
    // En este hook, creamos las clases automáticamente cuando se crea un curso según los horarios establecidos
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === "create") {
          console.log(doc);
          // Creamos una clase para cada horario en el periodo especificado
          const startDate = new Date(doc.startDate);
          const endDate = new Date(doc.endDate);
          const days = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
          ];
          // Guardamos el número de clases que se van a crear
          let numberOfClassesCreated = 0;

          // Obtenemos los distintos horarios del curso
          const schedules = doc.schedule;

          // Para cada horario, creamos las clases
          for (let i = 0; i < schedules.length; i++) {
            const schedule = schedules[i];

            // tODO: HACER CONCORDAR EL NÚMERO DE CLASE (PORQUE PRIMERO SE CREAN TODAS LAS CLASES DE UN HORARIO EJ: LUNES, Y LUEGO LAS DE MARTES, ETC. Y ENTONCES LAS DE MARTES NO TIENEN EL NÚMERO CORRECTO)

            // Creamos una clase para cada día de la semana
            for (
              let date = new Date(startDate);
              date <= new Date(endDate);
              date.setDate(date.getDate() + 1)
            ) {
              // Si el día de la semana de la fecha actual es igual al día de la semana del horario, creamos la clase
              if (date.getDay() === days.indexOf(schedule.day)) {
                numberOfClassesCreated++;
                const startTime = new Date(schedule.startTime);
                const endTime = new Date(schedule.endTime);

                // Creamos la clase
                const newClass = {
                  name: `${doc.name} - ${numberOfClassesCreated}`,
                  startDate: startTime,
                  endDate: endTime,
                  // Relation to the course
                  curso: doc.id,
                };

                // Guardamos la clase
                const clase = await req.payload.create({
                  collection: "clases",
                  data: newClass,
                });

                // Imprimimos la fecha de la clase y el título
                console.log("Clase creada: ", date, " -", clase.name);
              }
            }
          }
        }

        console.log("Terminé.");

        return doc;
      },
    ],
  },
};

export default Cursos;
