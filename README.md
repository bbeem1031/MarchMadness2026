# 🏀 2026 March Madness Analytics Hub

**Data-Driven · 2008–2025 · 17 Tournaments · 1,147 Team-Seasons · Updated March 19, 2026 · v5 · R1 IN PROGRESS**

> **🏆 Model Champion Pick: Michigan over Duke 73-68**  
> Rules 16 + 17 confirmed · Veteran depth (Exp 1.95) · Indianapolis = Big Ten country

> **🎯 v5 Update:** Betting Picks PDF removed — fully superseded by the live Lines Dashboard and Results Tracker. No redundant static documents.

---

## 📊 Live Betting Results — Thu Early Slate (6-2)

| Pick | Tier | Result | Score | Notes |
|------|------|--------|-------|-------|
| TCU +2.5 | B | ✅ WIN | TCU 66, OSU 64 | TCU won outright |
| SFU +4.5 | A | ✅ WIN | LOU 83, SFU 79 | Lost by 4 — covers +4.5 ✓ |
| HP +10 | B | ✅ WIN | HP 83, WIS 82 | HP won outright — upset! |
| McNeese +12 | B | ✅ WIN | VAN 78, MCN 68 | Vandy won by 10, needed -12 |
| SFU 1H U76 | 1H-A | ✅ WIN | LOU 37, SFU 27 HT | 64 combined — crushed under |
| TCU/OSU 1H U65.5 | 1H-B | ✅ WIN | TCU 39, OSU 26 HT | 65 combined ✓ |
| Duke 1H U64 | 1H-A | ❌ LOSS | SIE 43, DUK 32 HT | 75 combined at half |
| McNeese 1H U69 | 1H-A | ❌ LOSS | VAN 38, MCN 35 HT | 73 combined at half |

**Current record: 6W-2L · Spreads: 4-0 · 1H Unders: 2-2**

---

## 📁 Repository Files

| File | Type | Description |
|------|------|-------------|
| [`index.html`](index.html) | Hub | **Main dashboard** — all tools, KPIs, live intelligence |
| [`results.html`](results.html) | Interactive Tool | **Betting Results Tracker** — all picks tracked ATS live, filterable by Win/Loss/Pending/Type/Day |
| [`lines_dashboard.html`](lines_dashboard.html) | Interactive Tool | **Live Lines & Picks** — all 32 games, current lines, public %, pick tiers, filterable |
| [`team_comparison.html`](team_comparison.html) | Interactive Tool | **Head-to-head comparison** — any two teams, full player + efficiency breakdown |
| [`2026_FINAL_POOL_BRACKET.pdf`](2026_FINAL_POOL_BRACKET.pdf) | PDF | **The bracket** — all 17 rules, 11 R1 upsets, Michigan champion |
| [`2026_Upset_Analysis_Deep_Dive.pdf`](2026_Upset_Analysis_Deep_Dive.pdf) | PDF | Full PASE/BARTHAG framework + win probabilities + coach records |
| [`march_madness_1h_unders.html`](march_madness_1h_unders.html) | Interactive Tool | First-half under tracker — all 30 R64 games, 6 books |
| [`BRACKET_RULES.md`](BRACKET_RULES.md) | Reference | All 17 bracket rules with full data and 2026 applications |
| [`UPSET_INTELLIGENCE.md`](UPSET_INTELLIGENCE.md) | Reference | Historical upset patterns + full 2026 live addendum |

---

## 🔄 What Changed in v5

The **Betting Picks PDF** has been removed. It was a static document that duplicated the lines dashboard while showing stale lines — a source of confusion rather than value. Everything it contained is now covered better by live tools:

| What the PDF had | Where it lives now |
|---|---|
| Tier A/B spread picks with rationale | Lines Dashboard (filterable, live lines) + Results Tracker (with outcomes) |
| Kalshi crosscheck table | Index page (inline) |
| 23-5 ATS situational trend | Index page (inline) |
| Games to skip | Lines Dashboard (SKIP tier filter) |
| Public betting % | Lines Dashboard (every game) |

The repo is now six interactive/live files plus two reference PDFs and two markdown docs — every file pulls its weight.

