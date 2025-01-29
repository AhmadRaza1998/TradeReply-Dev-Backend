import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ReactDOMServer from "react-dom/server";
import { HelmetProvider, Helmet } from "react-helmet-async"; // ✅ Import HelmetProvider
import { route } from "../../vendor/tightenco/ziggy";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
  createInertiaApp({
    page,
    render: (element) => {
      const helmetContext = {}; // ✅ Create Helmet context

      const html = ReactDOMServer.renderToString(
        <HelmetProvider context={helmetContext}>
          {element}
        </HelmetProvider>
      );

      const helmet = helmetContext.helmet; // ✅ Extract metadata

      return `
        <!DOCTYPE html>
        <html inertia="true" lang="en">
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
        </html>
      `;
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
      resolvePageComponent(
        `./Pages/${name}.jsx`,
        import.meta.glob("./Pages/**/*.jsx")
      ),
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) =>
        route(name, params, absolute, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location),
        });

      return (
        <HelmetProvider>
          <App {...props} />
        </HelmetProvider>
      );
    },
  })
);
