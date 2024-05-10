import React from 'react';
import PropTypes from 'prop-types';

import ButtonPanel from '../../components/ButtonPanel';
import translations from 'translations';

export default class ButtonPanelWrapper extends React.Component {
  static propTypes = {
    handleTap: PropTypes.func.isRequired,
  };

  render() {
    const buttonsMatrix = [
      [
        {text: translations['symbol.cancel'], theme: 'secondary', tapParams: {type: 'clear'}},
        {text: translations['symbol.positivenegative'], theme: 'secondary', tapParams: {type: 'posneg'}},
        {text: translations['symbol.percent'], theme: 'secondary', tapParams: {type: 'percentage'}},
        {text: translations['symbol.divide'], theme: 'accent', tapParams: {type: 'operator', value: '/'}},
      ],
      [
        {text: translations['number.seven'], tapParams: {type: 'number', value: 7}},
        {text: translations['number.eight'], tapParams: {type: 'number', value: 8}},
        {text: translations['number.nine'], tapParams: {type: 'number', value: 9}},
        {text: translations['symbol.multiply'], theme: 'accent', tapParams: {type: 'operator', value: '*'}},
      ],
      [
        {text: translations['number.four'], tapParams: {type: 'number', value: 4}},
        {text: translations['number.five'], tapParams: {type: 'number', value: 5}},
        {text: translations['number.six'], tapParams: {type: 'number', value: 6}},
        {text: translations['symbol.minus'], theme: 'accent', tapParams: {type: 'operator', value: '-'}},
      ],
      [
        {text: translations['number.one'], tapParams: {type: 'number', value: 1}},
        {text: translations['number.two'], tapParams: {type: 'number', value: 2}},
        {text: translations['number.three'], tapParams: {type: 'number', value: 3}},
        {text: translations['symbol.plus'], theme: 'accent', tapParams: {type: 'operator', value: '+'}},
      ],
      [
        {text: translations['number.zero'], size: 'double', tapParams: {type: 'number', value: 0}},
        {text: translations['symbol.dot'], tapParams: {type: 'number', value: '.'}},
        {text: translations['symbol.equals'], theme: 'accent', tapParams: {type: 'equal'}},
      ],
    ];

    return (
      <ButtonPanel
        handleTap={this.props.handleTap}
        buttonsMatrix={buttonsMatrix}
      />
    );
  }
}
