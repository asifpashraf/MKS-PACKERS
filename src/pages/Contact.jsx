import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a backend or email
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section style={styles.section}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <div style={styles.contactInfo}>
        <h3>Our Offices</h3>
        <p><strong>Kerala:</strong> 123, Moving Street, Kochi, Kerala</p>
        <p><strong>Bangalore:</strong> 456, Transport Avenue, Bangalore, Karnataka</p>
        <p><strong>Phone:</strong> +91 8129 092 016</p>
        <p><strong>Email:</strong> contact@mks-solutions.com</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#004aad',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  contactInfo: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
  },
};

export default Contact;
