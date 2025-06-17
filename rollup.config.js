// my-nextjs-microfrontend/rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace"; // Ensure this is imported

export default {
  input: "src/single-spa-entry.tsx",

  output: {
    file: "out/single-spa-entry.js",
    format: "system",
    sourcemap: true,
  },

  plugins: [
    // --- CRÍTICO: El plugin 'replace' debe ir al principio ---
    replace({
      preventAssignment: true,
      // Just replace NODE_ENV, the global polyfill in HTML handles the rest.
      "process.env.NODE_ENV": JSON.stringify("production"),
      // Remove other specific process.env.__NEXT_... replacements here,
      // and the aggressive 'process': `(function()...` replacement.
      // The global HTML polyfill will take care of these.
    }),
    // --- FIN CRÍTICO ---

    resolve({
      browser: true,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),

    typescript({
      tsconfig: "./tsconfig.json",
      jsx: "preserve",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["node_modules/**"],
    }),

    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),

    terser(),
  ],

  // Ahora, ninguna de estas debería ser externa, ya que las estamos empaquetando
  // o resolviendo/reemplazando sus dependencias.
  external: [], // Asegúrate de que esta lista esté vacía para este escenario
};
// // my-nextjs-microfrontend/rollup.config.js
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
// import babel from "@rollup/plugin-babel";
// import typescript from "@rollup/plugin-typescript"; // Make sure this import is here

// export default {
//   input: "src/single-spa-entry.tsx",

//   output: {
//     file: "out/single-spa-entry.js",
//     format: "system",
//     sourcemap: true,
//   },

//   plugins: [
//     resolve({
//       browser: true,
//       extensions: [".js", ".jsx", ".ts", ".tsx"],
//     }),
//     commonjs(),

//     typescript({
//       tsconfig: "./tsconfig.json",
//       jsx: "react-jsx",
//     }),
// babel({
//   babelHelpers: "bundled",
//   exclude: "node_modules/**",
//   extensions: [".js", ".jsx", ".ts", ".tsx"],
//   presets: [
//     "@babel/preset-env",
//     ["@babel/preset-react", { runtime: "automatic" }],
//   ],
// }),
//     terser(),
//   ],

//   external: [
//     "react",
//     "react-dom",
//     "single-spa",
//     "single-spa-react",
//     "next/link",
//     "next/navigation",
//   ],
// };
