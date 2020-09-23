import React from "react";

import Calc from "../../components/Calc";

export default class CalcWrapper extends React.Component {

    render() {
        return (
            <Calc displayOnTop={false} />
        );
    }
}