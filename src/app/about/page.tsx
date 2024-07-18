import Contact from "@/components/Contact";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

// app/about.page.tsx
export default function About() {
  return (
    <>
      <section className="hero bg-white-gray">
        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between px-6 pt-36 pb-48 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Hi, I&apos;m Suzie Kim</h1>
            <p className="my-6 leading-8 text-gray-600">
              Hello! I&apos;m Suzie Kim, a Sydney-based software engineer with
              over four years of experience specializing in front-end
              development. My career has been driven by a love for learning and
              creating new things. What excites me about coding is the perpetual
              opportunity to learn; it&apos;s never been easier to integrate new
              discoveries into our daily lives. Plus, it&apos;s incredibly fun!
              My journey has equipped me with the knowledge and skills to work
              effectively, create impactful products, collaborate with teams,
              schedule timelines, and break projects down into manageable
              sprints. Now, I&apos;m passionate about bringing visions to life
              in the digital world, including my own. Let&apos;s create
              something amazing together.
            </p>
            <a
              href="/pdfs/resume.pdf"
              download="Resume_SuzieKim.pdf"
              className="inline-flex items-center gap-x-1 rounded-md bg-blue px-3.5 py-2.5 font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between px-6 pt-48 pb-24 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Praha, Czechia</h1>
            <p className="my-6 leading-8 text-gray-600">
              My European backpacking adventure in search of direction led me to
              the stunning city of Prague. The beauty of the city convinced me
              to stay, and a fortuitous meeting with a developer at a travel
              agency ignited my passion for development. This marked the
              beginning of my journey as an engineer, where I started to learn
              and grow in the tech field, setting the foundation for my future
              career.
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

        <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center md:justify-between px-6 py-24 lg:px-8">
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
              In Seoul, I embarked on my professional journey as a developer,
              securing my first job and dedicating three years to the craft. At
              Bank Salad, a pioneering Seoul-based fintech company, I honed my
              skills as the team&apos;s sole front-end developer. My tenure
              involved working on pivotal projects and collaborating closely
              with the team, shaping my expertise and work ethic in the bustling
              heart of South Korea.
            </p>
          </div>
        </div>

        <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl items-center md:justify-between px-6 pt-24 pb-48 lg:px-8">
          {/* Content section */}
          <div className="mb-4 pr-5 md:mb-0 md:w-3/5">
            <h1 className="text-7xl font-daruma">Sydney, Australia</h1>
            <p className="my-6 leading-8 text-gray-600">
              Seeking new adventures and challenges, I moved to Sydney, where I
              joined Bill, an American company with a local branch. As a
              software engineer, I played a key role in developing their invoice
              system, leveraging my skills and experiences to make a significant
              impact. Now, at a turning point in my career, I&apos;m poised to
              transition from my role at the company to embrace the freedom and
              possibilities of becoming a solo trader (freelancer engineer),
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
