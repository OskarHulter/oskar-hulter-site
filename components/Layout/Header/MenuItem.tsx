import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ButtonProps } from 'types'
import { IconButton, LinkBox, LinkOverlay } from '@chakra-ui/react'


export function MenuItem({
  text,
  label,
  href = '/',
  icon,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === href) setIsActive(!isActive)
  }, [router.pathname])

  return (
    <LinkBox>
      <IconButton icon={icon} aria-label={label} isActive={isActive}>

        <Link href={href}>
          <LinkOverlay>{text}</LinkOverlay>
        </Link>
      </IconButton>
    </ LinkBox>
  ) 
}