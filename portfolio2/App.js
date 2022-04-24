
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ExerciseScreen from './ExerciseScreen';
// import emoji from './emoji.svg';
// import image from './assets/imageexercise';


const Stack = createStackNavigator();

 function Icons() {
    return(
      <div className="icons">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </div>
    );
}
function Image() {
      return (
          <div>
              <section className="exercise logo">
                  <img src={image.exercise.jpeg} />
              </section>
          </div>
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