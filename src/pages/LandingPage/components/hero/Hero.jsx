import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import Blob from './Blob'

const URL_IMAGE = 'https://pbs.twimg.com/media/E8_rlNUX0AUWXZ6.jpg:large'

export default function Hero () {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.100',
                zIndex: -1
              }}
            >
              Descubre la red de transporte público de
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Santa Marta
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Descubre la amplia red de rutas de transporte público de pasajeros
            que se extienden por toda la ciudad de Santa Marta con nuestra guía
            completa. Obtén información detallada sobre las rutas, paradas y
            frecuencias de los autobuses y otras formas de transporte público
            que te llevarán a tu destino en la ciudad.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={useColorModeValue('primary')}
              _hover={{ bg: 'red.500' }}
            >
              Ver en mapa
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            zIndex={-1}
            color={useColorModeValue('red.100', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={URL_IMAGE}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
