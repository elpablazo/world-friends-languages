import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
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

        // Tab de roles
        {
          label: "Roles",
          description: "Los roles que otorgan o niegan permisos al usuario.",
          fields: [
            {
              name: "rol",
              label: "Rol",
              type: "select",
              hasMany: true,
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
        },

        // Tab de clases
        {
          label: "Clases",
          description:
            "Las clases que le pertenecen o a las que están inscritos el usuario.",
          fields: [
            {
              type: "relationship",
              relationTo: "clases",
              name: "Clases",
            },
          ],
        },
      ],
    },
  ],
};

export default Users;
