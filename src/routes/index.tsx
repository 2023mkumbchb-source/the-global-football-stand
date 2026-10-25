import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, ArrowRight, Flame } from "lucide-react";
import heroImg from "@/assets/hero-stadium.jpg";
import {
  siteName,
  season,
  upcomingMatches,
  recentResults,
  standings,
  articles,
} from "@/data/football";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Soka Kenya — Kenyan Football: Fixtures, Results & News" },
      { name: "description", content: "FKF Premier League fixtures, results, standings and news — Kenyan football, minute by minute." },
      { property: "og:title", content: "Soka Kenya — Kenyan Football" },
      { property: "og:description", content: "Fixtures, results, league table and news from Kenyan football." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function MatchRow({
  match,
}: {
  match: (typeof upcomingMatches)[number];
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md bg-card px-4 py-3">
      <div className="min-w-0">
        <p className="truncate font-semibold text-foreground">
          {match.home} <span className="text-muted-foreground">vs</span> {match.away}
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 truncate text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0" /> {match.venue}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-sm font-bold text-primary">{match.time.split(" ")[0]}</p>
        <p className="text-xs text-muted-foreground">{match.date}</p>
      </div>
    </div>
  );
}

function Index() {
  const nextMatches = upcomingMatches.slice(0, 4);
  const topTeams = standings.slice(0, 5);
  const [featured, ...rest] = articles;
  if (!featured) return null;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="A packed Kenyan football stadium under floodlights at dusk"
          width={1600}
          height={896}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Flame className="h-3.5 w-3.5" /> {season}
          </p>
          <h1 className="max-w-2xl text-5xl leading-[0.95] md:text-7xl">
            KENYAN FOOTBALL, <span className="text-primary">MINUTE BY MINUTE</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            {siteName} brings you fixtures, results and the league table from the
            FKF Premier League — plus the stories from the grounds that matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/fixtures"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Fixtures &amp; Results <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/table"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-accent"
            >
              League Table
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Next matches */}
        <section className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-3xl">NEXT UP</h2>
            <Link to="/fixtures" className="text-sm font-semibold text-primary hover:underline">
              All fixtures
            </Link>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {nextMatches.map((m) => (
              <MatchRow key={m.id} match={m} />
            ))}
          </div>
        </section>

        {/* Latest results strip */}
        <section className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-3xl">LATEST RESULTS</h2>
            <Link to="/fixtures" className="text-sm font-semibold text-primary hover:underline">
              Full results
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            {recentResults.slice(0, 4).map((m, i) => (
              <div
                key={m.id}
                className={`flex items-center justify-between gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}
              >
                <div className="min-w-0 flex-1 text-right truncate font-semibold">{m.home}</div>
                <div className="shrink-0 rounded bg-secondary px-3 py-1 text-sm font-bold tracking-widest text-foreground">
                  {m.score}
                </div>
                <div className="min-w-0 flex-1 truncate font-semibold">{m.away}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Table preview + News */}
        <section className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-3xl">TOP OF THE TABLE</h2>
              <Link to="/table" className="text-sm font-semibold text-primary hover:underline">
                Full table
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-3 py-2">#</th>
                    <th className="px-3 py-2">Team</th>
                    <th className="px-3 py-2 text-center">P</th>
                    <th className="px-3 py-2 text-center">GD</th>
                    <th className="px-3 py-2 text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {topTeams.map((t) => (
                    <tr key={t.team} className="border-t border-border bg-card">
                      <td className="px-3 py-2.5 text-muted-foreground">{t.pos}</td>
                      <td className="px-3 py-2.5 font-semibold">{t.team}</td>
                      <td className="px-3 py-2.5 text-center text-muted-foreground">{t.p}</td>
                      <td className="px-3 py-2.5 text-center text-muted-foreground">
                        {t.gf - t.ga > 0 ? `+${t.gf - t.ga}` : t.gf - t.ga}
                      </td>
                      <td className="px-3 py-2.5 text-center font-bold text-primary">{t.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-3xl">LATEST NEWS</h2>
              <Link to="/news" className="text-sm font-semibold text-primary hover:underline">
                All news
              </Link>
            </div>
            <Link
              to="/news/$slug"
              params={{ slug: featured.slug }}
              className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:bg-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {featured.category} · {featured.date}
              </p>
              <h3 className="mt-2 text-2xl leading-tight group-hover:text-primary">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{featured.excerpt}</p>
            </Link>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {rest.slice(0, 4).map((a) => (
                <Link
                  key={a.slug}
                  to="/news/$slug"
                  params={{ slug: a.slug }}
                  className="group block rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    <CalendarDays className="mr-1 inline h-3 w-3" />
                    {a.date}
                  </p>
                  <h3 className="mt-1.5 text-lg leading-tight group-hover:text-primary">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
