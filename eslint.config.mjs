import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["**/__tests__/", "webpack.config.js"]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];