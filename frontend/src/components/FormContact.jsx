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
      alert("Échec de l'envoi du message");
    }
  };

  return (
    <div className="contact__content">
        <div className="contact__content__row-box">
        <form onSubmit={handleSubmit} className="contact__content__form">
        <h1>CONTACT</h1>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__form-label">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact__form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="contact__form-submit">
            Envoyer
          </button>
        </form>

      <div className="contact__content__info">
      <h1>COORDONNÉES</h1>
        <p className="contact__info-item">celine.b.dev@gmail.com</p>
        <p className="contact__info-item">06.64.70.67.77</p>
        <p className="contact__info-item">31000, Toulouse</p>
        <div className="contact__info-logo-container">
          <Image
            src="/assets/logo_poupou_small.webp"
            alt="Logo"
            className="contact__info-logo"
            width={180}
            height={180}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>
      </div>
    </div>
  );
}



// import Image from 'next/image';
// import { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Envoie des données au backend
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (res.ok) {
//       alert('Message envoyé avec succès !');
//     } else {
//       alert('Échec de l\'envoi du message');
//     }
//   };

//   return (
//       <div className="contact__wrapper">
//         <div className="contact__wrapper__form-container">

//           <form onSubmit={handleSubmit} className="contact-form">
//           <h1>CONTACT</h1>
//             <div className="form-group">
//               <label htmlFor="name">Nom</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Envoyer
//             </button>
//           </form>
//         </div>

//         <div className="contact__wrapper__infos">
//   <h1>COORDONNÉES</h1>
//   <p>Email: celine.b.dev@gmail.com</p>
//   <p>Téléphone: 06.64.70.67.77</p>
//   <p>Adresse: 31000, Toulouse</p>
//   <div className="container-logo">
//     <Image
//       src="/assets/logo_poupou_small.webp"
//       alt="Logo"
//       className="logo"
//       width={180}
//       height={180}
//       style={{ width: '100%', height: 'auto' }}
//       priority 
//     />
//   </div>
// </div>
//       </div>
//   );
// }
