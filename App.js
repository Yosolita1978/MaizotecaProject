import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component<Props> {

  state = {
    foodName: ''
  };

  foodNameChangeHandler = value => {
    this.setState({
      foodName: value
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.foodName}
        placeholder="What are you eating?"
        onChangeText={this.foodNameChangeHandler}
        style={{width: 300, borderColor: "black", borderWidth: 1}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
