import React, { FC } from 'react'
import { Flex, Heading } from '@chakra-ui/react'


const Footer: FC = ({ ...props }) =>
  <Flex
    as="footer"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding={6}
    bg="teal.500"
    color="white"
    {...props}
  >
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg" letterSpacing={'tighter'}>
      Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
      </Heading>
    </Flex>
  </Flex>
    

export default Footer