import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";

const Ordenes: CollectionConfig = {
  slug: "ordenes",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: isAdmin,
  },
  admin: {
    hideAPIURL: true,
    defaultColumns: ["Información general"],
  },
  labels: {
    singular: "Orden",
    plural: "Órdenes",
  },
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
              name: "items",
              label: "Cursos",
              relationTo: "cursos",
              hasMany: true,
              admin: {
                description: "Cursos que contiene el carrito.",
              },
            },
            {
              type: "number",
              name: "total",
              label: "Total",
              defaultValue: 0,
              admin: {
                description: "Total del carrito, incluyendo descuentos.",
              },
              access: {
                create: () => false,
                update: () => false,
                read: () => true,
              },
            },
            {
              type: "number",
              name: "subtotal",
              label: "Subtotal",
              defaultValue: 0,
              admin: {
                description:
                  "Subtotal del carrito. La suma bruta del costo de los productos, sin incluir descuentos.",
              },
              access: {
                create: () => false,
                update: () => false,
                read: () => true,
              },
            },
          ],
        },
        {
          label: "Pago",
          description: "Información de pago del carrito.",
          fields: [
            {
              type: "group",
              name: "payment",
              fields: [
                {
                  type: "text",
                  name: "name",
                },
              ],
            },
          ],
        },
      ],
    },

    // Sidebar
    {
      type: "relationship",
      name: "student",
      relationTo: "students",
      label: "Usuario que tiene el carrito",
      hasMany: false,
      access: {
        update: isAdminFieldLevel,
      },
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "relationship",
      name: "coupon",
      label: "Cupón",
      relationTo: "coupons",
      hasMany: false,
      admin: {
        position: "sidebar",
      },
      filterOptions: () => {
        return {
          active: {
            equals: true,
          },
          uses: {
            greater_than: 0,
          },
        };
      },
    },
    {
      type: "checkbox",
      name: "paid",
      label: "Pagado",
      defaultValue: false,
    },
  ],
  hooks: {
    beforeChange: [
      // Actualización del total del carrito
      async ({ data, req: { payload }, originalDoc }) => {
        // Checamos si la data trae el campo de items
        if (data.items && data.items !== originalDoc?.items) {
          // Inicializamos el total
          let subtotal = 0;

          // Recorremos los items
          for (const item of data.items) {
            // Obtenemos el producto
            const product = await payload.findByID({
              collection: "cursos",
              id: item,
            });

            // Sumamos el total
            subtotal += product.price;
          }
          // Actualizamos el total
          data.subtotal = subtotal;

          data.total = subtotal;

          // Si hay un cupón
          if (data.coupon) {
            // Obtenemos la información del cupón
            const coupon = await payload.findByID({
              collection: "coupons",
              id: data.coupon,
            });

            if (coupon.type === "percentage") {
              // Obtenemos el porcentaje
              const percentage = 1 - coupon.discount / 100;

              // Actualizamos el total
              data.total = subtotal * percentage;
            }
          }
        }
      },
    ],
  },
};

export default Ordenes;
