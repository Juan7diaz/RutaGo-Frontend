import {
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function MobileNavItem ({ label, children, href }) {
  const { onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
    <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
    >
        <Text
        fontWeight={600}
        color={useColorModeValue('text.light', 'text.dark')}
        >
        <Link to={href ?? '#'}>
          {label}
        </Link>
        </Text>
    </Flex>
    </Stack>
  )
}
