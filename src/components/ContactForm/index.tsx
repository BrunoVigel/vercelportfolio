import React, { useState } from "react";
import styles from './styles.module.scss'

export default function ContactForm() {
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });
  
  // Update inputs value
  const handleParam = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/04db34b0-ef9a-4157-a011-933a098255c9", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };
  return (
    <div className={styles.ContactForm}>
      <form onSubmit={formSubmit}>
        <div className={styles.inputInfo}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              required
              className={styles.formControl}
              value={query.name}
              onChange={handleParam()}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label htmlFor="name">Nome</label>
          </div>
          <div className={styles.group}>
            <input
              type="email"
              name="email"
              required
              className={styles.formControl}
              value={query.email}
              onChange={handleParam()}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className={styles.groupMessage}>
          <textarea
            type="text"
            name="message"
            required
            className={styles.formControl}
            value={query.message}
            onChange={handleParam()}
          />
          <label htmlFor="message">Mensagem</label>
        </div>
        <button className="submit" type="submit">Enviar</button>
      </form>
    </div>
  );
}