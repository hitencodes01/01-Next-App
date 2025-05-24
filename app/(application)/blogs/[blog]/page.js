import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    const {blog} = await params;
    return{
        title:`Blogs ${blog}`,
    }
}
export const dynamicParams = false;
export function generateStaticParams(){
        return [
            {blog : '1'},
            {blog : '2'},
            {blog : '3'},
            {blog : '4'},
            {blog : '5'},
        ]
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
