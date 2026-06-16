import Link from "next/link";

export default function TermsOfService() {
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
        <h1 style={{ marginBottom: '2rem' }}>Terms of Service</h1>
        <div style={{ color: 'var(--color-gray-light)' }}>
          <p style={{ marginBottom: '1rem' }}><strong>Last Updated: June 15, 2026</strong></p>
          <p style={{ marginBottom: '1rem' }}>By accessing the website at fifthforce.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-white)' }}>1. Use License</h2>
          <p style={{ marginBottom: '1rem' }}>Permission is granted to temporarily download one copy of the materials (information or software) on Fifth Force's website for personal, non-commercial transitory viewing only.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-white)' }}>2. Disclaimer</h2>
          <p style={{ marginBottom: '1rem' }}>The materials on Fifth Force's website are provided on an 'as is' basis. Fifth Force makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-white)' }}>3. Limitations</h2>
          <p style={{ marginBottom: '1rem' }}>In no event shall Fifth Force or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fifth Force's website.</p>
          
          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-white)' }}>4. Modifications</h2>
          <p style={{ marginBottom: '1rem' }}>Fifth Force may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        </div>
      </section>
    </main>
  );
}
