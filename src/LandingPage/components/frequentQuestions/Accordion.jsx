import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'
import { frequentQuestions } from '../../../data/frequentQuestions'

const Accordion = () => {
  return (
    <ChakraAccordion defaultIndex={[0]} allowToggle>
      {frequentQuestions.map((question, i) => (
        <AccordionItem key={i}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={'semibold'}>
              {question.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>{question.body}</AccordionPanel>
        </AccordionItem>
      ))}
    </ChakraAccordion>
  )
}

export default Accordion
