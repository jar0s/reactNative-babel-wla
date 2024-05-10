import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import AppText from './AppText';
import designTokens from 'designTokens';

export default ({onPress, text, size, theme}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <AppText style={textStyles}>{text}</AppText>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: designTokens.keypad.text.color.primary,
    fontSize: 25,
  },
  textAccent: {
    color: designTokens.keypad.text.color.accent,
  },
  textSecondary: {
    color: designTokens.keypad.text.color.secondary,
  },
  button: {
    backgroundColor: designTokens.keypad.button.background.color.primary,
    flex: 1,
    height: Math.floor(buttonWidth - 15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: designTokens.keypad.button.margin,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: designTokens.keypad.button.background.color.secondary,
  },
  buttonAccent: {
    backgroundColor: designTokens.keypad.button.background.color.accent,
  },
});
