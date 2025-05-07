import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import Profile from '../assets/Profile.jpg'
import flareon  from '../assets/flareon3.png'
import flareon2  from '../assets/flareon2.png'

export default function PostComponent() {
  const [post, setPost] = useState([
    {
      profilePicture: Profile,
      userName: "Kase",
      postImage: flareon,
      numOfLikes: "9.5K",
      description: "Pixel Flarion posted for review",
      comments: [
        {
          userWhoCommented: "Flareon_Flood",
          userComment: "10 out of 10"
        }
      ]
    },
    {
      profilePicture: flareon2,
      userName: "Flareon_Flood",
      postImage: Profile,
      numOfLikes: "16.2K",
      description: "Girl knows how to make a good flarion",
      comments: [
        {
          userWhoCommented: "Kase",
          userComment: "Thanks Flare!"
        }
      ]
    }
  ]);

  return (
    <ScrollView>
      <StoriesComponent />
      {
        post.map((post, idx) => {

          return(
            //this will be our post view
            <View key={idx}>
              {/* this view will contain your username, profile img, and the three dots */}
              <View style={styles.profileNav}>
                <View style={{paddingTop: 10}}>
                  <Image source={post.profilePicture} style={styles.profileImg} />
                </View>

                {/* username container */}
                <View style={styles.usernameContainer}>
                  <Text style={styles.usernameText} >{post.userName}</Text>
                </View>

                {/* ellipsis container */}
                <View style={styles.dotsContainer} >
                  <Text style={styles.dotsText} >.</Text>
                  <Text style={styles.dotsText} >.</Text>
                  <Text style={styles.dotsText} >.</Text>
                </View>

              </View>

              {/* Container for our Image Post */}
              <View>
                <Image source={post.postImage} style={styles.postImg}/>
              </View>

              {/* Parent Container for our Icons and Likes*/}
              <View>
                
              </View>

            </View>
          )
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profileNav: {
    flexDirection: "row",
    paddingBottom: 10
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  usernameContainer: {
    paddingLeft: 15,
    justifyContent: "center",
    paddingTop: 10,
  },
  usernameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  dotsContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10
  },
  dotsText: {
    color: "white",
    fontSize: 14,
    lineHeight: 10
  },
  postImg:{
    height:400,
    width: "100%",

  }
})