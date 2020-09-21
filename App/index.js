import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import Calc from "./components/Calc";
import MainStyles from "MainStyles";

const styles = MainStyles;

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Calc />
        </SafeAreaView>
      </View>
    );
  }
}
