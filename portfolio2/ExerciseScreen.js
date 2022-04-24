import React from 'react';
import {Stylesheet, Text, View, Button} from 'react-native';

export default function App() {
    return (
      <View style={Stylesheet.container}>
          <Text>Add Exercises here!</Text>
          <Button title ="Start" onPress={() =>
            this.props.navigation.navigate('Start')
          }
          />
      </View>

      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  