import "@/assets/css/globals.css";
import { lato } from "@/assets/fonts/fonts";

export const metadata = {
  title: "Liizor",
  description:
    "Pre-launch website for an upcoming crypto fintech project/company. Stay tuned for innovative financial solutions in the crypto space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
