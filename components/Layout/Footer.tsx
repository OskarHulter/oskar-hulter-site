import { Flex, Heading } from '@chakra-ui/react'


export function Footer() {

  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="brand.700"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
        Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
        </Heading>
      </Flex>
    </Flex>
  )
}
    