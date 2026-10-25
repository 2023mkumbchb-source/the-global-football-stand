<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project decisions

- This is a static Kenyan football portal ("Soka Kenya"). All demo data
  (fixtures, results, standings, articles) lives in `src/data/football.ts`;
  pages read from that file. No backend is wired up — swap the arrays for live
  API data without changing the UI.
- Routes: `/` (home), `/fixtures`, `/table`, `/news`, `/news/$slug`.
- Design tokens are pitch-green dark theme with lime primary and gold accents,
  defined in `src/styles.css`; fonts (Bebas Neue display, Barlow body) load via
  `<link>` in `src/routes/__root.tsx`, never via CSS @import.
