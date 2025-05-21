export default async function({params}) {
    const {files} = await params;
  return (
    <h1>file<i>/{files?.join("/")}</i></h1>
  )
}
