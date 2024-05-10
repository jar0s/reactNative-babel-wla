import {StyleSheet} from 'react-native';
import designTokens from '../util/designTokenProvider';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designTokens.app.color.background,
    justifyContent: designTokens.app.content.justify,
  },
  myAppText: {
    fontFamily: designTokens.app.font.family,
  },
});
