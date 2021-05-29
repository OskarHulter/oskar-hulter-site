import ReactMarkdown from 'react-markdown'
import { BlogProps } from 'types/Blog'


export function MDX({ markdownBody, ...props}:BlogProps) {

  return (
    <div className='mdx-prose' {...props} >
      <ReactMarkdown>
        {markdownBody}
      </ReactMarkdown>
    </div>
  )
}
