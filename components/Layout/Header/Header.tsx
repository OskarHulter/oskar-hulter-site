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
      padding={6}
      bg='brand.900'
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
