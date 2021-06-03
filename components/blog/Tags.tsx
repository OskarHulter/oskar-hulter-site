import { BlogTags } from 'types'
import { HStack, Tag } from '@chakra-ui/react'


export function BlogTags({tags, marginTop}: BlogTags) {
  return (
    <HStack spacing={2} marginTop={marginTop}>
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

