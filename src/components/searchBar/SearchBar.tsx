import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 

export default function SearchBar(){

    const [inputValue, setInputValue] = useState('');

    return(
        <View style={styles.searchBarContainer}>
            <TextInput
            style={styles.setText}
            value={inputValue} 
            onChangeText={text => setInputValue(text)}>         
            </TextInput>
            <Entypo name="magnifying-glass" size={24} color="black"  style = {styles.icon}/>
        </View>
    )
    }

    const styles = StyleSheet.create({
        searchBarContainer: {
            flex: 1,
            backgroundColor: '#dcdcdc',
            flexDirection: 'row',
            marginTop: 15,
            borderRadius: 45,
            marginHorizontal: 20,
            elevation: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        setText: {
            flex: 1,
            fontSize: 16,
            backgroundColor: '#dcdcdc',
            borderRadius: 45,
            padding: 10,
        },
        icon: {
            paddingRight: 20,
        }
    })