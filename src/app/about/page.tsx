// src/app/about/page.tsx
import React from "react";
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #007bff",
        borderRadius: "8px",
        backgroundColor: "#e6f7ff",
      }}
    >
      <h3>Página Acerca de del Microfrontend</h3>
      <p>Esta es una página interna de la aplicación Next.js.</p>
      <Link
        href="/app"
        style={{
          color: "blue",
          textDecoration: "underline",
          marginTop: "10px",
          display: "inline-block",
        }}
      >
        Volver al Home del Microfrontend
      </Link>
    </div>
  );
};

export default AboutPage;
