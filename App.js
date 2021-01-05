import React, { Component } from 'react';
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
      isPanelActive: true
    }
  }

  play = async ()=> {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(require('./assets/music.mp3'));
    await soundObject.playAsync();
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        {/* <Image source={require('./assets/1.jpg')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
        {/* {this.play()} */}
        <Text>{card.artistName + card.musicName}</Text>
        {card.categories.map(category => {
          return (<Text>{category.name}</Text>)
        })}
        {card.genres.map(genre => {
          return (<Text>{genre.name}</Text>)
        })}
      </View>
    )
  };

  onSwiped = (type) => {
    if(this.state.cardIndex !== musicList.length) { // index番号が音楽の数を超えないように
      this.setState({
        cardIndex: this.state.cardIndex++
      });
    }
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  closePanel = () => {
    this.state.isPanelActive = false;
  };


  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color: 'white'}}>曲を探す</Text>
            <Text style={styles.headerRightTop}>ハート</Text>
        </View>

        <SwipeablePanel {...this.state.panelProps} isActive={this.state.isPanelActive} noBackgroundOpacity={true} showCloseButton={false} openLarge={false}>
          <View style={styles.footer}>
            {/* 曲概要 */}
            <Text style={{fontSize: 32,textAlign:"center"}}>{musicList[this.state.cardIndex].musicName}</Text>
            <Text style={{textAlign:"center"}}>{musicList[this.state.cardIndex].artistName}</Text>

            {/* 操作ボタン */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
            }}>
              <Image source={require('./assets/1.jpg')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            }}>
              <Image source={require('./assets/1.jpg')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
            }}>
              <Image source={require('./assets/1.jpg')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
            </TouchableOpacity>
          </View>
          
        </View> 
      </SwipeablePanel>  
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={overlayLabels}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
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
    paddingTop: 30
  },
  headerRightTop: {
    color: "#fff",
    position: "absolute",
    top: 50,
    right: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
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