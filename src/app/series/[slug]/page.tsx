import { slugify } from "@/utils/helpers";
import { client } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { Code } from "../../../../sanity/components/Code";
import { List } from "../../../../sanity/components/List";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    excerpt,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    },
    publishedAt,
    body,
  }
  `;

  const post = await client.fetch(query, {}, { cache: "no-store" });
  return post;
}

const Post = async ({ params }: any) => {
  const post = await getPost(params?.slug);

  if (!post) notFound();

  return (
    <>
      <section className=" bg-white-gray">
        <article className="w-full mx-auto max-w-[750px] p-[5rem_1rem_10rem] flex flex-col min-h-screen">
          <h1 className="block text-inherit text-4xl m-0 font-bold postTitle">
            {post?.title}
          </h1>
          <div className="mt-3 mb-20">
            {post?.tags?.map((tag: any) => (
              <Link
                key={tag?._id}
                href={`/series/tag/${tag.slug.current}`}
                className="text-xl"
              >
                {/* <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900"> */}
                <span className="text-pink underline hover:no-underline">
                  #{tag.name}
                </span>
              </Link>
            ))}
            <span className="block text-xl text-gray-dark">
              {new Date(post?.publishedAt).toDateString()}
            </span>
          </div>
          <div className="[&_p]:mb-6 break-words break-normal">
            <PortableText
              value={post?.body}
              components={myPortableTextComponents}
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Post;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt={value.alt || ""}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", marginBottom: "1.5rem" }}
      />
    ),
    code: Code,
  },
  marks: {
    strong: ({ children }: any) => (
      <strong
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #f9c664 50%)",
        }}
      >
        {children}
      </strong>
    ),
    em: ({ children }: any) => <em className="underline">{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="text-pink underline hover:no-underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: List,
  },
  block: {
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-4 border-blue mb-7 pl-5 pr-4 bg-[rgba(153,211,244,0.3)] rounded-custom font-sans box-border">
          <p className="py-4">{children}</p>
        </blockquote>
      );
    },
    h1: ({ value }: any) => (
      <h1 id={slugify(value.children[0].text)} className="m-0 p-0 font-bold">
        {value.children[0].text}
      </h1>
    ),
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="my-16 mb-7 text-2xl font-bold"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="my-8 mb-7 text-xl font-bold"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4 id={slugify(value.children[0].text)} className="text-lg font-bold">
        {value.children[0].text}
      </h4>
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
