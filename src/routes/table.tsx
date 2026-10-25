import { createFileRoute } from "@tanstack/react-router";
import { standings } from "@/data/football";

export const Route = createFileRoute("/table")({
  component: TablePage,
  head: () => ({
    meta: [
      { title: "League Table — Soka Kenya" },
      { name: "description", content: "The full FKF Premier League standings: positions, form, goals and points." },
      { property: "og:title", content: "League Table — Soka Kenya" },
      { property: "og:description", content: "The full FKF Premier League standings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function TablePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-5xl">LEAGUE TABLE</h1>
      <p className="mt-2 text-muted-foreground">
        FKF Premier League · 2026/27 season · Matchweek 13
      </p>

      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="bg-secondary text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-3 py-3">Pos</th>
              <th className="px-3 py-3">Team</th>
              <th className="px-3 py-3 text-center">P</th>
              <th className="px-3 py-3 text-center">W</th>
              <th className="px-3 py-3 text-center">D</th>
              <th className="px-3 py-3 text-center">L</th>
              <th className="px-3 py-3 text-center">GF</th>
              <th className="px-3 py-3 text-center">GA</th>
              <th className="px-3 py-3 text-center">GD</th>
              <th className="px-3 py-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((t) => {
              const gd = t.gf - t.ga;
              const zone =
                t.pos <= 2
                  ? "bg-primary/10"
                  : t.pos <= 4
                    ? "bg-primary/5"
                    : t.pos >= 15
                      ? "bg-destructive/10"
                      : "";
              return (
                <tr key={t.team} className={`border-t border-border ${zone}`}>
                  <td className="px-3 py-2.5 font-semibold text-muted-foreground">{t.pos}</td>
                  <td className="px-3 py-2.5 font-bold">{t.team}</td>
                  <td className="px-3 py-2.5 text-center">{t.p}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{t.w}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{t.d}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{t.l}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{t.gf}</td>
                  <td className="px-3 py-2.5 text-center text-muted-foreground">{t.ga}</td>
                  <td className="px-3 py-2.5 text-center">{gd > 0 ? `+${gd}` : gd}</td>
                  <td className="px-3 py-2.5 text-center font-bold text-primary">{t.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded bg-primary/25" /> Continental spots (top 2 confirmed, 3–4 playoff)
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded bg-destructive/25" /> Relegation (bottom 2)
        </span>
      </div>
    </div>
  );
}
