'use client'

import { openLogin, openRegister } from "@/store/store/authSlice";
import { AppDispatch } from "@/store/store/store";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Active() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="relative flex gap-5 items-center">
      <button onClick={() => dispatch(openLogin())} className="text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">Login</button>
      <button onClick={() => dispatch(openRegister())} className="bg-[#309689] py-3.5 px-5 rounded-[8px] cursor-pointer text-white hover:bg-[#3cb1a2] hover:scale-105 transition duration-300 ease-in-out">Register</button>


      <button
        className="flex sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <RxHamburgerMenu color="white" size={30} className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" />
      </button>

      {isOpen && (
        <nav className="fixed left-0 right-0 top-[76px] z-50 sm:hidden bg-black/95 border-b border-white/10 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-white text-lg hover:text-[#309689] transition-colors duration-300 border-b border-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      )}
    </div >
  );
}