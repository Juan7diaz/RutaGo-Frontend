import { Flex, Icon } from '@chakra-ui/react'

const NavItem = ({ icon, idx, setSelectedRoute, children, ...rest }) => {
  const handleClick = () => {
    setSelectedRoute(idx)
  }

  return (
      <Flex
        onClick={handleClick}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'secondary.light',
          color: 'white'
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
  )
}

export default NavItem
