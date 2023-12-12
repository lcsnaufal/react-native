import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchBar from '../searchBar/SearchBar';
import Bullets from '../bullets/Bullets';

export default function Header(){
    return(
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='auto'/>
            <View style={styles.headerTopElements}>
                <Text>Imagem</Text>
                <Text>Esse é um teste</Text>
                <Text>Ícone</Text>
            </View>
            <SearchBar/>
            <Bullets/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'white',
        paddingVertical: 20,
    },
    headerTopElements: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
})