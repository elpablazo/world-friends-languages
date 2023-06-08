import { CollectionConfig } from "payload/types";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "title",
    hideAPIURL: true,
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
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
