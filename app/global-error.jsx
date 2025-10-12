"use client";

import Error from "next/error";

export default function GlobalError({ error }) {
  // Sentry removed — keep the error boundary UI
  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
