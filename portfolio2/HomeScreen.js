import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ExerciseScreen from './ExerciseScreen';


class HomeScreen extends React.Component {
  render() {
    return (
        
      <View style={styles.container}>
        <Text style={styles.title}> Hello Square </Text>
        <Button 
          title="Add some exercise"
          color="pink"
          onPress={() =>
            this.props.navigation.navigate('Exercise')
          }
    
        />
      </View>
    );
  }
}

    const styles = StyleSheet.create({
        container: {
          backgroundColor: "#7CA1B4",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        square: {
          backgroundColor: "#7cb48f",
          width: 350,
          height: 200,
          margin: 4,
        },
        title: {
            backgroundColor: "lightpink",
            width: 100,
            height: 100,
            margin: 4,
          },
          
      });
      


export default HomeScreen;