import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <div className="container nav-container">
          <Link href="/" className="logo-container">
            <Image src="/FifthForce.png" alt="Fifth Force Logo" width={200} height={100} style={{ objectFit: 'contain', width: 'auto', height: '45px' }} priority />
            <span>Fifth Force</span>
          </Link>
          <div className="nav-links">
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#huumanext">Huumanext</Link>
            <a href="mailto:info.fifthforce@gmail.com" className="btn btn-outline" style={{ padding: '0.4rem 1rem' }}>Contact Us</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Empowering the Future of Work and Education</h1>
            <p>Advanced skill-up training, employability solutions, and educational consultancy tailored for the modern B2B ecosystem.</p>
            <div className="hero-buttons">
              <a href="mailto:info.fifthforce@gmail.com" className="btn">Contact Us</a>
              <a href="#services" className="btn btn-outline">Explore Our Vision</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Fifth Force</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)', marginBottom: '1rem' }}>
            Founded in <strong>April 2021</strong>, Fifth Force emerged with a singular vision: to bridge the critical gap between traditional educational models and the demands of modern employability.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-light)' }}>
            We design and deploy robust physical and online training architectures, empowering workforces with next-generation skills while providing strategic guidance to educational institutions globally.
          </p>
        </div>

        <div className="card-grid" style={{ marginTop: '0' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="text-accent" style={{ fontSize: '1.8rem' }}>Our Vision</h3>
            <p>To architect a globally unified learning ecosystem where potential perfectly aligns with opportunity, transforming human capability into tomorrow&apos;s enterprise success.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 className="text-accent" style={{ fontSize: '1.8rem' }}>Our Mission</h3>
            <p>To systematically eradicate the global skill gap by delivering hyper-relevant, hybrid employability training and data-driven educational consultancy to forward-thinking B2B organizations.</p>
          </div>
        </div>
      </section>

      <section id="huumanext" className="flagship">
        <div className="container" style={{ padding: '4rem 0' }}>
          <h2 className="text-accent">Huumanext</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-light)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            The world&apos;s first Human Potential OS. Created and seamlessly operated by Fifth Force.
          </p>
          <a href="https://huumanext.com" target="_blank" rel="noopener noreferrer" className="btn">
            Discover Huumanext
          </a>
        </div>
      </section>

      <section id="services" className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Our Services</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-gray-light)', marginBottom: '3rem' }}>Comprehensive B2B solutions for the modern enterprise and institution.</p>
        
        <div className="card-grid">
          <div className="card">
            <h3>Employability Training</h3>
            <p>Equipping modern workforces with critical next-generation skills designed to immediately impact productivity and innovation.</p>
          </div>
          <div className="card">
            <h3>Skill-Up Programs</h3>
            <p>Advanced hybrid learning architectures combining the best of online flexibility with rigorous physical training modules.</p>
          </div>
          <div className="card">
            <h3>Educational Consultancy</h3>
            <p>Strategic, data-driven guidance for educational institutions and corporate training sectors looking to modernize their curricula.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <Image src="/FifthForce.png" alt="Fifth Force Logo" width={200} height={100} style={{ objectFit: 'contain', width: 'auto', height: '60px' }} />
          <div>
            <strong>Fifth Force</strong><br/>
            Kolkata, West Bengal, India, Pin - 700075<br/>
            +91 7003720431 | <a href="mailto:info.fifthforce@gmail.com" className="text-accent">info.fifthforce@gmail.com</a>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            &copy; 2026 Fifth Force. All rights reserved. <br/>
            <a href="https://fifthforce.in" className="text-accent" style={{ textDecoration: 'none' }}>fifthforce.in</a>
          </p>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
