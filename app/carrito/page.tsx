"use client";

import { Button } from "@/components/ui/formik/Button";
import { useOrderStore } from "@/lib/stores";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";

const exampleItems = [
  {
    id: "1",
    name: "Producto 1",
    image: "/images/demo/cursocover.jpg",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "Producto 2",
    image: "/images/demo/cursocover.jpg",
    price: 200,
    quantity: 1,
  },
];

export default function Page() {
  const { items, total } = useOrderStore((state) => ({
    items: state.items,
    total: state.total,
  }));

  return (
    <div className="container space-y-6">
      <h1 className="font-bold text-2xl">Carrito</h1>
      {items?.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {items?.map((product) => (
            <CarritoItem key={product.id} product={product} />
          ))}
          <div className="text-right">
            <p className="text-gray-600">
              Total:{" "}
              {new Intl.NumberFormat("es-MX", {
                style: "currency",
                currency: "MXN",
              }).format(total)}
            </p>
            <Link href={"/finalizar-compra"}>
              <Button>Finalizar compra</Button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center">No hay productos en el carrito</p>
      )}
    </div>
  );
}

export interface CarritoItemProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
    startDate: string;
  };
}

const CarritoItem = ({ product }: CarritoItemProps) => {
  const startDate = DateTime.fromISO(product.startDate).toLocaleString(
    DateTime.DATE_FULL
  );

  return (
    <div className="flex items-center gap-4 w-full rounded p-4 border-2 border-gray-light justify-between">
      <div className="flex flex-col gap-1">
        <div className="text-sm flex items-center gap-2">
          <p className="">{1}x</p>
          <h3 className="text-lg">{product.name}</h3>
        </div>
        <div className="text-sm flex flex-col gap-0">
          <p className="text-primary">Comienza</p>
          <p>{startDate}</p>
        </div>
        <div className="text-primary flex items-center gap-1 text-xl">
          <p className="font-bold">
            {new Intl.NumberFormat("es-MX", {
              style: "currency",
              currency: "MXN",
            }).format(product.price)}
          </p>
          <span className="block text-sm">MXN</span>
        </div>
      </div>
      <Image
        src="/images/demo/cursocover.jpg"
        width={2121}
        height={1414}
        alt={`${product.name} | World Friends Languages`}
        className="w-auto aspect-video h-24 object-cover rounded"
      />
    </div>
  );
};
