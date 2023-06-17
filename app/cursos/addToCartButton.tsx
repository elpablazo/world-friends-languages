"use client";

import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/lib/stores";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ curso }: any) {
  const addToCart = useOrderStore((state) => state.addToCart);
  const router = useRouter();
  return (
    <Button
      variant={"secondary"}
      size={"lg"}
      className="mx-auto w-full"
      onClick={() => {
        addToCart(curso).then(() => {
          router.push("/carrito");
        });
      }}
    >
      Agregar al carrito
    </Button>
  );
}
