import { Flex, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      position={'fixed'}
      zIndex={1}
      {...rest}>
      <IconButton
        colorScheme='orange'
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

    </Flex>
  )
}

export default MobileNav
