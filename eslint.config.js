import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Importing React in files is not required
      "no-unused-vars": "error",
      "no-undef": "error",
      "react/jsx-uses-react": "off",
      "react/prop-types": 0,
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }], // Allows JSX in both .js and .jsx files
      "no-console": "warn", // Warns when console.log is used
      "no-debugger": "error", // Errors when debugger is used
    },
  },
];
