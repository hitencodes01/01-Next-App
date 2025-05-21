import Link from "next/link";
export const metadata = {
  title : "Services"
}
export default function Services() {
  return(
    <>
    <h1>Escort Services</h1>
    <Link href="/services/web-dev">Web Development</Link>
    <Link href="/services/seo">seo Development</Link>
    </>
  )
}