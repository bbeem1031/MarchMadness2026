# 2026 March Madness Analytics Suite

Data-driven bracket analysis, betting picks, and printable wall cards for the 2026 NCAA Tournament. Built using Barttorvik 2026, Warren Nolan NET, KenPom, and a 17-year upset dataset spanning 2008–2025 (1,147 team-seasons).

**Predicted Champion: Michigan Wolverines** — defeats Duke 71-68 in Indianapolis.

---

## Files

### Bracket Picks

**`2026_NCAA_Bracket_Picks_FINAL.pdf`** — Complete bracket picks for all 67 games (Version 2).
All picks built on season-long Barttorvik BARTHAG and 15 data rules. Includes first round through the national championship with pick type (CHALK / UPSET / LEAN / THE LOCK) and BARTHAG values for every matchup.
- 9 first-round upsets
- Predicted Final Four: Duke, Arizona, Michigan, Houston
- Champion: Michigan over Duke 71-68

**`2026_NCAA_Bracket_Picks_V3.pdf`** — Momentum-updated bracket (Version 3, final version).
Adds Last-10 and Last-30 Barttorvik efficiency as a momentum layer on top of the season model. 6 picks changed from V2 based on teams whose Last-10 BARTHAG diverged significantly from their season average.

| Changed Pick | Reason |
|---|---|
| Cal Baptist over Kansas | Kansas L10 collapsed to 0.725 (-0.203). Cal Baptist surged to 0.895 (+0.206). |
| Troy over Nebraska | Nebraska L10 collapsed to 0.720 (-0.211). Troy surged to 0.835 (+0.291). |
| Georgia over Saint Louis | Saint Louis L10 cratered to 0.547 (-0.311). Pick reversed. |
| Miami FL over Missouri | Missouri L10 crashed to 0.676 (-0.175), went 0-3 in last 3. |
| Saint Mary's over Texas A&M | Texas A&M L10 faded to 0.747 (-0.126). Travel concern offset. |
| Alabama downgraded to LEAN | Alabama L10 faded to 0.865. Hofstra surging to 0.789 L10. |
- Also adds NC State over Gonzaga in the Round of 32 as the bracket's best later-round upset pick.

---

### Betting Picks

**`2026_March_Madness_Betting_Picks.pdf`** — All 32 first-round betting picks with spread, moneyline, and over/under analysis.
Lines sourced from BetMGM, DraftKings, and VegasInsider as of March 16, 2026.

**Top 3 bets:**
1. **Iowa ML (-120)** — Iowa BARTHAG 0.907 exceeds Clemson 0.892. Best team is the "underdog." Near-lock.
2. **Santa Clara ML (+115)** — BARTHAG data reversal: Santa Clara is the statistically better team. Kentucky fading.
3. **South Florida ML (+198)** — Classic 6-seed trap game. Best upset ML value in the bracket.

Bet type breakdown: 10 ML plays · 6 spread plays · 2 overs · 14 unders

> **Disclaimer:** For entertainment and informational purposes only. Lines change — verify before wagering. Please gamble responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER.

---

### Upset Analysis

**`2026_Upset_Analysis_Deep_Dive.pdf`** — Full bracket critique using Last-10 and Last-30 momentum data.
Identifies where the bracket may be too chalk and surfaces the 4 biggest momentum flip signals — games where the favorite's Last-10 BARTHAG is trending sharply down while the underdog is trending sharply up.

Key findings:
- Bracket has ~10 total upsets vs historical average of 13.5 — deficit is mostly in Round of 32 and beyond
- **Kansas** (L10 -0.203) and **Nebraska** (L10 -0.211) are the two biggest momentum collapses in the field
- **NC State over Gonzaga** in the Round of 32 is the single most likely missed later-round upset
- **Iowa State** (L10 0.987) is the hottest team in the tournament entering March
- **Saint Louis** reversed: L10 cratered to 0.547 (-0.311), making Georgia the correct pick

Full momentum table included for all 32 first-round matchups with Season BARTHAG, Last-30, Last-10, and trend signal for every team.

---

### Printable Wall Cards

**`ncaa_2026_wall_cards.html`** — Printable 2×6 inch cards for all 68 tournament teams.
Open in Chrome or Edge while online — team logos load automatically from ESPN's CDN. Print at 100% scale on Letter paper, cut, and laminate for your bracket wall.

- Cards sorted by seed (1 through 16)
- Each card shows: seed number in team colors · ESPN logo · team name in bold white
- Play-in game teams are labeled
- Font auto-scales so every team name fits on one line
- All 4 First Four matchups included (seeds 11 and 16)

**To print:** Ctrl+P → Save as PDF or printer → Scale 100% → Paper: Letter

