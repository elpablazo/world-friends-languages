import { CollectionConfig } from "payload/types";

const Carritos: CollectionConfig = {
  slug: "carritos",
  fields: [
    // Relación con los cursos
    {
      type: "tabs",
      tabs: [
        // Tab de información general
        {
          label: "Información general",
          description: "Información general del carrito.",
          fields: [
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
              label: "Usuario que tiene el carrito",
              // Todo: sólo un user de rol "alumno" puede tener un carrito
              // Todo: solo un admin puede cambiar a quién le pertenece el carrito
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
            {
              type: "checkbox",
              name: "pagado",
              label: "Pagado",
              defaultValue: false,
            },
          ],
        },
      ],
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
        let total = 0;
        for (const cursoid of data.cursos) {
          const curso = await req.payload.findByID({
            collection: "cursos",
            id: cursoid,
          });

          console.log(curso);

          total += Number(curso.price);
        }
        data.total = total;
        return data;
      },
    ],
  },
};

export default Carritos;
