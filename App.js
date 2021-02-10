import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput , Image,ScrollView, FlatList} from 'react-native';

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

export default function App() {

  const renderItem = ({item})=>(<Item title = {item.title} url ={item.url}/>)

  return (
    <View style = {styles.container}>
      <Text style={styles.header}>MyAnimeList</Text>
      {/* <Text style={{alignSelf : "center",marginTop: 20,fontSize: 20,fontWeight: "bold",color : "#FFFFFF"}}> Nome Anime</Text>
      <TextInput
        style={{
          height: 40,
          width : 300,
          borderColor: 'gray',
          alignSelf : "center",
          backgroundColor : "#FFFFFF",
          borderWidth: 2
        }}
      />
      <Text style={{alignSelf : "center",marginTop: 20,fontSize: 20,fontWeight: "bold",color : "#FFFFFF"}}> Link Immagine</Text>
            <TextInput
        style={{
          height: 40,
          width : 300,
          borderColor: 'gray',
          alignSelf : "center",
          backgroundColor : "#FFFFFF",
          borderWidth: 2
        }}
      />
      <Text style={{alignSelf : "center",marginTop: 20,fontSize: 20,fontWeight: "bold",color : "#FFFFFF"}}> Link Wiki</Text>
            <TextInput
        style={{
          height: 40,
          width : 300,
          borderColor: 'gray',
          alignSelf : "center",
          backgroundColor : "#FFFFFF",
          marginBottom : 30,
          borderWidth: 2
        }}
      /> */}

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

const styles = StyleSheet.create({

  container :{
    backgroundColor : "#000000",
    flex : 1,
  },

  header: {
    marginTop: 30,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 1,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    flex :1,
  },

  item: {
    marginTop: 30,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 1,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    flex :1,
  },

scrollBg :{
  marginTop :50,
  backgroundColor :"yellow",
  flex : 18,
}
});