---

## 🛠️ Tool Descriptions

### Betting Results Tracker — `results.html`
The primary game-day reference once games are underway. Every pick from every source (lines dashboard, 1H unders tool) tracked in one place with live scores and ATS outcomes. Filterable by result (Win/Loss/Pending), bet type (Spread/Total/1H Under), and day (Thu/Fri).

### Live Lines & Picks Dashboard — `lines_dashboard.html`
All 32 first-round games in one filterable table. Opening vs current spread, public money% and bets%, pick recommendation, and tier badge (A/B/Total/Lean/Watch/Skip) for every game. The pre-game reference; use alongside the results tracker during games.

### Team Comparison Tool — `team_comparison.html`
Select any two tournament teams for a full head-to-head breakdown. Covers efficiency stats, full rosters with PRPG/Usage%/BPM, star dependency scoring, injury flags, experience breakdown, and last-10 momentum. Powered by Barttorvik 2026 player data (2,275 players, all 68 teams).

### First Half Unders Tracker — `march_madness_1h_unders.html`
Real 1H lines from 6 books for all 30 R64 games. A/B/C ratings based on pace, injury impact, and defensive identity. Filterable by day and rating. Top A-rated plays for Friday: Iowa/Clemson U59.5, N. Iowa/SJU U61, Akron/TTU U72.

---

## 📋 The 17 Rules (Quick Reference)

### MUST DO — Rules 1–5
| # | Rule | Stat |
|---|------|------|
| 1 | Pick ≥1 eleven-seed to advance | At-large 11s: **64.1%** win rate |
| 2 | Pick ≥1 twelve-seed to advance | 12s: **43.8%** first-round win rate |
| 3 | Screen every 5-8 seed for BARTHAG <0.85 | **61.4%** upset rate in danger zone |
| 4 | Fade any favorite traveling >1,000 miles | **38.5%** favorite loss rate |
| 5 | East Coast team in West = upset pick | **54.5%** fav loss rate crossing 2TZ |

### STRONGLY RECOMMENDED — Rules 6–10
| # | Rule | Stat |
|---|------|------|
| 6 | Never blindly pick a 6-seed to the Sweet 16 | **-20.3 PASE** worst of any seed |
| 7 | Check if underdog was AP Top 25 this season | **+18.4%** win rate boost |
| 8 | Trust Big Ten and Pac-12 underdogs | **+4.5 / +7.3** PASE |
| 9 | Fade Big 12 and Mountain West seeds | **-15.9 / -15.6** PASE |
| 10 | Cinderella must clear KP rank 60 + BARTHAG 0.79 | Floor for any deep run |

### ADVISORY — Rules 11–15
| # | Rule | Stat |
|---|------|------|
| 11 | For 12-seeds: defense > offense | KADJ D is key differentiator |
| 12 | For 11-seeds: resume > efficiency | NET/ELO > KADJ EM |
| 13 | Expect 13-14 total upsets | Long-run avg: **13.5/year** |
| 14 | Watch host state | CA **38.9%**, OH **37.5%** underdog win rate |
| 15 | Respect MVC and CAA mid-majors | **4x** Final Fours as 11-seeds |

### NEW 2026 — Rules 16–17
| # | Rule | Detail |
|---|------|--------|
| 16 | **HARD: No west of Mississippi champion** | UCLA 1995 was last — 31-year drought. Arizona hard-faded. |
| 17 | **Trapezoid of Excellence** | Pace 63-72 + Net Rating 28+ = championship zone. Alabama (73.1 pace) OUTSIDE. Credit: Ryan Hammer (@ryanhammer09) |

---

## 🏆 The Bracket

**Champion: Michigan Wolverines**  
BARTHAG 0.980 · Net Rating +36.6 · Pace 71.2 · Exp 1.947 · Rule 16 ✅ · Rule 17 ✅

**Michigan's path:** Howard → Saint Louis → Akron → Iowa State → Arizona (⛔ Rule 16) → **Duke (CHAMP)**

