import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import HomeScreen from './HomeScreen';

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ADD EXERCISE HERE!</Text>
        <div className="Exercise">
        <input type="checkbox"/>Leg
        </div>
        <Button
          title="Back to Home"
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
  });



export default ExerciseScreen;
