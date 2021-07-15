import React,{useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';
import ListItemDelete from '../components/ListItemDelete';


   
const initialMessages = [
  {
    id:1,
    title :"T1",
    description:"Nanyanzi cate",
    image :require ("../assets/ml.jpg")
   },

   {
    id:2,
    title :"T2",
    description:"Muwonge Lawrence",
    image :require ("../assets/ml.jpg")
   },

   {
    id:3,
    title :"T3",
    description:"Matovu timothy",
    image :require ("../assets/ml.jpg")
   }

];

export default function MessageScreen() {
    const [messages,setMessages] = useState(initialMessages);
    const [refresh, setRefresh] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));  
    };

    return (
        <Screen>
            <FlatList
                    data = {messages}
                    keyExtractor = {message => message.id.toString()}
                    renderItem = {({item}) => 
                        <ListItem
                        title = {item.title}
                        description = {item.description}
                        image = {item.image}
                        onPress = {() => console.log("Message selected",item)}
                        renderRightActions = {() => 
                        <ListItemDelete
                           onPress = {() => handleDelete(item)}
                        />
                         }
                        />
                    }
                  ItemSeparatorComponent = {ListItemSeparator}
                  refreshing = {refresh}
                  onRefresh = {() => {
                    setMessages([{
                      id:3,
                      title :"T3",
                      description:"Matovu timothy",
                      image :require ("../assets/ml.jpg")
                     }]) 
                }}
            />
       </Screen>
    );
}

const styles = StyleSheet.create({

});
