import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Message submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/contact.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '2.5rem',
          borderRadius: '10px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#333' }}>
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical' }}
          ></textarea>

          <button
            type="submit"
            style={{
              width: '100%',
              marginTop: '1.2rem',
              padding: '0.8rem',
              backgroundColor: '#007bff',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// ✅ Inline style objects
const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 'bold',
  color: '#444'
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem',
  marginBottom: '1.2rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  outline: 'none',
  fontSize: '1rem'
};

