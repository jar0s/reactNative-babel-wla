import React from 'react';
import PropTypes from 'prop-types';

import ButtonPanel from '../../components/ButtonPanel';

export default class ButtonPanelWrapper extends React.Component {
  static propTypes = {
    handleTap: PropTypes.func.isRequired,
  };

  render() {
    const buttonsMatrix = [
      [
        {text: 'C', theme: 'secondary', tapParams: {type: 'clear'}},
        {text: '+/-', theme: 'secondary', tapParams: {type: 'posneg'}},
        {text: '%', theme: 'secondary', tapParams: {type: 'percentage'}},
        {text: '/', theme: 'accent', tapParams: {type: 'operator', value: '/'}},,
      ],
      [
        {text: 'VII', tapParams: {type: 'number', value: 7}},
        {text: 'VIII', tapParams: {type: 'number', value: 8}},
        {text: 'IX', tapParams: {type: 'number', value: 9}},
        {text: '*', theme: 'accent', tapParams: {type: 'operator', value: '*'}},,
      ],
      [
        {text: 'IV', tapParams: {type: 'number', value: 4}},
        {text: 'V', tapParams: {type: 'number', value: 5}},
        {text: 'VI', tapParams: {type: 'number', value: 6}},
        {text: '-', theme: 'accent', tapParams: {type: 'operator', value: '-'}},,
      ],
      [
        {text: 'I', tapParams: {type: 'number', value: 1}},
        {text: 'II', tapParams: {type: 'number', value: 2}},
        {text: 'III', tapParams: {type: 'number', value: 3}},
        {text: '+', theme: 'accent', tapParams: {type: 'operator', value: '+'}},,
      ],
      [
        {text: 'N', size: 'double', tapParams: {type: 'number', value: 0}},
        {text: '.', tapParams: {type: 'number', value: '.'}},
        {text: '=', theme: 'accent', tapParams: {type: 'equal'}},,
      ],,
    ];

    return (
      <ButtonPanel
        handleTap={this.props.handleTap}
        buttonsMatrix={buttonsMatrix}
      />
    );
  }
}
