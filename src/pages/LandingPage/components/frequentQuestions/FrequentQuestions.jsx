import { Container, Heading } from '@chakra-ui/react'
import Accordion from './Accordion'

const FrequentQuestions = () => {
  return (
    <Container maxW={'7xl'} zIndex={0} position={'relative'} py={{ base: 20, md: 100, xl: 100 }}>
        <Heading
            color={'secondary.light'}
            mb={5}
            fontSize={{ base: '3xl', md: '5xl' }}
          >
            PREGUNTAS MÁS FRECUENTES
          </Heading>
          <Accordion />

    </Container>
  )
}

export default FrequentQuestions
