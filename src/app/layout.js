export const metadata = {
  title : {
    template : "%s | Technical Agency",
    default : "Technical Agency",
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{fontSize : '32px'}}>Header</header>
        {children}
        <footer style={{fontSize : '32px'}}>Footer</footer>
      </body>
    </html>
  );
}
