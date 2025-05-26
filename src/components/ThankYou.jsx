
const ThankYou = () => {
    return (
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#2b3990' }}>Vielen Dank!</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          Ihre Terminanfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.
        </p>
        <a href="/" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
          Zurück zur Startseite
        </a>
      </section>
    )
  }
  
  export default ThankYou
  