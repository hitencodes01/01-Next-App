import Link from "next/link";
import ComponentPage from "../_components/test";

export default function Home() {
  return(
    <>
    <h1 className="text-center">Business Knowledge</h1>
    <ComponentPage />
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
