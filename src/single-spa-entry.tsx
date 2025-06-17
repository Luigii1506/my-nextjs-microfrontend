// my-nextjs-microfrontend/src/single-spa-entry.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // Correct for React 18+/19
import singleSpaReact from "single-spa-react";

import AppRoot from "./AppRoot";

const lifecycles = singleSpaReact({
  React,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactDOM: ReactDOM as unknown as any, // Or just `ReactDOM` if your TS config allows it
  rootComponent: AppRoot,
  domElementGetter: () =>
    document.getElementById("single-spa-application-container"),
  errorBoundary: (err, info, props) => {
    console.error("Error en la aplicación Next.js:", err, info, props);
    return <div>Error en la aplicación Next.js: {err.message}</div>;
  },
  // *** ADD THIS LINE ***
  renderType: "createRoot", // <--- Explicitly tell single-spa-react to use createRoot
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
