import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "BOHRA Property Pvt. Ltd.",
  description: "Luxury Real Estate Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1668144674115192');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image
            width={1}
            height={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1668144674115192&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-primary text-accent min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
