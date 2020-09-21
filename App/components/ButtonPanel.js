import React from "react";
import PropTypes from "prop-types";

import Row from "./Row";
import Button from "./Button";

export default class ButtonPanel extends React.Component {

    static propTypes = {
        handleTap: PropTypes.func,
      };

    render() {
        return (
          <>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.props.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.props.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.props.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.props.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.props.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.props.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.props.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.props.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.props.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.props.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.props.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.props.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.props.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.props.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.props.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.props.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.props.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.props.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.props.handleTap("equal")}
            />
          </Row>
          </>
        );
    }
}