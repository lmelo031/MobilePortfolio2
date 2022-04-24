import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import HomeScreen from './HomeScreen';

class ExerciseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Exercise here!</Text>
        <Button
          title="Back to home"
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
    },
  });



export default ExerciseScreen;
