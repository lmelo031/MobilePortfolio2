import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function ExerciseScreen() {
    return(
        <View style={StyleSheet.container}>
            <Text>Adding Exercises here!</Text>
            <StatusBar style="auto"/>
            <Button title="Back to Start"
            onPress={() =>
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