### Final Four
| Team | Region | Note |
|------|--------|------|
| Duke | East | Cameron Boozer dominant |
| Arizona ⛔ | West | Exits to Michigan — Rule 16 |
| **Michigan 🏆** | Midwest | Champion |
| Houston | South | Near-home Elite Eight win |

### R1 Upsets Picked (11 total)
| Upset | Over | Key Rule(s) |
|-------|------|-------------|
| South Florida | Louisville | Rules 1+6 + Brown OUT |
| Utah State | Villanova | LOCK: BARTHAG 0.895 > 0.881 |
| Texas | BYU | Rules 1+6+9 + Saunders OUT |
| Missouri | Miami FL | Rules 4+5: 2TZ travel |
| Saint Louis | Georgia | Rule 7: AP-ranked |
| Akron | Texas Tech | Rules 2+9 + Toppin OUT |
| Santa Clara | Kentucky | LOCK: BARTHAG 0.895 > 0.890 |
| Iowa | Clemson | LOCK: BARTHAG 0.907 > 0.892 |
| VCU | North Carolina | Rules 1+6 + Wilson OUT |
| McNeese | Vanderbilt | Rule 2 + 3-0 L10 |
| Texas A&M | Saint Mary's | Rules 4+5: 3TZ travel |

---

## 🏥 Critical 2026 Injuries

| Player | Team | Status | Pick Impact |
|--------|------|--------|-------------|
| Mikel Brown Jr. | Louisville #6 | **OUT R1+R2** | SFU +4.5 ✅ (covered) |
| Caleb Wilson | UNC #6 | **OUT season** | VCU +2.5 (pending) |
| Braden Huff | Gonzaga #3 | **OUT R1** | Fade Gonzaga spread |
| Caleb Foster | Duke #1 | **OUT** | Monitor total |
| Richie Saunders | BYU #6 | **OUT season** | Texas +2.5 (pending) |
| JT Toppin | Texas Tech #5 | **OUT season** | Akron +7.5 (pending) |

---

## 🌊 Kalshi Prediction Market Divergences

| Team | Kalshi % | Book Implied | Gap | Signal |
|------|----------|-------------|-----|--------|
| Duke (#1 East) | 19% | 25.0% | -6.0% | Market fading Duke |
| Michigan (#1 Mid) 🏆 | 18% | 22.2% | -4.2% | Book overpriced |
| Arizona (#1 West) ⛔ | 17% | 20.0% | -3.0% | Kalshi + Rule 16 both fade |
| Florida (#1 South) | 9% | 11.8% | -2.8% | Market fading Florida |
| **Purdue (#2 West) ★** | **5%** | **2.8%** | **+2.2%** | **VALUE — only positive gap** |

---

## 🗂️ Core Data Sources

| Dataset | Details | Key Metrics |
|---------|---------|-------------|
| `Barttorvik_dataset_for_2026.xlsx` | 365 teams, 42 cols | BARTHAG, AdjOE, AdjDE, NetRating, Tempo, Exp |
| `Barttorvik_2026_Last10.csv` | 732 rows | Full re-ranking on last 10 games |
| `Barttorvik_2026_Last30.csv` | 732 rows | Full re-ranking on last 30 games |
| `Barttorvik_FourFactors_2026.xlsx` | All teams | EFG%, TOV%, OREB%, FTR + defensive equivalents |
| `Barttorvik_Player_Data.xlsx` | 2,275 players · 68 teams | PRPG, BPM, Usage%, eFG, ORtg |
| `WarrenNolan.xlsx` | All teams | NET rankings, Q1/Q2/Q3/Q4 records, SOS |
| `collegebasketballinjuryreport.csv` | 414 players | Player, Team, Pos, Status, Est. Return |
| Historical tournament data | 17 years | 2008–2025, 1,147 team-seasons, 38 sources |

---

⚠️ *All analysis is for entertainment and educational purposes only. Past performance does not guarantee future results. Please gamble responsibly.*

**Data:** Barttorvik · KenPom · Warren Nolan NET · ESPN BPI · Kalshi · SportsGeek · VegasInsider · DraftKings · AP Poll Archive · 38 sources · 2008-2025 (2020 excluded) · Lines and public % as of March 19, 2026
