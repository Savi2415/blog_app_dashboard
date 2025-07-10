import Image from 'next/image';

export default function Post1() {
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
          Blog on Busy Work
        </h1>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Being busy isn't the same as being productive. Often, people confuse
          activity with achievement. Focusing on high-impact tasks and
          purposeful work is key to making real progress.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/blog1.png"
            width={700}
            height={400}
            alt="Busy work illustration"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          To avoid the trap of busyness, start by setting clear priorities.
          Identify the tasks that align with your long-term goals and avoid
          distractions that do not add value.
        </p>

        <div style={{ margin: '2rem 0' }}>
          <Image
            src="/images/image1.png"
            width={700}
            height={400}
            alt="Productivity tips"
            style={{ borderRadius: '10px' }}
          />
        </div>

        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Remember: It’s not about how many hours you work, but what you
          accomplish within those hours. Use tools, set boundaries, and take
          breaks to stay energized and focused.
        </p>
      </div>
    </div>
  );
}

