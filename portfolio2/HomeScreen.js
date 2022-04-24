import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ExerciseScreen from './ExerciseScreen';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WELCOME!!</Text>
        <Text>TO THE EXERCISE APP</Text>
        <Button
          title="Add some exercise"
          onPress={() =>
            this.props.navigation.navigate('Exercise')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'beige',
      aligntext: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });


export default HomeScreen;