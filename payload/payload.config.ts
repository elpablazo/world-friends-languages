import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clases from "./collections/Clases";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Logo from "../src/components/payload/Logo";
import Icon from "../src/components/payload/Icon";
import CustomNav from "../src/components/payload/CustomNav";

export default buildConfig({
  collections: [Users, Clases, Posts, Tags],
  globals: [
    // Your globals here
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
