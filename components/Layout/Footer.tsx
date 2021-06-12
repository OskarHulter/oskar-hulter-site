import { Flex, Image, Text } from '@chakra-ui/react'


export function Footer() {

  return (
    <Flex
      w='full'
      h=''
      as="footer"
      align="center"
      justify='center'
      bg="transparent"
      position='absolute'
      left='0'
      bottom='0'
    >
      <Text size="md" letterSpacing={'tighter'}>
        Built with
        <Image
          src="/netliheart.svg"
          alt="Netlify Heart"
          maxH='30px'
        />
        &copy; Oskar Hulter
      </Text>
    </Flex>
  )
}
    