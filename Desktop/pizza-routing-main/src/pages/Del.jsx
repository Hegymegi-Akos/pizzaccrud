
import React, { useState } from "react";
import axios from "axios";

export default function Del() {
  const [id, setId] = useState("");
  const [msg, setMsg] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`https://itmp.sulla.hu/api/users/${id}`);
      setMsg("Sikeres törlés!");
    } catch (err) {
      if (!err.response) {
        setMsg("Offline demo: a törlés szimulálva (nem lett elküldve).");
      } else {
        setMsg("Hiba a törléskor!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Törlés</h2>
      <form onSubmit={handleDelete}>
        <input className="form-control mb-2" value={id} onChange={e => setId(e.target.value)} placeholder="ID" required />
        <button className="btn btn-danger" type="submit">Törlés</button>
      </form>
      {msg && <div className="mt-2">{msg}</div>}
    </div>
  );
}