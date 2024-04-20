"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-xl rounded-full",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">All Courses</HoveredLink>
            <HoveredLink href="/hobby">Basic Music Theory</HoveredLink>
            <HoveredLink href="/hobby">Advanced Composition</HoveredLink>
            <HoveredLink href="/hobby">Songwriting</HoveredLink>
            <HoveredLink href="/hobby">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
