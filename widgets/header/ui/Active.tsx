'use client'

import { openLogin, openRegister } from "@/features/auth/model/authSlice";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
];

export default function Active({ hideAuth }: { hideAuth?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const dispatch = useDispatch<AppDispatch>()
  const pathname = usePathname();

  return (
    <div className="flex gap-5 items-center">
      {!hideAuth && (
        <>
          <button onClick={() => dispatch(openLogin())} className="text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">Login</button>
          <button onClick={() => dispatch(openRegister())} className="bg-[#309689] py-3.5 px-5 rounded-[8px] cursor-pointer text-white hover:bg-[#3cb1a2] hover:scale-105 transition duration-300 ease-in-out">Register</button>
        </>
      )}

      <button
        className="flex sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <RxHamburgerMenu color="white" size={30} className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" />
      </button>

      {isOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 sm:hidden bg-black/95 border-b border-white/10 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className={`block py-3 text-lg transition-colors duration-300 border-b border-white/10 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white opacity-60 hover:text-[#309689] hover:opacity-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}