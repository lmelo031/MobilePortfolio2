import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import HomeScreen from './HomeScreen';

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.rectangle}> 
        Add exercises here!!  
        <div className="Exercise">
        <input type="checkbox"/>Leg
        </div>
        </Text> 
        <Button
          title="Back to Home"
          color="pink"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    rectangle: {
        width: 380,
        height: 170,
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 40,
        fontSize: 22,
        fontFamily: "Times new roman",
        
      },    
  });



export default ExerciseScreen;
