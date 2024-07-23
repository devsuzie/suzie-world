"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white-gray">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Suzie World</span>
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <img
              src="/icon/bars3.png"
              alt="hamburger"
              aria-hidden="true"
              width={25}
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 font-daruma">
          <Link
            href="/series"
            className="font-semibold leading-6 text-gray-900"
          >
            SERIES
          </Link>
          <Link href="/about" className="font-semibold leading-6 text-gray-900">
            ABOUT
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Suzie World</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <img src="/icon/xmark.png" alt="close" width={25} />
            </button>
          </div>
          <div className="mt-6 flow-root font-daruma">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/series"
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-3xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SERIES
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-3xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
