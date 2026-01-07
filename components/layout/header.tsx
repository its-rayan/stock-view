"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout03Icon } from "@hugeicons/core-free-icons";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/" },
  { name: "Search", href: "/search" },
  { name: "Watchlist", href: "/watchlist" },
  { name: "News", href: "/news" },
];

const NavItems = () => {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <ul className="flex space-x-2">
      {NAV_ITEMS.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}>
            <Button variant={isActive(href) ? "secondary" : "ghost"}>
              {name}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const UserDropdown = () => {
  const router = useRouter();

  const onSignOut = () => {
    // Implement sign-out logic here
    router.push("/login");
  };

  const user = { name: "John Doe", email: "john.doe@example.com" }; // Replace with actual user data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="bg-muted/40">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start text-gray-400">
            <span>{user.name}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onSignOut}>
          <HugeiconsIcon icon={Logout03Icon} size={24} color="currentColor" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
