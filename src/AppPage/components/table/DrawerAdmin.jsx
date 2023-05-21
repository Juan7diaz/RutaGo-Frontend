import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Stack,
  FormLabel,
  Box,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from '../../../hooks/useForm'

const DrawerAdmin = ({ header, initialForm = {}, handleAction, icon, colorScheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const removeQuotes = (str = '') => {
    return str.replace(/['"]+/g, '')
  }

  const formatText = (str = '') => {
    const valueString = JSON.stringify(str)
    return removeQuotes(valueString)
  }

  const handleSave = () => {
    handleAction(formState)
    onClose()
  }

  const handleCancel = () => {
    onClose()
    onResetForm()
  }

  const { formState, onInputChange, onResetForm } = useForm(initialForm)

  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme={colorScheme}
        aria-label={'Boton para arir el drawer'}
        icon={icon}
      />
      <Drawer
        size={'md'}
        isOpen={isOpen}
        placement="right"
        onClose={handleCancel}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              {Object.keys(formState).map((item, index) => (
                <Box key={index}>
                  <FormLabel htmlFor="username">{item}</FormLabel>
                  <Input
                    id={item}
                    value={formatText(formState[item])}
                    name={item}
                    onChange={onInputChange}
                  />
                </Box>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleCancel}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={handleSave}>
              Guardar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerAdmin
