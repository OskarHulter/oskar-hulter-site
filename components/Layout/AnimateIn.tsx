import { BaseProps } from 'types'
import { Fade } from '@chakra-ui/react'


export function AnimateIn({ children }: BaseProps) {

  return (
    <Fade in unmountOnExit>
      {children}
    </Fade>
  )
}
