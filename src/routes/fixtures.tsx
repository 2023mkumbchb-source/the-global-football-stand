import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { upcomingMatches, recentResults, type Match } from "@/data/football";

export const Route = createFileRoute("/fixtures")({
  component: FixturesPage,
  head: () => ({
    meta: [
      { title: "Fixtures & Results — Soka Kenya" },
      { name: "description", content: "Upcoming FKF Premier League fixtures and the latest results from Kenyan football." },
      { property: "og:title", content: "Fixtures & Results — Soka Kenya" },
      { property: "og:description", content: "Upcoming FKF Premier League fixtures and the latest results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function groupByDate(matches: Match[]) {
  const groups: { date: string; matches: Match[] }[] = [];
  for (const m of matches) {
    const g = groups.find((x) => x.date === m.date);
    if (g) g.matches.push(m);
    else groups.push({ date: m.date, matches: [m] });
  }
  return groups;
}

function ScheduledList() {
  const groups = groupByDate(upcomingMatches);
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.date}>
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl tracking-wide text-primary">
            {g.date}
          </h2>
          <div className="space-y-2">
            {g.matches.map((m) => (
              <div key={m.id} className="rounded-lg border border-border bg-card p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-semibold text-foreground">
                    {m.home} <span className="text-muted-foreground">vs</span> {m.away}
                  </div>
                  <div className="rounded bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                    {m.time}
                  </div>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {m.venue} · {m.competition}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResultsList() {
  const groups = groupByDate(recentResults);
  return (
    <div className="space-y-8">
      {groups.map((g) => (
        <div key={g.date}>
          <h2 className="mb-3 font-display text-2xl tracking-wide text-primary">{g.date}</h2>
          <div className="space-y-2">
            {g.matches.map((m) => (
              <div key={m.id} className="rounded-lg border border-border bg-card p-4">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="text-right font-semibold">{m.home}</div>
                  <div className="rounded bg-secondary px-3 py-1.5 text-sm font-bold tracking-widest">
                    {m.score}
                  </div>
                  <div className="font-semibold">{m.away}</div>
                </div>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {m.venue} · {m.competition}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FixturesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-5xl">FIXTURES &amp; RESULTS</h1>
      <p className="mt-2 text-muted-foreground">
        Every FKF Premier League matchday, week by week.
      </p>
      <Tabs defaultValue="fixtures" className="mt-8">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="fixtures" className="flex-1 sm:flex-none">Upcoming</TabsTrigger>
          <TabsTrigger value="results" className="flex-1 sm:flex-none">Results</TabsTrigger>
        </TabsList>
        <TabsContent value="fixtures" className="mt-6">
          <ScheduledList />
        </TabsContent>
        <TabsContent value="results" className="mt-6">
          <ResultsList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
