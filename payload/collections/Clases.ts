import { CollectionConfig } from "payload/types";

const Clases: CollectionConfig = {
  slug: "clases",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nombre de la clase",
      required: true,
    },
    {
      type: "row",
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
      ],
    },

    // Sidebar
    {
      name: "curso",
      type: "relationship",
      relationTo: "cursos",
      label: "Curso",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Clases;
