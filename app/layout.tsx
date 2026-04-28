export const metadata = {
  title: 'MikeOpenClaw1',
  description: 'Building something amazing with OpenClaw',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}