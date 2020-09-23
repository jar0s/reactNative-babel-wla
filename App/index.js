import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import CalcWrapper from "CalcWrapper";
import MainStyles from "MainStyles";

const styles = MainStyles;

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <CalcWrapper />
        </SafeAreaView>
      </View>
    );
  }
}
