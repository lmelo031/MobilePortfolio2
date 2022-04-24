import React from 'react';
import {StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,Button} from 'react-native';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text>Adding</Text>
            <StatusBar style ="auto"/>
            <Button title ="back" onPress={()=>
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