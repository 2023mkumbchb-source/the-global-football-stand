import { Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { siteName, siteTagline } from "@/data/football";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Trophy className="h-4 w-4" />
            </span>
            <span className="font-display text-xl tracking-wide">
              SOKA <span className="text-primary">KENYA</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{siteTagline}.</p>
        </div>
        <div>
          <h3 className="font-display text-lg tracking-wide">Sections</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/fixtures" className="hover:text-primary">Fixtures &amp; Results</Link></li>
            <li><Link to="/table" className="hover:text-primary">League Table</Link></li>
            <li><Link to="/news" className="hover:text-primary">News</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg tracking-wide">About</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteName} covers Kenyan football from the FKF Premier League to the
            national teams — fixtures, results, tables and the stories behind them.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 {siteName}. All scores and standings shown are illustrative.
      </div>
    </footer>
  );
}
