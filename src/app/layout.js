import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Duckb3ar",
  description: "Not a quak house but a quak home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/duckb3ar-logo.svg" />
      </head>
      <body>
        <div className="font-rachel ">          
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


