import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class AppTextWrapper extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[styles.myAppText, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  myAppText: {
    fontFamily: 'Ubuntu',
  },
});
