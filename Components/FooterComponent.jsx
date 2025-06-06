import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClapperboard, faHomeAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import Profile from '../assets/Profile.jpg'

export default function FooterComponent() {
  return (
    <View style={styles.FooterContainer} >
      <FontAwesomeIcon icon={faHomeAlt} style={{color: 'white'}} size={27} />
      <FontAwesomeIcon icon={faSearch} style={{color: 'white'}} size={27} />
      <FontAwesomeIcon icon={faPlusSquare} style={{color: 'white'}} size={27} />
      <FontAwesomeIcon icon={faClapperboard} style={{color: 'white'}} size={27} />
      <Image source={Profile} style={{width: 27, height: 27, borderRadius: 13.5}} />
    </View>
  )
}

const styles = StyleSheet.create({
  FooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    alignItems: 'center',
    borderTopWidth: .05,
    borderTopColor: "rgba(255, 255, 255, 0.2"

  }
})