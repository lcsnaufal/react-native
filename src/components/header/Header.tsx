import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../searchBar/SearchBar';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


export default function Header(){
    return(
        <SafeAreaView style={styles.headerView}>
            <StatusBar style='auto'/>
            <View style={styles.headerTopElements}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
                {/* <Text>Esse é um teste</Text> */}
                <FontAwesome5 name="bell" size={24} color="black" />
            </View>
            <SearchBar/>
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