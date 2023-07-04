import MenuContainer from "@/components/MenuContainer";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const page = () => {
  const nombre_user = "Pablo";
  return (
    <MenuContainer>
      <div className="flex flex-col gap-4 w-full px-4 text-left">
        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Hola, {nombre_user}.
        </h1>
        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
        </Card> */}
      </div>
    </MenuContainer>
  );
};

export default page;
