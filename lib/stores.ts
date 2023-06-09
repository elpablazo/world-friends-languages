import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface OrderStore {
  id: string | null;
  paid: boolean;
  total: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;

  setOrder: (order: OrderStore) => void;

  previousState: OrderStore | null;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set, get) => ({
        id: null,
        paid: false,
        total: 0,
        subtotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),

        previousState: null,

        setOrder: (order) => {
          // Guardamos una copia del estado actual
          const previousState = get();

          // Actualizamos el estado
          set(order);

          // Guardamos el estado anterior
          set({ previousState });

          // Hacemos update en server
        },
      }),
      { name: "order-store" }
    )
  )
);
