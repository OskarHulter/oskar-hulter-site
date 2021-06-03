
import { BaseProps } from 'types'
import { AddIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar, Box, Button, Flex, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuDivider,
  MenuItem, MenuList, Stack, useColorModeValue, useDisclosure,
} from '@chakra-ui/react'
import { DarkModeToggle } from '@components/Layout/Header/DarkModeToggle'


const Links = ['Blog', 'About', 'Contact']

function NavLink({ children }: BaseProps) {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('primary.200', 'primary.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  )
}
export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={useColorModeValue('primary.100', 'primary.900')}
        px={4}
        as='header'
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading as='h1' size='lg' letterSpacing='tighter'>
          Oskar Hulter Web Dev
            </Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(link => 
                <NavLink key={link}>{link}</NavLink>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
             Contact 
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Blog</MenuItem>
                <MenuItem>About2</MenuItem>
                <MenuDivider />
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? 
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => 
                <NavLink key={link}>{link}</NavLink>
              )}
            </Stack>
          </Box>
          : null}
      </Box>

      <Box p={4}>
        <DarkModeToggle />
      </Box>
    </>
  )
}


