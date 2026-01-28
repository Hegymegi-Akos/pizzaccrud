
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://itmp.sulla.hu/users")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Hiba a lekéréskor");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Betöltés...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Lista</h2>
      <div className="row">
        {items.map(item => (
          <div className="col-md-4 mb-3" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
                {/* Itt lehet majd szerkeszteni/törölni is */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}