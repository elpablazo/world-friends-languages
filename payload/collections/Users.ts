import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Usuario",
    plural: "Usuarios",
  },
  auth: true,
  admin: {
    useAsTitle: "email",
    hideAPIURL: true,
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
                  required: true,
                },
                {
                  label: "Apellido(s)",
                  name: "apellidos",
                  type: "text",
                  required: true,
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
      name: "role",
      label: "Rol",
      type: "select",
      admin: {
        position: "sidebar",
      },
      required: true,
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
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};

export default Users;
