import React, { Component,useEffect,useState } from 'react';
import {ScrollView,TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
const imagePath = "../assets/images/";
const iconPath = "../assets/images/icon/";
const artistMusicList = (props) => {
    return (
      <View style={{backgroundColor: "#000",}}>
        <View style={{position: "relative",zIndex: 1000,backgroundColor: "#4D326F", color: "white", height: 96, flexDirection: "row", alignItems: "flex-end",justifyContent:"center", marginBottom: 16 } }>
          <TouchableOpacity style={{position: "absolute", left: 32,bottom:14,zIndex: 1000}} onPress={() => {props.navigation.navigate('Page3')}}>
            <Image source={require(`${iconPath}arrow_back_ios_24px.png`)}/>
          </TouchableOpacity>
          <Text style={{color: "white", fontSize: 18, paddingBottom: 18, }}>石丸大貴の曲一覧</Text>
        </View>

        <ScrollView style={{position: "relative", zIndex:0}}>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:20, lineHeight: 24, color: "white", marginBottom: 8}}>lucky boy</Text>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.category}>人気NO.1</Text>
                    <Text style={styles.genre}>バラード</Text>
                  </View>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>
        </ScrollView> 

      </View>
      
    );
  };
const styles = StyleSheet.create({
  favoriteMusicItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 340,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 16,
    paddingBottom: 16,
  },
  category: {
    backgroundColor: "#563075",
    borderColor: "white",
    borderWidth: 0.5,
    borderStyle: "solid",
    color: "white",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
  },
  genre: {
    color: "white",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: "white",
    borderWidth: 0.5,
    borderStyle: "solid",
    marginLeft: 8
  }
});
export default artistMusicList;
  