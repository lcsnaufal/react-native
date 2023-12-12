import { Text, View, FlatList } from 'react-native';
import bullets from '../../services/bullets';

export default function Bullets(){

    // interface MeuItem {
    //     id: string;
    //     texto: string;
    // }

    // const data = [
    //     { id: '1', texto: 'Teste Pilula'}
    // ];

    // const renderItem = ({ item: MeuItem }) => (
    //     <View>
    //         <Text>{item.texto}</Text>
    //     </View>
    // )

    return(
        <View>
            {bullets.map((item) =>{
                return(
                <Text>{item.name}</Text>
                )
            })}
        </View>
    );
}