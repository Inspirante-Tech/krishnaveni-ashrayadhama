import Link from "next/link";
function Header() {
  return (
    <div className="flex justify-between px-20 py-4">
      <div>logo</div>

      <nav className="flex gap-4">
        <Link href="/about">about</Link>
        <Link href="/gallery">gallery</Link>
        <Link href="/contact">contact</Link>
        <Link href="/1">1</Link>
        <Link href="/2">2</Link>
      </nav>
    </div>
  );
}

export default Header;
