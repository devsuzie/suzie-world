import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-dark py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 flex-wrap text-white-gray">
        {/* Logo Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src="/big-logo.svg" alt="Logo" className="h-28" />
        </div>

        {/* Columns Section */}
        <div className="w-full md:w-1/2 flex justify-between">
          {/* Contact Column */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Contact</h3>
            {/* For external links or non-Next.js navigation, use <a> with href directly */}
            <a href="mailto:suuuzie18@gmail.com" className="mb-1">
              Email
            </a>
            <a href="https://www.linkedin.com/in/devsuzie/" target="_blank">
              LinkedIn
            </a>
          </div>

          {/* Series Column */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Series</h3>
            <Link href="/series/web-development" className="mb-1">
              Web Development
            </Link>
            <Link href="/series/ui-ux-design">UI/UX Design</Link>
          </div>

          {/* Sitemap Column */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-2">Sitemap</h3>
            <Link href="/" className="mb-1">
              Home
            </Link>
            <Link href="/about" className="mb-1">
              About
            </Link>
            <Link href="/series">Series</Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-light">
        © 2024 Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
