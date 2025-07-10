import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/feature1.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
        }}
      >
        {/* ✅ Clicking this now navigates to home.js page */}
        <Link href="/home" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
          About
        </Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </Link>
      </nav>

      {/* Centered Title */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: 'black',
            fontSize: '4rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px black',
          }}
        >
          Welcome to My Blog
        </h1>
      </div>
    </div>
  );
}
