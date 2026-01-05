import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/" },
  { name: "Search", href: "/search" },
  { name: "Watchlist", href: "/watchlist" },
  { name: "News", href: "/news" },
];

const NavItems = () => {
  return (
    <ul className="flex space-x-2">
      {NAV_ITEMS.map((items) => (
        <li key={items.name}>
          <Link href={items.href}>
            <Button
              variant={items.name === "Dashboard" ? "secondary" : "ghost"}
            >
              {items.name}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-muted/20 backdrop-blur-md">
      <div className="container flex justify-between items-center px-6 py-4">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={140}
              height={32}
              className="h-8 w-auto cursor-pointer"
            />
          </Link>

          <nav className="bg-muted/40 px-1 py-1 rounded-md">
            <NavItems />
          </nav>
        </div>

        <div className="flex items-center gap-4">user dropdown</div>
      </div>
    </header>
  );
};

export default Header;
