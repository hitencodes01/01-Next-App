import Link from "next/link";
export const metadata = {
  title : "About",
};
export default function About() {
  console.log("about page")
  return(
    <>
    <h1>Welcome to my page</h1>
    <Link href="/">Home</Link>
    </>
  )
}