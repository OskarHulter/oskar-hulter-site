import Link from 'next/link'
import { Button, Flex, Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'


export function Hero() {
  return (
    <Flex
      w='full'
      h='100vh'
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      backgroundSize='cover'
      backgroundPosition='center center'
    >
      <Heading
        as='h1'
        size='4xl'
        letterSpacing='tighter'
        m='10rem'
      >
          Oskar Hulter web dev
      </Heading>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Heading as='h2' size='2xl'>
            Personal Site Template using next & Chakra Ui
          </Heading>
          <Text>
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