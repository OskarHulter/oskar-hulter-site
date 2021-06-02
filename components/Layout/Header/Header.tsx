import { Flex, Heading } from '@chakra-ui/react'
import { DarkModeToggle } from '@components/Layout/Header/DarkModeToggle'
import { Navigation } from '@components/Layout/Header/Navigation'


export function Header() {

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      wrap='wrap'
      p={6}
      mb={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing='tighter'>
          Oskar Hulter Web Dev
        </Heading>
      </Flex>

      <Navigation />
    
      <DarkModeToggle />
    </Flex>
  )
}
