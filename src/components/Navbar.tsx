import Link from "next/link";

function Navbar() {
  return (
    <header
      id="header"
      className="bg-[#8e7dbe] z-10 fixed top-[0px] left-[00px] right-[00px] flex justify-between items-center px-[50px] py-[15px]"
    >
      <Link href="/" className="text-[19px] font-bold">
        LOGO
      </Link>
      <nav>
        <a href="#home" className="mx-[15px] text-[19px] font-bold">
          HOME
        </a>
        <a href="#skills" className="mx-[15px] text-[19px] font-bold">
          SKILLS
        </a>
        <a href="#blog" className="mx-[15px] text-[19px] font-bold">
          BLOG
        </a>
        <a href="#about" className="mx-[15px] text-[19px] font-bold">
          ABOUT
        </a>
      </nav>
      <Link href="/contact" className="text-[19px] font-bold">
        CONTACT ME
      </Link>
    </header>
  );
}

export default Navbar;
