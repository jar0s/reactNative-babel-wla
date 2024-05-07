import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from './AppText';
import ButtonStyles from 'ButtonStyles';

const styles = ButtonStyles;

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
