// src/components/navbar.tsx
import React from "react";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/react";

export function Navbar() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-100">
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
            <NextLink href={item.href} legacyBehavior>
              <a className="text-blue-600 hover:underline">{item.name}</a>
            </NextLink>
          )}
        </NavbarItem>
      ))}
    </nav>
  );
}
