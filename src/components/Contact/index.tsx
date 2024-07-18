import React from "react";
import "./style.module.css";

const Contact = () => {
  return (
    <section className="bg-gray-dark py-16 px-4">
      <div className="mx-auto max-w-6xl items-center justify-between px-6 py-12 lg:py-16 lg:px-8 rounded-2xl bg-white-gray ">
        <div className="mx-auto grid md:gap-y-16 px-0 md:pr-8 md:grid-cols-4060">
          {/* Left Block */}
          <div className="flex justify-center items-center w-full mx-0 max-w-lg">
            <img
              src="/assets/mail.svg"
              alt="Mail Image"
              className="mx-auto md:mx-0 w-auto h-36"
            />
          </div>

          {/* Right Block */}
          <div className="w-full mx-0 max-w-none pt-0">
            <h2 className="py-3 font-daruma text-center sm:text-5xl md:text-left">
              Let&apos;s Connect!
            </h2>

            <p className="my-2 text-gray-600">
              Struggle with building an web service? Have a fun idea you want to
              realise on? Hit me up on LinkedIn or send me an email with the
              details. See you there!
            </p>

            <div className="grid gap-4 grid-cols-1 lg:gap-8 lg:grid-cols-2 lg:col-span-2 pt-4">
              <dl className="bg-gray rounded-xl px-8 py-5 flex lg:flex-col gap-x-1">
                <dt className="font-bold">Email</dt>
                <dd>
                  <a className="underline" href="mailto:suuuzie18@gmail.com">
                    suuuzie18@gmail.com
                  </a>
                </dd>
              </dl>

              <dl className="bg-gray rounded-xl px-8 py-5 flex lg:flex-col gap-x-1">
                <dt className="font-bold">LinkedIn</dt>
                <dd>
                  <a
                    className="underline"
                    target="_blank"
                    href="https://www.linkedin.com/in/devsuzie"
                  >
                    linkedin.com/in/devsuzie
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
