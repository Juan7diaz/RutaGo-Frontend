import { Stack, useColorModeValue, Button } from '@chakra-ui/react'
import { FiMap } from 'react-icons/fi'

const ButtonHero = () => {
  return (
    <Stack
      spacing={{ base: 4, sm: 6 }}
      direction={{ base: 'column', sm: 'row' }}
    >
      <Button
        rounded={'full'}
        size={'lg'}
        fontWeight={'bold'}
        px={6}
        colorScheme={'red'}
        bg={useColorModeValue('secondary.light', 'secondary.dark')}
        _hover={{ bg: 'red.500' }}
        leftIcon={<FiMap />}
      >
        Ver Rutas
      </Button>
    </Stack>
  )
}

export default ButtonHero
