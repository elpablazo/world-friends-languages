import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import payloadApi from "./axios";

// Todo: Completar typescript
interface OrderStore {
  id: string | null;
  items: any[];
  paid: boolean;
  total: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
  previousState: OrderStore | null;

  setOrder: (order: OrderStore) => void;
  addToCart: (item: any) => any;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set, get) => ({
        id: null,
        items: [],
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

          console.log("Previous state", previousState);
          console.log("Current state", get());

          // Hacemos update en server
        },

        addToCart: async (item) => {
          // Obtenemos el id de la orden
          const id = get().id;
          // Acomodamos los items de forma {curso: id}
          const items = [
            ...get()?.items?.map((item) => item.id || ""),
            item.id,
          ];

          // Actualizamos en servidor
          const newOrder = await payloadApi.patch(`/ordenes/${id}`, {
            items,
          });

          // Actualizamos el estado
          get().setOrder(newOrder.data.doc);

          return newOrder.data.doc;
        },
      }),
      { name: "order-store" }
    )
  )
);
