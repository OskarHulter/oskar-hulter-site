import React, { FC } from 'react'
import { IconButton } from '@chakra-ui/button'
import { Icon } from '@components/SocialButtons'

export const SocialButton: FC<Props> = ({ icon }) => 
  <IconButton
    href={icon.href}
    aria-label='social-media-link'
    target="_blank"
    rel="noreferrer"
    icon={icon.icon}
  />

type Props = {
  icon: Icon
}

/*
const StyledSocialButton = styled.button`
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin: 7px;
    padding-top: 5px;
    background-image: linear-gradient(to top, teal 0%, purple 100%);
    cursor: pointer;
    transition: 800ms ease all;

    :hover {
        color: deeppink;
    }
`
*/