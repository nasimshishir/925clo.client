import Header from '@components/Header.v1';
import Footer from '@components/Footer';
import '@styles/globals.css';


export const metadata = {
  title: '925clo',
  description: 'Your daily style manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <main className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
