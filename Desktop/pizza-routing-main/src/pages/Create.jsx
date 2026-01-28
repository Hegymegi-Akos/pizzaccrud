import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://itmp.sulla.hu/users", { name, email });
      setMsg("Sikeres létrehozás!");
      setName("");
      setEmail("");
    } catch (err) {
      setMsg("Hiba a létrehozáskor!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Új felhasználó létrehozása</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" value={name} onChange={e => setName(e.target.value)} placeholder="Név" required />
        <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button className="btn btn-success" type="submit">Létrehoz</button>
      </form>
      {msg && <div className="mt-2">{msg}</div>}
    </div>
  );
}