import {StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

export default StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textAccent: {
    color: '#fff',
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 15),
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
    backgroundColor: '#f09a36',
  },
});
