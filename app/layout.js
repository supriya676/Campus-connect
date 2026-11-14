import "./globals.css";

export const metadata = {
  title: "CampusConnect | Student Management Portal",
  description: "A student management portal built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
