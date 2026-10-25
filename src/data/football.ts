// Static demo data for the Soka Kenya football portal.
// Swap these arrays for live API data later without touching the UI.

export interface Match {
  id: string;
  date: string; // e.g. "Sat 7 Nov 2026"
  time: string;
  home: string;
  away: string;
  venue: string;
  competition: string;
  score?: string;
  status: "scheduled" | "played";
}

export interface Standing {
  pos: number;
  team: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readMinutes: number;
  paragraphs: string[];
}

export const siteName = "Soka Kenya";
export const siteTagline = "Kenyan football, minute by minute";
export const season = "FKF Premier League · 2026/27 · Matchweek 14";

export const upcomingMatches: Match[] = [
  {
    id: "u1",
    date: "Sat 7 Nov 2026",
    time: "15:00 EAT",
    home: "Gor Mahia",
    away: "AFC Leopards",
    venue: "Moi International Sports Centre, Kasarani",
    competition: "FKF Premier League",
    status: "scheduled",
  },
  {
    id: "u2",
    date: "Sat 7 Nov 2026",
    time: "13:00 EAT",
    home: "Kenya Police",
    away: "Ulinzi Stars",
    venue: "Police Pavilion, South C",
    competition: "FKF Premier League",
    status: "scheduled",
  },
  {
    id: "u3",
    date: "Sun 8 Nov 2026",
    time: "15:00 EAT",
    home: "Tusker",
    away: "Bandari",
    venue: "Ruaraka Stadium, Nairobi",
    competition: "FKF Premier League",
    status: "scheduled",
  },
  {
    id: "u4",
    date: "Sun 8 Nov 2026",
    time: "13:00 EAT",
    home: "Kakamega Homeboyz",
    away: "Sofapaka",
    venue: "Bukhungu Stadium, Kakamega",
    competition: "FKF Premier League",
    status: "scheduled",
  },
  {
    id: "u5",
    date: "Wed 11 Nov 2026",
    time: "15:00 EAT",
    home: "KCB",
    away: "Posta Rangers",
    venue: "KCB Sports Club, Ruaraka",
    competition: "FKF Premier League",
    status: "scheduled",
  },
  {
    id: "u6",
    date: "Wed 11 Nov 2026",
    time: "15:00 EAT",
    home: "Shabana",
    away: "Mara Sugar",
    venue: "Gusii Stadium, Kisii",
    competition: "FKF Premier League",
    status: "scheduled",
  },
];

export const recentResults: Match[] = [
  {
    id: "r1",
    date: "Sun 1 Nov 2026",
    time: "FT",
    home: "Gor Mahia",
    away: "Tusker",
    venue: "Moi International Sports Centre, Kasarani",
    competition: "FKF Premier League",
    score: "2 - 1",
    status: "played",
  },
  {
    id: "r2",
    date: "Sun 1 Nov 2026",
    time: "FT",
    home: "AFC Leopards",
    away: "Bandari",
    venue: "Nyayo National Stadium, Nairobi",
    competition: "FKF Premier League",
    score: "1 - 1",
    status: "played",
  },
  {
    id: "r3",
    date: "Sat 31 Oct 2026",
    time: "FT",
    home: "Ulinzi Stars",
    away: "Kakamega Homeboyz",
    venue: "Afraha Stadium, Nakuru",
    competition: "FKF Premier League",
    score: "0 - 2",
    status: "played",
  },
  {
    id: "r4",
    date: "Sat 31 Oct 2026",
    time: "FT",
    home: "Kenya Police",
    away: "Sofapaka",
    venue: "Police Pavilion, South C",
    competition: "FKF Premier League",
    score: "3 - 0",
    status: "played",
  },
  {
    id: "r5",
    date: "Sat 31 Oct 2026",
    time: "FT",
    home: "Mathare United",
    away: "Bidco United",
    venue: "Dandora Stadium, Nairobi",
    competition: "FKF Premier League",
    score: "1 - 0",
    status: "played",
  },
  {
    id: "r6",
    date: "Sat 31 Oct 2026",
    time: "FT",
    home: "Muranga SEAL",
    away: "Nairobi City Stars",
    venue: "Stadium, Murang'a",
    competition: "FKF Premier League",
    score: "2 - 2",
    status: "played",
  },
];

