function About() {
    return (
      <section style={styles.section}>
        <h2>About MKS SOLUTIONS</h2>
        <p>
          At MKS SOLUTIONS, we specialize in residential moving services across Kerala and Bangalore.
          With years of experience, our dedicated team ensures that your move is handled with care and efficiency.
        </p>
        <h3>Our Mission</h3>
        <p>
          To provide reliable, stress-free moving services that exceed our customers' expectations.
        </p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Experienced and trained professionals</li>
          <li>Safe packing and transportation</li>
          <li>Transparent pricing</li>
          <li>Customer-centric approach</li>
        </ul>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
    },
  };
  
  export default About;
  