---

### Interactive Visualizations

**`bracket_rules.jsx`** — Interactive reference card for the 15 data-driven bracket rules.
Built in React. Displays all rules with priority levels (MANDATORY / STRONG / ADVISORY), key stats, and expandable detail. Filterable by category (Seed Matchups, Metrics, Travel, Conference, Deep Runs, Location).

**`march_madness_upsets.jsx`** — Full upset trend intelligence dashboard.
5-tab React dashboard covering: seed matchup trends, travel and location effects, conference PASE performance, team metrics and predictors, and historical upset totals by year. Built with Recharts.

---

## Methodology

All picks apply 15 data rules derived from 17 years of tournament history (2008–2025, excluding 2020):

| Priority | Rules |
|---|---|
| MANDATORY | Pick ≥1 eleven-seed · Pick ≥1 twelve-seed · Screen 5-8 seeds for BARTHAG <0.85 · Fade favs traveling >1,000 miles · East team playing in West = upset |
| STRONG | Never blindly pick 6-seeds · Check AP poll history for underdogs · Trust Big Ten/Pac-12 dogs · Fade Big 12/MWC seeds · Cinderella floor: KP <60 + BARTHAG >0.79 |
| ADVISORY | 12-seed wins = defense first · 11-seed wins = NET/ELO first · Expect 13–14 total upsets · California and Ohio host more upsets · Respect MVC/CAA mid-majors |

**Data sources:** Barttorvik 2026 (season + Last-30 + Last-10) · Warren Nolan NET · KenPom 2026 · ESPN/538 ELO · AP Poll Archive · TeamRankings · 17-year upset dataset

---

## Quick Reference — V3 First Round Picks

| Region | Matchup | Pick | Type |
|---|---|---|---|
| East | #1 Duke vs #16 Siena | Duke | CHALK |
| East | #8 Ohio State vs #9 TCU | Ohio State | CHALK |
| East | #5 St. John's vs #12 Northern Iowa | St. John's | CHALK |
| East | #4 Kansas vs #13 Cal Baptist | **Cal Baptist** | UPSET |
| East | #6 Louisville vs #11 South Florida | **South Florida** | UPSET |
| East | #3 Michigan State vs #14 N. Dakota State | Michigan State | CHALK |
| East | #7 UCLA vs #10 UCF | UCLA | CHALK |
| East | #2 UConn vs #15 Furman | UConn | CHALK |
| West | #1 Arizona vs #16 LIU | Arizona | CHALK |
| West | #8 Villanova vs #9 Utah State | **Utah State** | UPSET |
| West | #5 Wisconsin vs #12 High Point | Wisconsin | CHALK |
| West | #4 Arkansas vs #13 Hawaii | Arkansas | CHALK |
| West | #6 BYU vs #11 NC State | **NC State** | UPSET |
| West | #3 Gonzaga vs #14 Kennesaw State | Gonzaga | CHALK |
| West | #7 Miami FL vs #10 Missouri | Miami FL | CHALK |
| West | #2 Purdue vs #15 Queens | Purdue | CHALK |
| Midwest | #1 Michigan vs #16 UMBC/Howard | Michigan | CHALK |
| Midwest | #8 Georgia vs #9 Saint Louis | **Georgia** | UPSET |
| Midwest | #5 Texas Tech vs #12 Akron | Texas Tech | CHALK |
| Midwest | #4 Alabama vs #13 Hofstra | Alabama | LEAN |
| Midwest | #6 Tennessee vs #11 SMU/Miami OH | Tennessee | CHALK |
| Midwest | #3 Virginia vs #14 Wright State | Virginia | CHALK |
| Midwest | #7 Kentucky vs #10 Santa Clara | **Santa Clara** | UPSET |
| Midwest | #2 Iowa State vs #15 Tennessee State | Iowa State | CHALK |
| South | #1 Florida vs #16 Prairie View/Lehigh | Florida | CHALK |
| South | #8 Clemson vs #9 Iowa | **Iowa** | THE LOCK |
| South | #5 Vanderbilt vs #12 McNeese | Vanderbilt | CHALK |
| South | #4 Nebraska vs #13 Troy | **Troy** | UPSET |
| South | #6 N. Carolina vs #11 VCU | **VCU** | UPSET |
| South | #3 Illinois vs #14 Penn | Illinois | CHALK |
| South | #7 Saint Mary's vs #10 Texas A&M | Saint Mary's | CHALK |
| South | #2 Houston vs #15 Idaho | Houston | CHALK |

*Generated March 16, 2026 · Data: Barttorvik 2026 · Warren Nolan NET · 17-year upset dataset (2008–2025)*
