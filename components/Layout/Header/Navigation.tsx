import React, { FC } from 'react'
import Link from 'next/link'
import { Box, Button, Stack, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navigation: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return <>
    <Stack
      as='nav'
      direction={{ base: 'column', md: 'row' }}
      display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems='center'
      flexGrow={1}
      mt={{ base: 4, md: 0 }}
    >
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </Stack>

    <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
      <HamburgerIcon />
    </Box>

    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      mt={{ base: 4, md: 0 }}
    >
      <Button
        variant='outline'
        _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
      >
        Contact
      </Button>
    </Box>
  </>
}

export default Navigation