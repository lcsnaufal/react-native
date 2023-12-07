import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function Card() {
  return (
    <View >
      <View style={styles.container}>
      <Text style={styles.text}>card teste</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
  
});