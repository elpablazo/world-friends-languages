import path from "path";
import { buildConfig } from "payload/config";

// Collections
import Users from "./collections/Users";
import Clases from "./collections/Clases";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Cursos from "./collections/Cursos";
import Ordenes from "./collections/Ordenes";
import Students from "./collections/Students";

import Logo from "@/components/payload/Logo";
import Icon from "@/components/payload/Icon";
import CustomNav from "@/components/payload/CustomNav";
import Coupons from "./collections/Coupons";

// Plugins
import seo from "@payloadcms/plugin-seo";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { mediaManagement } from "payload-cloudinary-plugin";

export default buildConfig({
  collections: [Cursos, Clases, Posts, Tags, Users, Ordenes, Students, Coupons],
  globals: [
    // Your globals here
  ],
  plugins: [
    seo({
      collections: ["posts"],
    }),
    cloudinaryPlugin(),
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
      Nav: CustomNav,
    },
  },
});
