import { useState } from "react";

const rules = [
  {
    num: "01",
    priority: "MANDATORY",
    category: "Seed Matchups",
    icon: "🎯",
    title: "Always pick at least one 11-seed to advance",
    short: "11s win 50% of first-round games. At-large 11-seeds win 64%. The 11 vs 6 matchup is the single most common upset in 17 years of data — 33 occurrences. Never skip it.",
    stat: "64.1%",
    statLabel: "At-large 11-seed win rate",
    color: "#e8502a",
  },
  {
    num: "02",
    priority: "MANDATORY",
    category: "Seed Matchups",
    icon: "🎯",
    title: "Always pick at least one 12-seed to advance",
    short: "12 over 5 has happened 28 times (43.8% win rate). It's nearly a coinflip. Never fill out a bracket without at least one 12-seed win.",
    stat: "43.8%",
    statLabel: "12-seed first-round win rate",
    color: "#e8502a",
  },
  {
    num: "03",
    priority: "MANDATORY",
    category: "Metrics",
    icon: "📊",
    title: "Screen every 5-8 seed for BARTHAG < 0.85",
    short: "Seeds 5-8 with BARTHAG below 0.85 lose 61.4% of first-round games. Check this before picking any 'safe' favorite. It's your fastest upset filter.",
    stat: "61.4%",
    statLabel: "Upset rate for BARTHAG < 0.85",
    color: "#dc6f1a",
  },
  {
    num: "04",
    priority: "MANDATORY",
    category: "Travel",
    icon: "✈️",
    title: "Fade any favorite traveling over 1,000 miles",
    short: "Favorites making a 1,000+ mile trip lose 38.5% of first-round games — 14 points above baseline. Distance creates fatigue, schedule disruption, and jet lag. Distance beats talent more than people admit.",
    stat: "38.5%",
    statLabel: "Fav loss rate beyond 1,000mi",
    color: "#dc6f1a",
  },
  {
    num: "05",
    priority: "MANDATORY",
    category: "Travel",
    icon: "⏰",
    title: "East Coast team in the West = near-automatic upset",
    short: "Favorites crossing 2 time zones lose 54.5% of first-round games — more than double baseline. ACC and Big East teams playing in California, Colorado, or Washington are the highest-risk favorites in the bracket.",
    stat: "54.5%",
    statLabel: "Fav loss rate crossing 2 time zones",
    color: "#dc6f1a",
  },
  {
    num: "06",
    priority: "STRONG",
    category: "Conference",
    icon: "🏛️",
    title: "Never blindly pick a 6-seed to the Sweet 16",
    short: "The 6-seed has the worst PASE of any seed at -20.3. Only a 50% first-round win rate despite being treated as 'safe.' The data is unambiguous: 6-seeds are the most overrated bracket picks year after year.",
    stat: "-20.3",
    statLabel: "6-seed PASE (worst of all seeds)",
    color: "#f0a500",
  },
  {
    num: "07",
    priority: "STRONG",
    category: "Conference",
    icon: "📰",
    title: "Check if your underdog was AP Top 25 this season",
    short: "Seeds 9-13 that spent time in the AP Poll win 46.7% of first-round games vs 28.3% for those never ranked. A team that was #18 in November and fell to a 10-seed by March is dangerous. This is the biggest non-efficiency predictor.",
    stat: "+18.4%",
    statLabel: "Win rate boost for previously-ranked underdogs",
    color: "#f0a500",
  },
  {
    num: "08",
    priority: "STRONG",
    category: "Conference",
    icon: "🏆",
    title: "Trust Big Ten and Pac-12 underdogs",
    short: "Both conferences are chronically underseeded — Big Ten +4.5 PASE, Pac-12 +7.3. A Big Ten or Pac-12 team at seed 10-12 likely belongs 2 seeds higher. Take the upset.",
    stat: "+7.3",
    statLabel: "Pac-12 PASE (2nd best of all conferences)",
    color: "#f0a500",
  },
  {
    num: "09",
    priority: "STRONG",
    category: "Conference",
    icon: "⚠️",
    title: "Fade Big 12 and MWC seeds",
    short: "Big 12 has -15.9 PASE — worst in the dataset. Mountain West is -15.6. Both conferences get inflated seeds due to brand reputation. When you see a Big 12 team seeded 5-6, look hard for the upset opponent.",
    stat: "-15.9",
    statLabel: "Big 12 PASE (worst of any conference)",
    color: "#2a7a4b",
  },
  {
    num: "10",
    priority: "STRONG",
    category: "Deep Runs",
    icon: "🏀",
    title: "Cinderella must clear KP rank 60 and BARTHAG 0.79",
    short: "Every team that reached the Sweet 16 or beyond as an 11-13 seed had a KenPom rank ≤ 60 and BARTHAG ≥ 0.79. Below those thresholds, a first or second round exit is the overwhelming outcome. VCU (KP #82) is the only exception in 17 years.",
    stat: "KP < 60",
    statLabel: "Floor for any deep underdog run",
    color: "#2a7a4b",
  },
  {
    num: "11",
    priority: "ADVISORY",
    category: "Metrics",
    icon: "💡",
    title: "For 12-seeds: defense > offense",
    short: "12-seed winners have noticeably better KADJ D than losers. The upset isn't about the underdog exploding offensively — it's about locking down the 5-seed and keeping them below their usual efficiency. Look for 12-seeds with strong defensive ratings.",
    stat: "KADJ D",
    statLabel: "Key differentiator for 12-seed winners",
    color: "#1a3a5c",
  },
  {
    num: "12",
    priority: "ADVISORY",
    category: "Metrics",
    icon: "💡",
    title: "For 11-seeds: resume matters more than efficiency",
    short: "11-seed winners actually have slightly lower KADJ EM than losers, but dramatically better ELO and NET ranks. Their resume — quality wins against real competition — is what separates them. An at-large 11-seed with a strong NET rank is a real threat.",
    stat: "NET/ELO",
    statLabel: "Key differentiator for 11-seed winners",
    color: "#1a3a5c",
  },
  {
    num: "13",
    priority: "ADVISORY",
    category: "Expectations",
    icon: "📅",
    title: "Expect 13-14 total upsets across the bracket",
    short: "The long-run average is 13.5 upsets per tournament across all rounds. 2021 (18) and 2014 (19) were the most chaotic. 2025 (8 through two rounds) was the most chalk. Plan your upset picks accordingly — spread them out.",
    stat: "13.5",
    statLabel: "Average upsets per tournament",
    color: "#1a3a5c",
  },
  {
    num: "14",
    priority: "ADVISORY",
    category: "Location",
    icon: "📍",
    title: "Watch host state — California and Ohio produce upsets",
    short: "California (38.9% underdog win rate, n=36) and Ohio (37.5%, n=32) are the most statistically meaningful upset states. Wisconsin (15%) and Kentucky (18.8%) are chalk-friendly. Location context matters when the matchup is borderline.",
    stat: "38.9%",
    statLabel: "Underdog win rate in California",
    color: "#1a3a5c",
  },
  {
    num: "15",
    priority: "ADVISORY",
    category: "Deep Runs",
    icon: "🌟",
    title: "Look for MVC and CAA mid-majors for deep runs",
    short: "The Missouri Valley Conference (Loyola, Wichita St, Drake) and CAA (VCU, George Mason) punch far above their weight. Both have produced Final Four teams from the 11-seed line. If one makes the field, treat their matchup with extra respect.",
    stat: "4x",
    statLabel: "MVC/CAA Final Four appearances as 11-seeds",
    color: "#1a3a5c",
  },
];

