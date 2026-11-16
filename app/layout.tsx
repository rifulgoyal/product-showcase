import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Product Store — Typed Props",
  description: "Build reusable, typed components with props.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
