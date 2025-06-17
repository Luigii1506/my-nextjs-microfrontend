// src/app/contact/page.tsx
import React from "react";
import Link from "next/link";

const ContactPage: React.FC = () => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #28a745",
        borderRadius: "8px",
        backgroundColor: "#e6ffe6",
      }}
    >
      <h3>Página Contacto del Microfrontend</h3>
      <p>Aquí puedes contactarnos (desde el microfrontend).</p>
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

export default ContactPage;
