import { Text, View, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import bullets from '../../services/bullets';

export default function Bullets(){

    return(
        <View style={styles.bulletView}>
            {bullets.map((item) =>{
                return(
                    <TouchableOpacity style = {styles.touchableBtn}>
                        <Text style = {styles.touchableText}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bulletView: {
        flexDirection: 'row',
    },
    touchableBtn: {
        backgroundColor: '#dcdcdc',
        borderRadius: 45,
        padding: 10,
        marginHorizontal: 5,

    
    },
    touchableText: {
        
    }


})