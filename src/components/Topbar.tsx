"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Topbar() {
  const [show, setShow] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < lastScrollPosition) {
        setShow(true);
      } else if (currentScrollPosition > 50) {
        setShow(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  return (
    <div
      className={`fixed z-50 bg-light w-full py-5 px-14 max-md:px-10 flex justify-between transition duration-200 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {
        <span className="hidden md:inline-block">
          <Logo />
        </span>
      }
      <div className="md:hidden fixed right-12 top-1 flex flex-col justify-center items-center w-8 h-8 z-50">
        <button onClick={handleToggle}>
          <span
            className={`block absolute w-full h-0.5 rounded-sm bg-menu transition-transform duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block absolute w-full h-0.5 rounded-sm bg-menu transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block absolute w-full h-0.5 rounded-sm bg-menu transition-transform duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <nav
          className={`fixed top-0 right-0 h-full w-64 max-sm:w-2/3 p-5 bg-light transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-5 justify-center items-center text-menu max-sm:text-lg">
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#nossa-historia">Nossa História</a>
            </li>
          </ul>
        </nav>
      )}
      <nav className="max-md:hidden">
        <ul className="flex space-x-5 text-menu">
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <a href="#nossa-historia">Nossa História</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
