import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "text",
      name: "title",
      label: "Título",
    },
  ],
};

export default Tags;
