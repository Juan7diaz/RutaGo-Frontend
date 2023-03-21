import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'

export default function StatsGridWithImage () {
  return (
    <Box bg={useColorModeValue('primary.light', 'primary.dark')} position={'relative'} id="#conocenos">
      <Container maxW={'7xl'} zIndex={0} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 20, md: 100, xl: 100 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                RUTA-GO
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                About es una plataforma creada como parte del trabajo de
                Universidad Del Magdalena, que tiene como objetivo ofrecer
                información detallada sobre las rutas de busetas en la ciudad de
                Santa Marta.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  )
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
)

const stats = [
  {
    title: 'Información actualizada',
    content: (
      <>
        <StatsText>La plataforma</StatsText> ha sido diseñada pensando en la
        comodidad y facilidad de uso para los usuarios. La navegación intuitiva
        y las funcionalidades simples permiten a los usuarios encontrar
        rápidamente la información que necesitan.
      </>
    )
  },
  {
    title: 'Accesibilidad',
    content: (
      <>
        <StatsText>Es accesible</StatsText> desde cualquier dispositivo con
        conexión a internet, lo que la hace fácilmente disponible para todos los
        usuarios. Además, la plataforma está diseñada para ser compatible con
        diferentes navegadores y dispositivos,
      </>
    )
  },
  {
    title: 'Información actualizada',
    content: (
      <>
        <StatsText>Se actualiza</StatsText> periódicamente con la información
        más reciente sobre las rutas de busetas en la ciudad de Santa Marta.
        Esto garantiza que los usuarios puedan planificar sus viajes con la
        información más precisa y actualizada
      </>
    )
  }
]
