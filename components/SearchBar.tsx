import { Input } from "./ui/input";
import { Label } from "./ui/label";

const SearchBar = () => {
  return (
    <div className="grid gap-1 grow">
      <Label className="sr-only" htmlFor="search">
        Buscar
      </Label>
      <Input
        id="search"
        placeholder="Buscar"
        type="text"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        disabled={false}
        className="w-full"
      />
    </div>
  );
};

export default SearchBar;
