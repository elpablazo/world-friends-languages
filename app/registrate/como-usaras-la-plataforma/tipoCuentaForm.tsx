"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const appearanceFormSchema = z.object({
  tipoCuenta: z.enum(["profesor", "alumno"]),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

const defaultValues: Partial<AppearanceFormValues> = {
  tipoCuenta: "alumno",
};

export default function TipoCuentaForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    toast({
      title: "Seleccionaste:",
      description: (
        <pre className="mt-2 w-[340px] rounded bg-primary/5 p-4">
          <code className="text-dark">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mx-auto"
      >
        <FormField
          control={form.control}
          name="tipoCuenta"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-2xl sm:grid-cols-2 gap-8 pt-2  items-stretch"
              >
                <FormItem className="h-48">
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="grid grid-cols-5 rounded w-full overflow-hidden h-full">
                      <div className="col-span-2 bg-primary/20"></div>
                      <div className="flex items-center col-span-3 bg-gradient-to-br from-primary-dark/10 to-primary-light/0 p-4 lg:px-6">
                        <p className="text-xl font-bold">Quiero aprender</p>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
                <FormItem className="h-48">
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="Profesor" className="sr-only" />
                    </FormControl>
                    <div className="grid grid-cols-5 rounded w-full overflow-hidden h-full items-stretch">
                      <div className="col-span-2 bg-secondary/20"></div>
                      <div className="flex items-center col-span-3 bg-gradient-to-br from-secondary/10 to-secondary/0 p-4">
                        <p className="text-xl font-bold">Quiero dar clases</p>
                      </div>
                    </div>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <div className="flex">
          <Button type="submit" className="mx-auto">
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  );
}
