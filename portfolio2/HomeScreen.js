import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ExerciseScreen from './ExerciseScreen';


class HomeScreen extends React.Component {
  render() {
    return (
        
      <View style={styles.container}>
        <Text style={styles.rectangle}> 
        Welcome to the Workout App!! 
        </Text> 
        <Button 
          title="Add some exercise"
          color="pink"
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
          backgroundColor: "lightblue",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        rectangle: {
            width: 380,
            height: 170,
            backgroundColor: 'beige',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: 10,
            
          },          
      });
      


export default HomeScreen;