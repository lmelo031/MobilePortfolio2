import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import HomeScreen from './HomeScreen';

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ADD EXERCISE HERE!</Text>
        <Button
          title="leg"
          onPress={() =>
            this.props.navigation.navigate('')
            
          }
        />
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
      backgroundColor: 'beige',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  });



export default ExerciseScreen;
