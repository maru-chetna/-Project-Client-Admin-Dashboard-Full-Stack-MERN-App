import React, { useState } from "react";
import axios from "axios";


function AddProjectForm() {
  const [form, setForm] = useState({ name: "", description: "", imageUrl: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("http://localhost:8080/project", form);
      setMessage("Project added!");
      setForm({ name: "", description: "", imageUrl: "" });
    } catch (err) {
      setMessage("Error adding project");
    }
  };

  return (
    <section>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Project Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Project Description" value={form.description} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} required />
        <button type="submit">Add Project</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default AddProjectForm;