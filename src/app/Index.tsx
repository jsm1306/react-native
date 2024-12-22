import { View, Text } from 'react-native'
import React from 'react'
import Name from './Name'
import Age from './Age'
import TextComponents from '../components/TextComponents'
import ViewComponents from '../components/ViewComponents'
import ButtonComponents from '../components/ButtonComponents'
import ImageComponents from '../components/ImageComponents'
import DynamicComponent from '../components/DynamicComponent'
import ExternalStyle from '../components/ExternalStyle'
import styles from '../utils/style'
const index = () => {
  return (
    <View style={styles.page}>
      
     <TextComponents />
     <ViewComponents />
     <ButtonComponents/>
     <ImageComponents/>
     <DynamicComponent/>
     <ExternalStyle />
    </View>

  )
}

export default index