export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ fontSize: "32px", backgroundColor: "orange" }}>
        Header (Application)
      </header>
      {children}
      <footer style={{ fontSize: "32px", backgroundColor: "green" }}>
        Footer (Application)
      </footer>
    </>
  );
}
