import Logo from "@/home/ui/components/Logo";
import HomeTab from "@/home/ui/components/home_tab/HomeTab";

export default function CommonHeaderComponent() {
  return (
    <header className="w-full flex items-center px-5 md:px-8 lg:px-[50px] bg-[#FAFAF8] h-[68px] md:h-[68px]">
      <div className="w-full h-full flex justify-between items-center">
        <Logo />
        <nav className="h-full flex items-center gap-4 md:gap-6 lg:justify-between">
          <HomeTab />
        </nav>
      </div>
    </header>
  );
}
