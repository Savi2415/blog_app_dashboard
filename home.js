import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem',
          backgroundColor: '#111',
        }}
      >
        <span
          onClick={() => setShowContent(true)}
          style={{ cursor: 'pointer', fontWeight: 'bold' }}
        >
          Home
        </span>
        <Link href="/about" style={{ fontWeight: 'bold' }}>
          About
        </Link>
        <Link href="/contact" style={{ fontWeight: 'bold' }}>
          Contact
        </Link>
      </nav>

      {/* Title */}
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <h1 style={{ fontSize: '2.5rem' }}>
          MY <span style={{ color: '#ffc107' }}>BLOG</span>
        </h1>
        <p style={{ maxWidth: '600px', margin: 'auto', color: '#bbb' }}>
          "Blogging is a content, not a code"
        </p>
      </div>

      {/* Blog Cards */}
      {showContent && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            padding: '2rem',
          }}
        >
          {/* Blog Card 1 */}
          <div
            style={{
              width: '300px',
              backgroundColor: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}
          >
            <Image
              src="/images/post2.png"
              width={300}
              height={180}
              alt="Blog 1"
            />
            <div style={{ padding: '1rem' }}>
              <h3>Blog on busy work</h3>
              <p style={{ fontSize: '0.8rem', color: '#ccc' }}>
                🗓 May 31, 2020 | 🕒 1 min
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                "Being busy isn't the same as being productive. Focusing on
                high-impact tasks and purposeful work is key to making real
                progress."
              </p>
              <Link href="/posts/post1">
                <button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#ffc107',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                  }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div
            style={{
              width: '300px',
              backgroundColor: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}
          >
            <Image
              src="/images/post6.png"
              width={300}
              height={180}
              alt="Blog 2"
            />
            <div style={{ padding: '1rem' }}>
              <h3>Modern Clock</h3>
              <p style={{ fontSize: '0.8rem', color: '#ccc' }}>
                🗓 June 15, 2020 | 🕒 2 min
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                A modern clock has three hands: hours, minutes, and seconds.
                The fastest is the second hand, and the slowest is the hour
                hand.
              </p>
              <Link href="/posts/post2">
                <button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#ffc107',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                  }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div
            style={{
              width: '300px',
              backgroundColor: '#111',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}
          >
            <Image
              src="/images/blog3.png"
              width={300}
              height={180}
              alt="Blog 3"
            />
            <div style={{ padding: '1rem' }}>
              <h3>Technology</h3>
              <p style={{ fontSize: '0.8rem', color: '#ccc' }}>
                🗓 July 1, 2020 | 🕒 3 min
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                From communication to business, technology constantly evolves,
                reshaping the world and creating new opportunities.
              </p>
              <Link href="/posts/post3">
                <button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#ffc107',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                  }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
