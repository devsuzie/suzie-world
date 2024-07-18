"use client";

import React, { FormEvent, useState } from "react";
import "./style.module.css";
import { POST } from "@/app/api/newsletter/route";

const Newsletter = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [showForm, setShowForm] = useState(true);

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   POST().then((res) => {
  //     if (res.status === 200) {
  //       setShowForm(false);
  //     } else {
  //       setShowForm(true);
  //     }
  //   });
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailAddress,
      }),
    });

    const data = await response.json();
    if (data) setShowForm(false);
    else setShowForm(true);
  };

  return (
    <section className="bg-gray-dark py-16 px-4">
      <div className="mx-auto max-w-6xl items-center justify-between px-6 py-12 lg:py-16 lg:px-8 rounded-2xl bg-white-gray ">
        <div className="mx-auto grid md:gap-y-16 px-0 md:pr-8 md:grid-cols-2030">
          {/* Left Block: image */}
          <div className="flex justify-center items-center w-full mx-0 max-w-lg">
            <img
              src="/assets/printer.svg"
              alt="Printer Image"
              className="mx-auto md:mx-0 w-auto h-52"
            />
          </div>

          {/* Right Block */}
          <div className="w-full mx-0 max-w-none pt-0">
            {/* Title */}
            <div className="py-3 font-daruma text-center text-5xl md:text-left">
              Get new content delivered directly to your inbox
            </div>

            {/* form */}
            <div className={showForm ? "visible" : "hidden"}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row w-full md:w-auto pb-3 pt-6 md:items-center"
              >
                <div className="w-full md:w-80 min-w-0 shrink">
                  <input
                    id="email"
                    type="email"
                    aria-label="email"
                    placeholder="Your email goes here"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                    className="h-10 block bg-opacity-0 w-full appearance-none rounded-lg border border-gray-200 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  />
                </div>
                <button
                  className="mt-4 md:mt-0 md:ml-4 inline-flex justify-center rounded-lg py-2 px-3 font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-blue flex-none"
                  type="submit"
                  color="cyan"
                >
                  <span>Join newsletter</span>
                </button>
              </form>
            </div>
            <div className={showForm ? "hidden" : "visible"}>
              <p className="pt-6">
                Almost done! Please check your inbox and{" "}
                <span className="highlight">confirm your email address</span> to
                complete the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
