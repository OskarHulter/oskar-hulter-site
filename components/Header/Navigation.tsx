import { FC } from 'react'
import Link from 'next/link'

const Navigation: FC = () => (
  <>
    <nav className="nav" role="navigation" aria-label="main navigation">
      <Link href="/">
        <a>Blog Template</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
    < style jsx> {`
          nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style >
  </>
)

export default Navigation