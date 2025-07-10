import Image from 'next/image';

export default function About() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '10px',
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <Image
            src="/images/blog.png" // Make sure this image exists in /public/images
            width={120}
            height={120}
            alt="Profile"
            style={{ borderRadius: '50%', objectFit: 'cover', border: '3px solid #ffc107' }}
          />
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ffc107' }}>
          About Me
        </h1>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          👋 Hey there! I'm the creator of this blog – a space to share thoughts, explore ideas, and inspire action. I write about tech, productivity, and real-life learnings from personal and professional experiences.
        </p>

        <p style={{ fontSize: '1rem', color: '#ddd' }}>
          🚀 This blog aims to provide helpful content that empowers others — whether it’s tips for staying productive, learning new tools, or just appreciating the little things in life.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '0.8rem', color: '#ffc107' }}>💡 Things I Write About:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={listStyle}>📝 Personal Growth & Habits</li>
            <li style={listStyle}>💻 Tech & Tools</li>
            <li style={listStyle}>🎯 Productivity Hacks</li>
            <li style={listStyle}>📖 Blogging Journeys</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const listStyle = {
  marginBottom: '0.6rem',
  fontSize: '1rem',
  color: '#ccc',
};
