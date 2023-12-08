import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = {
  data: Pokemon[];
} & TouchableOpacityProps

export default function Card({data, ...rest} : Props) {
  return (
    <View>

      {data.map((item) =>{
        return(
          <View style={styles.container}>
            <Text>{item.name}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',
    margin: 20,
  },
  text: {
    backgroundColor: 'black',
    color: '#fff'
  },
  bottomFix: {
    marginBottom: 200,
  },
});