// app/blog/[slug]/page.tsx
// ONE template renders all 10 blogs. Next.js pre-renders each slug at build time.

import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug, getAllSlugs, BLOGS} from "@/lib/blogs";

// ── Static generation ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs(); // returns [{ slug: "ai-in-manufacturing" }, ...]
}

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | DatagenixAi Blog`,
    description: blog.excerpt,
  };
}

// ── Shared constants ──────────────────────────────────────────────────────────
const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(33,198,207,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(33,198,207,0.03) 1px,transparent 1px)",
  backgroundSize: "60px 60px",
};

const TAG_COLORS = {
  "AI & Tech": { bg: "rgba(33,198,207,0.1)", text: "#21C6CF", border: "rgba(33,198,207,0.2)" },
  IoT: { bg: "rgba(129,140,248,0.1)", text: "#818cf8", border: "rgba(129,140,248,0.2)" },
  "Smart Cities": { bg: "rgba(52,211,153,0.1)", text: "#34d399", border: "rgba(52,211,153,0.2)" },
  Education: { bg: "rgba(251,191,36,0.1)", text: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  Industry: { bg: "rgba(248,113,113,0.1)", text: "#f87171", border: "rgba(248,113,113,0.2)" },
};

// ── Content block renderer ─────────────────────────────────────────────────────
function RenderBlock({ block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className="text-[rgba(255,255,255,0.55)] text-[0.95rem] sm:text-[1.02rem] leading-[1.9]"
          style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
        >
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2
          className="text-white text-[1.2rem] sm:text-[1.4rem] font-bold leading-[1.3] tracking-[-0.02em] mt-10 mb-1"
          style={{ fontFamily: "'Syne',sans-serif" }}
        >
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          className="text-[rgba(255,255,255,0.75)] text-[1rem] sm:text-[1.1rem] font-semibold leading-[1.4] mt-6 mb-1"
          style={{ fontFamily: "'Syne',sans-serif" }}
        >
          {block.text}
        </h3>
      );

    case "callout":
      return (
        <div className="relative rounded-xl border border-[rgba(33,198,207,0.2)] bg-[rgba(33,198,207,0.04)] px-6 py-5 my-2">
          <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[#21C6CF]" style={{ boxShadow: "0 0 8px rgba(33,198,207,0.5)" }} />
          {block.label && (
            <span
              className="block text-[#21C6CF] text-[0.65rem] font-semibold tracking-[0.18em] uppercase mb-2"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              {block.label}
            </span>
          )}
          <p
            className="text-[rgba(255,255,255,0.65)] text-[0.92rem] leading-[1.75]"
            style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            {block.text}
          </p>
        </div>
      );

    case "quote":
      return (
        <blockquote className="my-2 pl-6 border-l-2 border-[rgba(33,198,207,0.3)]">
          <p
            className="text-[rgba(255,255,255,0.5)] text-[0.95rem] leading-[1.8] italic"
            style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            "{block.text}"
          </p>
          {block.author && (
            <cite
              className="block mt-2 text-[rgba(255,255,255,0.25)] text-[0.75rem] not-italic"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              — {block.author}
            </cite>
          )}
        </blockquote>
      );

    case "list":
      return (
        <ul className="space-y-2.5 my-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#21C6CF] shrink-0"
                style={{ boxShadow: "0 0 5px rgba(33,198,207,0.5)" }}
              />
              <span
                className="text-[rgba(255,255,255,0.5)] text-[0.92rem] leading-[1.75]"
                style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "divider":
      return (
        <div className="my-2 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-[rgba(33,198,207,0.3)]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[rgba(33,198,207,0.15)] to-transparent" />
        </div>
      );

    default:
      return null;
  }
}

// ── Related posts strip ───────────────────────────────────────────────────────
function RelatedPosts({ currentSlug, currentTag }) {
  const related = BLOGS.filter(
    (b) => b.slug !== currentSlug && (b.tag === currentTag || b.category === currentTag)
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 pt-14 border-t border-[rgba(33,198,207,0.08)]">
      <div className="flex items-center gap-2 mb-8">
        <span
          className="w-[5px] h-[5px] rounded-full bg-[#21C6CF] inline-block shrink-0"
          style={{ boxShadow: "0 0 8px #21C6CF" }}
        />
        <h2
          className="text-[rgba(255,255,255,0.4)] text-[0.68rem] font-medium tracking-[0.18em] uppercase"
          style={{ fontFamily: "'DM Sans',sans-serif" }}
        >
          More in {currentTag}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((blog) => {
          const c = TAG_COLORS[blog.tag] || TAG_COLORS["AI & Tech"];
          return (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block rounded-xl border border-[rgba(33,198,207,0.08)] bg-[#0a0a0a] p-5 hover:border-[rgba(33,198,207,0.25)] transition-all duration-300"
            >
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6rem] font-medium tracking-wide mb-3"
                style={{ fontFamily: "'DM Sans',sans-serif", background: c.bg, color: c.text, border: `1px solid ${c.border}` }}
              >
                {blog.tag}
              </span>
              <h3
                className="text-white text-[0.88rem] font-semibold leading-[1.45] tracking-[-0.01em] group-hover:text-[#21C6CF] transition-colors duration-300"
                style={{ fontFamily: "'Syne',sans-serif" }}
              >
                {blog.title}
              </h3>
              <p
                className="mt-2 text-[rgba(255,255,255,0.28)] text-[0.75rem]"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                {blog.readTime}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const tagColor = TAG_COLORS[blog.tag] || TAG_COLORS["AI & Tech"];

  return (
    <main className="bg-[#050505] min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#050505] relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(33,198,207,0.05) 0%,transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(33,198,207,0.3)] to-transparent" />

        <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-[rgba(255,255,255,0.3)] hover:text-[#21C6CF] text-[0.72rem] tracking-wide transition-colors duration-200"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3">
                <path d="M10 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Blog
            </Link>
            <span className="text-[rgba(255,255,255,0.12)] text-[0.65rem]">/</span>
            <span
              className="text-[rgba(255,255,255,0.2)] text-[0.72rem] truncate max-w-[180px]"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              {blog.title}
            </span>
          </div>

          {/* Tag + meta */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.62rem] font-medium tracking-wide"
              style={{ fontFamily: "'DM Sans',sans-serif", background: tagColor.bg, color: tagColor.text, border: `1px solid ${tagColor.border}` }}
            >
              {blog.tag}
            </span>
            <span
              className="text-[rgba(255,255,255,0.2)] text-[0.68rem]"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              {blog.date} · {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-white text-[1.9rem] sm:text-[2.5rem] lg:text-[2.9rem] font-bold leading-[1.15] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p
            className="text-[rgba(255,255,255,0.38)] text-[1rem] sm:text-[1.08rem] leading-[1.8]"
            style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}
          >
            {blog.excerpt}
          </p>

          {/* Divider line */}
          <div className="mt-10 h-px bg-gradient-to-r from-[rgba(33,198,207,0.25)] via-[rgba(33,198,207,0.08)] to-transparent" />
        </div>
      </section>

      {/* ── Article body ── */}
      <article className="relative bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none" style={GRID_BG} />
        <div className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-6">
            {blog.content.map((block, i) => (
              <RenderBlock key={i} block={block} />
            ))}
          </div>

          {/* ── Related posts ── */}
          <RelatedPosts currentSlug={blog.slug} currentTag={blog.tag} />

          {/* ── Back to blog ── */}
          <div className="mt-14 pt-8 border-t border-[rgba(33,198,207,0.08)]">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[rgba(33,198,207,0.2)] bg-[#0a0a0a] text-[rgba(255,255,255,0.5)] hover:border-[#21C6CF] hover:text-[#21C6CF] text-[0.8rem] font-semibold tracking-wide transition-all duration-300"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5">
                <path d="M10 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}