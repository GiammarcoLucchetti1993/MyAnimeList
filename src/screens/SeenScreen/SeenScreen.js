import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Text, View , FlatList,Image,TouchableOpacity, Button, TextInput, } from 'react-native';
import styles from "./styles";

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      url : "ciao",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      url : "ciao",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      url : "ciao",
    },
  ];
  const Item = ({ title, url}) => (
    <View>
      <Text style={styles.item}>{title} {url}</Text>
    </View>
  );

export default function SeenScreen({navigation}){

  var moveAnimation = new Animated.ValueXY({ x: 0, y: -500 })

  const slideIn = () => {
    Animated.spring(moveAnimation, {
      toValue: {x: 0, y: 0},
    }).start()
  };

  const slideOut = () => {
    Animated.spring(moveAnimation, {
      toValue: {x: 0, y: -500},
    }).start()
  };
  
    const renderItem = ({item})=>(<Item title = {item.title} url ={item.url}/>)
    const [text, onChangeText] = React.useState('...');

    return (
        <View style = {styles.container}>

            <View style = {{}}>

            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source = {require("../../../assets/icon.png")} style = {{width:50,height:50,marginLeft:10,marginTop:30}}/>
            </TouchableOpacity>
          
            <Text style={styles.header}>MyAnimeList</Text>

            <TouchableOpacity onPress={slideIn}>
                  <Image source = {require("../../../assets/icon.png")} style = {{width:50,height:50,marginLeft:175,marginTop:40}}/>
              </TouchableOpacity>
            </View>

            <Animated.View style = {{width:"100%",height:"50%",position:"absolute", elevation:10,backgroundColor:"indigo", top: moveAnimation.y}}>
              
              <Button title="goback" onPress={slideOut}/>
              
              <Text style={{marginTop: 5, marginBottom: 5}}>inserisci il nome</Text>
              <TextInput
               style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:"green" }}
                onChangeText={text => onChangeText(text)}
                defaultValue={text}
              />

              
              
              <Text style={{marginTop: 5, marginBottom: 5}}>inserisci l'url dell'immagine</Text>
              <TextInput
               style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:"green" }}
                onChangeText={text => onChangeText(text)}
                defaultValue={text}
              />

              <Text style={{marginTop: 5, marginBottom: 5}}>inserisci l'url dell'sito o della pagina wiki</Text>
              <TextInput
               style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor:"green" }}
                onChangeText={text => onChangeText(text)}
                defaultValue={text}
              />
              <TouchableOpacity style={{
                alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10,
                marginTop: 25,
              }}>
                 <Text> Submit </Text>
              </TouchableOpacity>
            </Animated.View>


    
          <View style={styles.scrollBg}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item)=>item.id}
                            removeClippedSubviews={true}
                        />
                </View>
        </View>
    );

}