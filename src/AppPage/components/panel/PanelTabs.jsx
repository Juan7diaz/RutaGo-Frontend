import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Container
} from '@chakra-ui/react'

const PanelTabs = ({ arrTabs = [] }) => {
  return (
    <Container maxW={'7xl'} pb={120} pt={20}>
      <Tabs
        variant="enclosed"
        colorScheme={useColorModeValue('secondary.light', 'secondary.light')}
        size="md"
        isLazy
      >
        <TabList>
          {arrTabs.map((tab, index) => (
            <Tab key={index}>{tab.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {arrTabs.map((tab, index) => (
            <TabPanel key={index}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default PanelTabs
