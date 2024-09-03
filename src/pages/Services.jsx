function Services() {
    return (
      <section style={styles.section}>
        <h2>Our Services</h2>
        <div style={styles.serviceList}>
          <div style={styles.serviceItem}>
            <h3>Residential Moving</h3>
            <p>
              Comprehensive moving services for homes of all sizes. From packing to transportation and unpacking, we handle everything.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3>Packing Services</h3>
            <p>
              Professional packing using high-quality materials to ensure the safety of your belongings during transit.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3>Unpacking Services</h3>
            <p>
              Assistance with unpacking and setting up your new home, making your transition seamless and stress-free.
            </p>
          </div>
          <div style={styles.serviceItem}>
            <h3>Transportation</h3>
            <p>
              Reliable and secure transportation solutions tailored to your moving requirements within Kerala and Bangalore.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    serviceList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    serviceItem: {
      flex: '1 1 45%',
      padding: '20px',
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
    },
  };
  
  export default Services;
  