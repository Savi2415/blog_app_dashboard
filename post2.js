import Image from 'next/image';

export default function Post2() {
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
          Modern Clock
        </h1>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          A modern clock is more than just a device to tell time — it's a
          combination of history, engineering, and design. From analog to
          digital, and from wall-mounted pieces to smartwatches, clocks have
          evolved significantly.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/image2.png"
            width={700}
            height={400}
            alt="Modern clock display"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Typically, a clock has three hands: one for hours, one for minutes,
          and one for seconds. The fastest is the second hand, which completes a
          full circle every 60 seconds. The slowest is the hour hand, which
          moves gradually across 12-hour cycles.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/image3.png"
            width={700}
            height={400}
            alt="Clock mechanism"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          In the digital age, clocks are now embedded in smartphones,
          appliances, and even websites. Despite their changes, their purpose
          remains: keeping us punctual and connected to time.
        </p>
      </div>
    </div>
  );
}

