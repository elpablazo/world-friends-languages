import { CollectionConfig } from "payload/types";

import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrTeacherOrSelf } from "../access/isAdminOrTeacherOrSelf";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Students: CollectionConfig = {
  slug: "students",
  labels: {
    singular: "Estudiante",
    plural: "Estudiantes",
  },
  auth: true,
  admin: {
    useAsTitle: "email",
    hideAPIURL: true,
  },
  access: {
    read: isAdminOrTeacherOrSelf,
    create: () => true,
    update: isAdminOrSelf,
    delete: isAdmin,
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
      defaultValue: "student",
      options: [
        {
          label: "Estudiante",
          value: "student",
        },
      ],
      required: true,
      access: {
        read: () => true,
        create: isAdminFieldLevel,
        update: () => false,
      },
    },
  ],
};

export default Students;
