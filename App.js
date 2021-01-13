import React, { Component,useEffect } from 'react';
import Swiper from 'react-native-deck-swiper';
import {TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { Audio } from 'expo-av';
import GestureRecognizer from 'react-native-swipe-gestures';

// import {musicList} from './assets/musiclist';
const musicList = [
  {
    id: 1,
    artistName: "東江 キャノン砲", 
    musicName: "ビッグ東江", 
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
    music: require('./assets/music1.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 2,
    artistName: "東江 キャノン砲", 
    musicName: "スマイル東江", 
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
    music: require('./assets/music2.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 3,
    artistName: "東江 キャノン砲", 
    musicName: "泣きそう東江", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/3.jpg"),
    music: require('./assets/music3.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 4,
    artistName: "東江 キャノン砲", 
    musicName: "ハッピー東江", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/4.jpg"),
    music: require('./assets/music4.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 5,
    artistName: "東江 キャノン砲", 
    musicName: "笑っちゃいそう東江", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/5.jpg"),
    music: require('./assets/music5.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 6,
    artistName: "東江 キャノン砲", 
    musicName: "不敵な笑み東江", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/6.jpg"),
    music: require('./assets/music6.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 7,
    artistName: "東江 キャノン砲", 
    musicName: "吹き出す東江", 
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
    music: require('./assets/music7.mp3'),
    audioObject: new Audio.Sound()
  },
  
  {
    id: 8,
    artistName: "いしまる ひろき", 
    musicName: "ECC名物", 
    categories: [
      {id:1, name:"ライブの定番曲"},
      {id:2, name:"盛り上がり曲"},
      {id:3, name:"オススメ"},
    ],
    genres: [
      {id:1, name:"バラード"},
      {id:2, name:"デュエット"},
    ],
    imageName: require("./assets/images/isimaru.png"),
    music: require('./assets/music1.mp3'),
    audioObject: new Audio.Sound()
  },
  {
    id: 9,
    artistName: "東江 キャノン砲", 
    musicName: "ビッグ東江", 
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
    music: require('./assets/music1.mp3'),
    audioObject: new Audio.Sound()
  },
]

const iconPath = "./assets/images/icon/";
const sound = new Audio.Sound();
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
        showCloseButton: true,
        onClose: () => this.closePanel(),
        onPressCloseButton: () => this.closePanel(),
      },
      isPanelActive: true,
      isBackPressed: false,
      isMusicStop: false,
      isDetailOpen: false,
    }
  }

  componentdidmount() {
    
  }
 
  renderCard = (card, index) => {
    return (
      <>
      <View style={styles.card}>
        <Image source={card.imageName} resizeMode={'cover'} style={{width:460,height:530,marginLeft: -50}} />
        <View style={styles.cardTags}>
          <View style={styles.categoryTags}>
            {card.categories.map((category,i) => {
              return (<Text style={styles.categoryTag} key={i}>{category.name} {card.imageName}</Text>)
            })}
          </View>
          <View style={styles.genreTags}>
            {card.genres.map((genre,i) => {
              return (<Text style={styles.genreTag} key={i}>{genre.name}</Text>)
            })}
          </View>
        </View>
        <View style={styles.infoBtn}>
          <Image source={require(`${iconPath}info_24px.png`)} resizeMode={'contain'} style={[{ height: 45, width: 45}]} />
        </View>
      </View>
      
      </>
    )
  };

  onSwiped = async () => {
    // 前の音楽を停止
    await sound.unloadAsync();
    // 次の曲を再生
    let musicPath = musicList[this.state.cardIndex].music;
    await sound.loadAsync(musicPath);
    await sound.playAsync();
  }

  swipeLeft = () => {
    // カードを進める
    if(this.state.cardIndex < musicList.length - 1) { // index番号が音楽の数を超えないように
      this.setState({
        cardIndex: this.state.cardIndex + 1,
        isBackPressed: true,
      });
    }
  };

  swipeRight = async() => {
    // カードを進める
    if(this.state.cardIndex < musicList.length - 1) { // index番号が音楽の数を超えないように
      this.setState({
        cardIndex: this.state.cardIndex + 1,
        isBackPressed: true,
      });
    }
  };

  
  swipeBack = () => {
    if(this.state.isBackPressed && this.state.cardIndex != 0) { // 一回しか戻れないようにする
      this.swiper.swipeBack();
      this.setState({
        cardIndex: this.state.cardIndex - 1,
        isBackPressed: false,
      });
    }
  };

  closePanel = () => {
    
  };

  onStopMusic = async ()=> {
    await sound.unloadAsync();
    if(this.state.isMusicStop) {
      this.setState({isMusicStop: false});
    } else {
      this.setState({isMusicStop: true});
    }
  }

  hello = ()=> {
    if(this.state.isDetailOpen) {
      this.setState({ isDetailOpen: false });
    } else {
      this.setState({ isDetailOpen: true });
    }
    console.log(this.state.isDetailOpen);
  }

  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.searchBtn}>曲を探す{this.state.isDetailOpen && "hello"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerRightTop} onPress={() => {}}>
                <Image source={require(`${iconPath}favorite_24px_1x.png`)}/>
              </TouchableOpacity>
        </View>
          {/* <TouchableOpacity style={{position:"absolute",bottom:0,zIndex:1000,width:"100%",height: 1000}} onPress={()=> console.log("A")}> */}
            <SwipeablePanel {...this.state.panelProps} swipeFunc={this.hello} isActive={this.state.isPanelActive} noBackgroundOpacity={true} showCloseButton={false} openLarge={false} 
            style={{backgroundColor:"#000",position:"absolute", zIndex: -100}} barStyle={{backgroundColor: "#8A8A8A", width:140}}
            >
            
              {/* 曲概要 */}
              <Text style={{marginTop: 12,fontSize: 28,fontWeight: 'bold',textAlign:"center",color: "#fff"}}>{musicList[this.state.cardIndex].musicName}</Text>
              <Text style={{marginTop: 4,fontSize: 16,textAlign:"center",color: "#9D9D9D"}}>{musicList[this.state.cardIndex].artistName}</Text>
              {/* 操作ボタンを囲む */}
              <View style={{flexDirection:'row',justifyContent:'center',marginTop: 20}}>
                {/* 操作ボタン */}
                  <TouchableOpacity style={[styles.buttonSmall,{ marginRight: 12,marginTop:30}]} onPress={() => {
                      this.swipeBack();
                }}>
                  <Image source={require(`${iconPath}reply_24px.png`)} resizeMode={'contain'} style={[{ height: 40, width: 40}]} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,{ marginRight: 16}]} onPress={() => {
                  if(this.state.cardIndex < musicList.length - 1) this.swiper.swipeLeft();
                  // this.swiper.swipeLeft();
                }}>
                  <Image source={require(`${iconPath}close_24px.png`)} resizeMode={'contain'} style={{ height: 48, width: 48 }} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button]} onPress={() => {
                  if(this.state.cardIndex < musicList.length - 1) this.swiper.swipeRight();
                  // this.swiper.swipeRight();
                }}>
                  <Image source={require(`${iconPath}favorite_24px.png`)} resizeMode={'contain'} style={{ height: 48, width: 48 }} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonSmall,{ marginLeft: 12, marginTop:30}]} onPress={() => {
                  this.onStopMusic();
                }}>
                  <Image source={require(`${iconPath}pause_24px.png`)} resizeMode={'contain'} style={{ height: 40, width: 40 }} />
                </TouchableOpacity>
              </View> 
            
          </SwipeablePanel>  
          {/* </TouchableOpacity> */}
        
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={()=> {this.onSwiped()}}
          onSwipedLeft={() => this.swipeLeft()}
          onSwipedRight={() => this.swipeRight()}
          onSwipedTop={() => this.onSwiped()}
          onSwipedBottom={() => this.onSwiped()}

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
  cardTags:{
    position: "absolute",
    bottom: 40,
    left:0,
    
  },
  categoryTags: {
    flexDirection: 'row',
  },
  genreTags: {
    flexDirection: 'row',
    marginTop: 8,
    
  },
  categoryTag: {
    paddingTop: 6,
    paddingLeft: 8,
    paddingRight: 8,
    height: 30,
    backgroundColor: "rgba(106, 53, 160, 0.8)",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    color: "#fff",
    marginRight: 8,
    
  },
  genreTag: {
    paddingTop: 7,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderWidth: 0.5,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    color: "#fff",
    height: 30,
    marginRight: 8,
  },
  infoBtn: {
    position: "absolute",
    right: 0,
    bottom: 50
  }
})


