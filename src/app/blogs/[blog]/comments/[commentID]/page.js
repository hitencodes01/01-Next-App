export default async function page({params}) {
    const paramsObj = await params;
    const {blog , commentId,} = paramsObj;
    console.log(paramsObj)
  return (
    <h1>comment no. {commentId} on {blog} page </h1>
  )
}


