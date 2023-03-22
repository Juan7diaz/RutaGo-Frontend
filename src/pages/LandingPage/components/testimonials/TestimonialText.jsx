import { Text, useColorModeValue } from '@chakra-ui/react'

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

export default TestimonialText
