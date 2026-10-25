import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getArticle } from "@/data/football";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.article.title} — Soka Kenya`
          : "Story unavailable — Soka Kenya",
      },
      {
        name: "description",
        content: loaderData?.article.excerpt ?? "Kenyan football news from Soka Kenya.",
      },
      {
        property: "og:title",
        content: loaderData?.article.title ?? "Story unavailable — Soka Kenya",
      },
      {
        property: "og:description",
        content: loaderData?.article.excerpt ?? "Kenyan football news from Soka Kenya.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> All news
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
        {article.category}
      </p>
      <h1 className="mt-2 text-4xl leading-tight md:text-5xl">{article.title}</h1>
      <p className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span>By {article.author}</span>
        <span className="inline-flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" /> {article.date}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {article.readMinutes} min read
        </span>
      </p>

      <div className="mt-8 space-y-5 border-t border-border pt-8 text-base leading-relaxed text-foreground/90">
        {article.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "font-medium text-foreground" : undefined}>
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-border bg-card p-6 text-center">
        <h2 className="text-2xl">NEVER MISS A MATCHDAY</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Fixtures, results and table updates — every week.
        </p>
        <Link
          to="/fixtures"
          className="mt-4 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          See this weekend's fixtures
        </Link>
      </div>
    </article>
  );
}