const overlayLabels = {
    // bottom: {
    //   title: 'BLEAH',
    //   style: {
    //     label: {
    //       backgroundColor: 'black',
    //       borderColor: 'black',
    //       color: 'white',
    //       borderWidth: 1
    //     },
    //     wrapper: {
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       justifyContent: 'center'
    //     }
    //   }
    // },
    // left: {
    //   title: 'NOPE',
    //   style: {
    //     label: {
    //       backgroundColor: 'black',
    //       borderColor: 'black',
    //       color: 'white',
    //       borderWidth: 1
    //     },
    //     wrapper: {
    //       flexDirection: 'column',
    //       alignItems: 'flex-end',
    //       justifyContent: 'flex-start',
    //       marginTop: 30,
    //       marginLeft: -30
    //     }
    //   }
    // },
    // right: {
    //   title: 'LIKE',
    //   style: {
    //     label: {
    //       backgroundColor: 'black',
    //       borderColor: 'black',
    //       color: 'white',
    //       borderWidth: 1
    //     },
    //     wrapper: {
    //       flexDirection: 'column',
    //       alignItems: 'flex-start',
    //       justifyContent: 'flex-start',
    //       marginTop: 30,
    //       marginLeft: 30
    //     }
    //   }
    // },
    // top: {
    //   title: 'SUPER LIKE',
    //   style: {
    //     label: {
    //       backgroundColor: 'black',
    //       borderColor: 'black',
    //       color: 'white',
    //       borderWidth: 1
    //     },
    //     wrapper: {
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       justifyContent: 'center'
    //     }
    //   }
    // }
  }