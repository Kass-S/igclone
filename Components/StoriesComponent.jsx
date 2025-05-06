import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Profile from '../assets/Profile.jpg'

export default function StoriesComponent() {
  return (
    //we are creating a carousel by adding horizontal to our scroll view component
    <ScrollView horizontal >
      
      {/* Container that holds our Stories */}
      <View style={styles.container} >
        {/* Gradiant border around the image */}
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          {/* this view will be our image wrapper */}
          <View style={styles.imageWrapper} >
            {/* profile image */}
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>

      <View style={styles.container} >
        <LinearGradient style={styles.linearGradient} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "#4f5bd5"]} >
          <View style={styles.imageWrapper} >
            <Image source={Profile} style={styles.image} />
          </View>
        </LinearGradient>
        <Text style={styles.labelText} >Kase</Text>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    width: 94,
    height: 94,
    borderRadius: 50, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5
  }
})