import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import designTokens from 'designTokens';
import AppText from './AppText';
import ButtonPanelWrapper from 'ButtonPanelWrapper';
import calculator, {initialState} from '@/util/calculator';

export default class Calc extends React.Component {
  static propTypes = {
    displayOnTop: PropTypes.bool,
  };

  static defaultProps = {
    displayOnTop: true,
  };

  state = initialState;

  handleTap = params => {
    this.setState(state => calculator(params.type, params.value, state));
  };

  render() {
    return (
      <>
        {this.props.displayOnTop && this.renderDisplay()}

        <ButtonPanelWrapper handleTap={this.handleTap} />

        {!this.props.displayOnTop && this.renderDisplay()}
      </>
    );
  }

  renderDisplay() {
    return (
      <AppText style={styles.display}>
        {parseFloat(this.state.currentValue).toLocaleString()}
      </AppText>
    );
  }
}

const styles = StyleSheet.create({
  display: {
    color: designTokens.display.color.text,
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});
