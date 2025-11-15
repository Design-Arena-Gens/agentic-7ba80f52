export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Hello ??</h1>
        <p style={{ opacity: 0.9, marginTop: '0.75rem' }}>
          Agentic Next.js app is live.
        </p>
        <p style={{ marginTop: '1.25rem' }}>
          Health check: <a href="/api/health" style={{ color: '#60a5fa' }}>/api/health</a>
        </p>
      </div>
    </main>
  );
}
