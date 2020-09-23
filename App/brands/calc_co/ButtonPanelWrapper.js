import React from "react";
import PropTypes from "prop-types";

import ButtonPanel from "../../components/ButtonPanel";

export default class ButtonPanelWrapper extends React.Component {

    static propTypes = {
      handleTap: PropTypes.func.isRequired
    };

    render() {
        const buttonsMatrix = [
            [
                { text: "/", theme: "accent", tapParams: { type: "operator", value: "/" }},
                { text: "X", theme: "accent", tapParams: { type: "operator", value: "*" }},
                { text: "-", theme: "accent", tapParams: { type: "operator", value: "-" }},
                { text: "+", theme: "accent", tapParams: { type: "operator", value: "+" }}
            ],
            [
                { text: "7", tapParams: { type: "number", value: 7 }},
                { text: "8", tapParams: { type: "number", value: 8 }},
                { text: "9", size: "double", tapParams: { type: "number", value: 9 }}
            ],
            [
                { text: "4", size: "double", tapParams: { type: "number", value: 4 }},
                { text: "5", tapParams: { type: "number", value: 5 }},
                { text: "6", tapParams: { type: "number", value: 6 }}
            ],
            [
                { text: "1", tapParams: { type: "number", value: 1 }},
                { text: "2", size: "double", tapParams: { type: "number", value: 2 }},
                { text: "3", tapParams: { type: "number", value: 3 }},
            ],
            [
                { text: "0", size: "double", tapParams: { type: "number", value: 0 }},
                { text: ".", size: "double", tapParams: { type: "number", value: "." }},
            ],
            [
                { text: "C", theme: "secondary", tapParams: { type: "clear" }},
                { text: "+/-", theme: "secondary", tapParams: { type: "posneg" }},
                { text: "%", theme: "secondary", tapParams: { type: "percentage" }},
                { text: "=", theme: "accent", tapParams: { type: "equal" }}
            ]
        ];

        return (
            <ButtonPanel handleTap={this.props.handleTap} buttonsMatrix={buttonsMatrix} />
        );
    }
}