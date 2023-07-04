"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, MotionConfig, circOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useOrderStore } from "@/lib/stores";
import { useEffect } from "react";
import payloadApi from "@/lib/axios";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const store = useOrderStore();

  // Si no existe una orden, entonces creamos una
  useEffect(() => {
    if (!store.id) {
      createOrder().then((order) => {
        console.log("order", order);

        store.setOrder(order);
      });
    }

    async function createOrder() {
      const order = await payloadApi.post("/ordenes", {});

      return order.data.doc;
    }
  }, []);

  const isDashboardOrAdminPage =
    pathname?.includes("/admin") || pathname?.includes("/dashboard");

  return (
    <MotionConfig
      transition={{
        ease: circOut,
        duration: 0.75,
      }}
    >
      <html lang="es-MX" className="bg-light text-dark antialiased">
        <body className={`${ubuntu.className} overflow-x-clip max-w-screen`}>
          {!isDashboardOrAdminPage && <Navbar />}
          {children}
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
          {!isDashboardOrAdminPage && <Footer />}
          <Toaster />
        </body>
      </html>
    </MotionConfig>
  );
}
