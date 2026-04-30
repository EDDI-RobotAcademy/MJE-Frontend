import Logo from "@/home/ui/components/Logo";
import HomeTab from "@/home/ui/components/home_tab/HomeTab";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center px-6 border-b border-gray-200 bg-white">
      <Logo />
      <nav className="ml-8 flex items-center gap-2">
        <HomeTab />
      </nav>
    </header>
  );
}
