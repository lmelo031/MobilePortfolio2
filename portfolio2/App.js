
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ExerciseScreen from './ExerciseScreen';

const Stack = createStackNavigator();
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
      <Stack.Screen
            name="Exercise"
            component={ExerciseScreen}
          />

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;