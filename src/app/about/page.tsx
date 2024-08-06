import Contact from "@/components/Contact";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

// app/about.page.tsx
export default function About() {
  return (
    <>
      <section className="hero bg-white-gray">
        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between px-6 pt-16 pb-24 lg:pt-36 lg:pb-48 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Hi, I&apos;m Suzie Kim</h1>
            <p className="my-6 leading-8 text-gray-600">
              I'm a software engineer who loves creating and building things.
              I&apos;ve been diving into the world of software engineering for
              over four years, especially in front-end development. What keeps
              me going is my passion for learning and creating. There&apos;s
              always something new to discover in coding, and it&apos;s so cool
              to see those discoveries make a difference in our everyday lives.
              Plus, it&apos;s fun!
            </p>
            <a
              href="/pdfs/resume.pdf"
              download="Resume_SuzieKim.pdf"
              className="inline-flex items-center gap-x-1 rounded-md bg-blue px-3.5 py-2.5 font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-opacity-70"
            >
              Download Resume
              <ArrowDownTrayIcon className="block h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          {/* Image Section */}
          <div className="mb-4 md:mb-0 md:w-2/5 flex justify-end">
            <img
              src="/images/me.png"
              alt="Content Image"
              className="mx-auto md:mx-0 w-auto max-h-80"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-3.5 bg-gray" />

      {/* Intro Section */}
      <section className="intro bg-white-gray">
        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between pt-24 pb-0 px-6 lg:pt-48 lg:pb-24 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Praha, Czechia</h1>
            <p className="my-6 leading-8 text-gray-600">
              While backpacking across Europe, I ended up in the stunning city
              of Prague. I was so taken by its beauty that I decided to stick
              around longer than I had planned. A random chat with a developer
              at a company sparked my interest in software development. That was
              the beginning of my journey into tech. I dove headfirst into
              learning how to code, and that experience in Prague really set the
              stage for my career as an engineer.
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-4 md:mb-0 md:w-2/5 flex justify-end">
            <img
              src="/images/praha.png"
              alt="Content Image"
              className="mx-auto md:mx-0 w-auto max-h-80"
            />
          </div>
        </div>

        <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center md:justify-between pt-16 pb-0 px-6 lg:pt-32 lg:pb-24 lg:px-8">
          {/* Image Section */}
          <div className="mb-4 md:mb-0 md:w-2/5 flex justify-start">
            <img
              src="/images/seoul.png"
              alt="Content Image"
              className="mx-auto md:mx-0 w-auto max-h-80"
            />
          </div>

          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Seoul, Korea</h1>
            <p className="my-6 leading-8 text-gray-600">
              I was thrilled to kick off my career as a developer in my home
              country. My first job was at Bank Salad, a leading fintech company
              in Korea, where I spent over two years refining my skills as a
              front-end developer. I worked on web applications focused on
              financial transactions and collaborated closely with colleagues
              from various departments. This experience not only sharpened my
              technical abilities but also significantly shaped my expertise and
              work ethic.
            </p>
          </div>
        </div>

        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between pt-16 pb-24 px-6 lg:pt-32 lg:pb-64 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Sydney, Australia</h1>
            <p className="my-6 leading-8 text-gray-600">
              Looking for new adventures and challenges, I decided to move to
              Australia. I joined Bill, an American company with a branch in
              Sydney. As a software engineer, I got to work on developing their
              invoice system, using my skills and experiences to make a real
              impact. Now, I'm at a turning point in my career, excited and
              ready to explore new opportunities in this dynamic city.
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-4 md:mb-0 md:w-2/5 flex justify-end">
            <img
              src="/images/sydney.png"
              alt="Content Image"
              className="mx-auto md:mx-0 w-auto max-h-80"
            />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
