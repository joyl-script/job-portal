"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-opacity duration-300 ease-in-out ${isActive
                    ? "text-white opacity-100"
                    : "text-white opacity-60 hover:opacity-100"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
