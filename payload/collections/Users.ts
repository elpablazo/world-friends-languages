import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Usuario",
    plural: "Usuarios",
  },
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // Tab de información personal
        {
          label: "Información personal",
          description: "Información personal relacionada al usuario.",

          fields: [
            // Nombres y apellidos
            {
              type: "row",
              fields: [
                {
                  label: "Nombre(s)",
                  name: "nombre",
                  type: "text",
                },
                {
                  label: "Apellido(s)",
                  name: "apellidos",
                  type: "text",
                },
              ],
            },

            // Teléfono
            {
              label: "Teléfono",
              name: "telefono",
              type: "text",
            },
          ],
        },
      ],
    },

    // Sidebar
    {
      name: "rol",
      label: "Rol",
      type: "select",
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Director",
          value: "director",
        },
        {
          label: "Profesor",
          value: "profesor",
        },
        {
          label: "Alumno",
          value: "alumno",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};

export default Users;
