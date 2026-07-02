import Link from "next/link";
import { courseSchemas } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import Faculty from "@/components/Faculty";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <>
      {courseSchemas().map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Fixed Navigation Architecture handles both bars natively */}
      <Navbar />

      {/* Hidden SEO Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>CLAT Coaching Gaya</li>
        </ol>
      </nav>

      {/* Premium Framed Layout Grid */}
      <main className="relative space-y-20 md:space-y-28 pb-24 overflow-hidden bg-white">
        
        {/* Hero & Immediate Social Proof Zone */}
        <section className="relative bg-gradient-to-b from-slate-50 via-white to-transparent">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            <div className="rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 bg-white p-2">
              <TrustBar />
            </div>
          </div>
        </section>

        {/* Academic Value Proposition */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-w">
          <WhyUs />
        </section>

        {/* Core Educational Offerings (Now flawlessly following the light theme flow) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
          <Courses />
        </section>

        {/* Elite Human Element */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faculty />
        </section>

        {/* Social Proof & Validation Matrix */}
        <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            <Results />
            <div className="border-t border-slate-100/80 pt-20">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* Infrastructure & Experience */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <Facilities />
          <Gallery />
        </section>

        {/* Resources & Information Hub */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </section>

        {/* Editorial Insight Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Blog />
        </section>

        {/* Conversion / Final Action Matrix */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden bg-white">
            <LocationContact />
          </div>
        </section>

      </main>

      {/* Footer Interface */}
      <Footer />
      <ExitIntentPopup />
    </>
  );
}