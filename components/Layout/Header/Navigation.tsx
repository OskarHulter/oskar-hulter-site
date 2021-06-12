
import link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Link, useDisclosure } from '@chakra-ui/react'
import { navMenuButtons } from '@constants'
import { ButtonProps } from '@types'


function NavLink({
  text,
  label,
  href = '/',
}: ButtonProps) {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      href={href}
      as={link}
      aria-label={label}
    >
      {text}
    </Link>
  )
}

export function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => isOpen ? onClose() : onOpen()
  
  return <>
      
    {navMenuButtons.map(({ text, label, href }, key) =>
      <NavLink
        text={text}
        label={label}
        href={href}
        key={key}
      />
    )}

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