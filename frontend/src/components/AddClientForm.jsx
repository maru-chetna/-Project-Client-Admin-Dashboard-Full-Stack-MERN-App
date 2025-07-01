import React, { useState } from "react";
import axios from "axios";
import "./AddClientForm.css";




function AddClientForm() {
  const [form, setForm] = useState({ name: "", description: "", designation: "", imageUrl: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:8080/client", form);
      setMessage("Client added!");
      setForm({ name: "", description: "", designation: "", imageUrl: "" });
    } catch (err) {
      setMessage("Error adding client");
    }
  };

  return (
    <section>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Client Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} required />
        <button type="submit">Add Client</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default AddClientForm;