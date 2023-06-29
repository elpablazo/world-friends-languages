"use client";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body className="relative font-sans">{children}</body>
    </html>
  );
}
