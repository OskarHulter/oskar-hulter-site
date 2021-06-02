import { AiFillCode, AiFillHome, AiFillMail, AiFillStar } from 'react-icons/ai'
import { ButtonProps } from 'types'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Stack, useDisclosure } from '@chakra-ui/react'
import { MenuItem } from './MenuItem'


const aboutButton: ButtonProps = {
  text: 'About',
  label: 'About Page',
  href: '/about',
  icon: <AiFillStar />,
}
const homeButton = {
  text: 'Home',
  label: 'Home link',
  href: '/',
  icon: <AiFillHome/>
}
const blogButton: ButtonProps = {
  text: 'Blog',
  label: 'Blog Page',
  href: '/blog',
  icon: <AiFillCode />,
}
const contactButton: ButtonProps = {
  text: 'Contact',
  label: 'Contact Information',
  href: '/contact',
  icon: <AiFillMail />,
}

const navMenuButtons: ButtonProps[] = [
  homeButton,
  blogButton,
  aboutButton,
  contactButton
]

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => isOpen ? onClose() : onOpen()
  
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
      
      {navMenuButtons.map(({ text, label, href, icon }, key) =>
        <MenuItem
          text={text}
          label={label}
          href={href}
          icon={icon}
          key={key}
        />
      )}

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
        _hover={{ bg: 'brand.700', borderColor: 'brand.900' }}
      >
        Contact
      </Button>
    </Box>
  </>
}