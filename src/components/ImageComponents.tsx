import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export class ImageComponents extends Component {
  render() {
    return (
      <View>
        <Image source={require("../assets/logo_react.png")} style={{width:200, height:200}}/>
      </View>
    )
  }
}

export default ImageComponents