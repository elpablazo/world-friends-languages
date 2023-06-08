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

        setOrder: (order) => set(order),
      }),
      { name: "order-store" }
    )
  )
);
