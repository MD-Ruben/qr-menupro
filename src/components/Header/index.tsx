"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  // Sticky Navbar
  // const [sticky, setSticky] = useState(false);
  // const handleStickyNavbar = () => {
  //   if (window.scrollY >= 80) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleStickyNavbar);
  // });

  // submenu handler
  // const [openIndex, setOpenIndex] = useState(-1);
  // const handleSubmenu = (index) => {
  //   if (openIndex === index) {
  //     setOpenIndex(-1);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  // const usePathName = usePathname();

  return (
    <>
    <header
        className="header left-0 top-0 z-40 flex w-full items-center"
      >
      {/* <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      > */}
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
                href="/"
                className="header-logo block w-full"
              >
                <Image
                  src="/images/logo/LOGO-QR-MENU.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
              {/* <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/LOGO-QR-MENU.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link> */}
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mx-auto max-w-md px-4"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Recherchez un plat spécifique"
                      className="w-full rounded-md border bg-gray-50 py-3 pl-12 pr-4 text-gray-500 outline-none focus:border-red-600 focus:bg-white"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
