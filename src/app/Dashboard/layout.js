import { DM_Serif_Display } from "next/font/google";


const dmserif  = DM_Serif_Display({ subsets: ["latin"], weight:"400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmserif.className}>{children}</body>
    </html>
  );
}