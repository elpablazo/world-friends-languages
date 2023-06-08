import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginForm } from "./loginForm";

const Page = (): JSX.Element => {
  return (
    <div className="container py-12">
      <div className="grid gap-12 sm:grid-cols-2 relative items-center">
        {/* Left col */}
        <div className="relative aspect-video w-full h-auto mx-auto max-w-xl mt-24 mb-auto">
          {/* Rectángulo anaranjado */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-secondary/30 to-secondary/0 rounded-12vmin z-[-1]" />
          <Image
            src="/images/demo/chica-login.png"
            alt="Ingresa"
            width={528}
            height={624}
            quality={100}
            blurDataURL="/images/demo/chica-login.png"
            placeholder="blur"
            className="absolute rounded-5% bottom-0 left-1/2 -translate-x-1/2 max-w-[60%]"
          />
        </div>
        {/* End of left col */}
        {/* Right col */}
        <div>
          <div className="flex flex-col gap-8 items-center justify-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Ingresa</h1>
            <LoginForm className="w-full" />
          </div>
        </div>
        {/* End of Right col */}
      </div>
    </div>
  );
};

export default Page;