const priorities = {
  MANDATORY: { color: "#e8502a", bg: "#fff1ee", label: "MUST DO" },
  STRONG: { color: "#dc6f1a", bg: "#fff8f0", label: "STRONGLY RECOMMENDED" },
  ADVISORY: { color: "#1a3a5c", bg: "#f0f4f8", label: "ADVISORY" },
};

export default function BracketRules() {
  const [filter, setFilter] = useState("ALL");
  const [expanded, setExpanded] = useState(null);

  const categories = ["ALL", "Seed Matchups", "Metrics", "Travel", "Conference", "Deep Runs", "Location", "Expectations"];
  const filtered = filter === "ALL" ? rules : rules.filter(r => r.category === filter);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0f1923",
      minHeight: "100vh",
      color: "#f0f4f8",
    }}>
      {/* Noise texture overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        opacity: 0.4,
      }} />

      {/* Header */}
      <div style={{
        position: "relative", zIndex: 1,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "40px 32px 32px",
        background: "linear-gradient(180deg, #0a1520 0%, #0f1923 100%)",
      }}>
        <div style={{
          maxWidth: 820, margin: "0 auto",
        }}>
          <div style={{
            display: "flex", alignItems: "flex-start", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}>
            <div>
              <div style={{
                fontSize: 10, fontFamily: "monospace", letterSpacing: 4,
                color: "#e8502a", marginBottom: 10, textTransform: "uppercase",
              }}>
                ▶ Data-Driven · 2008–2025 · 1,147 Team-Seasons
              </div>
              <div style={{
                fontSize: 44, fontWeight: 900, lineHeight: 1,
                fontFamily: "'Georgia', serif",
                background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                letterSpacing: -1,
              }}>
                THE 15 RULES
              </div>
              <div style={{
                fontSize: 16, color: "#94a3b8", marginTop: 6, fontStyle: "italic",
              }}>
                for filling out a March Madness bracket
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {Object.entries(priorities).map(([key, val]) => (
                <div key={key} style={{ textAlign: "center" }}>
                  <div style={{
                    background: val.color, color: "white",
                    fontSize: 8, fontFamily: "monospace", fontWeight: 700,
                    padding: "3px 8px", borderRadius: 2, letterSpacing: 1,
                    marginBottom: 2,
                  }}>{val.label}</div>
                  <div style={{ fontSize: 10, color: "#64748b", fontFamily: "monospace" }}>
                    {rules.filter(r => r.priority === key).length} rules
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category filters */}
          <div style={{
            display: "flex", gap: 6, marginTop: 28, flexWrap: "wrap",
          }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: "5px 14px",
                background: filter === cat ? "#e8502a" : "transparent",
                color: filter === cat ? "white" : "#64748b",
                border: `1px solid ${filter === cat ? "#e8502a" : "#1e2d3d"}`,
                borderRadius: 2,
                fontSize: 11, fontFamily: "monospace", fontWeight: 700,
                cursor: "pointer", letterSpacing: 0.5,
                transition: "all 0.15s",
              }}>{cat.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Rules list */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "24px 32px 60px", position: "relative", zIndex: 1 }}>
        {filtered.map((rule, i) => {
          const p = priorities[rule.priority];
          const isOpen = expanded === rule.num;
          return (
            <div
              key={rule.num}
              onClick={() => setExpanded(isOpen ? null : rule.num)}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                transition: "background 0.15s",
                marginBottom: 2,
                borderRadius: 4,
                background: isOpen ? "rgba(255,255,255,0.04)" : "transparent",
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr auto",
                gap: 0,
                alignItems: "center",
                padding: "18px 16px",
              }}>
                {/* Number */}
                <div style={{
                  fontSize: 28, fontWeight: 900, fontFamily: "monospace",
                  color: isOpen ? rule.color : "rgba(255,255,255,0.12)",
                  lineHeight: 1, letterSpacing: -1,
                  transition: "color 0.2s",
                }}>
                  {rule.num}
                </div>

                {/* Main content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{
                      background: p.color, color: "white",
                      fontSize: 7, fontFamily: "monospace", fontWeight: 700,
                      padding: "2px 6px", borderRadius: 2, letterSpacing: 1,
                    }}>{rule.priority}</span>
                    <span style={{
                      color: "#475569", fontSize: 10, fontFamily: "monospace", letterSpacing: 1,
                    }}>{rule.category.toUpperCase()}</span>
                  </div>
                  <div style={{
                    fontSize: 16, fontWeight: 700, color: "#f1f5f9",
                    fontFamily: "'Georgia', serif",
                    lineHeight: 1.3,
                  }}>
                    {rule.icon} {rule.title}
                  </div>
                  {isOpen && (
                    <div style={{
                      marginTop: 12, fontSize: 13, color: "#94a3b8",
                      lineHeight: 1.65, fontFamily: "system-ui, sans-serif",
                      maxWidth: 580,
                    }}>
                      {rule.short}
                    </div>
                  )}
                </div>

                {/* Stat */}
                <div style={{ textAlign: "right", minWidth: 80 }}>
                  <div style={{
                    fontSize: 20, fontWeight: 900, fontFamily: "monospace",
                    color: rule.color, lineHeight: 1,
                  }}>{rule.stat}</div>
                  <div style={{
                    fontSize: 8, color: "#475569", fontFamily: "monospace",
                    letterSpacing: 0.5, marginTop: 2, maxWidth: 90, textAlign: "right",
                  }}>{rule.statLabel}</div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Quick reference summary */}
        <div style={{
          marginTop: 40, padding: 28,
          background: "linear-gradient(135deg, #0a1a2e 0%, #0f2040 100%)",
          border: "1px solid rgba(232,80,42,0.3)",
          borderRadius: 6,
        }}>
          <div style={{
            fontSize: 10, fontFamily: "monospace", color: "#e8502a",
            letterSpacing: 3, marginBottom: 16,
          }}>▶ BRACKET DAY QUICK-REFERENCE</div>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}>
            <div>
              <div style={{ fontSize: 11, color: "#e8502a", fontWeight: 700, fontFamily: "monospace", marginBottom: 10, letterSpacing: 1 }}>ALWAYS DO</div>
              {["Pick ≥1 eleven-seed win", "Pick ≥1 twelve-seed win", "Check BARTHAG <0.85", "Fade favs >1,000mi trip"].map(t => (
                <div key={t} style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 6, display: "flex", gap: 8, fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#e8502a" }}>→</span> {t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#dc6f1a", fontWeight: 700, fontFamily: "monospace", marginBottom: 10, letterSpacing: 1 }}>STRONGLY CONSIDER</div>
              {["Fade 6-seeds as 'safe' picks", "AP-ranked underdogs win more", "Trust Big Ten / Pac-12 dogs", "Fade Big 12 / MWC seeds"].map(t => (
                <div key={t} style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 6, display: "flex", gap: 8, fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#dc6f1a" }}>→</span> {t}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, fontFamily: "monospace", marginBottom: 10, letterSpacing: 1 }}>KEEP IN MIND</div>
              {["Expect ~13-14 total upsets", "Cinderella: KP <60, BARTHAG >0.79", "2 TZ crossing = danger zone", "CA & OH host upsets more"].map(t => (
                <div key={t} style={{ fontSize: 12, color: "#94a3b8", marginBottom: 6, display: "flex", gap: 8, fontFamily: "system-ui, sans-serif" }}>
                  <span style={{ color: "#475569" }}>→</span> {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{
            marginTop: 20, paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            fontSize: 10, color: "#334155", fontFamily: "monospace",
          }}>
            Re-upload archive.zip after Selection Sunday for team-specific analysis against the actual bracket.
          </div>
        </div>
      </div>
    </div>
  );
}
