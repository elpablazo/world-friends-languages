import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <Link href={"/"}>
      <Image
        src="/images/logos/WFL_horizontal.png"
        alt="World Friends Logo"
        width={200}
        height={50}
        className={className}
      />
    </Link>
  );
};

export default Logo;
