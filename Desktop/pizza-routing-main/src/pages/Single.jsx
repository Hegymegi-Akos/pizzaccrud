
import React, { useState } from "react";
import axios from "axios";

export default function Single() {
  const [id, setId] = useState("");
  const [item, setItem] = useState(null);
  const [msg, setMsg] = useState("");

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://itmp.sulla.hu/users/${id}`);
      setItem(res.data);
      setMsg("");
    } catch (err) {
      // Ha a backend nem elérhető, töltsünk demo elemet
      if (!err.response) {
        setItem({ id: id, name: `Demo felhasználó ${id}`, email: `demo${id}@example.com` });
        setMsg("Offline demo: helyi minta betöltve");
      } else {
        setMsg("Hiba a lekéréskor!");
        setItem(null);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Elem részletei</h2>
      <form onSubmit={handleFetch}>
        <input className="form-control mb-2" value={id} onChange={e => setId(e.target.value)} placeholder="ID" required />
        <button className="btn btn-info" type="submit">Lekér</button>
      </form>
      {msg && <div className="mt-2">{msg}</div>}
      {item && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.ename}</p>
            <p className="card-text"><b>ID:</b> {item.id}</p>
          </div>
        </div>
      )}
    </div>
  );
}