import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/site-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
        <Link href="/#blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <span className="mt-6 inline-block rounded-full bg-navy-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-400">
          {post.category}
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-navy-600">{post.excerpt}</p>

        <div className="prose prose-navy mt-8 max-w-none text-navy-700">
          <p>
            At Career Heights Gaya, we believe every CLAT, AILET, and CUET aspirant in Bihar deserves
            structured, mentor-led preparation — without having to relocate to a metro city. This article
            is part of our ongoing series to help students in Gaya and across Bihar navigate their law
            entrance exam journey with clarity.
          </p>
          <p>
            Our faculty team, led by director Avinash Kumar, works closely with every student to build a
            personalised study plan, track progress through regular mock tests, and provide the kind of
            one-on-one mentorship that&apos;s hard to find in larger, crowded institutes.
          </p>
          <p>
            Want tailored guidance for your CLAT, AILET, or CUET preparation? Our counsellors are happy to
            walk you through a free strategy session.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
          <Link href="/#contact" className="btn-primary">
            Book a Free Counselling Session
          </Link>
          <a href={SITE.phoneHref} className="btn-outline">
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>

        <div className="mt-12 border-t border-navy-100 pt-8">
          <h2 className="font-display text-xl font-bold text-navy-900">More From the Blog</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BLOG_POSTS.filter((p) => p.slug !== post.slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-xl border border-navy-100 p-4 text-sm font-medium text-navy-800 transition hover:border-gold-300 hover:bg-gold-50"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
