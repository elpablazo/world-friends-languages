"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RegistroFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegistroForm({ className, ...props }: RegistroFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/registrate/como-usaras-la-plataforma");
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icon variant={"reloj"} />
        ) : (
          <div className="flex items-center gap-2">
            <Image
              src="/images/ui/google-icon.png"
              alt="Google"
              width={32}
              height={32}
              quality={100}
              blurDataURL="/images/ui/google-icon.png"
              placeholder="blur"
            />
            Google
          </div>
        )}
      </Button>
      <div className="flex gap-2 items-center">
        <Separator className="w-full shrink" />

        <span className="shrink-0">o continúa con:</span>

        <Separator className="w-full shrink" />
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Nombre
            </Label>
            <Input
              id="nombre"
              placeholder="Nombre"
              type="text"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Correo electrónico
            </Label>
            <Input
              id="correo"
              placeholder="Correo electrónico"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Teléfono celular
            </Label>
            <Input
              id="telefono"
              placeholder="Teléfono celular"
              type="text"
              maxLength={10}
              minLength={10}
              autoCapitalize="none"
              autoComplete="phone"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Contraseña
            </Label>
            <Input
              id="correo"
              placeholder="Contraseña"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading ? <Icon variant={"reloj"} /> : "Crear cuenta"}
          </Button>
        </div>
      </form>

      <div className="flex">
        <Link className="link block mx-auto text-center" href="/ingresa">
          Ya tengo cuenta
        </Link>
      </div>
    </div>
  );
}
