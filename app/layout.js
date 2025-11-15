export const metadata = {
  title: 'Agentic App',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'Inter, system-ui, Arial, sans-serif',
        background: '#0b1120',
        color: '#e5e7eb',
        margin: 0,
      }}>
        {children}
      </body>
    </html>
  );
}
