export interface iCardBeneficioCTAprops {
  titulo: string;
  children: React.ReactNode;
  cta: {
    label: string;
    href: string;
  };
  color?: string;
}

const CardBeneficioCTA: React.FC<iCardBeneficioCTAprops> = ({
  titulo,
  children,
  cta,
  color = "primary",
}) => {
  let colorClassName = "";

  switch (color) {
    case "primary":
      colorClassName = "from-primary/10 to-primary/0";
      break;
    case "secondary":
      colorClassName = "from-secondary/10 to-secondary/0";
      break;
    default:
      colorClassName = "from-red-500/10 to-red-500/0";
      break;
  }

  return (
    <div
      className={`flex flex-col items-center justify-between flex-1 relative overflow-hidden bg-gradient-to-br rounded ${colorClassName}`}
    >
      <div className="py-6 px-4 flex flex-row gap-4 items-start justify-start relative">
        <div className="flex flex-col gap-2 items-start justify-start relative">
          <div className="text-dark font-bold text-lg relative">{titulo}</div>

          <div className="text-dark text-lg relative">{children}</div>
        </div>
      </div>

      <div className="p-4 flex flex-row gap-2 items-start justify-start relative border-t border-primary w-full">
        <div className="text-primary text-center relative flex-1">
          {cta.label}
        </div>
      </div>
    </div>
  );
};

export default CardBeneficioCTA;
