
//rnfs
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GrandHotel_400Regular, useFonts} from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export default function HeaderComponent() {

    //in order to use fonts we must use the useFonts hook
    const [isLoaded] = useFonts({
        GrandHotel_400Regular
    });

    //because our fonts are packaged within the app, we wan to check if the fonts are loaded first before displaying them to avoid Ugly Jumping

    if(!isLoaded){
        return null;
    }


  return (
    <View style={styles.HeaderContainer}>
        {/* First View will represent the div our text *Instagram* is in */}
      <View>
        <Text style={[styles.WhiteText, styles.HeaderText, {fontFamily: "GrandHotel_400Regular"}]} >Instagram</Text>
      </View>

      {/* This 'div' will be where our buttons and icons are */}
      <View style={{flexDirection: 'row'}}>
        <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 25}} size={25} />
        <FontAwesomeIcon icon={faPaperPlane} style={{color: "white", marginRight: 25}} size={25} />        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeaderContainer: {
      marginTop: 5,
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    WhiteText: {
      color: 'white'
    },
    HeaderText:{
      fontSize: 35
    }
})