import { StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, View } from 'react-native';
import Card from '../../components/card/Card';
import InputData from '../../components/inputData/InputData';
import Btn from '../../components/btn/Btn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { getAllPokemon } from '../../controllers/pokemonController';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Bullets from '../../components/bullets/Bullets';
import Carrossel from '../../components/carrossel/Carrossel';
import ImageFundo from '../../../assets/paisagem.jpg';
import { Image } from 'react-native';

export default function Home() {
    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() =>{
      getAllPokemon().then(setPokemons).catch((err) => {console.log(err)});
    })

    return (
        <ScrollView>
          <View style = {styles.mainView}>
            <Header/>
            <ScrollView horizontal={true}>
              <Bullets/>
            </ScrollView>
            <Carrossel data={pokemons}/>

          </View>
        </ScrollView>
    );
  }
  

  const styles = StyleSheet.create({
    mainView: {
      backgroundColor: 'white',
    },
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


              
            {/* <Text style={styles.text}>teste !</Text> */}
            {/* <InputData/>
            <Btn/>
            <Text>Teste</Text>
            <TouchableOpacity style={styles.btnText} onPress= {() => navigate('Teste')}>
              <Text>Ir para a tela teste</Text>
            </TouchableOpacity>
            <Card data = {pokemons}/> */}
            {/* <Image source={ImageFundo}/> */}