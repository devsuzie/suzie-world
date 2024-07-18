import { client } from "../utils/sanity/client";
import Link from "next/link";
import Newsletter from "../components/Newsletter";

async function getPosts() {
  const query = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <main>
        {/* Hero section */}
        <section className="hero bg-white-gray">
          <div className="relative isolate px-6 pt-14 lg:px-8 text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl font-daruma ">
              Hello, I&apos;m <br /> Suzie Kim
            </h1>
          </div>
        </section>

        <section id="hello" className="bg-white-gray">
          <div className="py-32">
            <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center md:justify-between p-6 lg:px-8">
              {/* Image Section */}
              <div className="mb-4 md:mb-0 md:w-2/5">
                <img
                  src="/assets/hello.svg"
                  alt="Content Image"
                  className="mx-auto md:mx-0 w-auto h-60"
                />
              </div>

              {/* Written Content Section */}
              <div className="mb-4 md:mb-0 md:w-3/5 p-4">
                <p className="text-gray-700 mb-4">
                  Hello! I&apos;m Suzie Kim,{" "}
                  <span className="highlight">
                    a Sydney-based software engineer
                  </span>{" "}
                  with over four years of experience in the Fin-tech sector,
                  focusing on front-end development.
                </p>
                <p className="text-gray-700 mb-4">
                  My experience has taught me how to create impactful products
                  and collaborate effectively. Let&apos;s work together to make
                  your digital dreams a reality.
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-7xl justify-center md:justify-end p-6 lg:px-8">
              {/* Button to go to the detail page */}
              <Link href="/about" className="inline-blockp-2">
                <img
                  src="/assets/cta.svg"
                  alt="Content Image"
                  className="mx-auto md:mx-0 w-auto h-36"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-3.5 bg-gray" />

        {/* Blog snippets */}
        <section className="bg-white-gray">
          <div className="mx-auto max-w-7xl items-center p-6 lg:px-8 ">
            <div className="mx-auto max-w-lg pt-32">
              <h2 className="text-5xl font-bold tracking-tight text-gray-900 block text-center sm:text-7xl font-daruma">
                To Infinity and Beyond the Code
              </h2>
            </div>

            <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts?.length > 0 &&
                posts.slice(0, 3).map((post) => (
                  <article
                    key={post._id}
                    className="group relative flex flex-col items-start p-6"
                  >
                    <h2 className="font-semibold tracking-tight text-zinc-800">
                      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                      <Link href={`/series/${post?.slug.current}`}>
                        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">{post.title}</span>
                      </Link>
                    </h2>
                    <time
                      className="relative z-10 order-first mb-3 flex items-center text-zinc-400 pl-3.5"
                      dateTime="2022-09-02"
                    >
                      <span
                        className="absolute inset-y-0 left-0 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-6 w-1 rounded-full bg-pink"></span>
                      </span>
                      {new Date(post?.publishedAt).toDateString()}
                    </time>
                    <p className="relative z-10 mt-2 text-zinc-600">
                      {post.excerpt}
                    </p>
                    <div
                      aria-hidden="true"
                      className="relative z-10 mt-4 flex items-center font-medium text-pink"
                    >
                      Read article
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-8 w-8 stroke-pink"
                      >
                        <path
                          d="M6.75 5.75 9.25 8l-2.5 2.25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </article>
                ))}
            </div>

            <div className="mt-10 mb-28 flex items-center justify-center gap-x-6">
              <Link
                href="/series"
                className="rounded-md bg-pink px-3.5 py-2.5 font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                More posts
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>
    </>
  );
}

export default Home;
