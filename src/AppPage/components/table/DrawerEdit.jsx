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
  Box
} from '@chakra-ui/react'
import { useForm } from '../../../hooks/useForm'

const DrawerEdit = ({ isOpen, onClose, header, data = {}, handleUpdate }) => {
  const removeQuotes = (str = '') => {
    return str.replace(/['"]+/g, '')
  }

  const formatText = (str = '') => {
    const valueString = JSON.stringify(str)
    return removeQuotes(valueString)
  }

  const handleSave = () => {
    handleUpdate(formState)
    onClose()
    onResetForm()
  }

  const handleCancel = () => {
    onClose()
    onResetForm()
  }

  const { formState, onInputChange, onResetForm } = useForm(data)

  return (
    <>
      <Drawer size={'md'} isOpen={isOpen} placement="right" onClose={handleCancel}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              {Object.keys(data).map((item, index) => (
                <Box key={index}>
                  <FormLabel htmlFor="username">{item}</FormLabel>
                  <Input id={item} value={formatText(formState[item])} name={item} onChange={onInputChange}/>
                </Box>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleCancel}>Cancelar</Button>
            <Button colorScheme="blue" onClick={handleSave}>Guardar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerEdit
