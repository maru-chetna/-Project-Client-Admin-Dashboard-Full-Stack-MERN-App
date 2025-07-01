import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContactList.css";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/contact");
        setContacts(res.data);
      } catch (err) {
        console.error("Failed to fetch contacts");
      }
    };

    fetchContacts();
  }, []);

  return (
    <section>
      <h2>Contact Submissions</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c._id}>
            {c.fullName} | {c.email} | {c.mobile} | {c.city}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;