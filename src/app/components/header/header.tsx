import Image from "next/image";
import "./header.css";

function Header() {
  return (
    <header>
      <Image
        src="/app-logo.svg"
        width={500}
        height={100}
        alt="Timer app logo"
        className="logo"
      />
    </header>
  );
}

export default Header;
