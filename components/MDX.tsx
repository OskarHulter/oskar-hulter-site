import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { RestProps } from 'types/Blog'

const MDX: FC<Props> = ({ markdownBody, ...props }) =>
  <div className="mdx-prose" {...props} >
    <ReactMarkdown>
      {markdownBody}
    </ReactMarkdown>
  </div>

type Props = {
  markdownBody: string
} & RestProps

export default MDX