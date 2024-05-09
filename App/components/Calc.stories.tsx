import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Calc from 'CalcWrapper';
import styles from 'MainStyles';

const CalcMeta: Meta<typeof Calc> = {
  title: `Calc: ${process.env.APP_BRAND}`,
  component: Calc,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
};

export default CalcMeta;

export const Calculator: StoryObj<typeof Calc> = {};
