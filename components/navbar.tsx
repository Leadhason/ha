"use client";

import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavMenu from "./nav-menu";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full bg-transparent z-30 p-5 flex justify-between items-center">
        <div className="shadow-sm p-3 px-2 bg-white/80 backdrop-blur-sm rounded-full">
          <Link
            href="#"
            className="flex rounded-full items-center"
          >
            <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div className="mx-3 flex flex-col">
              <p className="text-sm font-semibold">Book a 30 mins call</p>
              <div className="flex gap-2 items-center">
                <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                <p className="text-sm font-light">Available Now</p>
              </div>
            </div>
          </Link>
        </div>

        <Logo variant="dark" size="md" />

        <div className="">
          <Button
            onClick={() => setIsMenuOpen(true)}
            className="bg-blue-700 backdrop-blur-md items-center justify-center flex rounded-full p-5 text-white hover:bg-blue-600 border border-white/30 shadow-sm gap-2"
          >
            <p className="text-lg font-light">Menu</p>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;