import React, { useState } from "react";
import axios from "axios";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Email is required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/newsletter", { email });
      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (error.response?.status === 400) {
        setMessage("Already subscribed.");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    }
  };

  return (
    <section>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}

export default NewsletterSection;