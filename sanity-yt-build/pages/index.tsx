import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import mediumIcon from "../assets/kisspng-medium-logo-publishing-blog-i-5abb6adccf05a3.689953461522232028848.png";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log("props", posts);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-between items-center bg-yellow-400  py-10 lg:py-0 rounded-md">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-4">Medium</span> is a place to
            write, read and connect
          </h1>
          <h2>
            IT'S EASY AND FREE TO POST YOUR THINKING ON ANY TOPIC AND CONNECT
            WIH MILLION OF READERS.
          </h2>
        </div>
        <Image
          className="hidden md:inline-flex h-44 w-44 lg:h-80 lg:w-80 mx-8"
          src={mediumIcon}
          alt="mediumIcon"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  md:gap-6 p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group border rounded-lg cursor-pointer overflow-hidden">
              <img className="h-60 w-full object-fit group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} />
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img className=" w-12 h-12 rounded-full" src={urlFor(post.author.image).url()!} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author->{
    name,
    image
  },
  description,
  mainImage
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};

