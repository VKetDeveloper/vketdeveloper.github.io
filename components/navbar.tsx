import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/react";
import NextLink from "next/link";

{siteConfig.navItems.map((item) => (
  <NavbarItem key={item.href}>
    {item.external ? (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {item.name}
      </a>
    ) : (
      <NextLink href={item.href}>{item.name}</NextLink>
    )}
  </NavbarItem>
))}
