// src/AppRoot.tsx
import React from "react";
import Link from "next/link";

// Este será el componente que Single-SPA montará.
// Puede contener cualquier lógica de tu aplicación Next.js.
// Para este ejemplo, es una página simple con un enlace interno.
const AppRoot: React.FC = () => {
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>👋 Hola desde Next.js Microfrontend!</h2>
      <p>¡Estoy montado dentro del dashboard de Laravel!</p>
      <nav style={{ marginTop: "15px" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            gap: "15px",
          }}
        >
          <li>
            <Link
              href="/app"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Home del Microfrontend
            </Link>
          </li>
          <li>
            <Link
              href="/app/about"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Acerca de
            </Link>
          </li>
          <li>
            <Link
              href="/app/contact"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppRoot;
