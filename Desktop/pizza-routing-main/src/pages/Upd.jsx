
import React, { useState } from "react";
import axios from "axios";

export default function Upd() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [ename, setEname] = useState("");
  // keep variable name ename for minimal change but treat it as email
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // if email state present use that, else fall back to ename
      const payload = { name, email: email || ename };
      await axios.patch(`https://itmp.sulla.hu/api/users/${id}`, payload);
      setMsg("Sikeres frissítés!");
    } catch (err) {
      if (!err.response) {
        setMsg("Offline demo: a frissítés szimulálva (nem lett elküldve).");
      } else {
        setMsg("Hiba a frissítéskor!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Frissítés</h2>
      <form onSubmit={handleUpdate}>
        <input className="form-control mb-2" value={id} onChange={e => setId(e.target.value)} placeholder="ID" required />
        <input className="form-control mb-2" value={name} onChange={e => setName(e.target.value)} placeholder="Név" required />
        <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button className="btn btn-warning" type="submit">Frissít</button>
      </form>
      {msg && <div className="mt-2">{msg}</div>}
    </div>
  );
}