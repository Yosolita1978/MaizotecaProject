import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component<Props> {
  state = {
    foodName: "",
    foods: []
  };

  foodNameChangeHandler = value => {
    this.setState({
      foodName: value
      });
  };

  foodSubmitHandler = () => {
    if (this.state.foodName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        foods: prevState.foods.concat(prevState.foodName)
      };
    });
  };

  render() {
    const foodsOutput = this.state.foods.map((food, i) => (
      <ListItem key={i} foodName={food} />
    ));

    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={this.state.foodName}
        placeholder="What are you eating?"
        underlineColorAndroid = "#c66629"
        onChangeText={this.foodNameChangeHandler}
        style={styles.foodInput}/>
        <Button title="Submit"
        style={styles.buttonInput}
        color="#838a2d"
        onPress={this.foodSubmitHandler}/>
      </View>
      <View style={styles.listContainer}>{foodsOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    textDecorationLine: "underline"
  },
  inputContainer:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  foodInput: {
    width: "70%"
  },
  buttonInput: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
