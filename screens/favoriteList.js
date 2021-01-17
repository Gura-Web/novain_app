import React, { Component,useEffect,useState } from 'react';
import {ScrollView,TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
const imagePath = "../assets/images/";
const iconPath = "../assets/images/icon/";
const favoriteList = (props) => {
    return (
      <View style={{backgroundColor: "#000",}}>
        <View style={{position: "relative",zIndex: 1000,backgroundColor: "#4D326F", color: "white", height: 96, flexDirection: "row", alignItems: "flex-end",justifyContent:"center", marginBottom: 16 } }>
          <TouchableOpacity style={{position: "absolute", left: 32,bottom:14,zIndex: 1000}} onPress={() => {props.navigation.navigate('Page1')}}>
            <Image source={require(`${iconPath}arrow_back_ios_24px.png`)}/>
          </TouchableOpacity>
          <Text style={{color: "white", fontSize: 18, paddingBottom: 18, }}>お気に入り一覧</Text>
        </View>

        <ScrollView style={{position: "relative", zIndex:0}}>
          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:16, lineHeight: 24, color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 11, lineHeight: 16, color: "#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.favoriteMusicItem}>
              <View  style={{flexDirection: "row",alignItems: "center"}}>
                <Image source={require(`${imagePath}cover_sample01.png`)}/>
                <View style={{marginLeft: 24}}>
                  <Text style={{fontSize:18, lineHeight: 24 , color: "white"}}>lucky boy</Text>
                  <Text style={{fontSize: 14, lineHeight: 16, color:"#9D9D9D"}}>石丸 大貴</Text>
                </View>
              </View>
              <Image source={require(`${iconPath}favorite_gray_24px.png`)} style={{width: 32, height: 32}}/>
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
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 8,
    paddingBottom: 8,

  }
});
export default favoriteList;
  