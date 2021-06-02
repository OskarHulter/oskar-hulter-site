import ReactMarkdown from 'react-markdown'
import { BlogProps } from 'types'
import { Flex } from '@chakra-ui/react'


export function MDX({ markdownBody, ...props}:BlogProps) {

  return (
    <Flex direction='column' {...props} >
      <ReactMarkdown>
        {markdownBody}
      </ReactMarkdown>
    </Flex>
  )
}
