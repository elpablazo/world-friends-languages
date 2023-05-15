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
              name: "startDate",
              type: "date",
              label: "Fecha de inicio",
              required: true,
            },
            {
              name: "endDate",
              type: "date",
              label: "Fecha de finalización",
              required: true,
            },
            {
              type: "array",
              name: "schedule",
              label: "Horarios",
              fields: [
                {
                  type: "date",
                  name: "weekday",
                  label: "Día de la semana",
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: "dayOnly",
                      displayFormat: "dddd",
                    },
                  },
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
