# 🏀 2026 March Madness Analytics Hub

**Data-Driven · 2008–2025 · 17 Tournaments · 1,147 Team-Seasons · Updated March 18, 2026 · v2**

> **🏆 Model Champion Pick: Michigan over Duke 73-68**  
> Rules 16 + 17 confirmed · Veteran depth (Exp 1.95) · Indianapolis = Big Ten country

---

## 📁 Repository Files

| File | Description |
|------|-------------|
| [`index.html`](index.html) | **Main dashboard hub** — all tools, KPIs, live intelligence |
| [`2026_FINAL_POOL_BRACKET.pdf`](2026_FINAL_POOL_BRACKET.pdf) | **The bracket** — all 17 rules, 11 R1 upsets, Michigan champion |
| [`2026_March_Madness_Betting_Picks.pdf`](2026_March_Madness_Betting_Picks.pdf) | Spread/total/ML picks — Kalshi crosscheck + situational ATS |
| [`2026_Upset_Analysis_Deep_Dive.pdf`](2026_Upset_Analysis_Deep_Dive.pdf) | Full PASE/BARTHAG framework + win probabilities + coach records |
| [`march_madness_1h_unders.html`](march_madness_1h_unders.html) | Interactive 1H under tracker — all 30 R64 games, 6 books |
| [`BRACKET_RULES.md`](BRACKET_RULES.md) | All 17 bracket rules with data |
| [`UPSET_INTELLIGENCE.md`](UPSET_INTELLIGENCE.md) | Historical upset patterns + full 2026 intelligence addendum |

---

## 🤖 Model Architecture — v2

### Core Data Sources

| Dataset | Details | Key Metrics |
|---------|---------|-------------|
| `Barttorvik_dataset_for_2026.xlsx` | 365 teams, 42 cols | BARTHAG, AdjOE, AdjDE, NetRating, Tempo, Exp |
| `Barttorvik_2026_Last10.csv` | 732 rows | Full re-ranking on last 10 games |
| `Barttorvik_2026_Last30.csv` | 732 rows | Full re-ranking on last 30 games |
| `Barttorvik_FourFactors_2026.xlsx` | All teams | EFG%, TOV%, OREB%, FTR + defensive equivalents |
| `WarrenNolan.xlsx` | All teams | NET rankings, Q1/Q2/Q3/Q4 records, SOS |
| `collegebasketballinjuryreport.csv` | 414 players | Player, Team, Pos, Status, Est. Return |
| `First_half_lines.xlsx` | 30 games | 1H totals across 6 books |
| Historical tournament data | 17 years | 2008–2025, 1,147 team-seasons, 38 sources |

### New in v2

**Kalshi Prediction Market Integration** — CFTC-regulated, no vig. When Kalshi% diverges from book implied%, that gap is actionable signal.

| Team | Kalshi% | Book Implied | Gap | Signal |
|------|---------|-------------|-----|--------|
| Duke | 19% | 25.0% | -6.0% | Market fading Duke |
| Michigan | 18% | 22.2% | -4.2% | Market fading Michigan |
| Arizona ⛔ | 17% | 20.0% | -3.0% | Market fading Arizona |
| Florida | 9% | 11.8% | -2.8% | Market fading Florida |
| **Purdue ★** | **5%** | **2.8%** | **+2.2%** | **VALUE — only positive gap** |

**Round-by-Round Win Probabilities** — BARTHAG + BPI + Kalshi + draw analysis.

| Team | R64 | R32 | S16 | E8 | F4 | Champ |
|------|-----|-----|-----|----|----|-------|
| Michigan 🏆 | 99% | 92% | 80% | 66% | 50% | **22%** |
| Duke | 99% | 88% | 72% | 58% | 38% | **21%** |
| Arizona ⛔ | 99% | 91% | 77% | 63% | 40% | **19%** |
| Houston | 99% | 82% | 62% | 44% | 28% | **10%** |
| Florida | 98% | 80% | 58% | 38% | 22% | **9%** |
| Iowa State | 99% | 78% | 55% | 36% | 22% | **8%** |
| Purdue ★ | 98% | 72% | 48% | 33% | 18% | **6%** |
| UConn | 97% | 62% | 40% | 27% | 14% | **5%** |

