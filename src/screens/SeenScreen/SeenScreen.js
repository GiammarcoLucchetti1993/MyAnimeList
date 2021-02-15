import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View , FlatList,Image,TouchableOpacity} from 'react-native';
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

    const renderItem = ({item})=>(<Item title = {item.title} url ={item.url}/>)

    return (
        <View style = {styles.container}>

            <View style = {{}}>

            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source = {require("../../../assets/icon.png")} style = {{width:50,height:50,marginLeft:10,marginTop:30}}/>
            </TouchableOpacity>
          <Text style={styles.header}>MyAnimeList</Text>

          <TouchableOpacity>
                <Image source = {require("../../../assets/icon.png")} style = {{width:50,height:50,marginLeft:175,marginTop:40}}/>
            </TouchableOpacity>

            </View>

            <View style = {{width:"100%",height:"50%",position:"absolute",elevation:10,backgroundColor:"indigo"}}>

            </View>


    
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