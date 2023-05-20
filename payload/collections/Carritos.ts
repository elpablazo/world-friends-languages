import { CollectionConfig } from "payload/types";

const Carritos: CollectionConfig = {
  slug: "carritos",
  fields: [
    // Relación con los cursos
    {
      type: "relationship",
      name: "cursos",
      label: "Cursos",
      relationTo: "cursos",
      hasMany: true,
    },
    {
      type: "relationship",
      name: "users",
      relationTo: "users",
      // Todo: sólo un user de rol "alumno" puede tener un carrito
      hasMany: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "number",
      name: "total",
      label: "Total",
    },
  ],
  hooks: {
    beforeChange: [
      async ({
        data, // incoming data to update or create with
        req, // full express request
        operation, // name of the operation ie. 'create', 'update'
        originalDoc, // original document
      }) => {
        // Sumamo el total de los cursos
        const total = data.cursos.reduce((acc: any, curso: any) => {
          return acc + curso.price;
        });
        data.total = total;
        return data;
      },
    ],
  },
};

export default Carritos;
