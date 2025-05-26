import { notFound } from "next/navigation";
import Likes from "../../../../components/Likes";
import Views from "../../../../components/Views";
import Comments from "../../../../components/Comments";
import { Suspense , fallback} from "react";
import Loading from "../../../../components/Loading";

export async function generateMetadata({params}){
    const {blog} = await params;
    return{
        title:`Blogs ${blog}`,
    }
}
export const dynamicParams = false;
export const dynamic = "force-dynamic"
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
        <Suspense fallback='Loading views .....'>
        <Views/>
        </Suspense>
        <br />
        <Suspense fallback='Loading Likes .....'>
        <Likes/>
        </Suspense>
        <br />
        <Suspense fallback='Loading Comments .....'>
        <Comments/>
        </Suspense>
        </>
    );
}
