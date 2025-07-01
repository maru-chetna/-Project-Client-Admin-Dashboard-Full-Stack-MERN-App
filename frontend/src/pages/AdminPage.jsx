import React from "react";
import AddProjectForm from "../components/AddProjectForm";
import AddClientForm from "../components/AddClientForm";
import ContactList from "../components/ContactList";
import NewsletterList from "../components/NewsletterList";

function AdminPage() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <AddProjectForm />
      <AddClientForm />
      <ContactList />
      <NewsletterList />
    </div>
  );
}

export default AdminPage;