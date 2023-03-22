import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { testimonials } from '../../../../data/testiminials'
import TestimonialAvatar from './TestimonialAvatar'
import TestimonialContent from './TestimonialContent'
import TestimonialHeading from './TestimonialHeading'
import TestimonialText from './TestimonialText'

export default function Testimonials () {
  return (
    <Box>
      <Container maxW={'7xl'} py={5} as={Stack} spacing={12}>
        <Stack spacing={0}>
          <Heading
            color={useColorModeValue('secondary.light', 'secondary.dark')}
            fontSize={{ base: '3xl', md: '5xl' }}
          >
            Testimonios de usuarios satisfechos
          </Heading>
          <Text>
            Lo que dicen los usuarios de nuestra aplicación de rutas de busetas
            en Santa Marta
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonials.map((testimonial, index) => (
            <Box key={index}>
              <TestimonialContent>
                <TestimonialHeading>{testimonial.title}</TestimonialHeading>
                <TestimonialText>{testimonial.description}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={testimonial.avatar}
                name={testimonial.name}
                title={testimonial.profession}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
