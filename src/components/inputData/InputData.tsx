import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

export default function InputData(){
    const [inputValue, setInputValue] = useState('');

    return(
        <View>
            <Text> Esse é um teste de input </Text>
            <TextInput
                style = {styles.setText}
                value = {inputValue}
                onChangeText={text => setInputValue(text)}
            >
            </TextInput>

            <Text>{inputValue}</Text>
        </View>
    )
    }

    const styles = StyleSheet.create({
        setText: {
            fontSize: 16,
            backgroundColor: '#dcdcdc',
            elevation: 5,
            borderRadius: 45,
            padding: 10,
        },
        text: {
            fontSize: 25,
        },
    })