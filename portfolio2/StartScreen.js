import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Stylesheet, Text, View, Button} from 'react-native';

export default function StartScreen () {
    return (
        <View style={Stylesheet.container}>
            <Text>Displayed(undefined) exercises!</Text>
            <StatusBar style="auto"/>
            <Button title="Add some exercises"
            onPress={() =>
                this.props.navigation.navigate('Exercise')
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
