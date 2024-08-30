"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import styled from "@emotion/styled";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  const toggleContact = () => setContactOpen(!contactOpen);
  const toggleBlog = () => setBlogOpen(!blogOpen);
  const toggleSitemap = () => setSitemapOpen(!sitemapOpen);

  return (
    <footer className="bg-gray-dark pb-8 md:py-8">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 text-white-gray flex flex-col-reverse gap-y-16 md:flex-row md:gap-y-0">
        {/* Logo Section */}
        <div className="w-full mb-4 flex justify-center md:w-1/2 md:justify-start">
          <img src="/big-logo.svg" alt="Logo" className="h-28" />
        </div>

        {/* Columns Section */}
        <div className="w-full md:w-1/2 md:flex md:justify-between">
          {/* Contact Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleContact}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Contact</h3>
              <span className="md:hidden">
                {contactOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${contactOpen ? "block" : "hidden"} md:block`}
            >
              <StyledLink
                href="mailto:hello@suzie.world"
                className="mb-2 block"
              >
                Email
              </StyledLink>
              <StyledLink
                href="https://www.linkedin.com/in/devsuzie/"
                target="_blank"
                className="block"
              >
                LinkedIn
              </StyledLink>
            </div>
          </div>

          {/* Blog Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleBlog}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Blog</h3>
              <span className="md:hidden">
                {blogOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${blogOpen ? "block" : "hidden"} md:block`}
            >
              <StyledLink href="/blog/tag/personal" className="mb-2 block">
                Personal
              </StyledLink>
              <StyledLink href="/blog/tag/programming" className="block">
                Programming
              </StyledLink>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleSitemap}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Sitemap</h3>
              <span className="md:hidden">
                {sitemapOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${sitemapOpen ? "block" : "hidden"} md:block`}
            >
              <StyledLink href="/" className="mb-2 block">
                Home
              </StyledLink>
              <StyledLink href="/blog" className="mb-2 block">
                Blog
              </StyledLink>
              <StyledLink href="/about" className="block">
                About
              </StyledLink>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-[rgba(245,245,245,0.4)] pt-4 text-center text-[rgba(245,245,245,0.4)]">
        © {new Date().getFullYear()} Suzie World
      </div>
    </footer>
  );
};

export default Footer;

const StyledLink = styled.a`
  &:hover {
    opacity: 0.5;
  }
`;
