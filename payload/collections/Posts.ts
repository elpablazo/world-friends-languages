import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
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
      },
    },
  ],
};

export default Blogs;
