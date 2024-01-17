"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";
export const Navbar = () => {
  return (
    <div className="navbar bg-white sticky top-0 z-10 border-b-2 border-gray-200 sm:px-10">
      <div className="navbar-start">
        <Link href='/'>
        <Image
          className="mx-2 py-2"
          src="/logo.svg"
          alt="logo"
          height={40}
          width={100}
          style={{scale: 1.10}}
        />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link title="Home" href='/'>Home</Link>
          </li>
          <li>
            <Link title="Home" href='/about'>About</Link>
          </li>
          <li>
            <Link title="Home" href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link  target="blank" href='https://www.paypal.com/donate/?hosted_button_id=X9H2JT2XF5PEG'>
          <Button buttonType="accent" buttonText="Donate" />
        </Link>
      </div>
    </div>
  );
};
