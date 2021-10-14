import { fileURLToPath } from "url";
import { dirname, join } from "path";

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: join(dirname(fileURLToPath(import.meta.url)), "dist"),
  },
  module: {
    rules: [{ test: /\.(m|c)ts$/, use: "ts-loader" }]
  },
  resolve: {
    extensions: [],
  },
};

export default config;
