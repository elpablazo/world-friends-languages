import { Block, CollectionConfig } from "payload/types";

const QuoteBlock: Block = {
  slug: "Quote", // required
  imageURL: "https://google.com/path/to/image.jpg",
  imageAltText: "A nice thumbnail image to show what this block looks like",
  fields: [
    // required
    {
      name: "quoteHeader",
      type: "text",
      required: true,
    },
    {
      name: "quoteText",
      type: "text",
    },
  ],
};

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
                    console.log("YYYYYYYYYYYYYYYYYYYYYYY", allValues);

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
                      return "La fecha de finalización debe ser mayor a la fecha de inicio.";
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
};

export default Cursos;
