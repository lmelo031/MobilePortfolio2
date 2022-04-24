import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have (undefined) exercise.</Text>
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

// ...

export default HomeScreen;