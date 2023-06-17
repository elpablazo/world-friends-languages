"use client";
import { mercadopago } from "@/lib/mercadopago";
import { useOrderStore } from "@/lib/stores";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  // Perferencia de mercadopago
  const [preferenceId, setPreferenceId] = useState<any>();

  // Orden
  const { items } = useOrderStore();

  // Hook para cargar la pantalla de MP después de crear la preferencia
  useEffect(() => {
    if (preferenceId) {
      router.push(preferenceId.init_point);
    }
  }, [preferenceId]);

  // Hook para crear la preferencia
  useEffect(() => {
    // Si no hay un carrito, entonces no hacemos nada
    if (!items || items.length === 0) {
      return;
    }
    // Si hay un carrito, entonces creamos la preferencia
    mercadopago.preferences
      .create({
        items: items.map((item) => ({
          id: item.id,
          title: item.name,
          description: item.descripcion,
          quantity: 1,
          currency_id: "MXN",
          unit_price: item.price,
        })),
      })
      .then((preference) => {
        setPreferenceId(preference);
      });
  }, [items]);

  return (
    <div className="container space-y-6">
      <h1 className="font-bold text-2xl">Finalizar compra</h1>
      <h2 className="font-bold text-xl">
        Espera mientras carga la pantalla de compra
      </h2>
    </div>
  );
}
