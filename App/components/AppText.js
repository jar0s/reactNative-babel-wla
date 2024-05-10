import React from 'react';
import {Text} from 'react-native';
import styles from './MainStyles';

export default class AppText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, styles.myAppText]}>
        {this.props.children}
      </Text>
    );
  }
}