**Coach Tournament Records** — full W-L for all 68 coaches in field.

| Coach | School | W-L | Win% | Titles | Signal |
|-------|--------|-----|------|--------|--------|
| Dan Hurley | UConn | 15-5 | .750 | 2 | ✅ Elite |
| Dusty May | Michigan | 11-4 | .733 | 0 | ✅ Strong sample |
| Tom Izzo | Michigan St. | 59-26 | .694 | 1 | ✅ Mr. March |
| Todd Golden | Florida | 7-2 | .778 | 1 | ✅ Defending champ |
| John Calipari | Arkansas | 59-22 | .728 | 1 | ⚠ 1 win since 2019 |
| Tommy Lloyd | Arizona | 10-6 | .625 | 0 | ⚠ Never past S16 |

**Situational ATS Splits** — ATS record by situation per team, applied to betting pick ratings.

---

## 📋 The 17 Rules

### MUST DO — Rules 1-5

| # | Rule | Stat |
|---|------|------|
| 1 | Pick ≥1 eleven-seed to advance | At-large 11s: **64.1%** win rate |
| 2 | Pick ≥1 twelve-seed to advance | 12s: **43.8%** first-round win rate |
| 3 | Screen every 5-8 seed for BARTHAG <0.85 | **61.4%** upset rate in danger zone |
| 4 | Fade any favorite traveling >1,000 miles | **38.5%** favorite loss rate |
| 5 | East Coast team in West = upset pick | **54.5%** fav loss rate crossing 2TZ |

### STRONGLY RECOMMENDED — Rules 6-10

| # | Rule | Stat |
|---|------|------|
| 6 | Never blindly pick a 6-seed to the Sweet 16 | **-20.3 PASE** worst of any seed |
| 7 | Check if underdog was AP Top 25 this season | **+18.4%** win rate boost |
| 8 | Trust Big Ten and Pac-12 underdogs | **+4.5 / +7.3** PASE |
| 9 | Fade Big 12 and Mountain West seeds | **-15.9 / -15.6** PASE |
| 10 | Cinderella must clear KP rank 60 + BARTHAG 0.79 | Floor for any deep run |

### ADVISORY — Rules 11-15

| # | Rule | Stat |
|---|------|------|
| 11 | For 12-seeds: defense > offense | KADJ D is key differentiator |
| 12 | For 11-seeds: resume > efficiency | NET/ELO > KADJ EM |
| 13 | Expect 13-14 total upsets | Long-run avg: **13.5/year** |
| 14 | Watch host state | CA **38.9%**, OH **37.5%** underdog win rate |
| 15 | Respect MVC and CAA mid-majors | **4x** Final Fours as 11-seeds |

### NEW 2026 — Rules 16-17

| # | Rule | Detail |
|---|------|--------|
| 16 | **HARD: No west of Mississippi champion** | UCLA 1995 was last — 31-year drought. Arizona hard-faded from championship. |
| 17 | **Trapezoid of Excellence** | Pace 63-72 + Net Rating 28+ = championship zone. Alabama (73.1 pace) OUTSIDE. Credit: Ryan Hammer (@ryanhammer09) |

---

## 🏥 Critical 2026 Injuries

| Player | Team | Status | Bracket Action |
|--------|------|--------|----------------|
| Mikel Brown Jr. | Louisville #6 | **OUT R1+R2** | Take South Florida |
| Caleb Wilson | UNC #6 | **OUT season** | Take VCU |
| Braden Huff | Gonzaga #3 | **OUT R1** | Fade Gonzaga spread |
| Caleb Foster | Duke #1 | **OUT** | Monitor total |
| Richie Saunders | BYU #6 | **OUT season** | Take Texas |
| JT Toppin | Texas Tech #5 | **OUT season** | Take Akron |

---

## 📈 Sharp Line Movement (March 18, 2026)

