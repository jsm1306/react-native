import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ViewComponents = () => {
  return (
    <View style={styles.container}>
      This is ViewComponents
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ViewComponents