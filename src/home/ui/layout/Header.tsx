import Link from "next/link";
import Logo from "@/home/ui/components/Logo";
import HomeTab from "@/home/ui/components/home_tab/HomeTab";

export default function Header() {
  return (
    <header
      className="w-full flex items-center justify-between px-[50px] border-b-[1.5px] border-[#d7d7d7] bg-white"
      style={{ height: "73.622px" }}
    >
      {/* Left: logo + nav — gap-[97px] from Figma */}
      <div className="flex items-center gap-[97px]">
        <Logo />
        <nav className="flex items-center justify-between w-[170.66px]">
          <HomeTab />
          <Link
            href="/courses"
            className="text-[17px] text-[#5e5e5e] hover:text-black transition-colors"
            style={{ fontFamily: "'Prompt', sans-serif" }}
          >
            Courses
          </Link>
        </nav>
      </div>

      {/* Right: register button — w-106 h-41.8 drop-shadow from Figma */}
      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-[#333] text-[11px] text-white transition-colors hover:bg-[#555]"
        style={{
          width: "106.012px",
          height: "41.802px",
          fontFamily: "'Prompt', sans-serif",
          filter: "drop-shadow(0px 4px 5px rgba(0,0,0,0.25))",
        }}
      >
        Register
      </button>
    </header>
  );
}
