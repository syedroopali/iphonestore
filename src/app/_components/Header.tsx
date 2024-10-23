import Logo from "@/app/_components/Logo";
import NavLinks from "@/app/_components/NavLinks";
import IconLinks from "@/app/_components/IconLinks";
import SearchBar from "@/app/_components/SearchBar";

export default function Header() {
  return (
    <header className="w-full h-[5.5rem]  flex items-center center justify-center px-4  xl:px-0">
      <div className="w-full xl:w-[70rem] flex items-center  justify-between">
        <Logo />
        <SearchBar />
        <NavLinks />
        <IconLinks />
      </div>
    </header>
  );
}
