"use client";

import { useState } from "react";

const services = [
  "Dyer",
  "Dritare",
  "Roleta",
  "Xhama palues",
  "Fasada ventiluese",
  "Matje dhe oferte",
];

const initialState = {
  name: "",
  contact: "",
  service: services[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setNotice(result.message || "Mesazhi nuk u dergua. Provoni perseri.");
        return;
      }

      setForm(initialState);
      setStatus("success");
      setNotice(result.message);
    } catch {
      setStatus("error");
      setNotice("Mesazhi nuk u dergua. Kontrolloni lidhjen dhe provoni perseri.");
    }
  };

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="form-row">
        <label>
          Emri
          <input
            autoComplete="name"
            name="name"
            onChange={updateField}
            placeholder="Emri juaj"
            required
            type="text"
            value={form.name}
          />
        </label>

        <label>
          Telefoni ose emaili
          <input
            autoComplete="email"
            name="contact"
            onChange={updateField}
            placeholder="044 000 000 ose email"
            required
            type="text"
            value={form.contact}
          />
        </label>
      </div>

      <label>
        Sherbimi
        <select name="service" onChange={updateField} value={form.service}>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label>
        Mesazhi
        <textarea
          name="message"
          onChange={updateField}
          placeholder="Pershkruani dimensionet, lokacionin ose sherbimin qe ju duhet."
          required
          rows="5"
          value={form.message}
        />
      </label>

      <button className="btn primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Duke derguar..." : "Dergo kerkesen"}
      </button>

      {notice ? <p className={`form-notice ${status}`}>{notice}</p> : null}
    </form>
  );
}
