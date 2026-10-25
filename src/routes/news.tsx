import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { articles } from "@/data/football";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News — Soka Kenya" },
      { name: "description", content: "News, match reports and analysis from Kenyan football." },
      { property: "og:title", content: "News — Soka Kenya" },
      { property: "og:description", content: "News, match reports and analysis from Kenyan football." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function NewsPage() {
  const [featured, ...rest] = articles;
  if (!featured) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-5xl">NEWS</h1>
      <p className="mt-2 text-muted-foreground">Stories, reports and analysis from the grounds.</p>

      <Link
        to="/news/$slug"
        params={{ slug: featured.slug }}
        className="group mt-8 block rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {featured.category} · {featured.date}
        </p>
        <h2 className="mt-2 text-3xl leading-tight group-hover:text-primary md:text-4xl">
          {featured.title}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{featured.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          {featured.author} · {featured.readMinutes} min read
        </p>
      </Link>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((a) => (
          <Link
            key={a.slug}
            to="/news/$slug"
            params={{ slug: a.slug }}
            className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              {a.category}
            </p>
            <h3 className="mt-2 text-xl leading-tight group-hover:text-primary">{a.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
            <p className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3 w-3" /> {a.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {a.readMinutes} min
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
