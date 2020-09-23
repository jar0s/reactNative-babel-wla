import React from "react";
import PropTypes from "prop-types";

import Row from "./Row";
import Button from "./Button";

export default class ButtonPanel extends React.Component {

    static propTypes = {
        handleTap: PropTypes.func.isRequired,
        buttonsMatrix: PropTypes.array.isRequired
      };

    render() {
      let matrix = this.props.buttonsMatrix;
      let tapHandler = this.props.handleTap;

      return (
        <>
          {matrix.map((row, index) => {
              return <Row key={index}>
                {row.map((button, index) => {
                    return <Button key={index}
                      text={button.text}
                      theme={button.theme || ''}
                      onPress={() => tapHandler(button.tapParams)}
                      size={button.size || ''}
                    />
                })}
              </Row>;
          })}
        </>
      );
    }
}