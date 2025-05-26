import Link from "next/link"
export const metadata = {
  title : "Blogs",
}
export default function blogs(){
  console.log("blog page")
    return(
        <>
        <h1>Blogs</h1>
        <Link href='/blogs/1'>Blog 1</Link>
        <br />
        <Link href='/blogs/2'>Blog 2</Link>
        <br />
        <Link href='/blogs/3'>Blog 3</Link>
        <br />
        <Link href='/blogs/4'>Blog 4</Link>
        <br />
        <Link href='/blogs/5'>Blog 5</Link>
        <br />
        </>
    )
}