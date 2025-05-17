// src/components/navbar.tsx
import React from "react";
import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/react";
import NextLink from "next/link";

export function Navbar() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-100">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
