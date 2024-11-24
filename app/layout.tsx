import type { Metadata } from "next";
import Providers from "@/providers";
export const metadata: Metadata = {
  title: "Privy Login",
  description: "Privy Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
