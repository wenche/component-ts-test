import React from 'react'
import { useState} from 'react'
import { Button, Tabs} from '@equinor/eds-core-react'
import AccordionFun from './Accordion'
import AvatarFun from './Avatar'
import BannerTest from './Banner'
import ChipFun from './Chip'
import TypographyTest from './Typography'
import TableTest from './Table'
const { TabList, Tab, TabPanels, TabPanel} = Tabs

const TabsFun = () => {
  const [activeTab, setActiveTab] = useState(1)

  const handleChange = (index: number) => {
    setActiveTab(index)
  }
  return (
    <Tabs onChange={handleChange} activeTab={activeTab}>
    <TabList>
    <Tab>Tab one</Tab>
    <Tab>Tab two</Tab>
    <Tab>Accordion fun</Tab>
    <Tab>Avatar</Tab>
    <Tab>Banner</Tab>
    <Tab>Chips</Tab>
    <Tab>Typo </Tab>
    <Tab>Table </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Hola</TabPanel>
      <TabPanel><Button variant="contained">Click me!</Button></TabPanel>
      <TabPanel><AccordionFun /></TabPanel>
      <TabPanel><AvatarFun /></TabPanel>
      <TabPanel><BannerTest /></TabPanel>
      <TabPanel><ChipFun /></TabPanel>
      <TabPanel><TypographyTest /></TabPanel>
      <TabPanel><TableTest /></TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default TabsFun