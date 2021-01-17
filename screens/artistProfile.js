import React, { Component,useEffect,useState } from 'react';
import {ScrollView,TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
const imagePath = "../assets/images/";
const iconPath = "../assets/images/icon/";
const favoriteList = (props) => {
    return (
      <>
        <ScrollView style={{backgroundColor: "#000",}}>
          <View style={{position: "relative",zIndex: 1000,backgroundColor: "#4D326F", color: "white", height: 96, flexDirection: "row", alignItems: "flex-end",justifyContent:"center", marginBottom: 50 } }>
            <TouchableOpacity style={{position: "absolute", left: 32,bottom:14,zIndex: 1000}} onPress={() => {props.navigation.navigate('Page1')}}>
              <Image source={require(`${iconPath}arrow_back_ios_24px.png`)}/>
            </TouchableOpacity>
            <Text style={{color: "white", fontSize: 18, paddingBottom: 18, }}>石丸 大貴</Text>
          </View>

          <View style={{width: 340, marginLeft: "auto", marginRight: "auto"}}>
            <Image style={{marginBottom: 18, marginLeft: "auto", marginRight: "auto"}} source={require(`${imagePath}artist_big.png`)}/>
            <Text style={{color: "white", fontSize:30 , marginBottom:18, textAlign: "center" }}>石丸 大貴</Text>
            <Text style={{fontSize:16, lineHeight:24, color: "white", marginBottom: 18}}>風の如く現れたど変態シンガーソングライター。そして台風のように散っていき、死ぬ。そんな石丸大貴のデビュー作の『FUZOKU』は...</Text>

            <Image style={{marginLeft: "auto", marginRight: "auto", marginBottom: 8}} source={require(`${iconPath}arrow_drop_down_circle_24px.png`)}/>

            <Text style={{fontSize: 24, marginBottom: 16, color: "white"}}>SNS</Text>
            
            <View style={{flexDirection: "row",justifyContent: "space-between",alignItems:"center", width: 240, marginLeft: "auto", marginRight:"auto", marginBottom: 70}}>
              <View>
                <Image style={{marginBottom: 4}} source={require(`${iconPath}circle_twitter.png`)}/>
                <Text style={{color: "white", textAlign:"center"}}>twitter</Text>
              </View>

              <View>
              <Image style={{marginBottom: 4}} source={require(`${iconPath}circle_instagram.png`)}/>
                <Text style={{color: "white", textAlign:"center"}}>twitter</Text>
              </View>
              
              <View>
              <Image style={{marginBottom: 4}} source={require(`${iconPath}circle_youtube.png`)}/>
                <Text style={{color: "white", textAlign:"center"}}>twitter</Text>
              </View>  
            </View>

            <View style={{marginBottom: 70}}>
              <View>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <Text style={{fontSize: 24, marginBottom: 16, color: "white"}}>曲一覧</Text>
                  <TouchableOpacity onPress={() => {props.navigation.navigate('Page4')}}>
                    <Text style={{fontSize: 16, color: "#3FCEF0"}}>全部見る</Text>
                  </TouchableOpacity>
                </View>
              </View>
                <TouchableOpacity style={styles.card}>
                  <Image source={require(`${imagePath}cover_sample01.png`)}/>
                  <View style={{marginLeft: 24}}>
                    <Text style={{fontSize:18, lineHeight: 24 , color: "white",marginBottom: 8}}>PACHINKO</Text>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.category}>人気NO.1</Text>
                      <Text style={styles.genre}>バラード</Text>
                      <Text style={styles.genre}>デュエット</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                  <Image source={require(`${imagePath}cover_sample02.png`)}/>
                  <View style={{marginLeft: 24}}>
                    <Text style={{fontSize:18, lineHeight: 24 , color: "white",marginBottom: 8}}>PACHINKO</Text>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.category}>人気NO.1</Text>
                      <Text style={styles.genre}>バラード</Text>
                      <Text style={styles.genre}>デュエット</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                  <Image source={require(`${imagePath}cover_sample03.png`)}/>
                  <View style={{marginLeft: 24}}>
                    <Text style={{fontSize:18, lineHeight: 24 , color: "white",marginBottom: 8}}>PACHINKO</Text>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.category}>人気NO.1</Text>
                      <Text style={styles.genre}>バラード</Text>
                      <Text style={styles.genre}>デュエット</Text>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>

              <Text style={{fontSize: 24, marginBottom: 16, color: "white"}}>ライブ情報</Text>
              <View style={{marginBottom: 70,backgroundColor: "#371B4E", paddingTop: 17,paddingBottom: 17, paddingLeft: 28,paddingRight: 28,}}>
                <Text style={{color: "white", fontSize: 22 , marginBottom: 16, fontWeight: "bold"}}>動物さんたち演奏会</Text>
                <Text style={{color: "white", fontSize: 16 , marginBottom: 16}}>2020/07/23(日) 17時00分</Text>
                <Text style={{color: "white", fontSize: 16 , marginBottom: 16}}>兵庫県西宮市室川町　西宮スタジオ</Text>
                <Text style={{color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 16}}>￥2000</Text>
                <View style={{backgroundColor: "white", paddingTop:12,paddingBottom:12,paddingLeft:18,paddingRight:18,}}>
                  <Text>偉大な東江様のスタジオをお借りして第2部の17時から出演させていただきます！詳細はこちらから↓</Text>
                  <Text>https://theoralcigarettes.com/news/list/4</Text>
                </View>
              </View>
          </View>
        </ScrollView>
      </>
    );
  };
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "#373737",
    borderBottomWidth:1,
    borderStyle: "solid"
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
export default favoriteList;
  