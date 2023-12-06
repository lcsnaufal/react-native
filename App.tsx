import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Card from './src/components/card/Card';
import InputData from './src/components/inputData/InputData';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <Text style={styles.text}>teste !</Text>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <InputData/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "black",
    color: "white",
  },
  safeAreaContainer: {
    flex: 1,
  }
});