import { Audio } from 'expo-av';
const musicList = [
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
  
  {
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
    music: require('./assets/music.mp3'),
    audioObject: new Audio.Sound()
  },
]
