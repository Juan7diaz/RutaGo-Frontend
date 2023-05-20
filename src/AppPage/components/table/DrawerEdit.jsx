import React from 'react'
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

const DrawerEdit = ({ isOpen, onClose, header, data = {} }) => {
  const removeQuotes = (str) => {
    return str.replace(/['"]+/g, '')
  }

  const formatText = (str) => {
    const valueString = JSON.stringify(str)
    return removeQuotes(valueString)
  }

  return (
    <>
      <Drawer size={'md'} isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              {Object.keys(data).map((item, index) => (
                <Box key={index}>
                  <FormLabel htmlFor="username">{item}</FormLabel>
                  <Input id={item} value={formatText(data[item])} />
                </Box>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerEdit
