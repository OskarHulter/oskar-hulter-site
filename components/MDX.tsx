import ReactMarkdown from 'react-markdown'
import { Flex } from '@chakra-ui/react'
import { BlogProps } from '@types'


export function MDX({ markdownBody, ...props}:BlogProps) {

  return (
    <Flex direction='column' {...props} >
      <ReactMarkdown>
        {markdownBody}
      </ReactMarkdown>
    </Flex>
  )
}
