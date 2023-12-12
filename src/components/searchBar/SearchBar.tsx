import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

export default function SearchBar(){

    const [inputValue, setInputValue] = useState('');

    return(
        <View style={styles.searchBarContainer}>
            <TextInput

            style={styles.setText}
            value={inputValue} 
            onChangeText={text => setInputValue(text)}>
                                        
            </TextInput>
            <Text>Ícone</Text>
        </View>
    )
    }

    const styles = StyleSheet.create({
        searchBarContainer: {
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            borderBottomWidth: 1,
            paddingBottom: 10,
        },
        setText: {
            flex:1,
            fontSize: 16,
            backgroundColor: '#dcdcdc',
            elevation: 5,
            borderRadius: 45,
            padding: 10,
            margin: 20,
        },
    })