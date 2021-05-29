import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'


export function DarkModeToggle () {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      variant='outline'
      aria-label='Color mode switcher'
      onClick={toggleColorMode}
    />
  )
}
