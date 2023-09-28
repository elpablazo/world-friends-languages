import CardClasesPersonalizadas from "@/components/CardClasesPersonalizadas";
import MenuContainer from "@/components/MenuContainer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/Icon";

const page = () => {
  const nombre_user = "Pablo";
  return (
    <MenuContainer>
      <div className="flex flex-col gap-4 w-full px-4 text-left">
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Hola, {nombre_user}.
        </h1>
        <CardClasesPersonalizadas />
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex gap-2 items-center">
                <div className="shrink-0">
                  <Icon extraClassName="text-secondary" variant="calendario" />
                </div>
                <span>Tus próximas clases:</span>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </MenuContainer>
  );
};

export default page;
