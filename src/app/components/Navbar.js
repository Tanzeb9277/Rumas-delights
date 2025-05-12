"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="drawer fixed top-0 left-0 right-0 z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-secondary">
          {/* Logo */}

          <div className="flex-1 px-2 mx-2 font-bold text-secondary-content text-xl">
            <Link href="/" className="text-xl">
              <img
                src="/images/logo.png"
                alt="Ruma's Delights Logo"
                className="w-16 h-16 mr-2"
              />
            </Link>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href="/"
                  className={clsx({
                    "text-secondary-content font-bold": pathname === "/",
                  })}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className={clsx({
                    "text-secondary-content font-bold": pathname === "/menu",
                  })}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={clsx({
                    "text-secondary-content font-bold":
                      pathname === "/about",
                  })}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className={clsx({
                    "text-secondary-content font-bold": pathname === "/order",
                  })}
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay z-30"></label>
        <ul className="menu p-4 h-full w-2/3 bg-secondary text-base-content z-50">
          <li>
            <Link
              href="/"
              className={clsx({
                "text-secondary-content font-bold": pathname === "/",
              })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={clsx({
                "text-secondary-content font-bold": pathname === "/menu",
              })}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx({
                "text-secondary-content font-bold": pathname === "/our-story",
              })}
            >
              Our Story
            </Link>
          </li>
          <li>
            <a
              href="/order"
              className={clsx({
                "text-secondary-content font-bold": pathname === "/order",
              })}
            >
              Order
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
