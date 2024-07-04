import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PSQUARE COMPANY",
  description: "Explore bespoke ERP solutions at PSQUARE Company, specializing in Industry 4.0, sales management, and construction ERP software. Our expertise ensures seamless integration and enhanced productivity for the construction industry. PSQUARE Company delivers tailored ERP software designed to optimize business processes. Learn more about our advanced ERP solutions to streamline your operations and drive growth. Contact us today to start transforming your business with industry-leading ERP solutions.",
  keywords: ["PSQUARE COMPANY", "psquare", "P square company", "erp solutions", "manufacturing erp software", "erp tools", "erp system", "erp software", "industry 4.0"]

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
      </head>
      <body className={inter.className}>

        {children}

      </body>
    </html>
  );
}
