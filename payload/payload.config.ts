import path from "path";
import { buildConfig } from "payload/config";

// Collections
import Users from "./collections/Users";
import Clases from "./collections/Clases";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Cursos from "./collections/Cursos";

import Logo from "../src/components/payload/Logo";
import Icon from "../src/components/payload/Icon";
import CustomNav from "../src/components/payload/CustomNav";

// Plugins
import seo from "@payloadcms/plugin-seo";

export default buildConfig({
  collections: [Cursos, Clases, Posts, Tags, Users],
  globals: [
    // Your globals here
  ],
  plugins: [
    seo({
      collections: ["posts"],
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  admin: {
    components: {
      graphics: {
        Logo,
        Icon,
      },
      // Nav: CustomNav,
    },
  },
});
