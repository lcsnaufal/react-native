import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Home from './src/screens/Home/index'
import Teste from './src/screens/Teste';
import Front from './src/screens/Front';


type StackNavigatorParamsList = {
  Home: undefined;
  Teste: undefined;
  Front: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='Teste' component={Teste} />
        <Stack.Screen name='Front' component={Front} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})