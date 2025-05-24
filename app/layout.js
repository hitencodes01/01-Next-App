export const metadata = {
  title : {
    template : "%s | Business knowledge",
    default : "Business knowledge",
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
