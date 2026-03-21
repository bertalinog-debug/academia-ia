import "./globals.css";

export const metadata = {
  title: "Academia IA",
  description: "Plataforma para passar exames com IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}