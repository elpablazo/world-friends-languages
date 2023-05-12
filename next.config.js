const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

module.exports = withPayload(
  {
    // your Next config here
  },
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

    // Point to custom Payload CSS (optional)
    cssPath: path.resolve(__dirname, "./src/styles/payloadOverride.css"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./payload/payloadClient.ts"),
  }
);