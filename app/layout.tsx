"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, MotionConfig, circOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// export const metadata = {
//   title: "World Friend Languages",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <MotionConfig
      transition={{
        ease: circOut,
        duration: 0.75,
      }}
    >
      <html lang="es-MX" className="bg-light text-dark antialiased">
        <body className={`${ubuntu.className} overflow-x-clip max-w-screen`}>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.div
              className="opacity-0"
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{
                delay: 0.2,
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
          <Toaster />
        </body>
      </html>
    </MotionConfig>
  );
}
