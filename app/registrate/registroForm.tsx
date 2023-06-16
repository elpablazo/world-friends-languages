"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import { Input } from "@/components/ui/formik/Input";
import * as yup from "yup";
import { createUser } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";

interface RegistroFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RegistroForm({ className, ...props }: RegistroFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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

      <Formik
        initialValues={{
          nombre: "",
          email: "",
          telefono: "",
          password: "",
        }}
        validationSchema={yup.object({
          nombre: yup.string().required("Llena este campo"),
          email: yup
            .string()
            .required("Llena este campo")
            .email("Ingresa un correo válido"),
          telefono: yup
            .string()
            .required("Llena este campo")
            .min(10, "Ingresa un teléfono válido")
            .max(10, "Ingresa un teléfono válido"),
          password: yup
            .string()
            .required("Llena este campo")
            .min(8, "Ingresa una contraseña de al menos 8 caracteres"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createUser(values);
          } catch (error: any) {
            console.log(error);
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="grid gap-6">
              <Input label="Nombre" name="nombre" />
              <Input label="Correo" name="email" type="mail" />
              <Input label="Teléfono" name="telefono" type="tel" />
              <Input label="Contraseña" name="password" type="password" />
              <Button disabled={isSubmitting}>
                {isSubmitting ? <Icon variant={"reloj"} /> : "Crear cuenta"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex">
        <Link className="link block mx-auto text-center" href="/ingresa">
          Ya tengo cuenta
        </Link>
      </div>
    </div>
  );
}
