import { supabase } from "../lib/supabase"

export default async function Home() {
  const { data: picks } = await supabase
    .from("picks")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div style={{ padding: 20, background: "#0B0B0F", minHeight: "100vh", color: "white" }}>
      
      <h1 style={{ fontSize: 40, fontWeight: "bold" }}>
        Reiss NFL Picks
      </h1>

      <p style={{ color: "#aaa", marginTop: 10 }}>
        Live NFL Picks • Survivor • DFS
      </p>

      <div style={{ marginTop: 30 }}>
        {picks?.map((p) => (
          <div
            key={p.id}
            style={{
              padding: 16,
              background: "#161622",
              borderRadius: 12,
              marginBottom: 10
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: 18 }}>
              {p.game}
            </div>

            <div style={{ fontSize: 22, marginTop: 5 }}>
              {p.pick}
            </div>

            <div style={{ color: "#aaa", marginTop: 8, fontSize: 14 }}>
              Week {p.week} • {p.category} • {p.odds} • {p.units}u • {p.result}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
