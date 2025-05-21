export default async function page({params}) {
    const paramsObj = await params;
    const {blog} = paramsObj;
  return (
    <h1>all comments on {blog}</h1>
  )
}

