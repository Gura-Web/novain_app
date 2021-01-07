import React, { Component,useEffect } from 'react';
import Swiper from 'react-native-deck-swiper';
import {TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { Audio } from 'expo-av';

const musicList = [
  {
    artistName: "石丸 大貴", 
    musicName: "愚者のエンドロール", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/1.jpg"),
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    artistName: "石丸 大貴２", 
    musicName: "愚者のエンドロール2", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/2.jpg"),
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    artistName: "石丸 大貴３", 
    musicName: "愚者のエンドロール3", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/7.jpg"),
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  
]

export default class Exemple extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: musicList,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      panelProps: {
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => this.closePanel(),
        onPressCloseButton: () => this.closePanel(),
      },
      isPanelActive: true,
      isBackPressed: false
    }
  }

  componentdidmount() {
    
  }

  musicPlay = async (data)=> {
    await data.audioObject.loadAsync(data.music);
    await data.audioObject.playAsync();
  }
 
  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Image source={card.imageName} resizeMode={'cover'} style={{width:460,height:530,marginLeft: -50}} />
        <Text>{card.artistName + card.musicName}</Text>
        {card.categories.map((category,index) => {
          return (<Text key={index}>{category.name} {card.imageName}</Text>)
        })}
        {card.genres.map(genre => {
          return (<Text key={index}>{genre.name}</Text>)
        })}
      </View>
    )
  };

  onSwiped = (type) => {
    if(type == "general") {
    }
  }

  swipeLeft = () => {
    if(this.state.cardIndex < musicList.length - 1) { // index番号が音楽の数を超えないように
      this.setState({
        cardIndex: this.state.cardIndex + 1,
        isBackPressed: true,
      });
    }
  };

  swipeRight = () => {
    if(this.state.cardIndex < musicList.length - 1) { // index番号が音楽の数を超えないように
      this.setState({
        cardIndex: this.state.cardIndex + 1,
        isBackPressed: true,
      });
    }
  };

  
  swipeBack = () => {
    if(!this.state.isBackPressed && this.state.cardIndex != 0) { // 一回しか戻れないようにする
      this.swiper.swipeBack();
      this.setState({
        cardIndex: this.state.cardIndex - 1,
        isBackPressed: false,
      });
    }
  };

  closePanel = () => {
    
  };


  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.searchBtn}>曲を探す{this.state.cardIndex}{this.state.isBackPressed ? "true": "falses"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerRightTop} onPress={() => {}}>
                <Image source={require('./assets/images/icon/favorite_24px_1x.png')}/>
              </TouchableOpacity>
        </View>

        <SwipeablePanel {...this.state.panelProps} isActive={this.state.isPanelActive} noBackgroundOpacity={true} showCloseButton={false} openLarge={false} style={{backgroundColor:"black"}} barStyle={{backgroundColor: "#8A8A8A", width:140}}>
          {/* 曲概要 */}
          <Text style={{marginTop: 12,fontSize: 28,fontWeight: 'bold',textAlign:"center",color: "#fff"}}>{musicList[this.state.cardIndex].musicName}</Text>
          <Text style={{marginTop: 4,fontSize: 16,textAlign:"center",color: "#9D9D9D"}}>{musicList[this.state.cardIndex].artistName}</Text>
          {/* 操作ボタンを囲む */}
          <View style={{flexDirection:'row',justifyContent:'center',marginTop: 20}}>
            {/* 操作ボタン */}
              <TouchableOpacity style={[styles.buttonSmall,{ marginRight: 12,marginTop:30},!this.state.isBackPressed && {opacity: 0.3}]} onPress={() => {
                  this.swipeBack();
            }}>
              <Image source={require('./assets/images/icon/reply_24px.png')} resizeMode={'contain'} style={[{ height: 40, width: 40}]} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{ marginRight: 16}]} onPress={() => {
              if(this.state.cardIndex < musicList.length - 1) this.swiper.swipeLeft();
              // this.swiper.swipeLeft();
            }}>
              <Image source={require('./assets/images/icon/close_24px.png')} resizeMode={'contain'} style={{ height: 48, width: 48 }} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button]} onPress={() => {
              if(this.state.cardIndex < musicList.length - 1) this.swiper.swipeRight();
              // this.swiper.swipeRight();
            }}>
              <Image source={require('./assets/images/icon/favorite_24px.png')} resizeMode={'contain'} style={{ height: 48, width: 48 }} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonSmall,{ marginLeft: 12, marginTop:30}]} onPress={() => {
            }}>
              <Image source={require('./assets/images/icon/pause_24px.png')} resizeMode={'contain'} style={{ height: 40, width: 40 }} />
            </TouchableOpacity>
        </View> 
      </SwipeablePanel>  
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={this.onSwiped('general')}
          onSwipedLeft={() => this.swipeLeft()}
          onSwipedRight={() => this.swipeRight()}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}

          // onTapCard={()=> this.swipeLeft()}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}

          // onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={overlayLabels}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          {/* <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' /> */}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header : {
    position:'absolute',
    backgroundColor: 'black',
    top: 0,
    right:0,
    left: 0,
    height: 96,
    width:"100%",
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    zIndex:100,
    paddingTop: 35,
  },
  searchBtn: {
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: "solid",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 60,
    paddingRight: 60,
  },
  headerRightTop: {
    color: "#fff",
    position: "absolute",
    top: 46,
    right: 28,
  },
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSmall: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {

  },

})


const overlayLabels = {
    bottom: {
      title: 'BLEAH',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    },
    left: {
      title: 'NOPE',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: -30
        }
      }
    },
    right: {
      title: 'LIKE',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: 30
        }
      }
    },
    top: {
      title: 'SUPER LIKE',
      style: {
        label: {
          backgroundColor: 'black',
          borderColor: 'black',
          color: 'white',
          borderWidth: 1
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    }
  }