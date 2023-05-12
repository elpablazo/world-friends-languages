import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clases from "./collections/Clases";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Logo from "./components/graphics/Logo";
import Icon from "./components/graphics/Icon";

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
    },
  },
});
