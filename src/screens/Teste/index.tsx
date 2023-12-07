import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';


export default function Teste(){
    const { navigate } = useNavigation<NavigationProp<any>>();

    return(
        <View>
        <Text style = {styles.textStyle}>Olá, eu sou uma tela teste</Text>
        <TouchableOpacity style= {styles.btnStyle} onPress={() => navigate('Front')}>
            <Text>Ir para a próxima tela</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red', 
    },
    btnStyle: {
        backgroundColor: 'red',
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
        elevation: 5,
    },
})