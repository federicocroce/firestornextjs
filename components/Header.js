import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Index</a>
      </Link>
      <Link href="/home">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/fetch">
        <a style={linkStyle}>Fetch</a>
      </Link>
      <Link href="/get">
        <a style={linkStyle}>Get</a>
      </Link>
      <Link href="/workerF">
        <a style={linkStyle}>Worker</a>
      </Link>
      <Link href="/fetchLazy">
        <a style={linkStyle}>fetchLazy</a>
      </Link>
      <Link href="/fetchLazyController">
        <a style={linkStyle}>fetchLazyController</a>
      </Link>
    </div>
  )
}
