import { CollectionConfig } from "payload/types";

const Clases: CollectionConfig = {
  slug: "clases",
  auth: true,
  fields: [
    {
      name: "nombre",
      type: "text",
    },
  ],
};

export default Clases;
