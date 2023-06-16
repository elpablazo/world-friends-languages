import Link from "next/link";
import Icon, { IIconProps } from "./Icon";

export interface iCardBeneficioCTAprops {
  titulo: string;
  children: React.ReactNode;
  icono: IIconProps["variant"];
  cta: {
    label: string;
    href: string;
  };
  color?: string;
}

const CardBeneficioCTA: React.FC<iCardBeneficioCTAprops> = ({
  titulo,
  children,
  icono,
  cta,
  color = "primary",
}) => {
  let colorClassName = "";
  let iconClassName = "";
  let hrClassName = "";
  let textClassName = "";

  switch (color) {
    case "primary":
      colorClassName = "from-primary/10 to-primary/0";
      iconClassName = "text-primary";
      hrClassName = "border-primary";
      textClassName = "text-primary";
      break;
    case "secondary":
      colorClassName = "from-secondary/10 to-secondary/0";
      iconClassName = "text-secondary";
      hrClassName = "border-secondary";
      textClassName = "text-secondary";
      break;
    default:
      colorClassName = "from-red-500/10 to-red-500/0";
      iconClassName = "text-red-500";
      hrClassName = "border-red-500";
      textClassName = "text-red-500";
      break;
  }

  return (
    <div className="@container w-full h-full">
      <div
        className={`flex flex-col items-center justify-between flex-1 relative overflow-hidden bg-gradient-to-br rounded h-full ${colorClassName}`}
      >
        <div className="py-6 px-4 flex flex-col @sm:flex-row gap-4 items-start justify-start relative">
          <div className="shrink-0">
            <Icon
              variant={icono || "niveles"}
              extraClassName={`${iconClassName} w-24 h-24 @sm:!w-16 @sm:!h-16`}
            />
          </div>

          <div className="flex flex-col gap-2 items-start justify-start shrink">
            <div className="text-dark font-bold text-base lg:text-lg">
              {titulo}
            </div>

            <div className="text-dark text-base lg:text-lg">{children}</div>
          </div>
        </div>

        <Link
          href={cta.href}
          className={`${hrClassName} p-4 flex flex-row gap-2 items-start justify-start relative border-t w-full`}
        >
          <div
            className={`${textClassName} text-center relative flex-1 text-base`}
          >
            {cta.label}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardBeneficioCTA;
