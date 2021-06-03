import Link from 'next/link'
import { Button, Flex, Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'


export function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Heading as='h2' size='2xl'>
            Personal Site Template using next & Chakra Ui
          </Heading>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
        This is a simple blog built with Next, easily deployable on <Link href='https://url.netlify.com/r1j6ybSYU'>Netlify</Link>.
   You can look at the repository for this project <Link href='https://github.com/OskarHulter/next-netlify-blog-starter'>here</Link>
          This is a fork of Cassidoo&apos;s next-netlify-blog-starter, big thanks! Check out the repo <Link href='https://github.com/cassidoo/next-netlify-blog-starter'>here</Link>
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Blog
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Contact
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}