import { FC } from 'react'
import Link from 'next/link'
import { RestProps } from '../types/Blog'


const Button: FC<Props> = ({
  text = 'Back to post list',
  backArrow = false,
  ...props
}) =>
  <>
    <div className="back">
      {backArrow && <>
        ←{' '}
      </>}
      <Link href="/" {...props}>
        <a>{text}</a>
      </Link>
    </div>
    <style jsx>{`
        .back {
          width: 100%;
          max-width: 1200px;
          color: #00a395;
        }
    `}</style>
  </>

type Props = {
  text?: string
  backArrow?: boolean
} & RestProps


export default Button