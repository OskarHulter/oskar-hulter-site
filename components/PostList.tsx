import Link from 'next/link'
import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { PostsProps } from 'types'
import { LinkBox, LinkOverlay, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react'


export function PostList({ posts }: PostsProps) {

  return (!posts ?
    <div>No posts!</div> :
    <UnorderedList>
      {posts.map(post =>
        <LinkBox as='article' key={post.slug}>
          <ListItem> 

            <ListIcon as={AiFillCode} color='brand.700' />

            {post.frontmatter.date}: {' '}
            <Link href={{ pathname: `/post/${post.slug}` }}>
              <LinkOverlay>{post?.frontmatter?.title}</LinkOverlay>
            </Link>

            <Text isTruncated={true}>
              {post?.markdownBody}
            </Text>

          </ListItem>
        </LinkBox>
      )}
    </UnorderedList>
  )
}

