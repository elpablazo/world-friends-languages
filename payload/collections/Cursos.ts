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
    // En este hook, creamos las clases automáticamente cuando se crea un curso según los horarios establecidos
    afterChange: [
      async ({ doc, req, operation }) => {
        console.log("doc-----------------", doc);

        if (operation === "create") {
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

          // Creamos una clase para cada día de la semana
          for (let i = 0; i < days.length; i++) {
            const day = days[i];

            // Creamos una clase para cada día de la semana
            for (
              let date = startDate;
              date <= endDate;
              date.setDate(date.getDate() + 1)
            ) {
              // Si el día de la semana de la fecha actual es igual al día de la semana del horario, creamos la clase
              if (date.getDay() === i) {
                numberOfClassesCreated++;
                const startTime = new Date(doc.schedule[0].startTime);
                const endTime = new Date(doc.schedule[0].endTime);

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
              }
            }
          }
        }

        return doc;
      },
    ],
  },
};

export default Cursos;
