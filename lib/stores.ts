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

          // Hacemos update en server
        },

        addToCart: async (item) => {
          // Obtenemos el id de la orden
          const id = get().id;

          // Si el item ya está en el carrito, no hacemos nada
          if (get()?.items?.find((i) => i.id === item.id)) return;

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
