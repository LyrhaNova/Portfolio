import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the backend
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Message envoyé avec succès !');
    } else {
      alert('Échec de l\'envoi du message');
    }
  };

  return (
      <div className="contact-wrapper">
        <div className="contact-form-container">

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer
            </button>
          </form>
        </div>

        <div className="contact-info">
  <h2>MES COORDONNÉES</h2>
  <p>Email: celine.b.dev@gmail.com</p>
  <p>Téléphone: 06.64.70.67.77</p>
  <p>Adresse: 31000, Toulouse</p>
  <div className="container-logo">
    <Image
      src="/assets/logo_poupou_small.webp"
      alt="Logo"
      className="logo"
      width={180}
      height={180}
      style={{ width: '100%', height: 'auto' }}
      priority 
    />
  </div>
</div>

      </div>
  );
}
