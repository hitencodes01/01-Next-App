export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ fontSize: "32px", backgroundColor: "red" }}>
        Header (Marketing)
      </header>
      {children}
      <footer style={{ fontSize: "32px", backgroundColor: "blue" }}>
        Footer (Marketing)
      </footer>
    </>
  );
}
