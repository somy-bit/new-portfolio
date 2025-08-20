
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='bg-gray-200 dark:bg-gray-800 w-full min-h-screen '
      >
        <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}
