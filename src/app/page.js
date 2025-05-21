import Link from "next/link";

export default function Home() {
  return(
    <>
    <h1>Hello World</h1>
    <Link href="/about">About</Link>
    <br />
    <Link href="/services">Services</Link>
    <br/>
    <Link href="/blogs">Blogs</Link>
    <br />
    <Link href="/files">Files</Link>
    <br />
    </>
  )
}
