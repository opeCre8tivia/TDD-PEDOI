"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface MenuItem {
  id: number;
  title: string;
  href: string;
}

const Menu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const _menu: Array<MenuItem> = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About us", href: "/about" },
    { id: 3, title: "Contact", href: "/contact" }
  ];
  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex w-auto items-center gap-5 mr-5 ml-5">
        {_menu.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`text-[16px] font-semibold text-center hover:text-green-300 ${pathname === item.href ? "text-green-500" : "text-gray-600"}`}
          >
            {item.title}
          </Link>
        ))}
        <Link href="/app/login">
          <Button className="ml-2">Login</Button>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="flex md:hidden items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <AiOutlineMenu className="w-7 h-7 text-gray-700" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <nav className="flex flex-col gap-4 p-6">
              {_menu.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-lg font-semibold py-2 hover:text-primary ${pathname === item.href ? "text-green-500" : "text-gray-700"}`}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="w-full px-2">
              <Link href={"/app/login"}>
                <Button style={{ width: "100%" }}>
                  Login
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Menu;