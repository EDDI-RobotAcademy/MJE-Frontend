import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="홈으로 이동">
      <span className="text-xl font-bold tracking-tight text-gray-900">MJE</span>
    </Link>
  );
}
