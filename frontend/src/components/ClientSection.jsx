import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ClientSection.css"; 

function ClientSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("http://localhost:8080/client");
        setClients(res.data);
      } catch (err) {
        console.error("Error fetching clients:", err);
      }
    };

    fetchClients();
  }, []);

  return (
    <section>
      <h2>Happy Clients</h2>
      <div className="client-list">
        {clients.map((client) => (
          <div key={client._id} className="client-card">
            <img src={client.imageUrl} alt={client.name} width={100} />
            <p>"{client.description}"</p>
            <h4>{client.name}</h4>
            <span>{client.designation}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientSection;