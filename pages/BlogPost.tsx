import Link from 'next/link'
import { BlogAuthor } from 'pages/ArticlesList'
import {
  Box, Divider, Heading, Image, Text, useColorModeValue, VStack, Wrap, WrapItem,
} from '@chakra-ui/react'
import { BlogTags } from '@components/blog/Tags'
import { PostProps } from '@types'


export function OldPost({ post }: PostProps) {
  return (
    <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
      <Heading as='h2'>What we write about</Heading>
      <Text as='p' fontSize='lg'>
      </Text>
      <Text as='p' fontSize='lg'>
        lit.
      </Text>
      <Text as='p' fontSize='lg'>
        Lorem
      </Text>
    </VStack>
  )
}


export default function LatestPost({ post }: PostProps) {
  return (
    <>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'>
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'>
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'>
            <Link href={{ pathname: `/post/${post.slug}` }}>
              <Image
                borderRadius='lg'
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt={post?.frontmatter.imageAlt}
                objectFit='contain'
              />
            </Link>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
      </Box>

      <Box
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        marginTop={{ base: '3', sm: '0' }}>
        <BlogTags tags={['Engineering', 'Product']} />
        <Heading marginTop='1'>
          <Link href={{ pathname: `/post/${post.slug}` }}>
            {post?.frontmatter?.title}
          </Link>
        </Heading>
        <Text
          as='p'
          marginTop='2'
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize='lg'
          isTruncated={true}
        >
          {post?.markdownBody}
        </Text>
        <BlogAuthor name={post?.author} date={new Date(post?.frontmatter?.date)} />
      </Box>
    </>
  )
}
export function DividerComp() {
  return (
    <>
      <Heading as='h3' marginTop='5'>
        Latest articles
      </Heading>
      <Divider marginTop='5' />
    </>
  )
}
export function PostItem({ post }: PostProps) {
  return (
    <>
      <Wrap spacing='30px' marginTop='5'>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Heading fontSize='xl' marginTop='2'>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  {post?.frontmatter?.title}
                </Link>
              </Heading>
              <Text
                as='p'
                marginTop='2'
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize='lg'
                isTruncated={true}
              >
                {post?.markdownBody}
              </Text>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                {post?.frontmatter?.title}
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              {post?.markdownBody}
            </Text>
            <BlogAuthor
              name={post?.author}
              date={new Date(post?.frontmatter?.date)}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </>
  )

}


