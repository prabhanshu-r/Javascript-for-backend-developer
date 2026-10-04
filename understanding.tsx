import { useEffect, useState } from "react";

// The TypeScript "contract": the shape of data crossing the network.
// If the backend changes a field, the compiler flags every place that breaks.
type Status = "open" | "in_progress" | "resolved";
type Ticket = { id: number; title: string; body: string; category: string; priority: string; status: Status };

export default function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/tickets");           // 1. frontend calls API
    setTickets(await res.json());                       // 4. response becomes UI state
  }
  useEffect(() => { load(); }, []);

  async function create() {
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    if (!res.ok) return setError((await res.json()).error);
    setError(""); setTitle(""); setBody(""); load();
  }

  async function setStatus(id: number, status: Status) {
    await fetch(`/api/tickets/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  return (
    <main style={{ maxWidth: 640, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>QuickDesk</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Describe the problem" value={body} onChange={e => setBody(e.target.value)} />
      <button onClick={create}>Submit</button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {tickets.map(t => (
        <div key={t.id} style={{ borderTop: "1px solid #ccc", padding: "8px 0" }}>
          <b>{t.title}</b> <small>[{t.category} · {t.priority} · {t.status}]</small>
          <div>{t.body}</div>
          <button onClick={() => setStatus(t.id, "in_progress")}>Start</button>{" "}
          <button onClick={() => setStatus(t.id, "resolved")}>Resolve</button>
        </div>
      ))}
    </main>
  );
}