| Game | Open | Current | Move | Signal |
|------|------|---------|------|--------|
| Houston vs Idaho | -19.5 | -23.5 | **+4.0** | 🔥 Steam |
| Louisville vs SFU | -6.5 | -5.5 | **-1.0** | 🔄 RLM — injury |
| Utah St vs Villanova | VIL -1.5 | USU -2.5 | **FLIP** | 🔄 Sharp |
| Iowa State vs T.State | -23.5 | -25.5 | **+2.0** | 🔥 Steam |
| NCarolina vs VCU | NC -2.5 | VCU fav | **RLM** | 🔄 Wilson news |
| Michigan St vs NDST | O/U 154.5 | O/U **143.5** | **-11.0** | 🔥 Biggest move on board |

---

## 🏆 The Bracket

**Champion: Michigan Wolverines**  
BARTHAG 0.980 · Net Rating +36.6 · Pace 71.2 · Exp 1.947 · Rule 16 ✅ · Rule 17 ✅

**Michigan's path:** Howard → Saint Louis → Akron → Iowa State → Arizona (⛔ R16) → **Duke (CHAMP)**

### Final Four
| Team | Region | Note |
|------|--------|------|
| Duke | East | Cameron Boozer dominant |
| Arizona ⛔ | West | Exits to Michigan — Rule 16 |
| **Michigan 🏆** | Midwest | Champion |
| Houston | South | Near-home Elite Eight win |

### R1 Upsets (11 total)

| Upset Pick | Over | Key Rule(s) |
|------------|------|------------|
| South Florida | Louisville | Rule 1+6 + Brown OUT |
| Utah State 🔒 | Villanova | LOCK: BARTHAG 0.895 > 0.881 |
| Texas | BYU | Rule 1+6+9 + Saunders OUT |
| Missouri | Miami FL | Rule 4+5: 2TZ travel |
| Saint Louis | Georgia | Rule 7: AP-ranked |
| Akron | Texas Tech | Rule 2+9 + Toppin OUT |
| Santa Clara 🔒 | Kentucky | LOCK: BARTHAG 0.895 > 0.890 |
| Iowa 🔒 | Clemson | LOCK: BARTHAG 0.907 > 0.892 |
| VCU | North Carolina | Rule 1+6 + Wilson OUT |
| McNeese | Vanderbilt | Rule 2 + 3-0 L10 |
| Texas A&M | Saint Marys | Rule 4+5: 3TZ travel |

### Later Round Upsets
- R32: Akron over Alabama (Rule 17 — outside trapezoid, pace 73.1)
- S16: Purdue over Gonzaga (double-injured + Rule 16 tiebreaker)
- E8: Houston over Florida (at home in South region)

---

## 🎰 ATS Trend — 23-5 (Top-3 Seed + Total <148 + 4+ Days Rest)

| Team | Spread | Total | Rest | Rating |
|------|--------|-------|------|--------|
| **Houston** | -23.5 | 138.5 | 4d | **A+** |
| **Virginia** | -18.5 | 145.5 | 5d | **A** |
| **Michigan St.** | -16.5 | 143.5 | 4d | **A** (11pt total drop) |
| Duke | -28.5 | 135.5 | 4d | **B** |
| UConn | -20.5 | 136.5 | 5d | **B** |

---

## 📊 Conference PASE

| Conference | PASE | Direction |
|------------|------|-----------|
| ACC | +12.4 | ✅ Trust |
| Pac-12 | +7.3 | ✅ Trust |
| Big Ten | +4.5 | ✅ Trust |
| SEC | +4.4 | ✅ Trust |
| MVC | +4.1 | ✅ Mid-major value |
| A-10 | -5.8 | ⚠ Fade |
| Big East | -7.3 | ⚠ Brand inflates seeds |
| MWC | -15.6 | ❌ Hard fade |
| Big 12 | -15.9 | ❌ Hard fade (worst PASE) |

---

## ⚠ Disclaimer
All analysis is for entertainment and educational purposes only. Past performance does not guarantee future results. Please gamble responsibly.

**Data:** Barttorvik · KenPom · Warren Nolan NET · ESPN BPI · Kalshi · AP Poll Archive · 38 sources · 2008–2025 (2020 excluded)
