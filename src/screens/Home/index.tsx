import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../../components/card/Card';
import InputData from '../../components/inputData/InputData';
import Btn from '../../components/btn/Btn';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Home() {
    const { navigate } = useNavigation<NavigationProp<any>>();

    return (
        <ScrollView>
          <Text style={styles.text}>teste !</Text>
          <Card/>
          <Card/>
          <InputData/>
          <Btn/>
          <Text></Text>
          <Card/>
          <TouchableOpacity style={styles.btnText} onPress= {() => navigate('Teste')}>
            <Text>Ir para a tela teste</Text>
          </TouchableOpacity>
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