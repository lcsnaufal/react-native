import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>card teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: 200,
  },
  text: {
    justifyContent: "center",
  }
  
});