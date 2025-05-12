import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoriesComponent from './StoriesComponent'
import Profile from '../assets/Profile.jpg'
import flareon  from '../assets/flareon3.png'
import flareon2  from '../assets/flareon2.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'

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
              <View style={{flexDirection: 'row'}} >
                
                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center', paddingLeft: 14, paddingTop: 10}} >
                  <FontAwesomeIcon icon={faHeart} style={{color: 'white', marginRight: 5}} size={25} />
                  <Text style={{color: 'white', fontWeight: 'bold', marginRight: 10}} >{post.numOfLikes}</Text>

                  <FontAwesomeIcon icon={faComment} style={{color: 'white', transform: [{rotateY: '180deg'}], marginRight: 20 }} size={25} />

                  <FontAwesomeIcon icon={faPaperPlane} style={{color: 'white' }} size={25} />

                </View>

                <View style={{justifyContent: 'center', paddingTop: 10, marginRight: 10}}>
                  <FontAwesomeIcon icon={faBookmark} style={{color: 'white' }} size={25} />
                </View>
              </View>

              {/* description container */}
              <View style={{flex: 1, flexDirection: 'row', paddingTop: 5 }} >
                <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 14, paddingRight: 5}} >{post.userName}</Text>
                <Text style={{color: 'white'}} >{post.description}</Text>
              </View>

              {
                post.comments.map((comment, idx) => {

                  return (
                    <View key={idx} style={{flex: 1, flexDirection: 'row'}} >
                      <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 14, paddingRight: 5, paddingTop: 5}} >{comment.userWhoCommented}</Text>
                      <Text style={{color: 'white', paddingTop: 5}} >{comment.userComment}</Text>

                    </View>
                  )
                })
              }

              {/* add comment section for our user */}
              <View style={{flex: 1, flexDirection: 'row'}} >
                <Image source={post.profilePicture} style={{height: 30, width: 30, borderRadius: 50, marginLeft: 14, marginTop: 10}} />
                <Text style={{color: 'gainsboro', paddingLeft: 13, paddingTop: 8, alignSelf: 'center'}} >Add a Comment...</Text>
              </View>

              {/* date of post */}
              <View>
                <Text style={{color: 'gainsboro', paddingLeft: 14, paddingTop: 6}} >12 Hours Ago</Text>
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