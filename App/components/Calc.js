import React from "react";
import PropTypes from "prop-types";

import AppTextWrapper from "AppTextWrapper";
import ButtonPanelWrapper from "ButtonPanelWrapper";
import calculator, { initialState } from "@/util/calculator";
import DisplayStyles from "DisplayStyles";

const styles = DisplayStyles;

export default class Calc extends React.Component {

    static propTypes = {
      displayOnTop: PropTypes.bool
    };

    static defaultProps = {
      displayOnTop: true
    };

    state = initialState;

    handleTap = (params) => {
        this.setState(state => calculator(params.type, params.value, state));
      };

    render() {
        return (
          <>
          {this.props.displayOnTop && this.renderDisplay()}

          <ButtonPanelWrapper handleTap={this.handleTap}/>

          {!this.props.displayOnTop && this.renderDisplay()}
          </>
        );
    }

    renderDisplay() {
      return (
          <AppTextWrapper style={styles.display}>
              {parseFloat(this.state.currentValue).toLocaleString()}
          </AppTextWrapper>
      );
    }
}