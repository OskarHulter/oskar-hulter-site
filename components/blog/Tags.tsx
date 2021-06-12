import { HStack, Tag } from '@chakra-ui/react'


export function BlogTags({ tags }: {tags: string[]}) {
  return (
    <HStack spacing={2} marginTop={3}>
      {tags.map(tag => 
        <Tag
          size={'md'}
          variant='solid'
          colorScheme='orange'
          key={tag}
        >
          {tag}
        </Tag>
      )}
    </HStack>
  )
}

