import './globals.css';

export const metadata = {
  title: "Krishnaveni Vriddhashrama",
  description: "Krishnaveni Vriddhashrama",
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