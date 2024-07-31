"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 ">
      <nav className="bg-primary shadow-2xl text-md text-light flex w-100 justify-between font-semibold  items-center px-5 min-h-20 relative">
        <>
          <div className="flex-shrink-1 items-center py-2">
            <Image
              src={"/images/logo.png"}
              alt="Brand"
              width={"100"}
              height={24}
              className="rounded-md"
              priority
            />
          </div>

          <div className="hidden md:flex justify-center space-x-7">
            {["Home", "Products", "Services", "About", "Contact"].map(
              (item, index) => {
                return (
                  <Link
                    key={index}
                    href={"/products"}
                    className="uppercase p-2 active:text-black "
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>

          <div className="hidden  md:flex space-x-5">
            <div className="flex space-x-2">
              <ShoppingBag />
              <Link href={"/"}>Cart</Link>
            </div>
            <div className="flex space-x-2">
              <UserRound />
              <Link href={"/products/addproduct"}>Login</Link>
            </div>
          </div>

          <div className="md:hidden ">
            <Menu onClick={() => setIsOpen(!isOpen)} size={30} />
            <div
              className={`absolute min-h-screen w-screen ${
                isOpen ? "flex" : "hidden "
              }  flex-col inset-0 bg-primary justify-center items-center py-3 px-5  space-y-4 text-xl`}
              id="menu"
            >
              <span
                className="fixed top-5 right-0 p-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <X size={40} />
              </span>
              {["Home", "Products", "Services", "About", "Contact"].map(
                (item, index) => {
                  return (
                    <Link
                      key={index}
                      href={"/products"}
                      className="hover:border-b-2 hover:border-b-primary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {item}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </>
      </nav>
    </header>
  );
}
