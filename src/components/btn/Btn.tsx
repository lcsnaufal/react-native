import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Btn(){
    return(
        <View>
            <TouchableOpacity  style={styles.btnStyle}>
                <Text>Botão Teste</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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