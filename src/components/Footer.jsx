function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} MKS SOLUTIONS. All rights reserved.</p>
        <div style={styles.social}>
          {/* Add social media links/icons if available */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Instagram</a>
        </div>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#004aad',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
    social: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
  };
  
  export default Footer;
  