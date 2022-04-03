export default function Header({ title }) {
  return (
    <>
      <p><img src="/logo.jpg"></img></p>
      <h1 className="title">{title}</h1>
    </>
  )
}
