import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" passHref>
            <Image src="/assets/logo.svg" height={40} width={100} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3 justify-between">
            <FaBagShopping className="text-xl" />
            <IoSearchSharp className="text-xl" />
            <a className="btn btn-outline btn-primary hover:text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
