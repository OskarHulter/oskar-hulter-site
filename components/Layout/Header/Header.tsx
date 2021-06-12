import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar, Box, Button, Flex, IconButton, Menu, MenuButton, Stack, useDisclosure,
} from '@chakra-ui/react'
import { DarkModeToggle } from '@components/Layout/Header/DarkModeToggle'
import { navMenuButtons } from '@constants'
import { MenuItem } from './MenuItem'


export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        w='full'
        bg='transparent'
        px={4}
        as='header'
        position='absolute'
        left='0'
        top='0'
      >
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          bg='transparent'
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Stack
            as='nav'
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems='center'
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            {navMenuButtons.map(({ text, label, href }, key) =>
              <MenuItem
                text={text}
                label={label}
                href={href}
                key={key}
              />
            )}
          </Stack>
          <Flex alignItems={'center'}>


            <Menu>
              <DarkModeToggle />
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
       
      </Box>


    </>
  )
}


