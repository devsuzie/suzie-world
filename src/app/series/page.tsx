import Newsletter from "@/components/Newsletter";
import { client } from "../../utils/sanity/client";
import Link from "next/link";

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

async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <section className="hero bg-white-gray">
        <div className="mx-auto max-w-5xl pt-16 pb-32 md:pt-32 md:pb-60 px-6 lg:px-8">
          <div className="flex gap-x-5 flex-col-reverse items-center md:flex-row">
            <h1 className="font-daruma text-7xl">ALL POSTS</h1>
            <span
              className="flex items-center justify-center"
              style={{
                width: "130px",
                height: "100px",
                backgroundImage: "url(/assets/folder.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div className="flex max-w-4xl flex-col space-y-16 mt-16 sm:mt-20">
            {posts.map((post: any) => (
              <article
                key={post._id}
                className="md:grid md:grid-cols-4 md:items-baseline"
              >
                <div className="md:col-span-3 group relative flex flex-col items-start">
                  <h2 className="font-semibold tracking-tight text-zinc-800">
                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                    <Link href={`/series/${post?.slug.current}`}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">{post.title}</span>
                    </Link>
                  </h2>
                  <time
                    className="md:hidden relative z-10 order-first mb-3 flex items-center pl-3.5"
                    dateTime="2022-09-05"
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
                      className="ml-1 h-4 w-4 stroke-pink"
                    >
                      <path
                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <time
                  className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-zinc-400"
                  dateTime="2022-09-05"
                >
                  {new Date(post?.publishedAt).toDateString()}
                </time>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Blog;
