import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Clases from "./collections/Clases";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";

export default buildConfig({
  collections: [Users, Clases, Posts, Tags],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
