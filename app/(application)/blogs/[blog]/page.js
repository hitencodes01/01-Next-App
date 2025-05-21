import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    const {blog} = await params;
    return{
        title:`Blogs ${blog}`,
    }
}
export default async function blog({params}){
    const {blog} = await params;
    if(!/^\d+$/.test(blog)){
            notFound();
    }
    return(
        <>
        <h1>this is your {blog} blog</h1>
        </>
    );
}
