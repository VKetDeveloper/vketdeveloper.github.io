// src/components/navbar.tsx
import React from "react";

import { NavbarItem } from "@heroui/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

export function Navbar() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-100">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              className="text-blue-600 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.name}
            </a>
          ) : (
            // legacyBehavior を外し、NextLinkの中で <a> をラップ。hrefはNextLinkに渡すので
            // アクセシビリティ要件を満たす
            <NextLink href={item.href} passHref>
              <a className="text-blue-600 hover:underline">{item.name}</a>
            </NextLink>
          )}
        </NavbarItem>
      ))}
    </nav>
  );
}