export const standings: Standing[] = [
  { pos: 1, team: "Gor Mahia", p: 13, w: 10, d: 2, l: 1, gf: 27, ga: 8, pts: 32 },
  { pos: 2, team: "Kenya Police", p: 13, w: 8, d: 3, l: 2, gf: 22, ga: 10, pts: 27 },
  { pos: 3, team: "Tusker", p: 13, w: 7, d: 4, l: 2, gf: 21, ga: 11, pts: 25 },
  { pos: 4, team: "AFC Leopards", p: 13, w: 7, d: 3, l: 3, gf: 18, ga: 12, pts: 24 },
  { pos: 5, team: "Kakamega Homeboyz", p: 13, w: 6, d: 4, l: 3, gf: 17, ga: 13, pts: 22 },
  { pos: 6, team: "Bandari", p: 13, w: 6, d: 3, l: 4, gf: 16, ga: 14, pts: 21 },
  { pos: 7, team: "Ulinzi Stars", p: 13, w: 5, d: 5, l: 3, gf: 15, ga: 12, pts: 20 },
  { pos: 8, team: "KCB", p: 13, w: 5, d: 3, l: 5, gf: 14, ga: 14, pts: 18 },
  { pos: 9, team: "Sofapaka", p: 13, w: 4, d: 4, l: 5, gf: 13, ga: 15, pts: 16 },
  { pos: 10, team: "Posta Rangers", p: 13, w: 4, d: 3, l: 6, gf: 12, ga: 16, pts: 15 },
  { pos: 11, team: "Mara Sugar", p: 13, w: 3, d: 5, l: 5, gf: 11, ga: 15, pts: 14 },
  { pos: 12, team: "Shabana", p: 13, w: 3, d: 4, l: 6, gf: 10, ga: 17, pts: 13 },
  { pos: 13, team: "Nairobi City Stars", p: 13, w: 3, d: 2, l: 8, gf: 9, ga: 20, pts: 11 },
  { pos: 14, team: "Muranga SEAL", p: 13, w: 2, d: 4, l: 7, gf: 8, ga: 21, pts: 10 },
  { pos: 15, team: "Mathare United", p: 13, w: 2, d: 3, l: 8, gf: 7, ga: 22, pts: 9 },
  { pos: 16, team: "Bidco United", p: 13, w: 1, d: 4, l: 8, gf: 6, ga: 23, pts: 7 },
];

