import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Welcome to MKS SOLUTIONS</h2>
        <p>
          Your trusted partner for residential moving services in Kerala and Bangalore.
          We ensure a smooth and hassle-free moving experience tailored to your needs.
        </p>
        <Link to="/services" style={styles.button}>Our Services</Link>
      </div>
      <div style={styles.imageContainer}>
        {/* Add an image related to moving, e.g., a moving truck */}
        <img src="/moving-truck.jpg" alt="Moving Truck" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: 'flex',
    padding: '40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    paddingRight: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#004aad',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
};

export default Home;
