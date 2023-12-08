import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import Card from '../../components/card/Card';
import InputData from '../../components/inputData/InputData';
import Btn from '../../components/btn/Btn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { getAllPokemon } from '../../controllers/pokemonController';
import { useState, useEffect } from 'react';

export default function Home() {
    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() =>{
      getAllPokemon().then(setPokemons).catch((err) => {console.log(err)});
    })

    return (
        <ScrollView>
          <Text style={styles.text}>teste !</Text>
          <InputData/>
          <Btn/>
          <Text></Text>
          <TouchableOpacity style={styles.btnText} onPress= {() => navigate('Teste')}>
            <Text>Ir para a tela teste</Text>
          </TouchableOpacity>
          <Card data = {pokemons}/>
        </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      backgroundColor: "black",
      color: "white",
    },
    btnText: {
        backgroundColor: 'red',
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        elevation: 5,

    },
  });