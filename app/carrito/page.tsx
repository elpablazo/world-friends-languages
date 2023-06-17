"use client";

import { useOrderStore } from "@/lib/stores";

export default function Page() {
  const order = useOrderStore();

  return (
    <div>
      <h1>Carrito</h1>
    </div>
  );
}
