import "./bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    if (import.meta.env.SSR) {
      hydrateRoot(
        el,
        <HelmetProvider>
          <Toaster />
          <App {...props} />
        </HelmetProvider>
      );
      return;
    }

    createRoot(el).render(
      <HelmetProvider>
        <Toaster />
        <App {...props} />
      </HelmetProvider>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
