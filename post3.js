import Image from 'next/image';

export default function Post3() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Technology
        </h1>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Technology has transformed our world in unimaginable ways. From the
          invention of the wheel to the rise of artificial intelligence, human
          progress has always been fueled by innovation.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/image4.png"
            width={700}
            height={400}
            alt="Modern technology"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Today, technology shapes how we live, work, communicate, and learn.
          Smartphones have become essential tools. Cloud computing powers global
          data. The Internet connects us across continents.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/image5.png"
            width={700}
            height={400}
            alt="Future of technology"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          As we continue to innovate, it's important to consider both the
          benefits and the responsibilities. Ethical use, data privacy, and
          inclusive access are key factors in shaping a better digital future.
        </p>
      </div>
    </div>
  );
}

