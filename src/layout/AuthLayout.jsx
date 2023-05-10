import { Flex, Box, Stack, useColorModeValue } from '@chakra-ui/react'

const AuthLayout = ({ children }) => {
  return (
    <Flex align={'center'} justify={'center'}>
      <Box
        width={'100vw'}
        height={'100vh'}
        backgroundImage={"url('/pictures/LoginBgDark.jpeg')"}
        backgroundPosition={'center center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        filter={'auto'}
        blur={'1.5px'}
      />
      <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6} position={'absolute'}>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={10}
          color={useColorModeValue('text.light', 'text.dark')}
          backgroundColor={useColorModeValue('primary.light', 'primary.dark')}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  )
}

export default AuthLayout
