import React from "react";
import { Text } from "react-native";

import ButtonPanel from "./ButtonPanel";
import calculator, { initialState } from "../util/calculator";
import DisplayStyles from "DisplayStyles";

const styles = DisplayStyles;

export default class Calc extends React.Component {
    state = initialState;

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
      };

    render() {
        return (
          <>
          <Text style={styles.display}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <ButtonPanel handleTap={this.handleTap}/>
          </>
        );
    }
}