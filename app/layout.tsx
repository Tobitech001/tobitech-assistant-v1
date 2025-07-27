export const metadata = {
  title: 'Tobi Tech Assistant',
  description: 'Your AI assistant for product promotion, content & reminders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
