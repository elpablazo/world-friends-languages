import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
    // Todo: un profesor no debe poder editar el auth de otro profesor
  },
  fields: [
    // Nombres y apellidos
    {
      type: "row",
      fields: [
        {
          type: "text",
          label: "Nombre(s)",
          name: "nombre",
          required: true,
        },
        {
          type: "text",
          label: "Apellido(s)",
          name: "apellidos",
        },
      ],
    },

    // Teléfono
    {
      type: "text",
      label: "Teléfono",
      name: "telefono",
      minLength: 10,
      maxLength: 10,
      required: true,
    },

    // Sidebar Panel
    {
      name: "roles",
      label: "Rol",
      type: "select",
      hasMany: true,
      required: true,
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      admin: {
        position: "sidebar",
        description:
          "Los roles que otorgan o niegan permisos al usuario. Puede tener más de un rol.",
      },
      options: [
        {
          label: "Director",
          value: "admin",
        },
        {
          label: "Profesor",
          value: "teacher",
        },
      ],
    },
  ],
};

export default Users;
