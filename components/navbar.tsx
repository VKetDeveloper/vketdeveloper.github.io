import React from "react";
import NextLink from "next/link";

import { NavbarItem } from "@heroui/react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <nav className="flex bg-gray-100 p-4 space-x-4">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          {item.external ? (
            <a
              className="text-blue-600 hover:underline"
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.name}
            </a>
          ) : (
            <NextLink href={item.href} key={item.href} passHref>
              <a className="text-blue-600 hover:underline">
                {item.name}
              </a>
            </NextLink>
          )}
        </NavbarItem>
      ))}
    </nav>
  );
}