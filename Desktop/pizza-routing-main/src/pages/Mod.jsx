
import React, { useState } from "react";
import axios from "axios";

export default function Mod() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://itmp.sulla.hu/api/users/${id}`, { name, email });
      setMsg("Sikeres módosítás!");
    } catch (err) {
      // Ha a backend nem elérhető, jelezzük a felhasználónak és szimuláljuk a sikert
      if (!err.response) {
        setMsg("Offline demo: a módosítás szimulálva (nem lett elküldve).");
      } else {
        setMsg("Hiba a módosításkor!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Módosítás</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" value={id} onChange={e => setId(e.target.value)} placeholder="ID" required />
        <input className="form-control mb-2" value={name} onChange={e => setName(e.target.value)} placeholder="Név" required />
        <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button className="btn btn-primary" type="submit">Módosít</button>
      </form>
      {msg && <div className="mt-2">{msg}</div>}
    </div>
  );
}