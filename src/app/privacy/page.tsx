import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main>
      <nav>
        <div className="container nav-container">
          <Link href="/" className="logo-container">
            <span>&larr; Back to Home</span>
          </Link>
        </div>
      </nav>
      <section className="container" style={{ minHeight: '80vh', paddingTop: '10rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={{ color: 'var(--color-gray-dark)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Last Updated: June 15, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>Welcome to Fifth Force. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '1rem' }}>We may collect personal identification information (Name, email address, phone number, etc.) when you voluntarily submit it to us through our contact mechanisms.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '1rem' }}>We use the information we collect to communicate with you, provide our educational consultancy services, and improve our offerings.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>3. Data Security</h2>
          <p style={{ marginBottom: '1rem' }}>We implement appropriate technical and organizational security measures to protect any personal information we process. However, please remember that no method of transmission over the internet is 100% secure.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>4. Contact Us</h2>
          <p style={{ marginBottom: '1rem' }}>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:info.fifthforce@gmail.com" className="text-accent">info.fifthforce@gmail.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
