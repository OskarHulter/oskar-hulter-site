import React, { FC } from 'react'
import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Navigation from '@components/Layout/Header/Navigation'

const Header: FC = ({ ...props }) => {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as='header'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      bg='teal.500'
      color='white'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing='tighter'>
          Oskar Hulter Web Dev
        </Heading>
      </Flex>

      <Navigation />
    
      <IconButton
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
        variant='outline'
        colorScheme='cyan'
        aria-label='Color mode switcher'
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header