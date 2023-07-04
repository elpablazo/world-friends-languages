import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

const Blogs: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishDate", "tags"],
    hideAPIURL: true,
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Título",
      required: true,
    },
    {
      type: "richText",
      name: "content",
      label: "Contenido",
      required: true,
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
        description: "Se recomienda usar 3 a 5 etiquetas.",
      },
    },
    {
      name: "publishDate",
      type: "date",
      label: "Fecha de publicación",
      admin: {
        position: "sidebar",
      },
      defaultValue: () => new Date(),
    },
  ],
};

export default Blogs;
