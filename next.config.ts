/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilita la exportación estática
  output: "export",

  // Importante para la generación de rutas con barra final en la exportación
  trailingSlash: true,

  // Configuración de cabeceras para permitir CORS en desarrollo
  async headers() {
    return [
      {
        source: "/:path*", // Aplica a todas las rutas servidas por este microfrontend
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost", // **¡Importante!** Esto debe coincidir con la URL de tu Laravel Dashboard
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
