import { Heading, Text, useColorModeValue } from '@chakra-ui/react'

export const HeroDescription = () => {
  return (
    <>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
      >
        <Text
          as={'span'}
          position={'relative'}
          color={useColorModeValue('secondary.light', 'secondary.dark')}
        >
          Descubre la red de transporte público de Santa Marta
        </Text>
      </Heading>
      <Text color={useColorModeValue('darktext.light', 'darktext.dark')}>
        Descubre la amplia red de rutas de transporte público de pasajeros que
        se extienden por toda la ciudad de Santa Marta con nuestra guía
        completa. Obtén información detallada sobre las rutas, paradas y
        frecuencias de los autobuses y otras formas de transporte público que te
        llevarán a tu destino en la ciudad.
      </Text>
    </>
  )
}
