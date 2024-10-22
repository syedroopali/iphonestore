import Logo from "@/app/_components/Logo";
import NavLinks from "@/app/_components/NavLinks";
import IconLinks from "@/app/_components/IconLinks";
import SearchBar from "@/app/_components/SearchBar";

export default function Header() {
  return (
    <header className="w-full h-[5.5rem] bg-white flex items-center justify-between px-4  xl:px-40">
      <Logo />
      <SearchBar />
      <NavLinks />
      <IconLinks />
    </header>
  );
}
