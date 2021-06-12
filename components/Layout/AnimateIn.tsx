import { Fade } from '@chakra-ui/react'
import { BaseProps } from '@types'


export function AnimateIn({ children }: BaseProps) {

  return (
    <Fade in unmountOnExit>
      {children}
    </Fade>
  )
}
