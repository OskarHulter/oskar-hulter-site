import { FC } from 'react'
import HamburgerMenu from '@components/Header/HamburgerMenu'
import Navigation from './Navigation'

const Header: FC = () => (
  <>
    <header className="header">
      <HamburgerMenu />
      <Navigation />
    </header>
    <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    `}</style>
  </>
)

export default Header