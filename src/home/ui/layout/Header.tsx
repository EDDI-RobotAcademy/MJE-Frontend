import Link from "next/link";
import Logo from "@/home/ui/components/Logo";
import HomeTab from "@/home/ui/components/home_tab/HomeTab";

export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between px-4 md:px-8 lg:px-[50px] border-b-[1.5px] border-[#d7d7d7] bg-white"
      style={{ height: "73.622px" }}
    >
      {/* Left: logo + nav */}
      <div className="flex items-center gap-4 md:gap-10 lg:gap-[97px]">
        <Logo />
        <nav className="flex items-center gap-4 md:gap-6 lg:w-[170.66px] lg:justify-between">
          <HomeTab />
        </nav>
      </div>

      {/* Right: register button */}
      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-[#333] text-[11px] text-white transition-colors hover:bg-[#555] px-4 h-[38px] md:h-[41.802px] md:w-[106.012px]"
        style={{
          fontFamily: "'Prompt', sans-serif",
          filter: "drop-shadow(0px 4px 5px rgba(0,0,0,0.25))",
        }}
      >
        Register
      </button>
    </header>
  );
}
