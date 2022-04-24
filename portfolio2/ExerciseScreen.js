import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

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

// ...

export default ExerciseScreen;
