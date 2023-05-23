"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeKey =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <html lang="es-MX">
      <body className="relative font-sans">{children}</body>
    </html>
  );
}
