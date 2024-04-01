import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='py-4 border-b border-gray-200 mb-8'>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}
