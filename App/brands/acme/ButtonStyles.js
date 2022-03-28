import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default StyleSheet.create({
  text: {
    color: '#fdf6e3',
    fontSize: 25,
  },
  textAccent: {
    color: '#b58900',
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#073642',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#586e75',
  },
});