export const articles: Article[] = [
  {
    slug: "derby-preview-gor-mahia-afc-leopards",
    title: "Derby Eve at Kasarani: Gor Mahia host AFC Leopards with the summit on the line",
    excerpt:
      "Mashemeji Derby returns to Kasarani on Saturday with two points separating the two giants and the league lead within reach for both.",
    category: "Match Preview",
    date: "Thu 5 Nov 2026",
    author: "Brian Otieno",
    readMinutes: 4,
    paragraphs: [
      "The green side of Kasarani will be split in two on Saturday afternoon when Gor Mahia welcome AFC Leopards for the 96th Mashemeji Derby. K'Ogalo arrive top of the FKF Premier League table on 32 points, while Ingwe sit fourth on 24 with a game in hand over most of the chasing pack.",
      "Gor Mahia's form has been built on a defence that has conceded just eight goals in thirteen matches, anchored by the returning centre-back pairing that kept three clean sheets in October. Coach Charles Akonnor has rotated his wing-backs all season, and the derby is expected to see the quicker of the two deployed on the left to deal with Ingwe's overlapping runs.",
      "AFC Leopards, for their part, have quietly turned Nyayo into a fortress but their away record tells a different story: four points from six road fixtures. Striker Sydney Ochieng, the league's joint top scorer with nine goals, has scored in each of his last three derbies and knows the margin for error on Saturday is zero.",
      "Kickoff is 15:00 EAT and tickets went on sale on Monday, with the standalone terrace sections sold out by Wednesday night. Police have confirmed enhanced crowd-control arrangements around the stadium gates, and fans are advised to arrive before 13:00.",
      "Whatever happens, the table will look different by full time: a Gor Mahia win opens a ten-point cushion over Ingwe; an Ingwe win blows the title race wide open with Matchweek 15 to come.",
    ],
  },
  {
    slug: "kenya-police-streak-three-wins",
    title: "Kenya Police make it three straight with ruthless 3-0 win over Sofapaka",
    excerpt:
      "The lawmen were relentless in South C, scoring twice in six first-half minutes to keep the pressure on the league leaders.",
    category: "Match Report",
    date: "Sun 1 Nov 2026",
    author: "Amina Wanjiru",
    readMinutes: 3,
    paragraphs: [
      "Kenya Police underlined their title credentials on Saturday with a commanding 3-0 dismissal of Sofapaka at the Police Pavilion, their third win on the bounce and their fourth clean sheet of the campaign.",
      "The breakthrough arrived on 23 minutes when winger Elvis Rop cut inside from the right and curled a left-footed effort into the far corner. Six minutes later, captain Musa Mohamed rose highest at a corner to head home the second, and the contest was effectively over before the half-hour.",
      "Batoto ba Mungu rallied briefly after the restart, forcing two smart saves from goalkeeper Patrick Matasi, but the third goal on 71 minutes — a counter finished coolly by substitute Timothy Ochieng — ended any thought of a comeback.",
      "The result lifts Police to 27 points, five behind leaders Gor Mahia ahead of Saturday's derby. Police next host Ulinzi Stars, who themselves fell 2-0 at Afraha in a derby of the uniformed services.",
    ],
  },
  {
    slug: "homeboyz-quiet-charge-top-six",
    title: "Kakamega Homeboyz are the league's quiet charge — and nobody is talking about it",
    excerpt:
      "Unbeaten in five, the Bukhungu side have climbed to fifth on the back of the league's stingiest away defence.",
    category: "Analysis",
    date: "Mon 2 Nov 2026",
    author: "Kevin Ambuka",
    readMinutes: 5,
    paragraphs: [
      "While the capital's attention stays fixed on the derby, Kakamega Homeboyz have gone about their business with the least fanfare of any side in the top six. Saturday's 2-0 win at Afraha was their fifth match without defeat and their third straight clean sheet on the road.",
      "The numbers behind the rise are striking. Homeboyz have conceded just three goals away from Bukhungu this season — comfortably the best away defensive record in the division — and they have taken points off three of the current top five.",
      "Coach Fredrick Wanyama credits a settled back line and the summer arrival of holding midfielder Ambrose Sifuna, who has completed the most interceptions in the league since September. \"We defend as a block of eleven and we break quickly,\" Wanyama said after the Nakuru win. \"Nobody fears us yet. That suits us fine.\"",
      "The fixture list now turns kind: Sofapaka at home this weekend, then a run against sides in the bottom half. If the streak reaches eight by the December break, the conversation about the title race will have to make room for Western Kenya.",
    ],
  },
  {
    slug: "fkf-december-break-calendar",
    title: "League confirms December break calendar and rescheduled Matchweek 14 ties",
    excerpt:
      "The FKF Premier League will pause after Matchweek 16 on 13 December, with two postponed fixtures folded into midweek slots.",
    category: "League News",
    date: "Tue 3 Nov 2026",
    author: "Soka Kenya Desk",
    readMinutes: 2,
    paragraphs: [
      "The FKF Premier League has confirmed its December calendar, with the season pausing after Matchweek 16 on Sunday 13 December and resuming on 9 January 2027.",
      "Two fixtures postponed in October for stadium availability have been rescheduled: Bidco United v Posta Rangers will now be played on Wednesday 11 November, and Nairobi City Stars v Mathare United moves to the following Wednesday.",
      "The league also reminded clubs that the mid-season transfer window opens on 1 December and closes on 15 January, with registration handled through the FKF portal.",
      "The December break is designed to clear the calendar for the CECAFA qualifiers and the festive-season Cup fixtures, details of which will be announced next week.",
    ],
  },
  {
    slug: "tusker-bandari-coastal-test",
    title: "Tusker face coastal test as Bandari arrive at Ruaraka in form",
    excerpt:
      "The brewers have won four of five at home, but Bandari's forward line has scored in every away game this season.",
    category: "Match Preview",
    date: "Wed 4 Nov 2026",
    author: "Amina Wanjiru",
    readMinutes: 3,
    paragraphs: [
      "Tusker's home form has carried them to third place — four wins from five at Ruaraka — but Sunday's visitors arrive with the division's most reliable attack on the road.",
      "Bandari have found the net in every away fixture this season, and their front two of Beja Nyamandwe and Darius Msoka have combined for eleven goals. The dockers sit sixth, three points off the top four, and know a win in Ruaraka would announce them as genuine continental-spot contenders.",
      "Tusker's concern is midfield depth: their influential playmaker is a doubt with a hamstring strain picked up in last week's loss at Kasarani. Coach Robert Matano has called it a \"51-49 situation\" and will make a late call.",
      "Kickoff is 15:00 EAT on Sunday, with the earlier fixture at Bukhungu seeing Kakamega Homeboyz host Sofapaka at 13:00.",
    ],
  },
  {
    slug: "mathare-united-youth-revolution",
    title: "Mathare United's youth revolution is earning points, if not yet plaudits",
    excerpt:
      "Five teenagers have started for Slum Boys this season, and Saturday's 1-0 win over Bidco was engineered entirely by the academy.",
    category: "Feature",
    date: "Wed 4 Nov 2026",
    author: "Kevin Ambuka",
    readMinutes: 4,
    paragraphs: [
      "The average age of Mathare United's starting eleven against Bidco United on Saturday was 21.4 — the youngest fielded in the FKF Premier League this season. It was also, remarkably, a winning one.",
      "The goal came from 18-year-old academy graduate Kelvin Mwangi, who latched onto a through ball from fellow teenager Dennis Otieno before finishing low at the near post. Mwangi has now started seven consecutive matches and is the club's top scorer with four.",
      "The club's finances forced the rebuild: with the senior wage bill trimmed over two seasons, the academy has become the first team's supply line. Four of this season's regulars came through Mathare's own youth setup, and the club has loaned two more to lower-division sides for minutes.",
      "Relegation remains the bare statistical threat — Slum Boys sit fifteenth on nine points — but the trajectory is upward: eleven points from the last eight matches. Survival, and a squad built for the years after it, is the plan.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
