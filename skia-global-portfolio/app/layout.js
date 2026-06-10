import './globals.css';

export const metadata = {
  title: 'Swaasti Khandale · Image Architect & Executive Presence Strategist',
  description:
    'SKIA Global — Executive Presence & Professional Image Consultancy. Helping leaders become promotable, influential, and boardroom-ready. Transform. Elevate. Lead.',
  keywords: [
    'executive presence', 'image consultant', 'leadership coaching',
    'Swaasti Khandale', 'SKIA Global', 'professional image', 'boardroom presence',
    'corporate training', 'behavioural transformation',
  ],
  openGraph: {
    title: 'Swaasti Khandale · Image Architect',
    description: 'Executive Presence & Professional Image Consultancy. Transform. Elevate. Lead.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
