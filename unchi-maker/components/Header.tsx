import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/yuto51942/unchi-maker-site" target="_blank" rel="noopener noreferrer">ソースコード</a>
          </li>
          <li>
            <Link href="/license">
              <a>License</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
