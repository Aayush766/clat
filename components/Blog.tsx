// components/Blog.tsx
"use client";

import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

export default function Blog() {
  const featuredPost = BLOG_POSTS[0];
  const secondaryPosts = BLOG_POSTS.slice(1);

  return (
    <section id="blog" className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Wire-Frame Header Section */}
        <div className="flex flex-col gap-4 border-b border-slate-900 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <Layers className="h-3 w-3 stroke-[2.5]" />
              <span>Perspective & Strategy</span>
            </div>
            <h2 className="font-serif text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              The Prep Ledger
            </h2>
          </div>
          <p className="text-xs font-medium tracking-wide text-slate-500 uppercase font-mono max-w-xs md:text-right">
            / Faculty briefings, execution blueprints, and structural analysis loops.
          </p>
        </div>

        {/* Editorial Split Row */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          
          {/* Left Column: Bold Typographic Spotlight */}
          {featuredPost && (
            <div className="py-10 lg:col-span-5 lg:pr-12 lg:py-12">
              <a 
                href={`/blog/${featuredPost.slug}`}
                className="group flex h-full flex-col justify-between space-y-12"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                      [ Essential Read // {featuredPost.category} ]
                    </span>
                    <h3 className="font-serif text-2xl font-black leading-tight text-slate-900 md:text-3xl group-hover:underline decoration-amber-500 decoration-2 underline-offset-4 transition-all">
                      {featuredPost.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500 font-normal">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-amber-600 transition-colors">
                  <span>Begin Reading Analysis</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </a>
            </div>
          )}

          {/* Right Column: High-Density Text Rows */}
          <div className="py-2 lg:col-span-7 lg:pl-12 lg:py-0">
            <div className="divide-y divide-slate-100">
              {secondaryPosts.map((post) => (
                <a
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group block py-8 first:pt-4 last:pb-4 lg:first:pt-12 lg:last:pb-12"
                >
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:gap-6 items-baseline">
                    
                    {/* Meta Identifier Line */}
                    <div className="sm:col-span-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors">
                        {post.category}
                      </span>
                    </div>

                    {/* Headline and Narrative Summary */}
                    <div className="space-y-1.5 sm:col-span-9">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-serif text-base font-bold tracking-tight text-slate-800 group-hover:text-amber-600 transition-colors duration-200">
                          {post.title}
                        </h4>
                        <ArrowRight className="h-4 w-4 text-slate-300 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-amber-500" />
                      </div>
                      <p className="text-xs leading-relaxed text-slate-400 line-clamp-2 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}