import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure to add a logo image in the assets folder

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="MKS Solutions" style={styles.logo} />
        <h1 style={styles.title}>MKS SOLUTIONS</h1>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
          <li><Link to="/services" style={styles.navLink}>Services</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#004aad',
    color: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontSize: '24px',
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;
