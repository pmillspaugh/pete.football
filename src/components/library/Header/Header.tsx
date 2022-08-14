import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* TODO: pete milly football logo */}
      {/* <Image /> */}
      <Link href="http://localhost:3000" passHref>
        <a>pete milly football</a>
      </Link>
    </header>
  );
};

export default Header;
